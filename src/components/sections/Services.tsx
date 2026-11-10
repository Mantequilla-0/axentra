"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FadeUp } from "@/components/effects/FadeUp";
import { MaskReveal } from "@/components/effects/MaskReveal";
import { ParallaxElement } from "@/components/effects/ParallaxElement";
import { GrainOverlay } from "@/components/effects/GrainOverlay";
import { webServices, softwareServices } from "@/content/services";
import { BrowserFrame, PhoneFrame } from "@/components/visuals/frames";

gsap.registerPlugin(ScrollTrigger);

function CatalogMockup() {
  return (
    <div className="bg-[#0a0420]">
      <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="size-2 rounded-[2px] bg-lav-300/80" />
          <span className="text-[6px] uppercase tracking-[0.28em] text-white/70">
            Catálogo
          </span>
        </div>
        <div className="flex gap-3 text-[5px] uppercase tracking-[0.16em] text-white/25">
          <span>Inicio</span>
          <span>Productos</span>
          <span>Nosotros</span>
          <span>Contacto</span>
        </div>
        <span className="rounded-full border border-lav-400/30 px-2 py-[2px] text-[5px] text-lav-200/80">
          Cotizar
        </span>
      </div>
      <div className="px-4 pb-4 pt-4">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-mono text-[5px] uppercase tracking-[0.2em] text-lav-400/70">
              Colección
            </p>
            <p className="mt-1 text-[11px] font-medium tracking-[-0.02em] text-white">
              Todo lo que ofrecemos
            </p>
          </div>
          <div className="flex gap-1">
            {["Todos", "Nuevo", "Popular"].map((filter, index) => (
              <span
                key={filter}
                className={`rounded-full px-2 py-[3px] text-[4.5px] ${
                  index === 0
                    ? "bg-lav-200 text-plum-900"
                    : "border border-white/10 text-white/35"
                }`}
              >
                {filter}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-1.5">
          {[
            "from-lav-300/35 to-violet-500/15",
            "from-plum-600/50 to-lav-400/20",
            "from-violet-500/30 to-plum-800/40",
            "from-lav-200/25 to-violet-500/15",
            "from-plum-700/50 to-lav-300/20",
            "from-lav-400/30 to-plum-800/40",
          ].map((tone, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-md border border-white/[0.07] bg-white/[0.02]"
            >
              <div className={`h-9 bg-gradient-to-br ${tone}`} />
              <div className="space-y-1 p-1.5">
                <div className="h-1 w-[70%] rounded-full bg-white/20" />
                <div className="h-1 w-[45%] rounded-full bg-white/10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Services() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      (gsap.utils.toArray(".svc-card") as HTMLElement[]).forEach((card) => {
        gsap.fromTo(
          card,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "bottom 60%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="servicios"
      className="relative overflow-hidden border-y border-lav-400/10 py-24 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="orb -right-32 top-1/4 size-[460px] bg-violet-500/15"
      />
      <GrainOverlay opacity={0.03} />

      <div className="container-x relative">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <FadeUp className="max-w-2xl">
            <p className="eyebrow">Qué hacemos</p>
            <h2 className="h2 mt-6">
              Soluciones digitales para cada{" "}
              <span className="text-lavender-gradient">etapa de tu negocio.</span>
            </h2>
            <p className="lead mt-6">
              Dos formas de empezar: construir tu presencia digital o digitalizar
              tu operación. En ambos casos, el punto de partida es entender qué
              necesita tu negocio.
            </p>
          </FadeUp>
          <FadeUp delay={100}>
            <p className="max-w-[16rem] font-mono text-[0.6875rem] uppercase leading-relaxed tracking-[0.16em] text-lav-200/30">
              Cada proyecto se construye a la medida. No hay plantillas.
            </p>
          </FadeUp>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <FadeUp
            delay={60}
            className="svc-card surface surface-hover group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] p-6 sm:p-9"
          >
            <div className="relative flex items-center justify-between">
              <span className="pill">{webServices.eyebrow}</span>
              <span className="flex size-11 items-center justify-center rounded-full border border-lav-400/20 bg-plum-900/40 text-lav-300">
                <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M3 4h18M3 10h18M3 16h18M3 22h18" />
                </svg>
              </span>
            </div>
            <h3 className="mt-7 text-2xl font-medium tracking-[-0.02em] text-white sm:text-[1.75rem]">
              {webServices.title}
            </h3>
            <p className="relative mt-3 max-w-[34rem] text-[0.9375rem] leading-relaxed text-lav-200/55">
              {webServices.headline}
            </p>
            <ul className="relative mt-7 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
              {webServices.items.slice(0, 6).map((item) => (
                <li key={item} className="flex items-start gap-2 text-[0.8125rem] text-lav-200/65">
                  <span aria-hidden="true" className="mt-[7px] size-1 shrink-0 rounded-full bg-lav-400/70" />
                  {item}
                </li>
              ))}
            </ul>
            <MaskReveal direction="up" className="mt-7">
              <div className="relative mt-2 overflow-hidden rounded-xl border border-white/[0.07] bg-[#0a0420]/80">
                <CatalogMockup />
              </div>
            </MaskReveal>
            <div className="relative mt-7 flex items-center justify-between gap-4 pt-1">
              <Link href="#desarrollo-web" className="link-underline text-sm font-medium">
                Conocer más
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
              <Link href="#contacto" className="btn btn-ghost btn-sm">
                {webServices.cta}
              </Link>
            </div>
          </FadeUp>

          <FadeUp delay={160} className="svc-card surface surface-hover group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] p-6 sm:p-9">
            <div className="relative flex items-center justify-between">
              <span className="pill">{softwareServices.eyebrow}</span>
              <span className="flex size-11 items-center justify-center rounded-full border border-lav-400/20 bg-plum-900/40 text-lav-300">
                <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </span>
            </div>
            <h3 className="mt-7 text-2xl font-medium tracking-[-0.02em] text-white sm:text-[1.75rem]">
              {softwareServices.title}
            </h3>
            <p className="relative mt-3 max-w-[34rem] text-[0.9375rem] leading-relaxed text-lav-200/55">
              {softwareServices.headline}
            </p>
            <ul className="relative mt-7 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
              {softwareServices.items.slice(0, 6).map((item) => (
                <li key={item} className="flex items-start gap-2 text-[0.8125rem] text-lav-200/65">
                  <span aria-hidden="true" className="mt-[7px] size-1 shrink-0 rounded-full bg-lav-400/70" />
                  {item}
                </li>
              ))}
            </ul>
            <MaskReveal direction="down" className="mt-7">
              <div className="relative mt-2 overflow-hidden rounded-xl border border-white/[0.07] bg-[#07030f]/90 p-2">
                <div className="flex items-center justify-between border-b border-white/[0.06] px-3 py-2">
                  <div className="flex items-center gap-1.5">
                    <span className="size-1.5 rounded-sm bg-lav-300/70" />
                    <span className="text-[6px] uppercase tracking-[0.28em] text-white/80">
                      GRUMACAR
                    </span>
                  </div>
                  <span className="h-2 w-8 rounded-sm bg-white/[0.06]" />
                </div>
                <div className="grid grid-cols-3 gap-1.5 p-3">
                  {[
                    ["Pedidos", "24"],
                    ["Producción", "08"],
                    ["Clientes", "132"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-md border border-white/[0.06] bg-white/[0.02] p-2">
                      <p className="text-[0.5rem] uppercase tracking-[0.12em] text-white/25">
                        {label}
                      </p>
                      <p className="mt-1 text-base font-medium leading-none tracking-[-0.02em] text-white/85">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
                <svg viewBox="0 0 240 60" className="mx-3 mb-3 h-[58px] w-full" aria-hidden="true" fill="none">
                  <defs>
                    <linearGradient id="svc-bars" x1="0" y1="1" x2="0" y2="0">
                      <stop stopColor="#6243A8" stopOpacity="0.35" />
                      <stop offset="1" stopColor="#DBCCFF" stopOpacity="0.95" />
                    </linearGradient>
                  </defs>
                  {[8, 20, 32, 44, 56, 68, 80, 92, 104, 116, 128, 140, 152, 164, 176, 188, 200, 212, 224].map(
                    (x, index) => {
                      const height = [14, 22, 18, 30, 26, 38, 32, 44, 36, 48, 42, 52, 46, 40, 50, 44, 54, 48, 56][index];
                      return (
                        <rect key={x} x={x} y={60 - height} width="6" height={height} rx="3" fill="url(#svc-bars)" opacity={0.35 + index * 0.03} />
                      );
                    },
                  )}
                </svg>
              </div>
            </MaskReveal>
            <div className="relative mt-7 flex items-center justify-between gap-4 pt-1">
              <Link href="#software" className="link-underline text-sm font-medium">
                Conocer más
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
              <Link href="#contacto" className="btn btn-ghost btn-sm">
                {softwareServices.cta}
              </Link>
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={120} className="mt-8">
          <p className="flex items-center gap-3 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-lav-200/30">
            <svg className="size-3.5" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" x2="12" y1="3" y2="15" />
            </svg>
            El alcance de cada proyecto se define contigo antes de comenzar
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
