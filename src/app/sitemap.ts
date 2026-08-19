import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { getPathname } from "@/i18n/navigation";
import { projects } from "@/content/projects";
import { news } from "@/content/news";

const BASE_URL = "https://www.elmaservices.com";

const staticPaths = [
  "/",
  "/services",
  "/historique",
  "/realisations",
  "/actualites",
  "/devis",
  "/contact",
] as const;

const dynamicPaths = [
  ...projects.map((p) => `/realisations/${p.slug}`),
  ...news.map((n) => `/actualites/${n.slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [...staticPaths, ...dynamicPaths].map((href) => ({
    url: `${BASE_URL}${getPathname({ locale: routing.defaultLocale, href })}`,
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((locale) => [
          locale,
          `${BASE_URL}${getPathname({ locale, href })}`,
        ])
      ),
    },
  }));
}
