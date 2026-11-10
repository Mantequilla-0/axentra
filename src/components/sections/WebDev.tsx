import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { BrowserFrame, PhoneFrame } from "@/components/visuals/frames";
import { webServices } from "@/content/services";

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

export function WebDev() {
  return (
    <section
      id="desarrollo-web"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="orb -right-32 top-1/4 size-[460px] bg-violet-500/15"
      />

      <div className="container-x relative">
        <div className="grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <div>
            <Reveal>
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
            </Reveal>

            <Reveal delay={100}>
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
                      <Check className="size-2.5 text-lav-300" aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-9 flex flex-wrap gap-2">
                {webServices.benefits.slice(0, 4).map((benefit) => (
                  <span key={benefit} className="tag">
                    {benefit}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={220}>
              <Link href="#contacto" className="btn btn-primary mt-9">
                Quiero una página web
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={120} className="relative">
            <div className="relative mx-auto max-w-[560px] lg:ml-auto">
              <div
                aria-hidden="true"
                className="absolute -inset-8 rounded-[2rem] bg-[radial-gradient(60%_60%_at_60%_40%,rgba(98,67,168,0.35),transparent_70%)] blur-2xl"
              />

              <BrowserFrame
                url="tunegocio.mx"
                className="relative z-10 rotate-[0.8deg]"
              >
                <CatalogMockup />
              </BrowserFrame>

              <PhoneFrame className="absolute -bottom-8 -left-4 z-20 w-[30%] min-w-[92px] rotate-[-3deg] sm:-left-8">
                <div className="px-2 pb-3 pt-5">
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
                      <div
                        key={item}
                        className="overflow-hidden rounded-[3px] border border-white/[0.08]"
                      >
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

              <div className="absolute -right-2 -top-5 z-20 hidden rounded-lg border border-white/10 bg-[#0c0620]/90 px-2.5 py-1.5 backdrop-blur sm:block">
                <span className="font-mono text-[0.5625rem] uppercase tracking-[0.14em] text-lav-200/60">
                  adaptable · rápido · claro
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
