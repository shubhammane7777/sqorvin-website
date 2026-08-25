"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Ambient canvas background: a faint grid with a handful of "data" particles
 * drifting along it and occasional connecting lines — evokes a live data
 * network without literal robot/brain AI imagery. Purely decorative
 * (aria-hidden) and paused entirely under prefers-reduced-motion, where a
 * single static frame is drawn instead of a running animation loop.
 */
export function DataGridBackground({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let raf = 0;

    const POINT_COUNT = 42;
    type Point = { x: number; y: number; vx: number; vy: number };
    let points: Point[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const seed = () => {
      points = Array.from({ length: POINT_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
      }));
    };

    const drawStatic = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = "rgba(154, 164, 196, 0.08)";
      ctx.lineWidth = 1;
      const gap = 56;
      for (let x = 0; x < width; x += gap) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gap) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    };

    const drawFrame = () => {
      ctx.clearRect(0, 0, width, height);

      // faint grid
      ctx.strokeStyle = "rgba(154, 164, 196, 0.06)";
      ctx.lineWidth = 1;
      const gap = 56;
      for (let x = 0; x < width; x += gap) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gap) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // move points
      for (const p of points) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }

      // connecting lines between nearby points
      const maxDist = 130;
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const a = points[i]!;
          const b = points[j]!;
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const opacity = (1 - dist / maxDist) * 0.14;
            ctx.strokeStyle = `rgba(76, 127, 255, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // points themselves
      for (const p of points) {
        ctx.fillStyle = "rgba(139, 92, 246, 0.45)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(drawFrame);
    };

    resize();
    seed();

    if (prefersReducedMotion) {
      drawStatic();
    } else {
      raf = requestAnimationFrame(drawFrame);
    }

    const handleResize = () => {
      resize();
      seed();
      if (prefersReducedMotion) drawStatic();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [prefersReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
      style={{ width: "100%", height: "100%" }}
    />
  );
}
