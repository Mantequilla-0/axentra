import Link from "next/link";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { CursorSpotlight } from "@/components/ui/CursorSpotlight";
import { HeroComposition } from "@/components/visuals/mockups";

const microFacts = [
  "Villahermosa, Tabasco",
  "Proyectos remotos en todo México",
  "Atención directa con quien desarrolla",
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pb-20 pt-32 sm:pb-24 lg:pt-36"
    >
      {/* ambiente */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_90%_at_15%_-10%,#1d0850_0%,#0b0322_38%,#05030a_72%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 grid-lines opacity-70"
      />
      <div
        aria-hidden="true"
        className="orb -right-24 top-0 -z-10 size-[520px] bg-violet-500/25"
      />
      <div
        aria-hidden="true"
        className="orb -left-40 bottom-0 -z-10 size-[420px] bg-plum-600/40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-ink"
      />
      <CursorSpotlight />

      <div className="container-x relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
          <div className="max-w-[36rem]">
            <div className="rise" style={{ animationDelay: "60ms" }}>
              <span className="pill">
                <Sparkles className="size-3 text-lav-300" aria-hidden="true" />
                AXENTRA · Digital Solutions
              </span>
            </div>

            <h1
              className="rise display mt-7 text-[clamp(2.6rem,7.2vw,4.6rem)]"
              style={{ animationDelay: "140ms" }}
            >
              Desarrollamos
              <br />
              soluciones digitales
              <br />
              <span className="text-lavender-gradient">inteligentes.</span>
            </h1>

            <p
              className="rise lead mt-7 max-w-[32rem]"
              style={{ animationDelay: "240ms" }}
            >
              Desde páginas web profesionales hasta sistemas empresariales
              personalizados. Transformamos tus ideas y necesidades en soluciones
              tecnológicas que impulsan tu negocio.
            </p>

            <div
              className="rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
              style={{ animationDelay: "330ms" }}
            >
              <Link href="#contacto" className="btn btn-primary">
                Iniciar un proyecto
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link href="#servicios" className="btn btn-ghost">
                Explorar soluciones
              </Link>
            </div>

            <p
              className="rise mt-6 flex items-start gap-2 text-[0.8125rem] text-lav-200/45"
              style={{ animationDelay: "420ms" }}
            >
              <span
                aria-hidden="true"
                className="mt-[7px] h-px w-6 shrink-0 bg-lav-400/50"
              />
              Tecnología a un precio justo. Soluciones pensadas para crecer.
            </p>
          </div>

          <div
            className="rise relative lg:pl-4"
            style={{ animationDelay: "300ms" }}
          >
            <HeroComposition />
          </div>
        </div>

        {/* micro datos */}
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
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
