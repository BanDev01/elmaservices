import Image from "next/image";
import type { LucideIcon } from "lucide-react";

export function ServiceCard({
  image,
  icon: Icon,
  title,
  description,
}: {
  image: string;
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-ink-900/10 bg-paper transition-shadow hover:shadow-lg hover:shadow-ink-900/5">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500 text-white shadow-lg">
          <Icon className="h-5 w-5" aria-hidden />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-bold text-ink-950">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-700">
          {description}
        </p>
      </div>
    </div>
  );
}
