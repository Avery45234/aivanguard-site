import { cn } from "@/lib/cn";

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-ink-dim",
        className,
      )}
    >
      <span className="h-px w-6 bg-accent" aria-hidden />
      {children}
    </span>
  );
}
