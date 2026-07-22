"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles, FolderGit2, Mail, Github, Linkedin, Code2, Layers, Cpu } from "lucide-react";
import { ParticleBackground } from "./ui/ParticleBackground";
import { MagneticButton } from "./ui/MagneticButton";

const roles = [
  "Full-Stack Developer",
  "Next.js & MERN Specialist",
  "React Native Developer",
  "AI/ML Enthusiast",
];

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect loop
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        if (displayedText === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        if (displayedText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-background-dark">
      {/* Particle & Aurora Mesh Background */}
      <ParticleBackground />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Mono Kicker Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-surface/80 border border-surface-border mb-6 backdrop-blur-sm"
        >
          <Sparkles className="w-4 h-4 text-accent-cyan" />
          <span className="font-mono text-xs text-accent-cyan font-medium tracking-wide">
            Hi, I&apos;m
          </span>
        </motion.div>

        {/* Name Headline with Dynamic Multi-layer Gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-heading font-extrabold text-foreground-heading tracking-tight mb-4"
        >
          Muhammad{" "}
          <span className="bg-gradient-to-r from-accent-indigo via-accent-cyan to-accent-violet bg-clip-text text-transparent drop-shadow-md">
            Hassan Javed
          </span>
        </motion.h1>

        {/* Animated Typewriter Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-10 sm:h-12 flex items-center justify-center mb-6"
        >
          <span className="font-mono text-lg sm:text-2xl text-accent-violet font-semibold tracking-wide">
            {displayedText}
          </span>
          <span className="w-0.5 h-6 bg-accent-cyan ml-1 animate-pulse" />
        </motion.div>

        {/* Summary text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto text-foreground-muted text-base sm:text-lg leading-relaxed mb-8"
        >
          Computer Science graduate proficient in building scalable full-stack web &amp; mobile applications with MERN, Next.js, and React Native. Focused on clean code and AI-driven solutions.
        </motion.p>

        {/* High-Tech Skill Pill Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-xl mx-auto"
        >
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-mono bg-surface-hover/80 border border-surface-border text-foreground-muted">
            <Code2 className="w-3.5 h-3.5 text-accent-cyan" />
            <span>MERN &amp; Next.js</span>
          </span>
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-mono bg-surface-hover/80 border border-surface-border text-foreground-muted">
            <Layers className="w-3.5 h-3.5 text-accent-violet" />
            <span>React Native</span>
          </span>
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-mono bg-surface-hover/80 border border-surface-border text-foreground-muted">
            <Cpu className="w-3.5 h-3.5 text-accent-emerald" />
            <span>AI / ML Integrations</span>
          </span>
        </motion.div>

        {/* CTA Buttons & Quick Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12"
        >
          <MagneticButton href="#projects">
            <div className="flex items-center space-x-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-accent-indigo to-accent-cyan text-white font-heading font-semibold text-sm shadow-glow hover:brightness-110 transition-all">
              <FolderGit2 className="w-4 h-4" />
              <span>View Projects</span>
            </div>
          </MagneticButton>

          <MagneticButton href="#contact">
            <div className="flex items-center space-x-2 px-7 py-3.5 rounded-xl bg-surface border border-surface-border text-foreground hover:border-accent-cyan hover:text-accent-cyan font-heading font-semibold text-sm transition-all backdrop-blur-sm">
              <Mail className="w-4 h-4" />
              <span>Get In Touch</span>
            </div>
          </MagneticButton>

          {/* Social Quick-Links Bar */}
          <div className="flex items-center space-x-2 pl-0 sm:pl-2">
            <a
              href="https://github.com/hassan0981"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-surface border border-surface-border text-foreground-muted hover:text-accent-cyan hover:border-accent-cyan/60 hover:bg-surface-hover transition-colors"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-hassan-javed-4197212b7"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-surface border border-surface-border text-foreground-muted hover:text-accent-cyan hover:border-accent-cyan/60 hover:bg-surface-hover transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex flex-col items-center"
        >
          <a
            href="#about"
            className="flex flex-col items-center text-foreground-muted hover:text-accent-cyan transition-colors text-xs font-mono group"
          >
            <span className="mb-2">Scroll Down</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-accent-indigo group-hover:text-accent-cyan" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
