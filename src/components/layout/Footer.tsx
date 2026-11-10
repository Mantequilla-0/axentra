import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import {
  mailtoHref,
  siteConfig,
  socialLinks,
  whatsappHref,
} from "@/config/site";

const serviceLinks = [
  { label: "Desarrollo web", href: "#desarrollo-web" },
  { label: "Software empresarial", href: "#software" },
  { label: "Sitios y landing pages", href: "#servicios" },
  { label: "Sistemas administrativos", href: "#software" },
  { label: "Puntos de venta", href: "#software" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-lav-400/10 bg-[#07030f]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/2 size-[600px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[120px]"
      />

      <div className="container-x relative">
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr] lg:gap-8 lg:py-16">
          <div>
            <Logo size={26} href="#inicio" />
            <p className="mt-5 max-w-[22rem] text-[0.875rem] leading-relaxed text-lav-200/45">
              Desarrollamos soluciones digitales inteligentes para empresas y
              emprendedores: sitios web, sistemas y herramientas que ayudan a
              crecer.
            </p>

            {socialLinks.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.key}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-lav-400/15 px-2.5 py-1 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-lav-200/45 transition-colors hover:border-lav-400/40 hover:text-white"
                  >
                    {social.label}
                    <ArrowUpRight className="size-2.5" aria-hidden="true" />
                  </a>
                ))}
              </div>
            )}

            <p className="mt-6 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-lav-200/25">
              {siteConfig.location.city}, {siteConfig.location.state}
            </p>
          </div>

          <nav aria-label="Navegación del pie de página">
            <h2 className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-lav-200/30">
              Navegación
            </h2>
            <ul className="mt-4 space-y-2.5">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[0.875rem] text-lav-200/55 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-lav-200/30">
              Servicios
            </h2>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[0.875rem] text-lav-200/55 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-lav-200/30">
              Contacto
            </h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={mailtoHref("Consulta de proyecto — AXENTRA")}
                  className="break-all text-[0.875rem] text-lav-200/55 transition-colors hover:text-white"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.875rem] text-lav-200/55 transition-colors hover:text-white"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <Link
                  href="#contacto"
                  className="inline-flex items-center gap-1.5 text-[0.875rem] text-lav-200/55 transition-colors hover:text-white"
                >
                  Formulario de contacto
                  <ArrowUpRight className="size-3" aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="hairline" />

        <div className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-[0.75rem] text-lav-200/40">
              © {year} {siteConfig.name}. Todos los derechos reservados.
            </p>
            <p className="text-[0.75rem] text-lav-200/25">
              {siteConfig.name} — {siteConfig.tagline}
            </p>
          </div>

          <Link
            href="#inicio"
            className="inline-flex items-center gap-2 self-start rounded-full border border-lav-400/15 px-3 py-1.5 font-mono text-[0.625rem] uppercase tracking-[0.16em] text-lav-200/40 transition-colors hover:border-lav-400/40 hover:text-white sm:self-auto"
          >
            Volver arriba
            <ArrowUp className="size-3" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
