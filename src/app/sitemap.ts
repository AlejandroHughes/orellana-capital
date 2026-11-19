import type { MetadataRoute } from "next";
import { homeUrl, languageAlternates } from "./seo/site";

export const runtime = "nodejs";
export const dynamic = "force-static";

// Generated at build time, so lastModified reflects the latest deploy.
// Each language URL lists all alternates (hreflang), including itself.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return (["es", "en"] as const).map((lang) => ({
    url: homeUrl(lang),
    lastModified,
    alternates: { languages: languageAlternates },
  }));
}
