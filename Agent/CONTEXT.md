# Ollo-Profile Agent Context

## Project Overview

Website landing page untuk aplikasi **Ollo** — personal finance tracker berbasis voice-first.

- **Path**: `/Users/trian/Projects/Ollo-Profile`
- **Tech Stack**: Next.js 16.1.1 (App Router), React 19.2.3, TypeScript, CSS Modules
- **Icons**: iconoir-react, react-icons
- **Domain**: ollowithyou.xyz
- **Deployment**: Vercel (auto-deploy dari branch main)

## App Info (Current)

- **Version**: 1.4.3+140
- **Platforms**: Android, iOS
- **Play Store**: https://play.google.com/store/apps/details?id=com.ollo.ollo
- **App Store**: https://apps.apple.com/us/app/ollo-budget-money-manager/id6763823803
- **Min Android**: Android 5.0 (Lollipop)
- **Target Android**: Android 15
- **Size**: ~26 MB

## Struktur Project

```
Agent/
└── CONTEXT.md              ← File ini — konteks + posisi terakhir

src/app/
├── page.tsx                # Home — Hero (2 download buttons), features, voice spotlight, testimonials
├── page.module.css         # Home styles (termasuk .appStoreButton)
├── features/page.tsx       # Feature categories
├── pricing/page.tsx        # Subscription plans
├── download/page.tsx       # Download page (Play Store + App Store buttons)
├── download/page.module.css # Download styles (termasuk .appStoreButton)
├── about/page.tsx          # About Ollo
├── roadmap/page.tsx        # Completed (25+ features) & upcoming (3 features)
├── faq/page.tsx            # FAQ (12 Q&A)
├── privacy/page.tsx        # Privacy policy
├── terms/page.tsx          # Terms of service
├── credits/page.tsx        # Tech stack credits (driftDesc, bukan isarDesc)
├── beta/page.tsx           # Beta registration
├── layout.tsx              # Root layout
├── globals.css             # Global styles + CSS variables
└── api/reviews/route.ts    # Google Play reviews API

src/components/
├── Navigation.tsx          # Nav bar
├── Footer.tsx              # Footer (version: v1.2.88+136)
└── Testimonials.tsx        # Reviews marquee

src/context/
└── LanguageContext.tsx     # i18n (en/id)

src/lib/
└── translations.ts         # Semua terjemahan EN & ID
```

## Riwayat Update

### 2026-07-09: Update Website for App Changes (v1.2.88 to v1.4.3+140)

- Diperbarui `translations.ts` menambahkan terjemahan untuk fitur baru: **Secure Cloud Sync** dan **AI Ollo Assistant (Beta)**, serta memperbarui deskripsi **AI Scan** dan **HomeScreen Widgets**.
- Diperbarui `page.tsx` (Home) menyertakan kartu fitur *Cloud Sync* dan *AI Assistant (Beta)* di landing page, memuat aset ilustrasi premium (`feature-cloud-sync.png`, `feature-ollo-assistant.png`) yang telah di-generate, serta menghapus shape wave SVG hitam (`heroWave`) di bawah hero section untuk transisi lurus yang bersih.
- Diperbarui `features/page.tsx` menambahkan kedua fitur baru ke daftar Advanced Features sebagai fitur premium.
- Diperbarui `roadmap/page.tsx` memindahkan "Ledger-Based Balances" ke daftar *completed* dan memprepend 10 rilis versi selesai dari `v1.2.89` sampai `v1.4.3`.
- Diperbarui nomor versi aplikasi ke `1.4.3+140` di `download/page.tsx`, `Footer.tsx`, `README.md`, dan `AGENTS.md`.
- Diperbarui string harga langganan di `pricing/page.tsx` agar selaras dengan konfigurasi harga terbaru (Monthly: IDR 17rb, 6-Month: IDR 88rb, Annual: IDR 125rb, Lifetime: IDR 205rb).
- Dibenahi error linter typescript `any` di `route.ts` dan warning Hooks di `LanguageContext.tsx`.

### 2026-07-09: App changes summary after v1.2.88+136

- Dibuat file `APP_CHANGES_SINCE_1.2.88.md` di root Ollo-Profile sebagai bahan update website.
- Isi file merangkum perubahan Ollo app setelah baseline web profile `v1.2.88+136`, bersumber dari `lib/src/features/profile/domain/update_log.dart` project app utama dan catatan internal terbaru.
- Ringkasan disusun untuk kebutuhan website publik: timeline versi `1.2.89` sampai `1.4.3`, catatan latest internal work, area website yang perlu diupdate, dan guardrail public copy.
- Guardrail penting: jangan tampilkan nama tier internal/legacy di copy publik; AI copy harus menekankan privasi, review manual, dan bukan nasihat finansial.

### 2026-05-15: iOS App Store Launch Update

