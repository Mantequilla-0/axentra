import {
  BarChart3,
  Boxes,
  ChevronRight,
  CircleUser,
  ClipboardList,
  CreditCard,
  LayoutDashboard,
  Package,
  Search,
  Settings,
  ShoppingCart,
  Users,
} from "lucide-react";
import { BrowserFrame, PhoneFrame } from "@/components/visuals/frames";

/* ————————————————————————————————————————
   Mini sitio AXENTRA (dentro de un navegador)
———————————————————————————————————————— */

export function SiteMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-[#0a0420] ${className}`}>
      <div className="pointer-events-none absolute -right-16 -top-20 size-52 rounded-full bg-violet-500/40 blur-[60px]" />
      <div className="pointer-events-none absolute -left-10 bottom-0 size-40 rounded-full bg-lav-400/20 blur-[50px]" />

      {/* barra del sitio */}
      <div className="relative flex items-center justify-between border-b border-white/[0.06] px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <svg viewBox="0 0 128 100" className="h-2.5 w-3 text-lav-200" aria-hidden="true">
            <path d="M33.5 82.5 55.5 30.5" stroke="currentColor" strokeWidth="16" strokeLinecap="round" />
            <path d="M64 30.5 100.5 82.5" stroke="currentColor" strokeWidth="22" strokeLinecap="round" />
          </svg>
          <span className="text-[6.5px] uppercase tracking-[0.3em] text-white/85">
            AXENTRA
          </span>
        </div>
        <div className="hidden items-center gap-3 text-[5.5px] uppercase tracking-[0.16em] text-white/35 sm:flex">
          <span>Servicios</span>
          <span>Soluciones</span>
          <span>Proyectos</span>
          <span>Nosotros</span>
        </div>
        <span className="rounded-full bg-lav-200/90 px-2 py-[3px] text-[5.5px] font-medium text-plum-900">
          Hablemos
        </span>
      </div>

      {/* hero del sitio */}
      <div className="relative grid grid-cols-[1.1fr_0.9fr] items-center gap-2 px-4 py-5">
        <div>
          <p className="mb-2 font-mono text-[5px] uppercase tracking-[0.24em] text-lav-400/80">
            · Digital solutions
          </p>
          <p className="text-[13px] font-medium leading-[1.06] tracking-[-0.03em] text-white">
            Desarrollamos
            <br />
            soluciones digitales
            <br />
            <span className="text-lav-300">inteligentes.</span>
          </p>
          <p className="mt-2 max-w-[92%] text-[5.5px] leading-[1.6] text-white/40">
            Páginas web y sistemas empresariales que impulsan tu negocio.
          </p>
          <div className="mt-3 flex items-center gap-1.5">
            <span className="rounded-full bg-lav-200 px-2.5 py-[4px] text-[5.5px] font-medium text-plum-900">
              Iniciar proyecto
            </span>
            <span className="rounded-full border border-white/20 px-2.5 py-[4px] text-[5.5px] text-white/70">
              Ver soluciones
            </span>
          </div>
        </div>

        {/* placas apiladas */}
        <div className="relative h-[104px]">
          <div className="absolute inset-x-3 top-1/2 h-16 -translate-y-1/2 rotate-[-16deg] rounded-[10px] border border-lav-400/30 bg-gradient-to-br from-lav-400/50 to-plum-600/30 blur-[1px]" />
          <div className="absolute inset-x-5 top-1/2 h-14 -translate-y-[62%] rotate-[-8deg] rounded-[10px] border border-lav-200/40 bg-gradient-to-br from-lav-200/45 to-violet-500/40" />
          <div className="absolute inset-x-7 top-1/2 h-12 -translate-y-[70%] rotate-[2deg] rounded-[10px] border border-white/40 bg-gradient-to-br from-white/25 to-lav-400/50 shadow-[0_10px_30px_-8px_rgba(158,132,219,0.8)]" />
          <div className="absolute inset-x-6 top-1/2 h-14 -translate-y-1/2 rounded-full bg-violet-500/40 blur-2xl" />
        </div>
      </div>

      {/* pie del sitio */}
      <div className="flex items-center justify-between border-t border-white/[0.06] px-4 py-2">
        {["Next.js", "TypeScript", "Tailwind", "Vercel"].map((item) => (
          <span
            key={item}
            className="font-mono text-[5px] uppercase tracking-[0.16em] text-white/25"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ————————————————————————————————————————
   Dashboard de software empresarial
———————————————————————————————————————— */

const navItems = [
  { icon: LayoutDashboard, label: "Panel", active: true },
  { icon: ClipboardList, label: "Pedidos" },
  { icon: Boxes, label: "Producción" },
  { icon: Users, label: "Clientes" },
  { icon: BarChart3, label: "Reportes" },
  { icon: Settings, label: "Ajustes" },
];

export function DashboardMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`flex overflow-hidden bg-[#06030e] text-white ${className}`}>
      {/* sidebar */}
      <aside className="hidden w-[26%] shrink-0 flex-col border-r border-white/[0.06] bg-[#0a0518] p-3 sm:flex">
        <div className="mb-4 flex items-center gap-1.5">
          <svg viewBox="0 0 128 100" className="h-2.5 w-3 text-lav-300" aria-hidden="true">
            <path d="M33.5 82.5 55.5 30.5" stroke="currentColor" strokeWidth="16" strokeLinecap="round" />
            <path d="M64 30.5 100.5 82.5" stroke="currentColor" strokeWidth="22" strokeLinecap="round" />
          </svg>
          <span className="text-[6px] uppercase tracking-[0.28em] text-white/80">GRUMACAR</span>
        </div>
        <div className="space-y-[3px]">
          {navItems.map(({ icon: Icon, label, active }) => (
            <div
              key={label}
              className={`flex items-center gap-1.5 rounded-md px-1.5 py-[5px] text-[6px] ${
                active
                  ? "bg-violet-500/25 text-white ring-1 ring-lav-400/25"
                  : "text-white/35"
              }`}
            >
              <Icon className="size-2" strokeWidth={1.8} aria-hidden="true" />
              {label}
            </div>
          ))}
        </div>
        <div className="mt-auto rounded-md border border-white/[0.07] bg-white/[0.03] p-2">
          <p className="text-[5.5px] leading-relaxed text-white/35">
            Sistema en fase de prototipo
          </p>
          <div className="mt-1.5 h-[3px] w-full overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[38%] rounded-full bg-lav-300/80" />
          </div>
        </div>
      </aside>

      {/* main */}
      <div className="min-w-0 flex-1 p-3">
        <div className="flex items-center justify-between gap-2">
          <div>
            <p className="text-[8px] font-medium tracking-[-0.01em] text-white">Panel general</p>
            <p className="mt-[2px] text-[5px] text-white/30">Resumen operativo · vista ilustrativa</p>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="flex items-center gap-1 rounded-md border border-white/[0.08] bg-white/[0.03] px-1.5 py-[3px]">
              <Search className="size-1.5 text-white/30" aria-hidden="true" />
              <span className="text-[5px] text-white/25">Buscar</span>
            </div>
            <div className="flex size-4 items-center justify-center rounded-full bg-gradient-to-br from-lav-300 to-violet-500 text-[5px] font-semibold text-plum-900">
              A
            </div>
          </div>
        </div>

        {/* KPIs */}
        <div className="mt-3 grid grid-cols-3 gap-1.5">
          {[
            { label: "Pedidos activos", value: "24", delta: "+3" },
            { label: "En producción", value: "08", delta: "hoy" },
            { label: "Entregados", value: "132", delta: "mes" },
          ].map((kpi) => (
            <div
              key={kpi.label}
              className="rounded-md border border-white/[0.07] bg-white/[0.025] p-1.5"
            >
              <p className="text-[4.5px] uppercase tracking-[0.1em] text-white/30">
                {kpi.label}
              </p>
              <div className="mt-0.5 flex items-end justify-between">
                <span className="text-[11px] font-medium leading-none tracking-[-0.02em] text-white">
                  {kpi.value}
                </span>
                <span className="rounded-sm bg-lav-400/15 px-1 py-[1px] text-[4px] text-lav-200">
                  {kpi.delta}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* gráfica + donut */}
        <div className="mt-1.5 grid grid-cols-[1.6fr_1fr] gap-1.5">
          <div className="rounded-md border border-white/[0.07] bg-white/[0.025] p-2">
            <div className="flex items-center justify-between">
              <p className="text-[5px] text-white/45">Producción por semana</p>
              <span className="text-[4px] text-white/25">6 meses</span>
            </div>
            <svg viewBox="0 0 160 44" className="mt-1 h-10 w-full" aria-hidden="true" fill="none">
              <defs>
                <linearGradient id="dash-area" x1="0" y1="0" x2="0" y2="1">
                  <stop stopColor="#9E84DB" stopOpacity="0.45" />
                  <stop offset="1" stopColor="#9E84DB" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0 34 14 30 28 33 42 22 56 26 70 16 84 21 98 11 112 15 126 7 140 12 160 4" stroke="#DBCCFF" strokeWidth="1.1" strokeLinecap="round" />
              <path d="M0 34 14 30 28 33 42 22 56 26 70 16 84 21 98 11 112 15 126 7 140 12 160 4 160 44 0 44Z" fill="url(#dash-area)" />
              {[42, 84, 126].map((x) => (
                <circle key={x} cx={x} cy={x === 42 ? 22 : x === 84 ? 21 : 7} r="1.4" fill="#DBCCFF" />
              ))}
            </svg>
          </div>

          <div className="rounded-md border border-white/[0.07] bg-white/[0.025] p-2">
            <p className="text-[5px] text-white/45">Carga de trabajo</p>
            <div className="mt-1 flex items-center gap-2">
              <svg viewBox="0 0 40 40" className="size-9 shrink-0" aria-hidden="true">
                <circle cx="20" cy="20" r="14" stroke="#ffffff12" strokeWidth="4" fill="none" />
                <circle cx="20" cy="20" r="14" stroke="#9E84DB" strokeWidth="4" fill="none" strokeDasharray="60 88" strokeLinecap="round" transform="rotate(-90 20 20)" />
                <circle cx="20" cy="20" r="14" stroke="#DBCCFF" strokeWidth="4" fill="none" strokeDasharray="18 88" strokeDashoffset="-62" strokeLinecap="round" transform="rotate(-90 20 20)" />
              </svg>
              <div className="space-y-[3px]">
                {["Bordado", "Maquila", "Envíos"].map((label) => (
                  <div key={label} className="flex items-center gap-1">
                    <span className="size-[2px] rounded-full bg-lav-300" />
                    <span className="text-[4px] text-white/35">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* tabla */}
        <div className="mt-1.5 rounded-md border border-white/[0.07] bg-white/[0.025]">
          <div className="flex items-center justify-between border-b border-white/[0.06] px-2 py-1.5">
            <p className="text-[5px] text-white/45">Pedidos recientes</p>
            <span className="flex items-center gap-0.5 text-[4px] text-lav-200/60">
              Ver todos <ChevronRight className="size-1.5" aria-hidden="true" />
            </span>
          </div>
          {[
            { id: "GM-1042", client: "Cliente industrial", status: "En producción" },
            { id: "GM-1041", client: "Bordado corporativo", status: "En revisión" },
          ].map((row) => (
            <div key={row.id} className="flex items-center gap-2 px-2 py-[5px] text-[4.5px]">
              <span className="font-mono text-white/30">{row.id}</span>
              <span className="flex-1 truncate text-white/60">{row.client}</span>
              <span className="rounded-sm bg-lav-400/12 px-1 py-[1px] text-lav-200/80">
                {row.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ————————————————————————————————————————
   Punto de venta
———————————————————————————————————————— */

export function PosMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`overflow-hidden bg-[#07030f] ${className}`}>
      <div className="flex items-center justify-between border-b border-white/[0.06] px-3 py-2">
        <div className="flex items-center gap-1.5">
          <Package className="size-2.5 text-lav-300" aria-hidden="true" />
          <span className="text-[6px] uppercase tracking-[0.24em] text-white/80">
            PUNTOABARROTES
          </span>
        </div>
        <div className="flex items-center gap-1 rounded-md border border-white/[0.08] px-1.5 py-[3px]">
          <Search className="size-1.5 text-white/30" aria-hidden="true" />
          <span className="text-[5px] text-white/25">Producto o código</span>
        </div>
      </div>

      <div className="grid grid-cols-[1.35fr_1fr]">
        <div className="border-r border-white/[0.06] p-2.5">
          <div className="flex items-center justify-between">
            <p className="text-[5.5px] text-white/45">Productos</p>
            <span className="text-[4px] text-white/25">4 categorías</span>
          </div>
          <div className="mt-1.5 grid grid-cols-3 gap-1.5">
            {[
              { name: "Abarrotes", price: "$24.00", tone: "from-lav-300/30 to-violet-500/10" },
              { name: "Bebidas", price: "$18.50", tone: "from-lav-200/25 to-plum-600/30" },
              { name: "Limpieza", price: "$32.00", tone: "from-violet-500/25 to-plum-800/40" },
              { name: "Botanas", price: "$15.00", tone: "from-lav-400/25 to-violet-500/10" },
              { name: "Lácteos", price: "$27.90", tone: "from-plum-600/40 to-lav-400/15" },
              { name: "Panadería", price: "$12.00", tone: "from-lav-300/25 to-plum-700/40" },
            ].map((product) => (
              <div
                key={product.name}
                className="overflow-hidden rounded-md border border-white/[0.07] bg-white/[0.02]"
              >
                <div className={`h-6 bg-gradient-to-br ${product.tone}`} />
                <div className="p-1">
                  <p className="truncate text-[4.5px] text-white/60">{product.name}</p>
                  <p className="text-[5px] font-medium text-lav-200">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col p-2.5">
          <div className="flex items-center gap-1">
            <ShoppingCart className="size-2 text-lav-300" aria-hidden="true" />
            <p className="text-[5.5px] text-white/55">Venta actual</p>
          </div>

          <div className="mt-1.5 space-y-[3px]">
            {[
              ["Leche entera 1L", "$27.00"],
              ["Pan de caja", "$42.50"],
              ["Refresco 600ml", "$18.00"],
            ].map(([name, price]) => (
              <div key={name} className="flex items-center justify-between text-[4.5px]">
                <span className="text-white/45">{name}</span>
                <span className="font-mono text-white/60">{price}</span>
              </div>
            ))}
          </div>

          <div className="my-2 h-px bg-white/[0.07]" />

          <div className="flex items-end justify-between">
            <span className="text-[5px] uppercase tracking-[0.12em] text-white/30">
              Total
            </span>
            <span className="text-[13px] font-medium leading-none tracking-[-0.03em] text-white">
              $87.50
            </span>
          </div>

          <div className="mt-2 flex items-center justify-center gap-1 rounded-md bg-gradient-to-b from-lav-200 to-lav-400 py-[5px] text-[5.5px] font-medium text-plum-900">
            <CreditCard className="size-2" aria-hidden="true" />
            Cobrar
          </div>

          <div className="mt-1.5 grid grid-cols-3 gap-1">
            {["F1", "F2", "F3", "F4", "F5", "F6"].map((key) => (
              <div
                key={key}
                className="rounded-sm border border-white/[0.07] bg-white/[0.02] py-[3px] text-center text-[4px] text-white/30"
              >
                {key}
              </div>
            ))}
          </div>

          <div className="mt-auto flex items-center gap-1 pt-2">
            <CircleUser className="size-2 text-white/25" aria-hidden="true" />
            <span className="text-[4px] text-white/25">Caja 01 · turno mañana</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ————————————————————————————————————————
   Composición del hero
———————————————————————————————————————— */

export function HeroComposition() {
  return (
    <div className="relative mx-auto w-full max-w-[640px]">
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/25 blur-[100px]" />

      <div className="relative">
        <BrowserFrame className="relative z-10 ml-auto w-[88%] rotate-[-1.2deg]">
          <SiteMockup />
        </BrowserFrame>

        {/* teléfono */}
        <PhoneFrame className="absolute -bottom-10 left-0 z-20 w-[27%] min-w-[88px] rotate-[3deg] sm:-left-4 sm:w-[26%]">
          <div className="relative overflow-hidden px-2.5 pb-3 pt-5">
            <div className="pointer-events-none absolute -right-6 -top-6 size-20 rounded-full bg-violet-500/40 blur-2xl" />
            <div className="flex items-center justify-between">
              <span className="text-[4.5px] uppercase tracking-[0.26em] text-white/80">
                AXENTRA
              </span>
              <span className="flex flex-col gap-[2px]">
                <span className="h-[1px] w-2 bg-white/40" />
                <span className="h-[1px] w-2 bg-white/40" />
              </span>
            </div>
            <p className="mt-4 text-[7px] font-medium leading-[1.15] tracking-[-0.02em] text-white">
              Soluciones digitales
              <span className="text-lav-300"> inteligentes</span>
            </p>
            <p className="mt-1.5 text-[3.5px] leading-[1.6] text-white/35">
              Web, software y sistemas a la medida de tu negocio.
            </p>
            <div className="mt-2.5 inline-flex rounded-full bg-lav-200 px-2 py-[3px] text-[4px] font-medium text-plum-900">
              Hablemos
            </div>
            <div className="mt-3 rounded-md border border-white/[0.08] bg-white/[0.03] p-1.5">
              <p className="font-mono text-[3px] leading-[1.7] text-lav-200/45">
                function solucion(datos) {"{"}
                <br />
                &nbsp;&nbsp;return datos.map(crear);
                <br />
                {"}"}
              </p>
            </div>
            <div className="mt-2 flex items-center justify-between">
              {[0, 1, 2, 3].map((item) => (
                <span key={item} className="size-[2px] rounded-full bg-white/20" />
              ))}
            </div>
          </div>
        </PhoneFrame>

        {/* tarjeta flotante: despliegue */}
        <div className="absolute -right-1 top-[58%] z-20 hidden w-[42%] rounded-xl border border-lav-400/25 bg-[#0d0622]/90 p-3 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.9)] backdrop-blur-md sm:block">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-lav-200/50">
              build
            </span>
            <span className="rounded-full bg-lav-400/15 px-1.5 py-[1px] text-[6px] text-lav-200">
              ok
            </span>
          </div>
          <div className="mt-2 space-y-1">
            {[
              ["Diseño responsive", "100%"],
              ["Rendimiento", "óptimo"],
              ["SEO técnico", "listo"],
            ].map(([label, value]) => (
              <div key={label} className="flex items-center justify-between">
                <span className="text-[6.5px] text-white/45">{label}</span>
                <span className="font-mono text-[6px] text-lav-200/70">{value}</span>
              </div>
            ))}
          </div>
          <div className="mt-2 h-[2px] w-full overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-lav-400 to-lav-200" />
          </div>
        </div>

        {/* etiqueta flotante: código */}
        <div className="absolute -left-3 top-6 z-20 hidden items-center gap-1.5 rounded-full border border-white/10 bg-[#0c0620]/85 px-2.5 py-1.5 backdrop-blur-md md:flex">
          <span className="size-1 rounded-full bg-emerald-300/80 shadow-[0_0_8px_2px_rgba(110,231,183,0.5)]" />
          <span className="font-mono text-[6.5px] uppercase tracking-[0.14em] text-white/55">
            deploy · production
          </span>
        </div>
      </div>
    </div>
  );
}
