"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Supported languages - easily extensible for future languages
export type Language = "en" | "id";

export interface LanguageOption {
    code: Language;
    label: string;
    shortLabel: string;
    flag: string;
}

// Language options configuration - add new languages here
export const LANGUAGES: LanguageOption[] = [
    { code: "en", label: "English", shortLabel: "ENG", flag: "🇺🇸" },
    { code: "id", label: "Bahasa Indonesia", shortLabel: "ID", flag: "🇮🇩" },
    // Future languages can be added here:
    // { code: "ja", label: "日本語", shortLabel: "JP", flag: "🇯🇵" },
    // { code: "es", label: "Español", shortLabel: "ES", flag: "🇪🇸" },
];

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    toggleLanguage: () => void;
    currentLanguageOption: LanguageOption;
    languages: LanguageOption[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "ollo-language";

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>("en");
    const [isHydrated, setIsHydrated] = useState(false);

    // Load language from localStorage on mount
    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
        if (stored && LANGUAGES.some(l => l.code === stored)) {
            setLanguageState(stored);
        }
        setIsHydrated(true);
    }, []);

    // Save language to localStorage when it changes
    useEffect(() => {
        if (isHydrated) {
            localStorage.setItem(STORAGE_KEY, language);
        }
    }, [language, isHydrated]);

    const setLanguage = (lang: Language) => {
        if (LANGUAGES.some(l => l.code === lang)) {
            setLanguageState(lang);
        }
    };

    const toggleLanguage = () => {
        const currentIndex = LANGUAGES.findIndex(l => l.code === language);
        const nextIndex = (currentIndex + 1) % LANGUAGES.length;
        setLanguageState(LANGUAGES[nextIndex].code);
    };

    const currentLanguageOption = LANGUAGES.find(l => l.code === language) || LANGUAGES[0];

    return (
        <LanguageContext.Provider
            value={{
                language,
                setLanguage,
                toggleLanguage,
                currentLanguageOption,
                languages: LANGUAGES,
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
