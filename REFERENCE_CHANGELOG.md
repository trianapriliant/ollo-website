<!--
================================================================================
  CHANGELOG.md — Ollo App Changelog
  Version: 1.2.88+136
  Last Updated: 2026-05-14
  Source: lib/src/features/profile/domain/update_log.dart (ground truth)

  📋 UNTUK AI AGENT / DEVELOPER:
  File ini adalah catatan perubahan resmi Ollo, disinkronkan dari update_log.dart.
  Jika ada perubahan besar di codebase, update KEDUA file ini secara bersamaan:
  1. lib/src/features/profile/domain/update_log.dart (entry baru di awal list)
  2. File ini (CHANGELOG.md) — ringkasan perubahan

  Cara update update_log.dart:
  1. Buka lib/src/features/profile/domain/update_log.dart
  2. Tambahkan entry baru di awal list `logs`
  3. Format: UpdateLog(version: 'x.y.z', date: DateTime(YYYY, M, D), changes: [...])
  4. Update ringkasan di sini (CHANGELOG.md) secara sinkron
================================================================================
-->
# Changelog

**Last Updated**: 2026-05-14 | **Version**: 1.2.88+136
All notable changes to Ollo will be documented in this file. This file is synced from `lib/src/features/profile/domain/update_log.dart`.

---

## [1.2.88] — 2026-05-11

### Bills
- Fixed recurring bill generation so paid/generated periodic bills preserve the original bill type and uploaded custom icon instead of falling back to Internet.
- Added recurring bill type metadata migration for local database and cloud sync.
- Added legacy recurring metadata backfill from linked bill history, protecting older Subscription/custom-icon bills.

### Backup/Restore
- Verified ZIP backups include recurring icon files under `icons/recurring` and restore them with portable relative paths.

### Cloud Sync
- Fixed stale dirty records being treated as newest during push; conflict resolution now uses the original local mutation timestamp.
- Added local-data preservation guard so an empty cloud snapshot cannot replace existing device data during explicit cloud restore/replace flows.

### Roadmap
- Updated Masukan & Peta Jalan with the real long-term product direction: sync hardening, ledger-based balances, financial journey, OCR intelligence, reporting, and shared budget groundwork.

### Premium Status
- Fixed lifetime purchase labeling so RevenueCat lifetime ownership and server `subscription_type=lifetime` are displayed as "Premium Lifetime" instead of falling back to "Premium Monthly".

---

## [1.2.87] — 2026-05-09

### Cloud Sync
- Hardened push/pull sequencing, pending-operation drain, and conflict refresh handling for rapid multi-device edits.
- Improved wallet currency preservation and backfill flow for synced Android/Web data on iOS.

### Quick Record
- Tightened personal learning safeguards so a single mistaken correction no longer overpowers explicit user text.
- Added safer memory reset behavior and stricter learning confidence rules.
- Stabilized voice/session and adjust-flow transitions.
- **iOS**: Fixed iPadOS microphone permission flow (native permission handlers before starting voice listening).

### Number Input
- Standardized locale-aware money input handling across all money fields (onboarding, savings, debt, credit-card).
- Fixed comma/dot decimal behavior, cursor jumps, grouped-number deletion, and excessive decimal digit entry.

### Wallet Detail
- Added balance history foundation with daily wallet balance snapshots and period navigation (Weekly, Monthly, Yearly, All).
- Improved historical balance chart so selected period, transaction list, and summary cards move together.

### Dashboard
- Cleaned tablet sidebar top spacing and removed stray top-left circular logo in tablet layout.
- Fixed dashboard wallet display to respect each wallet native currency.

### Transactions UI
- Restored converted-value subtitle behavior when transaction currency differs from global currency.

### Statistics
- Improved category/subcategory detail consistency for custom range filters and multi-currency display paths.

### Wallet Selector
- Added searchable wallet selector with compact type filters; fixed popup overflow and clipping issues.

### Gamification
- Fixed achievement loading loops for fresh accounts; added financial journey progress foundation.
- Hardened level persistence so XP/level no longer drops to Level 1 during cloud sync.

### Premium
- Added dashboard wallet visibility benefit to the Premium Features list.

### Export
- Continued PDF report accuracy improvements around opening/closing balance and accounting-style summary consistency.

