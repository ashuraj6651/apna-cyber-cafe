'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { translations, type Lang, type Translations } from '@/lib/i18n';

interface LangContextType {
  lang: Lang;
  t: Translations;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
}

const LangContext = createContext<LangContextType | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('hi');

  const toggleLang = useCallback(() => {
    setLang(prev => prev === 'hi' ? 'en' : 'hi');
  }, []);

  const t = translations[lang];

  return (
    <LangContext.Provider value={{ lang, t, setLang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LangProvider');
  return ctx;
}