"use client";

import { useEffect, useRef } from "react";

/**
 * GrainOverlay — Efecto 01
 * Textura de ruido fino sobre fondos oscuros para dar profundidad cinematográfica.
 * SVG feTurbulence + pseudo-capa. Sin animación continua innecesaria.
 */
export function GrainOverlay({
  className = "",
  opacity = 0.05,
  inset = false,
}: {
  className?: string;
  opacity?: number;
  inset?: boolean;
}) {
  const svg = `data:image/svg+xml;base64,${Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160">
      <filter id="g">
        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
      </filter>
      <rect width="160" height="160" filter="url(#g)" />
    </svg>`
  ).toString("base64")}`;

  return (
    <div
      className={`pointer-events-none ${inset ? "inset-0" : "fixed inset-0"} z-[-1] opacity-${Math.round(
        opacity * 100
      )} mix-blend-overlay ${className}`}
      style={{
        backgroundImage: `url(${svg})`,
        backgroundSize: "160px 160px",
      }}
      aria-hidden="true"
    />
  );
}
