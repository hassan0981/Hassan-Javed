"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp, Code2, Heart } from "lucide-react";

export const Footer: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background-dark border-t border-surface-border/30 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Copyright */}
        <div className="flex items-center space-x-3">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-accent-indigo to-accent-cyan flex items-center justify-center text-white text-xs font-bold">
            <Code2 className="w-4 h-4" />
          </div>
          <p className="text-xs font-mono text-foreground-muted">
            &copy; {new Date().getFullYear()} Muhammad Hassan Javed. All rights reserved.
          </p>
        </div>

        {/* Tech Stack Credit */}
        <p className="text-xs font-mono text-foreground-muted flex items-center space-x-1">
          <span>Crafted with</span>
          <Heart className="w-3.5 h-3.5 text-accent-indigo fill-accent-indigo" />
          <span>using Next.js 14, Tailwind CSS &amp; Supabase</span>
        </p>

        {/* Back to Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="fixed bottom-6 right-6 z-30 p-3 rounded-full bg-surface/90 border border-surface-border text-accent-cyan hover:bg-surface-hover hover:border-accent-cyan transition-all shadow-glow"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </div>
    </footer>
  );
};
