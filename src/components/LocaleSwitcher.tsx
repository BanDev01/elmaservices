"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { routing } from "@/i18n/routing";

export function LocaleSwitcher({ className = "" }: { className?: string }) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full border border-ink-900/10 p-0.5 text-xs font-semibold ${className}`}
    >
      {routing.locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => router.replace(pathname, { locale: loc })}
          aria-current={locale === loc}
          className={`rounded-full px-2.5 py-1 uppercase tracking-wide transition-colors ${
            locale === loc
              ? "bg-primary-500 text-white"
              : "text-ink-700 hover:text-primary-600"
          }`}
        >
          {loc}
        </button>
      ))}
    </div>
  );
}
