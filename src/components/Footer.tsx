import type { TranslationDictionary } from "@/types/translations";

type FooterProps = {
  t: TranslationDictionary;
};

export function Footer({ t }: FooterProps) {
  return (
    <footer className="px-4 pt-0 text-center md:px-10">
      <p className="font-mono-custom text-xs text-[var(--muted)]">
        {t.footer.text}
      </p>
    </footer>
  );
}
