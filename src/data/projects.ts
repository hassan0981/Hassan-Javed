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
      "Full-stack MERN platform enabling Pakistani startups and SMEs to discover genuine influencers and eliminate influencer fraud through AI metrics.",
    highlights: [
      "Trust Score fake-follower detection & engagement analysis",
      "AI ROI prediction engine for campaign planning",
      "Automated outreach AI chatbot & sentiment analysis on responses",
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Python", "Tailwind CSS"],
    videoId: "tdxSkjveZJE", // Real Mashhoor project demo video
    featured: true,
  },
  {
    id: "bouncy-digital",
    title: "BouncyDigital.com",
    subtitle: "Modern Digital Agency Web Application",
    description:
      "High-performance company portfolio & client portal built with Next.js App Router and Supabase, featuring dynamic blog publishing and automated lead routing.",
    highlights: [
      "Supabase backend powering blog content and client inquiries",
      "Automated SMTP email notifications for instant lead alerts",
      "Lighthouse 95+ score with edge rendering & dark mode UI",
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
      "Mobile-responsive corporate portal for an established tax consultancy firm in Pakistan, integrated with custom plugins and instant client communication.",
    highlights: [
      "Custom WordPress plugin configuration for tax calculator & form handling",
      "Direct WhatsApp Business API integration for one-click client inquiries",
      "Fully responsive, mobile-first design with client appointment scheduling",
    ],
    techStack: ["WordPress", "PHP", "JavaScript", "Custom CSS", "WhatsApp API"],
    videoId: "B4_pSd4-DZs", // Real AgnTaxConsultant project demo video
    liveUrl: "https://agntaxconsultant.pk",
    featured: true,
  },
  {
    id: "email-spam-detector",
    title: "Email Spam Detector",
    subtitle: "Machine Learning Classification System",
    description:
      "Intelligent statistical machine learning pipeline designed to analyze email text body and headers, classifying spam vs legitimate emails with high accuracy.",
    highlights: [
      "TF-IDF vectorization & Naive Bayes / SVM classifier models",
      "Real-time text preprocessing, tokenization, and stop-word filtering",
      "Interactive evaluation dashboard for precision, recall, and F1-score",
    ],
    techStack: ["Python", "Scikit-Learn", "NLTK", "Pandas", "Streamlit"],
    featured: false,
  },
  {
    id: "pet-care-tracker",
    title: "Pet Care Tracker",
    subtitle: "Native Android Pet Health & Medical History App",
    description:
      "Feature-rich Android application designed for pet owners to log, track, and monitor pet health metrics, vaccination dates, and medical history.",
    highlights: [
      "Role-based authentication & real-time synchronization with Firebase",
      "Disease tracking, medical log search, and automated checkup reminders",
      "Intuitive mobile native UI built with Java & Android SDK",
    ],
    techStack: ["Java", "Android SDK", "Firebase", "Firestore", "XML Layouts"],
    featured: false,
  },
];
