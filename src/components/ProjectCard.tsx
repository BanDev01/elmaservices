import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

export function ProjectCard({
  href,
  image,
  title,
  period,
  client,
  summary,
}: {
  href: string;
  image: string;
  title: string;
  period: string;
  client: string;
  summary: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-2xl border border-ink-900/10 bg-paper transition-shadow hover:shadow-lg hover:shadow-ink-900/5"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={image}
          alt=""
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-ink-900">
          {period}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-bold uppercase tracking-wide text-primary-600">
          {client}
        </p>
        <h3 className="mt-2 flex items-start justify-between gap-3 font-display text-xl font-bold text-ink-950">
          {title}
          <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-ink-300 transition-colors group-hover:text-accent-500" />
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-700">
          {summary}
        </p>
      </div>
    </Link>
  );
}
