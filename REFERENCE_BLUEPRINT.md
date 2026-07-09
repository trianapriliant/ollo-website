<!--
================================================================================
  BLUEPRINT.md — Ollo App Architecture Blueprint
  Version: 1.2.88+136
  Last Updated: 2026-05-14

  📋 UNTUK AI AGENT / DEVELOPER:
  File ini adalah panduan arsitektur & best practices Ollo. Update file ini
  ketika ada perubahan pada:
  - Arsitektur (pola baru, refactor besar)
  - Database (schema migration, tabel baru)
  - Security rules (aturan keamanan baru)
  - State management (provider baru, pattern baru)
  - Navigation (route baru, struktur berubah)

  Cara update:
  1. Edit section yang relevan di bawah
  2. Update tanggal "Last Updated" di atas
  3. Update versi jika ada perubahan major
================================================================================
-->
# Ollo Architecture Blueprint & Development Guidelines

**Last Updated**: 2026-05-14 | **Version**: 1.2.88+136

---

## Quick Record & Natural Language Parsing

### Robust Category & Sub-Category Binding
**Context**: When a user dictates or types a transaction (e.g., "Makan Malam 20k"), the `QuickRecordService` parses the string to identify the category/sub-category.

**The Challenge**:
Initially, parsing English category mapping keys (e.g., `'Dinner'`) against the local database entries (`'Makan Malam'`) caused matching failures. As a result, the `subCategoryId` was dropped (`null`), and the "Add Transaction" (Sesuaikan) screen would fall back to the parent category alone ("Makanan & Minum"), losing the draft's precision.

**The Solution & Best Practices**:

1. **Localization Injection (`LanguageStrategy.localizeSubCategoryKey`)**
   - **Pattern**: Pluggable Strategy Pattern.
   - **Implementation**: The base parser (`LanguageStrategy`) checks the database using a cross-referencing approach. It checks both the raw English key AND the `localizeSubCategoryKey` result (which is overridden by `IndonesianStrategy`).
   - **Why this matters for the future**: If we add a new language strategy, no core parsing logic needs to be touched. We simply override `localizeSubCategoryKey` in the new strategy to provide the dictionary mapping.

2. **Deterministic UI Pre-filling (`AddTransactionScreen`)**
   - **Anti-Pattern (Avoid)**: Trying to select a dropdown item by matching localized strings case-sensitively (e.g., `item.subCategory?.name == draft.subCategoryName`). Strings are fragile and prone to capitalization mismatches.
   - **Standard Practice (Enforced)**: Bind UI dropdowns using the Database ID (`subCategoryId`). The parsing engine must successfully fetch the database `SubCategory` object and pass its ID forward. The edit screen must *always* test `item.subCategory?.id == draft.subCategoryId` first before falling back to string matching.

3. **Dynamic Title and Category Localization**
   - **The Rule**: In NLP Parsers (like `IndonesianStrategy`), NEVER save the translated string (e.g., `'Sarapan'`) into the database for `transaction.title` or `transaction.subCategoryName`.
   - **Standard Practice**: Always save the **original English Key** (e.g., `'Breakfast'`).
   - **Why**: The UI layer (e.g., `TransactionListItem`, `RecentTransactionsList`, `ReviewView`) uses `CategoryLocalizationHelper.getDynamicTransactionTitle` which dynamically translates the English Key into the user's active app language (id, en, es, etc.) at runtime. If a hardcoded translation is saved, dynamic localization fails when changing languages.

4. **Personal Memory**
   - `QuickRecordPersonalMemoryService` learns from user corrections to improve future parsing accuracy.

---

## General Guidelines for New Developers

### Zero Hallucination Policy
Do not guess paths or widget properties. Always verify from source code. Use IDE "Go to Definition" extensively.

### Context Safety
Never reference `context` globally or inside non-widget scopes. Always pass `BuildContext` explicitly. Never store `context` in class fields or static variables.

### Theme Binding
**Never hardcode colors** like `Colors.red` or `Color(0xFF123456)`. Always use `context.ollo` (the custom `OlloColors` ThemeExtension):
```dart
// ✅ CORRECT
Container(color: context.ollo.primary)
Text(style: TextStyle(color: context.ollo.textPrimary))

// ❌ WRONG
Container(color: Color(0xFF2D3E50))
Text(style: TextStyle(color: Colors.black))
```

