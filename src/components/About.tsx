"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Layers,
  Smartphone,
  MapPin,
  CheckCircle2,
  Briefcase,
} from "lucide-react";
import { CountUp } from "./ui/CountUp";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-background-dark relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-3 mb-12"
        >
          <span className="font-mono text-accent-indigo text-lg font-semibold">01.</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground-heading tracking-tight">
            About Me
          </h2>
          <div className="h-[1px] bg-gradient-to-r from-accent-indigo/40 to-transparent flex-1 max-w-xs hidden sm:block" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Narrative Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-surface-border relative overflow-hidden shadow-sm">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 text-xs font-mono text-accent-cyan bg-surface-hover border border-surface-border px-3.5 py-1.5 rounded-full mb-5">
                <span className="w-2 h-2 rounded-full bg-accent-cyan" />
                <span>Full-Stack &amp; Mobile Engineer</span>
              </div>

              {/* Lead Headline */}
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground-heading leading-snug mb-5">
                Building production-ready web platforms and mobile apps that scale.
              </h3>

              {/* Body Text (Concise, punchy, not wordy) */}
              <div className="space-y-3.5 text-foreground-muted leading-relaxed text-sm sm:text-base">
                <p>
                  Computer Science graduate and <strong className="text-foreground">Full-Stack Developer</strong> with{" "}
                  <strong className="text-accent-cyan font-medium">1+ year of hands-on experience</strong> building
                  production-ready applications using{" "}
                  <strong className="text-foreground">React, Next.js, Node.js, and React Native</strong>.
                </p>

                <p>
                  Experienced in delivering real-world client projects, RESTful APIs, and responsive user interfaces with a solid{" "}
                  <strong className="text-foreground">MERN stack</strong> foundation across frontend, backend, databases, and mobile.
                </p>

                <p className="text-foreground font-medium pt-1">
                  Ready to bring strong problem-solving skills and practical development experience to a growth-oriented engineering team.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3 Clean Focus Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Pillar 1: Full-Stack Web with MERN & Next.js clearly mentioned */}
            <div className="p-5 sm:p-6 rounded-2xl bg-surface border border-surface-border hover:border-accent-indigo/60 transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-accent-indigo/15 border border-accent-indigo/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Layers className="w-5 h-5 text-accent-indigo" />
                </div>
                <div className="flex-1">
                  <h4 className="text-base font-heading font-semibold text-foreground-heading mb-1">
                    Full-Stack Web Development
                  </h4>
                  <p className="text-xs text-foreground-muted leading-relaxed mb-3">
                    Scalable, high-performance web applications built with Next.js App Router, React.js, Node.js, Express, and MongoDB.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {["Next.js", "React.js", "Node.js", "Express", "MongoDB"].map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-surface-hover border border-surface-border text-foreground-muted">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 2: Cross-Platform Mobile */}
            <div className="p-5 sm:p-6 rounded-2xl bg-surface border border-surface-border hover:border-accent-cyan/60 transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-accent-cyan/15 border border-accent-cyan/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Smartphone className="w-5 h-5 text-accent-cyan" />
                </div>
                <div className="flex-1">
                  <h4 className="text-base font-heading font-semibold text-foreground-heading mb-1">
                    Mobile App Development
                  </h4>
                  <p className="text-xs text-foreground-muted leading-relaxed mb-3">
                    Cross-platform iOS and Android apps with responsive native performance, intuitive UX, and clean state handling.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {["React Native", "Expo", "Android SDK", "Firebase"].map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-surface-hover border border-surface-border text-foreground-muted">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 3: Backend & Client Delivery */}
            <div className="about-pillar-3 p-5 sm:p-6 rounded-2xl bg-surface border border-surface-border hover:border-accent-emerald/60 transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="about-pillar-3-icon w-10 h-10 rounded-xl bg-accent-emerald/15 border border-accent-emerald/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Briefcase className="w-5 h-5 text-accent-emerald" />
                </div>
                <div className="flex-1">
                  <h4 className="text-base font-heading font-semibold text-foreground-heading mb-1">
                    Client Delivery &amp; Backend
                  </h4>
                  <p className="text-xs text-foreground-muted leading-relaxed mb-3">
                    Proven record shipping real commercial websites, RESTful APIs, and database solutions for live businesses and startups.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {["REST APIs", "Supabase", "PostgreSQL", "Tailwind CSS"].map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-surface-hover border border-surface-border text-foreground-muted">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Key Strengths Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4"
        >
          <div className="p-4 sm:p-5 rounded-2xl bg-surface border border-surface-border flex items-center space-x-3.5">
            <div className="text-2xl sm:text-3xl font-heading font-bold text-accent-indigo">
              <CountUp end={1} suffix="+" />
            </div>
            <div className="text-xs">
              <p className="font-semibold text-foreground">Year Experience</p>
              <p className="text-foreground-muted text-[11px]">Production &amp; client work</p>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-surface border border-surface-border flex items-center space-x-3.5">
            <div className="text-2xl sm:text-3xl font-heading font-bold text-accent-cyan">
              <CountUp end={100} suffix="%" />
            </div>
            <div className="text-xs">
              <p className="font-semibold text-foreground">Production Focus</p>
              <p className="text-foreground-muted text-[11px]">Clean, maintainable code</p>
            </div>
          </div>

          {/* Replaced Full Lifecycle with Lahore, Pakistan as requested */}
          <div className="p-4 sm:p-5 rounded-2xl bg-surface border border-surface-border flex items-center space-x-3.5">
            <div className="w-9 h-9 rounded-xl bg-accent-violet/15 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-accent-violet" />
            </div>
            <div className="text-xs">
              <p className="font-semibold text-foreground">Lahore, Pakistan</p>
              <p className="text-foreground-muted text-[11px]">Available Remote &amp; On-Site</p>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-surface border border-surface-border flex items-center space-x-3.5">
            <div className="about-metric-icon w-9 h-9 rounded-xl bg-accent-emerald/15 flex items-center justify-center shrink-0">
              <GraduationCap className="w-5 h-5 text-accent-emerald" />
            </div>
            <div className="text-xs">
              <p className="font-semibold text-foreground">BS Comp Science</p>
              <p className="text-foreground-muted text-[11px]">Univ. of Central Punjab (UCP)</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
