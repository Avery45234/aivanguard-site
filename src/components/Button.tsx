import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "link";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-medium tracking-tight transition-colors duration-200 whitespace-nowrap select-none";

const shapes: Record<Variant, string> = {
  primary: "rounded-full",
  secondary: "rounded-full",
  ghost: "rounded-full",
  link: "",
};

const sizes: Record<Size, string> = {
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-7 text-[15px]",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-ink hover:bg-ink hover:text-bg",
  secondary:
    "border border-border-strong text-ink hover:bg-surface hover:border-ink/40",
  ghost: "text-ink-dim hover:text-ink",
  link:
    "h-auto p-0 text-ink underline underline-offset-[6px] decoration-accent/60 hover:decoration-accent decoration-1",
};

type Props = {
  variant?: Variant;
  size?: Size;
  href?: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  className,
  children,
  onClick,
  type = "button",
  disabled,
}: Props) {
  const classes = cn(
    base,
    shapes[variant],
    variant !== "link" && sizes[size],
    variants[variant],
    className,
  );
  if (href) {
    if (external || href.startsWith("http") || href.startsWith("mailto:")) {
      return (
        <a
          href={href}
          className={classes}
          target={external || href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
