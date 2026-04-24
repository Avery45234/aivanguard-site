import { cn } from "@/lib/cn";

export function StatTile({
  value,
  label,
  hint,
  className,
}: {
  value: string;
  label: string;
  hint?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative border-t border-border pt-6 pb-5",
        className,
      )}
    >
      <div className="fig text-[44px] md:text-[56px] leading-none text-ink">
        {value}
      </div>
      <div className="mt-4 text-[13px] uppercase tracking-[0.14em] text-ink">
        {label}
      </div>
      {hint && (
        <div className="mt-1 text-xs text-ink-muted">{hint}</div>
      )}
    </div>
  );
}
