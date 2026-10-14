"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Server, Database, Smartphone, Layers } from "lucide-react";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiSupabase,
  SiMongodb,
  SiFirebase,
  SiCplusplus,
  SiWordpress,
  SiGit,
  SiExpo,
  SiHtml5,
  SiGithub,
  SiMysql,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { marqueeSkills, skillPillars, SkillPillar, SkillItem } from "@/data/skills";

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-5 h-5 text-accent-cyan" />,
  Server: <Server className="w-5 h-5 text-accent-indigo" />,
  Database: <Database className="skills-db-icon w-5 h-5 text-accent-emerald" />,
  Smartphone: <Smartphone className="w-5 h-5 text-accent-violet" />,
};

const brandIconMap: Record<string, React.ReactNode> = {
  SiNextdotjs: <SiNextdotjs className="w-4 h-4 text-white" />,
  SiReact: <SiReact className="w-4 h-4 text-[#61DAFB]" />,
  SiTypescript: <SiTypescript className="w-4 h-4 text-[#3178C6]" />,
  SiJavascript: <SiJavascript className="w-4 h-4 text-[#F7DF1E]" />,
  SiTailwindcss: <SiTailwindcss className="w-4 h-4 text-[#06B6D4]" />,
  SiNodedotjs: <SiNodedotjs className="w-4 h-4 text-[#339933]" />,
  SiExpress: <SiExpress className="w-4 h-4 text-[#E0E0E0]" />,
  SiSupabase: <SiSupabase className="w-4 h-4 text-[#3ECF8E]" />,
  SiMongodb: <SiMongodb className="w-4 h-4 text-[#47A248]" />,
  SiFirebase: <SiFirebase className="w-4 h-4 text-[#FFCA28]" />,
  SiCplusplus: <SiCplusplus className="w-4 h-4 text-[#00599C]" />,
  SiWordpress: <SiWordpress className="w-4 h-4 text-[#21759B]" />,
  SiGit: <SiGit className="w-4 h-4 text-[#F05032]" />,
  SiExpo: <SiExpo className="w-4 h-4 text-white" />,
  SiJava: <FaJava className="w-4 h-4 text-[#ED8B00]" />,
  SiHtml5: <SiHtml5 className="w-4 h-4 text-[#E34F26]" />,
  SiGithub: <SiGithub className="w-4 h-4 text-white" />,
  SiMysql: <SiMysql className="w-4 h-4 text-[#4479A1]" />,
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-background-dark relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-indigo/10 blur-3xl rounded-full pointer-events-none transform-gpu" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10"
        >
          <div className="flex items-center space-x-3">
            <span className="font-mono text-accent-indigo text-lg font-semibold">04.</span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground-heading tracking-tight">
              Skills &amp; Tech Stack
            </h2>
            <div className="h-[1px] bg-gradient-to-r from-accent-indigo/40 to-transparent w-24 hidden sm:block" />
          </div>

          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-surface/80 border border-surface-border text-xs font-mono text-foreground-muted backdrop-blur-md">
            <Layers className="w-3.5 h-3.5 text-accent-cyan" />
            <span>4 Core Engineering Domains</span>
          </div>
        </motion.div>

        {/* 1. Continuous Auto-Scrolling Tech Marquee */}
        <div className="relative mb-14 overflow-hidden rounded-2xl bg-surface/60 border border-surface-border py-4">
          {/* Gradient Masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-surface to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-surface to-transparent z-10" />

          {/* Marquee Track (repeated twice for seamless loop) */}
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] space-x-4">
            {[...marqueeSkills, ...marqueeSkills].map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-xl bg-surface-hover/80 border border-surface-border text-xs sm:text-sm font-mono text-foreground hover:border-accent-cyan/60 hover:shadow-glow-cyan transition-all shrink-0 cursor-default"
              >
                {item.iconName && brandIconMap[item.iconName] ? (
                  brandIconMap[item.iconName]
                ) : (
                  <span className="w-2 h-2 rounded-full bg-accent-cyan" />
                )}
                <span className="font-medium">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Four Engineering Pillars (Bento 2x2 Grid - Ambient Top-Rim Glow & Tactile Lift) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {skillPillars.map((pillar: SkillPillar, pIndex: number) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: pIndex * 0.1 }}
              className="skill-pillar-card relative p-5 sm:p-7 rounded-2xl bg-gradient-to-br from-surface via-surface to-accent-indigo/10 border border-surface-border hover:border-accent-cyan/70 hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between shadow-sm hover:-translate-y-1.5 overflow-hidden group"
            >
              {/* Signature Top-Rim Ambient Illumination Line */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-accent-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Ambient Corner Depth Glow on Hover */}
              <div className="absolute -bottom-14 -right-14 w-40 h-40 rounded-full bg-accent-cyan/10 blur-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Pillar Header */}
                <div className="flex items-start justify-between gap-3 mb-5 pb-4 border-b border-surface-border/70 group-hover:border-surface-border transition-colors">
                  <div className="flex items-center space-x-3.5">
                    <div className="pillar-header-icon w-11 h-11 rounded-xl bg-accent-indigo/15 border border-accent-indigo/35 text-accent-cyan flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-gradient-to-tr group-hover:from-accent-indigo group-hover:to-accent-cyan group-hover:text-white group-hover:shadow-glow-cyan transition-all duration-300 shadow-sm">
                      {iconMap[pillar.iconName] || <Cpu className="w-5 h-5" />}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground-heading group-hover:text-accent-cyan transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-foreground-muted mt-0.5 leading-relaxed">
                        {pillar.domainFocus}
                      </p>
                    </div>
                  </div>

                  <span className="pillar-counter-badge inline-flex items-center space-x-1.5 text-[11px] font-mono text-accent-cyan bg-surface-hover/80 px-3 py-1 rounded-full border border-surface-border shrink-0 hidden sm:inline-flex group-hover:border-accent-cyan/40 group-hover:bg-surface transition-all shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
                    <span>{pillar.skills.length} Skills</span>
                  </span>
                </div>

                {/* Tactile Skills Badges Grid (Enhanced tactile hover & micro-lift) */}
                <div className="flex flex-wrap gap-2.5 mb-6">
                  {pillar.skills.map((skill: SkillItem) => (
                    <div
                      key={skill.name}
                      className="skill-chip group/skill relative inline-flex items-center space-x-2.5 px-3.5 py-2 rounded-xl bg-surface-hover/65 border border-surface-border hover:border-accent-cyan/80 hover:bg-surface hover:-translate-y-1 hover:shadow-sm transition-all duration-200 cursor-default"
                    >
                      <div className="w-4 h-4 flex items-center justify-center shrink-0 transition-transform duration-200 group-hover/skill:scale-115">
                        {skill.iconName && brandIconMap[skill.iconName] ? (
                          brandIconMap[skill.iconName]
                        ) : (
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                        )}
                      </div>
                      <span className="text-xs sm:text-sm font-mono text-foreground-heading font-medium group-hover/skill:text-accent-cyan transition-colors whitespace-nowrap">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Real-World Application Highlight */}
              <div className="relative z-10 pt-3.5 border-t border-surface-border/60 group-hover:border-accent-cyan/30 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono transition-colors gap-2">
                <div className="flex items-center space-x-2 text-foreground-muted truncate mr-2">
                  <span className="text-accent-cyan font-bold shrink-0">Applied in:</span>
                  <span className="text-foreground font-medium truncate">{pillar.projectHighlight}</span>
                </div>
                <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-md bg-surface-hover/80 border border-surface-border text-accent-cyan text-[11px] font-semibold shrink-0 group-hover:border-accent-cyan/40 transition-colors w-fit">
                  Production Stack
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
