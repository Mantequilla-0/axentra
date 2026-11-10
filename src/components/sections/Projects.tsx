import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/content/projects";

export function Projects() {
  const [vitalia, grumacar, puntoAbarrotes] = projects;

  return (
    <section id="proyectos" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="orb -right-40 top-40 size-[480px] bg-violet-500/12"
      />

      <div className="container-x relative">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Proyectos</p>
            <h2 className="h2 mt-6">
              De la idea a una{" "}
              <span className="text-lavender-gradient">solución funcional.</span>
            </h2>
            <p className="lead mt-6">
              Desarrollamos experiencias digitales y sistemas que responden a las
              necesidades reales de cada negocio.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <p className="max-w-[16rem] font-mono text-[0.6875rem] uppercase leading-relaxed tracking-[0.16em] text-lav-200/30">
              Cada proyecto se muestra con su estado real: en producción,
              prototipo o concepto.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          <Reveal delay={60} className="lg:col-span-7">
            <ProjectCard project={vitalia} featured className="h-full" />
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5">
            <ProjectCard project={grumacar} className="h-full" />
          </Reveal>

          <Reveal delay={60} className="lg:col-span-5">
            <ProjectCard project={puntoAbarrotes} className="h-full" />
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7">
            <div className="surface relative flex h-full min-h-[18rem] flex-col justify-between overflow-hidden rounded-[1.5rem] p-7 sm:p-9">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-violet-500/25 blur-[70px]"
              />
              <svg
                aria-hidden="true"
                viewBox="0 0 400 400"
                className="pointer-events-none absolute -bottom-24 -right-16 size-[22rem] text-lav-400/25"
                fill="none"
              >
                <circle cx="200" cy="200" r="120" stroke="currentColor" />
                <circle cx="200" cy="200" r="160" stroke="currentColor" opacity="0.55" />
                <circle cx="200" cy="200" r="199" stroke="currentColor" opacity="0.3" />
                <circle cx="200" cy="80" r="3" fill="#DBCCFF" />
              </svg>

              <div className="relative">
                <span className="pill">Siguiente proyecto</span>
                <h3 className="mt-6 max-w-[16ch] text-2xl font-medium leading-[1.15] tracking-[-0.025em] text-white sm:text-[1.85rem]">
                  Tu negocio puede ser el{" "}
                  <span className="text-lavender-gradient">siguiente.</span>
                </h3>
                <p className="mt-4 max-w-[30rem] text-[0.9375rem] leading-relaxed text-lav-200/50">
                  Cuéntanos qué necesitas resolver. A partir de ahí definimos si
                  conviene una página web, un sistema o una combinación de ambos.
                </p>
              </div>

              <div className="relative mt-8 flex flex-wrap items-center gap-4">
                <Link href="#contacto" className="btn btn-primary">
                  Cuéntanos tu idea
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <Link
                  href="#proceso"
                  className="link-underline text-[0.8125rem] text-lav-200/60"
                >
                  Cómo trabajamos
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