Semua perubahan bersifat **additive** (menambah, bukan mengganti):

**1. download/page.tsx**
- Version: `1.2.2+57` → `1.2.88+136`
- Title: "Get Ollo for Android" → "Get Ollo for Android & iOS"
- Tambah tombol App Store (`FaApple` icon, link ke App Store)
- Hapus card "iOS Coming Soon" (sudah rilis)
- Tambah card "Desktop Coming Soon" (Windows, macOS, Linux)
- Import `FaApple` dari react-icons, hapus `Apple` dari iconoir-react

**2. download/page.module.css**
- Ubah `.downloadSection` → flex layout dengan gap
- Tambah `.appStoreButton` (background hitam, hover effect)

**3. page.tsx (Home)**
- Tambah tombol App Store di hero CTA (di samping Play Store button)
- Tambah tombol App Store di CTA section bawah
- Import `FaApple`

**4. page.module.css (Home)**
- Tambah style `.appStoreButton` untuk home page

**5. roadmap/page.tsx**
- Tambah 12 completed features baru di awal array:
  - iOS App Store Launch (v1.2.88)
  - Quick Record AI Re-architecture (v1.2.84)
  - Multi-Currency Transaction Fixes (v1.2.82)
  - Data Integrity & Schema v27 Audit (v1.2.76)
  - Backup/Restore Security (v1.2.72)
  - Bills & Recurring Overhaul (v1.2.70)
  - Premium Gating & UI Standardization (v1.2.67)
  - Full Localization 7 Languages (v1.2.66)
  - Statistics Subcategory Drill-down (v1.2.63)
  - Wallet Pockets (v1.2.5)
  - Security Hardening (v1.2.4)
  - Multi-Photo & Performance (v1.2.0)
- Update upcoming features:
  - Hapus: Cloud Backup (sudah done), iOS Version (sudah rilis)
  - Tambah: Ledger-Based Balances, Shared Budget & Family Finance, Ollo Web App

**6. translations.ts**
- Keys baru: `downloadOn`, `appStore`, `desktopComingSoon`, `desktopComingSoonDesc`, `downloadAppStore`
- Fix: `isarDesc` → `driftDesc` (type + values EN & ID)
- Update FAQ:
  - Q7 cloud backup: "in development" → "available via Google Sign-In"
  - Q12 platform: "only Android, iOS in development" → "Android & iOS available, web/desktop in development"
  - Q2 data safety: "Isar" → "Drift (SQLite)", tambah "or enable cloud sync"
- Update pricing disclaimer: Android via Google Play, iOS via Apple App Store
- Update localStorage description: Drift/SQLite, bukan Isar

**7. credits/page.tsx** — `sqliteDesc` → `driftDesc`

**8. Footer.tsx** — version: `v1.2.2+57` → `v1.2.88+136`

**9. README.md** — Rewrite lengkap

**Status**: ✅ Build berhasil (`npm run build` → 15 pages generated, 0 errors)

## Perubahan Tambahan (Review)

1. **download/page.tsx** — "Requires" info: `{appInfo.minAndroid}+` → `Android 5.0+ / iOS 15+`
2. **page.tsx (Home)** — Social proof: `5,000+ Downloads` → `10,000+ Downloads` (EN & ID)
3. **Testimonials.tsx** — Tambah info App Store: `1k+ App Store` di stats bar
4. **page.tsx (Home)** — Tombol Play Store di hero & CTA section: `<Link href="/download">` → `<a href="https://play.google.com/...">` (direct link, tidak mampir ke halaman download dulu)

## Catatan Penting

- **Version number**: Selalu update `appInfo.version` di `download/page.tsx` + `Footer.tsx` saat ada rilis baru
- **Roadmap**: Pindahkan fitur dari `upcomingFeatures` ke `completedFeatures` saat sudah dirilis
- **Translations**: Update EN & ID di `translations.ts` saat menambah konten baru
- **Database**: App sudah pakai Drift (SQLite), bukan Isar lagi
- **Localization**: Website support EN & ID. App support 7 bahasa (EN, ID, ES, HI, JA, KO, ZH)
- **Pendekatan**: Additive, bukan replacing — tambahkan info baru, jangan hapus yang sudah ada

## Tugas Selanjutnya (Pending)

- Tidak ada task pending dari update iOS launch
- Bisa lanjut ke: cek tampilan di browser, update fitur lain, atau project lain

## Referensi

- Changelog app: `/Users/trian/Projects/Ollo/REFERENCE_CHANGELOG.md`
- Blueprint app: `/Users/trian/Projects/Ollo/REFERENCE_BLUEPRINT.md`
- Diff patch: `/Users/trian/Projects/Ollo-Profile/DIFF_PATCH.md`
- Kontak: Trian Aprilianto, ollowithyou@gmail.com, @ollowithyou
