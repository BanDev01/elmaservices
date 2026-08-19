import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

export function NewsCard({
  href,
  image,
  date,
  title,
  excerpt,
}: {
  href: string;
  image: string;
  date: string;
  title: string;
  excerpt: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-2xl border border-ink-900/10 bg-paper transition-shadow hover:shadow-lg hover:shadow-ink-900/5"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-bold uppercase tracking-wide text-primary-600">
          {date}
        </p>
        <h3 className="mt-2 flex items-start justify-between gap-3 font-display text-lg font-bold text-ink-950">
          {title}
          <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-ink-300 transition-colors group-hover:text-accent-500" />
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-700">
          {excerpt}
        </p>
      </div>
    </Link>
  );
}
