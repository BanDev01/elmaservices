export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="border-b border-ink-900/10 bg-ink-950">
      <div className="container-page py-16 sm:py-20">
        <p className="text-sm font-bold uppercase tracking-widest text-accent-500">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold text-white sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg text-mist-100/80">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
