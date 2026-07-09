# Ollo App Changes Since Web Profile v1.2.88+136

Last web profile baseline: `v1.2.88+136`
Current app coverage in this summary: changes after `v1.2.88`, up to the latest recorded 2026-07 internal work.

This file is written as source material for updating the Ollo profile website. It summarizes user-facing changes and avoids exposing internal-only tier names or operational details that should not appear publicly.

## High-Level Summary

Since `v1.2.88+136`, Ollo has moved from an iOS launch-era finance tracker into a more complete cross-device personal finance system:

- Cloud Sync is now much more reliable, with connected-device visibility, better conflict handling, safer reset behavior, and immediate wallet balance refresh after passive sync.
- Wallet balances are more trustworthy across devices because they are derived from an opening baseline plus the transaction ledger.
- Home widgets expanded and were polished on Android and iOS.
- Transaction, wallet, budget, statistics, bill, recurring, savings, debt, and reimbursement flows received many safety and UI fixes.
- AI features were added in internal beta: AI Scan for receipts/proofs of payment and Ollo Assistant for privacy-aware personal finance chat.
- Premium and account flows were hardened, including subscription validation and clearer quota/account status displays.
- Tablet, desktop, and large-screen UI work started, including a persistent sidebar and more consistent bento-style spacing/header behavior.

## Version Timeline

### v1.4.3 — Recurring, Bills, Sync Identity, AI Scan Reliability

- Recurring templates are clearer to manage, including expense, income, and transfer templates.
- Bills now separate bill-managed recurring schedules from normal recurring templates.
- Bill recurring rows show amount and payment progress more clearly.
- Bill-managed recurring schedules are labeled and redirect edits through Bills when needed.
- Recurring and Bills icons/layouts were polished.
- Sync identities for recurring-generated transactions and bills are now deterministic, reducing cross-device duplicates.
- AI Scan handles foreign receipts more reliably, especially Japanese and Korean receipts, and avoids confusing cash/change fields with totals.
- Savings progress, statistics insight cards, Recurring detail, and Bill detail screens received visual polish.

### v1.4.2 — Flexible Recurring, Better Bills, Ollo Assistant Internal Beta

- Flexible Recurring was introduced: templates can be expense, income, or fixed-amount transfer.
- Recurring templates can end after a fixed number of cycles, linked with end-date behavior.
- Bills now show income/transfer direction more clearly and record the right transaction type when confirmed.
- Existing bills and recurring templates now correctly save changed custom icon images.
- Credit-card/pay-later limits now survive sync and remain consistent across devices.
- AI Scan review now keeps receipt currency, including foreign receipts, and produces clearer itemized notes.
- Ollo Assistant internal beta was introduced for personal finance conversations using aggregated summaries, not raw transaction titles/notes/attachments.
- Assistant context became richer: 12-month totals, income sources, daily averages, projections, unpaid bills, debts, savings, wishlist, and active recurring templates.
- Assistant can answer how-to questions about using Ollo and shows follow-up suggestion chips.
- Assistant chat history is saved locally on-device with delete and clear-all controls.
- Assistant personality settings were added.
- Home beta entry for Assistant was compacted into the quick actions area.
- Roadmap content was updated around the AI plan and privacy direction.

### v1.4.1 — AI Scan, AI Profile Section, Refresh Status UI

- AI Scan was added in internal beta for receipts, payment proofs, transfer screenshots, e-wallet history, and e-commerce invoices.
- AI Scan can infer merchant, total, date/time, and category from the user's own category list.
- Transfer screenshots are classified more intelligently as expense, income, or transfer.
- AI Scan note generation became configurable and reorderable.
- Scanned photos are attached to transactions automatically.
- Profile gained an AI section for AI Scan Settings, Quick Record Memory, and Voice Input Language.
- A new Share Ollo page was added.
- Home and Wallet pull-to-refresh were redesigned with a clear status pill.
- Transaction title/note inputs were improved, including multiline note visibility and quick-clear title control.

### v1.4.0 — Store, Paywall, Transaction Effects, Attachments, Balance Accuracy

- iOS store configuration was fixed so subscriptions load correctly on iPhone and iPad.
- The paywall was redesigned with stacked plan cards, per-month pricing, benefits, trial timeline, and sticky subscribe action.
- Transaction Detail gained a "View Transaction Effects" sheet explaining wallet, budget, card/debt, and net-balance impact.
- Attachment photos now open full-screen with pinch/double-tap zoom and swipe navigation.
- Transaction detail headers were made more compact.
- Net Balance Trend no longer counts credit-card/pay-later limits as cash.
- Home 30-day change now follows the same balance rules as Total Balance.
- Back buttons became consistent across screens.

