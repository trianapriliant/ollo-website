"use client";

import styles from "./page.module.css";
import {
    Check,
    Clock,
    Spark,
    Trophy,
    Microphone,
    Camera,
    Palette,
    Text,
    RefreshDouble,
    Code,
    Globe,
    Cloud,
    Bell,
    Coins,
    HalfMoon,
    Flash,
    ShareAndroid,
    List,
    ShieldCheck,
    Cpu,
    MultiplePages,
    CreditCard,
    Import,
    Box,
    Frame,
    PrivacyPolicy,
    Wallet,
    Calendar,
} from "iconoir-react";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslations } from "@/lib/translations";

export default function RoadmapPage() {
    const { language } = useLanguage();
    const t = getTranslations(language);

    const completedFeatures = [
        {
            icon: Bell,
            title: "Recurring & Bills Engine Polishing",
            description: "Deterministic sync identities for bills/recurring transactions to prevent duplicates. Clear amount and payment progress displays.",
            version: "1.4.3",
        },
        {
            icon: Spark,
            title: "Ollo AI Assistant Beta & Flexible Recurring",
            description: "Privacy-first AI chat assistant using secure aggregated account summaries. Flexible recurring templates supporting expense, income, or transfers with fixed cycles.",
            version: "1.4.2",
        },
        {
            icon: Camera,
            title: "AI Scan & Receipts Auto-categorization",
            description: "AI-powered scanner for receipts, payment proofs, transfer screenshots, and invoices. Automatically extracts total, merchant, date, and maps to categories.",
            version: "1.4.1",
        },
        {
            icon: MultiplePages,
            title: "Transaction Effects & Attachments Viewer",
            description: "Transaction Effects sheet explaining exact wallet/budget/debt balance impact. Full-screen attachments viewer with pinch-zoom and swipe gestures.",
            version: "1.4.0",
        },
        {
            icon: Coins,
            title: "Installment Bills & Input Quick-Fill",
            description: "Support for installment-style bills ending after fixed payments. Quick-fill suggestions for titles and notes based on transaction history.",
            version: "1.3.9",
        },
        {
            icon: Cloud,
            title: "Sync Hub & Connected Devices Management",
            description: "Dedicated Sync Hub tracking conflict, pending, and device status. Remote sign-out for connected devices and secure background sync recovery.",
            version: "1.3.8",
        },
        {
            icon: Wallet,
            title: "Ledger-Derived Wallet Balances",
            description: "Switched wallet balance tracking to a transaction ledger model. Prevents multi-device balance drift and preserves starting balances.",
            version: "1.3.7",
        },
        {
            icon: Calendar,
            title: "Home Calendar View",
            description: "Interactive monthly calendar displaying daily income/expense summaries, month-over-month navigation, and reduced visual flicker.",
            version: "1.3.1",
        },
        {
            icon: Box,
            title: "HomeScreen Widgets Redesign",
            description: "Redesigned Android and iOS home widgets including Budget Pulse, Today Spending, and Balance charts with direct entry shortcuts.",
            version: "1.2.93",
        },
        {
            icon: Globe,
            title: "Multi-Currency Polish",
            description: "Global currency display fixes across previews, debts, bills, and widgets. Shorter exchange rate staleness thresholds and automated rate refreshes.",
            version: "1.2.89",
        },
        {
            icon: ShieldCheck,
            title: "iOS App Store Launch",
            description: "Ollo is now available on iOS App Store! Full feature parity with Android including voice Quick Record, OCR, and cloud sync.",
            version: "1.2.88",
        },
        {
            icon: ShieldCheck,
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
        {
            icon: Cpu,
            title: t.roadmap.performancePro,
            description: t.roadmap.performanceProDesc,
            version: "1.2.1",
        },
        {
            icon: MultiplePages,
            title: t.roadmap.multiPhoto,
            description: t.roadmap.multiPhotoDesc,
            version: "1.2.0+",
        },
        {
            icon: CreditCard,
            title: t.roadmap.repaymentModule,
            description: t.roadmap.repaymentModuleDesc,
            version: "1.2.0+",
        },
        {
            icon: Import,
            title: t.roadmap.import2,
            description: t.roadmap.import2Desc,
            version: "1.2.0",
        },
        {
            icon: Frame,
            title: t.roadmap.edgeToEdge,
            description: t.roadmap.edgeToEdgeDesc,
            version: "1.1.x",
        },
        {
            icon: Box,
            title: t.roadmap.glassmorphism,
            description: t.roadmap.glassmorphismDesc,
            version: "1.1.x",
        },
        {
            icon: PrivacyPolicy,
            title: t.roadmap.safetyFeatures,
            description: t.roadmap.safetyFeaturesDesc,
            version: "1.1.x",
        },
        {
            icon: List,
            title: t.roadmap.categoryReorder,
            description: t.roadmap.categoryReorderDesc,
            version: "0.9.7",
        },
        {
            icon: ShareAndroid,
            title: t.roadmap.backupSystemRedesign,
            description: t.roadmap.backupSystemRedesignDesc,
            version: "0.9.5",
        },
        {
            icon: Flash,
            title: t.roadmap.performanceOptimizations,
            description: t.roadmap.performanceOptimizationsDesc,
            version: "0.9.2",
        },
        {
            icon: Palette,
            title: t.roadmap.menuAppearanceSystem,
            description: t.roadmap.menuAppearanceSystemDesc,
            version: "0.9.0",
        },
        {
            icon: Palette,
            title: t.roadmap.darkModeCardThemes,
            description: t.roadmap.darkModeCardThemesDesc,
            version: "0.8.3",
        },
        {
            icon: HalfMoon,
            title: t.roadmap.themeSelectionScreen,
            description: t.roadmap.themeSelectionScreenDesc,
            version: "0.8.0",
        },
        {
            icon: Spark,
            title: t.roadmap.onboardingGateway,
            description: t.roadmap.onboardingGatewayDesc,
            version: "0.7.5",
        },
        {
            icon: Coins,
            title: t.roadmap.globalCurrencySupport,
            description: t.roadmap.globalCurrencySupportDesc,
            version: "0.7.2",
        },
        {
            icon: Bell,
            title: t.roadmap.billDebtReminders,
            description: t.roadmap.billDebtRemindersDesc,
            version: "0.7.1",
        },
        {
            icon: Code,
            title: t.roadmap.vipCodeSystem,
            description: t.roadmap.vipCodeSystemDesc,
            version: "0.7.0",
        },
        {
            icon: Microphone,
            title: t.roadmap.freemiumQuickRecord,
            description: t.roadmap.freemiumQuickRecordDesc,
            version: "0.7.0",
        },
        {
            icon: Palette,
            title: t.roadmap.premiumColorThemes,
            description: t.roadmap.premiumColorThemesDesc,
            version: "0.7.0",
        },
        {
            icon: Text,
            title: t.roadmap.keyboardAutoCapitalization,
            description: t.roadmap.keyboardAutoCapitalizationDesc,
            version: "0.7.0",
        },
        {
            icon: RefreshDouble,
            title: t.roadmap.appRestartBackupRestore,
            description: t.roadmap.appRestartBackupRestoreDesc,
            version: "0.7.0",
        },
    ];

    const upcomingFeatures = [
        {
            icon: ShareAndroid,
            title: "Shared Budget & Family Finance",
            description: "Share budgets and financial goals with family members or partners.",
            status: t.roadmap.planned,
        },
        {
            icon: Globe,
            title: "Ollo Web App",
            description: "Full web version of Ollo with cloud sync for seamless cross-platform experience.",
            status: t.roadmap.planned,
        },
    ];

    return (
        <main className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <span className={styles.badge}>
                        <Spark className={styles.badgeIcon} />
                        {t.roadmap.badge}
                    </span>
                    <h1 className={styles.title}>
                        {t.roadmap.title1}<br />
                        <span className={styles.gradient}>{t.roadmap.title2}</span>
                    </h1>
                    <p className={styles.subtitle}>
                        {t.roadmap.subtitle}
                    </p>
                    <p className={styles.lastUpdated}>
                        {t.roadmap.lastUpdated}
                    </p>
                </div>
            </section>

            {/* Completed Features */}
            <section className={styles.completed}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.sectionBadge}>
                            <Trophy className={styles.sectionBadgeIcon} />
                            <span>{t.roadmap.completedBadge}</span>
                        </div>
                        <h2 className={styles.sectionTitle}>{t.roadmap.completedTitle}</h2>
                        <p className={styles.sectionSubtitle}>
                            {t.roadmap.completedSubtitle}
                        </p>
                    </div>
                    <div className={styles.featuresGrid}>
                        {completedFeatures.map((feature) => (
                            <div key={feature.title} className={styles.featureCard}>
                                <div className={styles.featureHeader}>
                                    <div className={styles.featureIconWrapper}>
                                        <feature.icon className={styles.featureSvgIcon} />
                                    </div>
                                    <span className={styles.versionBadge}>v{feature.version}</span>
                                </div>
                                <h3 className={styles.featureTitle}>{feature.title}</h3>
                                <p className={styles.featureDescription}>{feature.description}</p>
                                <div className={styles.completedStatus}>
                                    <Check className={styles.checkIcon} />
                                    <span>{t.roadmap.completed}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Upcoming Features */}
            <section className={styles.upcoming}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.sectionBadgeUpcoming}>
                            <Clock className={styles.sectionBadgeIcon} />
                            <span>{t.roadmap.upcomingBadge}</span>
                        </div>
                        <h2 className={styles.sectionTitle}>{t.roadmap.upcomingTitle}</h2>
                        <p className={styles.sectionSubtitle}>
                            {t.roadmap.upcomingSubtitle}
                        </p>
                    </div>
                    <div className={styles.featuresGrid}>
                        {upcomingFeatures.map((feature) => (
                            <div key={feature.title} className={`${styles.featureCard} ${styles.upcomingCard}`}>
                                <div className={styles.featureHeader}>
                                    <div className={styles.featureIconWrapperUpcoming}>
                                        <feature.icon className={styles.featureSvgIconUpcoming} />
                                    </div>
                                </div>
                                <h3 className={styles.featureTitle}>{feature.title}</h3>
                                <p className={styles.featureDescription}>{feature.description}</p>
                                <div className={styles.upcomingStatus}>
                                    <Clock className={styles.clockIcon} />
                                    <span>{feature.status}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Suggestions */}
            <section className={styles.suggestions}>
                <div className={styles.container}>
                    <div className={styles.suggestionsCard}>
                        <h2 className={styles.suggestionsTitle}>{t.roadmap.suggestionsTitle}</h2>
                        <p className={styles.suggestionsText}>{t.roadmap.suggestionsText}</p>
                        <a href="mailto:ollowithyou@gmail.com" className={styles.suggestionsButton}>
                            {t.roadmap.suggestFeature}
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
