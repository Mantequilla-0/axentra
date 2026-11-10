"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FadeUp } from "@/components/effects/FadeUp";
import { MaskReveal } from "@/components/effects/MaskReveal";
import { ParallaxElement } from "@/components/effects/ParallaxElement";
import { GrainOverlay } from "@/components/effects/GrainOverlay";
import { BrowserFrame, PhoneFrame } from "@/components/visuals/frames";
import { webServices } from "@/content/services";

gsap.registerPlugin(ScrollTrigger);

export function WebDev() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".web-mockup", {
        y: -30,
        scale: 0.97,
        ease: "none",
        scrollTrigger: {
          trigger: "#desarrollo-web",
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="desarrollo-web"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="orb -right-32 top-1/4 size-[460px] bg-violet-500/15"
      />
      <GrainOverlay opacity={0.03} />

      <div className="container-x relative">
        <div className="grid items-center gap-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <div>
            <FadeUp>
              <p className="eyebrow">Desarrollo web</p>
              <h2 className="h2 mt-6">
                Una presencia digital que{" "}
                <span className="text-lavender-gradient">
                  trabaja por tu negocio.
                </span>
              </h2>
              <p className="lead mt-6">
                Desarrollamos páginas web personalizadas que combinan diseño,
                rendimiento y funcionalidad para presentar tu negocio de la mejor
                manera.
              </p>
            </FadeUp>

            <FadeUp delay={100}>
              <ul className="mt-9 grid gap-2.5 sm:grid-cols-2">
                {[
                  "Sitios empresariales",
                  "Landing pages",
                  "Catálogos digitales",
                  "Diseño responsive",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-lav-200/70"
                  >
                    <span className="flex size-5 items-center justify-center rounded-full border border-lav-400/25 bg-plum-900/40">
                      <svg className="size-2.5 text-lav-300" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </FadeUp>

            <FadeUp delay={160}>
              <div className="mt-9 flex flex-wrap gap-2">
                {webServices.benefits.slice(0, 4).map((benefit) => (
                  <span key={benefit} className="tag">
                    {benefit}
                  </span>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={220} className="mt-9">
              <Link href="#contacto" className="btn btn-primary">
                Quiero una página web
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </FadeUp>
          </div>

          <div className="relative">
            <ParallaxElement intensity={30} direction="up" speed={0.4} className="hidden sm:block">
              <div className="mx-auto max-w-[600px]">
                <div
                  aria-hidden="true"
                  className="absolute -inset-8 rounded-[2rem] bg-[radial-gradient(55%_55%_at_45%_45%,rgba(98,67,168,0.25),transparent_70%)] blur-2xl"
                />
                <BrowserFrame
                  url="tunegocio.mx"
                  className="web-mockup relative z-10 rotate-[0.8deg]"
                >
                  <div className="relative h-[260px]">
                    <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-4 py-2.5">
                      <span className="size-1.5 rounded-full bg-white/15" />
                      <span className="size-1.5 rounded-full bg-white/10" />
                      <span className="size-1.5 rounded-full bg-white/10" />
                      <span className="ml-2 flex-1 truncate rounded-md bg-black/30 px-2 py-[3px] text-center font-mono text-[8px] tracking-wide text-lav-200/45">
                        tunegocio.mx
                      </span>
                    </div>
                    <div className="px-4 pt-4 pb-4">
                      <div className="flex items-end justify-between">
                        <div>
                          <p className="font-mono text-[5px] uppercase tracking-[0.2em] text-lav-400/70">
                            Catálogo
                          </p>
                          <p className="mt-1 text-[11px] font-medium tracking-[-0.02em] text-white">
                            Todo lo que ofrecemos
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 grid grid-cols-3 gap-1.5">
                        {[0, 1, 2, 3, 4, 5].map((index) => (
                          <div
                            key={index}
                            className="overflow-hidden rounded-md border border-white/[0.07] bg-white/[0.02]"
                          >
                            <div className={`h-9 bg-gradient-to-br ${index % 2 === 0 ? "from-lav-300/35 to-violet-500/15" : "from-plum-600/50 to-lav-400/20"}`} />
                            <div className="space-y-1 p-1.5">
                              <div className="h-1 w-[70%] rounded-full bg-white/20" />
                              <div className="h-1 w-[45%] rounded-full bg-white/10" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </BrowserFrame>
                <PhoneFrame className="absolute -bottom-8 left-0 z-20 w-[30%] min-w-[92px] rotate-[-3deg] sm:-left-8">
                  <div className="relative px-2 pb-3 pt-5">
                    <div className="flex items-center justify-between">
                      <span className="text-[4px] uppercase tracking-[0.2em] text-white/60">
                        Catálogo
                      </span>
                      <span className="flex flex-col gap-[2px]">
                        <span className="h-[1px] w-1.5 bg-white/40" />
                        <span className="h-[1px] w-1.5 bg-white/40" />
                      </span>
                    </div>
                    <p className="mt-2.5 text-[6px] font-medium leading-tight text-white">
                      Todo lo que ofrecemos
                    </p>
                    <div className="mt-2 grid grid-cols-2 gap-1">
                      {[0, 1, 2, 3].map((item) => (
                        <div key={item} className="overflow-hidden rounded-[3px] border border-white/[0.08]">
                          <div className="h-5 bg-gradient-to-br from-lav-300/30 to-violet-500/15" />
                          <div className="space-y-[2px] p-1">
                            <div className="h-[2px] w-3/4 rounded-full bg-white/20" />
                            <div className="h-[2px] w-1/2 rounded-full bg-white/10" />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-2 rounded-full bg-lav-200 py-[3px] text-center text-[3.5px] font-medium text-plum-900">
                      Contactar
                    </div>
                  </div>
                </PhoneFrame>
              </div>
            </ParallaxElement>
          </div>
        </div>
      </div>
    </section>
  );
}
