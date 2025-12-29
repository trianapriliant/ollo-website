"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import { FaGooglePlay } from "react-icons/fa6";
import {
  Wallet,
  CreditCard,
  GraphUp,
  PiggyBank,
  Camera,
  Calendar,
  Microphone,
  Language,
  OffTag,
  Lock,
  Cpu,
  Spark,
  Gift,
  Star,
  Coins,
  DataTransferBoth,
} from "iconoir-react";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslations } from "@/lib/translations";

const voiceLanguages = [
  { flag: "🇺🇸", name: "English" },
  { flag: "🇮🇩", name: "Indonesian" },
  { flag: "🇪🇸", name: "Spanish" },
  { flag: "🇮🇳", name: "Hindi" },
  { flag: "🇯🇵", name: "Japanese" },
  { flag: "🇨🇳", name: "Mandarin" },
  { flag: "🇰🇷", name: "Korean" },
];

const voiceFormats = {
  expense: {
    Icon: Wallet,
    format: "[description] [amount] paid with [wallet]",
    examples: [
      { flag: "🇺🇸", text: "Lunch $20 paid with Chase", result: { title: "Lunch", category: "Food & Drinks", amount: "-$20.00", wallet: "Chase" } },
      { flag: "🇮🇩", text: "Makan siang 20rb bayar BCA", result: { title: "Makan siang", category: "Makanan", amount: "-Rp 20.000", wallet: "BCA" } },
      { flag: "🇯🇵", text: "ランチ 2000円 現金で", result: { title: "ランチ", category: "食費", amount: "-¥2,000", wallet: "現金" } },
      { flag: "🇪🇸", text: "Almuerzo €15 con Santander", result: { title: "Almuerzo", category: "Comida", amount: "-€15.00", wallet: "Santander" } },
    ]
  },
  income: {
    Icon: Coins,
    format: "[source] [amount] to [wallet]",
    examples: [
      { flag: "🇺🇸", text: "Monthly salary $4000 to Savings", result: { title: "Monthly salary", category: "Salary", amount: "+$4,000.00", wallet: "Savings" } },
      { flag: "🇮🇩", text: "Gaji bulanan 4jt masuk BCA", result: { title: "Gaji bulanan", category: "Gaji", amount: "+Rp 4.000.000", wallet: "BCA" } },
      { flag: "🇯🇵", text: "給料 30万円 三菱UFJへ", result: { title: "給料", category: "給与", amount: "+¥300,000", wallet: "三菱UFJ" } },
      { flag: "🇪🇸", text: "Sueldo €2500 a BBVA", result: { title: "Sueldo", category: "Salario", amount: "+€2,500.00", wallet: "BBVA" } },
    ]
  },
  transfer: {
    Icon: DataTransferBoth,
    format: "transfer [amount] from [wallet A] to [wallet B] fee [amount]",
    examples: [
      { flag: "🇺🇸", text: "Transfer $500 from Checking to Savings", result: { from: "Checking", to: "Savings", amount: "$500.00", fee: "$0" } },
      { flag: "🇮🇩", text: "Transfer 100rb dari BCA ke Mandiri admin 2500", result: { from: "BCA", to: "Mandiri", amount: "Rp 100.000", fee: "Rp 2.500" } },
      { flag: "🇯🇵", text: "振込 5万円 三菱UFJからみずほへ 手数料220円", result: { from: "三菱UFJ", to: "みずほ", amount: "¥50,000", fee: "¥220" } },
      { flag: "🇪🇸", text: "Transferir €200 de BBVA a Santander", result: { from: "BBVA", to: "Santander", amount: "€200.00", fee: "€0" } },
    ]
  }
};

const screenshots = [
  "/app-screen-1.jpg",
  "/app-screen-2.jpg",
  "/app-screen-3.jpg",
];

