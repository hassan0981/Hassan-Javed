"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ExternalLink, Building2, Globe } from "lucide-react";
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
          className="flex items-center space-x-3 mb-14"
        >
          <span className="font-mono text-accent-indigo text-lg font-semibold">02.</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground-heading tracking-tight">
            Work Experience
          </h2>
          <div className="h-[1px] bg-gradient-to-r from-accent-indigo/40 to-transparent flex-1 max-w-xs hidden sm:block" />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-surface-border space-y-12 ml-2 sm:ml-4">
          {experienceData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Timeline Node Icon */}
              <div className="absolute -left-[15px] sm:-left-[19px] top-1.5 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-surface border-2 border-accent-indigo flex items-center justify-center text-accent-cyan shadow-glow group-hover:border-accent-cyan group-hover:scale-110 transition-all">
                <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>

              {/* Experience Card */}
              <div className="rounded-2xl bg-surface border border-surface-border p-5 sm:p-8 hover:border-accent-indigo/60 transition-all duration-300 shadow-sm">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-6 pb-5 border-b border-surface-border/70">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground-heading group-hover:text-accent-cyan transition-colors">
                      {item.role}
                    </h3>

                    <div className="flex flex-wrap items-center gap-2.5 mt-2">
                      <span className="text-sm font-semibold text-foreground flex items-center space-x-1.5">
                        <Building2 className="w-4 h-4 text-accent-cyan" />
                        <span>{item.company}</span>
                      </span>

                      <span className="text-surface-border font-mono">•</span>

                      {/* Role Type Badge */}
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium ${
                          item.typeBadge === "Commercial Client Delivery"
                            ? "bg-accent-indigo/20 text-accent-cyan border border-accent-indigo/50"
                            : "bg-accent-emerald/15 text-accent-emerald border border-accent-emerald/30"
                        }`}
                      >
                        {item.typeBadge}
                      </span>
                    </div>
                  </div>

                  {/* Metadata Pills */}
                  <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-foreground-muted">
                    <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-surface-hover border border-surface-border">
                      <Calendar className="w-3.5 h-3.5 text-accent-indigo" />
                      <span>{item.period}</span>
                    </span>

                    <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-surface-hover border border-surface-border">
                      <MapPin className="w-3.5 h-3.5 text-accent-cyan" />
                      <span>{item.location}</span>
                    </span>
                  </div>
                </div>

                {/* Live Client Deliverables (Eye-Catching Production Cards in Dark, Harmonized in Light) */}
                {item.liveLinks && item.liveLinks.length > 0 && (
                  <div className="client-projects-box relative mb-7 p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-b from-surface-hover/90 to-surface/90 border border-accent-indigo/50 shadow-lg shadow-black/20 overflow-hidden">
                    {/* Subtle ambient glow on top border */}
                    <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-accent-cyan/60 to-transparent" />

                    {/* Section Header */}
                    <div className="flex items-center justify-between mb-3.5 sm:mb-4">
                      <div className="flex items-center space-x-2.5">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="client-projects-beacon-ping animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-emerald opacity-75" />
                          <span className="client-projects-beacon-dot relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-emerald" />
                        </span>
                        <span className="text-xs font-mono font-bold text-foreground-heading uppercase tracking-wider">
                          Shipped Live Client Projects
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-foreground-muted hidden sm:inline-block">
                        Click card to visit production site ↗
                      </span>
                    </div>

                    {/* Dual Vibrant Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                      {item.liveLinks.map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="client-project-card group/site relative p-3 sm:p-5 rounded-xl border transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between bg-gradient-to-br from-surface via-surface to-accent-emerald/20 border-accent-emerald/40 hover:border-accent-emerald hover:shadow-glow"
                        >
                          <div>
                            {/* Card Top: Icon, Title & Live Status Pill */}
                            <div className="flex items-start justify-between gap-1.5 sm:gap-2 mb-2.5">
                              <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
                                <div className="live-globe-icon w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover/site:scale-105 bg-accent-emerald/15 border border-accent-emerald/35 text-accent-emerald group-hover/site:bg-accent-emerald group-hover/site:text-background-dark">
                                  <Globe className="w-4 h-4" />
                                </div>
                                <div className="min-w-0 flex-1 pr-1">
                                  <h4 className="font-heading font-bold text-sm sm:text-base text-foreground-heading group-hover/site:text-accent-emerald transition-colors leading-tight truncate">
                                    {link.label}
                                  </h4>
                                  <span className="text-[10px] sm:text-[11px] font-mono text-foreground-muted block mt-0.5 truncate">
                                    {link.url.replace("https://", "")}
                                  </span>
                                </div>
                              </div>

                              <span className="live-status-pill inline-flex items-center space-x-1 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-mono font-semibold bg-accent-emerald/15 text-accent-emerald border border-accent-emerald/35 shrink-0">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald animate-pulse" />
                                <span>LIVE</span>
                              </span>
                            </div>

                            {link.subtitle && (
                              <p className="text-xs text-foreground-muted leading-relaxed mb-3 sm:mb-4 pl-0.5">
                                {link.subtitle}
                              </p>
                            )}
                          </div>

                          {/* Bottom metadata & CTA Button */}
                          <div className="pt-2.5 sm:pt-3 border-t border-surface-border/60 flex items-center justify-between gap-2 text-xs">
                            <span className="font-mono text-[10px] sm:text-[11px] text-foreground-muted px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-surface-hover/80 border border-surface-border truncate max-w-[55%] sm:max-w-none">
                              {link.tech}
                            </span>
                            <span className="live-visit-btn inline-flex items-center space-x-1 sm:space-x-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-mono font-semibold transition-all duration-300 shadow-sm shrink-0 whitespace-nowrap bg-accent-emerald/15 text-accent-emerald border border-accent-emerald/40 group-hover/site:bg-accent-emerald group-hover/site:text-background-dark">
                              <span>Visit Site</span>
                              <ExternalLink className="w-3 h-3 group-hover/site:translate-x-0.5 group-hover/site:-translate-y-0.5 transition-transform" />
                            </span>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Bullet Points */}
                <ul className="space-y-3 mb-6">
                  {item.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start text-sm text-foreground-muted leading-relaxed">
                      <span className="w-2 h-2 rounded-full bg-accent-cyan mt-2 mr-3 shrink-0 ring-4 ring-accent-cyan/15" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Pills */}
                <div className="pt-4 border-t border-surface-border/60 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-foreground-muted mr-1">Technologies:</span>
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-surface-hover text-foreground border border-surface-border/80"
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
