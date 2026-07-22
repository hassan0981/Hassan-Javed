import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { SmoothScrollProvider } from "@/components/ui/SmoothScrollProvider";
import { CustomCursor } from "@/components/ui/CustomCursor";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Hassan Javed — Full-Stack Developer & Software Engineer",
  description:
    "Portfolio of Muhammad Hassan Javed. Computer Science graduate & Full-Stack Developer proficient in Next.js, MERN Stack, React Native, and AI integrations.",
  keywords: [
    "Muhammad Hassan Javed",
    "Full-Stack Developer",
    "Next.js Developer",
    "MERN Stack Developer",
    "React Native Developer",
    "Software Engineer Lahore",
    "Pakistan Web Developer",
  ],
  authors: [{ name: "Muhammad Hassan Javed" }],
  openGraph: {
    title: "Muhammad Hassan Javed — Full-Stack Developer",
    description: "Full-stack web & mobile application developer portfolio.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="font-sans bg-background-dark text-foreground antialiased selection:bg-accent-indigo/30 selection:text-accent-cyan">
        <SmoothScrollProvider>
          <CustomCursor />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
