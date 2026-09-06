import type { MetadataRoute } from "next";
import { routes, site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: site.url, lastModified: now, priority: 1 },
    { url: `${site.url}${routes.workshop}`, lastModified: now, priority: 0.9 },
    { url: `${site.url}${routes.session}`, lastModified: now, priority: 0.8 },
    { url: `${site.url}${routes.contact}`, lastModified: now, priority: 0.7 },
    { url: `${site.url}${routes.terms}`, lastModified: now, priority: 0.2 },
    { url: `${site.url}${routes.privacy}`, lastModified: now, priority: 0.2 },
  ];
}
