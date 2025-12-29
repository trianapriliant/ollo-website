"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navigation.module.css";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslations } from "@/lib/translations";

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { language, currentLanguageOption, languages, setLanguage } = useLanguage();
    const t = getTranslations(language);

    const navLinks = [
        { href: "/features", label: t.nav.features },
        { href: "/pricing", label: t.nav.pricing },
        { href: "/download", label: t.nav.download },
        { href: "/faq", label: t.nav.faq },
        { href: "/about", label: t.nav.about },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
            <nav className={styles.nav}>
                <Link href="/" className={styles.logo}>
                    <div className={styles.logoIcon}>
                        <Image src="/logo.jpg" alt="Ollo Logo" fill className={styles.logoImage} style={{ objectFit: 'cover' }} />
                    </div>
                    <span className={styles.logoText}>Ollo</span>
                </Link>

                {/* Desktop Navigation */}
                <ul className={styles.navLinks}>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href} className={styles.navLink}>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Language Toggle */}
                <div className={styles.langToggle}>
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => setLanguage(lang.code)}
                            className={`${styles.langBtn} ${language === lang.code ? styles.langBtnActive : ""}`}
                            aria-label={`Switch to ${lang.label}`}
                        >
                            {lang.shortLabel}
                        </button>
                    ))}
                </div>

                {/* CTA Button */}
                <Link href="/download" className={styles.ctaButton}>
                    {t.nav.downloadApp}
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className={styles.mobileMenuBtn}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ""}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </button>

                {/* Mobile Menu */}
                <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ""}`}>
                    <ul className={styles.mobileNavLinks}>
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={styles.mobileNavLink}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}

                        {/* Mobile Language Toggle */}
                        <li className={styles.mobileLangToggle}>
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => setLanguage(lang.code)}
                                    className={`${styles.mobileLangBtn} ${language === lang.code ? styles.mobileLangBtnActive : ""}`}
                                >
                                    {lang.flag} {lang.shortLabel}
                                </button>
                            ))}
                        </li>

                        <li>
                            <Link
                                href="/download"
                                className={styles.mobileCta}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {t.nav.downloadApp}
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
