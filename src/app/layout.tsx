import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { SmoothScrollProvider } from "@/components/ui/SmoothScrollProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
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
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Muhammad Hassan Javed — Full-Stack Developer",
    description: "Full-stack web & mobile application developer portfolio.",
    type: "website",
    images: [{ url: "/HASSAN.jpg" }],
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
      className={`light ${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  if (saved === 'dark') {
                    document.documentElement.classList.remove('light');
                  } else {
                    document.documentElement.classList.add('light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="font-body bg-background-dark text-foreground antialiased selection:bg-accent-indigo/30 selection:text-accent-cyan overflow-x-hidden w-full max-w-full">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
