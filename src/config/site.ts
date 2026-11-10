/**
 * Configuración central de AXENTRA.
 * Todo lo que se muestra como dato de marca/contacto vive aquí.
 *
 * ⚠️  PLACEHOLDERS: los datos marcados como "provisional" deben reemplazarse
 *     antes de publicar el sitio. No hay teléfonos, correos ni redes inventadas
 *     más allá de estos valores de ejemplo.
 */

export const siteConfig = {
  name: "AXENTRA",
  shortName: "AXENTRA",
  tagline: "Desarrollamos soluciones digitales inteligentes.",
  description:
    "Desarrollamos páginas web profesionales, aplicaciones y sistemas empresariales personalizados. Tecnología inteligente para impulsar tu negocio.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://axentra.mx",
  locale: "es_MX",
  language: "es-MX",

  location: {
    city: "Villahermosa",
    state: "Tabasco",
    country: "México",
    /** Atendemos de forma remota en todo México. */
    remote: "Atendemos clientes en todo México de forma remota.",
  },

  contact: {
    /** provisional — reemplazar por el correo oficial */
    email: "contacto@axentra.mx",
    /**
     * provisional — formato internacional sin "+" ni espacios.
     * Ej. México: 5219931234567
     * Si se deja vacío, el botón de WhatsApp abre el selector de contactos
     * en lugar de un número inexistente.
     */
    whatsappNumber: "",
    /** provisional — solo se muestra si whatsappNumber está configurado */
    phoneDisplay: "",
    /** true = los datos de contacto son de ejemplo y así se indica en la UI */
    isPlaceholder: true,
  },

  social: {
    /** Deja vacío para ocultar el enlace. */
    instagram: "",
    linkedin: "",
    github: "",
    facebook: "",
  },

  nav: [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Soluciones", href: "#soluciones" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Contacto", href: "#contacto" },
  ],
} as const;

export const whatsappHref = (message?: string) => {
  const text = encodeURIComponent(
    message ??
      "Hola AXENTRA, me gustaría información sobre sus servicios de desarrollo web y software.",
  );
  const number = siteConfig.contact.whatsappNumber.trim();
  return number ? `https://wa.me/${number}?text=${text}` : `https://wa.me/?text=${text}`;
};

export const mailtoHref = (subject?: string, body?: string) => {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString();
  return `mailto:${siteConfig.contact.email}${query ? `?${query}` : ""}`;
};

export const hasSocial = Object.values(siteConfig.social).some(Boolean);

export const socialLinks = (
  [
    { key: "instagram", label: "Instagram", href: siteConfig.social.instagram },
    { key: "linkedin", label: "LinkedIn", href: siteConfig.social.linkedin },
    { key: "github", label: "GitHub", href: siteConfig.social.github },
    { key: "facebook", label: "Facebook", href: siteConfig.social.facebook },
  ] as const
).filter((link) => link.href.length > 0);
