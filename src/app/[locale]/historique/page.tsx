import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/CtaBanner";

const MILESTONES = ["founding", "turning-point", "growth"] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "history.hero" });
  return { title: t("title"), description: t("subtitle") };
}

export default async function HistoryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("history");
  const tHome = await getTranslations("home.cta");

  return (
    <>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
      />

      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="/images/equipe-portrait.jpg"
              alt=""
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-lg leading-relaxed text-ink-700">{t("intro")}</p>

            <ol className="mt-10 space-y-10 border-l-2 border-primary-100 pl-8">
              {MILESTONES.map((key) => (
                <li key={key} className="relative">
                  <span className="absolute -left-[2.35rem] top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary-500 ring-4 ring-primary-50" />
                  <p className="text-sm font-bold uppercase tracking-wide text-accent-600">
                    {t(`milestones.${key}.year`)}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-bold text-ink-950">
                    {t(`milestones.${key}.title`)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-700">
                    {t(`milestones.${key}.body`)}
                  </p>
                </li>
              ))}
            </ol>
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
