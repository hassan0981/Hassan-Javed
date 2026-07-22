export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
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
    description:
      "Worked on cross-platform mobile and web application development, focusing on React Native UI component libraries and RESTful API integration.",
    bullets: [
      "Engineered responsive React Native UI components for cross-platform mobile applications.",
      "Integrated complex REST APIs and optimized client-side state and data flow.",
      "Contributed to an Augmented Reality (AR)-based mobile application feature set.",
      "Architected and delivered an internal Office Management System mobile app.",
    ],
    skills: ["React Native", "REST API", "JavaScript", "UI Architecture", "Mobile App Development"],
  },
  {
    id: "freelance-fullstack",
    role: "Freelance Full-Stack Developer",
    company: "Remote (Upwork & Direct Clients)",
    location: "Lahore, Pakistan",
    period: "Mar 2025 – Jun 2026",
    description:
      "Delivered custom web and mobile applications for global clients and regional businesses, handling full lifecycle development from UI/UX design to deployment.",
    bullets: [
      "Designed and deployed BouncyDigital.com, a high-performance Next.js & Supabase corporate web app.",
      "Developed AgnTaxConsultant.pk, custom tax consultancy portal with automated WhatsApp integration.",
      "Built custom web/mobile solutions using React, React Native, Firebase, Node.js, and MongoDB.",
      "Maintained 100% client satisfaction through clean, maintainable code and performance optimization.",
    ],
    skills: ["Next.js", "React.js", "React Native", "Node.js", "MongoDB", "Supabase", "Firebase", "WordPress"],
  },
];
