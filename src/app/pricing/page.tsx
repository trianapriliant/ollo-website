"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { Check, Xmark } from "iconoir-react";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslations } from "@/lib/translations";

export default function PricingPage() {
    const { language } = useLanguage();
    const t = getTranslations(language);

    const pricingPlans = [
        {
            name: t.pricing.free,
            price: "IDR 0",
            period: t.pricing.forever,
            description: t.pricing.freeDesc,
            features: [
                t.pricing.upTo3Wallets,
                t.pricing.basicTracking,
                t.pricing.monthlyStats,
                t.pricing.billReminders,
                t.pricing.savingsGoals,
                t.pricing.debtTracker,
            ],
            limitations: [
                t.pricing.limitedBudgets,
                t.pricing.noReceiptScanner,
                t.pricing.noDataExport,
            ],
            cta: t.pricing.getStarted,
            ctaLink: "/download",
            popular: false,
        },
        {
            name: t.pricing.monthly,
            price: "IDR 17,000",
            period: t.pricing.perMonth,
            description: t.pricing.monthlyDesc,
            features: [
                t.pricing.everythingInFree,
                t.pricing.unlimitedWallets,
                t.pricing.unlimitedBudgets,
                t.pricing.advancedStats,
                t.pricing.receiptScanner,
                t.pricing.dataExportImport,
                t.pricing.voiceQuickRecord,
                t.pricing.prioritySupport,
            ],
            limitations: [],
            cta: t.pricing.startFreeTrial,
            ctaLink: "/download",
            popular: false,
            trial: t.pricing.sevenDayTrial,
        },
        {
            name: t.pricing.sixMonth,
            price: "IDR 88,000",
            period: t.pricing.perSixMonths,
            description: t.pricing.sixMonthDesc,
            features: [
                t.pricing.allPremiumFeatures,
                t.pricing.sixMonthsAccess,
                t.pricing.allFutureUpdates,
            ],
            limitations: [],
            cta: t.pricing.getSixMonth,
            ctaLink: "/download",
            popular: false,
            savings: t.pricing.save17,
        },
        {
            name: t.pricing.annual,
            price: "IDR 125,000",
            period: t.pricing.perYear,
            description: t.pricing.annualDesc,
            features: [
                t.pricing.allPremiumFeatures,
                t.pricing.twelveMonthsAccess,
                t.pricing.allFutureUpdates,
            ],
            limitations: [],
            cta: t.pricing.getAnnual,
            ctaLink: "/download",
            popular: false,
            savings: t.pricing.save33,
        },
        {
            name: t.pricing.lifetime,
            price: "IDR 205,000",
            period: t.pricing.oneTime,
            description: t.pricing.lifetimeDesc,
            features: [
                t.pricing.allPremiumFeatures,
                t.pricing.lifetimeAccess,
                t.pricing.allFutureUpdates,
                t.pricing.noRecurringPayments,
                t.pricing.supportDeveloper,
            ],
            limitations: [],
            cta: t.pricing.getLifetime,
            ctaLink: "/download",
            popular: true,
            badge: t.pricing.bestValue,
        },
    ];

    const comparisonFeatures = [
        { name: t.features.multiWalletSystem.split(" ")[0], free: t.pricing.upTo3, premium: t.pricing.unlimited },
        { name: t.features.budgetManagement, free: t.pricing.limited, premium: t.pricing.unlimited },
        { name: t.features.transactionManagement, free: true, premium: true },
        { name: t.features.statisticsAnalytics, free: t.pricing.basic, premium: t.pricing.advanced },
        { name: t.pricing.billReminders, free: true, premium: true },
        { name: t.pricing.savingsGoals, free: true, premium: true },
        { name: t.pricing.debtTracker, free: true, premium: true },
        { name: t.pricing.receiptScanner, free: false, premium: true },
        { name: t.pricing.voiceQuickRecord, free: false, premium: true },
        { name: t.pricing.dataExportImport, free: false, premium: true },
        { name: t.features.homeScreenWidgets, free: true, premium: true },
        { name: t.pricing.prioritySupport, free: false, premium: true },
    ];

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
                    <span className={styles.badge}>{t.pricing.badge}</span>
                    <h1 className={styles.title}>
                        {t.pricing.title1}<br />
                        <span className={styles.gradient}>{t.pricing.title2}</span>
                    </h1>
                    <p className={styles.subtitle}>
                        {t.pricing.subtitle}
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
                        <h2 className={styles.sectionTitle}>{t.pricing.comparePlans}</h2>
                        <p className={styles.sectionSubtitle}>
                            {t.pricing.compareSubtitle}
                        </p>
                    </div>
                    <div className={styles.tableWrapper}>
                        <table className={styles.comparisonTable}>
                            <thead>
                                <tr>
                                    <th>{t.pricing.feature}</th>
                                    <th>{t.pricing.free}</th>
                                    <th>{t.pricing.premium}</th>
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
                        {t.pricing.disclaimer}
                    </p>
                </div>
            </section>
        </main>
    );
}
