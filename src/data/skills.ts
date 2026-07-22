export interface SkillItem {
  name: string;
  level: "Intermediate" | "Beginner";
  iconName?: string;
}

export interface SkillCategoryCard {
  id: string;
  title: string;
  iconName: string;
  accentColor: string;
  skills: SkillItem[];
  projectHighlight: string;
}

export const skillCategoryCards: SkillCategoryCard[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    iconName: "Cpu",
    accentColor: "#22D3EE",
    skills: [
      { name: "Next.js 14+", level: "Intermediate", iconName: "SiNextdotjs" },
      { name: "React.js", level: "Intermediate", iconName: "SiReact" },
      { name: "Tailwind CSS", level: "Intermediate", iconName: "SiTailwindcss" },
      { name: "Responsive UI", level: "Intermediate" },
    ],
    projectHighlight: "BouncyDigital.com & Mashhoor Platform",
  },
  {
    id: "backend",
    title: "Backend Development",
    iconName: "Server",
    accentColor: "#6366F1",
    skills: [
      { name: "Node.js", level: "Intermediate", iconName: "SiNodedotjs" },
      { name: "Express.js", level: "Intermediate", iconName: "SiExpress" },
      { name: "REST Integration", level: "Intermediate" },
      { name: "SMTP Lead Routing", level: "Intermediate" },
      { name: "Auth & Security", level: "Beginner" },
    ],
    projectHighlight: "Mashhoor AI Outreach Engine",
  },
  {
    id: "databases",
    title: "Databases & Cloud",
    iconName: "Database",
    accentColor: "#34D399",
    skills: [
      { name: "Supabase & RLS", level: "Beginner", iconName: "SiSupabase" },
      { name: "MongoDB / Mongoose", level: "Intermediate", iconName: "SiMongodb" },
      { name: "Firebase / Firestore", level: "Intermediate", iconName: "SiFirebase" },
      { name: "MySQL Relational DB", level: "Intermediate" },
    ],
    projectHighlight: "Pet Care Tracker & Supabase DB",
  },
  {
    id: "mobile",
    title: "Mobile Ecosystem",
    iconName: "Smartphone",
    accentColor: "#A78BFA",
    skills: [
      { name: "React Native UI", level: "Intermediate", iconName: "SiReact" },
      { name: "Expo CLI & EAS", level: "Intermediate", iconName: "SiExpo" },
      { name: "React Navigation", level: "Intermediate" },
      { name: "Android SDK", level: "Beginner" },
    ],
    projectHighlight: "ACME One Office Management App",
  },
  {
    id: "languages",
    title: "Languages",
    iconName: "Code",
    accentColor: "#38BDF8",
    skills: [
      { name: "TypeScript", level: "Intermediate", iconName: "SiTypescript" },
      { name: "JavaScript (ES6+)", level: "Intermediate", iconName: "SiJavascript" },
      { name: "C++", level: "Intermediate", iconName: "SiCplusplus" },
      { name: "Java", level: "Intermediate" },
      { name: "SQL", level: "Intermediate" },
    ],
    projectHighlight: "Speed Programming Competition 2025",
  },
  {
    id: "tools",
    title: "Tools & Workflows",
    iconName: "Wrench",
    accentColor: "#F472B6",
    skills: [
      { name: "MERN Architecture", level: "Intermediate" },
      { name: "WordPress Plugins", level: "Intermediate", iconName: "SiWordpress" },
      { name: "Git & GitHub", level: "Intermediate", iconName: "SiGit" },
      { name: "Vercel Deployment", level: "Intermediate" },
    ],
    projectHighlight: "AgnTaxConsultant.pk Corporate Site",
  },
];
