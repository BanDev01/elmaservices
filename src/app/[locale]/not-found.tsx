import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function NotFound() {
  const t = await getTranslations("nav");

  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="font-display text-6xl font-extrabold text-primary-500">404</p>
      <h1 className="mt-4 font-display text-2xl font-bold text-ink-950">
        Page introuvable
      </h1>
      <Link
        href="/"
        className="mt-6 inline-flex items-center rounded-full bg-accent-500 px-6 py-3 text-sm font-bold text-white hover:bg-accent-600"
      >
        {t("home")}
      </Link>
    </div>
  );
}
