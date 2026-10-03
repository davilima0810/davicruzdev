import type { PortfolioData } from "@/types/portfolio";

export const portfolio: PortfolioData = {
  name: "Davi Cruz",
  title: "Full Stack Developer",
  profileImage: {
    src: "/images/profile.png",
    alt: {
      en: "Profile photo of Davi Cruz",
      pt: "Foto de perfil de Davi Cruz",
    },
  },
  contact: {
    linkedin: "https://www.linkedin.com/in/davi-cruz/",
    github: "github.com/davilima0810/",
    email: "davicruzcontato@gmail.com",
    resume: "",
  },
  experience: [
    {
      company: "Unimed Teresina",
      role: { en: "Full Stack Developer", pt: "Desenvolvedor Full Stack" },
      period: { en: "Aug 2023 - May 2026", pt: "ago 2023 - mai 2026" },
      description: {
        en: "Worked on enterprise healthcare systems, APIs, integrations and modernization of legacy applications.",
        pt: "Atuação em sistemas corporativos de saúde, APIs, integrações e modernização de aplicações legadas.",
      },
      highlights: {
        en: [
          "Developed and maintained frontend and backend applications used in healthcare operations.",
          "Worked with React, Next.js, TypeScript, Java, Spring Boot, PHP and enterprise integrations.",
          "Worked with Oracle, PostgreSQL and SQL Server environments.",
          "Participated in modernization and maintenance of legacy systems.",
          "Worked on performance improvements, APIs and complex business rules.",
          "Participated in technical decisions, code reviews and collaboration with developers from different experience levels.",
        ],
        pt: [
          "Desenvolvimento e manutenção de aplicações frontend e backend utilizadas em operações de saúde.",
          "Atuação com React, Next.js, TypeScript, Java, Spring Boot, PHP e integrações corporativas.",
          "Experiência com ambientes Oracle, PostgreSQL e SQL Server.",
          "Participação na modernização e manutenção de sistemas legados.",
          "Trabalho com melhorias de performance, APIs e regras de negócio complexas.",
          "Participação em decisões técnicas, code reviews e colaboração com desenvolvedores de diferentes níveis de experiência.",
        ],
      },
      technologies: ["React", "Next.js", "TypeScript", "Java", "Spring Boot", "PHP", "Oracle", "PostgreSQL", "Docker"],
    },
    {
      company: "SEDUC-PI",
      role: { en: "Full Stack Developer", pt: "Desenvolvedor Full Stack" },
      period: { en: "Aug 2024 - Mar 2025", pt: "ago 2024 - mar 2025" },
      description: {
        en: "Worked on educational and academic management systems.",
        pt: "Atuação em sistemas educacionais e de gestão acadêmica.",
      },
      highlights: {
        en: [
          "Developed enrollment, renewal and selection workflows.",
          "Built responsive forms and administrative interfaces.",
          "Implemented business rules and API integrations.",
          "Worked across frontend and backend features.",
        ],
        pt: [
          "Desenvolvimento de fluxos de matrícula, renovação e processos seletivos.",
          "Criação de formulários responsivos e interfaces administrativas.",
          "Implementação de regras de negócio e integrações com APIs.",
          "Desenvolvimento de funcionalidades frontend e backend.",
        ],
      },
      technologies: ["React", "Next.js", "TypeScript", "React Query", "Material UI", "Tailwind CSS", "Node.js", "PHP", "PostgreSQL", "Redis", "Docker"],
    },
    {
      company: "Maida.health",
      role: { en: "Frontend Developer", pt: "Desenvolvedor Frontend" },
      period: { en: "Jun 2022 - 2023", pt: "jun 2022 - 2023" },
      description: {
        en: "Worked on healthcare management platforms for health plan operators.",
        pt: "Atuação em plataformas de gestão em saúde para operadoras de planos.",
      },
      highlights: {
        en: [
          "Developed enterprise interfaces using React, Next.js and TypeScript.",
          "Worked with complex healthcare business workflows.",
          "Participated in microfrontend architectures and integrations with backend services.",
          "Developed modules involving beneficiary management, administrative operations and financial workflows.",
          "Worked with reusable components, state management and API integrations.",
        ],
        pt: [
          "Desenvolvimento de interfaces corporativas utilizando React, Next.js e TypeScript.",
          "Atuação em fluxos complexos de negócio na área de saúde.",
          "Participação em arquiteturas de microfrontends e integrações com serviços backend.",
          "Desenvolvimento de módulos de gestão de beneficiários, operações administrativas e fluxos financeiros.",
          "Trabalho com componentes reutilizáveis, gerenciamento de estado e integrações com APIs.",
        ],
      },
      technologies: ["React", "Next.js", "TypeScript", "Redux", "REST APIs", "Redis", "GitLab"],
    },
    {
      company: "Supermenu",
      role: { en: "Full Stack Developer", pt: "Desenvolvedor Full Stack" },
      period: { en: "Apr 2021 - Jul 2022", pt: "abr 2021 - jul 2022" },
      description: {
        en: "Worked on a SaaS platform for restaurants, digital menus and order management.",
        pt: "Atuação em uma plataforma SaaS para restaurantes, cardápios digitais e gerenciamento de pedidos.",
      },
      highlights: {
        en: [
          "Developed frontend and backend product features.",
          "Built real-time order functionality.",
          "Integrated payment providers and Pix-based payment flows.",
          "Worked with restaurant dashboards and ordering systems.",
          "Participated in deployment and infrastructure-related tasks.",
        ],
        pt: [
          "Desenvolvimento de funcionalidades frontend e backend do produto.",
          "Criação de funcionalidades de pedidos em tempo real.",
          "Integração com provedores de pagamento e fluxos via Pix.",
          "Desenvolvimento de dashboards e sistemas de pedidos para restaurantes.",
          "Participação em atividades relacionadas a deploy e infraestrutura.",
        ],
      },
      technologies: ["React", "Vue", "Node.js", "MongoDB", "Redis", "Socket.IO", "WebSockets", "Docker", "Nginx", "Azure"],
    },
    {
      company: "AgenTech",
      role: { en: "Full Stack Developer", pt: "Desenvolvedor Full Stack" },
      period: { en: "Feb 2018 - Jul 2019", pt: "fev 2018 - jul 2019" },
      description: {
        en: "Developed custom software for different business domains.",
        pt: "Desenvolvimento de software sob demanda para diferentes segmentos de negócio.",
      },
      highlights: {
        en: [
          "Developed management systems for small businesses.",
          "Worked with point-of-sale and administrative applications.",
          "Developed REST APIs and web applications.",
          "Participated in both frontend and backend implementation.",
        ],
        pt: [
          "Desenvolvimento de sistemas de gestão para pequenos negócios.",
          "Atuação em sistemas de ponto de venda e aplicações administrativas.",
          "Desenvolvimento de APIs REST e aplicações web.",
          "Participação tanto no frontend quanto no backend.",
        ],
      },
      technologies: ["Java", "PrimeFaces", "JavaScript", "Python", "Django", "Ionic"],
    },
  ],
  projects: [
    {
      name: "Leadflow",
      description: {
        en: "A multi-tenant platform for capturing, qualifying and managing leads through customizable public flows and forms.",
        pt: "Uma plataforma multi-tenant para captura, qualificação e gerenciamento de leads através de fluxos e formulários públicos personalizáveis.",
      },
      technologies: ["Next.js", "TypeScript", "NestJS", "PostgreSQL", "Prisma", "Docker"],
      status: { en: "In development", pt: "Em desenvolvimento" },
    },
    {
      name: "Church System",
      description: {
        en: "A multi-tenant platform for managing church members, branches, groups, courses, discipleship and communication.",
        pt: "Uma plataforma multi-tenant para gerenciamento de membros, filiais, grupos, cursos, discipulado e comunicação de igrejas.",
      },
      technologies: ["Java", "Spring Boot", "Next.js", "TypeScript", "PostgreSQL", "Docker"],
      status: { en: "In development", pt: "Em desenvolvimento" },
    },
    {
      name: "Realtime Chat",
      description: {
        en: "A real-time chat application built to explore WebSockets, event-driven communication and modern full-stack architecture.",
        pt: "Uma aplicação de chat em tempo real criada para explorar WebSockets, comunicação orientada a eventos e arquitetura full stack moderna.",
      },
      technologies: ["NestJS", "WebSockets", "Next.js", "TypeScript"],
    },
    {
      name: "Stock Control API",
      description: {
        en: "REST API for inventory and stock management.",
        pt: "API REST para gerenciamento de estoque e inventário.",
      },
      technologies: ["Java", "Spring Boot", "JPA", "Hibernate"],
    },
  ],
  skills: [
    { name: { en: "Frontend", pt: "Frontend" }, skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"], featured: true },
    { name: { en: "Backend", pt: "Backend" }, skills: ["Java", "Spring Boot", "Node.js", "NestJS", "PHP", "Laravel"], featured: true },
    { name: { en: "Databases", pt: "Bancos de dados" }, skills: ["PostgreSQL", "Oracle", "SQL Server", "MongoDB", "Redis"], featured: true },
    { name: { en: "Infrastructure", pt: "Infraestrutura" }, skills: ["Docker", "Nginx", "CI/CD", "Linux"], featured: true },
    {
      name: { en: "Architecture", pt: "Arquitetura" },
      skills: [
        "REST APIs",
        "WebSockets",
        { en: "Multi-tenant architectures", pt: "Arquiteturas multi-tenant" },
        { en: "Microservices", pt: "Microsserviços" },
        { en: "Legacy system modernization", pt: "Modernização de sistemas legados" },
      ],
      featured: true,
    },
  ],
  education: [
    {
      title: { en: "Bachelor's Degree in Computer Science", pt: "Bacharelado em Ciência da Computação" },
      institution: "Universidade Estadual do Piauí - UESPI",
      period: { en: "2018 - 2023", pt: "2018 - 2023" },
    },
    {
      title: { en: "Technical Degree in Web/Computer Systems", pt: "Curso Técnico em Informática" },
      institution: "SENAI-PI",
      period: { en: "2016 - 2018", pt: "2016 - 2018" },
    },
    {
      title: { en: "Postgraduate studies in Artificial Intelligence", pt: "Pós-graduação em Inteligência Artificial" },
      institution: "In progress",
      period: { en: "2026 - Present", pt: "2026 - Atual" },
      status: { en: "In progress", pt: "Em andamento" },
    },
  ],
};
