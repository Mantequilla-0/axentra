import { ImageResponse } from "next/og";

export const alt =
  "AXENTRA — Desarrollo web y software empresarial. Desarrollamos soluciones digitales inteligentes.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const markSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 100"><g fill="none" stroke="#DBCCFF" stroke-linecap="round"><path d="M33.5 82.5 55.5 30.5" stroke-width="15"/><path d="M64 30.5 100.5 82.5" stroke-width="21"/></g></svg>`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(circle at 18% 0%, #341775 0%, #140042 42%, #05030A 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`data:image/svg+xml;base64,${Buffer.from(markSvg).toString("base64")}`}
            width={72}
            height={56}
            alt=""
          />
          <div
            style={{
              fontSize: 34,
              letterSpacing: 14,
              color: "#ffffff",
              textTransform: "uppercase",
            }}
          >
            AXENTRA
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <div
            style={{
              fontSize: 76,
              lineHeight: 1.02,
              letterSpacing: -3,
              maxWidth: 880,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Desarrollamos soluciones</span>
            <span style={{ color: "#DBCCFF" }}>digitales inteligentes.</span>
          </div>
          <div style={{ fontSize: 26, color: "#9E84DB" }}>
            Desarrollo web · Software empresarial · Villahermosa, Tabasco
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(158,132,219,0.3)",
            paddingTop: 24,
            fontSize: 20,
            color: "rgba(219,204,255,0.6)",
            letterSpacing: 4,
          }}
        >
          <span>AXENTRA · DIGITAL SOLUTIONS</span>
          <span>axentra.mx</span>
        </div>
      </div>
    ),
    size,
  );
}
