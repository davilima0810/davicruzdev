export type LinkKey = "github" | "linkedin" | "email" | "resume";

export type Language = "en" | "pt";

export type LocalizedString = Record<Language, string>;

export type PortfolioLinks = Record<LinkKey, string>;

export type Experience = {
  company: string;
  role: LocalizedString;
  period: LocalizedString;
  description: LocalizedString;
  highlights: Record<Language, string[]>;
  technologies: string[];
};

export type Project = {
  name: string;
  description: LocalizedString;
  technologies: string[];
  status?: LocalizedString;
};

export type SkillCategory = {
  name: LocalizedString;
  skills: Array<string | LocalizedString>;
  featured?: boolean;
};

export type Education = {
  title: LocalizedString;
  institution: string;
  period: LocalizedString;
  status?: LocalizedString;
};

export type PortfolioData = {
  name: string;
  title: string;
  profileImage: {
    src: string;
    alt: LocalizedString;
  };
  contact: PortfolioLinks;
  experience: Experience[];
  projects: Project[];
  skills: SkillCategory[];
  education: Education[];
};
