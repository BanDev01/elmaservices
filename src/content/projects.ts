/**
 * Réalisations shown on the site. This is a local fixture layer today; the
 * shape mirrors the future Sanity schema so the data source can be swapped
 * for live CMS queries later without touching the pages that consume it.
 */
export type ProjectId =
  | "reseaux-terre-2021"
  | "inspection-sous-stations-2023"
  | "ligne-220kv-2023"
  | "maintenance-periodique";

export type Project = {
  id: ProjectId;
  slug: string;
  image: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "inspection-sous-stations-2023",
    slug: "inspection-sous-stations-2023",
    image: "/images/hero-substation.jpg",
    featured: true,
  },
  {
    id: "ligne-220kv-2023",
    slug: "ligne-220kv-2023",
    image: "/images/realisation-ligne-220kv.jpg",
    featured: true,
  },
  {
    id: "reseaux-terre-2021",
    slug: "reseaux-terre-2021",
    image: "/images/service-reseaux-terre.jpg",
    featured: true,
  },
  {
    id: "maintenance-periodique",
    slug: "maintenance-periodique",
    image: "/images/service-maintenance-ht.jpg",
    featured: false,
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
