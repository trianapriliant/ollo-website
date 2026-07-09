# Ollo-Profile Diff Patch
# Generated: 2026-05-14
# Source: Ollo main project analysis
#
# File ini berisi perubahan yang perlu diterapkan di project Oollo-Profile
# oleh agent yang menjalankan project tersebut.
#
# Cara pakai: Terapkan setiap section perubahan ke file yang sesuai.

---

## 1. src/app/download/page.tsx
## Ubah appInfo.version dari "1.2.2+57" ke "1.2.88+136"

CARI:
```typescript
const appInfo = {
    version: "1.2.2+57",
    build: "57",
    minAndroid: "Android 5.0 (Lollipop)",
    targetAndroid: "Android 15",
    size: "~26 MB",
};
```

GANTI DENGAN:
```typescript
const appInfo = {
    version: "1.2.88+136",
    build: "136",
    minAndroid: "Android 5.0 (Lollipop)",
    targetAndroid: "Android 15",
    size: "~26 MB",
};
```

---

## 2. src/app/roadmap/page.tsx
## Tambahkan completedFeatures baru dari v1.2.3 sampai v1.2.88

CARI array `completedFeatures` dan TAMBAHKAN entry baru di awal array (sebelum entry v1.2.2 yang sudah ada):

```typescript
const completedFeatures = [
    // === TAMBAHKAN ENTRY BARU DI SINI ===
    {
        icon: ShieldCheck,  // atau icon lain yang sesuai
        title: "Quick Record AI Re-architecture",
        description: "OCR re-enabled via native bridge (iOS Vision + Android ML Kit), input normalizer, receipt detection, language strategy parsing, personal learning memory.",
        version: "1.2.84",
    },
    {
        icon: Spark,
        title: "Multi-Currency Transaction Fixes",
        description: "Fixed cross-currency balance deduction for Bills, Wishlist, Recurring, and Reimburse. Added native + converted currency display across all screens.",
        version: "1.2.82",
    },
    {
        icon: Cpu,
        title: "Data Integrity & Schema v27 Audit",
        description: "Comprehensive audit of 18 tables, 16 repositories, 50+ providers. Fixed savings balance, wallet cascade delete, transaction nullification, orphan pocket cleanup.",
        version: "1.2.76",
    },
    {
        icon: Import,
        title: "Backup/Restore Security",
        description: "Fixed missing images in ZIP backup, wallet icon relative paths, sensitive key exclusion (PIN, VIP, premium flags).",
        version: "1.2.72",
    },
    {
        icon: Bell,
        title: "Bills & Recurring Overhaul",
        description: "Fixed double payment bug, undo payment feature, bill type categorization, recurring calendar UI, per-date paid status.",
        version: "1.2.70",
    },
    {
        icon: CreditCard,
        title: "Premium Gating & UI Standardization",
        description: "Asset Management premium gating, standardized save/delete buttons across 60+ screens, modern confirm dialogs.",
        version: "1.2.67",
    },
    {
        icon: Globe,
        title: "Full Localization (7 Languages)",
        description: "Complete multi-language support for Assets, Wallets, Investment features. Removed 100+ hardcoded English strings.",
        version: "1.2.66",
    },
    {
        icon: Spark,
        title: "Statistics Subcategory Drill-down",
        description: "Tap any category for deep-dive analytics. Daily trend bar charts, period-over-period comparisons, restored subcategory icons.",
        version: "1.2.63",
    },
    {
        icon: Box,
        title: "Wallet Pockets",
        description: "Create sub-accounts under any main wallet. Hierarchical layout with visual thread connectors.",
        version: "1.2.5",
    },
    {
        icon: ShieldCheck,
        title: "Security Hardening",
        description: "Lock screen bypass fix, biometric prompt consolidation, zero-overflow layout, trial-limit bypass patch.",
        version: "1.2.4",
    },
    {
        icon: MultiplePages,
        title: "Multi-Photo & Performance",
        description: "Premium users can attach up to 3 photos per transaction. Removed GPU blur effects, added RepaintBoundary isolation.",
        version: "1.2.0",
    },
    // === ENTRY YANG SUDAH ADA DI BAWAH INI ===
    {
        icon: ShieldCheck,
        title: t.roadmap.nullSafety,
        description: t.roadmap.nullSafetyDesc,
        version: "1.2.2",
    },
    // ... (entry lainnya tetap sama)
];
```

