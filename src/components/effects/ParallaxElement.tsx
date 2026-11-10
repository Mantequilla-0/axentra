"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ParallaxElementProps = {
  children: React.ReactNode;
  className?: string;
  /** Intensidad del movimiento (px) */
  intensity?: number;
  /** Dirección: "up", "down", "left", "right" */
  direction?: "up" | "down" | "left" | "right";
  /** Velocidad relativa (0-1) */
  speed?: number;
  /** Solo en escritorio */
  desktopOnly?: boolean;
  start?: string;
  end?: string;
};

export function ParallaxElement({
  children,
  className = "",
  intensity = 40,
  direction = "up",
  speed = 0.5,
  desktopOnly = false,
  start = "top bottom",
  end = "bottom top",
}: ParallaxElementProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    if (prefersReduced || (desktopOnly && !isDesktop)) {
      el.style.transform = "none";
      return;
    }

    const ctx = gsap.context(() => {
      let y = 0;
      let x = 0;
      if (direction === "up" || direction === "down") {
        y = direction === "up" ? -intensity : intensity;
      } else {
        x = direction === "left" ? -intensity : intensity;
      }

      gsap.fromTo(
        el,
        { y: y * speed, x: x * speed },
        {
          y: -(y * speed),
          x: -(x * speed),
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start,
            end,
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [intensity, direction, speed, desktopOnly, start, end]);

  return (
    <div ref={ref} className={`parallax-el ${className}`}>
      {children}
    </div>
  );
}
