import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

export function CtaBanner({
  title,
  body,
  button,
}: {
  title: string;
  body: string;
  button: string;
}) {
  return (
    <section className="bg-ink-950">
      <div className="container-page flex flex-col items-start justify-between gap-6 py-16 sm:flex-row sm:items-center sm:py-20">
        <div>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 max-w-xl text-mist-100/80">{body}</p>
        </div>
        <Link
          href="/devis"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent-500 px-7 py-4 text-base font-bold text-white shadow-lg shadow-accent-500/20 transition-colors hover:bg-accent-600"
        >
          {button}
          <ArrowRight className="h-5 w-5" aria-hidden />
        </Link>
      </div>
    </section>
  );
}