---

## [1.2.86] — 2026-05-08

### Release Stability
- Finalized Quick Record voice/session lifecycle hardening to prevent start-listen race and simulator-triggered stuck states.
- Improved Quick Record "Sesuaikan" flow transition so bottom-sheet close and route navigation no longer conflict.

### Release Reporting
- Financial PDF export now uses unified accounting classification and currency basis across summary/chart/table output.
- Added opening/closing balance context and stricter internal-movement handling.

### iOS Review Compliance
- Removed custom VIP/redeem-code unlock flow from iOS builds; App Store premium access now relies on Apple In-App Purchase only.
- Updated subscription management link and subscription terms copy for Apple Account subscription handling.

### Wallet Detail
- Added period navigator (previous/next) for Weekly, Monthly, and Yearly views; chart, summary cards, and transaction list now shift in sync.
- Introduced daily wallet balance snapshot store (`wallet_balance_snapshots`) with automatic snapshot writes on wallet/transaction mutations.

### Data Safety UX
- Fixed Factory Reset confirmation mismatch — unified instruction text, input placeholder, and keyword validation (case-insensitive, locale-aware delete/hapus).

### Quality Gate
- Updated obsolete widget smoke test to current Riverpod app bootstrap.

---

## [1.2.85] — 2026-05-03

### Quick Record OCR
- Added remote-config kill switch `uses_bbox_pipeline` for instant fallback to legacy non-bbox flow.
- Extended validator ruleset model with runtime control for bbox pipeline usage.

### Quick Record Learning
- Added privacy-masked correction event capture with explicit consent toggle in Advanced Settings (local device storage only).
- Added retention and cap safeguards (90 days, max 500 events).
- Migrated merchant alias memory to SQLite (`user_merchant_aliases`) with trigram-based matching.
- Added `DocumentType` field in OCR document model (default: retail) for future invoice/utility/transfer-slip parsing.

### Transactions UI
- Refined wallet badge size and placement in transaction list (Badge Style).
- Added adaptive wallet-badge background behavior for light/dark mode.
- Compact Style: replaced date subtitle with linked wallet label; transfer-style subtitles now show `source → destination`.

### PDF Export (Accounting)
- Refactored financial report pipeline for consistent ledger classification + currency normalization.
- Excluded wallet/transaction records consistently omitted from report calculations.
- Added Opening Balance and Closing Balance with net-worth-effect analysis.
- Fixed broken glyph rendering in Balance Overview banner (replaced Unicode with PDF-safe shapes).

### Docs
- Added correction sync contract draft for future backend ingestion endpoint.

---

## [1.2.84] — 2026-05-02 (Re-architected Quick Record)

### Quick Record
- **OCR diaktifkan kembali** via native bridge (iOS Vision + Android ML Kit).
- Ditambahkan input normalizer untuk chat/voice/scan agar alias umum dinormalisasi konsisten.
- Ditambahkan koreksi konservatif untuk kesalahan OCR umum (huruf O vs angka 0).
- Ditambahkan deteksi struk + ekstraksi amount/date berbasis keyword/line scoring.
- Parsing memakai strategi bahasa (ID/EN) dengan confidence per-field, missing fields, dan warning.
- Ditambahkan memori pembelajaran personal dari koreksi final user.
- Ditambahkan opsi "Reset Memori Quick Record" di Advanced Settings.

---

## [1.2.83] — 2026-04-25

### Main Tabs UI
- Added centralized adaptive bottom padding for all main tabs (Dashboard, Statistics, Wallet, Profile) for edge-to-edge devices.

### Debts UI
- Improved debt list readability: separated due-date from remaining amount, clearer "Belum dibayar" label, payment progress bars.

### Wallets
- Fixed custom wallet icons in Transaction List wallet-badge style (WalletIcon rendering).
- Fixed custom wallet icon preview for relative wallet_icons/ paths.
- Fixed transfer admin/fee recording — fees always saved as separate expense transactions with multi-currency metadata.

---

## [1.2.82] — 2026-04-24

