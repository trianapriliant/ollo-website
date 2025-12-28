"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { Lock, OffTag, Database, Flash, Apple, Download, Globe } from "iconoir-react";
import { FaGooglePlay } from "react-icons/fa6";

const appInfo = {
    version: "Beta 0.6.6",
    build: "9",
    minAndroid: "Android 5.0 (Lollipop)",
    targetAndroid: "Android 15",
    size: "~25 MB",
};

const trustSignals = [
    {
        icon: Lock,
        title: "Privacy First",
        description: "Your financial data stays on your device. No cloud uploads unless you choose to backup.",
    },
    {
        icon: OffTag,
        title: "Works Offline",
        description: "No internet required. Track expenses anywhere, anytime, even without connection.",
    },
    {
        icon: Database,
        title: "Local Storage",
        description: "All data is stored locally using Isar database. You own your data completely.",
    },
    {
        icon: Flash,
        title: "Fast & Light",
        description: "Optimized for performance. Quick startup and smooth animations on any device.",
    },
];

export default function DownloadPage() {
    return (
        <main className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <span className={styles.badge}>
                        <Download className={styles.badgeIcon} />
                        Download
                    </span>
                    <h1 className={styles.title}>
                        Get Ollo for<br />
                        <span className={styles.gradient}>Android</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Start tracking your finances today. Free to download,
                        easy to use, powerful features.
                    </p>

                    {/* Play Store Button */}
                    <div className={styles.downloadSection}>
                        <a
                            href="https://play.google.com/store/apps/details?id=com.ollo.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.playStoreButton}
                        >
                            <div className={styles.playIcon}>
                                <FaGooglePlay size={32} />
                            </div>
                            <div className={styles.playText}>
                                <span className={styles.playLabel}>GET IT ON</span>
                                <span className={styles.playStore}>Google Play</span>
                            </div>
                        </a>
                    </div>

                    {/* App Info */}
                    <div className={styles.appInfo}>
                        <div className={styles.infoItem}>
                            <span className={styles.infoLabel}>Version</span>
                            <span className={styles.infoValue}>{appInfo.version}</span>
                        </div>
                        <div className={styles.infoDivider}></div>
                        <div className={styles.infoItem}>
                            <span className={styles.infoLabel}>Size</span>
                            <span className={styles.infoValue}>{appInfo.size}</span>
                        </div>
                        <div className={styles.infoDivider}></div>
                        <div className={styles.infoItem}>
                            <span className={styles.infoLabel}>Requires</span>
                            <span className={styles.infoValue}>{appInfo.minAndroid}+</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Signals */}
            <section className={styles.trust}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Built with trust in mind</h2>
                        <p className={styles.sectionSubtitle}>
                            Your privacy and security are our top priorities
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
                        <h2 className={styles.sectionTitle}>Getting Started</h2>
                        <p className={styles.sectionSubtitle}>
                            Start managing your money in 3 simple steps
                        </p>
                    </div>
                    <div className={styles.stepsGrid}>
                        <div className={styles.step}>
                            <span className={styles.stepNumber}>1</span>
                            <h3 className={styles.stepTitle}>Download & Install</h3>
                            <p className={styles.stepDescription}>
                                Get Ollo from the Google Play Store. It&apos;s free and takes less than a minute.
                            </p>
                        </div>
                        <div className={styles.step}>
                            <span className={styles.stepNumber}>2</span>
                            <h3 className={styles.stepTitle}>Create Your Wallets</h3>
                            <p className={styles.stepDescription}>
                                Set up your wallets for cash, bank accounts, or e-wallets. Use templates for quick setup.
                            </p>
                        </div>
                        <div className={styles.step}>
                            <span className={styles.stepNumber}>3</span>
                            <h3 className={styles.stepTitle}>Start Tracking</h3>
                            <p className={styles.stepDescription}>
                                Add your first transaction. Use voice input for quick recording or manual entry.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Coming Soon Platforms */}
            <section className={styles.comingSoon}>
                <div className={styles.container}>
                    <div className={styles.comingSoonGrid}>
                        {/* iOS Coming Soon */}
                        <div className={styles.comingSoonCard}>
                            <div className={styles.comingSoonIconWrapper}>
                                <Apple className={styles.comingSoonSvgIcon} />
                            </div>
                            <h3 className={styles.comingSoonTitle}>iOS Coming Soon</h3>
                            <p className={styles.comingSoonText}>
                                We&apos;re working on bringing Ollo to iPhone.
                                Follow us on social media for updates.
                            </p>
                            <Link href="/about" className={styles.followLink}>
                                Follow @ollowithyou →
                            </Link>
                        </div>

                        {/* Web Coming Soon */}
                        <div className={styles.comingSoonCard}>
                            <div className={styles.comingSoonIconWrapper}>
                                <Globe className={styles.comingSoonSvgIcon} />
                            </div>
                            <h3 className={styles.comingSoonTitle}>Ollo Web Coming Soon</h3>
                            <p className={styles.comingSoonText}>
                                Access your finances from any browser.
                                We&apos;re building a web version for seamless sync.
                            </p>
                            <Link href="/about" className={styles.followLink}>
                                Follow @ollowithyou →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
