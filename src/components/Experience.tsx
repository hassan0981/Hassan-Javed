"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react";
import { experienceData } from "@/data/experience";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-background-dark relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-3 mb-16"
        >
          <span className="font-mono text-accent-indigo text-lg font-semibold">02.</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground-heading tracking-tight">
            Work Experience
          </h2>
          <div className="h-[1px] bg-gradient-to-r from-accent-indigo/40 to-transparent flex-1 max-w-xs hidden sm:block" />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-surface-border space-y-12">
          {experienceData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Timeline Node Icon */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-surface border-2 border-accent-indigo flex items-center justify-center text-accent-cyan shadow-glow group-hover:border-accent-cyan group-hover:scale-110 transition-all">
                <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>

              {/* Experience Card */}
              <div className="rounded-2xl bg-surface border border-surface-border p-6 sm:p-8 hover:border-accent-indigo/60 transition-all shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 pb-4 border-b border-surface-border/60">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-foreground-heading group-hover:text-accent-cyan transition-colors">
                      {item.role}
                    </h3>
                    <div className="text-sm font-mono text-accent-violet mt-0.5">
                      {item.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-foreground-muted mt-2 sm:mt-0">
                    <span className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-surface-border/50">
                      <Calendar className="w-3.5 h-3.5 text-accent-indigo" />
                      <span>{item.period}</span>
                    </span>
                    <span className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-surface-border/50">
                      <MapPin className="w-3.5 h-3.5 text-accent-cyan" />
                      <span>{item.location}</span>
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2 mb-4">
                  {item.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start text-xs sm:text-sm text-foreground/90 font-mono">
                      <CheckCircle className="w-4 h-4 text-accent-cyan shrink-0 mr-2.5 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-surface-hover text-accent-cyan border border-surface-border/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
