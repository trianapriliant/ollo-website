"use client";

import styles from "./page.module.css";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslations } from "@/lib/translations";

export default function PrivacyPage() {
    const { language } = useLanguage();
    const t = getTranslations(language);

    return (
        <main className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1 className={styles.title}>{t.privacy.title}</h1>
                    <p className={styles.subtitle}>
                        {t.privacy.lastUpdated}
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.document}>
                        <section className={styles.section}>
                            <h2>{t.privacy.introduction}</h2>
                            <p>
                                Ollo (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
                                This Privacy Policy explains how we collect, use, and safeguard your information
                                when you use our mobile application.
                            </p>
                            <p>
                                By using Ollo, you agree to the collection and use of information in accordance
                                with this policy.
                            </p>
                        </section>

                        <section className={styles.section}>
                            <h2>{t.privacy.dataStorage}</h2>
                            <p>
                                <strong>Your data stays on your device.</strong> Ollo stores all your financial
                                data locally on your device using the Isar database. We do not upload, transmit,
                                or store your personal financial information on any external servers.
                            </p>
                            <p>
                                This means:
                            </p>
                            <ul>
                                <li>Your transaction history remains on your device</li>
                                <li>Your wallet balances are stored locally</li>
                                <li>Your budgets, goals, and other financial data never leave your phone</li>
                                <li>We cannot access your financial information</li>
                            </ul>
                        </section>

                        <section className={styles.section}>
                            <h2>{t.privacy.notCollect}</h2>
                            <p>
                                We want to be clear about what we do NOT collect:
                            </p>
                            <ul>
                                <li>We do not collect your financial transactions</li>
                                <li>We do not collect your bank account information</li>
                                <li>We do not collect your wallet balances</li>
                                <li>We do not sell any user data to third parties</li>
                                <li>We do not share your information with advertisers</li>
                            </ul>
                        </section>

                        <section className={styles.section}>
                            <h2>{t.privacy.analytics}</h2>
                            <p>
                                We may collect anonymous, non-personal analytics data to improve the app experience.
                                This may include:
                            </p>
                            <ul>
                                <li>App crashes and error reports</li>
                                <li>General usage patterns (which features are used)</li>
                                <li>Device type and operating system version</li>
                            </ul>
                            <p>
                                This data is completely anonymized and cannot be used to identify you or your
                                financial information.
                            </p>
                        </section>

                        <section className={styles.section}>
                            <h2>{t.privacy.camera}</h2>
                            <p>
                                Ollo may request camera access for the <strong>Receipt Scanner</strong> feature.
                                This permission is used solely to:
                            </p>
                            <ul>
                                <li>Capture images of receipts for OCR (Optical Character Recognition)</li>
                                <li>Extract transaction amounts and merchant information</li>
                            </ul>
                            <p>
                                Receipt images are processed locally on your device and are not uploaded to any
                                external servers. You can deny this permission and still use all other features.
                            </p>
                        </section>

                        <section className={styles.section}>
                            <h2>{t.privacy.microphone}</h2>
                            <p>
                                Ollo may request microphone access for the <strong>Voice Quick Record</strong> feature.
                                This permission is used solely to:
                            </p>
                            <ul>
                                <li>Capture voice input for adding transactions</li>
                                <li>Convert speech to text using Google&apos;s speech recognition service</li>
                            </ul>
                            <p>
                                Voice recordings are processed for speech-to-text conversion and are not stored
                                permanently. You can deny this permission and still use manual entry.
                            </p>
                        </section>

                        <section className={styles.section}>
                            <h2>{t.privacy.inAppPurchases}</h2>
                            <p>
                                Premium subscriptions are processed through the Google Play Store. We do not
                                have access to your payment information. All billing is handled by Google
                                according to their privacy policy.
                            </p>
                        </section>

                        <section className={styles.section}>
                            <h2>{t.privacy.dataBackup}</h2>
                            <p>
                                Ollo provides a backup feature that exports your data as a JSON file. This
                                file is saved to a location of your choice (local storage, cloud drive, etc.).
                                We do not have access to these backup files.
                            </p>
                        </section>

                        <section className={styles.section}>
                            <h2>{t.privacy.thirdParty}</h2>
                            <p>
                                Ollo may use the following third-party services:
                            </p>
                            <ul>
                                <li><strong>Google Play Services:</strong> For in-app purchases and app distribution</li>
                                <li><strong>Google Speech Recognition:</strong> For voice-to-text conversion</li>
                                <li><strong>RevenueCat:</strong> For subscription management</li>
                            </ul>
                            <p>
                                These services have their own privacy policies that govern their data practices.
                            </p>
                        </section>

                        <section className={styles.section}>
                            <h2>{t.privacy.children}</h2>
                            <p>
                                Ollo is not intended for use by children under the age of 13. We do not knowingly
                                collect personal information from children under 13.
                            </p>
                        </section>

                        <section className={styles.section}>
                            <h2>{t.privacy.changes}</h2>
                            <p>
                                We may update our Privacy Policy from time to time. We will notify you of any
                                changes by posting the new Privacy Policy on this page and updating the
                                &quot;Last updated&quot; date.
                            </p>
                        </section>

                        <section className={styles.section}>
                            <h2>{t.privacy.contactUs}</h2>
                            <p>
                                If you have any questions about this Privacy Policy, please contact us at:
                            </p>
                            <p>
                                <strong>Email:</strong>{" "}
                                <a href="mailto:ollowithyou@gmail.com">ollowithyou@gmail.com</a>
                            </p>
                        </section>
                    </div>
                </div>
            </section>
        </main>
    );
}
