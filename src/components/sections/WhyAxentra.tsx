"use client";

import {
  LayoutTemplate,
  MessageSquare,
  Shapes,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";
import { FadeUp } from "@/components/effects/FadeUp";
import { differentiators } from "@/content/services";

const icons: Record<string, React.ElementType> = {
  shapes: Shapes,
  layout: LayoutTemplate,
  sparkles: Sparkles,
  message: MessageSquare,
  trending: TrendingUp,
  target: Target,
};

export function WhyAxentra() {
  return (
    <section id="por-que" className="relative overflow-hidden py-24 sm:py-32">
      <div className="container-x relative">
        <div
          className="relative overflow-hidden rounded-[2rem] border border-lav-400/12 bg-[linear-gradient(155deg,#170546_0%,#0c0226_45%,#07030f_100%)] px-6 py-12 grain sm:px-10 sm:py-16 lg:px-14"
        >
          <div
            aria-hidden="true"
            className="orb -right-24 -top-24 size-80 rounded-full bg-violet-500/20 blur-[90px]"
          />
          <div
            aria-hidden="true"
            className="dot-grid absolute inset-0 opacity-30 pointer-events-none"
          />

          <div className="relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <FadeUp>
              <p className="eyebrow">Por qué AXENTRA</p>
              <h2 className="h2 mt-6 max-w-[15ch]">
                Tecnología con propósito.{" "}
                <span className="text-lavender-gradient">
                  Resultados con sentido.
                </span>
              </h2>
              <p className="lead mt-6 max-w-sm">
                No se trata de usar la tecnología más reciente, sino la que
                resuelve tu necesidad de la forma más clara y sostenible.
              </p>
            </FadeUp>

            <ul className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
              {differentiators.map((item, index) => {
                const Icon = icons[item.icon as keyof typeof icons];
                return (
                  <FadeUp
                    key={item.title}
                    delay={60 + index * 60}
                    className="group"
                  >
                    <div className="flex items-start gap-3.5">
                      <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg border border-lav-400/20 bg-plum-900/50 text-lav-300 transition-colors duration-300 group-hover:border-lav-400/50 group-hover:text-lav-200">
                        <Icon className="size-[1.05rem]" strokeWidth={1.5} aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="text-[0.9375rem] font-medium tracking-[-0.01em] text-white">
                          {item.title}
                        </h3>
                        <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-lav-200/45">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </FadeUp>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
