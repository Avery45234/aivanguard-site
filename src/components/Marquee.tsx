import { cn } from "@/lib/cn";

export function Marquee({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  const track = [...items, ...items]; // duplicate for seamless loop
  return (
    <div className={cn("marquee overflow-hidden", className)}>
      <div className="marquee-track flex w-max items-center gap-12 whitespace-nowrap">
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex items-center gap-12 font-display text-2xl md:text-3xl text-ink-dim/80"
          >
            {item}
            <span aria-hidden className="text-accent text-lg">
              ·
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
