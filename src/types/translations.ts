import type { Language, LinkKey } from "./portfolio";

export type TranslationDictionary = {
  metadata: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    experience: string;
    projects: string;
    skills: string;
    education: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    description: string;
    secondaryDescription: string;
    primaryCta: string;
    secondaryCta: string;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    focusTitle: string;
    focusItems: string[];
  };
  experience: {
    eyebrow: string;
    title: string;
  };
  projects: {
    eyebrow: string;
    title: string;
  };
  skills: {
    eyebrow: string;
    title: string;
  };
  education: {
    eyebrow: string;
    title: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    text: string;
    links: Record<LinkKey, string>;
  };
  footer: {
    text: string;
  };
  controls: {
    toggleTheme: string;
    switchLanguage: string;
  };
};

export type Translations = Record<Language, TranslationDictionary>;
