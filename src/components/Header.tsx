"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { LocaleSwitcher } from "./LocaleSwitcher";

const NAV_ITEMS = [
  { href: "/", key: "home" },
  { href: "/historique", key: "history" },
  { href: "/services", key: "services" },
  { href: "/realisations", key: "projects" },
  { href: "/actualites", key: "news" },
  { href: "/contact", key: "contact" },
] as const;

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-900/10 bg-paper/95 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="ELMA SERVICES"
            width={160}
            height={48}
            className="h-10 w-auto sm:h-11"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_ITEMS.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-semibold transition-colors ${
                  active
                    ? "text-primary-600"
                    : "text-ink-700 hover:text-primary-600"
                }`}
              >
                {t(item.key)}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:+243813216779"
            className="flex items-center gap-2 text-sm font-semibold text-ink-700 hover:text-primary-600"
          >
            <Phone className="h-4 w-4" aria-hidden />
            +243 813 216 779
          </a>
          <LocaleSwitcher />
          <Link
            href="/devis"
            className="rounded-full bg-accent-500 px-5 py-2.5 text-sm font-bold text-white shadow-sm shadow-accent-500/30 transition-colors hover:bg-accent-600"
          >
            {t("quote")}
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-ink-900 lg:hidden"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink-900/10 bg-paper lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {NAV_ITEMS.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-2.5 text-base font-semibold ${
                    active
                      ? "bg-primary-50 text-primary-600"
                      : "text-ink-700 hover:bg-mist-100"
                  }`}
                >
                  {t(item.key)}
                </Link>
              );
            })}
            <div className="mt-2 px-3">
              <LocaleSwitcher />
            </div>
            <Link
              href="/devis"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-accent-500 px-5 py-3 text-center text-sm font-bold text-white"
            >
              {t("quote")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
