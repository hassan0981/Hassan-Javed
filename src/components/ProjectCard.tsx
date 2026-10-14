"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Play, ExternalLink, Globe, Video } from "lucide-react";
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

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), { stiffness: 300, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), { stiffness: 300, damping: 20 });

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

  const videoThumbnail = project.videoId
    ? `https://img.youtube.com/vi/${project.videoId}/hqdefault.jpg`
    : null;

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
        onClick={() => setIsModalOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsModalOpen(true);
          }
        }}
        role="button"
        tabIndex={0}
        aria-label={`View ${project.title} video demo and details`}
        className="project-feature-card group relative flex flex-col justify-between rounded-2xl bg-surface border border-surface-border p-4 sm:p-5 transition-all duration-300 hover:border-accent-cyan/80 hover:shadow-card-hover hover:-translate-y-1.5 overflow-hidden cursor-pointer select-none"
      >
        {/* Signature Top-Rim Ambient Illumination Line */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-accent-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Corner Ambient Glow on Hover */}
        <div className="absolute -bottom-14 -right-14 w-40 h-40 rounded-full bg-accent-cyan/10 blur-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div>
          {/* Card Top Row: Category Tag & Status */}
          <div className="flex items-center justify-between mb-3">
            <span className="project-category-badge inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono bg-surface-hover/80 text-accent-cyan border border-surface-border">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
              <span>{project.categoryTag || (project.featured ? "Featured Project" : "Client Project")}</span>
            </span>

            {project.liveUrl && (
              <span className="project-live-tag inline-flex items-center space-x-1 text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                <Globe className="w-3 h-3 text-emerald-400" />
                <span>Live Site</span>
              </span>
            )}
          </div>

          {/* HIGH-VISIBILITY VIDEO POSTER THUMBNAIL FRAME */}
          <div className="relative w-full h-44 sm:h-48 mb-3.5 rounded-xl overflow-hidden bg-background-dark border border-surface-border group/thumbnail shadow-md">
            {videoThumbnail && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={videoThumbnail}
                alt={`${project.title} Video Demo`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
              />
            )}

            {/* Prominent "Video Demo Attached" Top Badge */}
            <div className="absolute top-2.5 left-2.5 z-10">
              <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-black/80 backdrop-blur-md text-white border border-white/20 shadow-md">
                <Video className="w-3 h-3 text-accent-cyan shrink-0" />
                <span>Video Demo Attached</span>
              </span>
            </div>

            {/* Dark Overlay with Pulsing Play Button */}
            <div className="absolute inset-0 bg-background-dark/45 group-hover:bg-background-dark/25 transition-colors flex flex-col items-center justify-center p-3">
              <div className="relative p-3.5 rounded-full bg-accent-cyan/95 text-background-dark shadow-glow group-hover:scale-115 transition-transform duration-300">
                <Play className="w-5 h-5 fill-current translate-x-0.5" />
                <span className="animate-ping absolute inset-0 rounded-full bg-accent-cyan opacity-40" />
              </div>
              <span className="mt-2.5 text-[11px] font-heading font-bold text-white tracking-wider uppercase drop-shadow-md bg-black/85 px-3 py-1 rounded-full border border-white/20 group-hover:border-accent-cyan/60 group-hover:bg-black/95 transition-all">
                ▶ Click to Watch Demo &amp; Case Study
              </span>
            </div>
          </div>

          {/* Title & Subtitle */}
          <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground-heading group-hover:text-accent-cyan transition-colors mb-0.5">
            {project.title}
          </h3>
          <p className="text-xs font-mono text-accent-violet font-medium">{project.subtitle}</p>
          {project.timeline && (
            <p className="text-[11px] font-mono text-foreground-muted mt-0.5">{project.timeline}</p>
          )}

          {/* Quick Impact Highlights (Clean & Not Wordy) */}
          {project.cardPills && project.cardPills.length > 0 && (
            <div className="space-y-1.5 my-3 pt-2 border-t border-surface-border/60">
              {project.cardPills.map((pill, i) => (
                <div key={i} className="flex items-center text-xs font-mono text-foreground-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mr-2 shrink-0" />
                  <span className="truncate">{pill}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer: Tech Stack Badges & Prominent Action Button */}
        <div className="pt-3 border-t border-surface-border/60 space-y-2.5">
          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded text-[10px] font-mono bg-surface-hover text-foreground-muted border border-surface-border/50"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* PROMINENT DIRECT ACTION BUTTONS */}
          <div className="flex items-center gap-2 pt-1">
            {/* Watch Demo & Details Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(true);
              }}
              className="project-cta-btn flex-1 inline-flex items-center justify-center space-x-1.5 px-3 py-2.5 rounded-xl text-xs font-heading font-bold bg-gradient-to-r from-accent-indigo to-accent-cyan text-white shadow-glow hover:brightness-110 transition-all"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Watch Demo &amp; Details</span>
            </button>

            {/* Live Website Button */}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="project-live-btn inline-flex items-center justify-center p-2.5 rounded-xl bg-surface border border-accent-cyan/60 text-accent-cyan hover:bg-accent-cyan hover:text-white transition-all shadow-sm"
                title="Visit Live Website"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>

          {/* Subtle Click Anywhere Indicator */}
          <div className="text-[10px] font-mono text-center text-foreground-muted/70 group-hover:text-accent-cyan transition-colors">
            ✦ Click card anywhere to view video &amp; case study
          </div>
        </div>
      </motion.div>

      {/* Expanded Dual-Panel Video & Details Lightbox Modal */}
      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={project}
      />
    </>
  );
};
