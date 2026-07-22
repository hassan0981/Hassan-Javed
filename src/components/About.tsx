"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code, Terminal, CheckCircle2 } from "lucide-react";
import { CountUp } from "./ui/CountUp";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-background-dark relative border-t border-surface-border/50">
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
          <div className="h-[1px] bg-surface-border flex-1 max-w-xs hidden sm:block" />
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
            <div className="p-6 rounded-2xl bg-surface border border-surface-border relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Terminal className="w-24 h-24 text-accent-cyan" />
              </div>

              <h3 className="text-xl font-heading font-semibold text-foreground-heading mb-4 flex items-center space-x-2">
                <Code className="w-5 h-5 text-accent-cyan" />
                <span>Full-Stack Developer &amp; CS Graduate</span>
              </h3>

              <p className="text-foreground-muted leading-relaxed text-sm sm:text-base mb-4">
                I am a Computer Science Graduate from the{" "}
                <strong className="text-foreground">University of Central Punjab (UCP)</strong> with a passion for architecting responsive, high-performance web and mobile applications.
              </p>

              <p className="text-foreground-muted leading-relaxed text-sm sm:text-base mb-4">
                My core experience is in <strong className="text-accent-cyan">MERN Stack and React Native Apps</strong>, along with relative modern tech stacks. I also enjoy integrating Machine Learning models into web systems (such as spam detection and AI-driven influencer analytics).
              </p>

              {/* "Currently" Badge Line */}
              <div className="mt-6 pt-4 border-t border-surface-border/80 flex items-start space-x-3 bg-surface-hover/50 p-3 rounded-xl border border-surface-border">
                <CheckCircle2 className="w-5 h-5 text-accent-emerald shrink-0 mt-0.5" />
                <p className="text-xs font-mono text-foreground-muted">
                  <strong className="text-foreground">Currently:</strong> Computer Science Graduate @ UCP, freelancing full-stack web/mobile applications and expanding AI integrations.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Metrics & Stats Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {/* Stat 1: 2+ Years Experience */}
            <div className="p-6 rounded-2xl bg-surface border border-surface-border flex flex-col justify-between hover:border-accent-indigo/60 transition-colors">
              <Briefcase className="w-6 h-6 text-accent-indigo mb-4" />
              <div>
                <div className="text-3xl sm:text-4xl font-heading font-bold text-foreground-heading text-accent-indigo">
                  <CountUp end={2} suffix="+" />
                </div>
                <div className="text-xs font-mono text-foreground-muted mt-1">
                  Years Experience
                </div>
              </div>
            </div>

            {/* Stat 2: 10+ Projects Done */}
            <div className="p-6 rounded-2xl bg-surface border border-surface-border flex flex-col justify-between hover:border-accent-cyan/60 transition-colors">
              <Code className="w-6 h-6 text-accent-cyan mb-4" />
              <div>
                <div className="text-3xl sm:text-4xl font-heading font-bold text-foreground-heading text-accent-cyan">
                  <CountUp end={10} suffix="+" />
                </div>
                <div className="text-xs font-mono text-foreground-muted mt-1">
                  Projects Done
                </div>
              </div>
            </div>

            {/* Stat 3: 5+ Tech Stacks */}
            <div className="p-6 rounded-2xl bg-surface border border-surface-border flex flex-col justify-between hover:border-accent-violet/60 transition-colors">
              <Terminal className="w-6 h-6 text-accent-violet mb-4" />
              <div>
                <div className="text-3xl sm:text-4xl font-heading font-bold text-foreground-heading text-accent-violet">
                  <CountUp end={5} suffix="+" />
                </div>
                <div className="text-xs font-mono text-foreground-muted mt-1">
                  Tech Stacks
                </div>
              </div>
            </div>

            {/* Stat 4: CS Graduated */}
            <div className="p-6 rounded-2xl bg-surface border border-surface-border flex flex-col justify-between hover:border-accent-emerald/60 transition-colors">
              <GraduationCap className="w-6 h-6 text-accent-emerald mb-4" />
              <div>
                <div className="text-xl sm:text-2xl font-heading font-bold text-foreground-heading text-accent-emerald">
                  Graduated
                </div>
                <div className="text-xs font-mono text-foreground-muted mt-1">
                  BS CS @ UCP
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
