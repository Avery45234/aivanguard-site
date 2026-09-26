import Link from "next/link";
import { cn } from "@/lib/cn";

/**
 * A number with its label. Pass `href` to make the whole tile a link to
 * the page that shows where the number comes from; the hint then reads as
 * the source line.
 */
export function StatTile({
  value,
  label,
  hint,
  href,
  className,
}: {
  value: string;
  label: string;
  hint?: string;
  href?: string;
  className?: string;
}) {
  const body = (
    <>
      <div className="fig text-[44px] md:text-[56px] leading-none text-ink">{value}</div>
      <div className="mt-4 text-[13px] uppercase tracking-[0.14em] text-ink">{label}</div>
      {hint && (
        <div className="mt-1 text-xs text-ink-muted">
          {hint}
          {href && <span className="ml-1 text-accent">→</span>}
        </div>
      )}
    </>
  );
  const cls = cn("relative border-t border-border pt-6 pb-5", className);
  return href ? (
    <Link href={href} className={cn(cls, "block group hover:border-accent transition-colors")}>
      {body}
    </Link>
  ) : (
    <div className={cls}>{body}</div>
  );
}
