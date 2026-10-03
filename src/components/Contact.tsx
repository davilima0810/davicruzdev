import { portfolio } from "@/data/portfolio";
import type { LinkKey } from "@/types/portfolio";
import type { TranslationDictionary } from "@/types/translations";

type ContactProps = {
  t: TranslationDictionary;
};

function toHref(key: LinkKey, value: string) {
  if (!value) {
    return "";
  }

  if (key === "email" && !value.startsWith("mailto:")) {
    return `mailto:${value}`;
  }

  if (key !== "email" && !/^https?:\/\//i.test(value)) {
    return `https://${value}`;
  }

  return value;
}

export function Contact({ t }: ContactProps) {
  const linkOrder: LinkKey[] = ["linkedin", "github", "email", "resume"];
  const visibleLinks = linkOrder
    .map((key) => ({
      key,
      href: toHref(key, portfolio.contact[key]),
    }))
    .filter((item) => item.href);

  return (
    <section className="px-4 pb-8 pt-12 md:px-10 md:pb-10 md:pt-14 lg:px-30 xl:px-60" id="contact">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-6">
          <p className="font-mono-custom mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--truffle-trouble)] dark:text-[var(--burning-flame)]">
            {t.contact.eyebrow}
          </p>
          <h2 className="font-mono-custom text-2xl font-bold tracking-wide text-[var(--foreground)] sm:text-3xl">
            {t.contact.title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">
            {t.contact.text}
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {visibleLinks.map((item) => (
            <a
              className="font-mono-custom rounded-full border border-[var(--line)] px-5 py-3 text-xs font-bold text-[var(--foreground)] transition hover:-translate-y-0.5 hover:border-[var(--burning-flame)] hover:bg-[var(--surface)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--burning-flame)]"
              href={item.href}
              key={item.key}
              rel={item.key === "email" ? undefined : "noopener noreferrer"}
              target={item.key === "email" ? undefined : "_blank"}
            >
              {t.contact.links[item.key]}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
