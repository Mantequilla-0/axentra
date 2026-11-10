"use client";

import { useEffect, useRef } from "react";

type FadeUpProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  threshold?: number;
  variant?: "fadeUp" | "fadeIn" | "fadeLeft" | "fadeRight";
};

export function FadeUp({
  children,
  className = "",
  delay = 0,
  once = true,
  threshold = 0.12,
  variant = "fadeUp",
}: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }

    const variants: Record<string, { y: number; x: number }> = {
      fadeUp: { y: 24, x: 0 },
      fadeIn: { y: 0, x: 0 },
      fadeLeft: { y: 0, x: -24 },
      fadeRight: { y: 0, x: 24 },
    };
    const v = variants[variant];

    el.style.opacity = "0";
    el.style.transform = `translate(${v.x}px, ${v.y}px)`;
    el.style.transition = `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)`;
    el.style.transitionDelay = `${delay}ms`;

    let hasBeenVisible = false;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (once && hasBeenVisible) continue;
            hasBeenVisible = true;
            el.style.opacity = "1";
            el.style.transform = `translate(${v.x}px, 0px)`;
          } else if (!once) {
            el.style.opacity = "0";
            el.style.transform = `translate(${v.x}px, ${v.y}px)`;
          }
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, once, threshold, variant]);

  return (
    <div ref={ref} className={`reveal-fade ${className}`}>
      {children}
    </div>
  );
}
