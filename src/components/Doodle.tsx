import { cn } from "@/lib/cn";

/**
 * Hand-drawn SVG accents used to break up text-heavy sections and add
 * warmth without leaving the editorial tone. All accept a size + className.
 * Color is `currentColor` so callers control it (typically text-accent).
 */

type DoodleProps = {
  size?: number;
  className?: string;
};

/** Cluster of sparkles / stars at varied sizes. */
export function Sparkles({ size = 64, className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      fill="none"
      className={cn("text-accent", className)}
      aria-hidden
    >
      <path
        d="M32 6 L34 16 L44 18 L34 20 L32 30 L30 20 L20 18 L30 16 Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M52 34 L53 39 L58 40 L53 41 L52 46 L51 41 L46 40 L51 39 Z"
        fill="currentColor"
        opacity="0.7"
      />
      <path
        d="M14 40 L15 44 L19 45 L15 46 L14 50 L13 46 L9 45 L13 44 Z"
        fill="currentColor"
        opacity="0.6"
      />
    </svg>
  );
}

/** Hand-drawn wavy underline — place behind an emphasized word. */
export function Swoosh({ size = 180, className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 180 22"
      width={size}
      height={(size * 22) / 180}
      fill="none"
      className={cn("text-accent", className)}
      aria-hidden
    >
      <path
        d="M4 14 Q 30 2, 60 10 T 120 10 T 176 6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

/** Curly hand-drawn arrow — use as a conversational pointer. */
export function CurlyArrow({ size = 120, className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 120 80"
      width={size}
      height={(size * 80) / 120}
      fill="none"
      className={cn("text-accent", className)}
      aria-hidden
    >
      <path
        d="M8 10 Q 40 4, 60 26 T 96 62"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* arrowhead */}
      <path
        d="M92 54 L98 64 L88 66"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

/** Tiny up-trending sketch — use next to impact stats. */
export function TrendLine({ size = 96, className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 96 48"
      width={size}
      height={(size * 48) / 96}
      fill="none"
      className={cn("text-accent", className)}
      aria-hidden
    >
      <path
        d="M4 40 L24 30 L40 34 L60 18 L76 22 L90 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M86 8 L90 8 L90 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Imperfect hand-drawn circle — draw attention to a word. */
export function CircleAccent({ size = 140, className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 140 60"
      width={size}
      height={(size * 60) / 140}
      fill="none"
      className={cn("text-accent", className)}
      aria-hidden
    >
      <path
        d="M18 30 Q 18 10, 70 8 Q 124 12, 122 30 Q 120 50, 70 52 Q 20 52, 20 32"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
