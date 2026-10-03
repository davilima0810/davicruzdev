import { portfolio } from "@/data/portfolio";
import type { Language } from "@/types/portfolio";
import type { TranslationDictionary } from "@/types/translations";
import { SectionHeading } from "./SectionHeading";

type EducationProps = {
  language: Language;
  t: TranslationDictionary;
};

export function Education({ language, t }: EducationProps) {
  return (
    <section className="px-4 pb-0 pt-16 md:px-10 lg:px-30 xl:px-60" id="education">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow={t.education.eyebrow} title={t.education.title} />
        <div className="divide-y divide-[var(--line)] rounded-lg border border-[var(--line)] bg-[var(--surface)]">
          {portfolio.education.map((item) => (
            <article className="grid gap-2 p-5 md:grid-cols-[1fr_160px] md:items-center" key={item.title.en}>
              <div>
                <h3 className="font-mono-custom text-base font-bold text-[var(--foreground)]">
                  {item.title[language]}
                </h3>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  {item.status ? item.status[language] : item.institution}
                </p>
              </div>
              <p className="font-mono-custom text-xs uppercase tracking-[0.16em] text-[var(--muted)] md:text-right">
                {item.period[language]}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
