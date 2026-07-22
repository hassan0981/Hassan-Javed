"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { projectsData } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-background-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-16"
        >
          <div className="flex items-center space-x-3">
            <span className="font-mono text-accent-indigo text-lg font-semibold">03.</span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground-heading tracking-tight">
              Featured Projects
            </h2>
            <div className="h-[1px] bg-gradient-to-r from-accent-indigo/40 to-transparent w-24 hidden sm:block" />
          </div>

          {/* EYE-CATCHING VIDEO DEMO NOTICE BADGE */}
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-accent-cyan bg-surface/80 border border-accent-cyan/40 px-4 py-2 rounded-full shadow-glow backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-cyan" />
            </span>
            <Play className="w-3.5 h-3.5 text-accent-cyan fill-current" />
            <span>Click &quot;Watch Demo&quot; on any card to view video walkthrough</span>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
