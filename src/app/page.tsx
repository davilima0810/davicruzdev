"use client";

import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { useLanguage } from "@/hooks/useLanguage";

export default function Home() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <>
      <Header language={language} setLanguage={setLanguage} t={t} />
      <main>
        <Hero language={language} t={t} />
        <About t={t} />
        <Experience language={language} t={t} />
        <Projects language={language} t={t} />
        <Skills language={language} t={t} />
        <Education language={language} t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}
