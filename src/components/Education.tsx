"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, School, Calendar, MapPin } from "lucide-react";

const educationItems = [
  {
    id: "degree",
    type: "Degree",
    title: "BS Computer Science",
    institution: "University of Central Punjab (UCP)",
    period: "2022 – 2026",
    location: "Lahore, Pakistan",
    description: "Specializing in Full-Stack Software Engineering, Mobile Applications, Data Structures, and Machine Learning.",
    icon: <GraduationCap className="w-6 h-6 text-accent-indigo" />,
  },
  {
    id: "hssc",
    type: "Higher Secondary",
    title: "FSc Pre-Engineering",
    institution: "Crescent College",
    period: "2020 – 2022",
    location: "Lahore, Pakistan",
    description: "Strong foundation in Mathematics, Physics, and analytical problem-solving.",
    icon: <School className="w-6 h-6 text-accent-cyan" />,
  },
  {
    id: "cert",
    type: "Honor / Certification",
    title: "Speed Programming Competition 2025",
    institution: "University of Central Punjab",
    period: "2025",
    location: "Lahore, Pakistan",
    description: "Awarded certification for algorithmic problem solving and speed programming under pressure.",
    icon: <Award className="w-6 h-6 text-accent-emerald" />,
  },
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
          className="flex items-center space-x-3 mb-16"
        >
          <span className="font-mono text-accent-indigo text-lg font-semibold">05.</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground-heading tracking-tight">
            Education &amp; Certifications
          </h2>
          <div className="h-[1px] bg-gradient-to-r from-accent-indigo/40 to-transparent flex-1 max-w-xs hidden sm:block" />
        </motion.div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="p-6 rounded-2xl bg-surface border border-surface-border flex flex-col justify-between hover:border-accent-indigo/60 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-surface-hover border border-surface-border group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-surface-border/50 text-accent-violet border border-surface-border">
                    {item.type}
                  </span>
                </div>

                <h3 className="text-lg font-heading font-bold text-foreground-heading group-hover:text-accent-cyan transition-colors mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-foreground mb-4">
                  {item.institution}
                </p>
                <p className="text-xs text-foreground-muted leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-surface-border/60 flex items-center justify-between text-xs font-mono text-foreground-muted">
                <span className="flex items-center space-x-1">
                  <Calendar className="w-3.5 h-3.5 text-accent-indigo" />
                  <span>{item.period}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5 text-accent-cyan" />
                  <span>{item.location}</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