### Multi-Currency (Critical)
- Fixed wallet balance deduction for Bills payment (cross-currency transactions).
- Fixed Wishlist purchase to store wallet-currency convertedAmount before balance updates.
- Fixed Recurring auto-pay engine for wallet-currency conversion.
- Fixed Reimburse completion flow with destination-wallet conversion.
- Pending reimburse creation no longer stores misleading global convertedAmount.

### UI/UX Currency Clarity
- Added native + converted (~global) display in Bills, Wishlist, Recurring, Budget, Savings, and Reimburse screens.
- Transaction Detail: improved currency rendering reliability.

---

## [1.2.81] — 2026-04-24

### Budget
- Fixed budget card header regression where custom budget names could hide category icons.
- Multi-category budgets now render stacked circular category icons with overflow badge (+N).

---

## [1.2.80] — 2026-04-24

### Bills
- Fixed bill type persistence regression (newly created one-time bills could fallback to "Internet" type).
- Refactored bill creation flow with single canonical builder for recurring and one-time paths.
- Added guardian comments and bill type normalization guard.

---

## [1.2.78] — 2026-04-21

### Transactions
- Date-time picker now keeps last selected date/time for 10 seconds.
- Added quick year selector in mobile date-time picker; improved date picker anchoring logic.
- Transaction type tabs now use theme tokens instead of hardcoded colors.
- Classic bottom navigation FAB integration fix (transparent area + tap target).

### Budget
- Reduced month-switch visual flicker by removing layout-shifting loading strip.

---

## [1.2.77] — 2026-04-20

### Statistics
- Improved subcategory pie chart labeling — avoids misleading "Lainnya" naming.

### Navigation
- Fixed savings navigation assertion crash (nested route transition).
- Fixed reimburse back navigation edge case ("nothing to pop" error).

### Transactions
- Transaction search now supports note text matching.

---

## [1.2.76] — 2026-04-06

### Data Integrity (Schema v27)
- Comprehensive data architecture audit — mapped 18 tables, 16 repositories, 50+ providers, identified 12 referential integrity issues.
- Fixed v27 migration crash — defensive beforeOpen schema verification.
- **Savings**: Fixed savings wallet balance always showing 0 — deposit/withdraw now correctly updates wallet balances.
- **Wallets**: Delete wallet now nullifies walletId in Bills, Debts, and SmartNotes.
- **Wallets**: Orphaned pocket filter added to balance providers — legacy pockets no longer inflate dashboard balance.
- **Transactions**: Delete transaction now nullifies transactionId in Bills, Wishlists, Debts, SmartNotes, and SavingLogs.
- **Budget**: Delete budget now cascade-deletes all SubBudgets.
- **Startup**: Fixed "No ProviderScope found" crash — migrated to UncontrolledProviderScope.
- **Wallets**: Fixed wallet detail statistics showing zero for Savings/Investment transactions.
- Added ⚠️ PROTECTED guardian comments to 7 critical code locations.

---

## [1.2.75] — 2026-04-05

### Backup/Restore
- Fixed missing images in ZIP backup (bill icons, recurring icons, card backgrounds).
- Wallet icons now use relative paths instead of device-specific absolute paths.
- Added automatic icon path migration during restore.
- Empty media directories now appear in ZIP backup.

### Onboarding
- Fixed profile image saving — stores to profile_pics/ with relative path.

### Wallets
- WalletIcon widget now supports both relative and absolute file paths.
- Fixed orphaned pocket wallets — parent wallet deletion cascades to child pockets.
- Added warning dialog when deleting a wallet with pockets.
- Added startup migration to clean up existing orphaned pockets.

### Savings
- Fixed "Transfer" title and wrong icon in transaction list.
- Fixed "Unknown" wallet names in transaction list and detail screen.
- Savings transactions now use TransactionType.system.

---

## [1.2.73] — 2026-04-04

### Premium
- Custom Card Backgrounds are now a premium feature.
- Added "Custom Card Backgrounds" to the premium benefits list (7-language localization).
- All preset card themes remain available to all users.

---

## [1.2.72] — 2026-04-03

### Backup/Restore
- Fixed theme preference loss (key mismatch `theme_mode` → `ollo_theme_mode` with backward compatibility).
- Fixed "Format Saldo" settings loss — all 4 keys now backed up.
- Fixed transaction data loss — importTransactions preserves isBalanceExcluded, assetCode, assetAmount.
- Added 28+ missing SharedPreferences keys to backup.
- Added missing media directories (bill_attachments/, recurring_icons/, receipt_images/, transaction_images/).
- Cloud sync (createBackupData) now includes all notification settings.

