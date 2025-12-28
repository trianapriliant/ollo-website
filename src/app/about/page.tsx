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

const socialLinks = [
    { platform: "Instagram", handle: "@ollowithyou", url: "https://instagram.com/ollowithyou", icon: FaInstagram },
    { platform: "TikTok", handle: "@ollowithyou", url: "https://tiktok.com/@ollowithyou", icon: FaTiktok },
    { platform: "X / Twitter", handle: "@ollowithyou", url: "https://twitter.com/ollowithyou", icon: FaXTwitter },
];

export default function AboutPage() {
    return (
        <main className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <span className={styles.badge}>About</span>
                    <h1 className={styles.title}>
                        The story behind<br />
                        <span className={styles.gradient}>Ollo</span>
                    </h1>
                    <p className={styles.subtitle}>
                        A personal finance app built with care, designed to help
                        everyone build better money habits.
                    </p>
                </div>
            </section>

            {/* Mission */}
            <section className={styles.mission}>
                <div className={styles.container}>
                    <div className={styles.missionContent}>
                        <h2 className={styles.sectionTitle}>Our Mission</h2>
                        <p className={styles.missionText}>
                            Money tracking shouldn&apos;t be stressful. It should be simple, fast, and human.
                        </p>
                        <p className={styles.missionDescription}>
                            We believe that everyone deserves a clear view of their finances without
                            complexity or overwhelm. Ollo was created to be the finance companion that
                            respects your time, protects your privacy, and helps you make smarter
                            decisions about your money — every single day.
                        </p>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className={styles.values}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Our Values</h2>
                    <div className={styles.valuesGrid}>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIconWrapper}>
                                <Lock className={styles.valueSvgIcon} />
                            </div>
                            <h3 className={styles.valueTitle}>Privacy First</h3>
                            <p className={styles.valueDescription}>
                                Your financial data belongs to you. We store everything locally
                                on your device and never upload your information to our servers.
                            </p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIconWrapper}>
                                <Spark className={styles.valueSvgIcon} />
                            </div>
                            <h3 className={styles.valueTitle}>Simplicity</h3>
                            <p className={styles.valueDescription}>
                                Powerful features don&apos;t have to be complicated. We design every
                                feature to be intuitive and easy to use from day one.
                            </p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIconWrapper}>
                                <User className={styles.valueSvgIcon} />
                            </div>
                            <h3 className={styles.valueTitle}>User Focused</h3>
                            <p className={styles.valueDescription}>
                                Every feature is built based on real user needs. We listen to
                                feedback and continuously improve the experience.
                            </p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIconWrapper}>
                                <Heart className={styles.valueSvgIcon} />
                            </div>
                            <h3 className={styles.valueTitle}>Sustainable</h3>
                            <p className={styles.valueDescription}>
                                We offer a generous free tier and fair pricing. Building
                                something that lasts means building something sustainable.
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
                            <span className={styles.developerLabel}>Created by</span>
                            <h3 className={styles.developerName}>Trian Aprilianto</h3>
                            <p className={styles.developerBio}>
                                Indie developer and maker passionate about building useful tools
                                that help people in their daily lives. Ollo is a labor of love,
                                crafted with attention to detail and a commitment to quality.
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
                    <h2 className={styles.sectionTitle}>Get in Touch</h2>
                    <div className={styles.contactGrid}>
                        <div className={styles.contactCard}>
                            <div className={styles.contactIconWrapper}>
                                <Mail className={styles.contactSvgIcon} />
                            </div>
                            <h3 className={styles.contactTitle}>Email</h3>
                            <a href="mailto:contact@ollowithyou.com" className={styles.contactLink}>
                                contact@ollowithyou.com
                            </a>
                        </div>
                        <div className={styles.contactCard}>
                            <div className={styles.contactIconWrapper}>
                                <Globe className={styles.contactSvgIcon} />
                            </div>
                            <h3 className={styles.contactTitle}>Website</h3>
                            <span className={styles.contactText}>
                                ollowithyou.com
                            </span>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className={styles.socialSection}>
                        <h3 className={styles.socialTitle}>Follow Us</h3>
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
