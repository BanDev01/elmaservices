import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/ServiceCard";
import { CtaBanner } from "@/components/CtaBanner";
import { services } from "@/content/services";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services.hero" });
  return { title: t("title"), description: t("subtitle") };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("services");
  const tHome = await getTranslations("home.cta");

  return (
    <>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
      />

      <section className="section-y">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              image={service.image}
              icon={service.icon}
              title={t(`list.${service.id}.title`)}
              description={t(`list.${service.id}.long`)}
            />
          ))}
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
