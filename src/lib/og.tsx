import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 } as const;

/**
 * Shared renderer for OG cards — used by each page's opengraph-image.tsx.
 * Keeps the visual language consistent (dark plum bg, serif headline,
 * small-caps eyebrow + footer rail) without duplicating markup.
 */
export function renderOgCard({
  eyebrow,
  title,
  titleItalic,
  footerLeft = "aivanguard.org",
  footerRight,
}: {
  eyebrow: string;
  title: string;
  titleItalic?: string;
  footerLeft?: string;
  footerRight?: string;
}) {
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
          background: "#0d0917",
          color: "#f0ebf8",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          <div style={{ fontSize: 24, letterSpacing: -0.3 }}>AI Vanguard</div>
          <div
            style={{
              fontSize: 13,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "#9571db",
            }}
          >
            {eyebrow}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 22,
            maxWidth: 1040,
          }}
        >
          <div style={{ height: 1, width: 48, background: "#9571db" }} />
          <div
            style={{
              fontSize: 82,
              lineHeight: 1.02,
              letterSpacing: -1.8,
              color: "#f0ebf8",
            }}
          >
            {title}
            {titleItalic ? (
              <>
                {" "}
                <span style={{ fontStyle: "italic", color: "#a49cbf" }}>
                  {titleItalic}
                </span>
              </>
            ) : null}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            color: "#6e6685",
            fontSize: 17,
            letterSpacing: 3,
            textTransform: "uppercase",
            fontFamily: "sans-serif",
          }}
        >
          <span>{footerLeft}</span>
          <span>{footerRight ?? "Student voice · On AI in education"}</span>
        </div>
      </div>
    ),
    { ...OG_SIZE },
  );
}
