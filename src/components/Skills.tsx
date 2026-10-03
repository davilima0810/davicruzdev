import { portfolio } from "@/data/portfolio";
import type { Language, LocalizedString } from "@/types/portfolio";
import type { TranslationDictionary } from "@/types/translations";
import { SectionHeading } from "./SectionHeading";
import { TechPill } from "./TechPill";

type SkillsProps = {
  language: Language;
  t: TranslationDictionary;
};

function localize(value: string | LocalizedString, language: Language) {
  return typeof value === "string" ? value : value[language];
}

export function Skills({ language, t }: SkillsProps) {
  const featuredSkills = portfolio.skills.filter((category) => category.featured);

  return (
    <section className="px-4 py-16 md:px-10 lg:px-30 xl:px-60" id="skills">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow={t.skills.eyebrow} title={t.skills.title} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredSkills.map((category) => (
            <article className="rounded-lg border border-[var(--line)] bg-[var(--background)] p-5" key={category.name.en}>
              <h3 className="font-mono-custom text-sm font-bold uppercase tracking-[0.16em] text-[var(--truffle-trouble)] dark:text-[var(--burning-flame)]">
                {category.name[language]}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <TechPill key={localize(skill, language)}>{localize(skill, language)}</TechPill>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
