import { useId } from "react";
import { cn } from "@/lib/cn";

/**
 * A/V editorial monogram — brand centerpiece.
 *
 * Variants:
 *  - "seal" (default): full crest — concentric rings, compass ticks, engraved
 *    circular text, star emblem, roman-numeral date band. Used in the hero.
 *  - "plain":  A / V on a single baseline.
 *  - "stacked": A above V, separated by an accent rule.
 */
export function Monogram({
  size = 220,
  className,
  variant = "seal",
}: {
  size?: number;
  className?: string;
  variant?: "seal" | "plain" | "stacked";
}) {
  if (variant === "plain") {
    return (
      <span
        className={cn("inline-flex items-baseline text-ink", className)}
        style={{ fontSize: size }}
      >
        <span className="font-display leading-none">A</span>
        <span className="font-display italic leading-none text-accent mx-[0.05em]">
          /
        </span>
        <span className="font-display leading-none">V</span>
      </span>
    );
  }

  if (variant === "stacked") {
    return (
      <span
        className={cn(
          "inline-flex flex-col items-center text-ink leading-[0.85]",
          className,
        )}
        style={{ fontSize: size }}
      >
        <span className="font-display italic">A</span>
        <span
          aria-hidden
          className="h-[0.04em] w-[0.6em] bg-accent my-[0.08em]"
        />
        <span className="font-display italic">V</span>
      </span>
    );
  }

  return <Seal size={size} className={className} />;
}

/**
 * The full crest. Rendered on a 240-unit viewBox so internal geometry stays
 * consistent no matter what pixel size it's asked to display at.
 */
