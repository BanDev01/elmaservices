import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { PageHero } from "@/components/PageHero";
import { sortedNews } from "@/content/news";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "news.hero" });
  return { title: t("title"), description: t("subtitle") };
}

export default async function NewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("news");
  const articles = sortedNews();

  const dateFormatter = new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
      />

      <section className="section-y">
        <div className="container-page grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/actualites/${article.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-ink-900/10 bg-paper transition-shadow hover:shadow-lg hover:shadow-ink-900/5"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={article.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-bold uppercase tracking-wide text-primary-600">
                  {dateFormatter.format(new Date(article.date))}
                </p>
                <h2 className="mt-2 flex items-start justify-between gap-3 font-display text-lg font-bold text-ink-950">
                  {t(`list.${article.id}.title`)}
                  <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-ink-300 transition-colors group-hover:text-accent-500" />
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-700">
                  {t(`list.${article.id}.excerpt`)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
