"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

/**
 * Paper-plane mascot — "sending student voice forward." Default orientation
 * points RIGHT, so placement is intuitive: drop it to the left of a CTA and
 * it reads as flying into the button. Slight ambient drift on a loop.
 */
export function Mascot({
  size = 96,
  className,
  float = true,
  trail = true,
}: {
  size?: number;
  className?: string;
  float?: boolean;
  trail?: boolean;
}) {
  const reduce = useReducedMotion();
  const animate =
    float && !reduce
      ? { y: [0, -5, 0], x: [0, 3, 0] }
      : undefined;

  return (
    <motion.div
      className={cn("inline-block", className)}
      animate={animate}
      transition={
        animate
          ? { duration: 5.5, repeat: Infinity, ease: "easeInOut" }
          : undefined
      }
      style={{ width: size, height: (size * 80) / 120 }}
      aria-hidden
    >
      <svg viewBox="0 0 120 80" width={size} height={(size * 80) / 120} fill="none">
        {/* motion trail — dashes receding to the LEFT (behind the plane) */}
        {trail && (
          <g className="text-accent" opacity="0.8">
            <path
              d="M2 38 Q 14 36, 20 40"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeDasharray="1 4"
            />
            <path
              d="M4 52 Q 16 50, 22 54"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeDasharray="1 4"
              opacity="0.6"
            />
          </g>
        )}

        {/* Main dart body — points RIGHT, notch on the back */}
        <path
          d="M10 18 L112 42 L10 66 L44 50 Z"
          fill="#F3EEE0"
          stroke="#1A1325"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        {/* Under-fold belly (darker cream, shows the folded paper) */}
        <path
          d="M10 66 L44 50 L32 66 Z"
          fill="#D9CFBE"
          stroke="#1A1325"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        {/* Center crease — nose to notch */}
        <path
          d="M112 42 L44 50"
          stroke="#1A1325"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.65"
        />
        {/* Accent stripe on the upper wing */}
        <path
          d="M58 30 L94 38"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="text-accent"
        />

        {/* Face — on the main body, back-left area */}
        <circle cx="22" cy="36" r="1.7" fill="#1A1325" />
        <circle cx="30" cy="36" r="1.7" fill="#1A1325" />
        <path
          d="M21 42 Q 26 45.5, 31 42"
          stroke="#1A1325"
          strokeWidth="1.3"
          strokeLinecap="round"
          fill="none"
        />
        {/* Cheek blush */}
        <circle cx="17" cy="41" r="1.5" fill="#E0B8FF" opacity="0.55" />
        <circle cx="35" cy="41" r="1.5" fill="#E0B8FF" opacity="0.55" />
      </svg>
    </motion.div>
  );
}
