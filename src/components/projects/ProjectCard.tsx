"use client";

import Image from "next/image";
import { useId, useRef } from "react";
import {
  ArrowUpRight,
  Check,
  ExternalLink,
  X,
} from "lucide-react";
import { DashboardMockup, PosMockup } from "@/components/visuals/mockups";
import type { Project } from "@/content/projects";

const statusStyles: Record<Project["status"], string> = {
  implementado: "border-emerald-300/30 bg-emerald-300/10 text-emerald-100/90",
  prototipo: "border-lav-300/30 bg-lav-300/10 text-lav-200",
  concepto: "border-violet-500/35 bg-violet-500/12 text-lav-200/80",
};

function ProjectMedia({ project }: { project: Project }) {
  if (project.id === "vitalia" && project.images?.[0]) {
    return (
      <Image
        src={project.images[0].src}
        alt={project.images[0].alt}
        fill
        sizes="(min-width: 1024px) 640px, 100vw"
        className="object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.035]"
      />
    );
  }

  if (project.id === "grumacar-os") {
    return (
      <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
        <div className="w-full translate-y-2 overflow-hidden rounded-lg border border-white/10 shadow-2xl transition-transform duration-700 group-hover:translate-y-0">
          <DashboardMockup className="h-[210px] sm:h-[230px]" />
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
      <div className="w-full translate-y-2 overflow-hidden rounded-lg border border-white/10 shadow-2xl transition-transform duration-700 group-hover:translate-y-0">
        <PosMockup />
      </div>
    </div>
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
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const titleId = useId();

  const open = () => dialogRef.current?.showModal();
  const close = () => dialogRef.current?.close();

  return (
    <>
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
            <button
              type="button"
              onClick={open}
              className="link-underline text-[0.8125rem] font-medium"
              aria-haspopup="dialog"
            >
              Conocer el proyecto
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </button>
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-lav-200/40 transition-colors hover:text-lav-100"
              >
                <ExternalLink className="size-3" aria-hidden="true" />
                Sitio
              </a>
            )}
          </div>
        </div>
      </article>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        onClick={(event) => {
          if (event.target === dialogRef.current) close();
        }}
        className="mx-auto my-auto w-[min(44rem,calc(100vw-2rem))] rounded-2xl border border-lav-400/20 bg-[#0a0420] p-0 text-lav-200 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)] backdrop:bg-black/75 backdrop:backdrop-blur-sm"
      >
        <div className="max-h-[85dvh] overflow-y-auto">
          <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-white/[0.07] bg-[#0a0420]/95 px-5 py-4 backdrop-blur sm:px-7">
            <div>
              <p className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-lav-400/70">
                {project.category}
              </p>
              <h3
                id={titleId}
                className="mt-1 text-xl font-medium tracking-[-0.02em] text-white"
              >
                {project.name}
              </h3>
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Cerrar"
              className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-lav-200/60 transition-colors hover:border-lav-400/40 hover:text-white"
            >
              <X className="size-4" aria-hidden="true" />
            </button>
          </div>

          <div className="px-5 py-6 sm:px-7">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[0.5625rem] uppercase tracking-[0.16em] ${statusStyles[project.status]}`}
            >
              <span aria-hidden="true" className="size-1 rounded-full bg-current" />
              {project.statusLabel}
            </span>

            <p className="mt-5 text-[0.9375rem] leading-relaxed text-lav-200/65">
              {project.detail}
            </p>

            {project.images && project.images.length > 1 && (
              <div className="mt-6 grid grid-cols-2 gap-2">
                {project.images.slice(1).map((image) => (
                  <div
                    key={image.src}
                    className="relative aspect-[16/11] overflow-hidden rounded-lg border border-white/10"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 640px) 320px, 45vw"
                      className="object-cover object-top"
                    />
                  </div>
                ))}
              </div>
            )}

            <div className="mt-7">
              <p className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-lav-400/70">
                {project.scopeLabel}
              </p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {project.scope.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-[0.8125rem] text-lav-200/65"
                  >
                    <Check
                      className="mt-0.5 size-3.5 shrink-0 text-lav-300/80"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  {project.hrefLabel ?? "Abrir enlace"}
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </a>
              ) : (
                <a href="#contacto" onClick={close} className="btn btn-ghost btn-sm">
                  Conversar sobre algo similar
                </a>
              )}
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