---

## [1.2.71] — 2026-04-03

### Recurring Screen
- Added per-date paid status indicator — only shows paid if bill for THAT specific date is paid.
- Added "From Bills" source indicator with blue receipt icon label.
- Visual distinction between Bills-managed and manually-created recurring rules.

---

## [1.2.70] — 2026-04-03

### Bills
- Fixed double payment bug — paying a recurring bill no longer creates and auto-pays a future bill.
- Fixed wrong date generation after payment — advanceNextCycle only fires when `bill.dueDate >= recurring.nextDueDate`.
- Added undo payment feature via triple-dot menu in bill detail screen.
- Paid bill deletion now also deletes linked transaction to restore wallet balance.
- Added "Hide upcoming bills" UI filter (default OFF).
- **Backup/Restore**: Fixed critical data loss — importBills now writes ALL 14 Bill fields.
- Added protected module comments to 8 critical files.

---

## [1.2.68] — 2026-04-02

### Bills & Recurring
- Fixed auto-pay catch-up loop — limited to max 3 past cycles with notification for older cycles.
- Fixed paid bills history ordering — sorted by due date (newest first).

### Transactions
- Fixed "Unknown" category in transaction detail screen (recurring system category).
- Fixed gray/missing icons in Transaction Table screen.
- Standardized category ID — recurring transactions use "bills" category.

---

## [1.2.67] — 2026-04-01

### Premium
- Added premium gating for Asset Management.
- Added "Multi-Asset Tracking" to premium benefits list.

### UI/UX Standardization
- Standardized save buttons across all edit screens (AppBar IconButton).
- Standardized delete buttons across all edit screens (triple-dot PopupMenuButton).
- Standardized popup menu styling (rounded, elevated, theme-consistent).
- Added `centerTitle: true` to all AppBar titles.
- Migrated 12 AlertDialogs to `showModernConfirmDialog`.
- Migrated 6 custom Dialog widgets to `showModernConfirmDialog` — removed ~200 lines of redundant code.

---

## [1.2.66] — 2026-03-31

### Localization
- Full multi-language support for Assets Management (7 languages).
- Full multi-language support for Wallet features (7 languages).
- Removed 100+ hardcoded English strings from Assets and Wallet screens.

### Investment Wallet
- Insufficient balance dialog pre-fills destination wallet.
- Sell mode shows only assets owned by this wallet.
- Sell mode displays owned quantity with multi-unit display (oz + grams).
- Sell validation prevents selling more than owned quantity.

### Architecture
- Added comprehensive guard comments to 10 critical files.

---

## [1.2.65] — 2026-03-31

### Assets
- Fixed asset-to-wallet mapping — assets correctly link and display on wallet cards.
- Asset detail screen updates in real-time after Buy/Sell operations.
- Factory Reset and Delete Transactions now properly clear asset portfolio data.

### Bills
- Fixed crash when opening Add Bill screen (localization in initState).

### Stability
- Improved wallet ID resolution for numeric external IDs.

---

## [1.2.64] — 2026-03-27

### Profile
- Restored complete profile layout with all legacy management sections.
- Re-implemented "OLLO" background peeking effect with inertia-based scrolling.

### Stability
- Resolved Developer status loss after app restarts in debug mode.

### Maintainability
- Added MAINTAINER NOTE documentation to 6 critical architectural layers.
- Verified and stabilized core Routing, Initialization, and Theme access patterns.

---

## [1.2.63] — 2026-03-24

### Statistics
- Added Subcategory Drill-down feature with deep-dive analytics.
- Introduced Daily Trend Bar Charts for Categories and Subcategories.
- Added Period-over-Period comparisons (vs Last Month/Week/Year) with color-coded trend indicators.
- Restored Subcategory Icons in drill-down list.

### UI
- Modernized category icons with premium rounded-rectangle containers.
- Enhanced "Badge" transaction style with colored category labels.
- Restored vertical two-way icons (swap_vert) and indigo theme for transfers.
- Refined transfer subtitles to show full "Source → Destination" paths.
- Resolved "null" and missing names for system categories.
- Preserved Empty State interactivity for date navigation.

