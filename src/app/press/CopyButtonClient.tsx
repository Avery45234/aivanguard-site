"use client";

import { useState } from "react";

export default function CopyButtonClient({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setCopied(true);
          setTimeout(() => setCopied(false), 1800);
        } catch {
          // Clipboard API unavailable (non-secure context, etc.) — silently ignore.
        }
      }}
      className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-ink-muted hover:text-accent transition-colors"
      aria-label={copied ? "Copied" : "Copy boilerplate to clipboard"}
    >
      <span>{copied ? "Copied ✓" : "Copy"}</span>
    </button>
  );
}
