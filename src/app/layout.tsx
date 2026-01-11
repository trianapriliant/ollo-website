import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ollo - Track Smart, Spend Wise, Live Better",
  description: "Ollo helps you track expenses, manage budgets, set savings goals, and build better financial habits — faster and smarter.",
  keywords: ["expense tracker", "money manager", "personal finance", "budget tracker", "voice expense tracker", "receipt scanner"],
  authors: [{ name: "Trian Aprilianto" }],
  openGraph: {
    title: "Ollo - Track Smart, Spend Wise, Live Better",
    description: "The modern personal finance app for smart money management.",
    url: "https://ollowithyou.com",
    siteName: "Ollo",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ollo - Track Smart, Spend Wise, Live Better",
    description: "The modern personal finance app for smart money management.",
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <LanguageProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
