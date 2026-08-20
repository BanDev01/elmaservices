import { stats } from "@/content/stats";
import { useTranslations } from "next-intl";
import { AnimatedCounter } from "./AnimatedCounter";

export function StatsBar() {
  const t = useTranslations("home.stats");

  return (
    <div className="relative z-10 -mt-14 sm:-mt-16">
      <div className="container-page">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-ink-900/10 shadow-xl shadow-ink-950/10 sm:grid-cols-4">
          {stats.map(({ key, value, icon: Icon }) => (
            <div
              key={key}
              className="flex flex-col items-center gap-3 bg-paper px-4 py-8 text-center sm:items-start sm:text-left"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <p className="font-display text-3xl font-extrabold text-ink-950 sm:text-4xl">
                <AnimatedCounter value={value} />
              </p>
              <div>
                <p className="text-sm font-bold text-ink-950">{t(`${key}.label`)}</p>
                <p className="mt-0.5 text-xs text-ink-500">
                  {t(`${key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
