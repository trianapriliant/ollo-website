"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslations } from "@/lib/translations";
import type { Review, ReviewsResponse } from "@/app/api/reviews/route";
import styles from "./Testimonials.module.css";

// ─── Avatar color palette ─────────────────────────────────────────────────────
const AVATAR_COLORS = [
  { bg: "#E0F7F4", text: "#00897B" },
  { bg: "#E8F5E9", text: "#2E7D32" },
  { bg: "#E3F2FD", text: "#1565C0" },
  { bg: "#F3E5F5", text: "#7B1FA2" },
  { bg: "#FFF3E0", text: "#E65100" },
  { bg: "#FCE4EC", text: "#AD1457" },
  { bg: "#E8EAF6", text: "#283593" },
  { bg: "#F1F8E9", text: "#558B2F" },
];

function getAvatarColor(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}

function formatDate(iso: string, language: string): string {
  try {
    return new Intl.DateTimeFormat(language === "id" ? "id-ID" : "en-US", {
      month: "short",
      year: "numeric",
    }).format(new Date(iso));
  } catch {
    return "";
  }
}

// ─── Stars ────────────────────────────────────────────────────────────────────
function Stars({ count }: { count: number }) {
  return (
    <div className={styles.stars} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={i < count ? styles.starFilled : styles.starEmpty}
        >
          ★
        </span>
      ))}
    </div>
  );
}

// ─── Google Play Mini Icon ────────────────────────────────────────────────────
function GooglePlayMini() {
  return (
    <svg viewBox="0 0 24 24" width={12} height={12} aria-hidden="true">
      <path
        d="M2.8 1.4l10.1 10.1 4.5-4.5L6.6 1C5.8.6 3.9.5 2.8 1.4z"
        fill="#34A853"
      />
      <path
        d="M2.8 21.6l10.1-10.1 4.5 4.5-10.7 6c-.8.5-2.7.6-3.8-.4z"
        fill="#F44336"
      />
      <path
        d="M12.9 11.5l4.5 4.5 2.9-1.6c.8-.5.8-1.7 0-2.2l-2.9-1.6-4.5-4.6z"
        fill="#FFC107"
      />
      <path
        d="M2.8 1.4C2.5 1.1 2 1.3 2 1.9v20.3c0 .5.5.8.8.4l10.1-10.1-10.1-11.1z"
        fill="#4285F4"
      />
    </svg>
  );
}

