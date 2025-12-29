"use client";

import styles from "./page.module.css";
import {
    Wallet,
    CreditCard,
    GraphUp,
    Notes,
    PiggyBank,
    Calendar,
    HandCash,
    Star,
    MultiplePages,
    Refresh,
    Microphone,
    Camera,
    Upload,
    AppWindow,
    Bell,
    Trophy,
    Language,
} from "iconoir-react";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslations } from "@/lib/translations";

export default function FeaturesPage() {
    const { language } = useLanguage();
    const t = getTranslations(language);

    const featureCategories = [
        {
            title: t.features.coreFeatures,
            description: t.features.coreFeaturesDesc,
            features: [
                {
                    icon: Wallet,
                    title: t.features.transactionManagement,
                    description: t.features.transactionManagementDesc,
                },
                {
                    icon: CreditCard,
                    title: t.features.multiWalletSystem,
                    description: t.features.multiWalletSystemDesc,
                },
                {
                    icon: GraphUp,
                    title: t.features.statisticsAnalytics,
                    description: t.features.statisticsAnalyticsDesc,
                },
                {
                    icon: Notes,
                    title: t.features.budgetManagement,
                    description: t.features.budgetManagementDesc,
                },
                {
                    icon: PiggyBank,
                    title: t.features.savingsGoals,
                    description: t.features.savingsGoalsDesc,
                },
                {
                    icon: Calendar,
                    title: t.features.billsRecurring,
                    description: t.features.billsRecurringDesc,
                },
            ],
        },
        {
            title: t.features.moreFeatures,
            description: t.features.moreFeaturesDesc,
            features: [
                {
                    icon: HandCash,
                    title: t.features.debtTracker,
                    description: t.features.debtTrackerDesc,
                },
                {
                    icon: Star,
                    title: t.features.wishlist,
                    description: t.features.wishlistDesc,
                },
                {
                    icon: MultiplePages,
                    title: t.features.cardGallery,
                    description: t.features.cardGalleryDesc,
                },
                {
                    icon: Refresh,
                    title: t.features.reimbursementTracker,
                    description: t.features.reimbursementTrackerDesc,
                },
            ],
        },
        {
            title: t.features.advancedFeatures,
            description: t.features.advancedFeaturesDesc,
            features: [
                {
                    icon: Microphone,
                    title: t.features.voiceQuickRecord,
                    description: t.features.voiceQuickRecordDesc,
                    premium: true,
                },
                {
                    icon: Camera,
                    title: t.features.receiptScanner,
                    description: t.features.receiptScannerDesc,
                    premium: true,
                },
                {
                    icon: Upload,
                    title: t.features.dataExportImport,
                    description: t.features.dataExportImportDesc,
                    premium: true,
                },
                {
                    icon: AppWindow,
                    title: t.features.homeScreenWidgets,
                    description: t.features.homeScreenWidgetsDesc,
                },
                {
                    icon: Bell,
                    title: t.features.smartNotifications,
                    description: t.features.smartNotificationsDesc,
                },
                {
                    icon: Trophy,
                    title: t.features.gamification,
                    description: t.features.gamificationDesc,
                },
            ],
        },
    ];

    return (
        <main className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <span className={styles.badge}>{t.features.badge}</span>
                    <h1 className={styles.title}>
                        {t.features.title1}<br />
                        <span className={styles.gradient}>{t.features.title2}</span>
                    </h1>
                    <p className={styles.subtitle}>
                        {t.features.subtitle}
                    </p>
                </div>
            </section>

            {/* Feature Categories */}
            {featureCategories.map((category) => (
                <section key={category.title} className={styles.category}>
                    <div className={styles.container}>
                        <div className={styles.categoryHeader}>
                            <h2 className={styles.categoryTitle}>{category.title}</h2>
                            <p className={styles.categoryDescription}>{category.description}</p>
                        </div>
                        <div className={styles.featuresGrid}>
                            {category.features.map((feature) => (
                                <div key={feature.title} className={styles.featureCard}>
                                    <div className={styles.featureHeader}>
                                        <div className={styles.featureIconWrapper}>
                                            <feature.icon className={styles.featureSvgIcon} />
                                        </div>
                                        {'premium' in feature && feature.premium && (
                                            <span className={styles.premiumBadge}>{t.features.premium}</span>
                                        )}
                                    </div>
                                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                                    <p className={styles.featureDescription}>{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            {/* Languages Section */}
            <section className={styles.languages}>
                <div className={styles.container}>
                    <div className={styles.languagesContent}>
                        <span className={styles.badge}>
                            <Language className={styles.badgeIcon} />
                            {t.features.localization}
                        </span>
                        <h2 className={styles.languagesTitle}>
                            {t.features.speakYourLanguage}
                        </h2>
                        <p className={styles.languagesSubtitle}>
                            {t.features.languagesSupportedDesc}
                        </p>
                        <div className={styles.languageFlags}>
                            <div className={styles.languageItem}>
                                <span className={styles.flag}>🇺🇸</span>
                                <span>English</span>
                            </div>
                            <div className={styles.languageItem}>
                                <span className={styles.flag}>🇮🇩</span>
                                <span>Indonesian</span>
                            </div>
                            <div className={styles.languageItem}>
                                <span className={styles.flag}>🇪🇸</span>
                                <span>Spanish</span>
                            </div>
                            <div className={styles.languageItem}>
                                <span className={styles.flag}>🇮🇳</span>
                                <span>Hindi</span>
                            </div>
                            <div className={styles.languageItem}>
                                <span className={styles.flag}>🇯🇵</span>
                                <span>Japanese</span>
                            </div>
                            <div className={styles.languageItem}>
                                <span className={styles.flag}>🇨🇳</span>
                                <span>Mandarin</span>
                            </div>
                            <div className={styles.languageItem}>
                                <span className={styles.flag}>🇰🇷</span>
                                <span>Korean</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
