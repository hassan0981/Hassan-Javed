"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, VideoOff } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId?: string;
  title: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  videoId,
  title,
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

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background-dark/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-surface border border-surface-border rounded-2xl overflow-hidden shadow-card-hover z-10"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-surface-border bg-surface-hover/50">
              <div className="flex items-center space-x-3">
                <span className={`w-3 h-3 rounded-full ${videoId ? "bg-accent-indigo animate-pulse" : "bg-amber-500"}`} />
                <h3 className="text-lg font-heading font-semibold text-foreground-heading tracking-wide truncate">
                  {title} — {videoId ? "Demo Walkthrough" : "Video Status"}
                </h3>
              </div>
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="p-2 rounded-lg text-foreground-muted hover:text-foreground hover:bg-surface-border transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Iframe Container or Not Uploaded Fallback */}
            <div className="relative aspect-video w-full bg-black/90 flex flex-col items-center justify-center p-6 text-center">
              {videoId ? (
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                  title={`${title} Demo`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              ) : (
                <div className="flex flex-col items-center justify-center space-y-4 max-w-md">
                  <div className="p-4 rounded-full bg-surface border border-surface-border text-amber-400 shadow-glow">
                    <VideoOff className="w-10 h-10" />
                  </div>
                  <div>
                    <h4 className="text-xl font-heading font-bold text-foreground mb-2">
                      Video Not Uploaded Yet
                    </h4>
                    <p className="text-sm text-foreground-muted leading-relaxed">
                      The video walkthrough for <strong className="text-accent-cyan">{title}</strong> has not been uploaded yet. Please check back soon!
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="mt-2 px-5 py-2 rounded-full text-xs font-heading font-semibold bg-surface-hover hover:bg-surface-border text-foreground transition-colors border border-surface-border"
                  >
                    Close Window
                  </button>
                </div>
              )}
            </div>

            {/* Modal Footer Note */}
            <div className="px-6 py-3 bg-surface-hover/30 border-t border-surface-border flex items-center justify-between text-xs text-foreground-muted">
              <span>Press <kbd className="px-1.5 py-0.5 bg-surface-border rounded text-foreground font-mono text-[10px]">ESC</kbd> or click outside to close</span>
              {videoId && (
                <a
                  href={`https://www.youtube.com/watch?v=${videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-accent-cyan hover:underline"
                >
                  <span>Open on YouTube</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
