import { portfolio } from "@/data/portfolio";
import type { Language } from "@/types/portfolio";
import type { TranslationDictionary } from "@/types/translations";
import { SectionHeading } from "./SectionHeading";
import { TechPill } from "./TechPill";

type ProjectsProps = {
  language: Language;
  t: TranslationDictionary;
};

export function Projects({ language, t }: ProjectsProps) {
  return (
    <section className="px-4 py-16 md:px-10 lg:px-30 xl:px-60" id="projects">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow={t.projects.eyebrow}
          title={t.projects.title}
        />
        <div className="grid gap-4 md:grid-cols-2">
          {portfolio.projects.map((project) => (
            <article
              className="group rounded-lg border border-[var(--line)] bg-[var(--surface)] p-5 transition hover:-translate-y-0.5 hover:border-[var(--burning-flame)] hover:shadow-sm"
              key={project.name}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-mono-custom text-lg font-bold text-[var(--foreground)]">
                  {project.name}
                </h3>
                {project.status ? (
                  <span className="font-mono-custom rounded-full border border-[var(--line)] px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]">
                    {project.status[language]}
                  </span>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{project.description[language]}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <TechPill key={tech}>{tech}</TechPill>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
