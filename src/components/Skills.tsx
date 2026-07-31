"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Code, Server, Database, Smartphone, Wrench, Layers, BookOpen, RotateCw, Trophy } from "lucide-react";
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
import { skillCategoryCards, SkillCategoryCard, SkillItem } from "@/data/skills";

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-5 h-5 text-accent-cyan" />,
  Server: <Server className="w-5 h-5 text-accent-indigo" />,
  Database: <Database className="w-5 h-5 text-accent-emerald" />,
  Smartphone: <Smartphone className="w-5 h-5 text-accent-violet" />,
  Code: <Code className="w-5 h-5 text-sky-400" />,
  Wrench: <Wrench className="w-5 h-5 text-pink-400" />,
  Layers: <Layers className="w-5 h-5 text-teal-400" />,
};

const brandIconMap: Record<string, React.ReactNode> = {
  SiNextdotjs: <SiNextdotjs className="w-3.5 h-3.5 text-white" />,
  SiReact: <SiReact className="w-3.5 h-3.5 text-[#61DAFB]" />,
  SiTypescript: <SiTypescript className="w-3.5 h-3.5 text-[#3178C6]" />,
  SiJavascript: <SiJavascript className="w-3.5 h-3.5 text-[#F7DF1E]" />,
  SiTailwindcss: <SiTailwindcss className="w-3.5 h-3.5 text-[#06B6D4]" />,
  SiNodedotjs: <SiNodedotjs className="w-3.5 h-3.5 text-[#339933]" />,
  SiExpress: <SiExpress className="w-3.5 h-3.5 text-[#E0E0E0]" />,
  SiSupabase: <SiSupabase className="w-3.5 h-3.5 text-[#3ECF8E]" />,
  SiMongodb: <SiMongodb className="w-3.5 h-3.5 text-[#47A248]" />,
  SiFirebase: <SiFirebase className="w-3.5 h-3.5 text-[#FFCA28]" />,
  SiCplusplus: <SiCplusplus className="w-3.5 h-3.5 text-[#00599C]" />,
  SiWordpress: <SiWordpress className="w-3.5 h-3.5 text-[#21759B]" />,
  SiGit: <SiGit className="w-3.5 h-3.5 text-[#F05032]" />,
  SiExpo: <SiExpo className="w-3.5 h-3.5 text-white" />,
  SiJava: <FaJava className="w-3.5 h-3.5 text-[#ED8B00]" />,
  SiHtml5: <SiHtml5 className="w-3.5 h-3.5 text-[#E34F26]" />,
  SiGithub: <SiGithub className="w-3.5 h-3.5 text-white" />,
  SiMysql: <SiMysql className="w-3.5 h-3.5 text-[#4479A1]" />,
};

const filterTabs = [
  "All Stacks",
  "Programming Languages",
  "Front-end Development",
  "Backend & Databases",
  "Web Development / Stacks",
  "Mobile App Development",
  "Tools & Version Control",
];

