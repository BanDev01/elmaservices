import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "quote.hero" });
  return { title: t("title"), description: t("subtitle") };
}

export default async function QuotePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("quote.hero");

  return (
    <>
      <PageHero
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />

      <section className="section-y">
        <div className="container-page max-w-2xl">
          <div className="rounded-2xl border border-ink-900/10 bg-paper p-6 sm:p-10">
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
