import type { MetadataRoute } from "next";
import { SITE } from "@/config/site";

/**
 * Static robots.txt for the export build — pre-rendered at build time,
 * same as sitemap.ts. Allows everything; points crawlers at the sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