export const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All Stacks");
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const toggleFlip = (id: string) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredCards =
    activeFilter === "All Stacks"
      ? skillCategoryCards
      : skillCategoryCards.filter((card) => card.title === activeFilter);

  return (
    <section id="skills" className="py-24 bg-background-dark relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[45rem] bg-accent-indigo/10 blur-[170px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8"
        >
          <div className="flex items-center space-x-3">
            <span className="font-mono text-accent-indigo text-lg font-semibold">04.</span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground-heading tracking-tight">
              Skills &amp; Tech Stack
            </h2>
            <div className="h-[1px] bg-gradient-to-r from-accent-indigo/40 to-transparent w-24 hidden sm:block" />
          </div>

          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-surface/80 border border-surface-border text-xs font-mono text-foreground-muted backdrop-blur-md">
            <BookOpen className="w-4 h-4 text-accent-cyan" />
            <span>Hover / Tap Card to Flip &amp; Scroll Details</span>
          </div>
        </motion.div>

        {/* Filter Category Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <div className="flex items-center space-x-1.5 text-xs font-mono text-foreground-muted mr-2">
            <Layers className="w-3.5 h-3.5 text-accent-cyan" />
            <span>Filter:</span>
          </div>

          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all duration-300 ${
                activeFilter === tab
                  ? "bg-gradient-to-r from-accent-indigo to-accent-cyan text-white font-semibold shadow-glow"
                  : "bg-surface border border-surface-border text-foreground-muted hover:text-foreground hover:bg-surface-hover"
              }`}
            >
              {tab === "All Stacks" ? "All Stacks (6 Cards)" : tab}
            </button>
          ))}
        </div>

        {/* 3D Flip Cards Grid with Inner Custom Scrollbar */}
        <motion.div
          layout
          className={`grid gap-6 ${
            filteredCards.length === 1
              ? "grid-cols-1 max-w-xl mx-auto"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          <AnimatePresence mode="popLayout">
            {filteredCards.map((category: SkillCategoryCard) => {
              const isFlipped = !!flippedCards[category.id];

              return (
                <motion.div
                  key={category.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className="w-full h-[310px] [perspective:1000px] cursor-pointer group"
                  onClick={() => toggleFlip(category.id)}
                >
                  <div
                    className={`relative w-full h-full duration-700 [transform-style:preserve-3d] transition-transform ${
                      isFlipped ? "[transform:rotateY(180deg)]" : "group-hover:[transform:rotateY(180deg)]"
                    }`}
                  >
                    {/* FRONT OF THE CARD (Clean Tech Overview) */}
                    <div className="absolute inset-0 [backface-visibility:hidden] flex flex-col justify-between p-5 rounded-2xl bg-surface border border-surface-border hover:border-accent-cyan/80 transition-colors shadow-sm">
                      <div>
                        {/* Header Row */}
                        <div className="flex items-center space-x-3 mb-4 pb-3 border-b border-surface-border/60">
                          <div className="p-2.5 rounded-xl bg-surface-hover border border-surface-border">
                            {iconMap[category.iconName] || <Cpu className="w-5 h-5 text-accent-cyan" />}
                          </div>
                          <div>
                            <h3 className="text-base font-heading font-bold text-foreground-heading group-hover:text-accent-cyan transition-colors">
                              {category.title}
                            </h3>
                            <span className="text-[11px] font-mono text-foreground-muted">
                              {category.skills.length} Core Technologies
                            </span>
                          </div>
                        </div>

                        {/* Tech Badges Cloud */}
                        <div className="flex flex-wrap gap-2 pt-1">
                          {category.skills.map((skill: SkillItem) => (
                            <span
                              key={skill.name}
                              className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-lg text-xs font-mono bg-surface-hover/90 border border-surface-border/60 text-foreground"
                            >
                              {skill.iconName && brandIconMap[skill.iconName] ? (
                                brandIconMap[skill.iconName]
                              ) : (
                                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                              )}
                              <span>{skill.name}</span>
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Callout */}
                      <div className="pt-2.5 border-t border-surface-border/50 flex items-center justify-between text-[11px] font-mono text-accent-cyan">
                        <span className="flex items-center space-x-1">
                          <RotateCw className="w-3 h-3 animate-spin-slow" />
                          <span>Flip for Proficiency Levels</span>
                        </span>
                        <span>180° ➔</span>
                      </div>
                    </div>

                    {/* BACK OF THE CARD (Flipped Proficiency View with Intermediate & Beginner Badges) */}
                    <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-between p-5 rounded-2xl bg-surface/95 border border-accent-cyan/80 shadow-glow overflow-hidden">
                      <div>
                        {/* Header */}
                        <div className="flex items-center justify-between mb-3 pb-2 border-b border-surface-border/80">
                          <h4 className="text-sm font-heading font-bold text-foreground-heading">
                            {category.title} Levels
                          </h4>
                          <span className="text-[10px] font-mono text-accent-emerald bg-accent-emerald/10 px-2 py-0.5 rounded border border-accent-emerald/30">
                            Proficiency
                          </span>
                        </div>

                        {/* Scrollable Inner List */}
                        <div className="max-h-[175px] overflow-y-auto space-y-1.5 pr-1.5 custom-scrollbar">
                          {category.skills.map((skill: SkillItem) => (
                            <div
                              key={skill.name}
                              className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-surface-hover/80 border border-surface-border/60 text-xs font-mono"
                            >
                              <div className="flex items-center space-x-2 truncate mr-2">
                                {skill.iconName && brandIconMap[skill.iconName] ? (
                                  brandIconMap[skill.iconName]
                                ) : (
                                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan shrink-0" />
                                )}
                                <span className="text-foreground text-[11px] font-medium truncate">
                                  {skill.name}
                                </span>
                              </div>

                              <span
                                className={`px-2 py-0.5 rounded text-[9px] font-semibold shrink-0 ${
                                  skill.level === "Intermediate"
                                    ? "bg-accent-cyan/20 text-accent-cyan border border-accent-cyan/40"
                                    : "bg-amber-500/20 text-amber-400 border border-amber-500/40"
                                }`}
                              >
                                {skill.level}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Single Line Project Highlight */}
                      <div className="pt-2 border-t border-surface-border/50 flex items-center justify-between text-[10px] font-mono">
                        <span className="text-accent-violet flex items-center space-x-1 truncate mr-2">
                          <Trophy className="w-3 h-3 text-accent-violet shrink-0" />
                          <span className="truncate">{category.projectHighlight}</span>
                        </span>
                        <span className="text-foreground-muted shrink-0">← Front</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
