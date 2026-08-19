import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact.hero" });
  return { title: t("title"), description: t("subtitle") };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("contact");
  const tFooter = await getTranslations("footer");
  const address = t("info.address");

  return (
    <>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
      />

      <section className="section-y">
        <div className="container-page grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div className="rounded-2xl border border-ink-900/10 bg-paper p-6 sm:p-10">
            <ContactForm />
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-ink-900/10 bg-mist-50 p-8">
              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
                <div>
                  <p className="text-sm font-bold text-ink-950">
                    {t("info.addressTitle")}
                  </p>
                  <p className="mt-1 text-sm text-ink-700">{address}</p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:text-primary-700"
                  >
                    Google Maps
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                  </a>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
                <div>
                  <p className="text-sm font-bold text-ink-950">
                    {t("info.phoneTitle")}
                  </p>
                  <a
                    href="tel:+243813216779"
                    className="mt-1 block text-sm text-ink-700 hover:text-primary-600"
                  >
                    +243 813 216 779
                  </a>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
                <div>
                  <p className="text-sm font-bold text-ink-950">
                    {t("info.emailTitle")}
                  </p>
                  <a
                    href="mailto:info@elmaservices.com"
                    className="mt-1 block text-sm text-ink-700 hover:text-primary-600"
                  >
                    info@elmaservices.com
                  </a>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
                <div>
                  <p className="text-sm font-bold text-ink-950">
                    {t("info.hoursTitle")}
                  </p>
                  <p className="mt-1 text-sm text-ink-700">
                    {tFooter("hoursWeek")}
                    <br />
                    {tFooter("hoursSat")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
