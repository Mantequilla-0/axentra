"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { InteractiveParticleWaves } from "@/components/effects/InteractiveParticleWaves";
import { GrainOverlay } from "@/components/effects/GrainOverlay";
import { FadeUp } from "@/components/effects/FadeUp";
import { siteConfig } from "@/config/site";

gsap.registerPlugin(ScrollTrigger);

const microFacts = [
  "Villahermosa, Tabasco",
  "Proyectos remotos en todo México",
  "Atención directa con quien desarrolla",
];

export function Hero() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".hero-orb", {
        y: 60,
        scale: 1.15,
        ease: "none",
        scrollTrigger: {
          trigger: "#inicio",
          start: "top top",
          end: "bottom center",
          scrub: 1,
        },
      });

      gsap.fromTo(
        ".hero-phone",
        { y: 40, opacity: 0.7, scale: 0.95 },
        {
          y: -20,
          opacity: 1,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: "#inicio",
            start: "top bottom",
            end: "center center",
            scrub: 1,
          },
        }
      );

      gsap.to(".hero-card", {
        y: -24,
        rotate: 1.5,
        ease: "none",
        scrollTrigger: {
          trigger: "#inicio",
          start: "top bottom-20%",
          end: "center center",
          scrub: 1,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pb-20 pt-32 sm:pb-24 lg:pt-36"
    >
      {/* Ambiente */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_90%_at_15%_-10%,#1d0850_0%,#0b0322_38%,#05030a_72%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 grid-lines opacity-70"
      />
      <div className="hero-orb orb -right-24 top-0 -z-10 size-[520px] bg-violet-500/25" />
      <div className="orb -left-40 bottom-0 -z-10 size-[420px] bg-plum-600/40" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-ink"
      />

      {/* Interactive Particle Waves (Efecto 02) en hero — ondas + mouse */}
      <div className="particle-wrap absolute inset-0 z-0 overflow-hidden">
        <InteractiveParticleWaves
          className="absolute inset-0 w-full h-full"
          particleCount={260}
          waveAmplitude={55}
          waveFrequency={0.007}
          waveSpeed={0.55}
          particleSize={2.5}
          particleOpacity={0.55}
          colorPalette={["#DBCCFF", "#9E84DB", "#6243A8", "#B9A5EA"]}
          mouseRadius={260}
          mouseStrength={70}
          connections={true}
          connectionDistance={130}
          pauseWhenHidden={false}
        />
      </div>
      <GrainOverlay className="inset-0 -z-10" opacity={0.04} inset />

      <div className="container-x relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
          {/* Columna izquierda */}
          <div className="max-w-[36rem]">
            <FadeUp delay={60}>
              <span className="pill">
                <Sparkles className="size-3 text-lav-300" aria-hidden="true" />
                AXENTRA · Digital Solutions
              </span>
            </FadeUp>

            <FadeUp delay={140} variant="fadeUp">
              <h1
                className="hero-title display mt-7 text-[clamp(2.6rem,7.2vw,4.6rem)]"
              >
                Desarrollamos
                <br />
                soluciones digitales
                <br />
                <span className="text-lavender-gradient">inteligentes.</span>
              </h1>
            </FadeUp>

            <FadeUp delay={240} className="lead mt-7 max-w-[32rem]">
              Desde páginas web profesionales hasta sistemas empresariales
              personalizados. Transformamos tus ideas y necesidades en soluciones
              tecnológicas que impulsan tu negocio.
            </FadeUp>

            <FadeUp delay={330} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="#contacto" className="btn btn-primary">
                Iniciar un proyecto
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link href="#servicios" className="btn btn-ghost">
                Explorar soluciones
              </Link>
            </FadeUp>

            <FadeUp delay={420} className="mt-6 flex items-start gap-2 text-[0.8125rem] text-lav-200/45">
              <span aria-hidden="true" className="mt-[7px] h-px w-6 shrink-0 bg-lav-400/50" />
              Tecnología a un precio justo. Soluciones pensadas para crecer.
            </FadeUp>
          </div>

          {/* Columna derecha — composición visual */}
          <div className="relative lg:pl-4">
            <div className="mx-auto max-w-[640px]">
              <div
                aria-hidden="true"
                className="absolute -inset-8 rounded-[2rem] bg-[radial-gradient(60%_60%_at_60%_40%,rgba(98,67,168,0.35),transparent_70%)] blur-2xl"
              />

              <BrowserFrameHero
                url="tunegocio.mx"
                className="hero-browser relative z-10 rotate-[0.8deg]"
              >
                <SiteMockupHero />
              </BrowserFrameHero>
              <PhoneFrameHero className="hero-phone absolute -bottom-10 left-0 z-20 w-[27%] min-w-[88px] rotate-[3deg] sm:-left-4 sm:w-[26%]" />
              <div className="hero-card absolute -right-2 -top-[58%] z-20 hidden w-[42%] rounded-xl border border-lav-400/25 bg-[#0d0622]/90 p-3 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.9)] backdrop-blur-md sm:block">
                <span className="font-mono text-[0.5625rem] uppercase tracking-[0.18em] text-lav-200/50 block mb-2">
                  build · production
                </span>
                <div className="space-y-1">
                  {["Diseño responsive", "Rendimiento", "SEO técnico"].map(
                    (label) => (
                      <div
                        key={label}
                        className="flex items-center justify-between"
                      >
                        <span className="text-[6.5px] text-white/45">{label}</span>
                        <span className="font-mono text-[6px] text-lav-200/70">
                          {label === "Diseño responsive" ? "100%" : "listo"}
                        </span>
                      </div>
                    ),
                  )}
                </div>
                <div className="mt-2 h-[2px] w-full overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-lav-400 to-lav-200" />
                </div>
              </div>
            </div>

            <div className="absolute -left-3 top-6 z-20 hidden items-center gap-1.5 rounded-full border border-white/10 bg-[#0c0620]/85 px-2.5 py-1.5 backdrop-blur md:flex">
              <span className="size-1 rounded-full bg-emerald-300/80 shadow-[0_0_8px_2px_rgba(110,231,183,0.5)]" />
              <span className="font-mono text-[6.5px] uppercase tracking-[0.14em] text-white/55">
                deploy · production
              </span>
            </div>
          </div>
        </div>

        {/* Micro datos */}
        <div className="mt-20 hidden items-center gap-6 border-t border-lav-400/10 pt-6 md:flex">
          {microFacts.map((fact, index) => (
            <div key={fact} className="flex items-center gap-6">
              <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-lav-200/35">
                {fact}
              </p>
              {index < microFacts.length - 1 && (
                <span className="h-3 w-px bg-lav-400/20" aria-hidden="true" />
              )}
            </div>
          ))}
          <Link
            href="#proyectos"
            className="ml-auto hidden items-center gap-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-lav-200/50 transition-colors hover:text-lav-100 lg:flex"
          >
            Ver proyectos
            <ArrowRight className="size-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function BrowserFrameHero({
  children,
  url = "axentra.mx",
  className = "",
}: {
  children?: React.ReactNode;
  url?: string;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden rounded-xl border border-white/10 bg-[#0a0420] shadow-[0_40px_120px_-60px_rgba(98,67,168,0.9)] ${className}`}>
      <div className="flex items-center gap-2 border-b border-white/[0.07] bg-white/[0.03] px-3.5 py-2.5">
        <span className="size-1.5 rounded-full bg-white/20" />
        <span className="size-1.5 rounded-full bg-white/15" />
        <span className="size-1.5 rounded-full bg-white/10" />
        <div className="ml-2 flex-1 truncate rounded-md bg-black/30 px-2 py-[3px] text-center font-mono text-[8px] tracking-wide text-lav-200/45">
          {url}
        </div>
      </div>
      {children}
    </div>
  );
}

function SiteMockupHero() {
  return (
    <div className="relative h-[104px] p-4">
      <div className="mb-2 font-mono text-[5px] uppercase tracking-[0.24em] text-lav-400/80">
        · Digital solutions
      </div>
      <div className="text-[13px] font-medium leading-[1.06] tracking-[-0.03em] text-white">
        Desarrollamos
        <br />
        soluciones digitales
        <br />
        <span className="text-lav-300">inteligentes.</span>
      </div>
      <div className="mt-2 max-w-[92%] text-[5.5px] leading-[1.6] text-white/40">
        Páginas web y sistemas empresariales que impulsan tu negocio.
      </div>
      <div className="mt-3 flex items-center gap-1.5">
        <span className="rounded-full bg-lav-200 px-2.5 py-[4px] text-[5.5px] font-medium text-plum-900">
          Iniciar proyecto
        </span>
        <span className="rounded-full border border-white/20 px-2.5 py-[4px] text-[5.5px] text-white/70">
          Ver soluciones
        </span>
      </div>
    </div>
  );
}

function PhoneFrameHero({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative rounded-[1.6rem] border border-white/15 bg-[#100a20] p-[5px] shadow-[0_30px_80px_-30px_rgba(5,3,10,0.9)] ${className}`}>
      <div className="relative overflow-hidden rounded-[1.3rem] bg-[#08040f]">
        <div className="absolute left-1/2 top-1.5 z-10 h-1 w-10 -translate-x-1/2 rounded-full bg-white/15" />
        {children}
      </div>
    </div>
  );
}