### Edge-to-Edge Compliance
Ensure bottom sheets and footers always incorporate `AppSizes.getBottomPadding(context)` to respect Android OS navigation gestures:
```dart
Padding(
  padding: EdgeInsets.only(bottom: AppSizes.getBottomPadding(context)),
  child: ...,
)
```
For main tab screens that sit behind the custom bottom bar, use `AppSizes.getMainTabBottomPadding(context)` instead.

### Database Operations
- **All** database write operations MUST be wrapped in `db.transaction()` for atomicity
- **Never** modify wallet balances directly — always go through the Repository layer
- **Never** modify UserAsset amounts outside of `SqliteTransactionRepository._syncUserAsset()`

### ID-based Binding
UI dropdowns must bind using database ID, not string matching. This applies to:
- Wallet selection (bind by `wallet.id`)
- Category selection (bind by `category.id`)
- Sub-category selection (bind by `subCategory.id`)

### Localization
- Save English keys in database, not translated strings
- UI layer handles translation via `CategoryLocalizationHelper`
- Adding a new language = adding a new ARB file + new `patterns_*.dart` for Quick Record

---

## Database Architecture

### Drift (SQLite) — Primary Database
- Package: `packages/local_database/lib/app_database.dart`
- All entities defined as Drift tables
- Code generation via `drift_dev` / `build_runner`
- Migrations handled in `AppDatabase.migration` callback

### Repository Pattern
Every feature follows this pattern:
```dart
// 1. Abstract interface (in data/<feature>_repository.dart)
abstract class XxxRepository {
  Future<void> add(...);
  Future<void> update(...);
  Future<void> delete(...);
  Stream<List<Xxx>> watchAll();
}

// 2. SQLite implementation (in data/sqlite_<feature>_repository.dart)
class SqliteXxxRepository implements XxxRepository {
  final AppDatabase db;
  SqliteXxxRepository(this.db);
  // ... Drift queries
}

// 3. Riverpod provider
final xxxRepositoryProvider = FutureProvider<XxxRepository>((ref) async {
  final db = ref.watch(appDatabaseProvider);
  return SqliteXxxRepository(db);
});
```

### Critical Invariants
1. **Transaction-Wallet Atomicity**: `addTransaction`, `updateTransaction`, `deleteTransaction` MUST be perfectly symmetrical in wallet balance effects
2. **Asset Sync**: `_syncUserAsset()` is the ONLY place that modifies UserAsset amounts
3. **Pocket Cascade**: `deleteWallet()` MUST cascade delete child pockets and nullify UserAssets
4. **SavingGoal Sync**: Wallet balance changes auto-sync to linked SavingGoal
5. **Backup Restore Order**: wallets/categories before transactions (FK dependencies)

---

## State Management

### Provider Hierarchy
```
ProviderContainer (main.dart)
├── sharedPreferencesProvider
├── appDatabaseProvider
├── onboardingRepositoryProvider
│
└── UncontrolledProviderScope
    └── OlloApp (ConsumerStatefulWidget)
        ├── goRouterProvider
        ├── languageProvider
        ├── themeModeProvider
        ├── resolvedOlloColorsProvider
        ├── subscriptionStatusProvider
        ├── cloudAuthProvider
        ├── cloudSyncProvider
        ├── securityProvider
        │
        └── Feature Providers
            ├── transactionRepositoryProvider → transactionStreamProvider
            ├── walletRepositoryProvider → walletStreamProvider
            └── ... (per feature)
```

### Widget Types
- **`ConsumerWidget`**: Stateless widgets that read Riverpod providers
- **`ConsumerStatefulWidget`**: Stateful widgets that read Riverpod providers
- Never use `StatelessWidget` or `StatefulWidget` directly in feature code

---

## Navigation

