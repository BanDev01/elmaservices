import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { getNewsBySlug, news } from "@/content/news";

export function generateStaticParams() {
  return news.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getNewsBySlug(slug);
  if (!article) return {};

  const t = await getTranslations({ locale, namespace: "news.list" });
  return {
    title: t(`${article.id}.title`),
    description: t(`${article.id}.excerpt`),
  };
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const article = getNewsBySlug(slug);
  if (!article) notFound();

  const t = await getTranslations("news");
  const dateFormatter = new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const paragraphs = t(`list.${article.id}.body`).split("\n\n");

  return (
    <article>
      <section className="relative overflow-hidden bg-ink-950">
        <div className="absolute inset-0">
          <Image
            src={article.image}
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
            href="/actualites"
            className="inline-flex items-center gap-2 text-sm font-semibold text-mist-100/80 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            {t("backToList")}
          </Link>
          <p className="mt-6 text-sm font-bold uppercase tracking-widest text-accent-500">
            {dateFormatter.format(new Date(article.date))}
          </p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-bold text-white sm:text-5xl">
            {t(`list.${article.id}.title`)}
          </h1>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page max-w-3xl space-y-5">
          {paragraphs.map((paragraph, i) => (
            <p key={i} className="text-lg leading-relaxed text-ink-700">
              {paragraph}
            </p>
          ))}
        </div>
      </section>
    </article>
  );
}
