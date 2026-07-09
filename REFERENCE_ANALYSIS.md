<!--
================================================================================
  ANALYSIS.md — Ollo App Project Analysis
  Version: 1.2.88+136
  Last Updated: 2026-05-14

  📋 UNTUK AI AGENT / DEVELOPER:
  File ini adalah dokumentasi arsitektur & tech stack Ollo. Update file ini
  ketika ada perubahan besar pada:
  - Tech stack (upgrade Flutter, tambah package, dll)
  - Arsitektur (tambah feature module, ubah pattern)
  - Database schema (tambah tabel/field)
  - Fitur baru yang signifikan

  Cara update:
  1. Edit section yang relevan di bawah
  2. Update tanggal "Last Updated" di atas
  3. Update versi jika ada perubahan major
================================================================================
-->
# Ollo Project Analysis

**Last Updated**: 2026-05-14 | **Version**: 1.2.88+136

## Overview
Ollo is a comprehensive personal finance management application built with **Flutter**. The project is mature, feature-rich, and supports multiple platforms (Android, iOS, Windows, macOS, Linux, Web).

---

## Tech Stack

| Component | Technology | Version |
|-----------|------------|---------|
| **Framework** | Flutter | SDK ^3.8.1 |
| **State Management** | Riverpod | ^2.6.1 |
| **Navigation** | Go Router | ^17.0.0 |
| **Database** | Drift (SQLite) | any (via `packages/local_database`) |
| **Localization** | Flutter intl | ^0.20.2 |
| **Notifications** | Flutter Local Notifications | ^18.0.1 |
| **In-App Purchase** | RevenueCat (purchases_flutter) | ^8.6.0 |
| **Typography** | Google Fonts (Poppins) | ^6.3.2 |
| **Charts** | FL Chart | ^0.69.0 |
| **Voice Input** | Speech to Text | ^7.3.0 |
| **OCR** | Apple Vision (iOS) / ML Kit (Android) | Native platform channels |
| **Cloud Sync** | Dio + Socket.io client | ^5.7.0 / ^3.0.0 |
| **Auth** | Google Sign-In / Sign in with Apple | ^6.3.0 / ^7.0.1 |
| **Secure Storage** | Flutter Secure Storage | ^10.0.0 |
| **Biometric** | Local Auth | ^3.0.0 |

> **Note**: Isar database has been fully removed. The app now uses Drift (SQLite) exclusively via the `packages/local_database` package. Legacy Isar migration code is commented out in `main.dart`.

---

## Architecture

### Project Structure
```
lib/
├── main.dart                          # Entry point (ProviderContainer overrides)
├── l10n/                              # Localization files (7 languages)
│   ├── app_en.arb                    # English (Template)
│   ├── app_id.arb                    # Indonesian
│   ├── app_es.arb                    # Spanish
│   ├── app_hi.arb                    # Hindi
│   ├── app_ja.arb                    # Japanese
│   ├── app_ko.arb                    # Korean
│   └── app_zh.arb                    # Mandarin Chinese
└── src/
    ├── app.dart                       # Main App widget (MaterialApp.router)
    ├── routing/app_router.dart        # GoRouter configuration
    ├── common_widgets/                # Reusable UI components
    ├── constants/                     # Colors, sizes, themes
    ├── localization/                  # Generated localization code
    ├── services/                      # Cloud sync, auth, Google Drive
    ├── theme/                         # OlloColors, theme provider, context extension
    ├── utils/                         # Helpers (icons, formatters, etc.)
    └── features/                      # Feature-based modules (27 features)
```

### Feature Module Structure
Each feature follows a consistent layered pattern:
```
feature/
├── domain/        # Entity models, business logic, enums
├── data/          # Repository pattern (abstract + SQLite implementation)
├── application/   # Services (complex business operations)
└── presentation/  # Screens, widgets, Riverpod providers
```

### Navigation Architecture
- **GoRouter** with `StatefulShellRoute.indexedStack` for 4 main tabs:
  - `/home` — Dashboard
  - `/statistics` — Charts & analytics
  - `/wallet` — Wallet management
  - `/profile` — User profile & settings
- **Responsive layout**: Mobile uses `ScaffoldWithNavBar`, desktop web uses `ScaffoldWithSidebar` + `WebSidebar`
- **Sub-routes** for add/edit/detail screens per feature

---

## Features (27 Modules)

### Core Financial
| Module | Description |
|--------|-------------|
| `transactions` | Income, Expense, Transfer, Asset Buy/Sell, Reimbursement tracking with wallet balance updates |
| `wallets` | Bank, E-Wallet, Cash, Credit Card, Exchange, Savings, Investment management + Pockets (sub-wallets) |
| `categories` | Custom categories with icons, colors, and subcategories |
| `budget` | Monthly budget tracking with dynamic spending calculation |