JUGA UPDATE `upcomingFeatures` — hapus atau update entry yang sudah completed:

CARI:
```typescript
const upcomingFeatures = [
    {
        icon: Cloud,
        title: t.roadmap.cloudBackup,
        description: t.roadmap.cloudBackupDesc,
        status: t.roadmap.inDevelopment,
    },
    {
        icon: Gift,
        title: t.roadmap.iosVersion,
        description: t.roadmap.iosVersionDesc,
        status: t.roadmap.planned,
    },
];
```

GANTI DENGAN:
```typescript
const upcomingFeatures = [
    {
        icon: Gift,
        title: t.roadmap.iosVersion,
        description: t.roadmap.iosVersionDesc,
        status: t.roadmap.inDevelopment,
    },
    {
        icon: Coins,
        title: "Ledger-Based Balances",
        description: "Migrate from direct balance updates to ledger-based transaction history for accurate historical balances.",
        status: t.roadmap.planned,
    },
    {
        icon: ShareAndroid,
        title: "Shared Budget & Family Finance",
        description: "Share budgets and financial goals with family members or partners.",
        status: t.roadmap.planned,
    },
];
```

CATATAN: Cloud Backup sudah implemented (v1.2.88+), jadi hapus dari upcoming.

---

## 3. src/lib/translations.ts
## Update tech stack descriptions di Credits section

CARI:
```typescript
isarDesc: string;
```

GANTI DENGAN:
```typescript
driftDesc: string;
```

Lalu di bagian nilai translations, CARI:
```typescript
isarDesc: "Isar NoSQL — Fast, local-first NoSQL database for Flutter. Used as the primary on-device database.",
```

GANTI DENGAN:
```typescript
driftDesc: "Drift (SQLite) — Type-safe SQL ORM for Dart/Flutter. Primary database with code generation and migration support.",
```

---

## 4. src/lib/translations.ts
## Update roadmap translation keys

TAMBAHKAN key baru di section `roadmap`:

```typescript
// Di antara completedFeatures yang sudah adi, tambahkan:
quickRecordAI: string;
quickRecordAIDesc: string;
multiCurrencyFix: string;
multiCurrencyFixDesc: string;
dataIntegrity: string;
dataIntegrityDesc: string;
backupSecurity: string;
backupSecurityDesc: string;
billsOverhaul: string;
billsOverhaulDesc: string;
premiumGating: string;
premiumGatingDesc: string;
fullLocalization: string;
fullLocalizationDesc: string;
statsDrilldown: string;
statsDrilldownDesc: string;
walletPockets: string;
walletPocketsDesc: string;
securityHardening: string;
securityHardeningDesc: string;
multiPhoto: string;
multiPhotoDesc: string;

// Upcoming features baru
ledgerBalances: string;
ledgerBalancesDesc: string;
sharedBudget: string;
sharedBudgetDesc: string;
```

Dan di nilai translations (English), TAMBAHKAN:

```typescript
quickRecordAI: "Quick Record AI Re-architecture",
quickRecordAIDesc: "OCR re-enabled via native bridge, input normalizer, receipt detection, language strategy parsing, personal learning memory.",
multiCurrencyFix: "Multi-Currency Transaction Fixes",
multiCurrencyFixDesc: "Fixed cross-currency balance deduction for Bills, Wishlist, Recurring, and Reimburse.",
dataIntegrity: "Data Integrity & Schema v27 Audit",
dataIntegrityDesc: "Comprehensive audit of 18 tables, 16 repositories. Fixed savings balance, wallet cascade delete, orphan pocket cleanup.",
backupSecurity: "Backup/Restore Security",
backupSecurityDesc: "Fixed missing images, wallet icon relative paths, sensitive key exclusion.",
billsOverhaul: "Bills & Recurring Overhaul",
billsOverhaulDesc: "Fixed double payment, undo payment, bill type categorization, recurring calendar UI.",
premiumGating: "Premium Gating & UI Standardization",
premiumGatingDesc: "Asset Management premium gating, standardized save/delete buttons, modern confirm dialogs.",
fullLocalization: "Full Localization (7 Languages)",
fullLocalizationDesc: "Complete multi-language support for Assets, Wallets, Investment features.",
statsDrilldown: "Statistics Subcategory Drill-down",
statsDrilldownDesc: "Deep-dive analytics, daily trend bar charts, period-over-period comparisons.",
walletPockets: "Wallet Pockets",
walletPocketsDesc: "Sub-accounts under any main wallet with hierarchical layout.",
securityHardening: "Security Hardening",
securityHardeningDesc: "Lock screen bypass fix, biometric prompt consolidation, zero-overflow layout.",
multiPhoto: "Multi-Photo & Performance",
multiPhotoDesc: "Up to 3 photos per transaction for premium users. GPU blur removal, RepaintBoundary isolation.",

// Upcoming
ledgerBalances: "Ledger-Based Balances",
ledgerBalancesDesc: "Migrate to ledger-based transaction history for accurate historical balances.",
sharedBudget: "Shared Budget & Family Finance",
sharedBudgetDesc: "Share budgets and financial goals with family members or partners.",
```

---

## 5. README.md
## Update dari default Next.js ke dokumentasi project Ollo-Profile

GANTI seluruh isi README.md dengan:

```markdown
# Ollo Profile — Official Website

Website resmi Ollo App (personal finance management) dibangun dengan Next.js.

## Tech Stack

| Component | Technology | Version |
|-----------|------------|---------|
| **Framework** | Next.js | 16.1.1 |
| **UI Library** | React | 19.2.3 |
| **Language** | TypeScript | ^5 |
| **Styling** | CSS Modules | Built-in |
| **Icons** | Iconoir React | ^7.11.0 |
| **Deployment** | Vercel | — |

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — Hero, features, voice quick record spotlight |
| `/features` | Feature categories (core, more, advanced) |
| `/pricing` | Subscription plans (Free, Monthly, 6-Month, Annual, Lifetime) |
| `/download` | Download page with Play Store link |
| `/about` | About Ollo, mission, values, developer info |
| `/roadmap` | Completed & upcoming features |
| `/faq` | Frequently asked questions |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |
| `/credits` | Tech stack credits |
| `/beta` | Beta tester registration |

## App Info (Update saat ada versi baru)

- **Current Version**: 1.2.88+136
- **Min Android**: Android 5.0 (Lollipop)
- **Target Android**: Android 15
- **Size**: ~26 MB

## Localization

Website mendukung 7 bahasa: English, Indonesian, Spanish, Hindi, Japanese, Mandarin, Korean.

## Development

\`\`\`bash
npm run dev    # Development server di http://localhost:3000
npm run build  # Production build
npm run start  # Production server
npm run lint   # ESLint
\`\`\`

## Deployment

Deploy otomatis via Vercel saat push ke branch main.

## Related Projects

- **Ollo App**: `/Users/trian/Projects/Ollo` — Flutter mobile app
- **Ollo Backend**: `/Users/trian/Projects/Ollo/backend` — Node.js cloud sync API
- **Ollo Web Dashboard**: `/Users/trian/Projects/Ollo/web-dashboard` — Admin dashboard
```

---

## CATATAN PENTING

1. **Version number**: Selalu update `appInfo.version` di `download/page.tsx` saat ada rilis baru
2. **Roadmap**: Pindahkan fitur dari `upcomingFeatures` ke `completedFeatures` saat sudah dirilis
3. **Translations**: Update semua bahasa (EN, ID, ES, HI, JA, ZH, KO) saat menambah key baru
4. **Tech stack**: Update `credits` section saat ada perubahan teknologi
