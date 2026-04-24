import { cn } from "@/lib/cn";

/**
 * AI Vanguard brand mark — SVG interpretation of the circular "AI VANGUARD"
 * logo. Used where a scalable, CSS-tintable version is needed (OG hints,
 * policy-brief masthead, press kit, favicon). For pixel-perfect rendering
 * at large sizes, prefer the PNG at /img/brand/aivanguard-mark.png once
 * Avery provides it.
 */
export function BrandMark({
  size = 64,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={cn("inline-block", className)}
      aria-label="AI Vanguard"
      role="img"
    >
      {/* Black disc background */}
      <circle cx="100" cy="100" r="99" fill="#0b0a10" />

      {/* Concentric dashed rings — decorative, evokes the raster logo */}
      <g fill="none" strokeLinecap="round">
        {[
          { r: 92, rot: -22, stroke: "#2c2738", dash: "1.6 7", w: 2.4 },
          { r: 84, rot: 10, stroke: "#45405a", dash: "2 10", w: 2.2 },
          { r: 76, rot: -40, stroke: "#6b6480", dash: "1 6", w: 1.8 },
          { r: 68, rot: 16, stroke: "#45405a", dash: "1 8", w: 1.6 },
          { r: 60, rot: -8, stroke: "#2c2738", dash: "2 8", w: 1.8 },
          { r: 52, rot: 26, stroke: "#6b6480", dash: "1 5", w: 1.5 },
          { r: 44, rot: -4, stroke: "#45405a", dash: "1 6", w: 1.4 },
        ].map((ring, i) => (
          <circle
            key={i}
            cx="100"
            cy="100"
            r={ring.r}
            stroke={ring.stroke}
            strokeWidth={ring.w}
            strokeDasharray={ring.dash}
            transform={`rotate(${ring.rot} 100 100)`}
          />
        ))}
      </g>

      {/* AI — chunky geometric wordmark, white */}
      <g fill="#F3EEE0">
        {/* A — triangle with cutout */}
        <path d="M42 140 L62 76 L78 76 L98 140 L86 140 L82 126 L58 126 L54 140 Z M62 114 L78 114 L70 88 Z" />
        {/* I */}
        <rect x="108" y="76" width="14" height="64" />
      </g>

      {/* VANGUARD below, condensed */}
      <text
        x="100"
        y="164"
        textAnchor="middle"
        fill="#F3EEE0"
        style={{
          fontFamily:
            "Impact, 'Haettenschweiler', 'Arial Narrow', 'Roboto Condensed', sans-serif",
          fontWeight: 700,
          fontSize: 19,
          letterSpacing: 1.4,
        }}
      >
        VANGUARD
      </text>
    </svg>
  );
}
