"use client";

import { useEffect, useRef } from "react";

type InteractiveParticleWavesProps = {
  className?: string;
  particleCount?: number;
  waveAmplitude?: number;
  waveFrequency?: number;
  waveSpeed?: number;
  particleSize?: number;
  particleOpacity?: number;
  colorPalette?: string[];
  /** Radio de influencia del mouse en px */
  mouseRadius?: number;
  /** Fuerza de repulsión del mouse */
  mouseStrength?: number;
  /** Dibujar líneas entre partículas cercanas */
  connections?: boolean;
  connectionDistance?: number;
  pauseWhenHidden?: boolean;
};

export function InteractiveParticleWaves({
  className = "",
  particleCount = 220,
  waveAmplitude = 50,
  waveFrequency = 0.007,
  waveSpeed = 0.5,
  particleSize = 2.5,
  particleOpacity = 0.55,
  colorPalette = ["#DBCCFF", "#9E84DB", "#6243A8", "#B9A5EA"],
  mouseRadius = 220,
  mouseStrength = 60,
  connections = true,
  connectionDistance = 110,
  pauseWhenHidden = true,
}: InteractiveParticleWavesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });

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
      baseX: number;
      baseY: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      phase: number;
      depth: number;
      targetX: number;
      targetY: number;
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
      const count = Math.max(
        40,
        Math.floor(particleCount * (width / 1440)),
      );
      const cols = Math.ceil(Math.sqrt(count));
      const spacingX = width / cols;
      const spacingY = height / Math.ceil(count / cols);
      let i = 0;
      for (let cy = 0; cy < height && i < count; cy += spacingY) {
        for (let cx = 0; cx < width && i < count; cx += spacingX) {
          const jitterX = (Math.random() - 0.5) * 20;
          const jitterY = (Math.random() - 0.5) * 20;
          particles.push({
            x: cx + jitterX,
            y: cy + jitterY,
            baseX: cx + jitterX,
            baseY: cy + jitterY,
            vx: 0,
            vy: 0,
            size: Math.random() * particleSize + 1,
            opacity: Math.random() * particleOpacity + 0.25,
            color: colorPalette[Math.floor(Math.random() * colorPalette.length)],
            phase: Math.random() * Math.PI * 2,
            depth: Math.random() * 1 + 0.4,
            targetX: cx + jitterX,
            targetY: cy + jitterY,
          });
          i++;
        }
      }
    };

    const getDistance = (x1: number, y1: number, x2: number, y2: number) =>
      Math.hypot(x2 - x1, y2 - y1);

    const draw = (t: number) => {
      if (!isVisible) {
        rafRef.current = requestAnimationFrame(draw);
        return;
      }
      // Fondo suave para dejar estelas tenues (sin borrar por completo)
      ctx.fillStyle = "rgba(5, 3, 10, 0.35)";
      ctx.fillRect(0, 0, width, height);

      const time = t * 0.001 * waveSpeed;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Actualizar posiciones
      for (const p of particles) {
        // Onda senoidal base
        const waveY =
          Math.sin(time + p.phase + p.x * waveFrequency) *
          waveAmplitude *
          p.depth;
        const waveX =
          Math.cos(time * 0.6 + p.phase * 0.7 + p.y * waveFrequency * 0.6) *
          (waveAmplitude * 0.35) *
          p.depth;

        // Repulsión del mouse
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.hypot(dx, dy);
        let forceX = 0;
        let forceY = 0;
        if (dist < mouseRadius && dist > 0) {
          const force = (mouseRadius - dist) / mouseRadius;
          const f = force * mouseStrength * p.depth;
          forceX = (dx / dist) * f;
          forceY = (dy / dist) * f;
        }

        // Movimiento elástico hacia el objetivo + onda + mouse
        p.targetX = p.baseX + waveX + forceX;
        p.targetY = p.baseY + waveY + forceY;
        p.vx += (p.targetX - p.x) * 0.08 * p.depth;
        p.vy += (p.targetY - p.y) * 0.08 * p.depth;
        p.vx *= 0.92;
        p.vy *= 0.92;
        p.x += p.vx;
        p.y += p.vy;
      }

      // Dibujar conexiones entre partículas cercanas
      if (connections) {
        for (let i = 0; i < particles.length; i++) {
          const a = particles[i];
          for (let j = i + 1; j < particles.length; j++) {
            const b = particles[j];
            const d = getDistance(a.x, a.y, b.x, b.y);
            if (d < connectionDistance) {
              const alpha = 1 - d / connectionDistance;
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.strokeStyle = `rgba(158, 132, 219, ${alpha * 0.18})`;
              ctx.lineWidth = 0.6;
              ctx.stroke();
            }
          }
        }
      }

      // Dibujar partículas de atrás hacia adelante (profundidad)
      const sorted = [...particles].sort((pa, pb) => pa.depth - pb.depth);
      for (const p of sorted) {
        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.size * 3,
        );
        gradient.addColorStop(0, p.color);
        gradient.addColorStop(1, "transparent");

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.depth, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.globalAlpha = p.opacity * p.depth;
        ctx.fill();

        // Núcleo brillante en partículas cercanas
        if (p.depth > 0.85) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * p.depth * 0.5, 0, Math.PI * 2);
          ctx.fillStyle = "#DBCCFF";
          ctx.globalAlpha = p.opacity * 0.5;
          ctx.fill();
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    const onMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = (event.clientX - rect.left) * (canvas.width / rect.width);
      mouseRef.current.y = (event.clientY - rect.top) * (canvas.height / rect.height);
    };

    const onMouseLeave = () => {
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
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
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("resize", resize);
    rafRef.current = requestAnimationFrame(loop);

    resize();

    return () => {
      observer?.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
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
    colorPalette,
    mouseRadius,
    mouseStrength,
    connections,
    connectionDistance,
    pauseWhenHidden,
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
