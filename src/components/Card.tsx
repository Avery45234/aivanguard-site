import { cn } from "@/lib/cn";

export function Card({
  children,
  className,
  as: As = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}) {
  return (
    <As
      className={cn(
        "relative border border-border bg-surface/40 p-7 md:p-8 transition-colors duration-200 hover:border-border-strong hover:bg-surface/60",
        className,
      )}
    >
      {children}
    </As>
  );
}
