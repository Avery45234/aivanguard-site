import Image from "next/image";
import { cn } from "@/lib/cn";

/* Award graphics for the Vanguard Open results: medals, portraits, and a
   laurel wreath. Plain SVG and CSS, no client code, so they render in the
   static HTML. Metal colors are fixed; everything else reads theme tokens,
   so the same pieces work on the white competition page and the dark site. */

export type Place = 1 | 2 | 3;

export const METAL: Record<Place, { name: string; base: string; deep: string; soft: string }> = {
  1: { name: "Gold", base: "#c9a13b", deep: "#7d5b0f", soft: "#f6e9c2" },
  2: { name: "Silver", base: "#9ca3b5", deep: "#535a6d", soft: "#e9ebf1" },
  3: { name: "Bronze", base: "#b97848", deep: "#7a431f", soft: "#f2dccb" },
};

const ORDINAL = ["", "First", "Second", "Third"];

/** A ribboned medal with the place numeral. */
export function Medal({
  place,
  size = 56,
  className,
}: {
  place: Place;
  size?: number;
  className?: string;
}) {
  const m = METAL[place];
  return (
    <svg
      viewBox="0 0 64 86"
      width={size}
      height={Math.round((size * 86) / 64)}
      className={className}
      role="img"
      aria-label={`${ORDINAL[place]} place medal`}
    >
      <path d="M17 0h13l9 32H26z" fill="#7a5bc7" />
      <path d="M47 0H34l-9 32h13z" fill="#4d3390" />
      <circle cx="32" cy="56" r="27" fill={m.base} stroke={m.deep} strokeWidth="1.5" />
      <circle cx="32" cy="56" r="20" fill={m.soft} stroke={m.deep} strokeWidth="1" />
      <text x="32" y="65" textAnchor="middle" fontSize="26" fill={m.deep} className="font-display">
        {place}
      </text>
    </svg>
  );
}

const PORTRAIT_SIZE = {
  lg: "h-36 w-36 text-5xl",
  md: "h-28 w-28 text-4xl",
  sm: "h-12 w-12 text-lg",
} as const;

/** A round portrait in a metal ring. Shows the photo when there is one,
    otherwise the person's initials. */
export function Portrait({
  name,
  image,
  place,
  initials,
  size = "md",
  className,
}: {
  name: string;
  image?: string | null;
  place?: Place;
  initials?: string;
  size?: keyof typeof PORTRAIT_SIZE;
  className?: string;
}) {
  const parts = name.replace(/[^\p{L}\s]/gu, "").split(/\s+/).filter(Boolean);
  const letters =
    initials ?? (parts[0]?.[0] ?? "") + (parts.length > 1 ? parts[parts.length - 1][0] : "");
  const m = place ? METAL[place] : { base: "#6b4cb5", deep: "#4d3390", soft: "#efe9f8" };
  return (
    <div
      className={cn("relative shrink-0 rounded-full p-[3px]", PORTRAIT_SIZE[size], className)}
      style={{ background: `linear-gradient(145deg, ${m.soft}, ${m.base} 45%, ${m.deep})` }}
    >
      <div
        className="relative h-full w-full overflow-hidden rounded-full"
        style={{ background: m.soft }}
      >
        {image ? (
          <Image
            src={image}
            alt={`Portrait of ${name}`}
            fill
            sizes="160px"
            className="object-cover object-top"
          />
        ) : (
          <span
            className="absolute inset-0 flex items-center justify-center font-display tracking-tight"
            style={{ color: m.deep }}
            aria-hidden
          >
            {letters}
          </span>
        )}
      </div>
    </div>
  );
}

const r2 = (n: number) => Math.round(n * 100) / 100;

/** A laurel wreath. Size it with width and height classes; children are
    centered inside it. */
export function Laurel({
  color = "#e2c477",
  className,
  children,
}: {
  color?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  const cx = 100;
  const cy = 100;
  const R = 80;
  const N = 11;
  const leaf = "M0,-12 C5.5,-6 5.5,5 0,12 C-5.5,5 -5.5,-6 0,-12Z";
  const leaves: React.ReactNode[] = [];
  for (let i = 0; i < N; i++) {
    const t = i / (N - 1);
    const phi = ((16 + t * 138) * Math.PI) / 180;
    // Direction of growth up the left side of the circle.
    const tx = -Math.cos(phi);
    const ty = -Math.sin(phi);
    const rot = (Math.atan2(tx, -ty) * 180) / Math.PI;
    const scale = 1 - 0.28 * t;
    for (const side of [-1, 1]) {
      const r = R + side * -6.5; // side -1 is the outer leaf
      const x = cx - r * Math.sin(phi);
      const y = cy + r * Math.cos(phi);
      leaves.push(
        <path
          key={`${i}-${side}`}
          d={leaf}
          transform={`translate(${r2(x)} ${r2(y)}) rotate(${r2(rot + side * 34)}) scale(${r2(scale)})`}
        />,
      );
    }
  }
  const a0 = (10 * Math.PI) / 180;
  const a1 = (158 * Math.PI) / 180;
  const stem = `M${r2(cx - R * Math.sin(a0))} ${r2(cy + R * Math.cos(a0))} A${R} ${R} 0 0 1 ${r2(
    cx - R * Math.sin(a1),
  )} ${r2(cy + R * Math.cos(a1))}`;
  const branch = (
    <>
      <path d={stem} fill="none" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
      <g fill={color}>{leaves}</g>
    </>
  );
  return (
    <div className={cn("relative", className)}>
      <svg viewBox="0 0 200 200" className="h-full w-full" aria-hidden>
        {branch}
        <g transform="translate(200 0) scale(-1 1)">{branch}</g>
      </svg>
      {children && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          {children}
        </div>
      )}
    </div>
  );
}
