export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  skills: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "acme-one",
    role: "Application Developer Intern",
    company: "ACME One",
    location: "Lahore, Pakistan",
    period: "Sep 2025 – Nov 2025",
    bullets: [
      "Developed responsive mobile UI components using React Native.",
      "Integrated REST APIs to enable seamless backend communication.",
      "Contributed to an Augmented Reality (AR)-based mobile application.",
    ],
    skills: ["React Native", "REST APIs", "JavaScript", "UI Architecture"],
  },
  {
    id: "freelance-fullstack",
    role: "Freelance Full-Stack Developer",
    company: "Remote (Upwork & Direct Clients)",
    location: "Lahore, Pakistan",
    period: "Mar 2025 – Jun 2026",
    bullets: [
      "Architected and deployed client portals including BouncyDigital.com and AgnTaxConsultant.pk.",
      "Engineered full-stack web and mobile apps using Next.js, React Native, Supabase, and MongoDB.",
    ],
    skills: ["Next.js", "React Native", "Node.js", "MongoDB"],
  },
];
