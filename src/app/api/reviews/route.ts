import { NextResponse } from "next/server";
import gplay from "google-play-scraper";

// ISR: revalidate every 6 hours
export const revalidate = 21600;

// ─── Filter Config ───────────────────────────────────────────────────────────
const MIN_RATING = 4; // Only show 4★ and 5★ reviews
const DISPLAY_MAX = 48; // How many to expose to the frontend

// ─── Types ───────────────────────────────────────────────────────────────────
export type Review = {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string; // ISO 8601
  language: string; // e.g. "id", "en"
};

export type ReviewsResponse = {
  reviews: Review[];
  featuredReviewCount: number; // total filtered count (before DISPLAY_MAX slice)
  totalRatings: number; // total Play Store ratings shown in UI stats
  avgRating: number; // average Play Store rating shown in UI stats
  error?: string;
};

// ─── Helpers ─────────────────────────────────────────────────────────────────
function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function hasMeaningfulText(text: string | null | undefined): boolean {
  return (text ?? "").trim().length > 0;
}

interface ScraperReview {
  id?: string;
  userName?: string;
  score?: number;
  text?: string;
  date?: string | number | Date;
}

interface ScraperReviewsResult {
  data: ScraperReview[];
}

interface GPlayScraper {
  reviews: (options: { appId: string; sort: number; num: number }) => Promise<ScraperReviewsResult>;
  sort: {
    NEWEST: number;
  };
}

// ─── Route Handler ───────────────────────────────────────────────────────────
export async function GET() {
  const packageName = process.env.GOOGLE_PLAY_PACKAGE_NAME || "com.ollo.ollo";

  try {
    // Fetch reviews using google-play-scraper
    // This library scrapes the public Play Store page, so it's not limited to 1 week.
    const scraperReviews = await (gplay as unknown as GPlayScraper).reviews({
      appId: packageName,
      sort: (gplay as unknown as GPlayScraper).sort.NEWEST,
      num: 100, // Fetch up to 100 reviews
    });

    const totalRatings = Number(process.env.GOOGLE_PLAY_TOTAL_RATINGS ?? 5000);
    const configuredAvgRating = Number(process.env.GOOGLE_PLAY_AVG_RATING ?? 4.9);

    // ── Filter & Map ──────────────────────────────────────────────────────
    const filtered: Review[] = scraperReviews.data
      .map((rev: ScraperReview) => {
        const rating = rev.score ?? 0;
        const text = (rev.text ?? "").trim();

        if (rating < MIN_RATING || !hasMeaningfulText(text)) return null;

        return {
          id: rev.id || crypto.randomUUID(),
          author: (rev.userName || "Anonymous").trim(),
          rating,
          text,
          date: rev.date ? new Date(rev.date).toISOString() : new Date().toISOString(),
          language: "id", // Scraper doesn't always provide language reliably, defaulting to 'id' or detecting would be complex
        };
      })
      .filter((review: Review | null): review is Review => Boolean(review));

    // ── Sort: 5★ first (shuffled within each tier), then 4★ ──────────────
    const fiveStars = shuffleArray(filtered.filter((r) => r.rating === 5));
    const fourStars = shuffleArray(filtered.filter((r) => r.rating === 4));
    const sorted = [...fiveStars, ...fourStars];

    const result = sorted.slice(0, DISPLAY_MAX);

    const filteredAvgRating =
      filtered.length > 0
        ? Math.round(
          (filtered.reduce((sum, r) => sum + r.rating, 0) / filtered.length) *
          10,
        ) / 10
        : 0;

    const avgRating =
      configuredAvgRating > 0 ? configuredAvgRating : filteredAvgRating;

    return NextResponse.json<ReviewsResponse>(
      {
        reviews: result,
        featuredReviewCount: filtered.length,
        totalRatings,
        avgRating,
      },
      {
        headers: {
          // CDN cache for 6 h, stale-while-revalidate for 24 h
          "Cache-Control":
            "public, s-maxage=21600, stale-while-revalidate=86400",
        },
      },
    );
  } catch (err) {
    console.error("[Reviews API] Failed to fetch reviews:", err);
    return NextResponse.json<ReviewsResponse>(
      {
        reviews: [],
        featuredReviewCount: 0,
        totalRatings: 0,
        avgRating: 0,
        error: "Failed to fetch reviews",
      },
      { status: 500 },
    );
  }
}