export default function Home() {
  const [currentScreenshot, setCurrentScreenshot] = useState(0);
  const [activeVoiceTab, setActiveVoiceTab] = useState<'expense' | 'income' | 'transfer'>('expense');
  const { language } = useLanguage();
  const t = getTranslations(language);

  // Features with translations
  const features = [
    {
      icon: Wallet,
      title: t.home.smartTransactionsTitle,
      description: t.home.smartTransactionsDesc,
      image: "/feature-smart-transactions.jpg",
    },
    {
      icon: CreditCard,
      title: t.home.multiWalletTitle,
      description: t.home.multiWalletDesc,
      image: "/feature-multi-wallet.jpg",
    },
    {
      icon: GraphUp,
      title: t.home.richAnalyticsTitle,
      description: t.home.richAnalyticsDesc,
      image: "/feature-rich-analytics.png",
    },
    {
      icon: PiggyBank,
      title: t.home.savingsGoalsTitle,
      description: t.home.savingsGoalsDesc,
      image: "/feature-savings-goals.jpg",
    },
    {
      icon: Camera,
      title: t.home.receiptScannerTitle,
      description: t.home.receiptScannerDesc,
      image: "/feature-receipt-scanner.png",
    },
    {
      icon: Calendar,
      title: t.home.billsRemindersTitle,
      description: t.home.billsRemindersDesc,
      image: "/feature-bills-reminders.jpg",
    },
  ];

  // Benefits with translations
  const benefits = [
    {
      title: t.home.privacyFirstTitle,
      description: t.home.privacyFirstDesc,
      icon: Lock,
    },
    {
      title: t.home.worksOfflineTitle,
      description: t.home.worksOfflineDesc,
      icon: OffTag,
    },
    {
      title: t.home.beautifulDesignTitle,
      description: t.home.beautifulDesignDesc,
      icon: Spark,
    },
    {
      title: t.home.freeForeverTitle,
      description: t.home.freeForeverDesc,
      icon: Gift,
    },
  ];

  // Voice tab labels
  const voiceTabLabels = {
    expense: t.home.expense,
    income: t.home.income,
    transfer: t.home.transfer,
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentScreenshot((prev) => (prev + 1) % screenshots.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <span className={styles.badge}>
              <Microphone className={styles.badgeIcon} />
              {t.home.heroBadge}
            </span>
            <h1 className={styles.heroTitle}>
              {t.home.heroTitle1}<br />
              <span className={styles.gradient}>{t.home.heroTitle2}</span><br />
              {t.home.heroTitle3}
            </h1>
            <p className={styles.heroSubtitle}>
              {t.home.heroSubtitle.split(',')[0]}, <span className={styles.voiceExample}>&quot;{t.home.heroVoiceExample}&quot;</span>, {t.home.heroSubtitle.split(',').slice(1).join(',')}
            </p>
            <div className={styles.heroCta}>
              <Link href="/download" className={styles.primaryButton}>
                <span className={styles.playIcon}>
                  <FaGooglePlay size={16} />
                </span>
                {t.home.downloadPlayStore}
              </Link>
              <Link href="/features" className={styles.secondaryButton}>
                {t.home.seeAllFeatures}
              </Link>
            </div>
            <div className={styles.trustSignals}>
              <div className={styles.trustItem}>
                <Spark className={styles.trustIcon} />
                <span>{t.home.trustRecording}</span>
              </div>
              <div className={styles.trustItem}>
                <Language className={styles.trustIcon} />
                <span>{t.home.trustLanguages}</span>
              </div>
              <div className={styles.trustItem}>
                <Cpu className={styles.trustIcon} />
                <span>{t.home.trustAI}</span>
              </div>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.phoneMockup}>
              <div className={styles.phoneFrame}>
                <div className={styles.phoneScreen}>
                  {/* App Screenshot Carousel */}
                  <div className={styles.appScreenWrapper}>
                    {screenshots.map((src, index) => (
                      <div
                        key={src}
                        className={styles.screenshotSlide}
                        style={{ opacity: currentScreenshot === index ? 1 : 0 }}
                      >
                        <Image
                          src={src}
                          alt={`Ollo App Screen ${index + 1}`}
                          fill
                          style={{ objectFit: 'cover' }}
                          priority
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className={styles.phoneGlow}></div>
            </div>
          </div>
        </div>
        <div className={styles.heroWave}>
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Voice Quick Record Spotlight */}
      <section className={styles.voiceSpotlight}>
        <div className={styles.container}>
          <div className={styles.spotlightGrid}>
            <div className={styles.spotlightContent}>
              <span className={styles.spotlightBadge}>
                <Star className={styles.spotlightBadgeIcon} />
                {t.home.spotlightBadge}
              </span>
              <h2 className={styles.spotlightTitle}>
                {t.home.spotlightTitle}
              </h2>
              <p className={styles.spotlightSubtitle}>
                {t.home.spotlightSubtitle}
              </p>

              {/* Interactive Voice Format Tabs */}
              <div className={styles.voiceFormatSection}>
                <div className={styles.voiceFormatTabs}>
                  {(Object.keys(voiceFormats) as Array<keyof typeof voiceFormats>).map((key) => {
                    const TabIcon = voiceFormats[key].Icon;
                    return (
                      <button
                        key={key}
                        className={`${styles.voiceFormatTab} ${activeVoiceTab === key ? styles.voiceFormatTabActive : ''}`}
                        onMouseEnter={() => setActiveVoiceTab(key)}
                        onClick={() => setActiveVoiceTab(key)}
                      >
                        <TabIcon className={styles.tabIcon} />
                        <span className={styles.tabLabel}>{voiceTabLabels[key]}</span>
                      </button>
                    );
                  })}
                </div>

                <div className={styles.voiceFormatContent}>
                  <div className={styles.formatPattern}>
                    <span className={styles.formatLabel}>{t.home.voiceFormatLabel}</span>
                    <code className={styles.formatCode}>{voiceFormats[activeVoiceTab].format}</code>
                  </div>

                  <div className={styles.formatExamples}>
                    {voiceFormats[activeVoiceTab].examples.map((example, index) => (
                      <div key={index} className={styles.formatExampleCard}>
                        <div className={styles.exampleVoice}>
                          <span className={styles.exampleFlag}>{example.flag}</span>
                          <span className={styles.exampleVoiceText}>&quot;{example.text}&quot;</span>
                        </div>
                        <div className={styles.exampleArrow}>→</div>
                        <div className={styles.exampleResult}>
                          {'title' in example.result ? (
                            <>
                              <span className={styles.exampleResultTitle}>{example.result.title}</span>
                              <span className={styles.exampleResultAmount}>{example.result.amount}</span>
                            </>
                          ) : (
                            <>
                              <span className={styles.exampleResultTitle}>{example.result.from} → {example.result.to}</span>
                              <span className={styles.exampleResultAmount}>{example.result.amount}</span>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className={styles.voiceStats}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>3s</span>
                  <span className={styles.statLabel}>{t.home.avgRecordTime}</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>95%</span>
                  <span className={styles.statLabel}>{t.home.accuracyRate}</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>7</span>
                  <span className={styles.statLabel}>{t.home.languagesSupported}</span>
                </div>
              </div>
            </div>

            <div className={styles.spotlightLanguages}>
              <h3 className={styles.languagesTitle}>
                <Language className={styles.langTitleIcon} />
                {t.home.speakInYourLanguage}
              </h3>
              <div className={styles.languagesList}>
                {voiceLanguages.map((lang) => (
                  <div key={lang.name} className={styles.languageItem}>
                    <span className={styles.langFlag}>{lang.flag}</span>
                    <span className={styles.langName}>{lang.name}</span>
                  </div>
                ))}
              </div>
              <div className={styles.voiceExamples}>
                <div className={styles.exampleItem}>
                  <span className={styles.exampleFlag}>🇮🇩</span>
                  <span className={styles.exampleText}>&quot;Bayar grab 25 ribu&quot;</span>
                </div>
                <div className={styles.exampleItem}>
                  <span className={styles.exampleFlag}>🇺🇸</span>
                  <span className={styles.exampleText}>&quot;Coffee at Starbucks $5&quot;</span>
                </div>
                <div className={styles.exampleItem}>
                  <span className={styles.exampleFlag}>🇯🇵</span>
                  <span className={styles.exampleText}>&quot;ランチ 1000円&quot;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className={styles.features}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>{t.home.featuresLabel}</span>
            <h2 className={styles.sectionTitle}>
              {t.home.featuresTitle1}<br />
              <span className={styles.gradient}>{t.home.featuresTitle2}</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              {t.home.featuresSubtitle}
            </p>
          </div>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={styles.featureCard}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {feature.image && (
                  <div className={styles.featureImageWrapper}>
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                )}
                <div className={styles.featureContent}>
                  <div className={styles.featureIconWrapper}>
                    <feature.icon className={styles.featureSvgIcon} />
                  </div>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.featuresCta}>
            <Link href="/features" className={styles.outlineButton}>
              {t.home.viewAllFeatures}
            </Link>
          </div>
        </div>
      </section>

      {/* Why Ollo */}
      <section className={styles.whyOllo}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>{t.home.whyOlloLabel}</span>
            <h2 className={styles.sectionTitle}>
              {t.home.whyOlloTitle1}<br />
              <span className={styles.gradient}>{t.home.whyOlloTitle2}</span>
            </h2>
          </div>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className={styles.benefitCard}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={styles.benefitIconWrapper}>
                  <benefit.icon className={styles.benefitSvgIcon} />
                </div>
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                <p className={styles.benefitDescription}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>
                {t.home.ctaTitle}
              </h2>
              <p className={styles.ctaSubtitle}>
                {t.home.ctaSubtitle}
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/download" className={styles.primaryButton}>
                  <span className={styles.playIcon}><FaGooglePlay size={16} /></span>
                  {t.home.getOlloFree}
                </Link>
                <Link href="/pricing" className={styles.ghostButton}>
                  {t.home.viewPricing}
                </Link>
              </div>
            </div>
            <div className={styles.ctaDecor}>
              <Wallet className={styles.ctaDecoIcon} />
              <GraphUp className={styles.ctaDecoIcon} />
              <PiggyBank className={styles.ctaDecoIcon} />
              <Spark className={styles.ctaDecoIcon} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
