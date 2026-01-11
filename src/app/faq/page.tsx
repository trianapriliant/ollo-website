"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { HelpCircle, Plus, Minus } from "iconoir-react";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslations } from "@/lib/translations";

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const { language } = useLanguage();
    const t = getTranslations(language);

    const faqs = [
        { question: t.faq.q1, answer: t.faq.a1 },
        { question: t.faq.q2, answer: t.faq.a2 },
        { question: t.faq.q3, answer: t.faq.a3 },
        { question: t.faq.q4, answer: t.faq.a4 },
        { question: t.faq.q5, answer: t.faq.a5 },
        { question: t.faq.q6, answer: t.faq.a6 },
        { question: t.faq.q7, answer: t.faq.a7 },
        { question: t.faq.q8, answer: t.faq.a8 },
        { question: t.faq.q9, answer: t.faq.a9 },
        { question: t.faq.q10, answer: t.faq.a10 },
        { question: t.faq.q11, answer: t.faq.a11 },
        { question: t.faq.q12, answer: t.faq.a12 },
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <main className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <span className={styles.badge}>
                        {t.faq.badge}
                    </span>
                    <h1 className={styles.title}>
                        {t.faq.title1}<br />
                        <span className={styles.gradient}>{t.faq.title2}</span>
                    </h1>
                    <p className={styles.subtitle}>
                        {t.faq.subtitle}
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
                        <h2 className={styles.contactTitle}>{t.faq.stillHaveQuestions}</h2>
                        <p className={styles.contactText}>
                            {t.faq.hereToHelp}
                        </p>
                        <a href="mailto:contact@ollowithyou.com" className={styles.contactButton}>
                            {t.faq.contactUs}
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
