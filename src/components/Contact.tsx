"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2, Github, Linkedin, ExternalLink } from "lucide-react";
import confetti from "canvas-confetti";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMessage("Please complete all required fields.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });

        // Trigger celebration confetti
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
          });
        } catch {
          // ignore if canvas-confetti fails
        }
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to send message. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error occurred. Please check your connection.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-background-dark relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-3 mb-16"
        >
          <span className="font-mono text-accent-indigo text-lg font-semibold">06.</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground-heading tracking-tight">
            Get In Touch
          </h2>
          <div className="h-[1px] bg-gradient-to-r from-accent-indigo/40 to-transparent flex-1 max-w-xs hidden sm:block" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-heading font-bold text-foreground-heading mb-3">
                Let&apos;s build something <span className="text-accent-cyan">great together.</span>
              </h3>
              <p className="text-foreground-muted leading-relaxed text-sm sm:text-base">
                Whether you have an exciting project, a job opportunity, or just want to connect, feel free to reach out directly or send a message.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              <a
                href="mailto:hass.javed25@gmail.com"
                className="flex items-center space-x-4 p-4 rounded-xl bg-surface border border-surface-border hover:border-accent-cyan/60 transition-all group"
              >
                <div className="p-3 rounded-lg bg-surface-hover text-accent-indigo group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-foreground-muted">Email Me</div>
                  <div className="text-sm font-semibold text-foreground group-hover:text-accent-cyan transition-colors">
                    hass.javed25@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="tel:03218844167"
                className="flex items-center space-x-4 p-4 rounded-xl bg-surface border border-surface-border hover:border-accent-cyan/60 transition-all group"
              >
                <div className="p-3 rounded-lg bg-surface-hover text-accent-cyan group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-foreground-muted">Call / WhatsApp</div>
                  <div className="text-sm font-semibold text-foreground group-hover:text-accent-cyan transition-colors">
                    0321-8844167
                  </div>
                </div>
              </a>

              <div className="flex items-center space-x-4 p-4 rounded-xl bg-surface border border-surface-border">
                <div className="p-3 rounded-lg bg-surface-hover">
                  <MapPin className="contact-mappin-icon w-5 h-5 text-accent-emerald" />
                </div>
                <div>
                  <div className="text-xs font-mono text-foreground-muted">Location</div>
                  <div className="text-sm font-semibold text-foreground">
                    Phase 5, DHA, Lahore
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <div className="text-xs font-mono text-foreground-muted mb-3">Connect on Socials</div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://github.com/hassan0981"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-surface border border-surface-border text-foreground hover:border-accent-cyan hover:text-accent-cyan transition-colors text-xs font-mono"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-hassan-javed-4197212b7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-surface border border-surface-border text-foreground hover:border-accent-cyan hover:text-accent-cyan transition-colors text-xs font-mono"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Interactive Form Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-5 sm:p-8 rounded-2xl bg-surface border border-surface-border shadow-card-hover relative">
              <h4 className="text-lg font-heading font-bold text-foreground-heading mb-6">
                Send A Direct Message
              </h4>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-foreground-muted mb-2">
                      Your Name <span className="text-accent-indigo">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-xl bg-background-dark border border-surface-border text-foreground text-sm focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-foreground-muted mb-2">
                      Your Email <span className="text-accent-indigo">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@domain.com"
                      className="w-full px-4 py-3 rounded-xl bg-background-dark border border-surface-border text-foreground text-sm focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-all"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-mono text-foreground-muted mb-2">
                    Subject / Project Category
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Web App Project / Internship Inquiry"
                    className="w-full px-4 py-3 rounded-xl bg-background-dark border border-surface-border text-foreground text-sm focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-all"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-foreground-muted mb-2">
                    Message <span className="text-accent-indigo">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Hi Hassan, I'd like to discuss a project..."
                    className="w-full px-4 py-3 rounded-xl bg-background-dark border border-surface-border text-foreground text-sm focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex items-center justify-center space-x-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-accent-indigo via-accent-cyan to-accent-violet text-white font-heading font-semibold text-sm shadow-glow hover:brightness-110 disabled:opacity-50 transition-all"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {/* Feedback Toast Animations */}
                <AnimatePresence>
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-4 rounded-xl bg-surface border border-accent-cyan/50 text-foreground flex items-center space-x-3 text-xs font-mono shadow-sm"
                    >
                      <CheckCircle2 className="w-5 h-5 text-accent-cyan shrink-0" />
                      <span>Message sent successfully! I will respond to your email shortly.</span>
                    </motion.div>
                  )}

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-4 rounded-xl bg-red-500/10 border border-red-500/40 text-red-400 flex items-center space-x-3 text-xs font-mono"
                    >
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <span>{errorMessage}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
