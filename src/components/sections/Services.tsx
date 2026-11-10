import Link from "next/link";
import {
  ArrowUpRight,
  Code2,
  LayoutTemplate,
  MonitorSmartphone,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { softwareServices, webServices } from "@/content/services";

function WebVisual() {
  return (
    <div className="relative mt-9 overflow-hidden rounded-xl border border-white/[0.07] bg-[#0a0420]/80">
      <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-3 py-2">
        <span className="size-1.5 rounded-full bg-white/15" />
        <span className="size-1.5 rounded-full bg-white/10" />
        <span className="size-1.5 rounded-full bg-white/10" />
        <span className="ml-2 h-2 w-24 rounded-sm bg-white/[0.05]" />
      </div>
      <div className="grid grid-cols-[1.15fr_0.85fr] gap-4 p-4">
        <div className="space-y-2">
          <div className="h-1.5 w-14 rounded-full bg-lav-400/40" />
          <div className="h-2.5 w-[86%] rounded-sm bg-white/25" />
          <div className="h-2.5 w-[64%] rounded-sm bg-white/15" />
          <div className="h-1 w-[92%] rounded-full bg-white/[0.07]" />
          <div className="h-1 w-[76%] rounded-full bg-white/[0.07]" />
          <div className="flex gap-1.5 pt-1">
            <span className="h-4 w-16 rounded-full bg-lav-200/80" />
            <span className="h-4 w-14 rounded-full border border-white/15" />
          </div>
        </div>
        <div className="relative h-[92px] overflow-hidden rounded-lg border border-lav-400/20 bg-gradient-to-br from-violet-500/30 to-plum-800/40">
          <div className="absolute inset-x-3 top-3 h-8 rounded-md border border-white/20 bg-white/10" />
          <div className="absolute inset-x-5 top-7 h-8 rounded-md border border-lav-200/30 bg-lav-200/15" />
          <div className="absolute inset-x-7 top-11 h-8 rounded-md border border-white/30 bg-white/20" />
          <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#0a0420] to-transparent" />
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-white/[0.06] px-4 py-2">
        {["Diseño", "Responsive", "SEO"].map((tag) => (
          <span
            key={tag}
            className="font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-lav-200/30"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function SoftwareVisual() {
  return (
    <div className="relative mt-9 overflow-hidden rounded-xl border border-white/[0.07] bg-[#07030f]/90">
      <div className="flex items-center justify-between border-b border-white/[0.06] px-3 py-2">
        <div className="flex items-center gap-1.5">
          <span className="size-1.5 rounded-sm bg-lav-300/70" />
          <span className="h-1.5 w-16 rounded-full bg-white/15" />
        </div>
        <span className="h-2 w-8 rounded-sm bg-white/[0.06]" />
      </div>
      <div className="grid grid-cols-3 gap-1.5 p-3">
        {[
          ["Pedidos", "24"],
          ["Producción", "08"],
          ["Clientes", "132"],
        ].map(([label, value]) => (
          <div
            key={label}
            className="rounded-md border border-white/[0.06] bg-white/[0.02] p-2"
          >
            <p className="text-[0.5rem] uppercase tracking-[0.12em] text-white/25">
              {label}
            </p>
            <p className="mt-1 text-base font-medium leading-none tracking-[-0.02em] text-white/85">
              {value}
            </p>
          </div>
        ))}
      </div>
      <div className="mx-3 mb-3 rounded-md border border-white/[0.06] bg-white/[0.02] p-2.5">
        <svg viewBox="0 0 240 60" className="h-[58px] w-full" aria-hidden="true" fill="none">
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
                <rect
                  key={x}
                  x={x}
                  y={60 - height}
                  width="6"
                  height={height}
                  rx="3"
                  fill="url(#svc-bars)"
                  opacity={0.35 + index * 0.03}
                />
              );
            },
          )}
        </svg>
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section
      id="servicios"
      className="relative overflow-hidden border-y border-lav-400/10 py-24 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(90%_70%_at_50%_0%,#1a0748_0%,#0a0420_45%,#05030a_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 dot-grid opacity-40"
      />

      <div className="container-x relative">
        <Reveal className="max-w-2xl">
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
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {/* Desarrollo web */}
          <Reveal delay={80} as="article">
            <div className="surface surface-hover group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] p-6 sm:p-9">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full bg-violet-500/20 blur-[70px] transition-opacity duration-500 group-hover:opacity-100 sm:opacity-70"
              />
              <div className="relative flex items-center justify-between">
                <span className="pill">{webServices.eyebrow}</span>
                <span className="flex size-11 items-center justify-center rounded-full border border-lav-400/20 bg-plum-900/40 text-lav-300">
                  <LayoutTemplate className="size-5" strokeWidth={1.5} aria-hidden="true" />
                </span>
              </div>

              <h3 className="relative mt-7 text-2xl font-medium tracking-[-0.02em] text-white sm:text-[1.75rem]">
                {webServices.title}
              </h3>
              <p className="relative mt-3 max-w-[34rem] text-[0.9375rem] leading-relaxed text-lav-200/55">
                {webServices.headline}
              </p>

              <ul className="relative mt-7 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                {webServices.items.slice(0, 6).map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-[0.8125rem] text-lav-200/65"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[7px] size-1 shrink-0 rounded-full bg-lav-400/70"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <WebVisual />

              <div className="relative mt-7 flex items-center justify-between gap-4 pt-1">
                <Link
                  href="#desarrollo-web"
                  className="link-underline text-sm font-medium"
                >
                  Conocer más
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </Link>
                <Link href="#contacto" className="btn btn-ghost btn-sm">
                  {webServices.cta}
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Desarrollo de software */}
          <Reveal delay={160} as="article">
            <div className="surface surface-hover group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] p-6 sm:p-9">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-20 -top-24 size-56 rounded-full bg-lav-400/15 blur-[70px]"
              />
              <div className="relative flex items-center justify-between">
                <span className="pill">{softwareServices.eyebrow}</span>
                <span className="flex size-11 items-center justify-center rounded-full border border-lav-400/20 bg-plum-900/40 text-lav-300">
                  <Code2 className="size-5" strokeWidth={1.5} aria-hidden="true" />
                </span>
              </div>

              <h3 className="relative mt-7 text-2xl font-medium tracking-[-0.02em] text-white sm:text-[1.75rem]">
                {softwareServices.title}
              </h3>
              <p className="relative mt-3 max-w-[34rem] text-[0.9375rem] leading-relaxed text-lav-200/55">
                {softwareServices.headline}
              </p>

              <ul className="relative mt-7 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                {softwareServices.items.slice(0, 6).map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-[0.8125rem] text-lav-200/65"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[7px] size-1 shrink-0 rounded-full bg-lav-400/70"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <SoftwareVisual />

              <div className="relative mt-7 flex items-center justify-between gap-4 pt-1">
                <Link
                  href="#software"
                  className="link-underline text-sm font-medium"
                >
                  Conocer más
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </Link>
                <Link href="#contacto" className="btn btn-ghost btn-sm">
                  {softwareServices.cta}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <p className="mt-8 flex items-center gap-3 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-lav-200/30">
            <MonitorSmartphone className="size-3.5" aria-hidden="true" />
            El alcance de cada proyecto se define contigo antes de comenzar
          </p>
        </Reveal>
      </div>
    </section>
  );
}
