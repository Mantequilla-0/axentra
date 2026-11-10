"use client";

import { useId, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Copy,
  Loader2,
  Mail,
  MessageCircle,
} from "lucide-react";
import { projectTypes } from "@/content/services";
import { mailtoHref, siteConfig, whatsappHref } from "@/config/site";

type Values = {
  nombre: string;
  empresa: string;
  email: string;
  tipo: string;
  mensaje: string;
};

type Errors = Partial<Record<keyof Values, string>>;

const emptyValues: Values = {
  nombre: "",
  empresa: "",
  email: "",
  tipo: "",
  mensaje: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

function validate(values: Values): Errors {
  const errors: Errors = {};

  if (values.nombre.trim().length < 2) {
    errors.nombre = "Escribe tu nombre (mínimo 2 caracteres).";
  }
  if (!emailPattern.test(values.email.trim())) {
    errors.email = "Escribe un correo válido, por ejemplo nombre@empresa.com";
  }
  if (!values.tipo) {
    errors.tipo = "Selecciona el tipo de proyecto.";
  }
  if (values.mensaje.trim().length < 10) {
    errors.mensaje = "Cuéntanos un poco más (mínimo 10 caracteres).";
  }

  return errors;
}

function buildMessage(values: Values) {
  const lines = [
    "Nueva solicitud — AXENTRA",
    "",
    `Nombre: ${values.nombre.trim()}`,
    values.empresa.trim() ? `Empresa: ${values.empresa.trim()}` : null,
    `Correo: ${values.email.trim()}`,
    `Tipo de proyecto: ${values.tipo}`,
    "",
    "Descripción de la necesidad:",
    values.mensaje.trim(),
  ].filter(Boolean);

  return lines.join("\n");
}

export function ContactForm() {
  const [values, setValues] = useState<Values>(emptyValues);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "checking" | "ready">("idle");
  const [copied, setCopied] = useState(false);

  const formRef = useRef<HTMLFormElement | null>(null);
  const id = useId();

  const fieldId = (name: keyof Values) => `${id}-${name}`;
  const errorId = (name: keyof Values) => `${id}-${name}-error`;

  const update = (name: keyof Values, value: string) => {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => {
      if (!current[name]) return current;
      const next = { ...current };
      delete next[name];
      return next;
    });
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);

    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0] as keyof Values;
      const field = formRef.current?.querySelector<HTMLElement>(
        `#${CSS.escape(fieldId(first))}`,
      );
      field?.focus();
      return;
    }

    setStatus("checking");
    // No hay backend conectado: no simulamos un envío. Preparamos el mensaje
    // para que la persona elija WhatsApp o correo.
    window.setTimeout(() => setStatus("ready"), 450);
  };

  const message = buildMessage(values);
  const mailto = mailtoHref(
    `Solicitud de proyecto — ${values.nombre.trim() || "AXENTRA"}`,
    message,
  );
  const whatsapp = whatsappHref(message);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  const reset = () => {
    setStatus("idle");
    setCopied(false);
  };

  if (status === "ready") {
    return (
      <div
        className="surface relative overflow-hidden rounded-[1.5rem] p-6 sm:p-8"
        aria-live="polite"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-violet-500/25 blur-[60px]"
        />

        <div className="relative">
          <span className="flex size-11 items-center justify-center rounded-full border border-lav-400/30 bg-plum-900/60 text-lav-200">
            <Check className="size-5" aria-hidden="true" />
          </span>
          <h3 className="mt-5 text-xl font-medium tracking-[-0.02em] text-white">
            Tu solicitud está lista para enviarse.
          </h3>
          <p className="mt-2.5 text-[0.875rem] leading-relaxed text-lav-200/55">
            Este formulario todavía no está conectado a un servicio de envío, así
            que no registramos tu mensaje automáticamente. Elige un canal y se
            abrirá con el texto ya escrito.
          </p>

          <div className="mt-6 rounded-xl border border-lav-400/12 bg-black/25 p-4">
            <dl className="space-y-1.5 text-[0.8125rem]">
              {[
                ["Nombre", values.nombre],
                values.empresa ? ["Empresa", values.empresa] : null,
                ["Correo", values.email],
                ["Proyecto", values.tipo],
              ]
                .filter(Boolean)
                .map((row) => {
                  const [label, value] = row as [string, string];
                  return (
                    <div key={label} className="flex gap-3">
                      <dt className="w-20 shrink-0 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-lav-200/35">
                        {label}
                      </dt>
                      <dd className="min-w-0 flex-1 break-words text-lav-200/75">
                        {value}
                      </dd>
                    </div>
                  );
                })}
            </dl>
            <p className="mt-3 line-clamp-3 border-t border-white/[0.06] pt-3 text-[0.8125rem] leading-relaxed text-lav-200/45">
              {values.mensaje}
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary flex-1"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Enviar por WhatsApp
            </a>
            <a href={mailto} className="btn btn-ghost flex-1">
              <Mail className="size-4" aria-hidden="true" />
              Enviar por correo
            </a>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center gap-1.5 text-[0.8125rem] text-lav-200/45 transition-colors hover:text-lav-100"
            >
              <ArrowLeft className="size-3.5" aria-hidden="true" />
              Editar solicitud
            </button>
            <button
              type="button"
              onClick={copy}
              className="inline-flex items-center gap-1.5 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-lav-200/40 transition-colors hover:text-lav-100"
            >
              {copied ? (
                <Check className="size-3 text-emerald-300" aria-hidden="true" />
              ) : (
                <Copy className="size-3" aria-hidden="true" />
              )}
              {copied ? "Copiado" : "Copiar mensaje"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      noValidate
      className="surface relative overflow-hidden rounded-[1.5rem] p-6 sm:p-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full bg-violet-500/15 blur-[70px]"
      />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-medium tracking-[-0.01em] text-white">
              Cuéntanos qué necesitas
            </h3>
            <p className="mt-1 text-[0.8125rem] text-lav-200/40">
              Los campos con <span aria-hidden="true">*</span> son obligatorios.
            </p>
          </div>
          <span className="pill hidden sm:inline-flex">Respuesta directa</span>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label
              htmlFor={fieldId("nombre")}
              className="mb-1.5 block text-[0.75rem] font-medium text-lav-200/70"
            >
              Nombre <span className="text-lav-300">*</span>
            </label>
            <input
              id={fieldId("nombre")}
              name="nombre"
              type="text"
              autoComplete="name"
              value={values.nombre}
              onChange={(event) => update("nombre", event.target.value)}
              aria-invalid={Boolean(errors.nombre)}
              aria-describedby={errors.nombre ? errorId("nombre") : undefined}
              placeholder="Tu nombre"
              className={`w-full rounded-xl border bg-black/25 px-3.5 py-2.5 text-[0.875rem] text-white placeholder:text-lav-200/25 transition-colors focus:border-lav-400/60 focus:outline-none focus:ring-2 focus:ring-lav-400/20 ${
                errors.nombre ? "border-rose-300/50" : "border-lav-400/15"
              }`}
            />
            {errors.nombre && (
              <p
                id={errorId("nombre")}
                className="mt-1.5 text-[0.75rem] text-rose-300"
              >
                {errors.nombre}
              </p>
            )}
          </div>

          <div className="sm:col-span-1">
            <label
              htmlFor={fieldId("empresa")}
              className="mb-1.5 block text-[0.75rem] font-medium text-lav-200/70"
            >
              Empresa o negocio
            </label>
            <input
              id={fieldId("empresa")}
              name="empresa"
              type="text"
              autoComplete="organization"
              value={values.empresa}
              onChange={(event) => update("empresa", event.target.value)}
              placeholder="Opcional"
              className="w-full rounded-xl border border-lav-400/15 bg-black/25 px-3.5 py-2.5 text-[0.875rem] text-white placeholder:text-lav-200/25 transition-colors focus:border-lav-400/60 focus:outline-none focus:ring-2 focus:ring-lav-400/20"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor={fieldId("email")}
              className="mb-1.5 block text-[0.75rem] font-medium text-lav-200/70"
            >
              Correo electrónico <span className="text-lav-300">*</span>
            </label>
            <input
              id={fieldId("email")}
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              value={values.email}
              onChange={(event) => update("email", event.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? errorId("email") : undefined}
              placeholder="nombre@empresa.com"
              className={`w-full rounded-xl border bg-black/25 px-3.5 py-2.5 text-[0.875rem] text-white placeholder:text-lav-200/25 transition-colors focus:border-lav-400/60 focus:outline-none focus:ring-2 focus:ring-lav-400/20 ${
                errors.email ? "border-rose-300/50" : "border-lav-400/15"
              }`}
            />
            {errors.email && (
              <p id={errorId("email")} className="mt-1.5 text-[0.75rem] text-rose-300">
                {errors.email}
              </p>
            )}
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor={fieldId("tipo")}
              className="mb-1.5 block text-[0.75rem] font-medium text-lav-200/70"
            >
              Tipo de proyecto <span className="text-lav-300">*</span>
            </label>
            <div className="relative">
              <select
                id={fieldId("tipo")}
                name="tipo"
                value={values.tipo}
                onChange={(event) => update("tipo", event.target.value)}
                aria-invalid={Boolean(errors.tipo)}
                aria-describedby={errors.tipo ? errorId("tipo") : undefined}
                className={`w-full appearance-none rounded-xl border bg-black/25 px-3.5 py-2.5 pr-10 text-[0.875rem] transition-colors focus:border-lav-400/60 focus:outline-none focus:ring-2 focus:ring-lav-400/20 ${
                  values.tipo ? "text-white" : "text-lav-200/35"
                } ${errors.tipo ? "border-rose-300/50" : "border-lav-400/15"}`}
              >
                <option value="" disabled>
                  Selecciona una opción
                </option>
                {projectTypes.map((type) => (
                  <option key={type} value={type} className="bg-[#0a0420] text-white">
                    {type}
                  </option>
                ))}
              </select>
              <svg
                aria-hidden="true"
                viewBox="0 0 12 8"
                className="pointer-events-none absolute right-3.5 top-1/2 h-2 w-3 -translate-y-1/2 text-lav-300/70"
              >
                <path
                  d="M1 1.5 6 6.5 11 1.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            {errors.tipo && (
              <p id={errorId("tipo")} className="mt-1.5 text-[0.75rem] text-rose-300">
                {errors.tipo}
              </p>
            )}
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor={fieldId("mensaje")}
              className="mb-1.5 block text-[0.75rem] font-medium text-lav-200/70"
            >
              Descripción de la necesidad <span className="text-lav-300">*</span>
            </label>
            <textarea
              id={fieldId("mensaje")}
              name="mensaje"
              rows={4}
              value={values.mensaje}
              onChange={(event) => update("mensaje", event.target.value)}
              aria-invalid={Boolean(errors.mensaje)}
              aria-describedby={errors.mensaje ? errorId("mensaje") : undefined}
              placeholder="¿Qué necesitas resolver? Cuéntanos brevemente tu negocio y tu objetivo."
              className={`w-full resize-y rounded-xl border bg-black/25 px-3.5 py-2.5 text-[0.875rem] leading-relaxed text-white placeholder:text-lav-200/25 transition-colors focus:border-lav-400/60 focus:outline-none focus:ring-2 focus:ring-lav-400/20 ${
                errors.mensaje ? "border-rose-300/50" : "border-lav-400/15"
              }`}
            />
            {errors.mensaje && (
              <p
                id={errorId("mensaje")}
                className="mt-1.5 text-[0.75rem] text-rose-300"
              >
                {errors.mensaje}
              </p>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={status === "checking"}
          className="btn btn-primary mt-6 w-full disabled:opacity-70"
        >
          {status === "checking" ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              Preparando mensaje…
            </>
          ) : (
            <>
              Preparar mi solicitud
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </>
          )}
        </button>

        <p className="mt-3 text-center text-[0.6875rem] leading-relaxed text-lav-200/30">
          No guardamos datos en este sitio. Al continuar podrás enviar el mensaje
          por WhatsApp o correo desde tu propia aplicación.
        </p>

        <p className="mt-2 text-center font-mono text-[0.625rem] uppercase tracking-[0.12em] text-lav-200/20">
          {siteConfig.contact.isPlaceholder
            ? "Datos de contacto provisionales · edítalos en src/config/site.ts"
            : "Tus datos se usan únicamente para responder tu solicitud"}
        </p>
      </div>
    </form>
  );
}
