"use client";

import { useEffect, useRef } from "react";

type ParticleWavesProps = {
  className?: string;
  particleCount?: number;
  waveAmplitude?: number;
  waveFrequency?: number;
  waveSpeed?: number;
  particleSize?: number;
  particleOpacity?: number;
  depth?: number;
  colorPalette?: string[];
  pauseWhenHidden?: boolean;
  /** Si es true, dibuja las partículas sobre un fondo ligeramente más visible */
  glow?: boolean;
};

export function ParticleWaves({
  className = "",
  particleCount = 140,
  waveAmplitude = 70,
  waveFrequency = 0.008,
  waveSpeed = 0.5,
  particleSize = 3,
  particleOpacity = 0.6,
  depth = 1.2,
  colorPalette = ["#DBCCFF", "#9E84DB", "#6243A8", "#B9A5EA"],
  pauseWhenHidden = true,
  glow = true,
}: ParticleWavesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }

    let width = 0;
    let height = 0;
    let particles: Array<{
      x: number;
      y: number;
      baseY: number;
      vx: number;
      size: number;
      opacity: number;
      color: string;
      phase: number;
      depth: number;
    }> = [];

    let isVisible = true;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      width = rect.width * dpr;
      height = rect.height * dpr;
      canvas.width = width;
      canvas.height = height;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const count = Math.max(40, Math.floor(particleCount * (width / 1440)));
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          baseY: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.3,
          size: Math.random() * particleSize + 1.5,
          opacity: Math.random() * particleOpacity + 0.25,
          color: colorPalette[Math.floor(Math.random() * colorPalette.length)],
          phase: Math.random() * Math.PI * 2,
          depth: Math.random() * depth + 0.4,
        });
      }
    };

    const draw = (t: number) => {
      if (!isVisible) {
        rafRef.current = requestAnimationFrame(draw);
        return;
      }
      ctx.clearRect(0, 0, width, height);

      const time = t * 0.001 * waveSpeed;

      // Dibujar partículas de atrás hacia adelante (profundidad)
      const sorted = [...particles].sort((a, b) => a.depth - b.depth);

      for (const p of sorted) {
        const wave =
          Math.sin(time + p.phase + p.x * waveFrequency) * waveAmplitude * p.depth;
        const y = p.baseY + wave;

        // Suavizar bordes con un gradiente radial por partícula
        const gradient = ctx.createRadialGradient(
          p.x,
          y,
          0,
          p.x,
          y,
          p.size * 2.5
        );
        gradient.addColorStop(0, p.color);
        gradient.addColorStop(1, "transparent");

        ctx.beginPath();
        ctx.arc(p.x, y, p.size * p.depth, 0, Math.PI * 2);
        ctx.fillStyle = glow ? gradient : p.color;
        ctx.globalAlpha = glow ? p.opacity * p.depth : p.opacity * p.depth * 0.7;
        ctx.fill();

        // Brillo adicional sobre partículas más cercanas
        if (glow && p.depth > 0.8) {
          ctx.beginPath();
          ctx.arc(p.x, y, p.size * p.depth * 0.6, 0, Math.PI * 2);
          ctx.fillStyle = "#DBCCFF";
          ctx.globalAlpha = p.opacity * 0.4;
          ctx.fill();
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    let start = 0;
    const loop = (t: number) => {
      if (!start) start = t;
      draw(t - start);
    };

    const observer = pauseWhenHidden
      ? new IntersectionObserver(
          (entries) => {
            isVisible = entries[0]?.isIntersecting ?? true;
            if (isVisible && !rafRef.current) loop(0);
          },
          { rootMargin: "15% 0%" }
        )
      : null;

    observer?.observe(canvas);
    window.addEventListener("resize", resize);
    rafRef.current = requestAnimationFrame(loop);

    resize();

    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [
    particleCount,
    waveAmplitude,
    waveFrequency,
    waveSpeed,
    particleSize,
    particleOpacity,
    depth,
    colorPalette,
    pauseWhenHidden,
    glow,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none ${className}`}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        display: "block",
      }}
    />
  );
}
