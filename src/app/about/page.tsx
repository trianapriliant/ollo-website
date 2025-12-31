"use client";

import styles from "./page.module.css";
import {
    Lock,
    Spark,
    User,
    Heart,
    Code,
    MapPin,
    Mail,
    Globe,
} from "iconoir-react";
import { FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslations } from "@/lib/translations";

const socialLinks = [
    { platform: "Instagram", handle: "@ollowithyou", url: "https://instagram.com/ollowithyou", icon: FaInstagram },
    { platform: "TikTok", handle: "@ollowithyou", url: "https://tiktok.com/@ollowithyou", icon: FaTiktok },
    { platform: "X / Twitter", handle: "@ollowithyou", url: "https://twitter.com/ollowithyou", icon: FaXTwitter },
];

export default function AboutPage() {
    const { language } = useLanguage();
    const t = getTranslations(language);

    return (
        <main className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <span className={styles.badge}>{t.about.badge}</span>
                    <h1 className={styles.title}>
                        {t.about.title1}<br />
                        <span className={styles.gradient}>{t.about.title2}</span>
                    </h1>
                    <p className={styles.subtitle}>
                        {t.about.subtitle}
                    </p>
                </div>
            </section>

            {/* Mission */}
            <section className={styles.mission}>
                <div className={styles.container}>
                    <div className={styles.missionContent}>
                        <h2 className={styles.sectionTitle}>{t.about.missionTitle}</h2>
                        <p className={styles.missionText}>
                            {t.about.missionText}
                        </p>
                        <p className={styles.missionDescription}>
                            {t.about.missionDesc}
                        </p>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className={styles.values}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>{t.about.valuesTitle}</h2>
                    <div className={styles.valuesGrid}>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIconWrapper}>
                                <Lock className={styles.valueSvgIcon} />
                            </div>
                            <h3 className={styles.valueTitle}>{t.about.privacyFirst}</h3>
                            <p className={styles.valueDescription}>
                                {t.about.privacyFirstDesc}
                            </p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIconWrapper}>
                                <Spark className={styles.valueSvgIcon} />
                            </div>
                            <h3 className={styles.valueTitle}>{t.about.simplicity}</h3>
                            <p className={styles.valueDescription}>
                                {t.about.simplicityDesc}
                            </p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIconWrapper}>
                                <User className={styles.valueSvgIcon} />
                            </div>
                            <h3 className={styles.valueTitle}>{t.about.userFocused}</h3>
                            <p className={styles.valueDescription}>
                                {t.about.userFocusedDesc}
                            </p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIconWrapper}>
                                <Heart className={styles.valueSvgIcon} />
                            </div>
                            <h3 className={styles.valueTitle}>{t.about.sustainable}</h3>
                            <p className={styles.valueDescription}>
                                {t.about.sustainableDesc}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Developer */}
            <section className={styles.developer}>
                <div className={styles.container}>
                    <div className={styles.developerCard}>
                        <div className={styles.developerAvatar}>
                            <Code className={styles.avatarIcon} />
                        </div>
                        <div className={styles.developerInfo}>
                            <span className={styles.developerLabel}>{t.about.createdBy}</span>
                            <h3 className={styles.developerName}>Trian Aprilianto</h3>
                            <div className={styles.agencyBadge}>
                                <span className={styles.agencyAt}>{t.about.at}</span>
                                <span className={styles.agencyName}>Low Orbit Labs</span>
                            </div>
                            <p className={styles.developerBio}>
                                {t.about.developerBio}
                            </p>
                            <div className={styles.developerLocation}>
                                <MapPin className={styles.locationIcon} />
                                <span>Indonesia</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section className={styles.contact}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>{t.about.getInTouch}</h2>
                    <div className={styles.contactGrid}>
                        <div className={styles.contactCard}>
                            <div className={styles.contactIconWrapper}>
                                <Mail className={styles.contactSvgIcon} />
                            </div>
                            <h3 className={styles.contactTitle}>{t.about.email}</h3>
                            <a href="mailto:contact@ollowithyou.com" className={styles.contactLink}>
                                contact@ollowithyou.com
                            </a>
                        </div>
                        <div className={styles.contactCard}>
                            <div className={styles.contactIconWrapper}>
                                <Globe className={styles.contactSvgIcon} />
                            </div>
                            <h3 className={styles.contactTitle}>{t.about.website}</h3>
                            <span className={styles.contactText}>
                                ollowithyou.com
                            </span>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className={styles.socialSection}>
                        <h3 className={styles.socialTitle}>{t.about.followUs}</h3>
                        <div className={styles.socialLinks}>
                            {socialLinks.map((link) => (
                                <a
                                    key={link.platform}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialLink}
                                >
                                    <link.icon className={styles.socialSvgIcon} />
                                    <div className={styles.socialInfo}>
                                        <span className={styles.socialPlatform}>{link.platform}</span>
                                        <span className={styles.socialHandle}>{link.handle}</span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
