import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { NewsCard } from "@/components/NewsCard";
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
            <NewsCard
              key={article.id}
              href={`/actualites/${article.slug}`}
              image={article.image}
              date={dateFormatter.format(new Date(article.date))}
              title={t(`list.${article.id}.title`)}
              excerpt={t(`list.${article.id}.excerpt`)}
            />
          ))}
        </div>
      </section>
    </>
  );
}