### v1.3.9 — Bills Installments, Quick Fill, PayLater, Balance Diagnostics, Sync Security

- Recurring bills can end after a fixed number of payments, useful for installment-style bills.
- Add Transaction now suggests previously used titles and notes while typing.
- PayLater wallet detail now mirrors credit-card behavior.
- Wallet detail gained a read-only balance diagnosis tool.
- Manual balance corrections now create small synced balance-adjustment entries.
- Currency picker pins the default currency with a quick settings shortcut.
- Home-screen widgets open the correct app routes.
- Bank card and saving-goal colors sync correctly.
- Wallet balances now update correctly on receiving devices, including older wallets missing a baseline.
- Wallet screens refresh synced balances immediately after passive pull.
- Subscription and sync access checks were hardened server-side.

### v1.3.8 — Sync Hub, Connected Status, Reports, Profile Header

- Sync Hub was added with pending/conflict/device status.
- Profile gained a compact Cloud Sync status card.
- Cloud Sync page explains supported platforms and backup-first recommendations.
- Home total balance gained a sync status indicator.
- Manual wallet balance adjustment now stays consistent across devices.
- PDF statements fixed opening/closing balance for transfers and asset transactions.
- Profile header now shows Level, Streak, and Active Days.
- Investment assets stay linked to the correct wallet across devices.

### v1.3.7 — Ledger-Derived Wallet Balance Fixes

- Wallet balance drift across devices was fixed by deriving balances from opening balance plus transactions.
- Adding/deleting transactions on one device now updates wallet balance correctly on other devices.
- Wallet starting balances are preserved during sync.

### v1.3.6 — Sync Performance and Auto-Recovery

- Large cleanup/download sync loops were fixed.
- Initial downloads are lighter by skipping already-deleted items.
- Large pull operations apply in a single batch.
- Devices that fall far behind can auto-recover by re-downloading in the background.

### v1.3.5 — Sync Retry and Loop Fixes

- Fixed repeated re-download loops after large cleanup.
- Sync retry/backoff became more respectful of temporary rate limits.

### v1.3.4 — Duplicate Cleanup Performance and Responsive Sync Tools

- Bulk duplicate cleanup now applies more smoothly.
- Cloud Sync action buttons wrap correctly on narrow screens.

### v1.3.3 — Duplicate Transaction Prevention

- Transactions now keep stable identities across backup, restore, and devices.
- A Clean Duplicates tool was added to safely remove existing duplicated transactions.

### v1.3.2 — Version-Based Conflict Handling and Connected Devices

- Multi-device conflict handling became version-based instead of clock-based.
- One problematic record no longer makes an entire sync appear failed.
- Large accounts sync more reliably.
- Connected Devices screen was added.
- Remote sign-out for connected devices was added.
- Billing confirmation delays no longer block active subscribers from syncing.

### v1.3.1 — Home Calendar and Sync Audit Foundation

- Home Calendar view was added with daily income/expense summaries and month navigation.
- Default Home View wording was simplified.
- Multi-device transaction pull behavior was fixed to avoid local-ID collisions.
- Privacy-safe device-state reporting was added for reconciliation.
- Home Calendar and Statistics flicker was reduced when transient system panels appear.

### v1.2.95 — Home Widgets Polish and iOS Build Fixes

- iOS Balance, Budget Pulse, and Today Spending widgets were polished.
- Android widget layouts became more resilient and readable.
- Widget quick actions were added for balance charts and direct expense/income/transfer shortcuts.
- Widget quick-entry close behavior was fixed.
- iOS Widget Extension build/export settings were fixed.

### v1.2.93 — iOS Widgets and Android Widget Redesign

- iOS home widget support was added for Budget Pulse and Today Spending.
- Android Budget Pulse and Today Spending widgets were redesigned.
- Widget data sync became safer for partial updates.
- Widget deep links now open intended app screens.
- Empty-state and fallback handling for widgets was improved.
- Widget settings entry was temporarily removed while controls are simplified.

### v1.2.92 — Dashboard Shortcuts, Transaction Log, Charts, Budget, Wallet Charts

- Home shortcut menu gained card appearance, color palette, navigation bar, and transaction list style actions.
- Launcher icon safe margins were adjusted.
- Transaction Log back behavior, mobile date grouping, and reset filters were improved.
- "View All" routing was guarded to prevent duplicate navigation key crashes.
- Statistics monthly comparison and net balance trend charts were polished.
- Budget Detail period selector moved into the summary card.
- Wallet Detail chart labels and parent-wallet aggregate chart behavior were fixed.
- Financial Freedom target setup became more discoverable.
- Quick Record Scan was temporarily put behind maintenance messaging.
- Visual polish across Home, Statistics, and Wallet areas continued.

