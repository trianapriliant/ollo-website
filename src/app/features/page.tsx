"use client";

import styles from "./page.module.css";
import {
    Wallet,
    CreditCard,
    GraphUp,
    Notes,
    PiggyBank,
    Calendar,
    HandCash,
    Star,
    MultiplePages,
    Refresh,
    Microphone,
    Camera,
    Upload,
    AppWindow,
    Bell,
    Trophy,
    Language,
} from "iconoir-react";

const featureCategories = [
    {
        title: "Core Features",
        description: "Essential tools for everyday money management",
        features: [
            {
                icon: Wallet,
                title: "Transaction Management",
                description: "Add income, expense, and transfer transactions with ease. Edit date, time, amount, category, and notes. Search and filter your complete transaction history. Swipe to delete with undo support.",
            },
            {
                icon: CreditCard,
                title: "Multi-Wallet System",
                description: "Create unlimited wallets for Cash, Bank accounts, E-Wallets, and Crypto. Transfer between wallets with fee tracking. Balance tracking per wallet with color customization.",
            },
            {
                icon: GraphUp,
                title: "Statistics & Analytics",
                description: "Weekly, monthly, and yearly views with beautiful charts. Category breakdown pie charts, income vs expense comparisons, and average daily spending calculations.",
            },
            {
                icon: Notes,
                title: "Budget Management",
                description: "Set monthly budgets per category with progress tracking and visual indicators. Get over-budget warnings and review your budget history.",
            },
            {
                icon: PiggyBank,
                title: "Savings Goals",
                description: "Create savings goals with target amounts. Deposit or withdraw with quick percentage shortcuts (5%, 10%, 25%, 50%). Visual progress tracking with target date countdown.",
            },
            {
                icon: Calendar,
                title: "Bills & Recurring",
                description: "Never miss a payment with bill reminders. Multiple reminder offsets (1 day, 3 days, 1 week before). Set up recurring transactions weekly, monthly, or yearly.",
            },
        ],
    },
    {
        title: "More Features",
        description: "Additional tools to complete your financial toolkit",
        features: [
            {
                icon: HandCash,
                title: "Debt Tracker",
                description: "Track money you owe (Payable) and money owed to you (Receivable). Partial payment support with payment history and due date reminders.",
            },
            {
                icon: Star,
                title: "Wishlist",
                description: "Add items you want to buy with priority levels. Track target prices and mark as purchased — automatically creates a transaction.",
            },
            {
                icon: MultiplePages,
                title: "Card Gallery",
                description: "Beautiful visual card collection for Bank, E-Wallet, and Blockchain cards. Masked card number display, expiry tracking, and custom card designs.",
            },
            {
                icon: Refresh,
                title: "Reimbursement Tracker",
                description: "Track business expenses to claim back. Status tracking (Pending, Approved, Paid) linked to original transactions.",
            },
        ],
    },
    {
        title: "Advanced Features",
        description: "Premium capabilities for power users",
        features: [
            {
                icon: Microphone,
                title: "Voice Quick Record",
                description: "Voice-to-transaction in 7 languages: English, Indonesian, Spanish, Hindi, Japanese, Mandarin, and Korean. Natural language parsing like 'spent 50k for lunch at cafe'.",
                premium: true,
            },
            {
                icon: Camera,
                title: "Receipt Scanner (OCR)",
                description: "Camera-based receipt scanning with auto-extract amount. Smart category suggestion based on merchant keywords with multi-line total detection.",
                premium: true,
            },
            {
                icon: Upload,
                title: "Data Export/Import",
                description: "Export to CSV format with date range, wallet, and category filters. Import transactions from CSV. Full data backup and restore as JSON.",
                premium: true,
            },
            {
                icon: AppWindow,
                title: "Home Screen Widgets",
                description: "Monthly Summary Widget for budget overview. Today's Expense Widget for daily spending. Quick Record shortcut right from your home screen.",
            },
            {
                icon: Bell,
                title: "Smart Notifications",
                description: "Daily reminder at customizable time (default 8 PM). Bill due date reminders scheduled at 9 AM. Weekly and monthly evaluation reminders.",
            },
            {
                icon: Trophy,
                title: "Gamification",
                description: "Daily streak tracking to build habits. Badges and achievements for milestones. Total active days counter with celebration animations.",
            },
        ],
    },
];

export default function FeaturesPage() {
    return (
        <main className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <span className={styles.badge}>All Features</span>
                    <h1 className={styles.title}>
                        Powerful features,<br />
                        <span className={styles.gradient}>simple design</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Everything you need to take control of your finances.
                        Track expenses, analyze spending, and build better money habits.
                    </p>
                </div>
            </section>

            {/* Feature Categories */}
            {featureCategories.map((category) => (
                <section key={category.title} className={styles.category}>
                    <div className={styles.container}>
                        <div className={styles.categoryHeader}>
                            <h2 className={styles.categoryTitle}>{category.title}</h2>
                            <p className={styles.categoryDescription}>{category.description}</p>
                        </div>
                        <div className={styles.featuresGrid}>
                            {category.features.map((feature) => (
                                <div key={feature.title} className={styles.featureCard}>
                                    <div className={styles.featureHeader}>
                                        <div className={styles.featureIconWrapper}>
                                            <feature.icon className={styles.featureSvgIcon} />
                                        </div>
                                        {feature.premium && (
                                            <span className={styles.premiumBadge}>Premium</span>
                                        )}
                                    </div>
                                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                                    <p className={styles.featureDescription}>{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            {/* Languages Section */}
            <section className={styles.languages}>
                <div className={styles.container}>
                    <div className={styles.languagesContent}>
                        <span className={styles.badge}>
                            <Language className={styles.badgeIcon} />
                            Localization
                        </span>
                        <h2 className={styles.languagesTitle}>
                            Speak your language
                        </h2>
                        <p className={styles.languagesSubtitle}>
                            Ollo supports 7 languages, including voice input in each language.
                        </p>
                        <div className={styles.languageFlags}>
                            <div className={styles.languageItem}>
                                <span className={styles.flag}>🇺🇸</span>
                                <span>English</span>
                            </div>
                            <div className={styles.languageItem}>
                                <span className={styles.flag}>🇮🇩</span>
                                <span>Indonesian</span>
                            </div>
                            <div className={styles.languageItem}>
                                <span className={styles.flag}>🇪🇸</span>
                                <span>Spanish</span>
                            </div>
                            <div className={styles.languageItem}>
                                <span className={styles.flag}>🇮🇳</span>
                                <span>Hindi</span>
                            </div>
                            <div className={styles.languageItem}>
                                <span className={styles.flag}>🇯🇵</span>
                                <span>Japanese</span>
                            </div>
                            <div className={styles.languageItem}>
                                <span className={styles.flag}>🇨🇳</span>
                                <span>Mandarin</span>
                            </div>
                            <div className={styles.languageItem}>
                                <span className={styles.flag}>🇰🇷</span>
                                <span>Korean</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
