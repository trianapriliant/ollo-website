"use client";

import styles from "./page.module.css";
import {
    Rocket,
    Gift,
    Trophy,
    ChatBubble,
    Check,
    MobileDevMode,
    Google,
    OpenNewWindow,
    WarningCircle,
} from "iconoir-react";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslations } from "@/lib/translations";

// TODO: Replace with your actual Google Form embed URL
const GOOGLE_FORM_EMBED_URL = "https://docs.google.com/forms/d/e/1FAIpQLSevJEsmkcX5ka0Fw1r_y2bOdM-pXlSFVGFopap6xY5ELy7rdQ/viewform?embedded=true";
const GOOGLE_FORM_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSevJEsmkcX5ka0Fw1r_y2bOdM-pXlSFVGFopap6xY5ELy7rdQ/viewform";

export default function BetaPage() {
    const { language } = useLanguage();
    const t = getTranslations(language);

    const benefits = [
        {
            icon: Gift,
            title: t.beta.benefit1Title,
            description: t.beta.benefit1Desc,
        },
        {
            icon: Trophy,
            title: t.beta.benefit2Title,
            description: t.beta.benefit2Desc,
        },
        {
            icon: ChatBubble,
            title: t.beta.benefit3Title,
            description: t.beta.benefit3Desc,
        },
    ];

    const requirements = [
        {
            icon: Google,
            text: t.beta.req1,
        },
        {
            icon: MobileDevMode,
            text: t.beta.req2,
        },
        {
            icon: ChatBubble,
            text: t.beta.req3,
        },
    ];

    return (
        <main className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <span className={styles.badge}>
                        <Rocket className={styles.badgeIcon} />
                        {t.beta.badge}
                    </span>
                    <h1 className={styles.title}>
                        {t.beta.title1} <span className={styles.gradient}>{t.beta.title2}</span>
                    </h1>
                    <p className={styles.subtitle}>
                        {t.beta.subtitle}
                    </p>

                    {/* Benefits as inline badges */}
                    <div className={styles.heroBenefits}>
                        {benefits.map((benefit, index) => (
                            <div key={index} className={styles.heroBenefitItem}>
                                <benefit.icon className={styles.heroBenefitIcon} />
                                <span>{benefit.title}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className={styles.heroCta}>
                        <a href="#register-form" className={styles.primaryButton}>
                            {t.beta.formTitle}
                        </a>
                    </div>
                </div>
            </section>


            {/* Important Notice */}
            <section className={styles.notice}>
                <div className={styles.container}>
                    <div className={styles.noticeCard}>
                        <WarningCircle className={styles.noticeIcon} />
                        <div className={styles.noticeContent}>
                            <h3 className={styles.noticeTitle}>{t.beta.noticeTitle}</h3>
                            <p className={styles.noticeText}>{t.beta.noticeText}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section id="register-form" className={styles.formSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>{t.beta.formTitle}</h2>
                    <p className={styles.formSubtitle}>{t.beta.formSubtitle}</p>

                    {/* Embedded Google Form */}
                    <div className={styles.formWrapper}>
                        <iframe
                            src={GOOGLE_FORM_EMBED_URL}
                            className={styles.googleForm}
                            frameBorder="0"
                            marginHeight={0}
                            marginWidth={0}
                            title="Beta Registration Form"
                        >
                            Loading…
                        </iframe>
                    </div>

                    {/* Alternative: Open in new tab */}
                    <div className={styles.formAlternative}>
                        <p>{t.beta.formAlt}</p>
                        <a
                            href={GOOGLE_FORM_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.formButton}
                        >
                            <OpenNewWindow />
                            {t.beta.openFormButton}
                        </a>
                    </div>
                </div>
            </section>

            {/* What Happens Next */}
            <section className={styles.nextSteps}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>{t.beta.nextStepsTitle}</h2>
                    <div className={styles.stepsList}>
                        <div className={styles.stepItem}>
                            <div className={styles.stepNumber}>1</div>
                            <div className={styles.stepContent}>
                                <h3>{t.beta.step1Title}</h3>
                                <p>{t.beta.step1Desc}</p>
                            </div>
                        </div>
                        <div className={styles.stepItem}>
                            <div className={styles.stepNumber}>2</div>
                            <div className={styles.stepContent}>
                                <h3>{t.beta.step2Title}</h3>
                                <p>{t.beta.step2Desc}</p>
                            </div>
                        </div>
                        <div className={styles.stepItem}>
                            <div className={styles.stepNumber}>3</div>
                            <div className={styles.stepContent}>
                                <h3>{t.beta.step3Title}</h3>
                                <p>{t.beta.step3Desc}</p>
                            </div>
                        </div>
                        <div className={styles.stepItem}>
                            <div className={styles.stepNumber}>4</div>
                            <div className={styles.stepContent}>
                                <h3>{t.beta.step4Title}</h3>
                                <p>{t.beta.step4Desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