---

## [1.2.62] — 2026-03-22

### Statistics
- Implemented "Top 8 + Others" grouping logic for cleaner pie charts.
- Redesigned legend into compact side-by-side layout.
- Rotated chart to 12 o'clock start position.

---

## [1.2.61] — 2026-03-22

### Bills & Recurring
- Added dedicated Detail Screens for better overview before editing or paying.
- Redesigned calendar UI with top-aligned dates and 2-column marker layout.
- Fixed scroll interference and added dynamic bottom padding for Android 15 edge-to-edge.
- Refactored Recurring Transaction logic for better catch-up and idempotency.
- Integrated direct "Go to Bills" shortcuts.

---

## [1.2.5] — 2026-03-14

### Recording Period
- Complete UI/UX redesign of "Budget Cycle" into "Periode Pencatatan" with dedicated management screen.
- Introduced "First Day of Week" setting with Calendar Grid view.
- Fully integrated dynamic week intervals across Statistics, Charts, Insights, and Weekly Budgets.

### Wallets
- Introduced **Wallet Pockets** — sub-accounts under any main wallet.
- New hierarchical layout in My Wallets screen with visual thread connectors.

---

## [1.2.4] — 2026-03-06

### Security
- Resolved critical bypass vulnerability in lock screen when dismissing biometric prompts.
- Consolidated authentication triggers to prevent multiple/looping biometric prompts.
- Refactored Lock Screen layout for 100% stability (Zero-Overflow).

### Data
- Robust Number Formatting — fixed input blocking for large numbers.
- Fixed missing icons in Widget Settings and Security Change PIN menus.

### Quick Record
- Robust Category Parsing — natural language inputs perfectly mapped to Localized Database Sub-Categories.
- Introduced `localizeSubCategoryKey` pluggable extension in `LanguageStrategy`.
- Enforced Database ID binding across Quick Record → Add Transaction flow.
- Fixed sub-category auto-fill bug (case-sensitive string matching).
- Patched trial-limit bypass vulnerability in Data Export.

### UI/UX
- Reordered Profile → Preferences menu.
- Fixed icon fallback in Transaction Log and Preview tables.
- Added Default Wallet feature with Modern Wallet Selector.
- Localization: transaction titles now dynamically translate to active app language.

---

## [1.2.3] — 2026-03-05

### Research & Design
- Implemented professional PDF Export system with branding and summary statistics.
- Added visual reports with Top 9 + Others grouping and percentage-nominal legends.
- Implemented 7-export trial limit for free users with usage indicator banner.

### Wallets
- Isolated Custom Ordering to transaction selectors.
- Optimized "My Wallets" screen with Logical Grouping and persistent Summary Card.

### Budget
- Complete refactor supporting Custom Names and Multi-Category selection.
- New Budget Detail screen with interactive filtering and spending breakdown.

### Transactions
- Integrated "Wallet Context" showing associated wallet names in list items.
- Smarter subtitles — automatically shows category/sub-category if notes are empty.

### UI
- Replaced standard card shadows with premium wide-blur BoxShadows.
- Database Schema V18 with full migration support.
- **Reimbursement**: Enforced "Reimburse" system category; modernized Wallet Selector; Android 15 Edge-to-Edge support.

### Stability
- Fixed critical bug where users could not save new categories or bank cards (Auto-increment fix).
- Unified ID handling across all repositories.

### Quick Entry
- New floating glass card UI for rapid income, expense, and transfer records.
- Enhanced Dual-Wallet selector for transfers with automatic source/target validation.

### Home Widget
- Standardized on 100% transparency for premium "floating" glass aesthetic.
- Centralized synchronization via WidgetSyncService.

### Android 15
- Full Edge-to-Edge compatibility with dynamic bottom padding.

---

## [1.2.1] — 2026-02-23

- Enforced global null-safety for entity IDs across all features.
- Resolved compilation and runtime issues in Bills, Debts, Savings, Budget, and Recurring.
- Fixed potential data loss in repository import methods.
- Fixed critical bug where adding a new wallet could overwrite an existing one.

