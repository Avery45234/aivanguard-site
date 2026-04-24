export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline gap-2 ${className}`}>
      <span className="font-display text-[22px] leading-none tracking-tight text-ink">
        AI Vanguard
      </span>
      <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-ink-muted">
        est. 2024
      </span>
    </span>
  );
}
