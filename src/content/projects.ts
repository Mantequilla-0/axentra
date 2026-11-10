export type ProjectStatus = "implementado" | "prototipo" | "concepto";

export type Project = {
  id: string;
  name: string;
  category: string;
  status: ProjectStatus;
  statusLabel: string;
  summary: string;
  detail: string;
  /** Áreas contempladas. En prototipos/conceptos se presentan como alcance previsto. */
  scopeLabel: string;
  scope: string[];
  stack: string[];
  href?: string;
  hrefLabel?: string;
  images?: { src: string; alt: string }[];
};

export const projects: Project[] = [
  {
    id: "vitalia",
    name: "VITALIA",
    category: "Desarrollo web · Sitio empresarial",
    status: "implementado",
    statusLabel: "Sitio en producción",
    summary:
      "Sitio web para un centro de bienestar en Villahermosa que integra natación, yoga, muay thai, fisioterapia y gimnasio.",
    detail:
      "Diseñamos y desarrollamos el sitio del centro: presentación de programas, horarios, instalaciones y galería, con un flujo de contacto directo por WhatsApp para reservar clases e informes. El objetivo fue ordenar una oferta amplia de servicios y hacerla fácil de recorrer desde el celular.",
    scopeLabel: "Incluye",
    scope: [
      "Diseño y desarrollo del sitio",
      "Programas, horarios e instalaciones",
      "Galería de contenido",
      "Reserva e informes por WhatsApp",
      "Diseño adaptable a móvil",
    ],
    stack: ["Next.js", "Diseño responsive", "SEO básico"],
    href: "https://vitaliacdi.vercel.app",
    hrefLabel: "Ver sitio en vivo",
    images: [
      {
        src: "/projects/vitalia-hero.jpg",
        alt: "Portada del sitio web de VITALIA con el mensaje Abraza tu vitalidad y fotografías de sus programas.",
      },
      {
        src: "/projects/vitalia-programa.jpg",
        alt: "Sección de programa del sitio de VITALIA con información de la clase y botón de reserva por WhatsApp.",
      },
    ],
  },
  {
    id: "grumacar-os",
    name: "GRUMACAR OS",
    category: "Software empresarial · Gestión industrial",
    status: "prototipo",
    statusLabel: "Prototipo",
    summary:
      "Concepto de sistema de gestión para una empresa de servicios industriales, maquila, bordado y personalización.",
    detail:
      "Prototipo de interfaz para concentrar pedidos, seguimiento de producción y administración de trabajos en un solo panel. Está planteado como una base escalable: cada módulo se implementaría según el alcance y las prioridades del negocio. Las funcionalidades descritas son alcance previsto, no características ya implementadas.",
    scopeLabel: "Alcance previsto",
    scope: [
      "Gestión de pedidos",
      "Seguimiento de producción",
      "Clientes y trabajos",
      "Control de operaciones",
      "Reportes",
    ],
    stack: ["Dashboard", "Flujo de producción", "Reportes"],
  },
  {
    id: "puntoabarrotes",
    name: "PUNTOABARROTES",
    category: "Software comercial · Punto de venta",
    status: "concepto",
    statusLabel: "Concepto",
    summary:
      "Concepto de plataforma para que pequeños comercios y tiendas de abarrotes administren su operación diaria.",
    detail:
      "Exploración de producto pensada para el día a día de una tienda: venta rápida en mostrador, control de inventario y visibilidad de lo que realmente se mueve. Se plantea como sistema web accesible desde computadora o tablet. Aún no está implementado; las áreas listadas son parte del concepto.",
    scopeLabel: "Áreas del concepto",
    scope: [
      "Inventario y productos",
      "Ventas y caja",
      "Clientes y proveedores",
      "Reportes",
      "Control administrativo",
    ],
    stack: ["Punto de venta", "Inventario", "Reportes"],
  },
];
