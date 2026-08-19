import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { StatsBar } from "@/components/StatsBar";
import { ProjectCard } from "@/components/ProjectCard";
import { NewsCard } from "@/components/NewsCard";
import { ClientLogos } from "@/components/ClientLogos";
import { CtaBanner } from "@/components/CtaBanner";
import { HeroCarousel } from "@/components/HeroCarousel";
import { services } from "@/content/services";
import { projects } from "@/content/projects";
import { sortedNews } from "@/content/news";

const HERO_IMAGES = [
  "/images/hero-substation.jpg",
  "/images/service-postes-lignes.jpg",
  "/images/realisation-ligne-220kv.jpg",
  "/images/equipe-briefing.jpg",
];

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("home");
  const tServices = await getTranslations("services.list");
  const tProjects = await getTranslations("projects.list");
  const tNews = await getTranslations("news.list");
  const tCommon = await getTranslations("common");

  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
  const latestNews = sortedNews().slice(0, 3);
  const dateFormatter = new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink-950">
        <HeroCarousel images={HERO_IMAGES} />
        <div className="container-page relative py-28 sm:py-36 lg:py-44">
          <p className="text-sm font-bold uppercase tracking-widest text-accent-500">
            {t("hero.eyebrow")}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            {t("hero.title")}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-mist-100/85">
            {t("hero.subtitle")}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/devis"
              className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-7 py-4 text-base font-bold text-white shadow-lg shadow-accent-500/20 transition-colors hover:bg-accent-600"
            >
              {t("hero.ctaPrimary")}
              <ArrowRight className="h-5 w-5" aria-hidden />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 text-base font-bold text-white transition-colors hover:bg-white/10"
            >
              {t("hero.ctaSecondary")}
            </Link>
          </div>
        </div>
      </section>

      <StatsBar />

      {/* About */}
      <section className="section-y">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/equipe-briefing.jpg"
              alt=""
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow={t("about.eyebrow")}
              title={t("about.title")}
            />
            <p className="mt-5 text-base leading-relaxed text-ink-700">
              {t("about.body")}
            </p>
            <Link
              href="/historique"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary-600 hover:text-primary-700"
            >
              {t("about.cta")}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* Vision / Mission / Valeurs */}
      <section className="section-y bg-mist-50">
        <div className="container-page">
          <SectionHeading
            eyebrow={t("values.eyebrow")}
            title={t("values.title")}
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {(["vision", "mission", "values"] as const).map((key) => (
              <div
                key={key}
                className="rounded-2xl border border-ink-900/10 bg-paper p-8"
              >
                <h3 className="font-display text-xl font-bold text-ink-950">
                  {t(`values.${key}.title`)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-700">
                  {t(`values.${key}.body`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="section-y">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow={t("servicesPreview.eyebrow")}
              title={t("servicesPreview.title")}
            />
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary-600 hover:text-primary-700"
            >
              {tCommon("viewAllServices")}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <ServiceCard
                key={service.id}
                image={service.image}
                icon={service.icon}
                title={tServices(`${service.id}.title`)}
                description={tServices(`${service.id}.short`)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects preview */}
      <section className="section-y bg-mist-50">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow={t("projectsPreview.eyebrow")}
              title={t("projectsPreview.title")}
            />
            <Link
              href="/realisations"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary-600 hover:text-primary-700"
            >
              {tCommon("viewAllProjects")}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                href={`/realisations/${project.slug}`}
                image={project.image}
                title={tProjects(`${project.id}.title`)}
                period={tProjects(`${project.id}.period`)}
                client={tProjects(`${project.id}.client`)}
                summary={tProjects(`${project.id}.summary`)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* News preview */}
      <section className="section-y">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow={t("newsPreview.eyebrow")}
              title={t("newsPreview.title")}
            />
            <Link
              href="/actualites"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary-600 hover:text-primary-700"
            >
              {tCommon("viewAllNews")}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latestNews.map((article) => (
              <NewsCard
                key={article.id}
                href={`/actualites/${article.slug}`}
                image={article.image}
                date={dateFormatter.format(new Date(article.date))}
                title={tNews(`${article.id}.title`)}
                excerpt={tNews(`${article.id}.excerpt`)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="section-y bg-mist-50">
        <div className="container-page">
          <p className="text-center text-sm font-bold uppercase tracking-widest text-ink-500">
            {tCommon("ourClients")}
          </p>
          <div className="mt-10">
            <ClientLogos />
          </div>
        </div>
      </section>

      <CtaBanner
        title={t("cta.title")}
        body={t("cta.body")}
        button={t("cta.button")}
      />
    </>
  );
}
