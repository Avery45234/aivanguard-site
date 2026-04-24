import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "AI Vanguard — Student voice on AI in education";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
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
          background: "#0b0a10",
          color: "#ece8f2",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <div style={{ fontSize: 26, letterSpacing: -0.5 }}>AI Vanguard</div>
          <div style={{ fontSize: 14, letterSpacing: 3, textTransform: "uppercase", color: "#9c9a94" }}>
            Est. 2024 · Southern California
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 1000 }}>
          <div style={{ height: 1, width: 48, background: "#8968cc" }} />
          <div
            style={{
              fontSize: 88,
              lineHeight: 1.02,
              letterSpacing: -2,
            }}
          >
            Student voice, <span style={{ fontStyle: "italic", color: "#9c9a94" }}>on the future of</span> AI in education.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            color: "#6a667a",
            fontSize: 18,
            letterSpacing: 3,
            textTransform: "uppercase",
            fontFamily: "sans-serif",
          }}
        >
          <span>aivanguard.org</span>
          <span>Research · Advocacy · Community</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
