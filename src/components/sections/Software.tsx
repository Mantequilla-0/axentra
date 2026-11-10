import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  ClipboardList,
  Database,
  Workflow,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { BrowserFrame } from "@/components/visuals/frames";
import { DashboardMockup } from "@/components/visuals/mockups";
import { softwareServices } from "@/content/services";

const capabilities = [
  { icon: ClipboardList, label: "Sistemas administrativos" },
  { icon: Boxes, label: "Inventarios y ventas" },
  { icon: Workflow, label: "Control de operaciones" },
  { icon: Database, label: "Gestión de información" },
  { icon: BarChart3, label: "Aplicaciones web a medida" },
];

export function Software() {
  return (
    <section
      id="software"
      className="relative overflow-hidden border-y border-lav-400/10 py-24 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_20%_20%,#1a0748_0%,#08040f_55%,#05030a_100%)]"
      />
      <div
        aria-hidden="true"
        className="orb -left-24 bottom-0 size-[420px] bg-plum-600/35"
      />

      <div className="container-x relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <div className="relative mx-auto max-w-[620px]">
              <div
                aria-hidden="true"
                className="absolute -inset-10 rounded-[2rem] bg-[radial-gradient(55%_55%_at_45%_45%,rgba(158,132,219,0.22),transparent_70%)] blur-2xl"
              />
              <BrowserFrame
                url="sistema.tuempresa.mx/panel"
                className="relative z-10 rotate-[-0.8deg]"
              >
                <DashboardMockup className="h-[300px] sm:h-[340px]" />
              </BrowserFrame>

              <div className="absolute -bottom-5 right-2 z-20 rounded-xl border border-lav-400/25 bg-[#0c0620]/92 px-3 py-2.5 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.9)] backdrop-blur-md sm:-right-4">
                <p className="font-mono text-[0.5625rem] uppercase tracking-[0.18em] text-lav-200/45">
                  acceso
                </p>
                <p className="mt-1 text-[0.8125rem] text-white">
                  Computadora · tablet · móvil
                </p>
              </div>

              <p className="mt-9 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-lav-200/25">
                Vista ilustrativa de interfaz
              </p>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <Reveal>
              <p className="eyebrow">Software empresarial</p>
              <h2 className="h2 mt-6">
                Digitaliza tus operaciones.{" "}
                <span className="text-lavender-gradient">
                  Simplifica tu trabajo.
                </span>
              </h2>
              <p className="lead mt-6">
                Desarrollamos sistemas personalizados que ayudan a organizar
                información, administrar procesos y mejorar la operación de tu
                empresa.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <ul className="mt-9 space-y-3">
                {capabilities.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="group flex items-center gap-3 border-b border-lav-400/10 pb-3 last:border-0"
                  >
                    <span className="flex size-8 items-center justify-center rounded-lg border border-lav-400/20 bg-plum-900/40 text-lav-300 transition-colors group-hover:border-lav-400/45">
                      <Icon className="size-4" strokeWidth={1.6} aria-hidden="true" />
                    </span>
                    <span className="text-[0.9375rem] text-lav-200/75">
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={180}>
              <Link href="#contacto" className="btn btn-primary mt-9">
                Quiero desarrollar un sistema
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <p className="mt-4 max-w-md text-[0.8125rem] leading-relaxed text-lav-200/35">
                {softwareServices.benefits[5]} — empezamos con lo esencial y
                ampliamos por etapas.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
