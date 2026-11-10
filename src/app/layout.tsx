import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "AXENTRA | Desarrollo Web y Software Empresarial",
    template: "%s | AXENTRA",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "desarrollo web Villahermosa",
    "diseño de páginas web Tabasco",
    "desarrollo de software empresarial",
    "sistemas administrativos personalizados",
    "aplicaciones web para empresas",
    "páginas web para negocios",
    "punto de venta",
    "AXENTRA",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: "AXENTRA | Desarrollo Web y Software Empresarial",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "AXENTRA | Desarrollo Web y Software Empresarial",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#05030A",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  areaServed: [
    { "@type": "City", name: "Villahermosa" },
    { "@type": "State", name: "Tabasco" },
    { "@type": "Country", name: "México" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.location.city,
    addressRegion: siteConfig.location.state,
    addressCountry: "MX",
  },
  knowsAbout: [
    "Desarrollo web",
    "Desarrollo de software empresarial",
    "Sistemas administrativos",
    "Aplicaciones web",
    "Puntos de venta",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={siteConfig.language}
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-dvh bg-ink font-sans antialiased">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-lav-200 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-plum-900"
        >
          Saltar al contenido
        </a>

        <div className="grain-fixed" aria-hidden="true" />
        <Header />
        <main id="contenido">{children}</main>
        <Footer />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
