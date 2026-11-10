"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { siteConfig, whatsappHref } from "@/config/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setScrolled(window.scrollY > 12));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        scrolled || open
          ? "border-b border-lav-400/12 bg-ink/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-x">
        <div className="flex h-[4.5rem] items-center justify-between gap-6 lg:h-[5.25rem]">
          <Logo size={26} href="#inicio" />

          <nav aria-label="Navegación principal" className="hidden lg:block">
            <ul className="flex items-center gap-7">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group relative text-[0.8125rem] tracking-[0.01em] text-lav-200/65 transition-colors duration-300 hover:text-white"
                  >
                    {item.label}
                    <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-lav-300/70 transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm hidden sm:inline-flex"
            >
              Hablemos
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              className="inline-flex size-11 items-center justify-center rounded-full border border-lav-400/20 text-lav-100 transition-colors hover:border-lav-400/50 hover:bg-plum-900/50 lg:hidden"
            >
              {open ? (
                <X className="size-5" aria-hidden="true" />
              ) : (
                <Menu className="size-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        id="mobile-menu"
        inert={!open}
        className={`fixed inset-x-0 top-[4.5rem] z-40 h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-lav-400/10 bg-ink/97 backdrop-blur-2xl transition-all duration-400 lg:hidden ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        <div className="container-x flex min-h-full flex-col justify-between gap-10 py-10">
          <nav aria-label="Navegación móvil">
            <ul className="flex flex-col">
              {siteConfig.nav.map((item, index) => (
                <li key={item.href} className="border-b border-lav-400/10">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-4 text-2xl tracking-[-0.02em] text-white/90 transition-colors hover:text-lav-200"
                    style={{
                      transitionDelay: open ? `${index * 30}ms` : "0ms",
                    }}
                  >
                    {item.label}
                    <ArrowUpRight
                      className="size-4 text-lav-400/60"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-5">
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full"
              onClick={() => setOpen(false)}
            >
              Hablemos de tu proyecto
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
            <p className="text-center font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-lav-200/40">
              {siteConfig.location.city}, {siteConfig.location.state}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
