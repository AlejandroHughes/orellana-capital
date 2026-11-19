import type { Metadata } from 'next';
import type { Language } from '../i18n/translations';

export const SITE_URL = 'https://www.orellanacapitaladvisors.com';

// Path of the home page for each language. No trailing slash on /en.
export const HOME_PATH: Record<Language, string> = { es: '/', en: '/en' };

export const homeUrl = (lang: Language) => `${SITE_URL}${HOME_PATH[lang]}`;

// hreflang map shared by <head> and the sitemap. x-default points to Spanish.
export const languageAlternates = {
  es: homeUrl('es'),
  en: homeUrl('en'),
  'x-default': homeUrl('es'),
};

// Head copy from the Indigo SEO audit, action 1 (ES) and action 4 (EN).
export const HEAD: Record<Language, { title: string; description: string; ogLocale: string; ogImageAlt: string }> = {
  es: {
    title: 'Fusiones y adquisiciones (M&A) en Uruguay | Orellana Capital',
    description:
      'Asesoramos en fusiones y adquisiciones (M&A), finanzas corporativas y levantamiento de capital en Uruguay a fondos, search funds y empresas compradoras.',
    ogLocale: 'es_UY',
    ogImageAlt: 'Orellana Capital Advisors - Asesoramiento Financiero Estratégico',
  },
  en: {
    title: 'M&A Advisory in Uruguay | Orellana Capital Advisors',
    description:
      'M&A advisory, corporate finance and capital raising in Uruguay for private equity funds, search funds, high-net-worth investors and strategic buyers.',
    ogLocale: 'en_US',
    ogImageAlt: 'Orellana Capital Advisors - Strategic Financial Advisory',
  },
};

export const buildMetadata = (lang: Language, iconSrc: string): Metadata => {
  const head = HEAD[lang];
  return {
    metadataBase: new URL(SITE_URL),
    title: head.title,
    description: head.description,
    alternates: {
      canonical: HOME_PATH[lang],
      languages: languageAlternates,
    },
    openGraph: {
      title: head.title,
      description: head.description,
      url: homeUrl(lang),
      siteName: 'Orellana Capital Advisors',
      images: [
        {
          url: `${SITE_URL}/images/og-image.webp`,
          width: 1200,
          height: 630,
          alt: head.ogImageAlt,
        },
      ],
      locale: head.ogLocale,
      alternateLocale: lang === 'es' ? HEAD.en.ogLocale : HEAD.es.ogLocale,
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: iconSrc,
    },
  };
};
