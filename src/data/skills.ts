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
    id: "programming-languages",
    title: "Programming Languages",
    iconName: "Code",
    accentColor: "#38BDF8",
    skills: [
      { name: "C++", level: "Intermediate", iconName: "SiCplusplus" },
      { name: "JavaScript", level: "Intermediate", iconName: "SiJavascript" },
      { name: "TypeScript", level: "Intermediate", iconName: "SiTypescript" },
    ],
    projectHighlight: "DSA & Speed Programming 2025",
  },
  {
    id: "frontend-development",
    title: "Front-end Development",
    iconName: "Cpu",
    accentColor: "#22D3EE",
    skills: [
      { name: "HTML/CSS", level: "Intermediate", iconName: "SiHtml5" },
      { name: "JavaScript", level: "Intermediate", iconName: "SiJavascript" },
      { name: "Tailwind CSS", level: "Intermediate", iconName: "SiTailwindcss" },
      { name: "React.js", level: "Intermediate", iconName: "SiReact" },
      { name: "Next.js", level: "Intermediate", iconName: "SiNextdotjs" },
      { name: "React Native", level: "Intermediate", iconName: "SiReact" },
      { name: "Responsive UI", level: "Intermediate" },
    ],
    projectHighlight: "BouncyDigital & Mashhoor Platform",
  },
  {
    id: "backend-databases",
    title: "Backend & Databases",
    iconName: "Server",
    accentColor: "#1E4E6B",
    skills: [
      { name: "Node.js", level: "Intermediate", iconName: "SiNodedotjs" },
      { name: "Express.js", level: "Intermediate", iconName: "SiExpress" },
      { name: "RESTful APIs", level: "Intermediate" },
      { name: "MongoDB", level: "Intermediate", iconName: "SiMongodb" },
      { name: "MySQL", level: "Intermediate", iconName: "SiMysql" },
      { name: "Firebase/Firestore", level: "Intermediate", iconName: "SiFirebase" },
      { name: "Supabase", level: "Beginner", iconName: "SiSupabase" },
    ],
    projectHighlight: "Mashhoor AI Engine & Supabase DB",
  },
  {
    id: "web-stacks",
    title: "Web Development / Stacks",
    iconName: "Layers",
    accentColor: "#34D399",
    skills: [
      { name: "MERN Stack", level: "Intermediate" },
      { name: "WordPress", level: "Intermediate", iconName: "SiWordpress" },
      { name: "Full-Stack Development", level: "Intermediate" },
    ],
    projectHighlight: "AgnTaxConsultant.pk Corporate Site",
  },
  {
    id: "mobile-development",
    title: "Mobile App Development",
    iconName: "Smartphone",
    accentColor: "#A78BFA",
    skills: [
      { name: "React Native", level: "Intermediate", iconName: "SiReact" },
      { name: "Expo", level: "Intermediate", iconName: "SiExpo" },
      { name: "React Navigation", level: "Intermediate" },
      { name: "Push Notifications", level: "Intermediate" },
      { name: "Java", level: "Intermediate", iconName: "SiJava" },
      { name: "Firebase", level: "Intermediate", iconName: "SiFirebase" },
    ],
    projectHighlight: "ACME One Office Management App",
  },
  {
    id: "tools-version-control",
    title: "Tools & Version Control",
    iconName: "Wrench",
    accentColor: "#F472B6",
    skills: [
      { name: "Git", level: "Intermediate", iconName: "SiGit" },
      { name: "GitHub", level: "Intermediate", iconName: "SiGithub" },
    ],
    projectHighlight: "Version Control & CI/CD Pipelines",
  },
];
