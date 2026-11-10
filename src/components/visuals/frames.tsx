import type { ReactNode } from "react";

export function BrowserFrame({
  children,
  url = "axentra.mx",
  className = "",
  compact = false,
}: {
  children: ReactNode;
  url?: string;
  className?: string;
  compact?: boolean;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-white/10 bg-[#0a0518] shadow-[0_40px_120px_-60px_rgba(98,67,168,0.9)] ${className}`}
    >
      <div
        className={`flex items-center gap-2 border-b border-white/[0.07] bg-white/[0.03] ${
          compact ? "px-3 py-1.5" : "px-3.5 py-2.5"
        }`}
      >
        <span className="size-1.5 rounded-full bg-white/20" />
        <span className="size-1.5 rounded-full bg-white/15" />
        <span className="size-1.5 rounded-full bg-white/10" />
        <div className="ml-2 flex-1 truncate rounded-md bg-black/30 px-2 py-[3px] text-center font-mono text-[8px] tracking-wide text-lav-200/45">
          {url}
        </div>
      </div>
      {children}
    </div>
  );
}

export function PhoneFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative rounded-[1.6rem] border border-white/15 bg-[#100a20] p-[5px] shadow-[0_30px_80px_-30px_rgba(5,3,10,0.9)] ${className}`}
    >
      <div className="relative overflow-hidden rounded-[1.3rem] bg-[#08040f]">
        <div className="absolute left-1/2 top-1.5 z-10 h-1 w-10 -translate-x-1/2 rounded-full bg-white/15" />
        {children}
      </div>
    </div>
  );
}

/** Rejilla de puntos / línea decorativa reutilizable */
export function DecorativeRings({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={`pointer-events-none ${className}`}
      aria-hidden="true"
      fill="none"
    >
      <circle cx="200" cy="200" r="120" stroke="url(#ring-a)" />
      <circle cx="200" cy="200" r="160" stroke="url(#ring-a)" opacity="0.6" />
      <circle cx="200" cy="200" r="199" stroke="url(#ring-a)" opacity="0.3" />
      <defs>
        <linearGradient id="ring-a" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#9E84DB" stopOpacity="0.5" />
          <stop offset="0.5" stopColor="#6243A8" stopOpacity="0.15" />
          <stop offset="1" stopColor="#DBCCFF" stopOpacity="0.4" />
        </linearGradient>
      </defs>
    </svg>
  );
}
