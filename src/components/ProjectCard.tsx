"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Play, ExternalLink, Globe } from "lucide-react";
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
        className="group relative flex flex-col justify-between rounded-2xl bg-surface border border-surface-border p-4 sm:p-5 transition-all duration-300 hover:border-accent-cyan/80 hover:shadow-card-hover overflow-hidden"
      >
        {/* Subtle Gradient Glow background on hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-indigo/10 via-transparent to-accent-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div>
          {/* Card Top Row: Category Tag & Status */}
          <div className="flex items-center justify-between mb-3">
            <span className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-surface-border/60 text-accent-cyan border border-surface-border">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
              <span>{project.featured ? "Featured Project" : "Client Project"}</span>
            </span>

            {project.liveUrl && (
              <span className="inline-flex items-center space-x-1 text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                <Globe className="w-3 h-3 text-emerald-400" />
                <span>Live Site</span>
              </span>
            )}
          </div>

          {/* HIGH-VISIBILITY VIDEO POSTER THUMBNAIL FRAME */}
          <div
            onClick={() => setIsModalOpen(true)}
            className="relative w-full h-44 mb-3 rounded-xl overflow-hidden bg-background-dark border border-surface-border group/thumbnail cursor-pointer shadow-md"
          >
            {videoThumbnail && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={videoThumbnail}
                alt={`${project.title} Video Demo`}
                className="w-full h-full object-cover group-hover/thumbnail:scale-105 transition-transform duration-500 brightness-90 group-hover/thumbnail:brightness-100"
              />
            )}

            {/* Dark Overlay with Pulsing Play Button */}
            <div className="absolute inset-0 bg-background-dark/50 group-hover/thumbnail:bg-background-dark/30 transition-colors flex flex-col items-center justify-center">
              <div className="relative p-3 rounded-full bg-accent-cyan/90 text-background-dark shadow-glow group-hover/thumbnail:scale-110 transition-transform">
                <Play className="w-5 h-5 fill-current translate-x-0.5" />
                <span className="animate-ping absolute inset-0 rounded-full bg-accent-cyan opacity-40" />
              </div>
              <span className="mt-2 text-[11px] font-heading font-bold text-white tracking-wider uppercase drop-shadow-md bg-background-dark/80 px-2.5 py-0.5 rounded-full border border-white/20">
                ▶ Watch Demo &amp; Overview
              </span>
            </div>
          </div>

          {/* Title & Subtitle */}
          <h3 className="text-lg font-heading font-bold text-foreground-heading group-hover:text-accent-cyan transition-colors mb-0.5">
            {project.title}
          </h3>
          <p className="text-xs font-mono text-accent-violet mb-3">{project.subtitle}</p>
        </div>

        {/* Footer: Tech Stack Badges & Prominent Action Button */}
        <div className="pt-3 border-t border-surface-border/60 space-y-2.5">
          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded text-[10px] font-mono bg-surface-hover text-foreground-muted border border-surface-border/40"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* PROMINENT DIRECT ACTION BUTTONS */}
          <div className="flex items-center gap-2 pt-1">
            {/* Watch Demo & Details Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex-1 inline-flex items-center justify-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-heading font-bold bg-gradient-to-r from-accent-indigo to-accent-cyan text-white shadow-glow hover:brightness-110 transition-all"
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
                className="inline-flex items-center justify-center p-2 rounded-xl bg-surface border border-accent-cyan/60 text-accent-cyan hover:bg-accent-cyan hover:text-background-dark transition-all"
                title="Visit Live Website"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
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
