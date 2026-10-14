export interface SkillItem {
  name: string;
  iconName?: string;
}

export interface SkillPillar {
  id: string;
  title: string;
  domainFocus: string;
  iconName: string;
  accentColor: string;
  skills: SkillItem[];
  projectHighlight: string;
}

export const marqueeSkills = [
  { name: "Next.js", iconName: "SiNextdotjs" },
  { name: "React.js", iconName: "SiReact" },
  { name: "React Native", iconName: "SiReact" },
  { name: "TypeScript", iconName: "SiTypescript" },
  { name: "Node.js", iconName: "SiNodedotjs" },
  { name: "Express.js", iconName: "SiExpress" },
  { name: "MongoDB", iconName: "SiMongodb" },
  { name: "MySQL", iconName: "SiMysql" },
  { name: "Supabase", iconName: "SiSupabase" },
  { name: "Tailwind CSS", iconName: "SiTailwindcss" },
  { name: "Firebase", iconName: "SiFirebase" },
  { name: "JavaScript", iconName: "SiJavascript" },
  { name: "Java", iconName: "SiJava" },
  { name: "Git", iconName: "SiGit" },
  { name: "GitHub", iconName: "SiGithub" },
  { name: "C++", iconName: "SiCplusplus" },
];

export const skillPillars: SkillPillar[] = [
  {
    id: "frontend-architecture",
    title: "Frontend & Client Architecture",
    domainFocus: "High-performance SSR, App Router & reactive component systems",
    iconName: "Cpu",
    accentColor: "#22D3EE",
    skills: [
      { name: "Next.js (App Router)", iconName: "SiNextdotjs" },
      { name: "React.js", iconName: "SiReact" },
      { name: "TypeScript", iconName: "SiTypescript" },
      { name: "Tailwind CSS", iconName: "SiTailwindcss" },
      { name: "JavaScript (ES6+)", iconName: "SiJavascript" },
      { name: "HTML5 / Modern CSS", iconName: "SiHtml5" },
      { name: "Responsive UI Architecture" },
    ],
    projectHighlight: "Powering BouncyDigital & Mashhoor Platform",
  },
  {
    id: "mobile-development",
    title: "Mobile App Development",
    domainFocus: "Cross-platform iOS & Android applications with native responsiveness",
    iconName: "Smartphone",
    accentColor: "#A78BFA",
    skills: [
      { name: "React Native", iconName: "SiReact" },
      { name: "Expo", iconName: "SiExpo" },
      { name: "Android SDK" },
      { name: "React Navigation" },
      { name: "Firebase Mobile", iconName: "SiFirebase" },
      { name: "Push Notifications & Offline Sync" },
      { name: "Java", iconName: "SiJava" },
    ],
    projectHighlight: "ACME One Office Management & AR Initiatives",
  },
  {
    id: "backend-apis",
    title: "Backend & API Engineering",
    domainFocus: "Structured services, business logic & secure data flow",
    iconName: "Server",
    accentColor: "#38BDF8",
    skills: [
      { name: "Node.js", iconName: "SiNodedotjs" },
      { name: "Express.js", iconName: "SiExpress" },
      { name: "RESTful API Design" },
      { name: "MERN Stack Architecture" },
      { name: "Authentication & Security" },
      { name: "C++ (DSA & Problem Solving)", iconName: "SiCplusplus" },
    ],
    projectHighlight: "Mashhoor AI Engine & Production Microservices",
  },
  {
    id: "databases-devops",
    title: "Databases, Cloud & Tooling",
    domainFocus: "Relational & NoSQL schemas, cloud services & version control",
    iconName: "Database",
    accentColor: "#34D399",
    skills: [
      { name: "MongoDB", iconName: "SiMongodb" },
      { name: "MySQL", iconName: "SiMysql" },
      { name: "Supabase (PostgreSQL)", iconName: "SiSupabase" },
      { name: "Firebase / Firestore", iconName: "SiFirebase" },
      { name: "Git", iconName: "SiGit" },
      { name: "GitHub Workflows", iconName: "SiGithub" },
      { name: "WordPress", iconName: "SiWordpress" },
    ],
    projectHighlight: "AgnTaxConsultant.pk & Client Database Infrastructure",
  },
];
