type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-8">
      <p className="font-mono-custom mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--truffle-trouble)] dark:text-[var(--burning-flame)]">
        {eyebrow}
      </p>
      <h2 className="font-mono-custom text-2xl font-bold tracking-wide text-[var(--foreground)] sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
