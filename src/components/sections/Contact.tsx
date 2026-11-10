import { ArrowUpRight, Mail, MapPin, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import {
  hasSocial,
  mailtoHref,
  siteConfig,
  socialLinks,
  whatsappHref,
} from "@/config/site";

export function Contact() {
  const { contact, location } = siteConfig;

  return (
    <section id="contacto" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lav-400/20 to-transparent"
      />
      <div
        aria-hidden="true"
        className="orb -left-32 top-24 size-[420px] bg-plum-700/40"
      />

      <div className="container-x relative">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="eyebrow">Contacto</p>
              <h2 className="h2 mt-6">
                Hablemos de{" "}
                <span className="text-lavender-gradient">tu proyecto.</span>
              </h2>
              <p className="lead mt-6 max-w-md">
                Cuéntanos qué tienes en mente. Revisamos tu necesidad y te
                proponemos un camino claro para convertirla en una solución
                digital.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <ul className="mt-10 space-y-3">
                <li>
                  <a
                    href={mailtoHref("Consulta de proyecto — AXENTRA")}
                    className="group flex items-start gap-3.5 rounded-xl border border-transparent p-2 transition-colors hover:border-lav-400/15 hover:bg-plum-900/25"
                  >
                    <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg border border-lav-400/20 bg-plum-900/40 text-lav-300">
                      <Mail className="size-4" strokeWidth={1.6} aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-mono text-[0.625rem] uppercase tracking-[0.18em] text-lav-200/35">
                        Correo
                      </span>
                      <span className="mt-1 flex items-center gap-1.5 break-all text-[0.9375rem] text-lav-200/80 transition-colors group-hover:text-white">
                        {contact.email}
                        <ArrowUpRight
                          className="size-3.5 shrink-0 text-lav-400/50"
                          aria-hidden="true"
                        />
                      </span>
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    href={whatsappHref()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3.5 rounded-xl border border-transparent p-2 transition-colors hover:border-lav-400/15 hover:bg-plum-900/25"
                  >
                    <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg border border-lav-400/20 bg-plum-900/40 text-lav-300">
                      <MessageCircle
                        className="size-4"
                        strokeWidth={1.6}
                        aria-hidden="true"
                      />
                    </span>
                    <span>
                      <span className="block font-mono text-[0.625rem] uppercase tracking-[0.18em] text-lav-200/35">
                        WhatsApp
                      </span>
                      <span className="mt-1 flex items-center gap-1.5 text-[0.9375rem] text-lav-200/80 transition-colors group-hover:text-white">
                        {contact.phoneDisplay || "Abrir conversación"}
                        <ArrowUpRight
                          className="size-3.5 shrink-0 text-lav-400/50"
                          aria-hidden="true"
                        />
                      </span>
                    </span>
                  </a>
                </li>

                <li className="flex items-start gap-3.5 p-2">
                  <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg border border-lav-400/20 bg-plum-900/40 text-lav-300">
                    <MapPin className="size-4" strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-mono text-[0.625rem] uppercase tracking-[0.18em] text-lav-200/35">
                      Ubicación
                    </span>
                    <span className="mt-1 block text-[0.9375rem] text-lav-200/80">
                      {location.city}, {location.state} · {location.country}
                    </span>
                    <span className="mt-0.5 block text-[0.75rem] text-lav-200/35">
                      {location.remote}
                    </span>
                  </span>
                </li>
              </ul>
            </Reveal>

            {hasSocial && (
              <Reveal delay={140}>
                <div className="mt-8 border-t border-lav-400/10 pt-6">
                  <p className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-lav-200/30">
                    Redes
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {socialLinks.map((social) => (
                      <a
                        key={social.key}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tag transition-colors hover:border-lav-400/40 hover:text-white"
                      >
                        {social.label}
                        <ArrowUpRight className="ml-1 size-3" aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}

            {contact.isPlaceholder && (
              <Reveal delay={180}>
                <p className="mt-8 max-w-sm rounded-lg border border-lav-400/12 bg-plum-950/40 p-3 font-mono text-[0.625rem] leading-relaxed tracking-[0.06em] text-lav-200/30">
                  Los datos de contacto de esta versión son provisionales. Se
                  configuran en{" "}
                  <span className="text-lav-200/55">src/config/site.ts</span> antes
                  de publicar.
                </p>
              </Reveal>
            )}
          </div>

          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