// ─── Review Card ──────────────────────────────────────────────────────────────
function ReviewCard({
  review,
  language,
}: {
  review: Review;
  language: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const avatarColor = getAvatarColor(review.author);
  const initials = getInitials(review.author);
  const date = formatDate(review.date, language);
  const MAX_LEN = 160;
  const isLong = review.text.length > MAX_LEN;
  const displayText =
    isLong && !expanded
      ? review.text.slice(0, MAX_LEN).trimEnd() + "…"
      : review.text;

  return (
    <div className={styles.card}>
      {/* Header */}
      <div className={styles.cardHeader}>
        <Stars count={review.rating} />
        <span className={styles.playBadge}>
          <GooglePlayMini />
          Google Play
        </span>
      </div>

      {/* Quote icon */}
      <svg
        className={styles.quoteIcon}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>

      {/* Review text */}
      <p className={`${styles.reviewText} ${expanded ? styles.expanded : ""}`}>
        {displayText}
      </p>
      {isLong && (
        <button
          className={styles.expandBtn}
          onClick={() => setExpanded((v) => !v)}
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}

      {/* Footer */}
      <div className={styles.cardFooter}>
        <div
          className={styles.avatar}
          style={{ backgroundColor: avatarColor.bg, color: avatarColor.text }}
        >
          {initials}
        </div>
        <div className={styles.authorMeta}>
          <span className={styles.authorName}>{review.author}</span>
          {date && <span className={styles.reviewDate}>{date}</span>}
        </div>
      </div>
    </div>
  );
}

// ─── Skeleton Card ────────────────────────────────────────────────────────────
function SkeletonCard() {
  return (
    <div className={styles.card}>
      <div className={styles.skeletonStars} />
      <div className={styles.skeletonLine} style={{ width: "100%" }} />
      <div className={styles.skeletonLine} style={{ width: "85%" }} />
      <div className={styles.skeletonLine} style={{ width: "70%" }} />
      <div className={styles.skeletonFooter}>
        <div className={styles.skeletonAvatar} />
        <div className={styles.skeletonMeta}>
          <div className={styles.skeletonLine} style={{ width: "100px" }} />
          <div
            className={styles.skeletonLine}
            style={{ width: "60px", height: "10px" }}
          />
        </div>
      </div>
    </div>
  );
}

// ─── Marquee Row ──────────────────────────────────────────────────────────────
function MarqueeRow({
  reviews,
  direction,
  language,
}: {
  reviews: Review[];
  direction: "left" | "right";
  language: string;
}) {
  // Duplicate 3x for seamless infinite scroll on any screen width
  const items = [...reviews, ...reviews, ...reviews];

  return (
    <div className={styles.marqueeWrapper}>
      <div
        className={`${styles.marqueeTrack} ${direction === "left" ? styles.trackLeft : styles.trackRight
          }`}
      >
        {items.map((review, i) => (
          <ReviewCard
            key={`${review.id}-${i}`}
            review={review}
            language={language}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Skeleton Marquee Row ─────────────────────────────────────────────────────
function SkeletonMarqueeRow({ direction }: { direction: "left" | "right" }) {
  return (
    <div className={styles.marqueeWrapper}>
      <div
        className={`${styles.marqueeTrack} ${direction === "left" ? styles.trackLeft : styles.trackRight
          }`}
        style={{ animationPlayState: "paused" }}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
}

// ─── Average Rating Stars ─────────────────────────────────────────────────────
function RatingDisplay({ avg }: { avg: number }) {
  const full = Math.floor(avg);
  const half = avg - full >= 0.5;
  return (
    <span className={styles.ratingStars}>
      {Array.from({ length: 5 }).map((_, i) => {
        if (i < full)
          return (
            <span key={i} className={styles.starFilled}>
              ★
            </span>
          );
        if (i === full && half)
          return (
            <span key={i} className={styles.starHalf}>
              ★
            </span>
          );
        return (
          <span key={i} className={styles.starEmpty}>
            ★
          </span>
        );
      })}
    </span>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Testimonials() {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const tl = t.testimonials;

  const [data, setData] = useState<ReviewsResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => res.json())
      .then((json: ReviewsResponse) => setData(json))
      .catch(() =>
        setData({
          reviews: [],
          featuredReviewCount: 0,
          totalRatings: 0,
          avgRating: 0,
          error: "Failed",
        }),
      )
      .finally(() => setLoading(false));
  }, []);

  const totalRatings =
    Number(process.env.NEXT_PUBLIC_GOOGLE_PLAY_TOTAL_RATINGS ?? "0") ||
    data?.totalRatings ||
    0;
  const statsLabel =
    (Number(process.env.NEXT_PUBLIC_GOOGLE_PLAY_TOTAL_RATINGS ?? "0") > 0 || (data?.totalRatings ?? 0) > 0)
      ? tl.totalRatings
      : tl.featuredReviews;

  // Hide section entirely if no reviews and not loading
  if (!loading && (!data || data.reviews.length === 0)) return null;

  const PLAY_STORE_URL = `https://play.google.com/store/apps/details?id=${process.env.NEXT_PUBLIC_GOOGLE_PLAY_PACKAGE_NAME ?? "com.ollo.ollo"
    }`;

  // Split reviews into two rows
  const reviews = data?.reviews ?? [];
  const rawStatsCount =
    (Number(process.env.NEXT_PUBLIC_GOOGLE_PLAY_TOTAL_RATINGS ?? "0") > 0 || (data?.totalRatings ?? 0) > 0)
      ? totalRatings
      : data?.featuredReviewCount || reviews.length;

  const statsCount = rawStatsCount >= 5000 ? "5k" : rawStatsCount.toString();

  const mid = Math.ceil(reviews.length / 2);
  const row1 = reviews.slice(0, mid);
  const row2 = reviews.slice(mid);

  // Ensure both rows have enough items for the marquee (min 4 per row)
  const fillRow = (row: Review[], all: Review[]) => {
    if (row.length === 0) return all.length > 0 ? all : [];
    while (row.length < 4) row = [...row, ...row];
    return row;
  };

  const filledRow1 = fillRow([...row1], reviews);
  const filledRow2 = fillRow([...row2], reviews);

  return (
    <section className={styles.section}>
      {/* Decorative blobs */}
      <div className={styles.blobLeft} aria-hidden="true" />
      <div className={styles.blobRight} aria-hidden="true" />

      {/* Section Header */}
      <div className={styles.header}>
        <span className={styles.sectionLabel}>
          <span className={styles.labelStar}>★</span>
          {tl.label}
        </span>
        <h2 className={styles.title}>
          {tl.title1}&nbsp;
          <span className={styles.gradient}>{tl.title2}</span>
        </h2>
        <p className={styles.subtitle}>{tl.subtitle}</p>

        {/* Stats bar */}
        {!loading && data && data.avgRating > 0 && (
          <div className={styles.statsBar}>
            <RatingDisplay avg={data.avgRating} />
            <span className={styles.avgNumber}>
              {data.avgRating.toFixed(1)}
            </span>
            <span className={styles.statsDivider}>·</span>
            <span className={styles.totalText}>
              {statsCount}+ {statsLabel}
            </span>
          </div>
        )}
      </div>

      {/* Marquee Rows */}
      <div className={styles.marqueeSection}>
        {loading ? (
          <>
            <SkeletonMarqueeRow direction="right" />
            <SkeletonMarqueeRow direction="left" />
          </>
        ) : (
          <>
            {filledRow1.length > 0 && (
              <MarqueeRow
                reviews={filledRow1}
                direction="right"
                language={language}
              />
            )}
            {filledRow2.length > 0 && (
              <MarqueeRow
                reviews={filledRow2}
                direction="left"
                language={language}
              />
            )}
          </>
        )}
      </div>

      {/* Footer CTA */}
      {!loading && data && data.reviews.length > 0 && (
        <div className={styles.footer}>
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.playStoreLink}
          >
            <GooglePlayMini />
            {tl.viewOnPlayStore}
            <svg
              viewBox="0 0 24 24"
              width={14}
              height={14}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      )}
    </section>
  );
}
