import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { CtaBanner } from "@/components/CtaBanner";
import { getProjectBySlug, projects } from "@/content/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const t = await getTranslations({ locale, namespace: "projects.list" });
  return {
    title: t(`${project.id}.title`),
    description: t(`${project.id}.summary`),
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const t = await getTranslations("projects");
  const tHome = await getTranslations("home.cta");

  return (
    <>
      <section className="relative overflow-hidden bg-ink-950">
        <div className="absolute inset-0">
          <Image
            src={project.image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/70 to-ink-950/40" />
        </div>
        <div className="container-page relative py-20 sm:py-28">
          <Link
            href="/realisations"
            className="inline-flex items-center gap-2 text-sm font-semibold text-mist-100/80 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            {t("hero.title")}
          </Link>
          <p className="mt-6 text-sm font-bold uppercase tracking-widest text-accent-500">
            {t(`list.${project.id}.client`)} · {t(`list.${project.id}.period`)}
          </p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-bold text-white sm:text-5xl">
            {t(`list.${project.id}.title`)}
          </h1>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page max-w-3xl">
          <p className="text-lg leading-relaxed text-ink-700">
            {t(`list.${project.id}.body`)}
          </p>
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
