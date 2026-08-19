import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ProjectCard } from "@/components/ProjectCard";
import { ClientLogos } from "@/components/ClientLogos";
import { CtaBanner } from "@/components/CtaBanner";
import { projects } from "@/content/projects";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "projects.hero" });
  return { title: t("title"), description: t("subtitle") };
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("projects");
  const tHome = await getTranslations("home.cta");

  return (
    <>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
      />

      <section className="section-y">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              href={`/realisations/${project.slug}`}
              image={project.image}
              title={t(`list.${project.id}.title`)}
              period={t(`list.${project.id}.period`)}
              client={t(`list.${project.id}.client`)}
              summary={t(`list.${project.id}.summary`)}
            />
          ))}
        </div>
      </section>

      <section className="section-y bg-mist-50">
        <div className="container-page">
          <p className="text-center text-sm font-bold uppercase tracking-widest text-ink-500">
            {t("clientsTitle")}
          </p>
          <div className="mt-10">
            <ClientLogos />
          </div>
        </div>
      </section>

      <CtaBanner
        title={tHome("title")}
        body={tHome("body")}
        button={tHome("button")}
      />
    </>
  );
}
