"use client";

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type Locale = 'pt-BR' | 'en';

type LanguageContextValue = {
  language: Locale;
  setLanguage: (language: Locale) => void;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = 'portfolio-language';

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Locale>('pt-BR');

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'pt-BR' || stored === 'en') {
      setLanguage(stored);
      return;
    }
    const browserLanguage = window.navigator.language.toLowerCase();
    setLanguage(browserLanguage.startsWith('en') ? 'en' : 'pt-BR');
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => setLanguage((prev) => (prev === 'pt-BR' ? 'en' : 'pt-BR')),
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
