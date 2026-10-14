"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Globe, VideoOff, CheckCircle2, Play, Calendar } from "lucide-react";
import { Project } from "@/data/projects";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  project,
}) => {
  // ESC key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background-dark/85 backdrop-blur-md"
          />

          {/* Expanded Dual-Panel Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="project-modal-container relative w-full max-w-5xl max-h-[92vh] bg-surface border border-surface-border rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col"
          >
            {/* Top Bar */}
            <div className="project-modal-header flex items-center justify-between px-5 sm:px-7 py-3.5 border-b border-surface-border bg-surface-hover/80 shrink-0">
              <div className="flex items-center space-x-3">
                <span className="w-2.5 h-2.5 rounded-full bg-accent-cyan animate-pulse" />
                <h3 className="text-sm sm:text-base font-heading font-bold text-foreground-heading tracking-wide">
                  {project.title} — Video Demo &amp; Case Study
                </h3>
              </div>
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="p-1.5 sm:p-2 rounded-xl text-foreground-muted hover:text-foreground hover:bg-surface-border transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: 2-Column Split View (Video Left, Complete Details Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 overflow-y-auto flex-1">
              {/* Left Column: Video Demo Cinema Frame (7 Cols) */}
              <div className="lg:col-span-7 bg-zinc-950 p-4 sm:p-6 flex flex-col justify-center min-h-[280px] sm:min-h-[360px] border-b lg:border-b-0 lg:border-r border-surface-border">
                {project.videoId ? (
                  <div className="space-y-3">
                    <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-black">
                      <iframe
                        src={`https://www.youtube.com/embed/${project.videoId}?autoplay=1&rel=0`}
                        title={`${project.title} Video Demo`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full border-0"
                      />
                    </div>
                    <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 px-1">
                      <span className="flex items-center space-x-1.5 text-accent-cyan font-semibold">
                        <Play className="w-3 h-3 fill-current" />
                        <span>HD Interactive Walkthrough</span>
                      </span>
                      <span className="text-zinc-500">Video Demo Showcase</span>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center space-y-4 py-12 text-center">
                    <div className="p-4 rounded-full bg-surface border border-surface-border text-amber-400 shadow-glow">
                      <VideoOff className="w-10 h-10" />
                    </div>
                    <div>
                      <h4 className="text-lg font-heading font-bold text-foreground mb-1">
                        Video Walkthrough Notice
                      </h4>
                      <p className="text-xs text-foreground-muted leading-relaxed max-w-xs mx-auto">
                        The video walkthrough for <strong className="text-accent-cyan">{project.title}</strong> is currently being prepared.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Complete Project Breakdown & Details (5 Cols) */}
              <div className="project-modal-details lg:col-span-5 p-5 sm:p-7 flex flex-col justify-between space-y-6 bg-surface/95 overflow-y-auto custom-scrollbar max-h-[600px] lg:max-h-none">
                <div className="space-y-4">
                  {/* Category Pill & Timeline */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-mono bg-accent-cyan/15 border border-accent-cyan/35 text-accent-cyan font-medium">
                      <Play className="w-3 h-3 fill-current" />
                      <span>{project.subtitle}</span>
                    </span>
                    {project.timeline && (
                      <span className="inline-flex items-center space-x-1 text-[11px] font-mono text-foreground-muted bg-surface-hover px-2.5 py-1 rounded-full border border-surface-border">
                        <Calendar className="w-3 h-3 text-accent-violet shrink-0" />
                        <span>{project.timeline}</span>
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-foreground-heading tracking-tight">
                    {project.title}
                  </h2>

                  {/* Overview Description */}
                  <div className="pt-1">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-accent-violet font-bold mb-1.5">
                      Project Overview
                    </h4>
                    <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed font-sans">
                      {project.description}
                    </p>
                  </div>

                  {/* Key Highlights */}
                  <div className="pt-1">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-accent-cyan font-bold mb-2.5">
                      Key Capabilities &amp; Engineering Highlights
                    </h4>
                    <ul className="space-y-2.5">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="flex items-start text-xs sm:text-[13px] text-foreground leading-snug">
                          <CheckCircle2 className="modal-check-icon w-4 h-4 text-accent-cyan shrink-0 mr-2.5 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Full Tech Stack */}
                  <div className="pt-1">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-foreground-muted font-bold mb-2">
                      Technologies &amp; Architecture
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-surface-hover border border-surface-border text-foreground-heading font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Direct External CTAs */}
                <div className="pt-4 border-t border-surface-border/80 flex flex-wrap gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-cta-btn flex-1 inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-heading font-bold bg-gradient-to-r from-accent-indigo to-accent-cyan text-white shadow-glow hover:brightness-110 transition-all"
                    >
                      <Globe className="w-4 h-4" />
                      <span>Visit Live Website</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-heading font-semibold bg-surface border border-surface-border text-foreground hover:border-accent-cyan hover:text-accent-cyan transition-all"
                    >
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
