/**
 * Actualités shown on the site. Local fixture layer today, same rationale
 * as src/content/projects.ts — swappable for Sanity later.
 */
export type NewsId = "maintenance-preventive" | "mise-a-la-terre" | "devis-electrique";

export type NewsArticle = {
  id: NewsId;
  slug: string;
  image: string;
  date: string; // ISO date, used for display + sorting
};

export const news: NewsArticle[] = [
  {
    id: "devis-electrique",
    slug: "devis-electrique",
    image: "/images/equipe-briefing.jpg",
    date: "2026-08-01",
  },
  {
    id: "maintenance-preventive",
    slug: "maintenance-preventive",
    image: "/images/service-maintenance-ht.jpg",
    date: "2026-07-15",
  },
  {
    id: "mise-a-la-terre",
    slug: "mise-a-la-terre",
    image: "/images/service-reseaux-terre.jpg",
    date: "2026-07-01",
  },
];

export function getNewsBySlug(slug: string) {
  return news.find((article) => article.slug === slug);
}

export function sortedNews() {
  return [...news].sort((a, b) => (a.date < b.date ? 1 : -1));
}
