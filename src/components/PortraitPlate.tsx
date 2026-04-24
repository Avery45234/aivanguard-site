import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Editorial portrait treatment — meant for low-resolution archive portraits
 * (the founder headshot on the old site is 250×250). Framed with a serif
 * caption plate, a chapter mark, and a duotone + sharpen + grain filter
 * stack. Makes the photo feel like a magazine opening spread.
 */
export function PortraitPlate({
  src,
  alt,
  name,
  role,
  caption,
  chapter,
  className,
  aspect = "4/5",
  priority,
}: {
  src: string;
  alt: string;
  name: string;
  role: string;
  caption?: string;
  chapter?: string;
  className?: string;
  aspect?: "4/5" | "3/4" | "1/1";
  priority?: boolean;
}) {
  return (
    <figure className={cn("relative", className)}>
      {/* Corner marks — decorative tick marks at the 4 corners of the plate */}
      <span aria-hidden className="pointer-events-none absolute -top-1 -left-1 h-3 w-3 border-t border-l border-accent/70 z-10" />
      <span aria-hidden className="pointer-events-none absolute -top-1 -right-1 h-3 w-3 border-t border-r border-accent/70 z-10" />
      <span aria-hidden className="pointer-events-none absolute -bottom-1 -left-1 h-3 w-3 border-b border-l border-accent/70 z-10" />
      <span aria-hidden className="pointer-events-none absolute -bottom-1 -right-1 h-3 w-3 border-b border-r border-accent/70 z-10" />

      {/* Chapter mark floating above the plate — single clean label */}
      {chapter && (
        <div className="mb-3 flex items-baseline justify-between text-[10px] uppercase tracking-[0.22em] text-ink-muted">
          <span>{chapter}</span>
          <span>Portrait</span>
        </div>
      )}

      <div
        className={cn(
          "photo-frame photo-portrait relative overflow-hidden",
          aspect === "4/5" && "aspect-[4/5]",
          aspect === "3/4" && "aspect-[3/4]",
          aspect === "1/1" && "aspect-square",
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 85vw, 420px"
          className="object-cover object-top"
          priority={priority}
        />

        {/* Caption plate at the bottom */}
        <figcaption className="absolute inset-x-0 bottom-0 z-[4] p-5 md:p-6 bg-gradient-to-t from-bg-deep via-bg-deep/80 to-transparent">
          <div className="flex items-baseline justify-between gap-4">
            <div>
              <div className="font-display text-xl md:text-2xl tracking-tight text-ink leading-tight">
                {name}
              </div>
              <div className="mt-0.5 text-[11px] uppercase tracking-[0.2em] text-ink-dim">
                {role}
              </div>
            </div>
            {caption && (
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted text-right">
                {caption}
              </div>
            )}
          </div>
        </figcaption>
      </div>
    </figure>
  );
}