### Quick Entry
| Module | Description |
|--------|-------------|
| `quick_record` | Voice & text AI-powered transaction entry (multi-language pattern matching) |
| `recurring` | Automated recurring transactions and bills |

### Financial Planning
| Module | Description |
|--------|-------------|
| `debts` | Debt tracking with payment history and reminders |
| `bills` | Bill reminders and payment tracking with interactive notifications |
| `savings` | Saving goals with deposit/withdraw logs, wallet-linked |
| `wishlist` | Wishlist items with saving progress |
| `reimbursement` | Expense reimbursement tracking |

### Analytics
| Module | Description |
|--------|-------------|
| `statistics` | Charts, spending analysis, category breakdown, comparison views |
| `dashboard` | Home screen with summary widgets, recent transactions, budget cards |

### User & Settings
| Module | Description |
|--------|-------------|
| `profile` | User profile, premium status, developer options, data export/import |
| `subscription` | Premium/VIP/Developer tiers via RevenueCat + server-side sync |
| `settings` | Language, currency, notifications, themes, icon packs, security, cloud sync |
| `onboarding` | First-time user setup flow with restore-from-backup option |

### Additional Features
| Module | Description |
|--------|-------------|
| `gamification` | Achievements and badges |
| `smart_notes` | Financial notes with transaction linking |
| `home_widget` | Android home screen widgets |
| `notifications` | Daily/Weekly/Monthly reminders + entity reminders (bills, debts, recurring) |
| `backup` | Data export/import (JSON v2 + ZIP media), Google Drive sync |
| `cards` | Credit/Debit card management with custom backgrounds |
| `assets` | User asset/investment tracking (crypto, metals, etc.) |
| `announcements` | In-app announcements |
| `roadmap` | Product roadmap display |

---

## Data Layer

### Drift (SQLite) Database
- **Local-first** SQL database via Drift ORM
- Package: `packages/local_database/lib/app_database.dart` (`AppDatabase extends _$AppDatabase`)
- All repositories use abstract interface + `Sqlite*Repository` implementation
- Atomic operations via `db.transaction()`
- Cloud sync columns (dirty tracking) added via migration v28

### Core Entities
| Entity | Key Fields |
|--------|------------|
| `Transaction` | id, title, amount, date, type (enum), status, walletId (String), categoryId (String), subCategoryId/Name/Icon, currencyCode, convertedAmount, transferAmount, isExcluded, isBalanceExcluded, assetCode, assetAmount, imagePaths |
| `Wallet` | id, externalId, name, balance, iconPath, colorValue, type (enum), currencyCode, isExcluded, parentId (pockets), sortOrder |
| `Category` | id, externalId, name, iconPath, type (income/expense), colorValue, sortOrder, subCategories |
| `SubCategory` | id, name, iconPath |
| `Budget` | id, categoryId, amount, period, startDate |
| `Debt` | id, title, amount, paidAmount, dueDate, personName, type |
| `SavingGoal` | id, name, targetAmount, currentAmount, deadline, walletId |
| `Bill` | id, title, amount, dueDate, walletId, currencyCode, paidAt, billType, recurringTransactionId, transactionId |
| `RecurringTransaction` | id, title, amount, type, frequency, nextDueDate, walletId, categoryId |
| `BankCard` | id, name, number, expiry, color, background, walletId |
| `SmartNote` | id, title, content, transactionIds, createdAt |
| `Wishlist` | id, name, price, imagePath, isPurchased |
| `UserAsset` | id, name, code, amount, walletId, buyPrice |

### Repository Pattern
```dart
// Abstract interface
abstract class TransactionRepository {
  Future<int> addTransaction(Transaction transaction);
  Future<void> updateTransaction(Transaction transaction);
  Future<void> deleteTransaction(int id);
  Stream<List<Transaction>> watchTransactions();
  // ... pagination, import/export
}

// SQLite implementation
class SqliteTransactionRepository implements TransactionRepository {
  final AppDatabase db;
  // ... Drift queries
}

// Provider
final transactionRepositoryProvider = FutureProvider<TransactionRepository>((ref) async {
  final db = ref.watch(appDatabaseProvider);
  return SqliteTransactionRepository(db);
});
```

---

## State Management

