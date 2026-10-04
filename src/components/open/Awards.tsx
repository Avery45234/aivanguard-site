import { cn } from "@/lib/cn";

/* The laurel wreath used on the Vanguard Open results. Plain SVG, no
   client code, so it renders in the static HTML. */

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
