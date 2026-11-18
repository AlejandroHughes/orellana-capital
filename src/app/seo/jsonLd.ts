// Structured data (schema.org JSON-LD) for the home page, Spanish version.
// Source: Indigo SEO audit, Nov 2026, action 2. Every value declared here must
// also be visible on the page (About us, Contact, Footer).

const SITE_URL = 'https://www.orellanacapitaladvisors.com';
const HOME_URL = `${SITE_URL}/`;

const ID = {
  website: `${SITE_URL}/#website`,
  webpage: `${HOME_URL}#webpage`,
  firm: `${SITE_URL}/#organization`,
  director: `${SITE_URL}/#alejandro-hughes-stefani`,
};

export const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': ID.website,
      url: HOME_URL,
      name: 'Orellana Capital Advisors',
      inLanguage: 'es',
      publisher: { '@id': ID.firm },
    },
    {
      '@type': 'WebPage',
      '@id': ID.webpage,
      url: HOME_URL,
      name: 'Fusiones y adquisiciones (M&A) en Uruguay | Orellana Capital',
      description:
        'Asesoramos en fusiones y adquisiciones (M&A), finanzas corporativas y levantamiento de capital en Uruguay a fondos, search funds y empresas compradoras.',
      inLanguage: 'es',
      isPartOf: { '@id': ID.website },
      about: { '@id': ID.firm },
      publisher: { '@id': ID.firm },
    },
    {
      '@type': 'FinancialService',
      '@id': ID.firm,
      name: 'Orellana Capital Advisors',
      legalName: 'Orellana Capital SAS',
      url: HOME_URL,
      logo: `${SITE_URL}/images/logo.png`,
      image: `${SITE_URL}/images/logo.png`,
      description:
        'Firma de asesoramiento en fusiones y adquisiciones (M&A), finanzas corporativas, levantamiento de capital y venture capital en Uruguay, dirigida por Alejandro Hughes Stefani.',
      email: 'alejandro@orellanacapitaladvisors.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Dr. Alejandro Schroeder 6558, oficina 10 (Schroeder Haus)',
        addressLocality: 'Montevideo',
        addressRegion: 'Montevideo',
        addressCountry: 'UY',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: 'alejandro@orellanacapitaladvisors.com',
        availableLanguage: ['es', 'en'],
      },
      areaServed: { '@type': 'Country', name: 'Uruguay' },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicios de M&A y finanzas corporativas',
        itemListElement: [
          'Fusiones y adquisiciones (M&A)',
          'Finanzas corporativas y estrategia',
          'Levantamiento de capital',
          'Venture capital',
        ].map((name) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name },
        })),
      },
      founder: { '@id': ID.director },
      employee: { '@id': ID.director },
      sameAs: ['https://www.linkedin.com/company/orellana-capital-advisors/'],
    },
    {
      '@type': 'Person',
      '@id': ID.director,
      name: 'Alejandro Hughes Stefani',
      alternateName: 'Alejandro Hughes',
      givenName: 'Alejandro',
      familyName: 'Hughes Stefani',
      jobTitle: 'Director',
      worksFor: { '@id': ID.firm },
      affiliation: {
        '@type': 'CollegeOrUniversity',
        name: 'Universidad de Montevideo',
        url: 'https://um.edu.uy/',
      },
      knowsAbout: [
        'Fusiones y adquisiciones (M&A)',
        'Finanzas corporativas',
        'Banca de inversión',
        'Levantamiento de capital',
        'Venture capital',
        'Private equity',
      ],
      image: `${SITE_URL}/images/alejandro-hughes-stefani.jpg`,
      url: `${HOME_URL}#about-us`,
      sameAs: ['https://www.linkedin.com/in/alejandro-hughes-9b501a48/'],
    },
  ],
};

// Escape "<" so the payload can't close the <script> tag early.
export const jsonLdHtml = JSON.stringify(jsonLd).replace(/</g, '\\u003c');
