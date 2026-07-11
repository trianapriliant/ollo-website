"use client";

import styles from "./page.module.css";
import { useLanguage } from "@/context/LanguageContext";

type Section = { title: string; paragraphs?: string[]; items?: string[] };

const content: Record<"en" | "id", { title: string; updated: string; sections: Section[] }> = {
    en: {
        title: "Account & Data Deletion",
        updated: "Last updated: July 11, 2026",
        sections: [
            {
                title: "1. What this page covers",
                paragraphs: [
                    "This page explains how to permanently delete your Ollo cloud account and the data associated with it. Ollo is developed by Low Orbit Labs. Account deletion applies to accounts created by signing in with Google or Apple inside the Ollo app.",
                    "Ollo is offline-first: if you never signed in, your financial data exists only on your device and is removed by uninstalling the app or clearing its data.",
                ],
            },
            {
                title: "2. How to delete your account in the app",
                items: [
                    "Open Ollo and go to Profile → Account → Account Management.",
                    "Sign in to the account you want to delete, if you are not already signed in.",
                    "Choose Delete Account and follow the confirmation steps (typed confirmation plus a fresh Google/Apple sign-in to verify it is really you).",
                    "Your account enters a 30-day grace period. You can cancel the deletion at any time during those 30 days by signing in again.",
                    "After the grace period ends, your cloud account and cloud data are permanently and irreversibly deleted.",
                ],
            },
            {
                title: "3. What is deleted",
                items: [
                    "Your Ollo account (Google/Apple sign-in identity linked to Ollo).",
                    "All Cloud Sync data stored on Ollo servers: wallets, transactions, categories, budgets, bills, goals, debts, notes, and related records.",
                    "Active sessions and refresh tokens for all of your devices.",
                    "AI usage records and any AI feedback linked to your account.",
                ],
            },
            {
                title: "4. What is not deleted automatically",
                items: [
                    "Local data on your device. It stays on the device and can be removed separately by deleting it in the app or uninstalling the app.",
                    "Backup files you exported yourself (for example to Google Drive or local storage). Delete those from your own storage if you no longer want them.",
                    "App Store or Play Store subscriptions. Deleting your account does not cancel a store subscription — manage or cancel it in your Google Play or Apple subscription settings.",
                    "Minimal non-identifying audit records (random identifiers and aggregate counts only) kept to prove the deletion was performed.",
                ],
            },
            {
                title: "5. If you cannot access the app",
                paragraphs: [
                    "If you can no longer open the app or sign in, you can request deletion by email from the address linked to your account. Write to ollowithyou@gmail.com with the subject \"Account deletion request\". We will verify ownership of the account before processing and reply once the deletion is scheduled.",
                ],
            },
            {
                title: "6. Questions",
                paragraphs: [
                    "For anything else about your data, see the Privacy Policy on this site or contact ollowithyou@gmail.com.",
                ],
            },
        ],
    },
    id: {
        title: "Penghapusan Akun & Data",
        updated: "Terakhir diperbarui: 11 Juli 2026",
        sections: [
            {
                title: "1. Cakupan halaman ini",
                paragraphs: [
                    "Halaman ini menjelaskan cara menghapus akun cloud Ollo beserta data yang terkait secara permanen. Ollo dikembangkan oleh Low Orbit Labs. Penghapusan akun berlaku untuk akun yang dibuat dengan masuk memakai Google atau Apple di dalam aplikasi Ollo.",
                    "Ollo bersifat offline-first: jika kamu tidak pernah masuk akun, data finansialmu hanya ada di perangkat dan terhapus dengan meng-uninstall aplikasi atau menghapus datanya.",
                ],
            },
            {
                title: "2. Cara menghapus akun dari aplikasi",
                items: [
                    "Buka Ollo lalu masuk ke Profil → Akun → Manajemen Akun.",
                    "Masuk ke akun yang ingin dihapus bila belum masuk.",
                    "Pilih Hapus Akun dan ikuti langkah konfirmasi (ketik konfirmasi lalu masuk ulang Google/Apple untuk memastikan benar-benar kamu).",
                    "Akun memasuki masa tenggang 30 hari. Kamu dapat membatalkan penghapusan kapan pun selama 30 hari itu dengan masuk kembali.",
                    "Setelah masa tenggang berakhir, akun cloud dan data cloud-mu dihapus permanen dan tidak dapat dikembalikan.",
                ],
            },
            {
                title: "3. Apa yang dihapus",
                items: [
                    "Akun Ollo kamu (identitas masuk Google/Apple yang tertaut ke Ollo).",
                    "Seluruh data Cloud Sync di server Ollo: dompet, transaksi, kategori, anggaran, tagihan, target, utang, catatan, dan record terkait.",
                    "Sesi aktif dan token masuk di semua perangkatmu.",
                    "Catatan pemakaian AI dan feedback AI yang tertaut ke akunmu.",
                ],
            },
            {
                title: "4. Apa yang tidak terhapus otomatis",
                items: [
                    "Data lokal di perangkatmu. Data itu tetap ada dan dapat dihapus terpisah dari dalam aplikasi atau dengan uninstall.",
                    "File backup yang kamu ekspor sendiri (misalnya ke Google Drive atau penyimpanan lokal). Hapus dari penyimpananmu sendiri bila tidak lagi diinginkan.",
                    "Langganan App Store atau Play Store. Menghapus akun tidak membatalkan langganan store — kelola atau batalkan lewat pengaturan langganan Google Play atau Apple.",
                    "Catatan audit minimal non-identitas (hanya ID acak dan jumlah agregat) untuk membuktikan penghapusan telah dilakukan.",
                ],
            },
            {
                title: "5. Jika tidak bisa mengakses aplikasi",
                paragraphs: [
                    "Jika kamu tidak bisa lagi membuka aplikasi atau masuk akun, kirim permintaan penghapusan lewat email dari alamat yang tertaut ke akunmu ke ollowithyou@gmail.com dengan subjek \"Permintaan penghapusan akun\". Kami memverifikasi kepemilikan akun sebelum memproses dan membalas setelah penghapusan dijadwalkan.",
                ],
            },
            {
                title: "6. Pertanyaan",
                paragraphs: [
                    "Untuk hal lain tentang datamu, lihat Kebijakan Privasi di situs ini atau hubungi ollowithyou@gmail.com.",
                ],
            },
        ],
    },
};

export default function AccountDeletionPage() {
    const { language } = useLanguage();
    const c = content[language === "id" ? "id" : "en"];

    return (
        <main className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1 className={styles.title}>{c.title}</h1>
                    <p className={styles.subtitle}>{c.updated}</p>
                </div>
            </section>

            <section className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.document}>
                        {c.sections.map((s) => (
                            <section key={s.title} className={styles.section}>
                                <h2>{s.title}</h2>
                                {s.paragraphs?.map((p) => (
                                    <p key={p}>{p}</p>
                                ))}
                                {s.items && (
                                    <ul>
                                        {s.items.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
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
