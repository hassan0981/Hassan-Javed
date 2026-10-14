export interface ExperienceLiveLink {
  label: string;
  url: string;
  subtitle?: string;
  tech?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  typeBadge: string;
  location: string;
  period: string;
  bullets: string[];
  skills: string[];
  liveLinks?: ExperienceLiveLink[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "acme-one",
    role: "Application Developer Intern",
    company: "ACME One",
    typeBadge: "Industry Internship",
    location: "Lahore, Pakistan",
    period: "Sep 2025 – Dec 2025",
    bullets: [
      "Worked primarily as a frontend developer, designing and creating responsive mobile screens and UI components for ongoing company projects.",
      "Built an Office Management System mobile application using React Native, implementing intuitive frontend screens and core application functionality.",
      "Developed and integrated React Native frontend features for existing company projects, including an Augmented Reality (AR)-based mobile application.",
      "Managed and optimized application data flow and state management to improve application functionality and user experience.",
    ],
    skills: ["React Native", "Frontend Development", "Responsive UI", "AR Integration", "REST APIs", "JavaScript"],
  },
  {
    id: "freelance-fullstack",
    role: "Freelance Full-Stack Developer",
    company: "Self-Employed (Direct Clients)",
    typeBadge: "Commercial Client Delivery",
    location: "Remote",
    period: "Mar 2025 – Jun 2026",
    bullets: [
      "Delivered end-to-end web and mobile solutions for multiple direct clients, managing everything from scoping to live deployment.",
      "Designed and developed production client websites, including BouncyDigital.com and AgnTaxConsultant.pk.",
    ],
    skills: ["React.js", "Next.js", "Node.js", "MongoDB", "MySQL", "Firebase"],
    liveLinks: [
      {
        label: "BouncyDigital.com",
        url: "https://bouncydigital.com",
        subtitle: "Digital Agency Web Platform",
        tech: "Next.js & Supabase",
      },
      {
        label: "AgnTaxConsultant.pk",
        url: "https://agntaxconsultant.pk",
        subtitle: "Corporate Tax Consultancy Portal",
        tech: "WordPress & Custom PHP",
      },
    ],
  },
];
