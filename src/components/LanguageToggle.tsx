"use client";

import type { Language } from "@/types/portfolio";

type LanguageToggleProps = {
  language: Language;
  setLanguage: (language: Language) => void;
  ariaLabel: string;
};

export function LanguageToggle({ language, setLanguage, ariaLabel }: LanguageToggleProps) {
  return (
    <div
      aria-label={ariaLabel}
      className="fixed right-16 top-4 z-50 flex h-10 items-center rounded-full border border-[var(--line)] bg-[var(--background)]/75 p-1 backdrop-blur-sm"
      role="group"
    >
      {(["en", "pt"] as const).map((item) => (
        <button
          aria-pressed={language === item}
          className={`font-mono-custom rounded-full px-3 py-1.5 text-xs font-bold uppercase transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--burning-flame)] ${
            language === item
              ? "bg-[var(--burning-flame)] text-[var(--abyssal)]"
              : "text-[var(--muted)] hover:bg-[var(--surface)] hover:text-[var(--foreground)]"
          }`}
          key={item}
          onClick={() => setLanguage(item)}
          type="button"
        >
          {item}
        </button>
      ))}
    </div>
  );
}