---

## [1.2.0] — 2026-02-22 (Major: Financial Core Overhaul)

- **Multi-Photo**: Premium users can attach up to 3 photos per transaction.
- **Performance**: Removed heavy GPU blur effects; added RepaintBoundary isolation; cached string operations.
- **Backup**: Fixed orphaned images being included in backup.
- **Localization**: Complete Indonesian support across Transactions, Statistics, and Settings.
- **Security**: Refactored biometric authentication for improved compatibility.
- **Premium**: Restored VIP redemption flow.
- **Data Integrity**: Fixed backup restore anomaly (prevented double balances & broken wallet links).
- **Dashboard**: Fixed "Expense" calculation for custom categories.
- **Statistics**: Unified "Exclude from Total" logic across all charting modules.
- **Debt**: Added "Exclude from Calculations" & robust type-switching logic.
- **Credit Card**: New specialized repayment module with percentage shortcuts.
- **Quick Record**: Fixed voice recognition failing on first attempt (race condition & timer fix).
- **Import**: Date+time support, pre-import category mapping, auto-create destination wallets.

---

## [1.1.9] — 2026-02-16

- Quick Record: Smarter category detection with word-boundary matching.
- Auto-strips e-wallet names (ShopeePay, GoPay, OVO, DANA) before category matching.
- Transaction titles now show accurate subcategory names.
- Synced pattern subcategory keys with database.

---

## [1.1.8] — 2026-02-11 (Major: Savings Overhaul)

- Premium: Added usage limits for Recurring, Savings, Cards, and Wishlist.
- Fixed category reset bug and duplicate records when editing.
- Fixed wallet deletion bug & double balance revert.
- Bills: Added "Undo Payment" feature; integrated Wallet Selector; added "Bill Type" categorization.
- Wishlist: Fixed "Missing Date" bug; integrated Purchase flow with automatic wallet deduction.
- Savings: Distinct teal colors & icons; "Force Delete" protection.
- Enhanced Data Management (Safe Reset & Delete History options).
- Android 15: Edge-to-Edge & fixed UI overlap in Numpad.

---

## [1.1.7] — 2026-02-09

- Fixed subscription activation issues.
- Quick Record: Smarter parsing (preserves context words).
- Fixed download template permission errors.
- Added "Floating" Note input for better visibility.
- Categories: Added "Unsaved Changes" alert & fixed sorting bug.

---

## [1.1.6] — 2026-02-07

- Dashboard: Redesigned with Glassmorphism visuals.
- Quick Preview: Long-press any transaction to see details instantly.
- Standardized wallet icon sizes; smart balance text auto-resizing.

---

## [1.1.5] — 2026-02-03

- Fixed crash duplicate wallets saat input transaksi.
- Tombol Backspace bisa ditahan untuk hapus cepat (Hold-to-delete).
- Tombol Pemasukan/Pengeluaran lebih responsif.
- Tambah lampiran foto/struk pada transaksi.
- Onboarding: Perbaikan keyboard yang tidak tertutup otomatis.

---

## [1.1.4] — 2026-01-30

- Menampilkan pesan error detail saat gagal memuat produk Premium (untuk debugging).

---

## [1.1.3] — 2026-01-29

- Perbaikan deskripsi langganan sesuai kebijakan Google Play Store.
- Menambahkan informasi detail Free Trial (durasi, harga lanjut, pembatalan).
- Pembaruan tampilan halaman Premium (Subscription Terms & Legal Links).

---

## [1.1.2] — 2026-01-28

- Fitur Statistik: Grafik tetap muncul meskipun belum ada data (Persistent Stats).
- Cloud Sync: Peringatan "Sertifikasi Tertunda" agar user umum tidak bingung.
- Quick Record: Pesan error suara lebih sopan dan jelas.

---

## [1.1.1] — 2026-01-27

- Perfomance Upgrade: Migrated to new faster database engine.
- Quick Record: Improved "Save & Adjust" navigation.
- Fixed Subscription & Payment issues.
- Security & Stability improvements.

---

## [1.0.0] — 2025-05-01

- Initial Release.
- Added Transactions, Wallets, and Budgets.
- Smart Notes Integration.
- Google Drive Backup.
