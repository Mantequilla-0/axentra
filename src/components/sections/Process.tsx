import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/content/services";

export function Process() {
  return (
    <section
      id="proceso"
      className="relative overflow-hidden border-y border-lav-400/10 py-24 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(90%_60%_at_50%_100%,#180547_0%,#08040f_55%,#05030a_100%)]"
      />

      <div className="container-x relative">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <Reveal className="max-w-xl">
            <p className="eyebrow">Proceso</p>
            <h2 className="h2 mt-6">
              De tu necesidad a una{" "}
              <span className="text-lavender-gradient">solución.</span>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="max-w-sm text-[0.9375rem] leading-relaxed text-lav-200/45">
              Un proceso claro, sin sorpresas. Cada etapa se acuerda contigo antes
              de avanzar a la siguiente.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-16">
          {/* líneas guía */}
          <div
            aria-hidden="true"
            className="absolute bottom-3 left-[5px] top-2 w-px bg-gradient-to-b from-lav-400/40 via-lav-400/15 to-transparent md:hidden"
          />
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-[5px] hidden h-px bg-gradient-to-r from-lav-400/40 via-lav-400/20 to-transparent md:block"
          />

          <ol className="grid gap-10 md:grid-cols-4 md:gap-6">
            {processSteps.map((step, index) => (
              <Reveal
                as="li"
                key={step.number}
                delay={index * 90}
                className="group relative pl-9 md:pl-0 md:pt-14"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1 size-[11px] rounded-full border border-lav-300/60 bg-plum-900 shadow-[0_0_0_4px_rgba(5,3,10,1)] transition-all duration-500 group-hover:border-lav-200 group-hover:shadow-[0_0_0_4px_rgba(5,3,10,1),0_0_16px_4px_rgba(158,132,219,0.45)] md:left-0 md:top-0"
                />
                <span className="font-mono text-[0.625rem] uppercase tracking-[0.22em] text-lav-400/60">
                  {step.number}
                </span>
                <h3 className="mt-3 text-lg font-medium tracking-[-0.01em] text-white sm:text-xl">
                  {step.title}
                </h3>
                <p className="mt-2.5 max-w-[19rem] text-[0.875rem] leading-relaxed text-lav-200/45">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
