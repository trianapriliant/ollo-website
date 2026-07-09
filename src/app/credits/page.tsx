"use client";

import styles from "./page.module.css";
import {
    Database,
    Atom,
    Page,
    Heart,
    Fingerprint,
    Cloud,
    Camera,
    CreditCard,
} from "iconoir-react";
import { FaFlutter, FaReact, FaGoogle } from "react-icons/fa6";
import { SiNextdotjs, SiDart } from "react-icons/si";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslations } from "@/lib/translations";

export default function CreditsPage() {
    const { language } = useLanguage();
    const t = getTranslations(language);

    const techStack = {
        mobile: [
            {
                name: "Flutter",
                desc: t.credits.flutterDesc,
                icon: FaFlutter,
                colorClass: "blueAlpha"
            },
            {
                name: "Dart",
                desc: t.credits.dartDesc,
                icon: SiDart,
                colorClass: "cyanAlpha"
            },
            {
                name: "SQLite",
                desc: t.credits.driftDesc,
                icon: Database,
                colorClass: "purpleAlpha"
            },
            {
                name: "Riverpod",
                desc: t.credits.riverpodDesc,
                icon: Atom,
                colorClass: "tealAlpha"
            },
            {
                name: "RevenueCat",
                desc: t.credits.revenueCatDesc,
                icon: CreditCard,
                colorClass: "orangeAlpha"
            },
            {
                name: "Google MLKit",
                desc: t.credits.mlKitDesc,
                icon: Camera,
                colorClass: "redAlpha"
            },
            {
                name: "Google Drive API",
                desc: t.credits.googleDriveDesc,
                icon: Cloud,
                colorClass: "blueAlpha"
            },
            {
                name: "Biometrics",
                desc: t.credits.biometricsDesc,
                icon: Fingerprint,
                colorClass: "greenAlpha"
            }
        ],
        web: [
            {
                name: "Next.js",
                desc: t.credits.nextjsDesc,
                icon: SiNextdotjs,
                colorClass: "darkAlpha"
            },
            {
                name: "React",
                desc: t.credits.reactDesc,
                icon: FaReact,
                colorClass: "blueAlpha"
            },
            {
                name: "Iconoir",
                desc: t.credits.iconoirDesc,
                icon: Page,
                colorClass: "orangeAlpha"
            }
        ],
        design: [
            {
                name: "Google Fonts",
                desc: t.credits.googleFontsDesc,
                icon: FaGoogle,
                colorClass: "redAlpha"
            },
            {
                name: "Material Icons",
                desc: t.credits.materialIconsDesc,
                icon: FaGoogle,
                colorClass: "blueAlpha"
            }
        ]
    };

    return (
        <main className={styles.page}>
            <section className={styles.header}>
                <div className={styles.container}>
                    <span className={styles.badge}>{t.credits.badge}</span>
                    <h1 className={styles.title}>
                        {t.credits.title1}<br />
                        <span className={styles.gradient}>{t.credits.title2}</span>
                    </h1>
                    <p className={styles.subtitle}>
                        {t.credits.subtitle}
                    </p>
                </div>
            </section>

            <div className={styles.container}>
                {/* Mobile App */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>{t.credits.mobileCore}</h2>
                    <div className={styles.grid}>
                        {techStack.mobile.map((item) => (
                            <div key={item.name} className={styles.card}>
                                <div className={`${styles.iconWrapper} ${styles[item.colorClass]}`}>
                                    <item.icon />
                                </div>
                                <div className={styles.info}>
                                    <span className={styles.techName}>{item.name}</span>
                                    <span className={styles.techDesc}>{item.desc}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Website */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>{t.credits.webApp}</h2>
                    <div className={styles.grid}>
                        {techStack.web.map((item) => (
                            <div key={item.name} className={styles.card}>
                                <div className={`${styles.iconWrapper} ${styles[item.colorClass]}`}>
                                    <item.icon />
                                </div>
                                <div className={styles.info}>
                                    <span className={styles.techName}>{item.name}</span>
                                    <span className={styles.techDesc}>{item.desc}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Design */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>{t.credits.designAssets}</h2>
                    <div className={styles.grid}>
                        {techStack.design.map((item) => (
                            <div key={item.name} className={styles.card}>
                                <div className={`${styles.iconWrapper} ${styles[item.colorClass]}`}>
                                    <item.icon />
                                </div>
                                <div className={styles.info}>
                                    <span className={styles.techName}>{item.name}</span>
                                    <span className={styles.techDesc}>{item.desc}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <div className={styles.thanks}>
                    <p className={styles.thanksText}>
                        {t.credits.thanks} <Heart style={{ color: 'red', display: 'inline', verticalAlign: 'middle' }} width={20} />
                    </p>
                </div>
            </div>
        </main>
    );
}
