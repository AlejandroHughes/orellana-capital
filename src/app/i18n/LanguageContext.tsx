'use client'

import { createContext, ReactNode, useContext } from 'react';
import { Language, translations, Translations } from './translations';
import { HOME_PATH } from '../seo/site';

// The language comes from the route (/ = es, /en = en) so the server HTML
// is already in the right language for crawlers.
interface LanguageContextValue {
  language: Language;
  homePath: string;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export const LanguageProvider = ({ language, children }: { language: Language; children: ReactNode }) => (
  <LanguageContext.Provider value={{ language, homePath: HOME_PATH[language], t: translations[language] }}>
    {children}
  </LanguageContext.Provider>
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider');
  return context;
};
