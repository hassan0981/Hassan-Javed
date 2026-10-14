"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Code2, Send, Sun, Moon } from "lucide-react";
import { MagneticButton } from "./ui/MagneticButton";

const navLinks = [
  { num: "01.", label: "About", href: "#about" },
  { num: "02.", label: "Experience", href: "#experience" },
  { num: "03.", label: "Projects", href: "#projects" },
  { num: "04.", label: "Skills", href: "#skills" },
  { num: "05.", label: "Education", href: "#education" },
  { num: "06.", label: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [theme, setTheme] = useState<"dark" | "light">("light");

  const THEME_STORAGE_KEY = "mhj_theme_pref";

  useEffect(() => {
    // Clean up legacy test key so visitors unconditionally default to bright mode
    try {
      if (localStorage.getItem("theme") === "dark" && !localStorage.getItem(THEME_STORAGE_KEY)) {
        localStorage.removeItem("theme");
      }
    } catch (e) {}

    // Sync stored theme preference (Default is unconditionally Bright/Warm Editorial Beige theme)
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) as "dark" | "light" | null;
    if (savedTheme === "dark") {
      setTheme("dark");
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY > 40;
          setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));

          const scrollPosition = window.scrollY + 200;
          for (let i = navLinks.length - 1; i >= 0; i--) {
            const id = navLinks[i].href.substring(1);
            const sectionEl = document.getElementById(id);
            if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
              setActiveSection((prev) => (prev !== id ? id : prev));
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      try {
        localStorage.setItem(THEME_STORAGE_KEY, "dark");
      } catch (e) {}
    } else {
      setTheme("light");
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      try {
        localStorage.setItem(THEME_STORAGE_KEY, "light");
      } catch (e) {}
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-background-dark/80 backdrop-blur-lg border-b border-surface-border/80 py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Initials Mark */}
        <a
          href="#"
          className="group flex items-center space-x-2 text-foreground-heading font-heading font-bold text-xl tracking-tight"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-accent-indigo to-accent-cyan flex items-center justify-center text-white shadow-glow group-hover:scale-105 transition-transform">
            <Code2 className="w-5 h-5" />
          </div>
          <span className="font-mono text-base tracking-wider group-hover:text-accent-cyan transition-colors">
            MHJ<span className="text-accent-indigo">.dev</span>
          </span>
        </a>

        {/* Desktop Nav Items in Floating Glass Capsule */}
        <nav className="hidden md:flex items-center space-x-1 bg-surface/70 backdrop-blur-xl border border-surface-border/90 rounded-full px-3 py-1.5 shadow-card-hover">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs transition-all group ${
                  isActive
                    ? "bg-surface-hover text-accent-cyan font-semibold border border-surface-border/80 shadow-sm"
                    : "text-foreground-muted hover:text-foreground hover:bg-surface-hover/50"
                }`}
              >
                {/* Index number with electric accent color */}
                <span className="font-mono text-[11px] text-accent-cyan font-bold group-hover:text-accent-indigo transition-colors">
                  {link.num}
                </span>

                {/* Label text */}
                <span className="font-heading font-medium tracking-wide">
                  {link.label}
                </span>

                {/* Subtle Active Pill Glow Indicator */}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Area: Available Dot, Theme Switcher & Contact Button */}
        <div className="hidden md:flex items-center space-x-3">
          {/* Available status pill */}
          <div className="nav-available-pill inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-surface/80 border border-surface-border text-xs font-mono text-foreground-muted shadow-sm">
            <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
            <span>Available for work</span>
          </div>

          {/* Switchable Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-surface border border-surface-border text-foreground-muted hover:text-accent-cyan hover:border-accent-cyan/60 transition-all shadow-sm flex items-center justify-center group"
            title={theme === "light" ? "Switch to Dark Theme" : "Switch to Bright Theme (Default)"}
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform" />
            ) : (
              <Moon className="w-4 h-4 text-accent-indigo group-hover:-rotate-12 transition-transform" />
            )}
          </button>

          {/* Contact CTA */}
          <MagneticButton>
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent-indigo via-accent-cyan to-accent-violet text-white text-xs font-mono font-medium shadow-glow hover:brightness-110 transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Get In Touch</span>
            </a>
          </MagneticButton>
        </div>

        {/* Mobile Hamburger & Theme Controls */}
        <div className="flex md:hidden items-center space-x-2">
          {/* Mobile Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-surface border border-surface-border text-foreground-muted hover:text-accent-cyan transition-colors"
            title={theme === "light" ? "Switch to Dark Theme" : "Switch to Bright Theme (Default)"}
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-amber-400" />
            ) : (
              <Moon className="w-5 h-5 text-accent-indigo" />
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-surface border border-surface-border text-foreground-muted hover:text-foreground hover:bg-surface-hover transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-in Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface/95 backdrop-blur-xl border-b border-surface-border px-4 pt-3 pb-6 mt-2 shadow-2xl"
          >
            <div className="flex flex-col space-y-2.5 font-mono text-sm">
              <div className="flex items-center justify-between pb-2.5 mb-1 border-b border-surface-border/40">
                <div className="nav-available-pill inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-surface-hover border border-surface-border text-xs font-mono text-foreground-muted">
                  <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
                  <span>Available for work</span>
                </div>
                <span className="text-[11px] font-mono text-accent-cyan">Lahore, PK</span>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2.5 px-3 rounded-xl hover:bg-surface-hover text-foreground-muted hover:text-accent-cyan transition-colors border-b border-surface-border/30"
                >
                  <span className="font-heading font-medium text-foreground">
                    {link.label}
                  </span>
                  <span className="text-accent-cyan text-xs font-mono font-bold">
                    {link.num}
                  </span>
                </a>
              ))}
              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-gradient-to-r from-accent-indigo to-accent-cyan text-white text-xs font-mono font-medium shadow-glow"
                >
                  <Download className="w-4 h-4" />
                  <span>Get Resume / Hire Me</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