### v1.2.91 — Safety Hardening Across Wallets, Reimburse, Transactions, Bills, Savings, Debts

- Pocket Wallet ordering became safer and rollback-aware.
- Pocket Wallet edit/delete flows block invalid parent/orphan states.
- Wallet detail route restoration became safer.
- Reimburse completion gained double-tap protection and loading feedback.
- Net Worth help text clarified reimburse behavior.
- Transaction lists reduced per-item provider work for smoother scrolling.
- Bill payment, savings deposit/withdraw, and debt payment/edit/delete flows gained rollback protections.
- Recording Period settings UI was cleaned up.
- Missing localization keys were added.

### v1.2.90 — Transaction Bottom Sheet, Reimburse, Sync, Conversion, Backup

- Add Transaction bottom sheet became more usable on compact screens.
- Quick Reimburse was simplified into a capsule with focused amount popup.
- Transaction Detail bottom safe-area color mismatch was fixed.
- Reimburse completion navigation crashes were fixed.
- Completion preserves destination-wallet currency conversion.
- Sync error reporting and wallet-reference handling were hardened.
- More multi-currency display paths were fixed.
- Category restore became idempotent.
- AndroidX Glance dependencies were pinned for build stability.

### v1.2.89 — Multi-Currency, Sync Loop Fix, Backup Text, Navigation Polish

- Multi-currency display was fixed across previews, debts, wallet net balance, dashboard bills, widgets, gamification, and smart notes.
- Debt totals now convert all manual debts to global currency before summing.
- Home widget respects the user's global currency and locale.
- Exchange rates refresh on app resume and use a shorter staleness threshold.
- An infinite sync loop caused by push conflicts not clearing dirty status was fixed.
- Google Drive Backup screen wording was clarified.
- Cross-device sync text became platform-neutral.
- Transaction Log and Reimburse navigation animations were corrected.
- Recurring calendar cells were redesigned as rounded heatmap-style filled boxes.
- Financial Freedom target dialog was modernized.
- Backup & Sync screen title now matches other bold screen titles.

## Post-1.4.3 / Latest Internal Work To Consider For Website Copy

These are later implementation notes not necessarily grouped under a public app version yet:

- Account and AI access: free users can trial AI after account sign-in; Premium users receive higher monthly/daily AI quotas.
- AI usage screen: Account Management shows real-time remaining AI Scan and Assistant quota when signed in.
- AI agreements: AI Scan and Assistant now show one-time explanations about server-side AI processing and privacy scope per account.
- AI Assistant privacy: assistant context is aggregated; raw transaction titles, notes, merchants, and attachments are not sent.
- AI Scan foreign-currency hardening: common foreign receipt currencies are detected more reliably, with review warnings when currency is corrected or ambiguous.
- Sync Reset hardening: reset no longer drops pending local delete intents, reducing the chance that old deleted bills/recurring items reappear.
- Sync observability: pending delete counts can be reported for support/audit without sending record contents.
- Tablet/desktop UI: large-screen sidebar stays available across menu pages, can expand/collapse, and uses more consistent spacing/header behavior.
- Main tablet tabs: Home, Statistics, Wallet, and Profile headers were adjusted so scrolling no longer exposes a sharp mobile-style AppBar.
- Public copy cleanup: Account Management no longer exposes internal legacy tier names in AI limit/status text.

## Suggested Website Update Areas

Use the sections above to update these pages in `Ollo-Profile`:

- `src/app/page.tsx`: update hero/feature highlights with Cloud Sync reliability, AI Scan, Assistant beta/privacy, and home widgets.
- `src/app/features/page.tsx`: add or reorder feature blocks for AI, Cloud Sync, Widgets, Ledger-style balances, Recurring/Bills, and large-screen support.
- `src/app/roadmap/page.tsx`: move completed items through Cloud Sync, widgets, AI Scan beta, Assistant beta, and tablet/desktop UI polish; keep unfinished shared budget/web app items in upcoming.
- `src/app/download/page.tsx`: update version from `1.2.88+136` to the current intended public version before deployment.
- `src/components/Footer.tsx`: update footer version when the website content is refreshed.
- `src/lib/translations.ts`: add matching EN/ID copy for any website-facing text changes.

## Public Messaging Guardrails

- Do not mention internal legacy tier names in public website copy.
- Keep AI wording privacy-forward: "aggregated summaries", "review before saving", "server-side AI processing", and "not financial advice".
- For unreleased/internal beta features, label them clearly as beta or "rolling out" if they are not yet public.
- Avoid promising web/desktop app availability unless the release state is confirmed.
