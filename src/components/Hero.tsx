import Image from "next/image";
import { portfolio } from "@/data/portfolio";
import type { Language } from "@/types/portfolio";
import type { TranslationDictionary } from "@/types/translations";

type HeroProps = {
  language: Language;
  t: TranslationDictionary;
};

export function Hero({ language, t }: HeroProps) {
  return (
    <section
      className="font-mono-custom grid min-h-screen items-center px-4 pb-10 pt-20 md:px-10 lg:px-30 xl:px-60"
      id="top"
    >
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center justify-center text-center">
        <div className="reveal-up flex items-center gap-4 sm:gap-5">
          <Image
            alt={portfolio.profileImage.alt[language]}
            className="h-14 w-14 shrink-0 rounded-full border-2 border-[var(--burning-flame)] object-cover ring-2 ring-[var(--background)] sm:h-20 sm:w-20"
            height={160}
            priority
            src={portfolio.profileImage.src}
            width={160}
          />
          <div className="min-w-0 text-left">
            <span className="text-xs text-[var(--muted)] sm:text-sm">{t.hero.eyebrow}</span>
            <h1 className="min-h-8 whitespace-nowrap text-xl font-bold sm:min-h-11 sm:text-3xl">
              <span className="type-cursor">{t.hero.headline}</span>
            </h1>
          </div>
        </div>

        <div className="reveal-up mt-10 flex w-full max-w-2xl flex-col gap-5 text-sm leading-7 text-[var(--muted)] sm:mt-16 sm:text-base sm:leading-8">
          <p>{t.hero.description}</p>
          <p>{t.hero.secondaryDescription}</p>
        </div>

        <div className="reveal-up mt-8 flex flex-wrap justify-center gap-3">
          <a
            className="font-mono-custom rounded-full border border-[var(--burning-flame)] bg-[var(--burning-flame)] px-5 py-3 text-xs font-bold text-[var(--abyssal)] transition hover:-translate-y-0.5 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--burning-flame)]"
            href="#projects"
          >
            {t.hero.primaryCta}
          </a>
          <a
            className="font-mono-custom rounded-full border border-[var(--line)] px-5 py-3 text-xs font-bold text-[var(--foreground)] transition hover:-translate-y-0.5 hover:border-[var(--burning-flame)] hover:bg-[var(--surface)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--burning-flame)]"
            href="#contact"
          >
            {t.hero.secondaryCta}
          </a>
        </div>
      </div>
    </section>
  );
}
