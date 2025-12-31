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
    Gift,
    Globe,
    Cloud,
} from "iconoir-react";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslations } from "@/lib/translations";

export default function RoadmapPage() {
    const { language } = useLanguage();
    const t = getTranslations(language);

    const completedFeatures = [
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
            icon: Cloud,
            title: t.roadmap.cloudBackup,
            description: t.roadmap.cloudBackupDesc,
            status: t.roadmap.inDevelopment,
        },
        {
            icon: Globe,
            title: t.roadmap.multiCurrency,
            description: t.roadmap.multiCurrencyDesc,
            status: t.roadmap.planned,
        },
        {
            icon: Gift,
            title: t.roadmap.iosVersion,
            description: t.roadmap.iosVersionDesc,
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
                        <a href="mailto:contact@ollowithyou.com" className={styles.suggestionsButton}>
                            {t.roadmap.suggestFeature}
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
