import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

// lucide-react no longer ships brand icons, so these are minimal inline glyphs.
function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.87.24-1.46 1.5-1.46H16.6V4.36C16.3 4.32 15.3 4.24 14.14 4.24c-2.4 0-4.04 1.47-4.04 4.16V10.5H7.6v3h2.5V21h3.4z" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.94 8.5H4V20h2.94V8.5zM5.47 4a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4zM20 13.24c0-3.1-1.66-4.54-3.87-4.54-1.78 0-2.58 1-3.02 1.68V8.5H10.1c.04.87 0 8.24 0 8.24h2.94v-4.6c0-.25.02-.5.1-.68.2-.5.66-1.03 1.44-1.03 1.02 0 1.43.78 1.43 1.92V20H19v-6.76z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="3.3" />
      <circle cx="16.6" cy="7.4" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  );
}

const NAV_ITEMS = [
  { href: "/", key: "home" },
  { href: "/historique", key: "history" },
  { href: "/services", key: "services" },
  { href: "/realisations", key: "projects" },
  { href: "/actualites", key: "news" },
  { href: "/devis", key: "quote" },
  { href: "/contact", key: "contact" },
] as const;

// TODO: replace "#" with the real ELMA SERVICES LinkedIn/Instagram URLs.
const SOCIAL_LINKS = [
  {
    icon: FacebookIcon,
    href: "https://web.facebook.com/profile.php?id=61571883957262",
    label: "Facebook",
  },
  { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
];

export function Footer() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-950 text-mist-100">
      <div className="container-page grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Image
            src="/logo-dark.png"
            alt="ELMA SERVICES"
            width={160}
            height={48}
            className="h-10 w-auto"
          />
          <p className="mt-4 max-w-xs text-sm text-ink-300">
            {t("footer.tagline")}
          </p>
          <div className="mt-6 flex items-center gap-3">
            {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href === "#" ? undefined : "_blank"}
                rel={href === "#" ? undefined : "noopener noreferrer"}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-mist-100 transition-colors hover:border-primary-400 hover:text-primary-400"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-white">
            {t("footer.quickLinks")}
          </h3>
          <ul className="mt-4 space-y-2.5">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-ink-300 transition-colors hover:text-primary-400"
                >
                  {t(`nav.${item.key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-white">
            {t("footer.contactTitle")}
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-ink-300">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" />
              <span>{t("contact.info.address")}</span>
            </li>
            <li className="flex gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" />
              <a href="tel:+243813216779" className="hover:text-primary-400">
                +243 813 216 779
              </a>
            </li>
            <li className="flex gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" />
              <a
                href="mailto:info@elmaservices.com"
                className="hover:text-primary-400"
              >
                info@elmaservices.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-white">
            {t("footer.hoursTitle")}
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-ink-300">
            <li>{t("footer.hoursWeek")}</li>
            <li>{t("footer.hoursSat")}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © Copyright {year} - ELMA SERVICES - {t("footer.rights")}
          </p>
          <p>
            {t("footer.designedBy")}{" "}
            <a
              href="https://bandev01.github.io/portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-ink-300 hover:text-primary-400"
            >
              BERTIN NGONGO
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
