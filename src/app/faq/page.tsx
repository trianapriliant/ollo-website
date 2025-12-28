"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { HelpCircle, Plus, Minus } from "iconoir-react";

const faqs = [
    {
        question: "Is Ollo free to use?",
        answer: "Yes! Ollo&apos;s core features are completely free. You can track transactions, manage up to 3 wallets, set savings goals, track debts, and more at no cost. Premium unlocks advanced features like unlimited wallets, receipt scanning, voice input, and data export.",
    },
    {
        question: "Is my financial data safe?",
        answer: "Absolutely. Your data is stored locally on your device using Isar database. We don&apos;t upload your financial information to any cloud server. You have complete control over your data. The only time data leaves your device is if you choose to export it yourself.",
    },
    {
        question: "Does Ollo work offline?",
        answer: "Yes! Ollo works completely offline. You don&apos;t need an internet connection to track expenses, view statistics, or use any core features. The app is designed to work anywhere, anytime.",
    },
    {
        question: "What happens if I change my phone?",
        answer: "You can backup your data using the built-in backup feature. Export your data as a JSON file and save it to your preferred location (Google Drive, local storage, etc.). Then import it on your new device. We&apos;re also working on cloud backup for easier migration.",
    },
    {
        question: "How does Premium subscription work?",
        answer: "Premium is available as Monthly, 6-Month, Annual, or Lifetime plans. Subscriptions are processed through Google Play Store. Monthly plans include a 7-day free trial. You can cancel anytime, and your premium features remain active until the end of your billing period.",
    },
    {
        question: "Does Ollo support multiple currencies?",
        answer: "Currently, Ollo supports setting your preferred currency for display purposes. Full multi-currency support with automatic conversion is on our roadmap and coming soon.",
    },
    {
        question: "Is cloud backup available?",
        answer: "Cloud backup (Google Drive sync) is currently in development. For now, you can manually backup your data as a JSON file and store it in your preferred cloud storage.",
    },
    {
        question: "Can I use voice input in my language?",
        answer: "Yes! Voice Quick Record supports 7 languages: English, Indonesian, Spanish, Hindi, Japanese, Mandarin Chinese, and Korean. The app uses natural language processing to understand your spoken transactions.",
    },
    {
        question: "How accurate is the receipt scanner?",
        answer: "Our OCR-based receipt scanner works well with clear, well-lit receipts. It extracts the total amount and suggests categories based on merchant keywords. Results may vary depending on receipt quality and lighting conditions.",
    },
    {
        question: "Can I export my data?",
        answer: "Yes! Premium users can export transactions to CSV format with filters for date range, wallet, and category. You can also do a full backup as JSON which includes all your data (transactions, wallets, budgets, goals, etc.).",
    },
    {
        question: "What if I need help or have feedback?",
        answer: "We&apos;d love to hear from you! You can reach us at contact@ollowithyou.com or through our social media channels @ollowithyou. Premium users get priority support.",
    },
    {
        question: "Is there a web or desktop version?",
        answer: "Currently, Ollo is available only for Android. iOS is in development. A web version may come in the future based on user demand.",
    },
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <main className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <span className={styles.badge}>
                        <HelpCircle className={styles.badgeIcon} />
                        FAQ
                    </span>
                    <h1 className={styles.title}>
                        Frequently Asked<br />
                        <span className={styles.gradient}>Questions</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Find answers to common questions about Ollo.
                        Can&apos;t find what you&apos;re looking for? Contact us!
                    </p>
                </div>
            </section>

            {/* FAQ List */}
            <section className={styles.faqSection}>
                <div className={styles.container}>
                    <div className={styles.faqList}>
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`${styles.faqItem} ${openIndex === index ? styles.open : ""}`}
                            >
                                <button
                                    className={styles.faqQuestion}
                                    onClick={() => toggleFAQ(index)}
                                    aria-expanded={openIndex === index}
                                >
                                    <span>{faq.question}</span>
                                    <span className={styles.faqToggleIcon}>
                                        {openIndex === index ? <Minus className={styles.toggleSvg} /> : <Plus className={styles.toggleSvg} />}
                                    </span>
                                </button>
                                <div className={styles.faqAnswer}>
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className={styles.contact}>
                <div className={styles.container}>
                    <div className={styles.contactCard}>
                        <h2 className={styles.contactTitle}>Still have questions?</h2>
                        <p className={styles.contactText}>
                            We&apos;re here to help. Reach out to us and we&apos;ll get back to you as soon as possible.
                        </p>
                        <a href="mailto:contact@ollowithyou.com" className={styles.contactButton}>
                            Contact Us →
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
