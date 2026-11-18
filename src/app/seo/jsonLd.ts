// Structured data (schema.org JSON-LD) for the home page, Spanish version.
// Source: Indigo SEO audit, Nov 2026, action 2 (reference block, ES).
// Placeholders resolved: email = visible contact email; telephone, postal code
// and Universidad de Montevideo faculty URL omitted (not published on the site).
// Every value declared here must also be visible on the page.

const SITE_URL = 'https://www.orellanacapitaladvisors.com';
const HOME_URL = `${SITE_URL}/`;

const ID = {
  website: `${SITE_URL}/#website`,
  webpage: `${SITE_URL}/#webpage`,
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
      inLanguage: 'es',
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
      description:
        'Firma especializada en asesoramiento financiero estratégico: M&A, finanzas corporativas, levantamiento de capital y venture capital.',
      email: 'alejandro@orellanacapitaladvisors.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Dr. Alejandro Schroeder 6558, oficina 10 (Schroeder Haus)',
        addressLocality: 'Montevideo',
        addressCountry: 'UY',
      },
      areaServed: { '@type': 'Country', name: 'Uruguay' },
      knowsAbout: [
        'Fusiones y adquisiciones (M&A)',
        'Finanzas corporativas',
        'Levantamiento de capital',
        'Venture capital',
      ],
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
      knowsAbout: ['Fusiones y adquisiciones (M&A)', 'Finanzas corporativas', 'Banca de inversión'],
      image: `${SITE_URL}/images/alejandro-hughes-stefani.jpg`,
      sameAs: ['https://www.linkedin.com/in/alejandro-hughes-9b501a48/'],
    },
  ],
};

// Escape "<" so the payload can't close the <script> tag early.
export const jsonLdHtml = JSON.stringify(jsonLd).replace(/</g, '\\u003c');
