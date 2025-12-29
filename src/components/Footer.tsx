"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";
import { FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslations } from "@/lib/translations";

const socialLinks = [
    { href: "https://instagram.com/ollowithyou", label: "Instagram", Icon: FaInstagram },
    { href: "https://tiktok.com/@ollowithyou", label: "TikTok", Icon: FaTiktok },
    { href: "https://twitter.com/ollowithyou", label: "X/Twitter", Icon: FaXTwitter },
];

export default function Footer() {
    const { language, currentLanguageOption, languages, setLanguage } = useLanguage();
    const t = getTranslations(language);

    const footerLinks = {
        product: [
            { href: "/features", label: t.footer.features },
            { href: "/pricing", label: t.footer.pricing },
            { href: "/download", label: t.footer.download },
        ],
        company: [
            { href: "/about", label: t.footer.about },
            { href: "/faq", label: t.footer.faq },
            { href: "/credits", label: t.footer.credits },
        ],
        legal: [
            { href: "/privacy", label: t.footer.privacyPolicy },
            { href: "/terms", label: t.footer.termsOfService },
        ],
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Brand Column */}
                    <div className={styles.brandColumn}>
                        <Link href="/" className={styles.logo}>
                            <div className={styles.logoIcon}>
                                <Image src="/logo.jpg" alt="Ollo Logo" fill style={{ objectFit: 'cover' }} />
                            </div>
                            <span className={styles.logoText}>Ollo</span>
                        </Link>
                        <p className={styles.tagline}>
                            {t.footer.tagline}
                        </p>
                        <p className={styles.description}>
                            {t.footer.description}
                        </p>
                        <div className={styles.socialLinks}>
                            {socialLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialLink}
                                    aria-label={link.label}
                                >
                                    <link.Icon size={24} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className={styles.linksColumn}>
                        <h4 className={styles.columnTitle}>{t.footer.product}</h4>
                        <ul className={styles.linksList}>
                            {footerLinks.product.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className={styles.link}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.linksColumn}>
                        <h4 className={styles.columnTitle}>{t.footer.company}</h4>
                        <ul className={styles.linksList}>
                            {footerLinks.company.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className={styles.link}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.linksColumn}>
                        <h4 className={styles.columnTitle}>{t.footer.legal}</h4>
                        <ul className={styles.linksList}>
                            {footerLinks.legal.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className={styles.link}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className={styles.bottomBar}>
                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} {t.footer.copyright}
                    </p>

                    <div className={styles.bottomRight}>
                        {/* Language Toggle */}
                        <div className={styles.langToggle}>
                            <span className={styles.langLabel}>{t.footer.language}:</span>
                            <div className={styles.langButtons}>
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => setLanguage(lang.code)}
                                        className={`${styles.langBtn} ${language === lang.code ? styles.langBtnActive : ""}`}
                                        aria-label={`Switch to ${lang.label}`}
                                    >
                                        {lang.flag} {lang.shortLabel}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <p className={styles.version}>
                            Beta v0.6.6
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