### Riverpod Providers
```dart
// Database provider
final appDatabaseProvider = Provider<AppDatabase>((ref) => AppDatabase());

// Repository providers (FutureProvider for async init)
final transactionRepositoryProvider = FutureProvider<TransactionRepository>(...);
final walletRepositoryProvider = FutureProvider<WalletRepository>(...);

// Stream providers for reactive UI
final transactionStreamProvider = StreamProvider<List<Transaction>>(...);

// State providers
final languageProvider = StateNotifierProvider<LanguageNotifier, AppLanguage>(...);
final themeModeProvider = StateNotifierProvider<ThemeModeNotifier, OlloThemeMode>(...);
final subscriptionStatusProvider = StateNotifierProvider<SubscriptionNotifier, SubscriptionStatus>(...);
final cloudAuthProvider = StateNotifierProvider<CloudAuthNotifier, CloudAuthState>(...);
final cloudSyncProvider = StateNotifierProvider<SyncNotifier, SyncState>(...);
final securityProvider = StateNotifierProvider<SecurityNotifier, SecurityState>(...);
```

### Widget Types
- `ConsumerWidget` — Stateless widgets with Riverpod
- `ConsumerStatefulWidget` — Stateful widgets with Riverpod

---

## Transaction & Wallet Interaction

### Current Implementation (SAFE ✅)
The transaction-wallet balance interaction is **atomic** within Drift transactions:

```dart
// SqliteTransactionRepository.addTransaction()
@override
Future<int> addTransaction(Transaction transaction) async {
  return await db.transaction(() async {
    // 1. Insert transaction
    await db.into(db.transactions).insert(...);

    // 2. Update source wallet balance (atomic)
    if (transaction.walletId != null) {
      final wallet = await (db.select(db.wallets)..where((w) => ...)).getSingleOrNull();
      if (wallet != null) {
        final delta = transaction.isIncome ? transaction.amount : -transaction.amount;
        await (db.update(db.wallets)..where((w) => w.id.equals(wallet.id)))
            .write(WalletsCompanion(balance: Value(wallet.balance + delta)));
      }
    }

    // 3. Update destination wallet for transfers (atomic)
    // 4. Sync UserAsset for assetBuy/assetSell
    // 5. Sync SavingGoal balance for linked wallets

    return id;
  }); // All operations commit or rollback together
}
```

### Key Safety Features
1. **Atomic Transactions**: All database operations wrapped in `db.transaction()`
2. **Automatic Balance Updates**: Repository handles wallet balance changes
3. **Cascade Deletes**: Deleting transactions reverts wallet balances
4. **Transfer Support**: Both source and destination wallets updated atomically
5. **Asset Sync**: `_syncUserAsset()` is the ONLY place that modifies UserAsset amounts
6. **SavingGoal Sync**: Wallet balance changes auto-sync to linked SavingGoal
7. **Pocket Cascade**: Deleting a wallet cascades to child pockets + nullifies UserAssets

---

## Theme System

### OlloColors (ThemeExtension)
Access via `context.ollo`:
```dart
extension OlloThemeContext on BuildContext {
  OlloColors get ollo => Theme.of(this).extension<OlloColors>() ?? olloLight;
}
```

### Available Themes
| Theme | Description | Access |
|-------|-------------|--------|
| `olloLight` | Default light theme (soft pastel palette) | Default |
| `olloDark` | Dark theme with re-toned colors | User preference |
| `olloMidnight` | True black OLED theme (Developer only) | Developer tier |
| `olloNordic` | Sage green nature-inspired light theme (Developer only) | Developer tier |

### Theme Modes
```dart
enum OlloThemeMode { light, dark, midnight, nordic, system }
```

### Color Tokens
- `background`, `surface`, `surfaceVariant`
- `textPrimary`, `textSecondary`
- `accentBlueSoft`, `accentPurpleSoft`, `accentPeachSoft`
- `border`, `primary`, `onPrimary`
- `success`, `error`, `warning`

---

## Localization

### Supported Languages (7)
- 🇺🇸 English (Template)
- 🇮🇩 Indonesian
- 🇪🇸 Spanish
- 🇮🇳 Hindi
- 🇯🇵 Japanese
- 🇰🇷 Korean
- 🇨🇳 Mandarin Chinese

### Quick Record Voice Languages
Multi-language pattern matching for AI transaction parsing:
- `lib/src/features/quick_record/domain/patterns/patterns_en.dart`
- `lib/src/features/quick_record/domain/patterns/patterns_id.dart`
- `lib/src/features/quick_record/domain/patterns/patterns_jp.dart`
- `lib/src/features/quick_record/domain/patterns/patterns_ko.dart`
- `lib/src/features/quick_record/domain/patterns/patterns_zh.dart`

### Localization Rule
- **Save English keys** in database (e.g., `'Breakfast'`), NOT translated strings
- UI layer translates via `CategoryLocalizationHelper.getDynamicTransactionTitle()`
- This allows dynamic language switching without data migration

