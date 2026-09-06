import type { MetadataRoute } from "next";
import { routes, site } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      /* Checkout pages are reachable only from their offer, never from search. */
      disallow: [routes.payment, routes.sessionPayment],
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
