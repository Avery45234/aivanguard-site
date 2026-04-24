import { Eyebrow } from "./Eyebrow";
import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  blurb,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  blurb?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="font-display text-[36px] md:text-5xl lg:text-[56px] leading-[1.04] tracking-tight text-ink max-w-3xl">
        {title}
      </h2>
      {blurb && (
        <p
          className={cn(
            "text-[16px] md:text-[17px] text-ink-dim leading-relaxed max-w-xl",
            align === "center" && "mx-auto",
          )}
        >
          {blurb}
        </p>
      )}
    </div>
  );
}
