"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Trophy, School, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const coursework = [
  "Data Structures & Algorithms",
  "Database Management Systems",
  "Object-Oriented Programming (OOP)",
  "Web & Mobile App Development",
  "Operating Systems",
  "Software Engineering & Design",
];

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-background-dark relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-3 mb-14"
        >
          <span className="font-mono text-accent-indigo text-lg font-semibold">05.</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground-heading tracking-tight">
            Education &amp; Certifications
          </h2>
          <div className="h-[1px] bg-gradient-to-r from-accent-indigo/40 to-transparent flex-1 max-w-xs hidden sm:block" />
        </motion.div>

        {/* Option 1: Asymmetric Credential Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column (7 cols): Featured BS Computer Science Degree */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 rounded-2xl bg-surface border border-surface-border p-5 sm:p-8 flex flex-col justify-between hover:border-accent-indigo/60 transition-all duration-300 shadow-sm group"
          >
            <div>
              {/* Top Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-5 border-b border-surface-border/70">
                <div className="flex items-center space-x-3.5">
                  <div className="w-12 h-12 rounded-xl bg-accent-indigo/15 border border-accent-indigo/35 flex items-center justify-center text-accent-cyan group-hover:scale-105 transition-transform shrink-0">
                    <GraduationCap className="w-6 h-6 text-accent-cyan" />
                  </div>
                  <div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30 mb-1">
                      Bachelor of Science
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground-heading group-hover:text-accent-cyan transition-colors leading-tight">
                      BS Computer Science
                    </h3>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-foreground-muted">
                  <span className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-xl bg-surface-hover border border-surface-border">
                    <Calendar className="w-3.5 h-3.5 text-accent-indigo" />
                    <span>2022 – 2026</span>
                  </span>
                </div>
              </div>

              {/* Institution details */}
              <div className="mb-6">
                <h4 className="text-base font-semibold text-foreground mb-1">
                  University of Central Punjab (UCP)
                </h4>
                <p className="text-xs font-mono text-foreground-muted flex items-center space-x-1.5">
                  <MapPin className="w-3.5 h-3.5 text-accent-cyan shrink-0" />
                  <span>Lahore, Pakistan</span>
                </p>
                <p className="text-sm text-foreground-muted leading-relaxed mt-3">
                  Comprehensive 4-year degree covering theoretical computer science fundamentals, full-stack software architecture, and practical engineering principles.
                </p>
              </div>

              {/* Core Coursework & Engineering Foundations */}
              <div className="mb-6">
                <h5 className="text-xs font-mono font-bold text-foreground-heading uppercase tracking-wider mb-3">
                  Core Academic Fundamentals &amp; Modules:
                </h5>
                <div className="flex flex-wrap gap-2">
                  {coursework.map((course) => (
                    <span
                      key={course}
                      className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-mono bg-surface-hover/80 border border-surface-border text-foreground font-medium hover:border-accent-cyan/50 transition-colors"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent-cyan shrink-0" />
                      <span>{course}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer status */}
            <div className="pt-4 border-t border-surface-border/60 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-foreground-muted gap-1.5">
              <span>Higher Education Commission (HEC) Accredited</span>
              <span className="text-accent-cyan font-semibold">Undergraduate Degree</span>
            </div>
          </motion.div>

          {/* Right Column (5 cols): Stacked Cards for Honors & High School */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between gap-6"
          >
            {/* Top Card: Speed Programming Award */}
            <div className="award-honor-card p-6 rounded-2xl bg-gradient-to-br from-surface via-surface to-accent-emerald/20 border border-accent-emerald/40 hover:border-accent-emerald hover:shadow-glow transition-all duration-300 flex-1 flex flex-col justify-between group">
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="award-trophy-box w-10 h-10 rounded-xl bg-accent-emerald/15 border border-accent-emerald/35 flex items-center justify-center text-accent-emerald group-hover:scale-105 transition-transform shrink-0">
                      <Trophy className="w-5 h-5 text-accent-emerald" />
                    </div>
                    <div>
                      <span className="award-honor-badge inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-accent-emerald/15 text-accent-emerald border border-accent-emerald/30 mb-0.5">
                        Technical Honor
                      </span>
                      <h4 className="award-title text-base sm:text-lg font-heading font-bold text-foreground-heading group-hover:text-accent-emerald transition-colors leading-tight">
                        Speed Programming 2025
                      </h4>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-foreground-muted px-2.5 py-1 rounded-xl bg-surface-hover border border-surface-border shrink-0">
                    2025
                  </span>
                </div>

                <p className="text-xs font-mono text-foreground mb-2">
                  University of Central Punjab
                </p>
                <p className="text-xs text-foreground-muted leading-relaxed mb-4">
                  Awarded certification for rapid algorithmic problem solving, time-complexity optimization, and competitive coding in C++ under high-pressure constraints.
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {["C++", "DSA", "Problem Solving", "Competitive Coding"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-surface-hover border border-surface-border text-foreground-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 mt-4 border-t border-surface-border/50 flex items-center justify-between text-[11px] font-mono">
                <span className="text-foreground-muted">Algorithmic Mastery</span>
                <span className="award-certified-text text-accent-emerald font-semibold">Award Certified 🏆</span>
              </div>
            </div>

            {/* Bottom Card: FSc Pre-Engineering */}
            <div className="p-6 rounded-2xl bg-surface border border-surface-border hover:border-accent-cyan/60 transition-all duration-300 flex-1 flex flex-col justify-between group">
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-accent-cyan/15 border border-accent-cyan/35 flex items-center justify-center text-accent-cyan group-hover:scale-105 transition-transform shrink-0">
                      <School className="w-5 h-5 text-accent-cyan" />
                    </div>
                    <div>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-surface-hover text-foreground-muted border border-surface-border mb-0.5">
                        Higher Secondary
                      </span>
                      <h4 className="text-base sm:text-lg font-heading font-bold text-foreground-heading group-hover:text-accent-cyan transition-colors leading-tight">
                        FSc Pre-Engineering
                      </h4>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-foreground-muted px-2.5 py-1 rounded-xl bg-surface-hover border border-surface-border shrink-0">
                    2020 – 2022
                  </span>
                </div>

                <p className="text-xs font-mono text-foreground mb-2">
                  Crescent College • Lahore, Pakistan
                </p>
                <p className="text-xs text-foreground-muted leading-relaxed mb-4">
                  Rigorous academic foundation in advanced Mathematics, Physics, and analytical reasoning that underpins engineering problem solving.
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {["Advanced Mathematics", "Analytical Reasoning", "Physics"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-surface-hover border border-surface-border text-foreground-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 mt-4 border-t border-surface-border/50 flex items-center justify-between text-[11px] font-mono">
                <span className="text-foreground-muted">STEM Foundation</span>
                <span className="text-accent-cyan font-semibold">Completed</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
