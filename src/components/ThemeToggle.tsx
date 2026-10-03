"use client";

import { useEffect, useState } from "react";

type ThemeToggleProps = {
  ariaLabel: string;
};

export function ThemeToggle({ ariaLabel }: ThemeToggleProps) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = stored ? stored === "dark" : prefersDark;

    document.documentElement.classList.toggle("dark", shouldUseDark);
    setIsDark(shouldUseDark);
  }, []);

  function toggleTheme() {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("theme", next ? "dark" : "light");
    setIsDark(next);
  }

  return (
    <button
      aria-label={ariaLabel}
      className="fixed right-4 top-4 z-50 grid h-10 w-10 place-items-center rounded-full border border-[var(--line)] bg-[var(--background)]/75 text-[var(--foreground)] backdrop-blur-sm transition-colors hover:border-[var(--burning-flame)] hover:bg-[var(--surface)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--burning-flame)]"
      onClick={toggleTheme}
      type="button"
    >
      <span className="font-mono-custom text-sm font-bold">{isDark ? "L" : "D"}</span>
    </button>
  );
}
