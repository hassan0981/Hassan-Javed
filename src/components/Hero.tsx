"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowDown, Terminal, FolderGit2, Mail, Github, Linkedin, Code2, Layers, Cpu, CheckCircle2 } from "lucide-react";
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

  // 3D Card Tilt Values for Profile Card
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 300, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

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
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-background-dark">
      {/* Particle & Aurora Mesh Background */}
      <ParticleBackground />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Hero Text & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Mono Kicker Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-surface/80 border border-surface-border mb-6 backdrop-blur-sm"
            >
              <Terminal className="w-4 h-4 text-accent-cyan" />
              <span className="font-mono text-xs text-accent-cyan font-medium tracking-wide">
                Hi, I&apos;m
              </span>
            </motion.div>

            {/* Name Headline with Dynamic Multi-layer Gradient */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-6xl lg:text-7xl font-heading font-extrabold text-foreground-heading tracking-tight mb-4"
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
              className="h-10 sm:h-12 flex items-center justify-center lg:justify-start mb-6"
            >
              <span className="font-mono text-base sm:text-2xl text-accent-violet font-semibold tracking-wide">
                {displayedText}
              </span>
              <span className="w-0.5 h-6 bg-accent-cyan ml-1 animate-pulse" />
            </motion.div>

            {/* Summary text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-2xl mx-auto lg:mx-0 text-foreground-muted text-sm sm:text-lg leading-relaxed mb-8"
            >
              Computer Science graduate proficient in building scalable full-stack web &amp; mobile applications with MERN, Next.js, and React Native. Focused on clean code and AI-driven solutions.
            </motion.p>

            {/* High-Tech Skill Pill Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-10"
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
                <Cpu className="w-3.5 h-3.5 text-accent-cyan" />
                <span>AI / ML Integrations</span>
              </span>
            </motion.div>

            {/* CTA Buttons & Quick Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 mb-8 w-full sm:w-auto"
            >
              <MagneticButton href="#projects">
                <div className="w-full sm:w-auto flex items-center justify-center space-x-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-accent-indigo to-accent-cyan text-white font-heading font-semibold text-sm shadow-glow hover:brightness-110 transition-all">
                  <FolderGit2 className="w-4 h-4" />
                  <span>View Projects</span>
                </div>
              </MagneticButton>

              <MagneticButton href="#contact">
                <div className="w-full sm:w-auto flex items-center justify-center space-x-2 px-7 py-3.5 rounded-xl bg-surface border border-surface-border text-foreground hover:border-accent-cyan hover:text-accent-cyan font-heading font-semibold text-sm transition-all backdrop-blur-sm">
                  <Mail className="w-4 h-4" />
                  <span>Get In Touch</span>
                </div>
              </MagneticButton>

              {/* Social Quick-Links Bar */}
              <div className="flex items-center justify-center space-x-2 pl-0 sm:pl-2 pt-2 sm:pt-0">
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
          </div>

          {/* Right Column: Premium Floating Glass Profile Card (Matching User Screenshot) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 flex justify-center [perspective:1000px] w-full"
          >
            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-sm rounded-3xl bg-surface/70 backdrop-blur-xl border border-surface-border p-6 sm:p-8 shadow-card-hover flex flex-col items-center justify-between text-center transition-all duration-300 hover:border-accent-cyan/80 group"
            >
              {/* Subtle Gradient Glow background on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-accent-cyan/10 via-transparent to-accent-indigo/10 opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Top Pill Badge: Available for new projects */}
              <div className="hero-available-badge relative inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-accent-emerald/10 border border-accent-emerald/30 text-xs font-mono text-accent-emerald mb-6 sm:mb-8 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
                <span className="hero-available-text">Available for new projects</span>
              </div>

              {/* Center Portrait Circle with Glowing Halo */}
              <div className="relative mb-6 sm:mb-8 group/photo">
                {/* Radar Ring Glow behind avatar */}
                <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-accent-indigo via-accent-cyan to-accent-violet opacity-75 blur-md group-hover/photo:opacity-100 animate-pulse transition-opacity" />

                {/* Circular Image Container */}
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden p-1.5 bg-gradient-to-tr from-accent-indigo to-accent-cyan border border-accent-cyan/40 shadow-glow">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/HASSAN.jpg"
                    alt="Muhammad Hassan Javed"
                    className="w-full h-full object-cover rounded-full group-hover/photo:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Bottom Pill Badge: 10+ projects delivered */}
              <div className="relative inline-flex items-center space-x-2 px-5 py-2 rounded-full bg-surface-hover/90 border border-accent-indigo/40 text-xs font-mono text-accent-cyan shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent-cyan" />
                <span className="font-semibold tracking-wide">10+ projects delivered</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex flex-col items-center mt-12"
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
