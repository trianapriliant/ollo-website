import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";
import { FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";

const footerLinks = {
    product: [
        { href: "/features", label: "Features" },
        { href: "/pricing", label: "Pricing" },
        { href: "/download", label: "Download" },
    ],
    company: [
        { href: "/about", label: "About" },
        { href: "/faq", label: "FAQ" },
        { href: "/credits", label: "Credits" },
    ],
    legal: [
        { href: "/privacy", label: "Privacy Policy" },
        { href: "/terms", label: "Terms of Service" },
    ],
};

const socialLinks = [
    { href: "https://instagram.com/ollowithyou", label: "Instagram", Icon: FaInstagram },
    { href: "https://tiktok.com/@ollowithyou", label: "TikTok", Icon: FaTiktok },
    { href: "https://twitter.com/ollowithyou", label: "X/Twitter", Icon: FaXTwitter },
];

export default function Footer() {
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
                            Track Smart, Spend Wise, Live Better
                        </p>
                        <p className={styles.description}>
                            The modern personal finance app that helps you build better money habits.
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
                        <h4 className={styles.columnTitle}>Product</h4>
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
                        <h4 className={styles.columnTitle}>Company</h4>
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
                        <h4 className={styles.columnTitle}>Legal</h4>
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
                        © {new Date().getFullYear()} Ollo. Made with ❤️ by Trian Aprilianto
                    </p>
                    <p className={styles.version}>
                        Beta v0.6.6
                    </p>
                </div>
            </div>
        </footer>
    );
}
