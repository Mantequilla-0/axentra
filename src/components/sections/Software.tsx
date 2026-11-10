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
import { BrowserFrame } from "@/components/visuals/frames";
import { softwareServices } from "@/content/services";

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  { icon: "clipboard", label: "Sistemas administrativos" },
  { icon: "box", label: "Inventarios y ventas" },
  { icon: "workflow", label: "Control de operaciones" },
  { icon: "database", label: "Gestión de información" },
  { icon: "chart", label: "Aplicaciones web a medida" },
];

export function Software() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pinned storytelling: título permanece, interfaz se revela progresivamente
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#software-story",
          start: "top top",
          end: "+=120%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      tl.fromTo(
        ".software-panel",
        { opacity: 0, y: 40, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power2.out" },
        0.2
      );

      tl.to(".software-reveal", {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1,
        ease: "power2.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="software"
      className="relative overflow-hidden border-y border-lav-400/10 py-24 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="orb -left-24 bottom-0 size-[420px] bg-plum-600/35"
      />
      <GrainOverlay opacity={0.03} />

      <div className="container-x relative">
        <FadeUp>
          <p className="eyebrow">Software empresarial</p>
          <h2 className="h2 mt-6">
            Digitaliza tus operaciones.{" "}
            <span className="text-lavender-gradient">
              Simplifica tu trabajo.
            </span>
          </h2>
          <p className="lead mt-6 max-w-lg">
            Desarrollamos sistemas personalizados que ayudan a organizar
            información, administrar procesos y mejorar la operación de tu
            empresa.
          </p>
        </FadeUp>

        {/* Pinned storytelling panel */}
        <div id="software-story" className="relative mt-20">
          <FadeUp className="relative z-10">
            <h3 className="text-xl font-medium tracking-[-0.01em] text-white sm:text-2xl">
              Cada negocio opera diferente. Por eso construimos herramientas a su
              medida.
            </h3>
          </FadeUp>

          <MaskReveal direction="down" className="mt-12">
            <div className="relative overflow-hidden rounded-[2rem] border border-lav-400/12 bg-[#08040f] shadow-[0_40px_120px_-60px_rgba(0,0,0,0.9)]">
              <BrowserFrame
                url="sistema.tuempresa.mx/panel"
                className="software-panel relative z-10 rotate-[-0.6deg] opacity-0 translate-y-4 scale-95"
              >
                <div className="relative h-[320px]">
                  {/* barra superior */}
                  <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-2.5">
                    <div className="flex items-center gap-1.5">
                      <svg viewBox="0 0 128 100" className="h-2.5 w-3 text-lav-200" aria-hidden="true">
                        <path d="M33.5 82.5 55.5 30.5" stroke="currentColor" strokeWidth="16" strokeLinecap="round" />
                        <path d="M64 30.5 100.5 82.5" stroke="currentColor" strokeWidth="22" strokeLinecap="round" />
                      </svg>
                      <span className="text-[6.5px] uppercase tracking-[0.3em] text-white/85">
                        GRUMACAR OS
                      </span>
                    </div>
                    <div className="flex gap-3 text-[5px] uppercase tracking-[0.16em] text-white/30">
                      <span>Panel</span>
                      <span>Pedidos</span>
                      <span>Reportes</span>
                    </div>
                    <span className="rounded-full border border-lav-400/30 px-2 py-[2px] text-[5px] text-lav-200/80">
                      Producción
                    </span>
                  </div>

                  {/* KPIs */}
                  <div className="px-4 pt-4">
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        ["Pedidos activos", "24"],
                        ["En producción", "08"],
                        ["Entregados mes", "132"],
                      ].map(([label, value]) => (
                        <div key={label} className="rounded-md border border-white/[0.07] bg-white/[0.02] p-2">
                          <p className="text-[0.5rem] uppercase tracking-[0.12em] text-white/25">
                            {label}
                          </p>
                          <p className="mt-1 text-base font-medium leading-none tracking-[-0.02em] text-white/85">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* gráfica */}
                  <div className="mx-4 mb-4 rounded-md border border-white/[0.06] bg-white/[0.02] p-2">
                    <svg viewBox="0 0 240 52" className="h-[52px] w-full" aria-hidden="true" fill="none">
                      <defs>
                        <linearGradient id="sw-area" x1="0" y1="1" x2="0" y2="0">
                          <stop stopColor="#9E84DB" stopOpacity="0.45" />
                          <stop offset="1" stopColor="#9E84DB" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path d="M0 42 20 36 40 38 60 26 80 30 100 18 120 24 140 12 160 16 180 8 200 14 220 6 240 10" stroke="#DBCCFF" strokeWidth="1.1" strokeLinecap="round" />
                      <path d="M0 42 20 36 40 38 60 26 80 30 100 18 120 24 140 12 160 16 180 8 200 14 220 6 240 10 240 52 0 52Z" fill="url(#sw-area)" />
                      {[40, 80, 120, 160, 200].map((x) => (
                        <circle key={x} cx={x} cy={x === 40 ? 38 : x === 80 ? 30 : x === 120 ? 24 : x === 160 ? 16 : 14} r="1.4" fill="#DBCCFF" />
                      ))}
                    </svg>
                  </div>

                  {/* tabla */}
                  <div className="rounded-md border border-white/[0.07] bg-white/[0.025]">
                    <div className="flex items-center justify-between border-b border-white/[0.06] px-2 py-1.5">
                      <p className="text-[5px] text-white/45">Pedidos recientes</p>
                    </div>
                    {[
                      { id: "GM-1042", client: "Cliente industrial", status: "En producción" },
                      { id: "GM-1041", client: "Bordado corporativo", status: "En revisión" },
                    ].map((row) => (
                      <div key={row.id} className="flex items-center gap-2 px-2 py-[5px] text-[4.5px]">
                        <span className="font-mono text-white/30">{row.id}</span>
                        <span className="flex-1 truncate text-white/60">{row.client}</span>
                        <span className="rounded-sm bg-lav-400/12 px-1 py-[1px] text-lav-200/80">
                          {row.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </BrowserFrame>

              {/* capa revelada con scroll */}
              <div className="software-reveal absolute inset-0 rounded-[2rem] border border-transparent bg-[#05030a]/95 clip-[inset(100%_0_0_0)]">
                <div className="p-6 sm:p-9">
                  <p className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-lav-200/40 mb-1">
                    módulos revelados
                  </p>
                  <div className="grid gap-x-4 gap-y-2 sm:grid-cols-2">
                    {capabilities.map(({ icon: name, label }) => {
                      const icons: Record<string, string> = {
                        clipboard: `<path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />`,
                        box: `<path d="M21 16V8a2 2 0 00-2-2h-5l-4-4H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2z" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />`,
                        workflow: `<path d="M13 10V3L4 14h7v7l9-11h-7" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />`,
                        database: `<ellipse cx="12" cy="5" rx="9" ry="3" stroke="currentColor" stroke-width="1.8" fill="none" /><path d="M3 5v10c0 1.66 6 3 12 3s12-1.34 12-3V5" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round" />`,
                        chart: `<path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />`,
                      };
                      return (
                        <div
                          key={label}
                          className="flex items-center gap-3 p-3 rounded-lg border border-lav-400/10 bg-white/[0.02]"
                        >
                          <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-lav-400/20 bg-plum-900/40 text-lav-300">
                            <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" dangerouslySetInnerHTML={{ __html: icons[name] }} />
                          </div>
                          <span className="text-[0.9375rem] text-lav-200/75">{label}</span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-8 flex items-center justify-between gap-4 pt-6 border-t border-white/[0.08]">
                    <Link href="#contacto" className="btn btn-primary">
                      Quiero desarrollar un sistema
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </Link>
                    <p className="max-w-md text-[0.8125rem] leading-relaxed text-lav-200/35">
                      {softwareServices.benefits[5]} — empezamos con lo esencial y
                      ampliamos por etapas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </MaskReveal>
        </div>
      </div>
    </section>
  );
}
