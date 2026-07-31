export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  techStack: string[];
  /**
   * YOUTUBE VIDEO DEMO:
   * Example URL format rendered in modal: https://www.youtube.com/embed/YOUR_VIDEO_ID
   */
  videoId?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const projectsData: Project[] = [
  {
    id: "mashhoor",
    title: "Mashhoor",
    subtitle: "AI-Powered Influencer Marketing Platform",
    description:
      "Full-stack MERN platform enabling Pakistani startups to discover genuine influencers and eliminate influencer fraud.",
    highlights: [
      "Fake-follower detection & Trust Score analytics",
      "Automated AI campaign planning & outreach",
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Python", "Tailwind CSS"],
    videoId: "tdxSkjveZJE",
    featured: true,
  },
  {
    id: "bouncy-digital",
    title: "BouncyDigital.com",
    subtitle: "Modern Digital Agency Web Application",
    description:
      "High-performance company portfolio & client portal built with Next.js App Router and Supabase.",
    highlights: [
      "Supabase backend powering blogs & client leads",
      "Automated SMTP notifications & 95+ Lighthouse score",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Framer Motion"],
    videoId: "cAgXwHUA6pc",
    liveUrl: "https://bouncydigital.com",
    featured: true,
  },
  {
    id: "agn-tax-consultant",
    title: "AgnTaxConsultant.pk",
    subtitle: "Tax Consultancy Corporate Web Portal",
    description:
      "Mobile-responsive corporate portal for an established tax consultancy firm in Pakistan.",
    highlights: [
      "Custom WordPress tax calculator plugin",
      "Direct client inquiry & appointment scheduling system",
    ],
    techStack: ["WordPress", "PHP", "JavaScript", "Custom CSS"],
    videoId: "B4_pSd4-DZs",
    liveUrl: "https://agntaxconsultant.pk",
    featured: true,
  },
  {
    id: "email-spam-detector",
    title: "Email Spam Detector",
    subtitle: "Machine Learning Classification System",
    description:
      "Intelligent statistical machine learning pipeline analyzing email content to classify spam vs legitimate emails.",
    highlights: [
      "TF-IDF vectorization & Naive Bayes / SVM models",
      "Interactive Streamlit metrics dashboard",
    ],
    techStack: ["Python", "Scikit-Learn", "NLTK", "Pandas", "Streamlit"],
    featured: false,
  },
  {
    id: "pet-care-tracker",
    title: "Pet Care Tracker",
    subtitle: "Native Android Pet Health App",
    description:
      "Feature-rich Android mobile app for pet owners to log and monitor pet health metrics and medical history.",
    highlights: [
      "Firebase authentication & real-time sync",
      "Automated checkup reminders & medical search",
    ],
    techStack: ["Java", "Android SDK", "Firebase", "Firestore"],
    featured: false,
  },
];
