"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * ScrollProgress — barra de progreso de lectura superior.
 */
export function ScrollProgress({
  className = "",
  height = 2,
  color = "#9E84DB",
}: {
  className?: string;
  height?: number;
  color?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      el.style.transform = "scaleX(1)";
      return;
    }

    const ctx = gsap.context(() => {
      gsap.to(el, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, [height, color]);

  return (
    <div
      ref={ref}
      className={`fixed top-0 left-0 w-full h-[${height}px] transform-origin-left scale-x-0 ${className}`}
      style={{
        background: `linear-gradient(to right, ${color}, #6243A8)`,
        zIndex: 50,
      }}
      aria-hidden="true"
    />
  );
}