function Seal({ size, className }: { size: number; className?: string }) {
  const uid = useId().replace(/:/g, "");
  const topPathId = `seal-top-${uid}`;
  const bottomPathId = `seal-bottom-${uid}`;
  const gradId = `seal-grad-${uid}`;
  const innerGradId = `seal-inner-${uid}`;

  // viewBox geometry (all computations in this fixed space)
  const V = 240;
  const cx = V / 2;
  const cy = V / 2;

  // Radii of the concentric rings
  const rOuter = 116; // outermost thin rule
  const rText = 104; // path for circular text
  const rMid = 92; // middle hairline (inside text band)
  const rTick = 86; // outer end of compass ticks
  const rTickIn = 78; // inner end of minor ticks
  const rTickInMajor = 70; // inner end of major ticks
  const rInner = 58; // inner medallion boundary

  const topArc = describeArc(cx, cy, rText, 200, 340); // top half, slight overhang
  const bottomArc = describeArcReversed(cx, cy, rText, 20, 160); // bottom half, reversed so text reads left-to-right

  const ticks = Array.from({ length: 60 }, (_, i) => {
    const angle = (i * 360) / 60;
    const isMajor = i % 15 === 0; // cardinal — 12, 3, 6, 9
    const isMid = i % 5 === 0 && !isMajor;
    const inner = isMajor ? rTickInMajor : isMid ? rTickIn - 2 : rTickIn;
    return { angle, inner, isMajor, isMid };
  });

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center select-none",
        className,
      )}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <svg
        viewBox={`0 0 ${V} ${V}`}
        width={size}
        height={size}
        className="block"
      >
        <defs>
          <path id={topPathId} d={topArc} />
          <path id={bottomPathId} d={bottomArc} />

          <radialGradient id={gradId} cx="50%" cy="42%" r="60%">
            <stop offset="0%" stopColor="rgba(246, 215, 160, 0.10)" />
            <stop offset="55%" stopColor="rgba(149, 113, 219, 0.05)" />
            <stop offset="100%" stopColor="rgba(13, 9, 23, 0)" />
          </radialGradient>

          <radialGradient id={innerGradId} cx="50%" cy="45%" r="60%">
            <stop offset="0%" stopColor="rgba(246, 215, 160, 0.14)" />
            <stop offset="70%" stopColor="rgba(107, 76, 181, 0.08)" />
            <stop offset="100%" stopColor="rgba(13, 9, 23, 0)" />
          </radialGradient>
        </defs>

        {/* Ambient wash behind the whole seal */}
        <circle cx={cx} cy={cy} r={rOuter} fill={`url(#${gradId})`} />

        {/* Outer rule */}
        <circle
          cx={cx}
          cy={cy}
          r={rOuter}
          className="monogram-stroke"
          style={{ stroke: "var(--color-accent)", opacity: 0.55 }}
        />
        <circle
          cx={cx}
          cy={cy}
          r={rOuter - 4}
          className="monogram-stroke"
          style={{ stroke: "var(--color-accent)", opacity: 0.22 }}
        />

        {/* Circular text — slow rotation around the seal center.
            `transform-box: view-box` (set in globals.css) keeps the rotation
            pivot at the SVG viewBox center, so the text stays perfectly
            concentric with the rings even over long runtimes. */}
        <g className="seal-rotator">
          {/* Top and bottom use identical font-size + letter-spacing so the
              two bands read as a matching pair at the same visual weight.
              `dominant-baseline="central"` forces the VERTICAL CENTER of each
              text band to sit on its path (r=rText), not the baseline — so
              regardless of which side of the path the letters extend, the
              two bands are visually concentric at the same radius. */}
          <text
            fill="var(--color-ink-dim)"
            dominantBaseline="central"
            style={{
              fontSize: 6.8,
              letterSpacing: "0.28em",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
            }}
          >
            <textPath href={`#${topPathId}`} startOffset="50%" textAnchor="middle">
              AI VANGUARD · LISTEN TO STUDENT VOICE
            </textPath>
          </text>
          <text
            fill="var(--color-ink-dim)"
            dominantBaseline="central"
            style={{
              fontSize: 6.8,
              letterSpacing: "0.28em",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
            }}
          >
            <textPath
              href={`#${bottomPathId}`}
              startOffset="50%"
              textAnchor="middle"
            >
              EST · MMXXIV · SOUTHERN CALIFORNIA
            </textPath>
          </text>
        </g>

        {/* Middle hairline */}
        <circle
          cx={cx}
          cy={cy}
          r={rMid}
          className="monogram-stroke"
          style={{ stroke: "var(--color-border-strong)" }}
        />

        {/* Compass ticks */}
        <g style={{ stroke: "var(--color-ink-muted)", strokeWidth: 0.9 }}>
          {ticks.map((t, i) => {
            const rad = (t.angle * Math.PI) / 180;
            const sin = Math.sin(rad);
            const cos = -Math.cos(rad); // 0° at top
            const x1 = cx + sin * rTick;
            const y1 = cy + cos * rTick;
            const x2 = cx + sin * t.inner;
            const y2 = cy + cos * t.inner;
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                style={{
                  stroke: t.isMajor
                    ? "var(--color-accent)"
                    : "var(--color-ink-muted)",
                  opacity: t.isMajor ? 0.95 : t.isMid ? 0.55 : 0.28,
                  strokeWidth: t.isMajor ? 1.4 : t.isMid ? 1 : 0.7,
                }}
              />
            );
          })}
        </g>

        {/* Cardinal dots at tips of major ticks */}
        {[0, 90, 180, 270].map((a) => {
          const rad = (a * Math.PI) / 180;
          const x = cx + Math.sin(rad) * rTick;
          const y = cy - Math.cos(rad) * rTick;
          return (
            <circle
              key={a}
              cx={x}
              cy={y}
              r={1.4}
              fill="var(--color-accent)"
            />
          );
        })}

        {/* Inner medallion backdrop */}
        <circle cx={cx} cy={cy} r={rInner} fill={`url(#${innerGradId})`} />
        <circle
          cx={cx}
          cy={cy}
          r={rInner}
          className="monogram-stroke"
          style={{ stroke: "var(--color-border-strong)" }}
        />
        <circle
          cx={cx}
          cy={cy}
          r={rInner - 5}
          className="monogram-stroke"
          style={{ stroke: "var(--color-accent)", opacity: 0.22 }}
        />

        {/* Star emblem at top of medallion */}
        <g transform={`translate(${cx} ${cy - 38})`}>
          <Star r={5.5} fill="var(--color-highlight)" />
        </g>

        {/* A · V monogram */}
        <g>
          <text
            x={cx - 20}
            y={cy + 11}
            fill="var(--color-ink)"
            textAnchor="middle"
            style={{
              fontSize: 54,
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            A
          </text>
          {/* Decorative center rule with a diamond */}
          <line
            x1={cx}
            y1={cy - 16}
            x2={cx}
            y2={cy + 10}
            style={{ stroke: "var(--color-accent)", strokeWidth: 1 }}
          />
          <g transform={`translate(${cx} ${cy - 3}) rotate(45)`}>
            <rect
              x={-2.6}
              y={-2.6}
              width={5.2}
              height={5.2}
              fill="var(--color-accent)"
            />
          </g>
          <text
            x={cx + 20}
            y={cy + 11}
            fill="var(--color-ink)"
            textAnchor="middle"
            style={{
              fontSize: 54,
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            V
          </text>
        </g>

        {/* MMXXIV band beneath monogram */}
        <g>
          <line
            x1={cx - 22}
            y1={cy + 24}
            x2={cx - 8}
            y2={cy + 24}
            style={{ stroke: "var(--color-border-strong)" }}
          />
          <line
            x1={cx + 8}
            y1={cy + 24}
            x2={cx + 22}
            y2={cy + 24}
            style={{ stroke: "var(--color-border-strong)" }}
          />
          <text
            x={cx}
            y={cy + 27}
            fill="var(--color-ink-dim)"
            textAnchor="middle"
            style={{
              fontSize: 6.2,
              letterSpacing: "0.28em",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
            }}
          >
            MMXXIV
          </text>
        </g>

        {/* Small trefoil flourish at bottom of medallion */}
        <g transform={`translate(${cx} ${cy + 38})`}>
          <circle cx={-4} cy={0} r={0.9} fill="var(--color-ink-muted)" />
          <circle cx={0} cy={0} r={1.3} fill="var(--color-accent)" />
          <circle cx={4} cy={0} r={0.9} fill="var(--color-ink-muted)" />
        </g>
      </svg>
    </div>
  );
}

function Star({ r, fill }: { r: number; fill: string }) {
  // Five-point star
  const pts: string[] = [];
  for (let i = 0; i < 10; i++) {
    const radius = i % 2 === 0 ? r : r * 0.42;
    const angle = (Math.PI / 5) * i - Math.PI / 2;
    pts.push(`${Math.cos(angle) * radius},${Math.sin(angle) * radius}`);
  }
  return <polygon points={pts.join(" ")} fill={fill} />;
}

/** Arc path running clockwise from startAngle → endAngle (degrees, 0° = 12 o'clock). */
function describeArc(
  cx: number,
  cy: number,
  r: number,
  startAngle: number,
  endAngle: number,
) {
  const start = polar(cx, cy, r, endAngle);
  const end = polar(cx, cy, r, startAngle);
  const large = endAngle - startAngle <= 180 ? 0 : 1;
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${large} 0 ${end.x} ${end.y}`;
}

/** Same arc but reversed direction (text placed on it reads left-to-right along the bottom). */
function describeArcReversed(
  cx: number,
  cy: number,
  r: number,
  startAngle: number,
  endAngle: number,
) {
  const start = polar(cx, cy, r, startAngle);
  const end = polar(cx, cy, r, endAngle);
  const large = endAngle - startAngle <= 180 ? 0 : 1;
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${large} 1 ${end.x} ${end.y}`;
}

function polar(cx: number, cy: number, r: number, angleDeg: number) {
  const a = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
}
