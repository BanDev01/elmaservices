import { stats } from "@/content/stats";
import { useTranslations } from "next-intl";

export function StatsBar() {
  const t = useTranslations("home.stats");

  return (
    <section className="bg-primary-500">
      <div className="container-page grid grid-cols-2 gap-8 py-14 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.key} className="text-center sm:text-left">
            <p className="font-display text-4xl font-extrabold text-white sm:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm font-semibold text-primary-50">
              {t(stat.key)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
