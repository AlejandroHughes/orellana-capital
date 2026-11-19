'use client'

import { useId } from 'react';
import { useLanguage } from './LanguageContext';
import { Language } from './translations';
import { trackEvent } from '../Utility/AnalyticsHelpers';
import { HOME_PATH } from '../seo/site';

// Flags are inline SVG because emoji flags don't render on Windows
const SpainFlag = ({ clipId }: { clipId: string }) => (
  <svg viewBox="0 0 18 18" className="h-full w-full" aria-hidden="true">
    <clipPath id={clipId}><circle cx="9" cy="9" r="9" /></clipPath>
    <g clipPath={`url(#${clipId})`}>
      <rect width="18" height="18" fill="#AA151B" />
      <rect y="4.5" width="18" height="9" fill="#F1BF00" />
    </g>
  </svg>
);

const UKFlag = ({ clipId }: { clipId: string }) => (
  <svg viewBox="0 0 18 18" className="h-full w-full" aria-hidden="true">
    <clipPath id={clipId}><circle cx="9" cy="9" r="9" /></clipPath>
    <g clipPath={`url(#${clipId})`}>
      <rect width="18" height="18" fill="#012169" />
      <path d="M0 0L18 18M18 0L0 18" stroke="#fff" strokeWidth="3.6" />
      <path d="M0 0L18 18M18 0L0 18" stroke="#C8102E" strokeWidth="1.2" />
      <path d="M9 0V18M0 9H18" stroke="#fff" strokeWidth="5" />
      <path d="M9 0V18M0 9H18" stroke="#C8102E" strokeWidth="3" />
    </g>
  </svg>
);

const options: { code: Language; label: string; Flag: typeof UKFlag }[] = [
  { code: 'es', label: 'Español', Flag: SpainFlag },
  { code: 'en', label: 'English', Flag: UKFlag },
];

// Real links (not buttons) so crawlers discover both language URLs.
const LanguageSwitcher = ({ className = '' }: { className?: string }) => {
  const { language, t } = useLanguage();
  const id = useId().replace(/:/g, '');

  return (
    <nav aria-label={t.nav.language} className={`flex items-center gap-1.5 ${className}`}>
      {options.map(({ code, label, Flag }) => {
        const isActive = language === code;
        return (
          <a
            key={code}
            href={HOME_PATH[code]}
            hrefLang={code}
            lang={code}
            onClick={() => {
              if (!isActive) trackEvent('language_change', { language: code });
            }}
            aria-current={isActive ? 'page' : undefined}
            aria-label={label}
            title={label}
            className={`block h-5 w-5 rounded-full overflow-hidden ring-1 duration-300 ${
              isActive
                ? 'ring-white/80 opacity-100'
                : 'ring-white/20 opacity-40 grayscale hover:opacity-80 hover:grayscale-0'
            }`}
          >
            <Flag clipId={`${id}-${code}`} />
          </a>
        );
      })}
    </nav>
  );
};

export default LanguageSwitcher;