---

## Premium Features (RevenueCat)

### Tiers
| Tier | Features |
|------|----------|
| **Free** | Basic transaction tracking, budgets, up to 7 wallets |
| **Premium** | Voice Quick Record, Receipt OCR, Advanced Stats, unlimited wallets |
| **VIP** | All Premium + Priority support, Early access |
| **Developer** | All features + Debug options, Midnight/Nordic themes |

### Subscription Types
- Monthly, 6-Month, Annual, Lifetime
- VIP Code redemption (Android/Web only, not iOS App Store)
- Server-side tier sync with RevenueCat linkage

---

## Cloud Sync

### Architecture
- **Backend**: Node.js + Express + PostgreSQL (VPS Hetzner)
- **Local**: Drift SQLite (offline-first cache)
- **Sync**: REST API via Dio + Socket.io for real-time
- **Conflict Resolution**: Last-Write-Wins
- **Auth**: Google Sign-In / Apple Sign-In → backend JWT tokens

### Key Services
- `CloudAuthService` — Google/Apple auth, token management
- `SyncEngine` — Bidirectional sync with dirty tracking
- `SyncMutationTracker` — Marks records as dirty for cloud sync
- `GoogleDriveService` — Google Drive backup integration
- `ApiClient` — Dio-based HTTP client with retry logic

---

## Security

### App Lock
- PIN code stored in `FlutterSecureStorage` (OS Keychain/Keystore)
- Biometric auth via `local_auth`
- 30-second grace period before re-locking
- `BiometricLockOverlay` wraps the entire app

### Backup Security
- **NEVER backed up**: `app_pin_code`, `app_lock_enabled`, `biometric_enabled`, `is_vip`, `is_developer`, `is_premium`, `used_vip_codes`
- **Safe to backup**: theme, language, currency, notifications, display preferences
- Backup format: JSON v2 + ZIP media (optional GZip obfuscation)

---

## Platform Support

| Platform | Status | Notes |
|----------|--------|-------|
| Android | ✅ Ready | Signing key configured, Home widgets, interactive notifications |
| iOS | ✅ Ready | Full feature parity, App Store IAP enforcement |
| Windows | ✅ Ready | Camera support via camera_windows |
| macOS | ✅ Ready | |
| Linux | ✅ Ready | |
| Web | ✅ Ready | Limited camera/voice features, Google Drive backup |

---

## Build & Version

- **Current Version**: 1.2.88+136
- **Min Android SDK**: 21
- **Flutter SDK**: ^3.8.1
- **Dart SDK**: ^3.8.1

### Sub-Projects
| Sub-Project | Path | Tech | Purpose |
|---|---|---|---|
| **bot/** | `bot/` | Python + python-telegram-bot | Deploy bot, commit, bump, AI agent |
| **web/** | `web/` | Flutter Web | Web version of Ollo |
| **web-dashboard/** | `web-dashboard/` | Node.js + Vite | Admin/monitoring dashboard |
| **backend/** | `backend/` | Node.js + Express + PostgreSQL | Cloud sync API + Socket.io |
| **local_database** | `packages/local_database/` | Drift | Database ORM package |

---

## Key Architectural Patterns

1. **Feature-First Organization**: Each feature is self-contained with domain/data/application/presentation layers
2. **Repository Pattern**: Abstract interface + SQLite implementation, injected via Riverpod FutureProvider
3. **Reactive Streams**: Drift `watch()` queries for real-time UI updates via StreamProvider
4. **Atomic Financial Operations**: All transaction-wallet interactions in `db.transaction()`
5. **Strategy Pattern**: Quick Record language parsing (IndonesianStrategy, EnglishStrategy, etc.)
6. **Theme Extension**: OlloColors as ThemeExtension, accessed via `context.ollo`
7. **Responsive Layout**: Mobile nav bar vs desktop sidebar via `ResponsiveLayout` widget
8. **Cloud-First Auth**: Google/Apple sign-in → backend JWT → RevenueCat linkage

---

## Conclusion

Ollo is a well-architected, production-ready personal finance application with:
- ✅ Clean Feature-First architecture (27 modules)
- ✅ Robust local database with Drift (SQLite)
- ✅ Reactive state management with Riverpod
- ✅ Comprehensive localization (7 languages)
- ✅ Atomic transaction/wallet operations
- ✅ Multi-platform support (6 platforms)
- ✅ Premium subscription via RevenueCat
- ✅ Cloud sync with offline-first architecture
- ✅ Biometric security with PIN fallback
- ✅ AI-powered Quick Record with multi-language NLP
- ✅ Comprehensive backup/restore system
