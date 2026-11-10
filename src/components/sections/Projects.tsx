"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";
import { FadeUp } from "@/components/effects/FadeUp";
import { MaskReveal } from "@/components/effects/MaskReveal";
import { DashboardMockup, PosMockup } from "@/components/visuals/mockups";
import { projects } from "@/content/projects";
import type { Project } from "@/content/projects";

const statusStyles: Record<Project["status"], string> = {
  implementado: "border-emerald-300/30 bg-emerald-300/10 text-emerald-100/90",
  prototipo: "border-lav-300/30 bg-lav-300/10 text-lav-200",
  concepto: "border-violet-500/35 bg-violet-500/12 text-lav-200/80",
};

function ProjectMedia({ project }: { project: Project }) {
  if (project.id === "vitalia" && project.images?.[0]) {
    return (
      <MaskReveal direction="up" className="h-full w-full">
        <Image
          src={project.images[0].src}
          alt={project.images[0].alt}
          fill
          sizes="(min-width: 1024px) 640px, 100vw"
          className="object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
        />
      </MaskReveal>
    );
  }

  if (project.id === "grumacar-os") {
    return (
      <MaskReveal direction="down" className="h-full w-full p-6 sm:p-8">
        <div className="relative overflow-hidden rounded-lg border border-white/10 shadow-2xl">
          <DashboardMockup className="h-full w-full" />
        </div>
      </MaskReveal>
    );
  }

  return (
    <MaskReveal direction="down" className="h-full w-full p-6 sm:p-8">
      <div className="relative overflow-hidden rounded-lg border border-white/10 shadow-2xl">
        <PosMockup className="h-full w-full" />
      </div>
    </MaskReveal>
  );
}

export function ProjectCard({
  project,
  className = "",
  featured = false,
}: {
  project: Project;
  className?: string;
  featured?: boolean;
}) {
  return (
    <article
      className={`group surface surface-hover relative flex flex-col overflow-hidden rounded-[1.5rem] ${className}`}
    >
      <div
        className={`relative overflow-hidden border-b border-white/[0.06] bg-[#08040f] ${
          featured ? "aspect-[16/10] sm:aspect-[16/9]" : "aspect-[16/11]"
        }`}
      >
        <ProjectMedia project={project} />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05030a]/85 via-[#05030a]/10 to-transparent"
        />
        <div className="absolute inset-x-4 top-4 flex items-start justify-between gap-3 sm:inset-x-5 sm:top-5">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[0.5625rem] uppercase tracking-[0.16em] backdrop-blur-md ${statusStyles[project.status]}`}
          >
            <span
              aria-hidden="true"
              className={`size-1 rounded-full ${
                project.status === "implementado"
                  ? "bg-emerald-300"
                  : "bg-lav-300"
              }`}
            />
            {project.statusLabel}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-lav-400/70">
          {project.category}
        </p>
        <h3 className="mt-2.5 text-xl font-medium tracking-[-0.02em] text-white sm:text-2xl">
          {project.name}
        </h3>
        <p className="mt-2.5 text-[0.875rem] leading-relaxed text-lav-200/50">
          {project.summary}
        </p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 3).map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between gap-3 border-t border-lav-400/10 pt-4">
          <a href="#contacto" className="link-underline text-[0.8125rem] font-medium">
            Conversar sobre este proyecto
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </a>
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-lav-200/40 transition-colors hover:text-lav-100"
            >
              Sitio en vivo
              <ExternalLink className="size-3" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

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
          <FadeUp className="max-w-2xl">
            <p className="eyebrow">Proyectos</p>
            <h2 className="h2 mt-6">
              De la idea a una{" "}
              <span className="text-lavender-gradient">solución funcional.</span>
            </h2>
            <p className="lead mt-6">
              Desarrollamos experiencias digitales y sistemas que responden a las
              necesidades reales de cada negocio.
            </p>
          </FadeUp>
          <FadeUp delay={100}>
            <p className="max-w-[16rem] font-mono text-[0.6875rem] uppercase leading-relaxed tracking-[0.16em] text-lav-200/30">
              Estado real de cada proyecto: implementado, prototipo o concepto.
            </p>
          </FadeUp>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          <FadeUp delay={60} className="lg:col-span-7">
            <ProjectCard project={vitalia} featured className="h-full" />
          </FadeUp>
          <FadeUp delay={120} className="lg:col-span-5">
            <ProjectCard project={grumacar} className="h-full" />
          </FadeUp>
          <FadeUp delay={60} className="lg:col-span-5">
            <ProjectCard project={puntoAbarrotes} className="h-full" />
          </FadeUp>

          <FadeUp delay={120} className="lg:col-span-7">
            <div className="surface relative flex h-full min-h-[18rem] flex-col justify-between overflow-hidden rounded-[1.5rem] p-7 sm:p-9">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-violet-500/25 blur-[70px]"
              />
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
                <Link href="#proceso" className="link-underline text-[0.8125rem] text-lav-200/60">
                  Cómo trabajamos
                  <ArrowRight className="size-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
