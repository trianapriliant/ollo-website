import { Language } from "@/context/LanguageContext";

// Translation structure - easily extensible for new languages
// To add a new language: add a new key (e.g., "ja") with all translations
export const translations: Record<Language, {
    // Navigation
    nav: {
        features: string;
        pricing: string;
        download: string;
        faq: string;
        about: string;
        beta: string;
        downloadApp: string;
    };
    // Footer
    footer: {
        tagline: string;
        description: string;
        product: string;
        company: string;
        legal: string;
        features: string;
        pricing: string;
        download: string;
        about: string;
        faq: string;
        credits: string;
        roadmap: string;
        joinBeta: string;
        privacyPolicy: string;
        termsOfService: string;
        copyright: string;
        madeWith: string;
        language: string;
    };
    // Home Page
    home: {
        heroBadge: string;
        heroTitle1: string;
        heroTitle2: string;
        heroTitle3: string;
        heroSubtitle: string;
        heroVoiceExample: string;
        downloadPlayStore: string;
        seeAllFeatures: string;
        trustRecording: string;
        trustLanguages: string;
        trustAI: string;
        spotlightBadge: string;
        spotlightTitle: string;
        spotlightSubtitle: string;
        voiceFormatLabel: string;
        avgRecordTime: string;
        accuracyRate: string;
        languagesSupported: string;
        speakInYourLanguage: string;
        expense: string;
        income: string;
        transfer: string;
        featuresLabel: string;
        featuresTitle1: string;
        featuresTitle2: string;
        featuresSubtitle: string;
        viewAllFeatures: string;
        smartTransactionsTitle: string;
        smartTransactionsDesc: string;
        multiWalletTitle: string;
        multiWalletDesc: string;
        richAnalyticsTitle: string;
        richAnalyticsDesc: string;
        savingsGoalsTitle: string;
        savingsGoalsDesc: string;
        receiptScannerTitle: string;
        receiptScannerDesc: string;
        billsRemindersTitle: string;
        billsRemindersDesc: string;
        whyOlloLabel: string;
        whyOlloTitle1: string;
        whyOlloTitle2: string;
        privacyFirstTitle: string;
        privacyFirstDesc: string;
        worksOfflineTitle: string;
        worksOfflineDesc: string;
        beautifulDesignTitle: string;
        beautifulDesignDesc: string;
        freeForeverTitle: string;
        freeForeverDesc: string;
        ctaTitle: string;
        ctaSubtitle: string;
        getOlloFree: string;
        viewPricing: string;
    };
    // Features Page
    features: {
        badge: string;
        title1: string;
        title2: string;
        subtitle: string;
        premium: string;
        // Categories
        coreFeatures: string;
        coreFeaturesDesc: string;
        moreFeatures: string;
        moreFeaturesDesc: string;
        advancedFeatures: string;
        advancedFeaturesDesc: string;
        // Core Features
        transactionManagement: string;
        transactionManagementDesc: string;
        multiWalletSystem: string;
        multiWalletSystemDesc: string;
        statisticsAnalytics: string;
        statisticsAnalyticsDesc: string;
        budgetManagement: string;
        budgetManagementDesc: string;
        savingsGoals: string;
        savingsGoalsDesc: string;
        billsRecurring: string;
        billsRecurringDesc: string;
        // More Features
        debtTracker: string;
        debtTrackerDesc: string;
        wishlist: string;
        wishlistDesc: string;
        cardGallery: string;
        cardGalleryDesc: string;
        reimbursementTracker: string;
        reimbursementTrackerDesc: string;
        // Advanced Features
        voiceQuickRecord: string;
        voiceQuickRecordDesc: string;
        receiptScanner: string;
        receiptScannerDesc: string;
        dataExportImport: string;
        dataExportImportDesc: string;
        homeScreenWidgets: string;
        homeScreenWidgetsDesc: string;
        smartNotifications: string;
        smartNotificationsDesc: string;
        gamification: string;
        gamificationDesc: string;
        // Languages section
        localization: string;
        speakYourLanguage: string;
        languagesSupportedDesc: string;
    };
    // Pricing Page
    pricing: {
        badge: string;
        title1: string;
        title2: string;
        subtitle: string;
        // Plan names
        free: string;
        monthly: string;
        sixMonth: string;
        annual: string;
        lifetime: string;
        // Periods
        forever: string;
        perMonth: string;
        perSixMonths: string;
        perYear: string;
        oneTime: string;
        // Plan descriptions
        freeDesc: string;
        monthlyDesc: string;
        sixMonthDesc: string;
        annualDesc: string;
        lifetimeDesc: string;
        // Features
        upTo3Wallets: string;
        basicTracking: string;
        monthlyStats: string;
        billReminders: string;
        savingsGoals: string;
        debtTracker: string;
        limitedBudgets: string;
        noReceiptScanner: string;
        noDataExport: string;
        everythingInFree: string;
        unlimitedWallets: string;
        unlimitedBudgets: string;
        advancedStats: string;
        receiptScanner: string;
        dataExportImport: string;
        voiceQuickRecord: string;
        prioritySupport: string;
        allPremiumFeatures: string;
        sixMonthsAccess: string;
        twelveMonthsAccess: string;
        lifetimeAccess: string;
        allFutureUpdates: string;
        noRecurringPayments: string;
        supportDeveloper: string;
        // CTAs
        getStarted: string;
        startFreeTrial: string;
        getSixMonth: string;
        getAnnual: string;
        getLifetime: string;
        // Badges
        bestValue: string;
        save17: string;
        save33: string;
        sevenDayTrial: string;
        // Comparison
        comparePlans: string;
        compareSubtitle: string;
        feature: string;
        premium: string;
        upTo3: string;
        unlimited: string;
        basic: string;
        advanced: string;
        limited: string;
        // Disclaimer
        disclaimer: string;
    };
    // Download Page
    download: {
        badge: string;
        title1: string;
        title2: string;
        subtitle: string;
        getItOn: string;
        googlePlay: string;
        version: string;
        size: string;
        requires: string;
        // Trust signals
        trustTitle: string;
        trustSubtitle: string;
        privacyFirst: string;
        privacyFirstDesc: string;
        worksOffline: string;
        worksOfflineDesc: string;
        localStorage: string;
        localStorageDesc: string;
        fastLight: string;
        fastLightDesc: string;
        // Getting started
        gettingStarted: string;
        gettingStartedSubtitle: string;
        step1Title: string;
        step1Desc: string;
        step2Title: string;
        step2Desc: string;
        step3Title: string;
        step3Desc: string;
        // Coming soon
        iosComingSoon: string;
        iosComingSoonDesc: string;
        webComingSoon: string;
        webComingSoonDesc: string;
        followUs: string;
    };
    // FAQ Page
    faq: {
        badge: string;
        title1: string;
        title2: string;
        subtitle: string;
        // Questions and answers
        q1: string; a1: string;
        q2: string; a2: string;
        q3: string; a3: string;
        q4: string; a4: string;
        q5: string; a5: string;
        q6: string; a6: string;
        q7: string; a7: string;
        q8: string; a8: string;
        q9: string; a9: string;
        q10: string; a10: string;
        q11: string; a11: string;
        q12: string; a12: string;
        // Contact section
        stillHaveQuestions: string;
        hereToHelp: string;
        contactUs: string;
    };
    // About Page
    about: {
        badge: string;
        title1: string;
        title2: string;
        subtitle: string;
        missionTitle: string;
        missionText: string;
        missionDesc: string;
        valuesTitle: string;
        privacyFirst: string;
        privacyFirstDesc: string;
        simplicity: string;
        simplicityDesc: string;
        userFocused: string;
        userFocusedDesc: string;
        sustainable: string;
        sustainableDesc: string;
        createdBy: string;
        at: string;
        developerBio: string;
        getInTouch: string;
        email: string;
        website: string;
        followUs: string;
    };
    // Privacy Page
    privacy: {
        title: string;
        lastUpdated: string;
        introduction: string;
        dataStorage: string;
        notCollect: string;
        analytics: string;
        camera: string;
        microphone: string;
        inAppPurchases: string;
        dataBackup: string;
        thirdParty: string;
        children: string;
        changes: string;
        contactUs: string;
    };
    // Terms Page
    terms: {
        title: string;
        lastUpdated: string;
        acceptance: string;
        description: string;
        responsibilities: string;
        premium: string;
        trial: string;
        refund: string;
        dataPrivacy: string;
        intellectual: string;
        disclaimer: string;
        liability: string;
        changes: string;
        termination: string;
        governing: string;
        contact: string;
    };
    // Credits Page
    credits: {
        badge: string;
        title1: string;
        title2: string;
        subtitle: string;
        mobileCore: string;
        webApp: string;
        designAssets: string;
        thanks: string;
        // Tech descriptions
        flutterDesc: string;
        dartDesc: string;
        isarDesc: string;
        riverpodDesc: string;
        nextjsDesc: string;
        reactDesc: string;
        iconoirDesc: string;
        googleFontsDesc: string;
        materialIconsDesc: string;
    };
    // Roadmap Page
    roadmap: {
        badge: string;
        title1: string;
        title2: string;
        subtitle: string;
        lastUpdated: string;
        // Completed section
        completedBadge: string;
        completedTitle: string;
        completedSubtitle: string;
        completed: string;
        // Upcoming section
        upcomingBadge: string;
        upcomingTitle: string;
        upcomingSubtitle: string;
        inDevelopment: string;
        planned: string;
        // Completed features
        vipCodeSystem: string;
        vipCodeSystemDesc: string;
        freemiumQuickRecord: string;
        freemiumQuickRecordDesc: string;
        premiumColorThemes: string;
        premiumColorThemesDesc: string;
        keyboardAutoCapitalization: string;
        keyboardAutoCapitalizationDesc: string;
        appRestartBackupRestore: string;
        appRestartBackupRestoreDesc: string;
        // Upcoming features
        cloudBackup: string;
        cloudBackupDesc: string;
        multiCurrency: string;
        multiCurrencyDesc: string;
        iosVersion: string;
        iosVersionDesc: string;
        // Suggestions
        suggestionsTitle: string;
        suggestionsText: string;
        suggestFeature: string;
    };
    // Beta Page
    beta: {
        badge: string;
        title1: string;
        title2: string;
        subtitle: string;
        benefitsTitle: string;
        benefit1Title: string;
        benefit1Desc: string;
        benefit2Title: string;
        benefit2Desc: string;
        benefit3Title: string;
        benefit3Desc: string;
        requirementsTitle: string;
        req1: string;
        req2: string;
        req3: string;
        noticeTitle: string;
        noticeText: string;
        formTitle: string;
        formSubtitle: string;
        formAlt: string;
        openFormButton: string;
        nextStepsTitle: string;
        step1Title: string;
        step1Desc: string;
        step2Title: string;
        step2Desc: string;
        step3Title: string;
        step3Desc: string;
        step4Title: string;
        step4Desc: string;
    };
    // Common
    common: {
        learnMore: string;
        getStarted: string;
        tryNow: string;
    };
}> = {
    en: {
        nav: {
            features: "Features",
            pricing: "Pricing",
            download: "Download",
            faq: "FAQ",
            about: "About",
            beta: "Beta",
            downloadApp: "Download App",
        },
        footer: {
            tagline: "Track Smart, Spend Wise, Live Better",
            description: "The modern personal finance app that helps you build better money habits.",
            product: "Product",
            company: "Company",
            legal: "Legal",
            features: "Features",
            pricing: "Pricing",
            download: "Download",
            about: "About",
            faq: "FAQ",
            credits: "Credits",
            roadmap: "Roadmap",
            joinBeta: "Join Beta",
            privacyPolicy: "Privacy Policy",
            termsOfService: "Terms of Service",
            copyright: "Ollo. Made with ❤️ by Low Orbit Labs - Trian Aprilianto",
            madeWith: "Made with",
            language: "Language",
        },
        home: {
            heroBadge: "Voice-First Finance Tracking",
            heroTitle1: "Record expenses",
            heroTitle2: "in 3 seconds",
            heroTitle3: "with your voice",
            heroSubtitle: "Just speak naturally, and Ollo instantly creates your transaction. The fastest way to track money.",
            heroVoiceExample: "spent 50k for lunch at cafe",
            downloadPlayStore: "Download on Play Store",
            seeAllFeatures: "See All Features",
            trustRecording: "3-second recording",
            trustLanguages: "7 languages",
            trustAI: "Smart AI parsing",
            spotlightBadge: "Featured",
            spotlightTitle: "Voice Quick Record",
            spotlightSubtitle: "The fastest way to track expenses. Just speak naturally in your language, and Ollo's AI instantly understands amount, category, and details.",
            voiceFormatLabel: "Voice Format:",
            avgRecordTime: "Average record time",
            accuracyRate: "Accuracy rate",
            languagesSupported: "Languages supported",
            speakInYourLanguage: "Speak in your language",
            expense: "Expense",
            income: "Income",
            transfer: "Transfer",
            featuresLabel: "Features",
            featuresTitle1: "Everything you need to",
            featuresTitle2: "master your finances",
            featuresSubtitle: "Powerful features designed with simplicity in mind. Track, analyze, and optimize your spending effortlessly.",
            viewAllFeatures: "View All Features →",
            smartTransactionsTitle: "Smart Transactions",
            smartTransactionsDesc: "Track income, expenses, and transfers with powerful categorization and search.",
            multiWalletTitle: "Multi-Wallet",
            multiWalletDesc: "Manage cash, bank accounts, e-wallets, and crypto all in one place.",
            richAnalyticsTitle: "Rich Analytics",
            richAnalyticsDesc: "Beautiful charts and insights to understand your spending patterns.",
            savingsGoalsTitle: "Savings Goals",
            savingsGoalsDesc: "Set goals, track progress, and celebrate when you reach your targets.",
            receiptScannerTitle: "Receipt Scanner",
            receiptScannerDesc: "Snap a receipt and let AI extract the amount and category for you.",
            billsRemindersTitle: "Bills & Reminders",
            billsRemindersDesc: "Never miss a payment with smart bill tracking and timely reminders.",
            whyOlloLabel: "Why Ollo?",
            whyOlloTitle1: "Designed for",
            whyOlloTitle2: "daily money clarity",
            privacyFirstTitle: "Privacy First",
            privacyFirstDesc: "Your data stays on your device. No cloud uploads, no tracking.",
            worksOfflineTitle: "Works Offline",
            worksOfflineDesc: "No internet? No problem. Ollo works completely offline.",
            beautifulDesignTitle: "Beautiful Design",
            beautifulDesignDesc: "Modern, clean interface that makes finance tracking a joy.",
            freeForeverTitle: "Free Forever Core",
            freeForeverDesc: "Essential features are free. Premium unlocks the full experience.",
            ctaTitle: "Ready to take control of your finances?",
            ctaSubtitle: "Join thousands of users who are building better money habits with Ollo. Free to download, powerful to use.",
            getOlloFree: "Get Ollo Free",
            viewPricing: "View Pricing",
        },
        features: {
            badge: "All Features",
            title1: "Powerful features,",
            title2: "simple design",
            subtitle: "Everything you need to take control of your finances. Track expenses, analyze spending, and build better money habits.",
            premium: "Premium",
            coreFeatures: "Core Features",
            coreFeaturesDesc: "Essential tools for everyday money management",
            moreFeatures: "More Features",
            moreFeaturesDesc: "Additional tools to complete your financial toolkit",
            advancedFeatures: "Advanced Features",
            advancedFeaturesDesc: "Premium capabilities for power users",
            transactionManagement: "Transaction Management",
            transactionManagementDesc: "Add income, expense, and transfer transactions with ease. Edit date, time, amount, category, and notes. Search and filter your complete transaction history. Swipe to delete with undo support.",
            multiWalletSystem: "Multi-Wallet System",
            multiWalletSystemDesc: "Create unlimited wallets for Cash, Bank accounts, E-Wallets, and Crypto. Transfer between wallets with fee tracking. Balance tracking per wallet with color customization.",
            statisticsAnalytics: "Statistics & Analytics",
            statisticsAnalyticsDesc: "Weekly, monthly, and yearly views with beautiful charts. Category breakdown pie charts, income vs expense comparisons, and average daily spending calculations.",
            budgetManagement: "Budget Management",
            budgetManagementDesc: "Set monthly budgets per category with progress tracking and visual indicators. Get over-budget warnings and review your budget history.",
            savingsGoals: "Savings Goals",
            savingsGoalsDesc: "Create savings goals with target amounts. Deposit or withdraw with quick percentage shortcuts (5%, 10%, 25%, 50%). Visual progress tracking with target date countdown.",
            billsRecurring: "Bills & Recurring",
            billsRecurringDesc: "Never miss a payment with bill reminders. Multiple reminder offsets (1 day, 3 days, 1 week before). Set up recurring transactions weekly, monthly, or yearly.",
            debtTracker: "Debt Tracker",
            debtTrackerDesc: "Track money you owe (Payable) and money owed to you (Receivable). Partial payment support with payment history and due date reminders.",
            wishlist: "Wishlist",
            wishlistDesc: "Add items you want to buy with priority levels. Track target prices and mark as purchased — automatically creates a transaction.",
            cardGallery: "Card Gallery",
            cardGalleryDesc: "Beautiful visual card collection for Bank, E-Wallet, and Blockchain cards. Masked card number display, expiry tracking, and custom card designs.",
            reimbursementTracker: "Reimbursement Tracker",
            reimbursementTrackerDesc: "Track business expenses to claim back. Status tracking (Pending, Approved, Paid) linked to original transactions.",
            voiceQuickRecord: "Voice Quick Record",
            voiceQuickRecordDesc: "Voice-to-transaction in 7 languages: English, Indonesian, Spanish, Hindi, Japanese, Mandarin, and Korean. Natural language parsing like 'spent 50k for lunch at cafe'.",
            receiptScanner: "Receipt Scanner (OCR)",
            receiptScannerDesc: "Camera-based receipt scanning with auto-extract amount. Smart category suggestion based on merchant keywords with multi-line total detection.",
            dataExportImport: "Data Export/Import",
            dataExportImportDesc: "Export to CSV format with date range, wallet, and category filters. Import transactions from CSV. Full data backup and restore as JSON.",
            homeScreenWidgets: "Home Screen Widgets",
            homeScreenWidgetsDesc: "Monthly Summary Widget for budget overview. Today's Expense Widget for daily spending. Quick Record shortcut right from your home screen.",
            smartNotifications: "Smart Notifications",
            smartNotificationsDesc: "Daily reminder at customizable time (default 8 PM). Bill due date reminders scheduled at 9 AM. Weekly and monthly evaluation reminders.",
            gamification: "Gamification",
            gamificationDesc: "Daily streak tracking to build habits. Badges and achievements for milestones. Total active days counter with celebration animations.",
            localization: "Localization",
            speakYourLanguage: "Speak your language",
            languagesSupportedDesc: "Ollo supports 7 languages, including voice input in each language.",
        },
        pricing: {
            badge: "Pricing",
            title1: "Simple pricing,",
            title2: "no surprises",
            subtitle: "Start free, upgrade when you need more. All plans include core features to manage your money better.",
            free: "Free",
            monthly: "Monthly",
            sixMonth: "6-Month",
            annual: "Annual",
            lifetime: "Lifetime",
            forever: "forever",
            perMonth: "/month",
            perSixMonths: "/6 months",
            perYear: "/year",
            oneTime: "one-time",
            freeDesc: "Essential features to get started",
            monthlyDesc: "Full access, pay as you go",
            sixMonthDesc: "Save 17% with semi-annual",
            annualDesc: "Best monthly value",
            lifetimeDesc: "Pay once, use forever",
            upTo3Wallets: "Up to 7 wallets",
            basicTracking: "Basic transaction tracking",
            monthlyStats: "Monthly statistics",
            billReminders: "Bill reminders",
            savingsGoals: "Savings goals",
            debtTracker: "Debt tracker",
            limitedBudgets: "Limited budgets",
            noReceiptScanner: "No receipt scanner",
            noDataExport: "No data export",
            everythingInFree: "Everything in Free, plus:",
            unlimitedWallets: "Unlimited wallets",
            unlimitedBudgets: "Unlimited budgets",
            advancedStats: "Advanced statistics",
            receiptScanner: "Receipt scanner (OCR)",
            dataExportImport: "Data export/import",
            voiceQuickRecord: "Voice Quick Record",
            prioritySupport: "Priority support",
            allPremiumFeatures: "All Premium features",
            sixMonthsAccess: "6 months access",
            twelveMonthsAccess: "12 months access",
            lifetimeAccess: "Lifetime access",
            allFutureUpdates: "All future updates",
            noRecurringPayments: "No recurring payments",
            supportDeveloper: "Support the developer",
            getStarted: "Get Started",
            startFreeTrial: "Start Free Trial",
            getSixMonth: "Get 6-Month",
            getAnnual: "Get Annual",
            getLifetime: "Get Lifetime",
            bestValue: "Best Value",
            save17: "Save 17%",
            save33: "Save 33%",
            sevenDayTrial: "7-day free trial",
            comparePlans: "Compare Plans",
            compareSubtitle: "See what you get with Free vs Premium",
            feature: "Feature",
            premium: "Premium",
            upTo3: "Up to 7",
            unlimited: "Unlimited",
            basic: "Basic",
            advanced: "Advanced",
            limited: "Limited",
            disclaimer: "* Prices shown are in Indonesian Rupiah (IDR). Actual prices may vary slightly based on your region and Google Play Store policies. All subscriptions are processed through Google Play and subject to their billing terms.",
        },
        download: {
            badge: "Download",
            title1: "Get Ollo for",
            title2: "Android",
            subtitle: "Start tracking your finances today. Free to download, easy to use, powerful features.",
            getItOn: "GET IT ON",
            googlePlay: "Google Play",
            version: "Version",
            size: "Size",
            requires: "Requires",
            trustTitle: "Built with trust in mind",
            trustSubtitle: "Your privacy and security are our top priorities",
            privacyFirst: "Privacy First",
            privacyFirstDesc: "Your financial data stays on your device. No cloud uploads unless you choose to backup.",
            worksOffline: "Works Offline",
            worksOfflineDesc: "No internet required. Track expenses anywhere, anytime, even without connection.",
            localStorage: "Local Storage",
            localStorageDesc: "All data is stored locally using Isar database. You own your data completely.",
            fastLight: "Fast & Light",
            fastLightDesc: "Optimized for performance. Quick startup and smooth animations on any device.",
            gettingStarted: "Getting Started",
            gettingStartedSubtitle: "Start managing your money in 3 simple steps",
            step1Title: "Download & Install",
            step1Desc: "Get Ollo from the Google Play Store. It's free and takes less than a minute.",
            step2Title: "Create Your Wallets",
            step2Desc: "Set up your wallets for cash, bank accounts, or e-wallets. Use templates for quick setup.",
            step3Title: "Start Tracking",
            step3Desc: "Add your first transaction. Use voice input for quick recording or manual entry.",
            iosComingSoon: "iOS Coming Soon",
            iosComingSoonDesc: "We're working on bringing Ollo to iPhone. Follow us on social media for updates.",
            webComingSoon: "Ollo Web Coming Soon",
            webComingSoonDesc: "Access your finances from any browser. We're building a web version for seamless sync.",
            followUs: "Follow @ollowithyou →",
        },
        faq: {
            badge: "FAQ",
            title1: "Frequently Asked",
            title2: "Questions",
            subtitle: "Find answers to common questions about Ollo. Can't find what you're looking for? Contact us!",
            q1: "Is Ollo free to use?",
            a1: "Yes! Ollo's core features are completely free. You can track transactions, manage up to 7 wallets, set savings goals, track debts, and more at no cost. Premium unlocks advanced features like unlimited wallets, receipt scanning, voice input, and data export.",
            q2: "Is my financial data safe?",
            a2: "Absolutely. Your data is stored locally on your device using Isar database. We don't upload your financial information to any cloud server. You have complete control over your data. The only time data leaves your device is if you choose to export it yourself.",
            q3: "Does Ollo work offline?",
            a3: "Yes! Ollo works completely offline. You don't need an internet connection to track expenses, view statistics, or use any core features. The app is designed to work anywhere, anytime.",
            q4: "What happens if I change my phone?",
            a4: "You can backup your data using the built-in backup feature. Export your data as a JSON file and save it to your preferred location (Google Drive, local storage, etc.). Then import it on your new device. We're also working on cloud backup for easier migration.",
            q5: "How does Premium subscription work?",
            a5: "Premium is available as Monthly, 6-Month, Annual, or Lifetime plans. Subscriptions are processed through Google Play Store. Monthly plans include a 7-day free trial. You can cancel anytime, and your premium features remain active until the end of your billing period.",
            q6: "Does Ollo support multiple currencies?",
            a6: "Currently, Ollo supports setting your preferred currency for display purposes. Full multi-currency support with automatic conversion is on our roadmap and coming soon.",
            q7: "Is cloud backup available?",
            a7: "Cloud backup (Google Drive sync) is currently in development. For now, you can manually backup your data as a JSON file and store it in your preferred cloud storage.",
            q8: "Can I use voice input in my language?",
            a8: "Yes! Voice Quick Record supports 7 languages: English, Indonesian, Spanish, Hindi, Japanese, Mandarin Chinese, and Korean. The app uses natural language processing to understand your spoken transactions.",
            q9: "How accurate is the receipt scanner?",
            a9: "Our OCR-based receipt scanner works well with clear, well-lit receipts. It extracts the total amount and suggests categories based on merchant keywords. Results may vary depending on receipt quality and lighting conditions.",
            q10: "Can I export my data?",
            a10: "Yes! Premium users can export transactions to CSV format with filters for date range, wallet, and category. You can also do a full backup as JSON which includes all your data (transactions, wallets, budgets, goals, etc.).",
            q11: "What if I need help or have feedback?",
            a11: "We'd love to hear from you! You can reach us at contact@ollowithyou.com or through our social media channels @ollowithyou. Premium users get priority support.",
            q12: "Is there a web or desktop version?",
            a12: "Currently, Ollo is available only for Android. iOS is in development. A web version may come in the future based on user demand.",
            stillHaveQuestions: "Still have questions?",
            hereToHelp: "We're here to help. Reach out to us and we'll get back to you as soon as possible.",
            contactUs: "Contact Us →",
        },
        about: {
            badge: "About",
            title1: "The story behind",
            title2: "Ollo",
            subtitle: "A personal finance app built with care, designed to help everyone build better money habits.",
            missionTitle: "Our Mission",
            missionText: "Money tracking shouldn't be stressful. It should be simple, fast, and human.",
            missionDesc: "We believe that everyone deserves a clear view of their finances without complexity or overwhelm. Ollo was created to be the finance companion that respects your time, protects your privacy, and helps you make smarter decisions about your money — every single day.",
            valuesTitle: "Our Values",
            privacyFirst: "Privacy First",
            privacyFirstDesc: "Your financial data belongs to you. We store everything locally on your device and never upload your information to our servers.",
            simplicity: "Simplicity",
            simplicityDesc: "Powerful features don't have to be complicated. We design every feature to be intuitive and easy to use from day one.",
            userFocused: "User Focused",
            userFocusedDesc: "Every feature is built based on real user needs. We listen to feedback and continuously improve the experience.",
            sustainable: "Sustainable",
            sustainableDesc: "We offer a generous free tier and fair pricing. Building something that lasts means building something sustainable.",
            createdBy: "Created by",
            at: "at",
            developerBio: "Indie developer and maker passionate about building useful tools that help people in their daily lives. Ollo is a labor of love, crafted with attention to detail and a commitment to quality.",
            getInTouch: "Get in Touch",
            email: "Email",
            website: "Website",
            followUs: "Follow Us",
        },
        privacy: {
            title: "Privacy Policy",
            lastUpdated: "Last updated: December 30, 2025",
            introduction: "Introduction",
            dataStorage: "Data Storage",
            notCollect: "Information We Do Not Collect",
            analytics: "Optional Analytics",
            camera: "Camera Permission",
            microphone: "Microphone Permission",
            inAppPurchases: "In-App Purchases",
            dataBackup: "Data Backup",
            thirdParty: "Third-Party Services",
            children: "Children's Privacy",
            changes: "Changes to This Policy",
            contactUs: "Contact Us",
        },
        terms: {
            title: "Terms of Service",
            lastUpdated: "Last updated: December 30, 2025",
            acceptance: "1. Acceptance of Terms",
            description: "2. Description of Service",
            responsibilities: "3. User Responsibilities",
            premium: "4. Premium Subscription",
            trial: "5. Free Trial",
            refund: "6. Refund Policy",
            dataPrivacy: "7. Data and Privacy",
            intellectual: "8. Intellectual Property",
            disclaimer: "9. Disclaimer of Warranties",
            liability: "10. Limitation of Liability",
            changes: "11. Changes to Terms",
            termination: "12. Termination",
            governing: "13. Governing Law",
            contact: "14. Contact Information",
        },
        credits: {
            badge: "Built With",
            title1: "Powered by",
            title2: "Open Source",
            subtitle: "Ollo is built on the shoulders of giants. We gratefully acknowledge the incredible tools and libraries that make this project possible.",
            mobileCore: "Mobile App Core",
            webApp: "Website & Web App",
            designAssets: "Design & Assets",
            thanks: "And a special thanks to all the contributors of these projects.",
            flutterDesc: "Hybrid App Framework",
            dartDesc: "Programming Language",
            isarDesc: "High-performance Local DB",
            riverpodDesc: "State Management",
            nextjsDesc: "React Framework",
            reactDesc: "UI Library",
            iconoirDesc: "Open Source Icons",
            googleFontsDesc: "Typography (Poppins)",
            materialIconsDesc: "App Icon Set",
        },
        roadmap: {
            badge: "Roadmap",
            title1: "What's next for",
            title2: "Ollo",
            subtitle: "Follow our journey as we build the future of personal finance tracking. See what's done and what's coming next.",
            lastUpdated: "Last updated: December 30, 2025",
            completedBadge: "Recently Shipped",
            completedTitle: "Completed Features",
            completedSubtitle: "Features we've recently added to Ollo",
            completed: "Completed",
            upcomingBadge: "Coming Soon",
            upcomingTitle: "Upcoming Features",
            upcomingSubtitle: "What we're working on next",
            inDevelopment: "In Development",
            planned: "Planned",
            vipCodeSystem: "VIP Code System",
            vipCodeSystemDesc: "Exclusive badges and premium access for special users. Redeem VIP codes for unique perks and recognition.",
            freemiumQuickRecord: "Freemium Quick Record",
            freemiumQuickRecordDesc: "Free users now get 15 free uses each for Voice and Scan Quick Record features.",
            premiumColorThemes: "Premium Color Themes",
            premiumColorThemesDesc: "6 exclusive color themes for premium users to customize their app experience.",
            keyboardAutoCapitalization: "Keyboard Auto-Capitalization",
            keyboardAutoCapitalizationDesc: "Smart text capitalization for names and sentences in input fields.",
            appRestartBackupRestore: "App Restart on Backup Restore",
            appRestartBackupRestoreDesc: "Automatic app restart after restoring backup for seamless data recovery.",
            cloudBackup: "Cloud Backup",
            cloudBackupDesc: "Sync your data securely across devices with Google Drive integration.",
            multiCurrency: "Multi-Currency Support",
            multiCurrencyDesc: "Track expenses in multiple currencies with automatic conversion rates.",
            iosVersion: "iOS Version",
            iosVersionDesc: "Bringing Ollo to iPhone users with the same great features.",
            suggestionsTitle: "Have a Feature Request?",
            suggestionsText: "We love hearing from our users! Share your ideas and help shape the future of Ollo.",
            suggestFeature: "Suggest a Feature →",
        },
        beta: {
            badge: "Beta Program",
            title1: "Join the",
            title2: "Beta Testing",
            subtitle: "Be among the first to experience Ollo and help shape the future of personal finance tracking. Get full premium access for free!",
            benefitsTitle: "Why Join the Beta?",
            benefit1Title: "Full Premium Access",
            benefit1Desc: "Get access to all premium features completely free as a thank you for being an early tester.",
            benefit2Title: "Exclusive Beta Badge",
            benefit2Desc: "Receive a special badge in the app that shows you're an early supporter of Ollo.",
            benefit3Title: "Direct Feedback Channel",
            benefit3Desc: "Share your thoughts directly with the developer. Your suggestions help improve the app.",
            requirementsTitle: "Requirements",
            req1: "Google account (same as Play Store)",
            req2: "Android phone or tablet",
            req3: "Willing to give feedback",
            noticeTitle: "Important!",
            noticeText: "Make sure to use the same Google email that you use on Google Play Store. Without this, you won't be able to install the beta app.",
            formTitle: "Register as Beta Tester",
            formSubtitle: "Fill out the form below to join our beta testing program.",
            formAlt: "Having trouble with the embedded form?",
            openFormButton: "Open Form in New Tab",
            nextStepsTitle: "What Happens Next?",
            step1Title: "Submit the Form",
            step1Desc: "Fill out the registration form with your Google Play email and preferences.",
            step2Title: "Get Added to Beta",
            step2Desc: "We'll add your email to the closed testing group on Google Play (usually within 24-48 hours).",
            step3Title: "Receive Invitation",
            step3Desc: "You'll get an Whatsapp invitation with a link to download Ollo from Play Store.",
            step4Title: "Start Testing!",
            step4Desc: "Download the app, explore all features, and share your feedback with us.",
        },
        common: {
            learnMore: "Learn More",
            getStarted: "Get Started",
            tryNow: "Try Now",
        },
    },
    id: {
        nav: {
            features: "Fitur",
            pricing: "Harga",
            download: "Unduh",
            faq: "FAQ",
            about: "Tentang",
            beta: "Beta",
            downloadApp: "Unduh Aplikasi",
        },
        footer: {
            tagline: "Lacak Cerdas, Belanja Bijak, Hidup Lebih Baik",
            description: "Aplikasi keuangan pribadi modern yang membantu Anda membangun kebiasaan uang yang lebih baik.",
            product: "Produk",
            company: "Perusahaan",
            legal: "Legal",
            features: "Fitur",
            pricing: "Harga",
            download: "Unduh",
            about: "Tentang",
            faq: "FAQ",
            credits: "Kredit",
            roadmap: "Roadmap",
            joinBeta: "Gabung Beta",
            privacyPolicy: "Kebijakan Privasi",
            termsOfService: "Ketentuan Layanan",
            copyright: "Ollo. Dibuat dengan ❤️ oleh Low Orbit Labs - Trian Aprilianto",
            madeWith: "Dibuat dengan",
            language: "Bahasa",
        },
        home: {
            heroBadge: "Pencatatan Keuangan Berbasis Suara",
            heroTitle1: "Catat pengeluaran",
            heroTitle2: "dalam 3 detik",
            heroTitle3: "dengan suaramu",
            heroSubtitle: "Cukup bicara natural, dan Ollo langsung membuat transaksimu. Cara tercepat untuk mencatat uang.",
            heroVoiceExample: "makan siang 50rb di kafe",
            downloadPlayStore: "Unduh di Play Store",
            seeAllFeatures: "Lihat Semua Fitur",
            trustRecording: "Rekam 3 detik",
            trustLanguages: "7 bahasa",
            trustAI: "AI cerdas",
            spotlightBadge: "Unggulan",
            spotlightTitle: "Rekam Cepat Suara",
            spotlightSubtitle: "Cara tercepat mencatat pengeluaran. Bicara natural dalam bahasamu, dan AI Ollo langsung memahami jumlah, kategori, dan detail.",
            voiceFormatLabel: "Format Suara:",
            avgRecordTime: "Rata-rata waktu rekam",
            accuracyRate: "Tingkat akurasi",
            languagesSupported: "Bahasa didukung",
            speakInYourLanguage: "Bicara dalam bahasamu",
            expense: "Pengeluaran",
            income: "Pemasukan",
            transfer: "Transfer",
            featuresLabel: "Fitur",
            featuresTitle1: "Semua yang kamu butuhkan untuk",
            featuresTitle2: "menguasai keuanganmu",
            featuresSubtitle: "Fitur powerful yang dirancang dengan kesederhanaan. Lacak, analisis, dan optimalkan pengeluaranmu dengan mudah.",
            viewAllFeatures: "Lihat Semua Fitur →",
            smartTransactionsTitle: "Transaksi Cerdas",
            smartTransactionsDesc: "Catat pemasukan, pengeluaran, dan transfer dengan kategorisasi dan pencarian yang powerful.",
            multiWalletTitle: "Multi-Dompet",
            multiWalletDesc: "Kelola tunai, rekening bank, e-wallet, dan crypto dalam satu tempat.",
            richAnalyticsTitle: "Analitik Lengkap",
            richAnalyticsDesc: "Grafik dan insight cantik untuk memahami pola pengeluaranmu.",
            savingsGoalsTitle: "Target Tabungan",
            savingsGoalsDesc: "Tetapkan target, pantau progress, dan rayakan saat mencapai targetmu.",
            receiptScannerTitle: "Pemindai Struk",
            receiptScannerDesc: "Foto struk dan biarkan AI mengekstrak jumlah dan kategori untukmu.",
            billsRemindersTitle: "Tagihan & Pengingat",
            billsRemindersDesc: "Jangan lewatkan pembayaran dengan pelacakan tagihan cerdas dan pengingat tepat waktu.",
            whyOlloLabel: "Mengapa Ollo?",
            whyOlloTitle1: "Dirancang untuk",
            whyOlloTitle2: "kejelasan uang harian",
            privacyFirstTitle: "Privasi Utama",
            privacyFirstDesc: "Datamu tetap di perangkatmu. Tanpa upload cloud, tanpa pelacakan.",
            worksOfflineTitle: "Bekerja Offline",
            worksOfflineDesc: "Tidak ada internet? Tidak masalah. Ollo bekerja sepenuhnya offline.",
            beautifulDesignTitle: "Desain Cantik",
            beautifulDesignDesc: "Antarmuka modern dan bersih yang membuat pencatatan keuangan menyenangkan.",
            freeForeverTitle: "Gratis Selamanya",
            freeForeverDesc: "Fitur esensial gratis. Premium membuka pengalaman penuh.",
            ctaTitle: "Siap mengambil kendali keuanganmu?",
            ctaSubtitle: "Bergabung dengan ribuan pengguna yang membangun kebiasaan uang lebih baik dengan Ollo. Gratis diunduh, powerful digunakan.",
            getOlloFree: "Dapatkan Ollo Gratis",
            viewPricing: "Lihat Harga",
        },
        features: {
            badge: "Semua Fitur",
            title1: "Fitur powerful,",
            title2: "desain simpel",
            subtitle: "Semua yang kamu butuhkan untuk mengendalikan keuanganmu. Lacak pengeluaran, analisis belanja, dan bangun kebiasaan uang yang lebih baik.",
            premium: "Premium",
            coreFeatures: "Fitur Utama",
            coreFeaturesDesc: "Alat esensial untuk manajemen uang sehari-hari",
            moreFeatures: "Fitur Lainnya",
            moreFeaturesDesc: "Alat tambahan untuk melengkapi toolkit keuanganmu",
            advancedFeatures: "Fitur Lanjutan",
            advancedFeaturesDesc: "Kemampuan premium untuk pengguna advanced",
            transactionManagement: "Manajemen Transaksi",
            transactionManagementDesc: "Tambahkan transaksi pemasukan, pengeluaran, dan transfer dengan mudah. Edit tanggal, waktu, jumlah, kategori, dan catatan. Cari dan filter riwayat transaksi lengkap. Geser untuk hapus dengan dukungan undo.",
            multiWalletSystem: "Sistem Multi-Dompet",
            multiWalletSystemDesc: "Buat dompet tak terbatas untuk Tunai, Rekening Bank, E-Wallet, dan Crypto. Transfer antar dompet dengan pelacakan biaya. Pelacakan saldo per dompet dengan kustomisasi warna.",
            statisticsAnalytics: "Statistik & Analitik",
            statisticsAnalyticsDesc: "Tampilan mingguan, bulanan, dan tahunan dengan grafik cantik. Pie chart breakdown kategori, perbandingan pemasukan vs pengeluaran, dan kalkulasi pengeluaran harian rata-rata.",
            budgetManagement: "Manajemen Anggaran",
            budgetManagementDesc: "Atur anggaran bulanan per kategori dengan pelacakan progress dan indikator visual. Dapatkan peringatan over-budget dan tinjau riwayat anggaranmu.",
            savingsGoals: "Target Tabungan",
            savingsGoalsDesc: "Buat target tabungan dengan jumlah target. Setor atau tarik dengan shortcut persentase cepat (5%, 10%, 25%, 50%). Pelacakan progress visual dengan countdown tanggal target.",
            billsRecurring: "Tagihan & Berulang",
            billsRecurringDesc: "Jangan lewatkan pembayaran dengan pengingat tagihan. Berbagai offset pengingat (1 hari, 3 hari, 1 minggu sebelum). Atur transaksi berulang mingguan, bulanan, atau tahunan.",
            debtTracker: "Pelacak Hutang",
            debtTrackerDesc: "Lacak uang yang kamu utang (Payable) dan uang yang berhutang padamu (Receivable). Dukungan pembayaran sebagian dengan riwayat pembayaran dan pengingat jatuh tempo.",
            wishlist: "Wishlist",
            wishlistDesc: "Tambahkan item yang ingin kamu beli dengan level prioritas. Lacak harga target dan tandai sebagai dibeli — otomatis membuat transaksi.",
            cardGallery: "Galeri Kartu",
            cardGalleryDesc: "Koleksi kartu visual cantik untuk kartu Bank, E-Wallet, dan Blockchain. Tampilan nomor kartu tersamar, pelacakan kedaluwarsa, dan desain kartu custom.",
            reimbursementTracker: "Pelacak Reimbursement",
            reimbursementTrackerDesc: "Lacak pengeluaran bisnis untuk diklaim kembali. Pelacakan status (Pending, Approved, Paid) terhubung ke transaksi asli.",
            voiceQuickRecord: "Rekam Cepat Suara",
            voiceQuickRecordDesc: "Suara ke transaksi dalam 7 bahasa: Inggris, Indonesia, Spanyol, Hindi, Jepang, Mandarin, dan Korea. Parsing bahasa natural seperti 'makan siang 50rb di kafe'.",
            receiptScanner: "Pemindai Struk (OCR)",
            receiptScannerDesc: "Pemindaian struk berbasis kamera dengan ekstrak otomatis jumlah. Saran kategori cerdas berdasarkan kata kunci merchant dengan deteksi total multi-baris.",
            dataExportImport: "Ekspor/Impor Data",
            dataExportImportDesc: "Ekspor ke format CSV dengan filter rentang tanggal, dompet, dan kategori. Impor transaksi dari CSV. Backup dan restore data lengkap sebagai JSON.",
            homeScreenWidgets: "Widget Layar Utama",
            homeScreenWidgetsDesc: "Widget Ringkasan Bulanan untuk overview anggaran. Widget Pengeluaran Hari Ini untuk belanja harian. Shortcut Rekam Cepat langsung dari layar utama.",
            smartNotifications: "Notifikasi Cerdas",
            smartNotificationsDesc: "Pengingat harian pada waktu yang dapat dikustomisasi (default 8 PM). Pengingat jatuh tempo tagihan dijadwalkan jam 9 AM. Pengingat evaluasi mingguan dan bulanan.",
            gamification: "Gamifikasi",
            gamificationDesc: "Pelacakan streak harian untuk membangun kebiasaan. Badge dan achievement untuk milestone. Penghitung total hari aktif dengan animasi selebrasi.",
            localization: "Lokalisasi",
            speakYourLanguage: "Bicara dalam bahasamu",
            languagesSupportedDesc: "Ollo mendukung 7 bahasa, termasuk input suara dalam setiap bahasa.",
        },
        pricing: {
            badge: "Harga",
            title1: "Harga sederhana,",
            title2: "tanpa kejutan",
            subtitle: "Mulai gratis, upgrade saat butuh lebih. Semua paket termasuk fitur inti untuk mengelola uangmu lebih baik.",
            free: "Gratis",
            monthly: "Bulanan",
            sixMonth: "6-Bulan",
            annual: "Tahunan",
            lifetime: "Seumur Hidup",
            forever: "selamanya",
            perMonth: "/bulan",
            perSixMonths: "/6 bulan",
            perYear: "/tahun",
            oneTime: "sekali bayar",
            freeDesc: "Fitur esensial untuk memulai",
            monthlyDesc: "Akses penuh, bayar sesuai pemakaian",
            sixMonthDesc: "Hemat 17% dengan semi-tahunan",
            annualDesc: "Nilai bulanan terbaik",
            lifetimeDesc: "Bayar sekali, gunakan selamanya",
            upTo3Wallets: "Hingga 7 dompet",
            basicTracking: "Pelacakan transaksi dasar",
            monthlyStats: "Statistik bulanan",
            billReminders: "Pengingat tagihan",
            savingsGoals: "Target tabungan",
            debtTracker: "Pelacak hutang",
            limitedBudgets: "Anggaran terbatas",
            noReceiptScanner: "Tanpa pemindai struk",
            noDataExport: "Tanpa ekspor data",
            everythingInFree: "Semua di Gratis, plus:",
            unlimitedWallets: "Dompet tak terbatas",
            unlimitedBudgets: "Anggaran tak terbatas",
            advancedStats: "Statistik lanjutan",
            receiptScanner: "Pemindai struk (OCR)",
            dataExportImport: "Ekspor/impor data",
            voiceQuickRecord: "Rekam Cepat Suara",
            prioritySupport: "Dukungan prioritas",
            allPremiumFeatures: "Semua fitur Premium",
            sixMonthsAccess: "Akses 6 bulan",
            twelveMonthsAccess: "Akses 12 bulan",
            lifetimeAccess: "Akses seumur hidup",
            allFutureUpdates: "Semua update mendatang",
            noRecurringPayments: "Tanpa pembayaran berulang",
            supportDeveloper: "Dukung developer",
            getStarted: "Mulai Sekarang",
            startFreeTrial: "Mulai Uji Coba Gratis",
            getSixMonth: "Dapatkan 6-Bulan",
            getAnnual: "Dapatkan Tahunan",
            getLifetime: "Dapatkan Seumur Hidup",
            bestValue: "Nilai Terbaik",
            save17: "Hemat 17%",
            save33: "Hemat 33%",
            sevenDayTrial: "Uji coba 7 hari gratis",
            comparePlans: "Bandingkan Paket",
            compareSubtitle: "Lihat apa yang kamu dapat di Gratis vs Premium",
            feature: "Fitur",
            premium: "Premium",
            upTo3: "Hingga 7",
            unlimited: "Tak Terbatas",
            basic: "Dasar",
            advanced: "Lanjutan",
            limited: "Terbatas",
            disclaimer: "* Harga ditampilkan dalam Rupiah Indonesia (IDR). Harga aktual mungkin sedikit berbeda berdasarkan wilayahmu dan kebijakan Google Play Store. Semua langganan diproses melalui Google Play dan tunduk pada ketentuan penagihan mereka.",
        },
        download: {
            badge: "Unduh",
            title1: "Dapatkan Ollo untuk",
            title2: "Android",
            subtitle: "Mulai lacak keuanganmu hari ini. Gratis diunduh, mudah digunakan, fitur powerful.",
            getItOn: "DAPATKAN DI",
            googlePlay: "Google Play",
            version: "Versi",
            size: "Ukuran",
            requires: "Membutuhkan",
            trustTitle: "Dibangun dengan kepercayaan",
            trustSubtitle: "Privasi dan keamananmu adalah prioritas utama kami",
            privacyFirst: "Privasi Utama",
            privacyFirstDesc: "Data keuanganmu tetap di perangkatmu. Tidak ada upload cloud kecuali kamu memilih backup.",
            worksOffline: "Bekerja Offline",
            worksOfflineDesc: "Tidak perlu internet. Lacak pengeluaran di mana saja, kapan saja, tanpa koneksi.",
            localStorage: "Penyimpanan Lokal",
            localStorageDesc: "Semua data disimpan secara lokal menggunakan database Isar. Kamu memiliki datamu sepenuhnya.",
            fastLight: "Cepat & Ringan",
            fastLightDesc: "Dioptimalkan untuk performa. Startup cepat dan animasi halus di perangkat apa pun.",
            gettingStarted: "Memulai",
            gettingStartedSubtitle: "Mulai kelola uangmu dalam 3 langkah sederhana",
            step1Title: "Unduh & Instal",
            step1Desc: "Dapatkan Ollo dari Google Play Store. Gratis dan butuh kurang dari semenit.",
            step2Title: "Buat Dompetmu",
            step2Desc: "Atur dompet untuk tunai, rekening bank, atau e-wallet. Gunakan template untuk setup cepat.",
            step3Title: "Mulai Melacak",
            step3Desc: "Tambahkan transaksi pertamamu. Gunakan input suara untuk rekam cepat atau entri manual.",
            iosComingSoon: "iOS Segera Hadir",
            iosComingSoonDesc: "Kami sedang mengerjakan Ollo untuk iPhone. Ikuti kami di media sosial untuk update.",
            webComingSoon: "Ollo Web Segera Hadir",
            webComingSoonDesc: "Akses keuanganmu dari browser mana pun. Kami sedang membangun versi web untuk sinkronisasi seamless.",
            followUs: "Ikuti @ollowithyou →",
        },
        faq: {
            badge: "FAQ",
            title1: "Pertanyaan yang",
            title2: "Sering Diajukan",
            subtitle: "Temukan jawaban untuk pertanyaan umum tentang Ollo. Tidak menemukan yang kamu cari? Hubungi kami!",
            q1: "Apakah Ollo gratis?",
            a1: "Ya! Fitur inti Ollo benar-benar gratis. Kamu bisa melacak transaksi, mengelola hingga 7 dompet, menetapkan target tabungan, melacak hutang, dan lainnya tanpa biaya. Premium membuka fitur lanjutan seperti dompet tak terbatas, pemindai struk, input suara, dan ekspor data.",
            q2: "Apakah data keuangan saya aman?",
            a2: "Tentu saja. Datamu disimpan secara lokal di perangkatmu menggunakan database Isar. Kami tidak mengunggah informasi keuanganmu ke server cloud mana pun. Kamu memiliki kendali penuh atas datamu.",
            q3: "Apakah Ollo bekerja offline?",
            a3: "Ya! Ollo bekerja sepenuhnya offline. Kamu tidak memerlukan koneksi internet untuk melacak pengeluaran, melihat statistik, atau menggunakan fitur inti lainnya.",
            q4: "Apa yang terjadi jika saya ganti ponsel?",
            a4: "Kamu bisa mencadangkan datamu menggunakan fitur backup bawaan. Ekspor datamu sebagai file JSON dan simpan ke lokasi pilihanmu. Kemudian impor di perangkat barumu.",
            q5: "Bagaimana cara kerja langganan Premium?",
            a5: "Premium tersedia sebagai paket Bulanan, 6-Bulan, Tahunan, atau Seumur Hidup. Langganan diproses melalui Google Play Store. Paket bulanan termasuk uji coba gratis 7 hari.",
            q6: "Apakah Ollo mendukung banyak mata uang?",
            a6: "Saat ini, Ollo mendukung pengaturan mata uang pilihanmu untuk tujuan tampilan. Dukungan multi-mata uang penuh dengan konversi otomatis akan segera hadir.",
            q7: "Apakah backup cloud tersedia?",
            a7: "Backup cloud (sinkronisasi Google Drive) saat ini dalam pengembangan. Untuk saat ini, kamu bisa mencadangkan datamu secara manual sebagai file JSON.",
            q8: "Bisakah saya menggunakan input suara dalam bahasa saya?",
            a8: "Ya! Rekam Cepat Suara mendukung 7 bahasa: Inggris, Indonesia, Spanyol, Hindi, Jepang, Mandarin, dan Korea.",
            q9: "Seberapa akurat pemindai struk?",
            a9: "Pemindai struk berbasis OCR kami bekerja dengan baik dengan struk yang jelas dan pencahayaan yang baik. Hasil mungkin bervariasi tergantung kualitas struk.",
            q10: "Bisakah saya mengekspor data saya?",
            a10: "Ya! Pengguna Premium dapat mengekspor transaksi ke format CSV dengan filter untuk rentang tanggal, dompet, dan kategori.",
            q11: "Bagaimana jika saya butuh bantuan atau punya masukan?",
            a11: "Kami senang mendengar darimu! Kamu bisa menghubungi kami di contact@ollowithyou.com atau melalui @ollowithyou. Pengguna Premium mendapat dukungan prioritas.",
            q12: "Apakah ada versi web atau desktop?",
            a12: "Saat ini, Ollo hanya tersedia untuk Android. iOS sedang dalam pengembangan. Versi web mungkin akan hadir di masa depan.",
            stillHaveQuestions: "Masih punya pertanyaan?",
            hereToHelp: "Kami di sini untuk membantu. Hubungi kami dan kami akan membalasmu secepat mungkin.",
            contactUs: "Hubungi Kami →",
        },
        about: {
            badge: "Tentang",
            title1: "Cerita di balik",
            title2: "Ollo",
            subtitle: "Aplikasi keuangan pribadi yang dibuat dengan penuh perhatian, dirancang untuk membantu semua orang membangun kebiasaan uang yang lebih baik.",
            missionTitle: "Misi Kami",
            missionText: "Pencatatan uang seharusnya tidak menegangkan. Harus sederhana, cepat, dan manusiawi.",
            missionDesc: "Kami percaya bahwa setiap orang berhak mendapatkan gambaran jelas tentang keuangan mereka tanpa kompleksitas. Ollo dibuat untuk menjadi pendamping keuangan yang menghargai waktumu, melindungi privasimu, dan membantumu membuat keputusan yang lebih cerdas tentang uangmu — setiap hari.",
            valuesTitle: "Nilai-Nilai Kami",
            privacyFirst: "Privasi Utama",
            privacyFirstDesc: "Data keuanganmu milikmu. Kami menyimpan semuanya secara lokal di perangkatmu dan tidak pernah mengunggah informasimu ke server kami.",
            simplicity: "Kesederhanaan",
            simplicityDesc: "Fitur powerful tidak harus rumit. Kami merancang setiap fitur agar intuitif dan mudah digunakan sejak hari pertama.",
            userFocused: "Fokus Pengguna",
            userFocusedDesc: "Setiap fitur dibangun berdasarkan kebutuhan pengguna nyata. Kami mendengarkan masukan dan terus meningkatkan pengalaman.",
            sustainable: "Berkelanjutan",
            sustainableDesc: "Kami menawarkan tier gratis yang murah hati dan harga yang adil. Membangun sesuatu yang bertahan berarti membangun sesuatu yang berkelanjutan.",
            createdBy: "Dibuat oleh",
            at: "di",
            developerBio: "Developer indie dan maker yang passionate dalam membangun tools berguna yang membantu orang dalam kehidupan sehari-hari. Ollo adalah karya cinta, dibuat dengan perhatian terhadap detail dan komitmen terhadap kualitas.",
            getInTouch: "Hubungi Kami",
            email: "Email",
            website: "Website",
            followUs: "Ikuti Kami",
        },
        privacy: {
            title: "Kebijakan Privasi",
            lastUpdated: "Terakhir diperbarui: 30 Desember 2025",
            introduction: "Pendahuluan",
            dataStorage: "Penyimpanan Data",
            notCollect: "Informasi yang Tidak Kami Kumpulkan",
            analytics: "Analitik Opsional",
            camera: "Izin Kamera",
            microphone: "Izin Mikrofon",
            inAppPurchases: "Pembelian Dalam Aplikasi",
            dataBackup: "Backup Data",
            thirdParty: "Layanan Pihak Ketiga",
            children: "Privasi Anak-anak",
            changes: "Perubahan Kebijakan Ini",
            contactUs: "Hubungi Kami",
        },
        terms: {
            title: "Syarat Layanan",
            lastUpdated: "Terakhir diperbarui: 30 Desember 2025",
            acceptance: "1. Penerimaan Syarat",
            description: "2. Deskripsi Layanan",
            responsibilities: "3. Tanggung Jawab Pengguna",
            premium: "4. Langganan Premium",
            trial: "5. Uji Coba Gratis",
            refund: "6. Kebijakan Pengembalian Dana",
            dataPrivacy: "7. Data dan Privasi",
            intellectual: "8. Kekayaan Intelektual",
            disclaimer: "9. Penafian Jaminan",
            liability: "10. Batasan Tanggung Jawab",
            changes: "11. Perubahan Syarat",
            termination: "12. Pemutusan",
            governing: "13. Hukum yang Berlaku",
            contact: "14. Informasi Kontak",
        },
        credits: {
            badge: "Dibangun Dengan",
            title1: "Didukung oleh",
            title2: "Open Source",
            subtitle: "Ollo dibangun di atas bahu raksasa. Kami dengan syukur berterima kasih kepada tools dan library luar biasa yang membuat proyek ini mungkin.",
            mobileCore: "Core Aplikasi Mobile",
            webApp: "Website & Web App",
            designAssets: "Desain & Aset",
            thanks: "Dan terima kasih khusus kepada semua kontributor proyek-proyek ini.",
            flutterDesc: "Framework Aplikasi Hybrid",
            dartDesc: "Bahasa Pemrograman",
            isarDesc: "DB Lokal Performa Tinggi",
            riverpodDesc: "Manajemen State",
            nextjsDesc: "Framework React",
            reactDesc: "Library UI",
            iconoirDesc: "Ikon Open Source",
            googleFontsDesc: "Tipografi (Poppins)",
            materialIconsDesc: "Set Ikon Aplikasi",
        },
        roadmap: {
            badge: "Roadmap",
            title1: "Apa selanjutnya untuk",
            title2: "Ollo",
            subtitle: "Ikuti perjalanan kami membangun masa depan pelacakan keuangan pribadi. Lihat apa yang sudah selesai dan apa yang akan datang.",
            lastUpdated: "Terakhir diperbarui: 30 Desember 2025",
            completedBadge: "Baru Dirilis",
            completedTitle: "Fitur Selesai",
            completedSubtitle: "Fitur yang baru kami tambahkan ke Ollo",
            completed: "Selesai",
            upcomingBadge: "Segera Hadir",
            upcomingTitle: "Fitur Mendatang",
            upcomingSubtitle: "Apa yang sedang kami kerjakan",
            inDevelopment: "Dalam Pengembangan",
            planned: "Direncanakan",
            vipCodeSystem: "Sistem Kode VIP",
            vipCodeSystemDesc: "Badge eksklusif dan akses premium untuk pengguna spesial. Tukarkan kode VIP untuk keuntungan dan pengakuan unik.",
            freemiumQuickRecord: "Freemium Rekam Cepat",
            freemiumQuickRecordDesc: "Pengguna gratis sekarang dapat menggunakan 15 kali gratis untuk fitur Rekam Cepat Suara dan Scan.",
            premiumColorThemes: "Tema Warna Premium",
            premiumColorThemesDesc: "6 tema warna eksklusif untuk pengguna premium untuk mengkustomisasi pengalaman aplikasi.",
            keyboardAutoCapitalization: "Auto-Kapitalisasi Keyboard",
            keyboardAutoCapitalizationDesc: "Kapitalisasi teks cerdas untuk nama dan kalimat di kolom input.",
            appRestartBackupRestore: "Restart Aplikasi saat Restore",
            appRestartBackupRestoreDesc: "Restart aplikasi otomatis setelah memulihkan backup untuk pemulihan data yang mulus.",
            cloudBackup: "Backup Cloud",
            cloudBackupDesc: "Sinkronkan data Anda dengan aman di berbagai perangkat dengan integrasi Google Drive.",
            multiCurrency: "Dukungan Multi-Mata Uang",
            multiCurrencyDesc: "Lacak pengeluaran dalam berbagai mata uang dengan konversi otomatis.",
            iosVersion: "Versi iOS",
            iosVersionDesc: "Membawa Ollo ke pengguna iPhone dengan fitur yang sama.",
            suggestionsTitle: "Punya Permintaan Fitur?",
            suggestionsText: "Kami senang mendengar dari pengguna! Bagikan ide Anda dan bantu bentuk masa depan Ollo.",
            suggestFeature: "Sarankan Fitur →",
        },
        beta: {
            badge: "🚀 Program Beta",
            title1: "Gabung",
            title2: "Beta Testing",
            subtitle: "Jadilah yang pertama merasakan Ollo dan bantu bentuk masa depan pelacakan keuangan pribadi. Dapatkan akses premium penuh gratis!",
            benefitsTitle: "Kenapa Gabung Beta?",
            benefit1Title: "Akses Premium Penuh",
            benefit1Desc: "Dapatkan akses ke semua fitur premium secara gratis sebagai terima kasih karena menjadi tester awal.",
            benefit2Title: "Badge Beta Eksklusif",
            benefit2Desc: "Terima badge khusus di aplikasi yang menunjukkan kamu adalah pendukung awal Ollo.",
            benefit3Title: "Jalur Feedback Langsung",
            benefit3Desc: "Sampaikan pendapatmu langsung ke developer. Saranmu membantu memperbaiki aplikasi.",
            requirementsTitle: "Persyaratan",
            req1: "Akun Google (sama dengan Play Store)",
            req2: "HP atau tablet Android",
            req3: "Bersedia memberikan feedback",
            noticeTitle: "Penting!",
            noticeText: "Pastikan menggunakan email Google yang sama dengan yang kamu gunakan di Google Play Store. Tanpa ini, kamu tidak akan bisa menginstall aplikasi beta.",
            formTitle: "Daftar sebagai Beta Tester",
            formSubtitle: "Isi formulir di bawah untuk bergabung dengan program beta testing kami.",
            formAlt: "Kesulitan dengan formulir embed?",
            openFormButton: "Buka Form di Tab Baru",
            nextStepsTitle: "Apa yang Terjadi Selanjutnya?",
            step1Title: "Kirim Formulir",
            step1Desc: "Isi formulir pendaftaran dengan email Google Play dan preferensimu.",
            step2Title: "Ditambahkan ke Beta",
            step2Desc: "Kami akan menambahkan emailmu ke grup closed testing di Google Play (biasanya 24-48 jam).",
            step3Title: "Terima Undangan",
            step3Desc: "Kamu akan menerima Whatsapp undangan dengan link untuk download Ollo dari Play Store.",
            step4Title: "Mulai Testing!",
            step4Desc: "Download aplikasi, jelajahi semua fitur, dan bagikan feedback denganmu.",
        },
        common: {
            learnMore: "Pelajari Lebih",
            getStarted: "Mulai Sekarang",
            tryNow: "Coba Sekarang",
        },
    },
};

// Helper hook/function to get translations
export function getTranslations(language: Language) {
    return translations[language] || translations.en;
}