### Route Structure
- `/onboarding` → First-time setup (with sub-route `/onboarding/preferences`)
- `/home` → Dashboard (main tab)
- `/statistics` → Analytics (main tab, with sub-routes for category details)
- `/wallet` → Wallet management (main tab)
- `/profile` → User profile (main tab)
- `/budget`, `/savings`, `/bills`, `/debts`, `/wishlist`, `/smart-notes`, `/recurring`, `/cards`, `/assets`, `/reimburse` → Feature screens

### Responsive Behavior
- **Mobile**: `ScaffoldWithNavBar` with bottom navigation bar
- **Desktop Web** (≥1024px): `ScaffoldWithSidebar` + `WebSidebar`
- Detected via `ResponsiveLayout.isMobile(context)` and `context.isDesktopWeb`

---

## Security Rules

### App Lock
- PIN stored in `FlutterSecureStorage` (OS Keychain/Keystore)
- Biometric via `local_auth`
- 30-second grace period before re-locking
- `BiometricLockOverlay` wraps entire app in `MaterialApp.router.builder`

### Backup Security — NEVER Backup These Keys
- `app_pin_code` (FlutterSecureStorage)
- `app_lock_enabled`, `biometric_enabled` (SharedPreferences)
- `is_vip`, `is_developer`, `is_premium`, `used_vip_codes` (SharedPreferences)

### Backup Security — Safe to Backup
- Theme, language, currency preferences
- Notification settings
- Display preferences (icon pack, animation toggles)
- Widget settings

---

## Cloud Sync

### Flow
1. User signs in with Google/Apple → backend returns JWT tokens
2. Tokens stored via `ApiClient.saveTokens()`
3. `SyncMutationTracker.markDirty()` flags changed records
4. `SyncEngine` pushes dirty records to backend via REST API
5. `WebSocketService` listens for real-time updates from server
6. Conflict resolution: Last-Write-Wins

### Sync State
```dart
class SyncState {
  final bool isSyncing;
  final bool cloudSyncEnabled;
  final DateTime? lastSyncAt;
  final int pendingChanges;
  final String? error;
  final bool isAuthenticated;
}
```

---

## Theme System

### Available Themes
| Theme | Enum Value | Access |
|-------|------------|--------|
| Light (default) | `OlloThemeMode.light` | All users |
| Dark | `OlloThemeMode.dark` | All users |
| Midnight (OLED) | `OlloThemeMode.midnight` | Developer tier only |
| Nordic (Sage) | `OlloThemeMode.nordic` | Developer tier only |
| System | `OlloThemeMode.system` | All users |

### Adding a New Theme
1. Add new `OlloColors` constant in `lib/src/theme/ollo_color_tokens.dart`
2. Add enum value to `OlloThemeMode` in `lib/src/theme/theme_provider.dart`
3. Update `resolvedOlloColorsProvider` and `resolvedBrightnessProvider`
4. Update theme selection UI in settings

---

## Adding a New Feature

1. Create `lib/src/features/<feature>/` with `domain/`, `data/`, `application/`, `presentation/` subdirectories
2. Define domain models in `domain/` (with `toJson()`/`fromJson()`)
3. Add Drift table definition in `packages/local_database/lib/app_database.dart`
4. Run `dart run build_runner build` to generate Drift code
5. Create abstract repository interface in `data/<feature>_repository.dart`
6. Create SQLite implementation in `data/sqlite_<feature>_repository.dart`
7. Add Riverpod providers
8. Create screens in `presentation/`
9. Add routes in `lib/src/routing/app_router.dart`
10. Update this BLUEPRINT.md with any new architectural decisions

---

## Common Pitfalls

1. **Forgetting `db.transaction()`**: All multi-step DB operations must be atomic
2. **Hardcoded colors**: Always use `context.ollo.*`
3. **String matching for dropdowns**: Always bind by ID
4. **Saving translated strings in DB**: Always save English keys
5. **Modifying wallet balance directly**: Always go through Repository
6. **Modifying UserAsset outside `_syncUserAsset()`**: Never do this
7. **Forgetting cascade on wallet deletion**: Pockets must be cleaned up
8. **Adding fields to Transaction but not updating `toJson()`/`fromJson()`**: Backup/restore will break
9. **Adding new SharedPreferences key to backup without checking if it's device-specific**: Could cause security issues
10. **Using `context` in async gaps**: Always check `mounted` or pass context explicitly
