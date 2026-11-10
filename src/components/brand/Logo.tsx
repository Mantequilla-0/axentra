import Link from "next/link";
import { siteConfig } from "@/config/site";

type LogoProps = {
  className?: string;
  /** "full" = símbolo + wordmark, "mark" = solo símbolo */
  variant?: "full" | "mark";
  /** Tamaño del símbolo en px */
  size?: number;
  href?: string | null;
  label?: string;
};

export function LogoMark({
  size = 30,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 128 100"
      width={size}
      height={(size * 100) / 128}
      role="img"
      aria-hidden="true"
      focusable="false"
      className={className}
      fill="none"
    >
      <path
        d="M33.5 82.5 55.5 30.5"
        stroke="currentColor"
        strokeWidth="15"
        strokeLinecap="round"
      />
      <path
        d="M64 30.5 100.5 82.5"
        stroke="currentColor"
        strokeWidth="21"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({
  className = "",
  variant = "full",
  size = 30,
  href = "#inicio",
  label = siteConfig.name,
}: LogoProps) {
  const content = (
    <span className={`inline-flex items-center gap-3 text-white ${className}`}>
      <LogoMark size={size} className="text-lav-300" />
      {variant === "full" && (
        <span className="text-[1.0625rem] font-normal uppercase tracking-[0.34em] text-white sm:text-[1.15rem]">
          {label}
        </span>
      )}
    </span>
  );

  if (!href) return content;

  return (
    <Link
      href={href}
      aria-label={`${siteConfig.name} — inicio`}
      className="inline-flex rounded-md"
    >
      {content}
    </Link>
  );
}
