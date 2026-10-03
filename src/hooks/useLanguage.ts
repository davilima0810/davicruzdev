"use client";

import { useEffect, useState } from "react";
import { translations } from "@/data/translations";
import type { Language } from "@/types/portfolio";

const STORAGE_KEY = "portfolio-language";

function isLanguage(value: string | null): value is Language {
  return value === "en" || value === "pt";
}

export function useLanguage() {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLanguage(stored)) {
      setLanguageState(stored);
      document.documentElement.lang = stored === "pt" ? "pt-BR" : "en";
    }
  }, []);

  useEffect(() => {
    const metadata = translations[language].metadata;
    document.title = metadata.title;

    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (description) {
      description.content = metadata.description;
    }

    const ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.content = metadata.title;
    }

    const ogDescription = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.content = metadata.description;
    }
  }, [language]);

  function setLanguage(nextLanguage: Language) {
    setLanguageState(nextLanguage);
    window.localStorage.setItem(STORAGE_KEY, nextLanguage);
    document.documentElement.lang = nextLanguage === "pt" ? "pt-BR" : "en";
  }

  return {
    language,
    setLanguage,
    t: translations[language],
  };
}
