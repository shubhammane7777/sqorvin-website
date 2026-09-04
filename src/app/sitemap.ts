import type { MetadataRoute } from "next";
import { SITE } from "@/config/site";

/**
 * Static sitemap for the export build. Next pre-renders this to a plain
 * sitemap.xml at build time (compatible with `output: 'export'`), so it
 * needs no server. Add a new entry here whenever a new route is added
 * under src/app.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE.url}/privacy-policy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
