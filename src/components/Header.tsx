import { portfolio } from "@/data/portfolio";
import type { Language } from "@/types/portfolio";
import type { TranslationDictionary } from "@/types/translations";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { href: "#about", key: "about" },
  { href: "#experience", key: "experience" },
  { href: "#projects", key: "projects" },
  { href: "#contact", key: "contact" },
] as const;

type HeaderProps = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: TranslationDictionary;
};

export function Header({ language, setLanguage, t }: HeaderProps) {
  return (
    <>
      <header className="fixed left-4 top-4 z-50">
        <a
          aria-label="Davi Cruz home"
          className="font-mono-custom flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--background)]/75 text-sm font-bold backdrop-blur-sm transition-colors hover:border-[var(--burning-flame)] hover:bg-[var(--surface)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--burning-flame)]"
          href="#top"
        >
          DC
        </a>
      </header>
      <nav
        aria-label="Main navigation"
        className="fixed bottom-4 left-1/2 z-50 hidden -translate-x-1/2 rounded-full border border-[var(--line)] bg-[var(--background)]/78 px-2 py-1 backdrop-blur-sm md:flex"
      >
        {navItems.map((item) => (
          <a
            className="font-mono-custom rounded-full px-4 py-2 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--foreground)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--burning-flame)]"
            href={item.href}
            key={item.href}
          >
            {t.nav[item.key]}
          </a>
        ))}
      </nav>
      <span className="sr-only">{portfolio.name}</span>
      <LanguageToggle ariaLabel={t.controls.switchLanguage} language={language} setLanguage={setLanguage} />
      <ThemeToggle ariaLabel={t.controls.toggleTheme} />
    </>
  );
}
