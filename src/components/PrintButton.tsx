"use client";

import { cn } from "@/lib/cn";

/**
 * Triggers the browser's print dialog where users can "Save as PDF."
 * Styled to match the Button component's variants; use the optional
 * `label` prop to customize the visible text.
 */
export function PrintButton({
  label = "Download PDF",
  className,
}: {
  label?: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className={cn(
        "inline-flex items-center justify-center gap-2 px-5 py-3 font-medium tracking-tight transition-colors duration-200 text-[14.5px] border border-border-strong text-ink hover:bg-surface",
        "print:hidden",
        className,
      )}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
        <path
          d="M4 2h6v3H4z M3 5h8v4H3z M4 9h6v3H4z"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      {label}
    </button>
  );
}
