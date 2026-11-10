# AXENTRA — Sitio oficial

Sitio web de **AXENTRA**, empresa tecnológica mexicana enfocada en desarrollo web y
software empresarial. Landing page premium, responsive y preparada para desplegar.

- **Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · lucide-react
- **Tipografía:** Space Grotesk (display y texto) + JetBrains Mono (etiquetas técnicas)
- **Animaciones:** CSS + IntersectionObserver (sin librerías de animación)
- **Sin backend:** el formulario prepara el mensaje y lo envía por WhatsApp o correo

---

## Requisitos

- Node.js 20.9 o superior (recomendado 22+)
- npm

## Ejecutar en local

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Scripts

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Compilación de producción |
| `npm start` | Sirve la compilación de producción |
| `npm run lint` | ESLint |

---

## Configuración de la marca

Casi todo el contenido editable vive en:

- `src/config/site.ts` — nombre, descripción, URL, correo, WhatsApp, redes, navegación y ubicación.
- `src/content/services.ts` — servicios, beneficios, proceso y diferenciadores.
- `src/content/projects.ts` — proyectos, estados, alcance y enlaces.

### ⚠️ Datos provisionales

Los datos de contacto son **placeholders** y así se indica en la interfaz:

| Dato | Valor actual | Acción |
| --- | --- | --- |
| Correo | `contacto@axentra.mx` | Reemplazar por el correo oficial |
| WhatsApp | vacío | Agregar número en formato internacional (`5219931234567`) |
| Teléfono visible | vacío | Opcional; se muestra si se configura |
| Redes sociales | vacías | Agregar URLs; si quedan vacías, no se muestran |

Cuando configures WhatsApp, actualiza también `phoneDisplay` y pon
`contact.isPlaceholder` en `false` para ocultar el aviso de datos provisionales.

### URL del sitio

Crea un archivo `.env.local` (o configura la variable en el hosting):

```bash
NEXT_PUBLIC_SITE_URL=https://tudominio.com
```

Se usa para metadatos, `sitemap.xml`, `robots.txt` y Open Graph.

---

## Formulario de contacto

No hay backend ni servicio de correo conectado, por lo que **el sitio no simula
envíos**. Al completar y validar el formulario:

1. Se muestra un resumen de la solicitud.
2. Se ofrecen dos canales: WhatsApp y correo, con el mensaje ya redactado.
3. También se puede copiar el mensaje al portapapeles.

Para conectar un backend real (Resend, Formspree, API propia, etc.), modifica
`src/components/forms/ContactForm.tsx` en la función `onSubmit` y sustituye el
estado `ready` por la llamada al servicio, conservando los estados de carga y error.

---

## Estructura

```
src/
├─ app/
│  ├─ layout.tsx           Metadatos, fuentes, JSON-LD, header/footer
│  ├─ page.tsx             Composición de secciones
│  ├─ globals.css          Tokens de marca, utilidades y animaciones
│  ├─ icon.svg             Favicon
│  ├─ opengraph-image.tsx  Imagen social generada
│  ├─ robots.ts / sitemap.ts
├─ components/
│  ├─ brand/               Logotipo y símbolo
│  ├─ forms/               Formulario de contacto
│  ├─ layout/              Header y footer
│  ├─ projects/            Tarjeta de proyecto + modal
│  ├─ sections/            Una sección por archivo
│  ├─ ui/                  Reveal y spotlight de cursor
│  └─ visuals/             Mockups (navegador, teléfono, dashboards)
├─ config/site.ts
└─ content/                Servicios y proyectos
```

---

## Sistema de diseño

| Token | Valor | Uso |
| --- | --- | --- |
| `ink` | `#05030A` | Fondo base |
| `plum-900` | `#140042` | Superficies y secciones |
| `plum-600` | `#341775` | Superficies elevadas |
| `violet-500` | `#6243A8` | Elementos destacados |
| `lav-400` | `#9E84DB` | Acentos, enlaces |
| `lav-200` | `#DBCCFF` | Texto destacado |
| `lav-100` | `#EFE9FF` | Texto de alto contraste |

Los tokens están definidos en `src/app/globals.css` dentro de `@theme`.

---

## Accesibilidad y rendimiento

- HTML semántico, landmarks y enlace “Saltar al contenido”.
- Foco visible, etiquetas asociadas y `aria-invalid` / `aria-describedby` en el formulario.
- `prefers-reduced-motion` respetado (animaciones y scroll suave desactivados).
- Imágenes optimizadas con `next/image`; el resto de los mockups son CSS/SVG (sin peso extra).
- Un solo paquete de iconos (`lucide-react`, tree-shakeable).
- Metadatos, Open Graph, JSON-LD (`ProfessionalService`), sitemap y robots.

---

## Desplegar en Vercel

1. Sube el repositorio a GitHub.
2. En Vercel: **Add New → Project** e importa el repositorio.
3. Framework detectado: Next.js. No requiere configuración adicional.
4. Agrega `NEXT_PUBLIC_SITE_URL` con el dominio final.
5. Deploy.

También funciona en cualquier hosting compatible con Node.js:

```bash
npm run build
npm start
```

---

## Estado de los proyectos mostrados

| Proyecto | Estado | Nota |
| --- | --- | --- |
| VITALIA | En producción | Enlace público a `vitaliacdi.vercel.app` |
| GRUMACAR OS | Prototipo | Interfaz ilustrativa; alcance previsto, no implementado |
| PUNTOABARROTES | Concepto | Interfaz ilustrativa; no implementado |

Las capturas de VITALIA se tomaron del sitio real. Los dashboards de GRUMACAR OS y
PUNTOABARROTES son mockups de interfaz, no capturas de producto terminado.

---

© AXENTRA — Desarrollamos soluciones digitales inteligentes.
