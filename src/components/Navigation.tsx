"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navigation.module.css";

const navLinks = [
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/download", label: "Download" },
    { href: "/faq", label: "FAQ" },
    { href: "/about", label: "About" },
];

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

                {/* CTA Button */}
                <Link href="/download" className={styles.ctaButton}>
                    Download App
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
                        <li>
                            <Link
                                href="/download"
                                className={styles.mobileCta}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Download App
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
