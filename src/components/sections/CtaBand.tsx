import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { ParticleWaves } from "@/components/effects/ParticleWaves";
import { whatsappHref } from "@/config/site";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(75%_120%_at_50%_0%,#2b1166_0%,#140042_38%,#08040f_78%,#05030a_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lav-400/30 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-lav-400/20 to-transparent"
      />

      {/* anillos concéntricos */}
      <svg
        aria-hidden="true"
        viewBox="0 0 900 900"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[900px] max-w-none -translate-x-1/2 -translate-y-1/2 text-lav-400/12"
        fill="none"
      >
        <circle cx="450" cy="450" r="220" stroke="currentColor" />
        <circle cx="450" cy="450" r="310" stroke="currentColor" opacity="0.6" />
        <circle cx="450" cy="450" r="400" stroke="currentColor" opacity="0.3" />
        <circle cx="450" cy="450" r="449" stroke="currentColor" opacity="0.15" />
      </svg>
      <div
        aria-hidden="true"
        className="aurora pointer-events-none absolute left-1/2 top-0 -z-10 h-[320px] w-[720px] -translate-x-1/2 rounded-full bg-violet-500/25 blur-[120px]"
      />

      {/* Particle Waves (Efecto 02) en sección de transición CTA */}
      <div className="particle-wrap absolute inset-0 -z-5 overflow-hidden">
        <ParticleWaves
          className="absolute inset-0 w-full h-full"
          particleCount={80}
          waveAmplitude={35}
          waveFrequency={0.008}
          waveSpeed={0.5}
          particleSize={2}
          particleOpacity={0.4}
          colorPalette={["#9E84DB", "#6243A8", "#DBCCFF"]}
          pauseWhenHidden={false}
        />
      </div>

      <div className="container-x relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Siguiente paso</p>
          <h2 className="h2 mt-6 text-[clamp(2.1rem,5vw,3.75rem)]">
            Tu próximo proyecto comienza con{" "}
            <span className="text-lavender-gradient">una idea.</span>
          </h2>
          <p className="lead mx-auto mt-6 max-w-xl">
            Cuéntanos qué necesitas. En AXENTRA podemos ayudarte a convertirlo en
            una solución digital.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="#contacto" className="btn btn-primary w-full sm:w-auto">
              Hablemos de tu proyecto
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost w-full sm:w-auto"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Escribir por WhatsApp
            </a>
          </div>

          <p className="mt-6 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-lav-200/30">
            Sin compromiso · primero entendemos qué necesitas
          </p>
        </Reveal>
      </div>
    </section>
  );
}
