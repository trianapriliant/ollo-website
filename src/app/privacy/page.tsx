"use client";

import styles from "./page.module.css";
import { useLanguage } from "@/context/LanguageContext";

type Section = { title: string; paragraphs?: string[]; items?: string[] };

const content: Record<"en" | "id", { title: string; updated: string; sections: Section[] }> = {
    en: {
        title: "Privacy Policy",
        updated: "Last updated: July 11, 2026",
        sections: [
            {
                title: "1. Overview",
                paragraphs: [
                    "Ollo is an offline-first personal finance application. Core financial data is stored locally on your device using Drift (SQLite). Online features such as an Ollo account, Cloud Sync, AI Scan, and Ollo Assistant are optional and require data to be processed by Ollo's servers and, for AI features, the providers described below.",
                    "This policy explains what data is processed, why it is processed, and the choices available to you. Ollo does not sell personal data or share it with advertisers.",
                ],
            },
            {
                title: "2. Data stored on your device",
                items: [
                    "Financial records such as wallets, transactions, categories, budgets, bills, goals, debts, notes, and related settings.",
                    "AI Assistant chat history and AI preferences, unless you explicitly submit selected feedback.",
                    "Authentication tokens and app preferences needed to keep you signed in and operate the app.",
                    "Photos or attachments you choose to retain with a transaction.",
                ],
                paragraphs: [
                    "You can use Ollo's core manual finance features without creating an Ollo account. Device backups or export files may be copied to a location or cloud-storage provider you choose; Ollo does not control that destination.",
                ],
            },
            {
                title: "3. Ollo account and Cloud Sync",
                paragraphs: [
                    "If you sign in, Ollo processes account identifiers and profile information supplied by Google or Apple, such as your account ID, email address, and display name where available. Passwords for Google or Apple are never provided to Ollo.",
                    "If you enable Cloud Sync, selected financial data is stored on Ollo's servers so it can be synchronized between your devices. This includes wallets, transactions, categories, budgets, recurring transactions, savings, bills, wishlists, debts, cards, notes, and assets. Cloud Sync is optional and signing in does not automatically enable it.",
                    "Ollo also processes synchronization metadata such as record identifiers, timestamps, versions, deletion markers, device identifiers, and aggregate pending-operation counts to prevent duplicates, resolve conflicts, and diagnose sync problems.",
                ],
            },
            {
                title: "4. AI Scan",
                paragraphs: [
                    "When you choose AI Scan, the image you select or capture is sent over HTTPS to Ollo's server and then to OpenRouter, which routes it to a Google Gemini model for extraction. Category names and identifiers may be included so the model can suggest a category. An account-owner name is included only when you configure one for transfer detection.",
                    "Ollo does not intentionally store the submitted receipt image on its server after processing. The extracted result is shown for your review and can be edited before it is saved. AI Scan does not send your complete transaction history or wallet balances with the image.",
                    "Per-account usage counts are stored to enforce trial or subscription quotas and prevent abuse. AI Scan is optional; manual entry remains available.",
                ],
            },
            {
                title: "5. Ollo Assistant",
                paragraphs: [
                    "When you use Ollo Assistant, messages you type, recent turns needed for context, optional tone preferences, and financial summaries prepared on your device are sent through Ollo's server to DeepSeek. Summaries may include totals, trends, budgets, wallet balances, savings, bills, or debt.",
                    "Ollo does not send raw individual transaction titles, notes, merchants, or attachments as Assistant context. Assistant chat history is stored locally on your device. If you explicitly submit feedback, the selected conversation, rating, issue tags, optional note, app version, platform, and language are stored on Ollo's server for product improvement.",
                    "Assistant output is informational and is not professional financial, investment, tax, legal, or medical advice. Usage counts are stored to enforce quotas and prevent abuse.",
                ],
            },
            {
                title: "6. Voice, camera, and files",
                paragraphs: [
                    "Camera or photo-library access is used only when you choose to capture or select an image. Microphone access is used for voice entry; speech may be processed by the speech-recognition service provided by your device platform. You may deny these permissions and continue using manual entry.",
                    "Uploads are subject to file type and size validation. Do not upload content you are not authorized to process or content containing unnecessary sensitive information.",
                ],
            },
            {
                title: "7. Subscriptions and purchases",
                paragraphs: [
                    "Purchases are processed by Google Play or Apple's App Store. RevenueCat helps Ollo verify subscription entitlements. Ollo does not receive your full payment-card details. Subscription status, product identifiers, purchase metadata, and an app-specific user identifier may be processed to unlock premium features and prevent fraud.",
                ],
            },
            {
                title: "8. Service, security, and diagnostics data",
                paragraphs: [
                    "Ollo's servers may process IP address, request time, device/app version, endpoint, response status, security events, and limited diagnostic information to operate the service, enforce rate limits, investigate abuse, and fix errors. Logs are designed not to contain passwords, authentication tokens, receipt contents, or full financial payloads.",
                    "Data is encrypted in transit using HTTPS. No system can guarantee absolute security, but Ollo applies access controls, limited database privileges, monitoring, backups, and staged security testing.",
                ],
            },
            {
                title: "9. Retention and deletion",
                paragraphs: [
                    "Local data remains on your device until you delete it, clear app data, uninstall the app, or restore/replace it. Cloud data is retained while your account and Cloud Sync data are active, or as needed for security, backup recovery, legal obligations, and resolving sync deletions.",
                    "You may request deletion of your Ollo account and associated cloud data by contacting ollowithyou@gmail.com from the email linked to your account. When in-app account deletion is available, it may include a cancellation period before permanent deletion. Deleting an Ollo account does not cancel a Google Play or App Store subscription; subscriptions must be managed in the relevant store.",
                    "Some minimal non-content security or deletion audit records may be retained where necessary to demonstrate completion, prevent abuse, or comply with law. Backups expire according to operational retention schedules.",
                ],
            },
            {
                title: "10. Third-party services",
                items: [
                    "Google and Apple: sign-in, app distribution, purchases, device services, and speech recognition where applicable.",
                    "RevenueCat: subscription entitlement management.",
                    "OpenRouter and Google Gemini: AI Scan processing.",
                    "DeepSeek: Ollo Assistant processing.",
                    "A storage or sharing provider you choose for exported backup files.",
                ],
                paragraphs: [
                    "These providers process data under their own terms and privacy policies. Provider availability, subprocessors, and retention practices may change. Ollo limits submitted data to what is needed for the selected feature.",
                ],
            },
            {
                title: "11. Children, changes, and contact",
                paragraphs: [
                    "Ollo is not directed to children under 13, and we do not knowingly collect their personal data. We may update this policy as features or legal requirements change and will update the date on this page.",
                    "For privacy questions, access requests, or account/data deletion requests, contact ollowithyou@gmail.com.",
                ],
            },
        ],
    },
    id: {
        title: "Kebijakan Privasi",
        updated: "Terakhir diperbarui: 11 Juli 2026",
        sections: [
            {
                title: "1. Gambaran umum",
                paragraphs: [
                    "Ollo adalah aplikasi pengelolaan keuangan pribadi yang mengutamakan penggunaan offline. Data keuangan inti disimpan secara lokal di perangkatmu menggunakan Drift (SQLite). Fitur online seperti akun Ollo, Cloud Sync, AI Scan, dan Ollo Assistant bersifat opsional dan memerlukan pemrosesan data oleh server Ollo serta, untuk fitur AI, penyedia yang dijelaskan di bawah.",
                    "Kebijakan ini menjelaskan data yang diproses, tujuannya, dan pilihan yang tersedia untukmu. Ollo tidak menjual data pribadi atau membagikannya kepada pengiklan.",
                ],
            },
            {
                title: "2. Data yang disimpan di perangkat",
                items: [
                    "Catatan keuangan seperti dompet, transaksi, kategori, budget, tagihan, target, utang, catatan, dan pengaturan terkait.",
                    "Riwayat chat dan preferensi AI Assistant, kecuali kamu secara eksplisit mengirim feedback tertentu.",
                    "Token autentikasi dan preferensi aplikasi yang diperlukan agar kamu tetap login dan aplikasi dapat berfungsi.",
                    "Foto atau lampiran yang kamu pilih untuk disimpan bersama transaksi.",
                ],
                paragraphs: [
                    "Kamu dapat memakai fitur keuangan manual inti tanpa membuat akun Ollo. Backup perangkat atau file ekspor dapat disalin ke lokasi atau penyedia cloud yang kamu pilih; Ollo tidak mengendalikan tujuan tersebut.",
                ],
            },
            {
                title: "3. Akun Ollo dan Cloud Sync",
                paragraphs: [
                    "Jika kamu login, Ollo memproses pengenal akun dan informasi profil yang diberikan Google atau Apple, seperti ID akun, alamat email, dan nama tampilan jika tersedia. Password Google atau Apple tidak pernah diberikan kepada Ollo.",
                    "Jika kamu mengaktifkan Cloud Sync, data keuangan tertentu disimpan di server Ollo agar dapat disinkronkan antarperangkat. Data ini mencakup dompet, transaksi, kategori, budget, transaksi berulang, tabungan, tagihan, wishlist, utang, kartu, catatan, dan aset. Cloud Sync bersifat opsional dan login tidak otomatis mengaktifkannya.",
                    "Ollo juga memproses metadata sinkronisasi seperti pengenal record, timestamp, versi, penanda penghapusan, pengenal perangkat, dan jumlah agregat operasi tertunda untuk mencegah duplikasi, menyelesaikan konflik, dan mendiagnosis masalah sync.",
                ],
            },
            {
                title: "4. AI Scan",
                paragraphs: [
                    "Saat kamu memilih AI Scan, gambar yang kamu pilih atau ambil dikirim melalui HTTPS ke server Ollo lalu ke OpenRouter, yang meneruskannya ke model Google Gemini untuk ekstraksi. Nama dan pengenal kategori dapat disertakan agar model dapat menyarankan kategori. Nama pemilik rekening hanya disertakan jika kamu mengaturnya untuk mendeteksi transfer.",
                    "Ollo tidak sengaja menyimpan gambar struk yang dikirim di server setelah pemrosesan. Hasil ekstraksi ditampilkan untuk kamu periksa dan dapat diedit sebelum disimpan. AI Scan tidak mengirim seluruh riwayat transaksi atau saldo dompet bersama gambar.",
                    "Jumlah penggunaan per akun disimpan untuk menerapkan kuota trial atau langganan dan mencegah penyalahgunaan. AI Scan bersifat opsional; pencatatan manual tetap tersedia.",
                ],
            },
            {
                title: "5. Ollo Assistant",
                paragraphs: [
                    "Saat kamu menggunakan Ollo Assistant, pesan yang kamu ketik, percakapan terbaru yang diperlukan sebagai konteks, preferensi gaya opsional, dan ringkasan keuangan yang disiapkan di perangkat dikirim melalui server Ollo ke DeepSeek. Ringkasan dapat mencakup total, tren, budget, saldo dompet, tabungan, tagihan, atau utang.",
                    "Ollo tidak mengirim judul, catatan, merchant, atau lampiran transaksi mentah satu per satu sebagai konteks Assistant. Riwayat chat disimpan lokal di perangkat. Jika kamu secara eksplisit mengirim feedback, percakapan yang dipilih, rating, tag masalah, catatan opsional, versi aplikasi, platform, dan bahasa disimpan di server Ollo untuk perbaikan produk.",
                    "Keluaran Assistant hanya bersifat informasional dan bukan nasihat profesional keuangan, investasi, pajak, hukum, atau medis. Jumlah penggunaan disimpan untuk menerapkan kuota dan mencegah penyalahgunaan.",
                ],
            },
            {
                title: "6. Suara, kamera, dan file",
                paragraphs: [
                    "Akses kamera atau galeri hanya digunakan saat kamu memilih mengambil atau memilih gambar. Akses mikrofon digunakan untuk input suara; ucapan dapat diproses oleh layanan pengenalan suara dari platform perangkatmu. Kamu dapat menolak izin ini dan tetap memakai pencatatan manual.",
                    "Upload dibatasi melalui validasi tipe dan ukuran file. Jangan mengunggah konten yang tidak berhak kamu proses atau konten dengan informasi sensitif yang tidak diperlukan.",
                ],
            },
            {
                title: "7. Langganan dan pembelian",
                paragraphs: [
                    "Pembelian diproses oleh Google Play atau App Store Apple. RevenueCat membantu Ollo memverifikasi hak langganan. Ollo tidak menerima detail lengkap kartu pembayaranmu. Status langganan, pengenal produk, metadata pembelian, dan pengenal user khusus aplikasi dapat diproses untuk membuka fitur premium dan mencegah penipuan.",
                ],
            },
            {
                title: "8. Data layanan, keamanan, dan diagnostik",
                paragraphs: [
                    "Server Ollo dapat memproses alamat IP, waktu request, versi perangkat/aplikasi, endpoint, status respons, peristiwa keamanan, dan informasi diagnostik terbatas untuk menjalankan layanan, menerapkan rate limit, menyelidiki penyalahgunaan, dan memperbaiki error. Log dirancang agar tidak memuat password, token autentikasi, isi struk, atau payload finansial lengkap.",
                    "Data dienkripsi saat dikirim menggunakan HTTPS. Tidak ada sistem yang dapat menjamin keamanan mutlak, tetapi Ollo menerapkan kontrol akses, privilege database terbatas, monitoring, backup, dan pengujian keamanan bertahap.",
                ],
            },
            {
                title: "9. Retensi dan penghapusan",
                paragraphs: [
                    "Data lokal tetap berada di perangkat hingga kamu menghapusnya, membersihkan data aplikasi, menghapus aplikasi, atau mengganti/memulihkannya. Data cloud disimpan selama akun dan data Cloud Sync aktif, atau selama diperlukan untuk keamanan, pemulihan backup, kewajiban hukum, dan penyelesaian penghapusan sync.",
                    "Kamu dapat meminta penghapusan akun Ollo dan data cloud terkait dengan menghubungi ollowithyou@gmail.com dari email yang terhubung ke akunmu. Saat penghapusan akun di dalam aplikasi tersedia, proses dapat memiliki masa pembatalan sebelum penghapusan permanen. Menghapus akun Ollo tidak membatalkan langganan Google Play atau App Store; langganan harus dikelola di store terkait.",
                    "Catatan audit keamanan atau penghapusan minimal yang tidak berisi konten dapat disimpan bila diperlukan untuk membuktikan penyelesaian, mencegah penyalahgunaan, atau memenuhi hukum. Backup kedaluwarsa sesuai jadwal retensi operasional.",
                ],
            },
            {
                title: "10. Layanan pihak ketiga",
                items: [
                    "Google dan Apple: login, distribusi aplikasi, pembelian, layanan perangkat, dan pengenalan suara jika relevan.",
                    "RevenueCat: pengelolaan hak langganan.",
                    "OpenRouter dan Google Gemini: pemrosesan AI Scan.",
                    "DeepSeek: pemrosesan Ollo Assistant.",
                    "Penyedia penyimpanan atau berbagi yang kamu pilih untuk file backup ekspor.",
                ],
                paragraphs: [
                    "Penyedia tersebut memproses data berdasarkan ketentuan dan kebijakan privasi masing-masing. Ketersediaan provider, subprosesor, dan praktik retensi dapat berubah. Ollo membatasi data yang dikirim hanya pada yang diperlukan untuk fitur pilihanmu.",
                ],
            },
            {
                title: "11. Anak-anak, perubahan, dan kontak",
                paragraphs: [
                    "Ollo tidak ditujukan untuk anak di bawah 13 tahun dan kami tidak sengaja mengumpulkan data pribadi mereka. Kami dapat memperbarui kebijakan ini saat fitur atau ketentuan hukum berubah dan akan memperbarui tanggal pada halaman ini.",
                    "Untuk pertanyaan privasi, permintaan akses, atau permintaan penghapusan akun/data, hubungi ollowithyou@gmail.com.",
                ],
            },
        ],
    },
};

export default function PrivacyPage() {
    const { language } = useLanguage();
    const policy = content[language];

    return (
        <main className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1 className={styles.title}>{policy.title}</h1>
                    <p className={styles.subtitle}>{policy.updated}</p>
                </div>
            </section>

            <section className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.document}>
                        {policy.sections.map((section) => (
                            <section className={styles.section} key={section.title}>
                                <h2>{section.title}</h2>
                                {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                                {section.items && (
                                    <ul>
                                        {section.items.map((item) => <li key={item}>{item}</li>)}
                                    </ul>
                                )}
                            </section>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
