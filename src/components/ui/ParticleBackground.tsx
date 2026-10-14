"use client";

import React, { useEffect, useRef } from "react";

interface Pulse {
  x: number;
  y: number;
  dir: "h" | "v";
  speed: number;
  length: number;
  col: number;
  row: number;
}

export const ParticleBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let isRunning = false;

    let width = (canvas.width = container.offsetWidth || window.innerWidth);
    let height = (canvas.height = container.offsetHeight || window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const handleResize = () => {
      if (!canvas || !container) return;
      width = canvas.width = container.offsetWidth || window.innerWidth;
      height = canvas.height = container.offsetHeight || window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Initialize shooting energy pulses along grid lines
    const pulses: Pulse[] = [];
    const pulseCount = 14;
    const gridSpacing = 65;

    for (let i = 0; i < pulseCount; i++) {
      pulses.push({
        x: Math.random() * width,
        y: Math.random() * height,
        dir: Math.random() > 0.5 ? "h" : "v",
        speed: Math.random() * 2 + 1.2,
        length: Math.random() * 80 + 50,
        col: Math.floor(Math.random() * 20),
        row: Math.floor(Math.random() * 15),
      });
    }

    const render = () => {
      if (!isVisible) {
        isRunning = false;
        return;
      }
      isRunning = true;

      ctx.clearRect(0, 0, width, height);

      // Interpolate mouse coordinates smoothly
      mouseX += (targetMouseX - mouseX) * 0.08;
      mouseY += (targetMouseY - mouseY) * 0.08;

      const isLightMode = !document.documentElement.classList.contains("dark");

      const cols = Math.floor(width / gridSpacing) + 2;
      const rows = Math.floor(height / gridSpacing) + 2;

      // 1. Draw Cyber Kinetic Grid with cursor proximity darkening
      for (let c = 0; c <= cols; c++) {
        const baseX = c * gridSpacing;
        const distToMouseX = Math.abs(baseX - mouseX);
        const intensity = Math.max(0, 1 - distToMouseX / 260);

        ctx.beginPath();
        ctx.moveTo(baseX, 0);
        ctx.lineTo(baseX, height);
        ctx.strokeStyle = isLightMode
          ? `rgba(75, 62, 50, ${0.12 + intensity * 0.35})`
          : `rgba(30, 78, 107, ${0.16 + intensity * 0.25})`;
        ctx.lineWidth = intensity > 0.15 ? 1.25 : 0.75;
        ctx.stroke();
      }

      for (let r = 0; r <= rows; r++) {
        const baseY = r * gridSpacing;
        const distToMouseY = Math.abs(baseY - mouseY);
        const intensity = Math.max(0, 1 - distToMouseY / 260);

        ctx.beginPath();
        ctx.moveTo(0, baseY);
        ctx.lineTo(width, baseY);
        ctx.strokeStyle = isLightMode
          ? `rgba(75, 62, 50, ${0.12 + intensity * 0.35})`
          : `rgba(30, 78, 107, ${0.16 + intensity * 0.25})`;
        ctx.lineWidth = intensity > 0.15 ? 1.25 : 0.75;
        ctx.stroke();
      }

      // 2. Animate Shooting Fiber-Optic Energy Light Beams
      pulses.forEach((p) => {
        if (p.dir === "h") {
          p.x += p.speed;
          if (p.x > width + p.length) {
            p.x = -p.length;
            p.y = Math.floor(Math.random() * rows) * gridSpacing;
          }

          const grad = ctx.createLinearGradient(p.x - p.length, p.y, p.x, p.y);
          if (isLightMode) {
            grad.addColorStop(0, "rgba(12, 100, 119, 0)");
            grad.addColorStop(1, "rgba(12, 100, 119, 0.85)");
          } else {
            grad.addColorStop(0, "rgba(45, 212, 191, 0)");
            grad.addColorStop(1, "rgba(45, 212, 191, 0.8)");
          }
          ctx.beginPath();
          ctx.moveTo(p.x - p.length, p.y);
          ctx.lineTo(p.x, p.y);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.8;
          ctx.stroke();

          // Glowing pulse head
          ctx.beginPath();
          ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = isLightMode ? "#0C6477" : "#2DD4BF";
          ctx.fill();
        } else {
          p.y += p.speed;
          if (p.y > height + p.length) {
            p.y = -p.length;
            p.x = Math.floor(Math.random() * cols) * gridSpacing;
          }

          const grad = ctx.createLinearGradient(p.x, p.y - p.length, p.x, p.y);
          if (isLightMode) {
            grad.addColorStop(0, "rgba(12, 100, 119, 0)");
            grad.addColorStop(1, "rgba(12, 100, 119, 0.85)");
          } else {
            grad.addColorStop(0, "rgba(45, 212, 191, 0)");
            grad.addColorStop(1, "rgba(45, 212, 191, 0.8)");
          }
          ctx.beginPath();
          ctx.moveTo(p.x, p.y - p.length);
          ctx.lineTo(p.x, p.y);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.8;
          ctx.stroke();

          // Glowing pulse head
          ctx.beginPath();
          ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = isLightMode ? "#0C6477" : "#2DD4BF";
          ctx.fill();
        }
      });

      // 3. Draw Intersecting Node Dots Near Cursor & Constellation Lines (Dark & High Contrast)
      const cursorRadius = 210;
      const minC = Math.max(0, Math.floor((mouseX - cursorRadius) / gridSpacing));
      const maxC = Math.min(cols, Math.ceil((mouseX + cursorRadius) / gridSpacing));
      const minR = Math.max(0, Math.floor((mouseY - cursorRadius) / gridSpacing));
      const maxR = Math.min(rows, Math.ceil((mouseY + cursorRadius) / gridSpacing));

      for (let c = minC; c <= maxC; c++) {
        for (let r = minR; r <= maxR; r++) {
          const gx = c * gridSpacing;
          const gy = r * gridSpacing;

          const dx = gx - mouseX;
          const dy = gy - mouseY;
          const distSq = dx * dx + dy * dy;

          if (distSq < cursorRadius * cursorRadius) {
            const dist = Math.sqrt(distSq);
            const factor = 1 - dist / cursorRadius;
            const size = 2.0 + factor * 3.5;

            // Connect nearest grid points to cursor with dark, responsive animated lines
            ctx.beginPath();
            ctx.moveTo(gx, gy);
            ctx.lineTo(mouseX, mouseY);
            ctx.strokeStyle = isLightMode
              ? `rgba(16, 42, 60, ${0.25 + factor * 0.6})`
              : `rgba(45, 212, 191, ${factor * 0.35})`;
            ctx.lineWidth = isLightMode ? 1.0 + factor * 0.8 : 0.85;
            ctx.stroke();

            // Dark grid node point at intersection
            ctx.beginPath();
            ctx.arc(gx, gy, size, 0, Math.PI * 2);
            ctx.fillStyle = isLightMode
              ? `rgba(16, 42, 60, ${0.55 + factor * 0.45})`
              : `rgba(45, 212, 191, ${0.35 + factor * 0.55})`;
            ctx.fill();
          }
        }
      }

      // 4. Cursor Focal Hub & Pulse Wave
      if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
        // Outer subtle magnetic halo
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 16, 0, Math.PI * 2);
        ctx.strokeStyle = isLightMode
          ? "rgba(12, 100, 119, 0.35)"
          : "rgba(45, 212, 191, 0.35)";
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Inner magnetic ring
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 7, 0, Math.PI * 2);
        ctx.strokeStyle = isLightMode
          ? "rgba(16, 42, 60, 0.6)"
          : "rgba(45, 212, 191, 0.6)";
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Solid central focal dot
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = isLightMode ? "#0C6477" : "#2DD4BF";
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    // Pause canvas completely when Hero section is out of viewport (0% CPU/GPU usage when scrolling other sections)
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible && !isRunning) {
          render();
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    render();

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Background glowing aurora mesh gradients (Optimized blur with transform-gpu) */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-accent-cyan/15 blur-3xl pointer-events-none transform-gpu" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 rounded-full bg-accent-cyan/10 blur-3xl pointer-events-none transform-gpu" />
      <div className="absolute bottom-10 left-1/4 w-80 h-80 rounded-full bg-accent-violet/15 blur-3xl pointer-events-none transform-gpu" />

      {/* Kinetic Holographic Cyber Grid & Energy Pulse Canvas */}
      <canvas ref={canvasRef} className="block w-full h-full opacity-95" />
    </div>
  );
};
