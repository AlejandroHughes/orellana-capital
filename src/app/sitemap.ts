import type { MetadataRoute } from "next";

export const runtime = "nodejs";
export const dynamic = "force-static";

// Generated at build time, so lastModified reflects the latest deploy.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.orellanacapitaladvisors.com/",
      lastModified: new Date(),
    },
  ];
}
