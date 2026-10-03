import type { TranslationDictionary } from "@/types/translations";
import { SectionHeading } from "./SectionHeading";

type AboutProps = {
  t: TranslationDictionary;
};

export function About({ t }: AboutProps) {
  return (
    <section className="px-4 py-16 md:px-10 lg:px-30 xl:px-60" id="about">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />
        <div className="grid gap-8 md:grid-cols-[1fr_220px] md:items-start">
          <div className="space-y-5 text-sm leading-7 text-[var(--muted)] sm:text-base">
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="rounded-lg border border-[var(--line)] bg-[var(--surface)] p-5">
            <p className="font-mono-custom text-xs uppercase tracking-[0.18em] text-[var(--truffle-trouble)] dark:text-[var(--burning-flame)]">
              {t.about.focusTitle}
            </p>
            <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
              {t.about.focusItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
