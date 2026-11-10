"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type MaskRevealProps = {
  children: React.ReactNode;
  className?: string;
  direction?: "down" | "up" | "left" | "right" | "vertical" | "horizontal";
  duration?: number;
  delay?: number;
  start?: string;
  end?: string;
  once?: boolean;
};

const initialClip: Record<string, string> = {
  down: "inset(100% 0 0 0)",
  up: "inset(0 0 100% 0)",
  left: "inset(0 100% 0 0)",
  right: "inset(0 0 0 100%)",
  vertical: "inset(100% 0 100% 0)",
  horizontal: "inset(0 100% 0 100%)",
};

export function MaskReveal({
  children,
  className = "",
  direction = "down",
  duration = 0.9,
  delay = 0,
  start = "top 85%",
  end = "bottom 60%",
  once = true,
}: MaskRevealProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const inner = innerRef.current;
    if (!wrapper || !inner) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      wrapper.style.clipPath = "none";
      (wrapper.style as any).webkitClipPath = "none";
      return;
    }

    wrapper.style.clipPath = initialClip[direction];
    (wrapper.style as any).webkitClipPath = initialClip[direction];

    const ctx = gsap.context(() => {
      gsap.to(inner, {
        clipPath: "inset(0% 0% 0% 0%)",
        ["-webkit-clip-path" as unknown as string]: "inset(0% 0% 0% 0%)",
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: wrapper,
          start,
          end,
          toggleActions: once ? "play none none none" : "play reverse play reverse",
          once,
        },
      });
    });

    return () => ctx.revert();
  }, [direction, duration, delay, start, end, once]);

  return (
    <div
      ref={wrapperRef}
      className={`overflow-hidden mask-reveal ${className}`}
      style={{ position: "relative" }}
    >
      <div ref={innerRef} className="relative">
        {children}
      </div>
    </div>
  );
}
