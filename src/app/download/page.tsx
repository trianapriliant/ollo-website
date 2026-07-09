"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { Lock, OffTag, Database, Flash, Download, Globe } from "iconoir-react";
import { FaGooglePlay, FaApple } from "react-icons/fa6";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslations } from "@/lib/translations";

const appInfo = {
    version: "1.4.3+140",
    build: "140",
    size: "~26 MB",
    platforms: ["Android", "iOS"],
};

export default function DownloadPage() {
    const { language } = useLanguage();
    const t = getTranslations(language);

    const trustSignals = [
        {
            icon: Lock,
            title: t.download.privacyFirst,
            description: t.download.privacyFirstDesc,
        },
        {
            icon: OffTag,
            title: t.download.worksOffline,
            description: t.download.worksOfflineDesc,
        },
        {
            icon: Database,
            title: t.download.localStorage,
            description: t.download.localStorageDesc,
        },
        {
            icon: Flash,
            title: t.download.fastLight,
            description: t.download.fastLightDesc,
        },
    ];

    return (
        <main className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <span className={styles.badge}>
                        <Download className={styles.badgeIcon} />
                        {t.download.badge}
                    </span>
                    <h1 className={styles.title}>
                        {t.download.title1}<br />
                        <span className={styles.gradient}>{t.download.title2}</span>
                    </h1>
                    <p className={styles.subtitle}>
                        {t.download.subtitle}
                    </p>

                    {/* Download Buttons */}
                    <div className={styles.downloadSection}>
                        <a
                            href="https://play.google.com/store/apps/details?id=com.ollo.ollo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.playStoreButton}
                        >
                            <div className={styles.playIcon}>
                                <FaGooglePlay size={32} />
                            </div>
                            <div className={styles.playText}>
                                <span className={styles.playLabel}>{t.download.getItOn}</span>
                                <span className={styles.playStore}>{t.download.googlePlay}</span>
                            </div>
                        </a>
                        <a
                            href="https://apps.apple.com/us/app/ollo-budget-money-manager/id6763823803"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.appStoreButton}
                        >
                            <div className={styles.playIcon}>
                                <FaApple size={32} />
                            </div>
                            <div className={styles.playText}>
                                <span className={styles.playLabel}>{t.download.downloadOn}</span>
                                <span className={styles.playStore}>{t.download.appStore}</span>
                            </div>
                        </a>
                    </div>

                    {/* App Info */}
                    <div className={styles.appInfo}>
                        <div className={styles.infoItem}>
                            <span className={styles.infoLabel}>{t.download.version}</span>
                            <span className={styles.infoValue}>{appInfo.version}</span>
                        </div>
                        <div className={styles.infoDivider}></div>
                        <div className={styles.infoItem}>
                            <span className={styles.infoLabel}>{t.download.size}</span>
                            <span className={styles.infoValue}>{appInfo.size}</span>
                        </div>
                        <div className={styles.infoDivider}></div>
                        <div className={styles.infoItem}>
                            <span className={styles.infoLabel}>{t.download.requires}</span>
                            <span className={styles.infoValue}>Android 5.0+ / iOS 15+</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Signals */}
            <section className={styles.trust}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>{t.download.trustTitle}</h2>
                        <p className={styles.sectionSubtitle}>
                            {t.download.trustSubtitle}
                        </p>
                    </div>
                    <div className={styles.trustGrid}>
                        {trustSignals.map((signal) => (
                            <div key={signal.title} className={styles.trustCard}>
                                <div className={styles.trustIconWrapper}>
                                    <signal.icon className={styles.trustSvgIcon} />
                                </div>
                                <h3 className={styles.trustTitle}>{signal.title}</h3>
                                <p className={styles.trustDescription}>{signal.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Getting Started */}
            <section className={styles.gettingStarted}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>{t.download.gettingStarted}</h2>
                        <p className={styles.sectionSubtitle}>
                            {t.download.gettingStartedSubtitle}
                        </p>
                    </div>
                    <div className={styles.stepsGrid}>
                        <div className={styles.step}>
                            <span className={styles.stepNumber}>1</span>
                            <h3 className={styles.stepTitle}>{t.download.step1Title}</h3>
                            <p className={styles.stepDescription}>
                                {t.download.step1Desc}
                            </p>
                        </div>
                        <div className={styles.step}>
                            <span className={styles.stepNumber}>2</span>
                            <h3 className={styles.stepTitle}>{t.download.step2Title}</h3>
                            <p className={styles.stepDescription}>
                                {t.download.step2Desc}
                            </p>
                        </div>
                        <div className={styles.step}>
                            <span className={styles.stepNumber}>3</span>
                            <h3 className={styles.stepTitle}>{t.download.step3Title}</h3>
                            <p className={styles.stepDescription}>
                                {t.download.step3Desc}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Coming Soon Platforms */}
            <section className={styles.comingSoon}>
                <div className={styles.container}>
                    <div className={styles.comingSoonGrid}>
                        {/* Web Coming Soon */}
                        <div className={styles.comingSoonCard}>
                            <div className={styles.comingSoonIconWrapper}>
                                <Globe className={styles.comingSoonSvgIcon} />
                            </div>
                            <h3 className={styles.comingSoonTitle}>{t.download.webComingSoon}</h3>
                            <p className={styles.comingSoonText}>
                                {t.download.webComingSoonDesc}
                            </p>
                            <Link href="/about" className={styles.followLink}>
                                {t.download.followUs}
                            </Link>
                        </div>

                        {/* Desktop Coming Soon */}
                        <div className={styles.comingSoonCard}>
                            <div className={styles.comingSoonIconWrapper}>
                                <Download className={styles.comingSoonSvgIcon} />
                            </div>
                            <h3 className={styles.comingSoonTitle}>{t.download.desktopComingSoon}</h3>
                            <p className={styles.comingSoonText}>
                                {t.download.desktopComingSoonDesc}
                            </p>
                            <Link href="/about" className={styles.followLink}>
                                {t.download.followUs}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
