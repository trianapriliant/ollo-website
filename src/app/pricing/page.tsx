"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { Check, Xmark } from "iconoir-react";

const pricingPlans = [
    {
        name: "Free",
        price: "IDR 0",
        period: "forever",
        description: "Essential features to get started",
        features: [
            "Up to 3 wallets",
            "Basic transaction tracking",
            "Monthly statistics",
            "Bill reminders",
            "Savings goals",
            "Debt tracker",
        ],
        limitations: [
            "Limited budgets",
            "No receipt scanner",
            "No data export",
        ],
        cta: "Get Started",
        ctaLink: "/download",
        popular: false,
    },
    {
        name: "Monthly",
        price: "IDR 15,000",
        period: "/month",
        description: "Full access, pay as you go",
        features: [
            "Everything in Free, plus:",
            "Unlimited wallets",
            "Unlimited budgets",
            "Advanced statistics",
            "Receipt scanner (OCR)",
            "Data export/import",
            "Voice Quick Record",
            "Priority support",
        ],
        limitations: [],
        cta: "Start Free Trial",
        ctaLink: "/download",
        popular: false,
        trial: "7-day free trial",
    },
    {
        name: "6-Month",
        price: "IDR 75,000",
        period: "/6 months",
        description: "Save 17% with semi-annual",
        features: [
            "All Premium features",
            "6 months access",
            "All future updates",
        ],
        limitations: [],
        cta: "Get 6-Month",
        ctaLink: "/download",
        popular: false,
        savings: "Save 17%",
    },
    {
        name: "Annual",
        price: "IDR 120,000",
        period: "/year",
        description: "Best monthly value",
        features: [
            "All Premium features",
            "12 months access",
            "All future updates",
        ],
        limitations: [],
        cta: "Get Annual",
        ctaLink: "/download",
        popular: false,
        savings: "Save 33%",
    },
    {
        name: "Lifetime",
        price: "IDR 199,000",
        period: "one-time",
        description: "Pay once, use forever",
        features: [
            "All Premium features",
            "Lifetime access",
            "All future updates",
            "No recurring payments",
            "Support the developer",
        ],
        limitations: [],
        cta: "Get Lifetime",
        ctaLink: "/download",
        popular: true,
        badge: "Best Value",
    },
];

const comparisonFeatures = [
    { name: "Wallets", free: "Up to 3", premium: "Unlimited" },
    { name: "Budgets", free: "Limited", premium: "Unlimited" },
    { name: "Transaction Tracking", free: true, premium: true },
    { name: "Statistics & Analytics", free: "Basic", premium: "Advanced" },
    { name: "Bill Reminders", free: true, premium: true },
    { name: "Savings Goals", free: true, premium: true },
    { name: "Debt Tracker", free: true, premium: true },
    { name: "Receipt Scanner (OCR)", free: false, premium: true },
    { name: "Voice Quick Record", free: false, premium: true },
    { name: "Data Export/Import", free: false, premium: true },
    { name: "Home Screen Widgets", free: true, premium: true },
    { name: "Priority Support", free: false, premium: true },
];

export default function PricingPage() {
    const renderCheckOrX = (value: boolean | string) => {
        if (value === true) return <Check className={styles.checkIcon} />;
        if (value === false) return <Xmark className={styles.xIcon} />;
        return value;
    };

    return (
        <main className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <span className={styles.badge}>Pricing</span>
                    <h1 className={styles.title}>
                        Simple pricing,<br />
                        <span className={styles.gradient}>no surprises</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Start free, upgrade when you need more.
                        All plans include core features to manage your money better.
                    </p>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className={styles.pricing}>
                <div className={styles.container}>
                    <div className={styles.pricingGrid}>
                        {pricingPlans.map((plan) => (
                            <div
                                key={plan.name}
                                className={`${styles.pricingCard} ${plan.popular ? styles.popular : ""}`}
                            >
                                {plan.badge && (
                                    <span className={styles.popularBadge}>{plan.badge}</span>
                                )}
                                {plan.savings && (
                                    <span className={styles.savingsBadge}>{plan.savings}</span>
                                )}
                                <h3 className={styles.planName}>{plan.name}</h3>
                                <div className={styles.planPrice}>
                                    <span className={styles.price}>{plan.price}</span>
                                    <span className={styles.period}>{plan.period}</span>
                                </div>
                                <p className={styles.planDescription}>{plan.description}</p>
                                {plan.trial && (
                                    <span className={styles.trialBadge}>{plan.trial}</span>
                                )}
                                <ul className={styles.featureList}>
                                    {plan.features.map((feature) => (
                                        <li key={feature} className={styles.featureItem}>
                                            <Check className={styles.checkIcon} />
                                            {feature}
                                        </li>
                                    ))}
                                    {plan.limitations.map((limitation) => (
                                        <li key={limitation} className={styles.limitationItem}>
                                            <Xmark className={styles.xIcon} />
                                            {limitation}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href={plan.ctaLink}
                                    className={`${styles.ctaButton} ${plan.popular ? styles.ctaPrimary : styles.ctaSecondary}`}
                                >
                                    {plan.cta}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className={styles.comparison}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Compare Plans</h2>
                        <p className={styles.sectionSubtitle}>
                            See what you get with Free vs Premium
                        </p>
                    </div>
                    <div className={styles.tableWrapper}>
                        <table className={styles.comparisonTable}>
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>Free</th>
                                    <th>Premium</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonFeatures.map((feature) => (
                                    <tr key={feature.name}>
                                        <td>{feature.name}</td>
                                        <td className={feature.free === false ? styles.muted : ""}>
                                            {renderCheckOrX(feature.free)}
                                        </td>
                                        <td className={styles.premium}>
                                            {renderCheckOrX(feature.premium)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Disclaimer */}
            <section className={styles.disclaimer}>
                <div className={styles.container}>
                    <p className={styles.disclaimerText}>
                        * Prices shown are in Indonesian Rupiah (IDR). Actual prices may vary slightly
                        based on your region and Google Play Store policies. All subscriptions are
                        processed through Google Play and subject to their billing terms.
                    </p>
                </div>
            </section>
        </main>
    );
}
