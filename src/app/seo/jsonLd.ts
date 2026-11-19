// Structured data (schema.org JSON-LD) for the home page, ES and EN.
// Source: Indigo SEO audit, Nov 2026, action 2 (reference block, ES) and
// action 4 (same block on /en: own WebPage, inLanguage "en", EN description).
// Placeholders resolved: email = visible contact email; postal code = 11500
// (Carrasco); telephone and Universidad de Montevideo faculty URL omitted (not published on the site).
// Every value declared here must also be visible on the page.

import type { Language } from '../i18n/translations';
import { HEAD, SITE_URL, homeUrl } from './site';

const HOME_URL = homeUrl('es');

const ID = {
  website: `${SITE_URL}/#website`,
  webpage: (lang: Language) => `${homeUrl(lang)}#webpage`,
  firm: `${SITE_URL}/#organization`,
  director: `${SITE_URL}/#alejandro-hughes-stefani`,
};

const COPY = {
  es: {
    firmDescription:
      'Firma especializada en asesoramiento financiero estratégico: M&A, finanzas corporativas, levantamiento de capital y venture capital.',
    firmKnowsAbout: [
      'Fusiones y adquisiciones (M&A)',
      'Finanzas corporativas',
      'Levantamiento de capital',
      'Venture capital',
    ],
    directorKnowsAbout: ['Fusiones y adquisiciones (M&A)', 'Finanzas corporativas', 'Banca de inversión'],
  },
  en: {
    firmDescription:
      'Firm specialized in strategic financial advisory: M&A, corporate finance, capital raising and venture capital.',
    firmKnowsAbout: ['Mergers and acquisitions (M&A)', 'Corporate finance', 'Capital raising', 'Venture capital'],
    directorKnowsAbout: ['Mergers and acquisitions (M&A)', 'Corporate finance', 'Investment banking'],
  },
};

export const buildJsonLd = (lang: Language) => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': ID.website,
      url: HOME_URL,
      name: 'Orellana Capital Advisors',
      inLanguage: ['es', 'en'],
      publisher: { '@id': ID.firm },
    },
    {
      '@type': 'WebPage',
      '@id': ID.webpage(lang),
      url: homeUrl(lang),
      name: HEAD[lang].title,
      inLanguage: lang,
      isPartOf: { '@id': ID.website },
      about: { '@id': ID.firm },
    },
    {
      '@type': 'FinancialService',
      '@id': ID.firm,
      name: 'Orellana Capital Advisors',
      alternateName: 'Orellana Capital',
      legalName: 'Orellana Capital SAS',
      url: HOME_URL,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/logo.png` },
      image: `${SITE_URL}/images/logo.png`,
      description: COPY[lang].firmDescription,
      email: 'alejandro@orellanacapitaladvisors.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Dr. Alejandro Schroeder 6558, oficina 10 (Schroeder Haus)',
        addressLocality: 'Montevideo',
        postalCode: '11500',
        addressCountry: 'UY',
      },
      areaServed: { '@type': 'Country', name: 'Uruguay' },
      knowsAbout: COPY[lang].firmKnowsAbout,
      founder: { '@id': ID.director },
      sameAs: [
        'https://www.linkedin.com/company/orellana-capital-advisors/',
        'https://www.crunchbase.com/organization/orellana-capital-advisors',
      ],
    },
    {
      '@type': 'Person',
      '@id': ID.director,
      name: 'Alejandro Hughes Stefani',
      alternateName: 'Alejandro Hughes',
      jobTitle: 'Director',
      worksFor: { '@id': ID.firm },
      affiliation: { '@type': 'CollegeOrUniversity', name: 'Universidad de Montevideo' },
      knowsAbout: COPY[lang].directorKnowsAbout,
      image: `${SITE_URL}/images/alejandro-hughes-stefani.jpg`,
      sameAs: ['https://www.linkedin.com/in/alejandro-hughes-9b501a48/'],
    },
  ],
});

// Escape "<" so the payload can't close the <script> tag early.
export const buildJsonLdHtml = (lang: Language) =>
  JSON.stringify(buildJsonLd(lang)).replace(/</g, '\\u003c');
