"use client";

import { useState } from "react";
import { portfolio } from "@/data/portfolio";
import type { Language } from "@/types/portfolio";
import type { TranslationDictionary } from "@/types/translations";
import { SectionHeading } from "./SectionHeading";
import { TechPill } from "./TechPill";

type ExperienceProps = {
  language: Language;
  t: TranslationDictionary;
};

export function Experience({ language, t }: ExperienceProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = portfolio.experience[activeIndex];

  return (
    <section className="px-4 py-16 md:px-10 lg:px-30 xl:px-60" id="experience">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow={t.experience.eyebrow}
          title={t.experience.title}
        />
        <div className="flex flex-col gap-6 sm:flex-row">
          <div className="flex gap-2 overflow-x-auto pb-2 sm:w-64 sm:flex-col sm:overflow-visible sm:pb-0">
            {portfolio.experience.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  className={`font-mono-custom shrink-0 border-l-2 px-4 py-3 text-left text-sm transition-colors ${
                    isActive
                      ? "border-[var(--burning-flame)] bg-[var(--surface)] text-[var(--truffle-trouble)] dark:text-[var(--burning-flame)]"
                      : "border-transparent text-[var(--muted)] hover:bg-[var(--surface)] hover:text-[var(--foreground)]"
                  }`}
                  key={item.company}
                  onClick={() => setActiveIndex(index)}
                  type="button"
                >
                  {item.company}
                </button>
              );
            })}
          </div>

          <article className="flex-1 rounded-lg border border-[var(--line)] bg-[var(--background)] p-6 sm:p-8">
            <h3 className="font-mono-custom text-xl font-bold text-[var(--foreground)] sm:text-2xl">
              {active.role[language]}{" "}
              <span className="text-[var(--truffle-trouble)] dark:text-[var(--burning-flame)]">
                @ {active.company}
              </span>
            </h3>
            <p className="font-mono-custom mt-2 text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
              {active.period[language]}
            </p>
            <p className="mt-5 text-sm leading-7 text-[var(--muted)]">{active.description[language]}</p>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--muted)]">
              {active.highlights[language].map((highlight) => (
                <li className="flex items-start gap-3" key={highlight}>
                  <span className="mt-0.5 text-[var(--burning-flame)]">▸</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {active.technologies.map((tech) => (
                <TechPill key={tech}>{tech}</TechPill>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
