"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Play, ExternalLink, Github } from "lucide-react";
import { Project } from "@/data/projects";
import { VideoModal } from "./VideoModal";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 3D Tilt Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative flex flex-col justify-between rounded-2xl bg-surface border border-surface-border p-6 transition-all duration-300 hover:border-accent-cyan/80 hover:shadow-card-hover"
      >
        {/* Subtle Gradient Glow background on hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-indigo/10 via-transparent to-accent-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div>
          {/* Card Top Row: Category Tag & Watch Demo Trigger */}
          <div className="flex items-center justify-between mb-4">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-mono bg-surface-border/60 text-accent-cyan border border-surface-border">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
              <span>{project.featured ? "Featured Project" : "Client Project"}</span>
            </span>

            {/* WATCH DEMO BUTTON */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-heading font-semibold bg-background-dark border border-accent-cyan/50 text-accent-cyan hover:bg-accent-cyan hover:text-background-dark transition-all shadow-sm group/btn"
              title="Watch Video Demo Walkthrough"
            >
              <Play className="w-3 h-3 fill-current group-hover/btn:scale-110 transition-transform" />
              <span>Watch Demo</span>
            </button>
          </div>

          {/* Title & Subtitle */}
          <h3 className="text-xl font-heading font-bold text-foreground-heading group-hover:text-accent-cyan transition-colors mb-1">
            {project.title}
          </h3>
          <p className="text-xs font-mono text-accent-violet mb-3">{project.subtitle}</p>

          {/* Description */}
          <p className="text-sm text-foreground-muted mb-4 leading-relaxed">
            {project.description}
          </p>

          {/* Highlights */}
          <ul className="mb-6 space-y-1.5">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-start text-xs text-foreground/90 font-mono">
                <span className="mr-2 text-accent-cyan">▹</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer: Tech Stack Badges & External Links */}
        <div className="pt-4 border-t border-surface-border/60 flex items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-surface-hover/90 text-foreground-muted border border-surface-border/50"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-2 shrink-0">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-foreground-muted hover:text-accent-cyan hover:bg-surface-border transition-colors"
                aria-label="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-foreground-muted hover:text-accent-cyan hover:bg-surface-border transition-colors"
                aria-label="Live Demo Website"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </motion.div>

      {/* Video Lightbox Modal */}
      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoId={project.videoId}
        title={project.title}
      />
    </>
  );
};
