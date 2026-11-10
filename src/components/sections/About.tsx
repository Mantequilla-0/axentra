"use client";

import { Reveal } from "@/components/ui/Reveal";
import { FadeUp } from "@/components/effects/FadeUp";
import { ParallaxElement } from "@/components/effects/ParallaxElement";
import { GrainOverlay } from "@/components/effects/GrainOverlay";
import { principles } from "@/content/services";
import { LogoMark } from "@/components/brand/Logo";

export function About() {
  return (
    <section id="nosotros" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="orb -left-40 top-1/3 size-[420px] rounded-full bg-plum-800/40 blur-[120px]"
      />
      <GrainOverlay opacity={0.04} />

      <div className="container-x relative">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div>
            <FadeUp variant="fadeUp">
              <p className="eyebrow">Quiénes somos</p>
              <h2 className="h2 mt-6 max-w-[16ch]">
                La tecnología debe{" "}
                <span className="text-lavender-gradient">trabajar para ti.</span>
              </h2>
              <div className="mt-10 flex items-center gap-4 text-lav-400/50">
                <LogoMark size={34} className="text-lav-400/60" />
                <span className="h-px flex-1 bg-gradient-to-r from-lav-400/30 to-transparent" />
                <span className="font-mono text-[0.625rem] uppercase tracking-[0.24em]">
                  Technology with purpose
                </span>
              </div>
            </FadeUp>
          </div>

          <ParallaxElement intensity={26} direction="up" speed={0.45} className="relative">
            <div className="mt-12 hidden sm:block">
              <p className="text-[1.125rem] leading-[1.75] text-lav-200/70 sm:text-lg">
                En AXENTRA creemos que cada negocio tiene necesidades diferentes.
                Por eso desarrollamos soluciones digitales que combinan diseño,
                funcionalidad y tecnología para ayudar a nuestros clientes a
                trabajar mejor y crecer.
              </p>
            </div>
          </ParallaxElement>

          <ul className="mt-16">
            {principles.map((principle, index) => (
              <FadeUp
                key={principle.number}
                delay={100 + index * 90}
                variant="fadeUp"
                className="border-t border-lav-400/12 last:border-b"
              >
                <div className="flex items-start gap-6 py-6">
                  <span className="font-mono text-[0.6875rem] tracking-[0.2em] text-lav-400/60">
                    {principle.number}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium tracking-[-0.01em] text-white sm:text-xl">
                      {principle.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-lav-200/45">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
