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
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    // Initialize shooting energy pulses along grid lines
    const pulses: Pulse[] = [];
    const pulseCount = 20;
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

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Interpolate mouse coordinates smoothly
      mouseX += (targetMouseX - mouseX) * 0.06;
      mouseY += (targetMouseY - mouseY) * 0.06;

      const isLightMode = document.documentElement.classList.contains("light");

      time += 0.015;

      const cols = Math.floor(width / gridSpacing) + 2;
      const rows = Math.floor(height / gridSpacing) + 2;

      // 1. Draw Cyber Kinetic Grid
      for (let c = 0; c <= cols; c++) {
        const baseX = c * gridSpacing;
        const distToMouseX = Math.abs(baseX - mouseX);
        const intensity = Math.max(0, 1 - distToMouseX / 300);

        ctx.beginPath();
        ctx.moveTo(baseX, 0);
        ctx.lineTo(baseX, height);
        ctx.strokeStyle = isLightMode
          ? `rgba(94, 200, 240, ${0.12 + intensity * 0.25})`
          : `rgba(30, 78, 107, ${0.2 + intensity * 0.3})`;
        ctx.lineWidth = intensity > 0.2 ? 1.2 : 0.8;
        ctx.stroke();
      }

      for (let r = 0; r <= rows; r++) {
        const baseY = r * gridSpacing;
        const distToMouseY = Math.abs(baseY - mouseY);
        const intensity = Math.max(0, 1 - distToMouseY / 300);

        ctx.beginPath();
        ctx.moveTo(0, baseY);
        ctx.lineTo(width, baseY);
        ctx.strokeStyle = isLightMode
          ? `rgba(94, 200, 240, ${0.12 + intensity * 0.25})`
          : `rgba(30, 78, 107, ${0.2 + intensity * 0.3})`;
        ctx.lineWidth = intensity > 0.2 ? 1.2 : 0.8;
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
            grad.addColorStop(0, "rgba(94, 200, 240, 0)");
            grad.addColorStop(1, "rgba(94, 200, 240, 0.85)");
          } else {
            grad.addColorStop(0, "rgba(45, 212, 191, 0)");
            grad.addColorStop(1, "rgba(45, 212, 191, 0.85)");
          }
          ctx.beginPath();
          ctx.moveTo(p.x - p.length, p.y);
          ctx.lineTo(p.x, p.y);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 2;
          ctx.stroke();

          // Glowing pulse head
          ctx.beginPath();
          ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = isLightMode ? "#5EC8F0" : "#2DD4BF";
          ctx.fill();
        } else {
          p.y += p.speed;
          if (p.y > height + p.length) {
            p.y = -p.length;
            p.x = Math.floor(Math.random() * cols) * gridSpacing;
          }

          const grad = ctx.createLinearGradient(p.x, p.y - p.length, p.x, p.y);
          if (isLightMode) {
            grad.addColorStop(0, "rgba(94, 200, 240, 0)");
            grad.addColorStop(1, "rgba(94, 200, 240, 0.85)");
          } else {
            grad.addColorStop(0, "rgba(45, 212, 191, 0)");
            grad.addColorStop(1, "rgba(45, 212, 191, 0.85)");
          }
          ctx.beginPath();
          ctx.moveTo(p.x, p.y - p.length);
          ctx.lineTo(p.x, p.y);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 2;
          ctx.stroke();

          // Glowing pulse head
          ctx.beginPath();
          ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = isLightMode ? "#5EC8F0" : "#2DD4BF";
          ctx.fill();
        }
      });

      // 3. Draw Intersecting Node Dots that React to Cursor Distance
      for (let c = 0; c <= cols; c++) {
        for (let r = 0; r <= rows; r++) {
          const gx = c * gridSpacing;
          const gy = r * gridSpacing;

          const dx = gx - mouseX;
          const dy = gy - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 180) {
            const factor = 1 - dist / 180;
            const size = 1.5 + factor * 3.5;

            ctx.beginPath();
            ctx.arc(gx, gy, size, 0, Math.PI * 2);
            ctx.fillStyle = isLightMode
              ? `rgba(94, 200, 240, ${0.4 + factor * 0.6})`
              : `rgba(45, 212, 191, ${0.4 + factor * 0.6})`;
            ctx.fill();

            // Connect nearest grid points to cursor with interactive laser lines
            ctx.beginPath();
            ctx.moveTo(gx, gy);
            ctx.lineTo(mouseX, mouseY);
            ctx.strokeStyle = isLightMode
              ? `rgba(94, 200, 240, ${factor * 0.35})`
              : `rgba(45, 212, 191, ${factor * 0.35})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // 4. Draw Mouse Energy Halo Vortex
      const radGrad = ctx.createRadialGradient(mouseX, mouseY, 5, mouseX, mouseY, 220);
      if (isLightMode) {
        radGrad.addColorStop(0, "rgba(94, 200, 240, 0.2)");
        radGrad.addColorStop(0.5, "rgba(94, 200, 240, 0.06)");
        radGrad.addColorStop(1, "rgba(94, 200, 240, 0)");
      } else {
        radGrad.addColorStop(0, "rgba(45, 212, 191, 0.18)");
        radGrad.addColorStop(0.5, "rgba(30, 78, 107, 0.08)");
        radGrad.addColorStop(1, "rgba(30, 78, 107, 0)");
      }
      ctx.fillStyle = radGrad;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Background glowing aurora mesh gradients */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-accent-cyan/20 blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] rounded-full bg-accent-cyan/15 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[28rem] h-[28rem] rounded-full bg-accent-violet/20 blur-[130px] pointer-events-none" />

      {/* Kinetic Holographic Cyber Grid & Energy Pulse Canvas */}
      <canvas ref={canvasRef} className="block w-full h-full opacity-85" />
    </div>
  );
};
