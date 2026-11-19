import "./globals.css";
import 'animate.css';
import type { ReactNode } from "react";
import { buildJsonLdHtml } from "./seo/jsonLd";
import GoogleAnalytics from "./Utility/GoogleAnalytics";
import { Analytics } from "@vercel/analytics/next";
import type { Language } from "./i18n/translations";

// Shared <html> shell for the per-language root layouts in (es) and (en).
export default function RootDocument({ lang, children }: { lang: Language; children: ReactNode }) {
  return (
    <html lang={lang}>
      <GoogleAnalytics />
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: buildJsonLdHtml(lang) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
