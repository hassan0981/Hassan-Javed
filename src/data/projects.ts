export interface Project {
  id: string;
  title: string;
  subtitle: string;
  timeline?: string;
  categoryTag?: string;
  description: string;
  cardPills?: string[];
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
    timeline: "Final Year Project | Jun 2025 – Jul 2026",
    categoryTag: "Final Year Project",
    description:
      "Full-stack MERN & ML platform connecting Pakistani startups and SMEs with credible influencers, featuring separate brand and influencer workflows secured with JWT RESTful APIs.",
    cardPills: [
      "Fake-Follower Detection & ML Trust Score",
      "JWT Workflows & RESTful MongoDB APIs",
    ],
    highlights: [
      "Built a full-stack platform (React.js, Node.js, Express.js, MongoDB) connecting Pakistani startups and SMEs with credible influencers, with separate brand and influencer workflows and JWT-secured REST APIs.",
      "Designed RESTful APIs and MongoDB data models for user management, brand and influencer profiles, influencer discovery, and campaign collaboration.",
      "Developed an ML-based Trust Score for fake-follower detection, along with niche categorization and engagement analysis.",
      "Built ROI prediction to estimate campaign performance and sentiment analysis to classify influencer responses, reducing manual effort for marketers.",
      "Integrated an AI chatbot and SMTP email notifications to automate influencer outreach and communication.",
    ],
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Python (ML)",
      "JWT",
      "REST APIs",
      "Tailwind CSS",
    ],
    videoId: "tdxSkjveZJE",
    liveUrl: "https://mashhoor-frontend.vercel.app/",
    featured: true,
  },
  {
    id: "bouncy-digital",
    title: "BouncyDigital.com",
    subtitle: "Modern Digital Agency Web Application",
    timeline: "Client Production Project | 2025",
    categoryTag: "Client Project",
    description:
      "Fully responsive, mobile-friendly company portfolio web application engineered using Next.js, with Supabase used to store dynamic blog content and contact form submissions.",
    cardPills: [
      "Supabase Dynamic Blog CMS & Lead Capture",
      "Automated SMTP Email Notifications",
    ],
    highlights: [
      "Built a fully responsive, mobile-friendly company portfolio website using Next.js, with Supabase used to store blog content and contact form submissions.",
      "Integrated SMTP email service for automated contact form notifications and instant lead delivery.",
      "Architected high-performance responsive layout with smooth Framer Motion transitions and 95+ Lighthouse scores.",
    ],
    techStack: [
      "Next.js",
      "Supabase",
      "TypeScript",
      "Tailwind CSS",
      "SMTP",
      "Framer Motion",
    ],
    videoId: "cAgXwHUA6pc",
    liveUrl: "https://bouncydigital.com",
    featured: true,
  },
  {
    id: "agn-tax-consultant",
    title: "AgnTaxConsultant.pk",
    subtitle: "Tax Consultancy Corporate Web Portal",
    timeline: "Client Web Solution | 2025",
    categoryTag: "Client Project",
    description:
      "Mobile-responsive, portfolio-style corporate website developed for an established tax consultancy firm using WordPress, tailored with custom plugins and direct client communication channels.",
    cardPills: [
      "Custom WordPress Consultancy Architecture",
      "Direct WhatsApp Client Inquiry Integration",
    ],
    highlights: [
      "Developed a mobile-responsive, portfolio-style website for a tax consultancy using WordPress, with plugins configured according to client requirements.",
      "Integrated WhatsApp for direct client inquiries and rapid consultation bookings.",
      "Configured specialized service modules, client advisory directories, and high-conversion appointment forms.",
    ],
    techStack: [
      "WordPress",
      "PHP",
      "WhatsApp API",
      "JavaScript",
      "Custom CSS",
    ],
    videoId: "B4_pSd4-DZs",
    liveUrl: "https://agntaxconsultant.pk",
    featured: true,
  },
];
