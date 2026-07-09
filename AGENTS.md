# Ollo-Profile — Agent Instructions

## Project Overview

**Ollo-Profile** adalah website landing page untuk aplikasi Ollo (personal finance management).

- **Path**: `/Users/trian/Projects/Ollo-Profile`
- **Tech Stack**: Next.js 16.1.1, React 19.2.3, TypeScript, CSS Modules
- **Domain**: ollowithyou.xyz
- **Deployment**: Vercel (auto-deploy dari branch main)
- **App Version**: 1.4.3+140

## Context Files

- `Agent/CONTEXT.md` — Konteks lengkap project + riwayat update + posisi terakhir
- `DIFF_PATCH.md` — Diff patch dari analisis codebase Ollo (referensi)
- `REFERENCE_CHANGELOG.md` — Changelog Ollo app (ground truth)
- `REFERENCE_BLUEPRINT.md` — Arsitektur Ollo app
- `REFERENCE_ANALYSIS.md` — Analisis tech stack Ollo app

**Baca `Agent/CONTEXT.md` dulu sebelum mulai kerja.**

## Struktur Project

```
src/app/
├── page.tsx              # Home — Hero, features, voice spotlight, testimonials
├── features/page.tsx     # Feature categories (core, more, advanced)
├── pricing/page.tsx      # Subscription plans (Free, Monthly, 6-Month, Annual, Lifetime)
├── download/page.tsx     # Download page (Play Store + App Store buttons)
├── about/page.tsx        # About Ollo, mission, values, developer
├── roadmap/page.tsx      # Completed & upcoming features
├── faq/page.tsx          # FAQ (12 Q&A)
├── privacy/page.tsx      # Privacy policy
├── terms/page.tsx        # Terms of service
├── credits/page.tsx      # Tech stack credits
├── beta/page.tsx         # Beta registration (Google Form embed)
├── layout.tsx            # Root layout
├── globals.css           # Global styles + CSS variables
└── api/reviews/route.ts  # Google Play reviews API (ISR, revalidate 6h)

src/components/
├── Navigation.tsx        # Nav bar (desktop + mobile menu)
├── Footer.tsx            # Footer (links, social, version)
└── Testimonials.tsx      # Reviews marquee (fetch dari API)

src/context/
└── LanguageContext.tsx   # i18n context (en/id)

src/lib/
└── translations.ts       # Semua terjemahan EN & ID

public/
├── logo.jpg              # Ollo logo
├── app-screen-*.jpg      # App screenshots
└── feature-*.jpg/png     # Feature images
```

## Aturan Kerja

1. **Baca dulu** `Agent/CONTEXT.md` untuk tau posisi terakhir
2. **Cek sesi sebelumnya** dengan `session_search` jika perlu recall konteks
3. **Update `Agent/CONTEXT.md`** setelah perubahan signifikan
4. **Jangan push ke main langsung** — buat branch untuk perubahan besar
5. **Test build** dengan `npm run build` sebelum deploy
6. **Version number**: Update di `download/page.tsx` → `appInfo.version` saat ada rilis baru
7. **Translations**: Update EN & ID di `src/lib/translations.ts` saat menambah konten baru
8. **Roadmap**: Pindahkan fitur dari `upcomingFeatures` ke `completedFeatures` saat sudah dirilis

## App Info (Update saat ada versi baru)

- **Version**: 1.4.3+140
- **Platforms**: Android, iOS
- **Play Store**: https://play.google.com/store/apps/details?id=com.ollo.ollo
- **App Store**: https://apps.apple.com/us/app/ollo-budget-money-manager/id6763823803
- **Min Android**: Android 5.0 (Lollipop)
- **Target Android**: Android 15
- **Size**: ~26 MB

## Localization

- Website: English, Indonesian (2 bahasa)
- App: English, Indonesian, Spanish, Hindi, Japanese, Mandarin, Korean (7 bahasa)

## Development

```bash
npm run dev    # Development server di http://localhost:3000
npm run build  # Production build
npm run start  # Production server
npm run lint   # ESLint
```

## Deployment

Auto-deploy via Vercel saat push ke branch main.

## Terkait

- Main Ollo project: `/Users/trian/Projects/Ollo/`
- Changelog app: `/Users/trian/Projects/Ollo/REFERENCE_CHANGELOG.md`
- Kontak: Trian Aprilianto, ollowithyou@gmail.com, @ollowithyou
