import { ImageResponse } from "next/og";

export const alt = "THOLU — A cinema older than cinema";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
            "radial-gradient(circle at 78% 72%, rgba(239,178,95,0.28), transparent 55%), #09080b",
          color: "#f0e4cf",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: 22,
              height: 22,
              borderRadius: 999,
              background: "#efb25f",
              boxShadow: "0 0 40px rgba(239,178,95,0.9)",
            }}
          />
          <div
            style={{
              fontSize: 26,
              letterSpacing: 10,
              textTransform: "uppercase",
              color: "#efb25f",
              fontFamily: "sans-serif",
            }}
          >
            THOLU
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <div style={{ fontSize: 88, lineHeight: 1.02, letterSpacing: -2, maxWidth: 900 }}>
            A cinema older than cinema.
          </div>
          <div style={{ fontSize: 30, color: "#b4a796", fontFamily: "sans-serif", maxWidth: 820 }}>
            Tholu Bommalata — the leather shadow theatre of Andhra Pradesh.
          </div>
        </div>
        <div
          style={{
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#b4a796",
            fontFamily: "sans-serif",
          }}
        >
          Nimmalakunta · Andhra Pradesh · 2,000+ years
        </div>
      </div>
    ),
    { ...size },
  );
}
