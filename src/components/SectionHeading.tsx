export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="text-sm font-bold uppercase tracking-widest text-primary-600">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl font-bold text-ink-950 sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-lg text-ink-700">{subtitle}</p>}
    </div>
  );
}
