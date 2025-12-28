import styles from "./page.module.css";

export default function TermsPage() {
    return (
        <main className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Terms of Service</h1>
                    <p className={styles.subtitle}>
                        Last updated: December 28, 2025
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.document}>
                        <section className={styles.section}>
                            <h2>1. Acceptance of Terms</h2>
                            <p>
                                By downloading, installing, or using Ollo (&quot;the App&quot;), you agree to be bound
                                by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms,
                                do not use the App.
                            </p>
                        </section>

                        <section className={styles.section}>
                            <h2>2. Description of Service</h2>
                            <p>
                                Ollo is a personal finance management application that helps users track expenses,
                                manage budgets, set savings goals, and analyze spending patterns. The App is
                                provided as-is for personal, non-commercial use.
                            </p>
                        </section>

                        <section className={styles.section}>
                            <h2>3. User Responsibilities</h2>
                            <p>
                                As a user of Ollo, you are responsible for:
                            </p>
                            <ul>
                                <li>The accuracy of the information you enter into the App</li>
                                <li>Maintaining the security of your device</li>
                                <li>Creating backups of your data</li>
                                <li>Using the App in compliance with applicable laws</li>
                            </ul>
                        </section>

                        <section className={styles.section}>
                            <h2>4. Premium Subscription</h2>
                            <p>
                                Ollo offers premium features through subscription plans. By subscribing to Premium:
                            </p>
                            <ul>
                                <li>You authorize recurring charges to your Google Play account</li>
                                <li>Subscriptions auto-renew unless cancelled before the renewal date</li>
                                <li>You can cancel at any time through Google Play Store</li>
                                <li>No refunds are provided for partial subscription periods</li>
                                <li>Prices are in Indonesian Rupiah (IDR) and may vary by region</li>
                            </ul>
                            <p>
                                The Lifetime plan is a one-time purchase that provides permanent access to
                                Premium features.
                            </p>
                        </section>

                        <section className={styles.section}>
                            <h2>5. Free Trial</h2>
                            <p>
                                The monthly subscription may include a 7-day free trial. At the end of the
                                trial period, your subscription will automatically convert to a paid subscription
                                unless cancelled before the trial ends.
                            </p>
                        </section>

                        <section className={styles.section}>
                            <h2>6. Refund Policy</h2>
                            <p>
                                All purchases are processed through Google Play Store and are subject to
                                Google&apos;s refund policies. We do not have direct control over refunds.
                                For refund requests, please contact Google Play Support or submit a refund
                                request through the Google Play Store.
                            </p>
                        </section>

                        <section className={styles.section}>
                            <h2>7. Data and Privacy</h2>
                            <p>
                                Your use of the App is also governed by our Privacy Policy. By using Ollo,
                                you acknowledge that:
                            </p>
                            <ul>
                                <li>Your data is stored locally on your device</li>
                                <li>We do not have access to your financial information</li>
                                <li>You are responsible for backing up your data</li>
                                <li>Data loss due to device issues is not our responsibility</li>
                            </ul>
                        </section>

                        <section className={styles.section}>
                            <h2>8. Intellectual Property</h2>
                            <p>
                                The App, including its code, design, graphics, and content, is the intellectual
                                property of Trian Aprilianto. You may not:
                            </p>
                            <ul>
                                <li>Copy, modify, or distribute the App</li>
                                <li>Reverse engineer or decompile the App</li>
                                <li>Use the App for commercial purposes without permission</li>
                                <li>Remove or alter any proprietary notices</li>
                            </ul>
                        </section>

                        <section className={styles.section}>
                            <h2>9. Disclaimer of Warranties</h2>
                            <p>
                                The App is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any
                                kind, either express or implied. We do not warrant that:
                            </p>
                            <ul>
                                <li>The App will be error-free or uninterrupted</li>
                                <li>The App will meet your specific requirements</li>
                                <li>The results obtained from using the App will be accurate</li>
                                <li>Any errors in the App will be corrected</li>
                            </ul>
                        </section>

                        <section className={styles.section}>
                            <h2>10. Limitation of Liability</h2>
                            <p>
                                To the maximum extent permitted by law, we shall not be liable for any
                                indirect, incidental, special, consequential, or punitive damages, including
                                but not limited to:
                            </p>
                            <ul>
                                <li>Loss of data</li>
                                <li>Loss of profits</li>
                                <li>Financial losses from reliance on the App</li>
                                <li>Damages from unauthorized access to your device</li>
                            </ul>
                            <p>
                                Ollo is a tracking tool and should not be used as the sole basis for
                                financial decisions.
                            </p>
                        </section>

                        <section className={styles.section}>
                            <h2>11. Changes to Terms</h2>
                            <p>
                                We reserve the right to modify these Terms at any time. Changes will be
                                effective when posted. Continued use of the App after changes constitutes
                                acceptance of the new Terms.
                            </p>
                        </section>

                        <section className={styles.section}>
                            <h2>12. Termination</h2>
                            <p>
                                We may terminate or suspend your access to the App at any time, without
                                prior notice, for conduct that we believe violates these Terms or is
                                harmful to other users or the App.
                            </p>
                        </section>

                        <section className={styles.section}>
                            <h2>13. Governing Law</h2>
                            <p>
                                These Terms shall be governed by and construed in accordance with the
                                laws of Indonesia, without regard to its conflict of law provisions.
                            </p>
                        </section>

                        <section className={styles.section}>
                            <h2>14. Contact Information</h2>
                            <p>
                                For any questions about these Terms, please contact us at:
                            </p>
                            <p>
                                <strong>Email:</strong>{" "}
                                <a href="mailto:contact@ollowithyou.com">contact@ollowithyou.com</a>
                            </p>
                        </section>
                    </div>
                </div>
            </section>
        </main>
    );
}
