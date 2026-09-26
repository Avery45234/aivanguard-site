import Link from "next/link";
import { cn } from "@/lib/cn";

/* Small layout blocks that give sections different shapes. The rule for
   using them: no two adjacent sections on a page share a shape, and every
   number or claim sits within one click of its source. */

/** A row of numbered steps. Short labels, one-line captions, nothing more. */
export function Steps({
  steps,
  className,
}: {
  steps: { label: string; caption: string }[];
  className?: string;
}) {
  return (
    <ol
      className={cn(
        "grid gap-px bg-border border border-border sm:grid-cols-2",
        steps.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3",
        className,
      )}
    >
      {steps.map((s, i) => (
        <li key={s.label} className="bg-bg px-5 py-5 md:px-6">
          <div className="flex items-baseline gap-3">
            <span className="fig text-lg text-accent">{String(i + 1).padStart(2, "0")}</span>
            <span className="font-display text-xl md:text-2xl tracking-tight text-ink">
              {s.label}
            </span>
          </div>
          <p className="mt-2 text-[13.5px] text-ink-dim leading-relaxed">{s.caption}</p>
        </li>
      ))}
    </ol>
  );
}

/** A grid of chips: names with an optional small tag (a state code, a count). */
export function ChipGrid({
  items,
  className,
}: {
  items: { label: string; tag?: string; href?: string }[];
  className?: string;
}) {
  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {items.map((it) => {
        const inner = (
          <>
            <span className="text-ink">{it.label}</span>
            {it.tag && (
              <span className="font-mono text-[10.5px] tracking-wider text-ink-muted">
                {it.tag}
              </span>
            )}
          </>
        );
        const cls =
          "inline-flex items-baseline gap-2 border border-border bg-surface/50 px-3 py-1.5 text-[13.5px] tracking-tight";
        return (
          <li key={it.label}>
            {it.href ? (
              <Link href={it.href} className={cn(cls, "hover:border-accent transition-colors")}>
                {inner}
              </Link>
            ) : (
              <span className={cls}>{inner}</span>
            )}
          </li>
        );
      })}
    </ul>
  );
}

/** A document card: something you can open. Type, title, three facts, actions. */
export function DocCard({
  kind,
  title,
  meta,
  actions,
  status,
}: {
  kind: string;
  title: string;
  meta: string[];
  actions: { label: string; href: string; external?: boolean }[];
  status?: string;
}) {
  return (
    <article className="relative flex h-full flex-col border border-border bg-surface/40 p-6 md:p-7">
      <span className="absolute left-0 top-0 h-px w-16 bg-accent" aria-hidden />
      <div className="flex items-baseline justify-between gap-3 text-[10.5px] uppercase tracking-[0.22em]">
        <span className="text-ink-muted">{kind}</span>
        {status && <span className="text-accent">{status}</span>}
      </div>
      <h3 className="mt-4 font-display text-xl md:text-2xl leading-[1.15] tracking-tight text-ink">
        {title}
      </h3>
      <ul className="mt-4 space-y-1 font-mono text-[11.5px] text-ink-dim">
        {meta.map((m) => (
          <li key={m}>{m}</li>
        ))}
      </ul>
      <div className="mt-auto pt-6 flex flex-wrap gap-x-5 gap-y-2 text-[13.5px]">
        {actions.map((a) =>
          a.external ? (
            <a
              key={a.href + a.label}
              href={a.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink underline underline-offset-[6px] decoration-accent/50 hover:text-accent transition-colors"
            >
              {a.label} ↗
            </a>
          ) : (
            <Link
              key={a.href + a.label}
              href={a.href}
              className="text-ink underline underline-offset-[6px] decoration-accent/50 hover:text-accent transition-colors"
            >
              {a.label} →
            </Link>
          ),
        )}
      </div>
    </article>
  );
}

/** One line naming where a number comes from. */
export function SourceLine({
  children,
  href,
  external,
  className,
}: {
  children: React.ReactNode;
  href?: string;
  external?: boolean;
  className?: string;
}) {
  const text = (
    <>
      <span className="uppercase tracking-[0.18em] text-[10.5px] text-ink-muted mr-2">Source</span>
      <span className="text-ink-dim">{children}</span>
    </>
  );
  if (!href) return <p className={cn("text-[12.5px]", className)}>{text}</p>;
  return external ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("block text-[12.5px] hover:text-ink transition-colors", className)}
    >
      {text} <span className="text-ink-muted">↗</span>
    </a>
  ) : (
    <Link href={href} className={cn("block text-[12.5px] hover:text-ink transition-colors", className)}>
      {text} <span className="text-ink-muted">→</span>
    </Link>
  );
}

/** Outlets that have covered AI Vanguard students, as a quiet row of names. */
export function ProofStrip({
  outlets,
  href = "/highlights#press",
  label = "Students covered by",
}: {
  outlets: string[];
  href?: string;
  label?: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-wrap items-baseline gap-x-8 gap-y-3 border-y border-border py-5"
    >
      <span className="text-[10.5px] uppercase tracking-[0.22em] text-ink-muted">{label}</span>
      {outlets.map((o) => (
        <span
          key={o}
          className="font-display text-lg md:text-xl tracking-tight text-ink-dim group-hover:text-ink transition-colors"
        >
          {o}
        </span>
      ))}
      <span className="ml-auto text-[13px] text-ink-dim group-hover:text-accent transition-colors">
        Read the coverage →
      </span>
    </Link>
  );
}

/** An ordinal scale drawn as segments, for the study's disposition codes. */
export function Scale({
  points,
  note,
}: {
  points: readonly { code: string; label: string }[];
  note?: string;
}) {
  return (
    <div>
      <ol className="grid grid-cols-5 gap-px bg-border border border-border">
        {points.map((p, i) => (
          <li key={p.code} className="bg-bg px-3 py-4 md:px-4">
            <div
              className="h-1.5 w-full"
              style={{ background: `color-mix(in oklab, var(--color-accent) ${20 + i * 20}%, transparent)` }}
              aria-hidden
            />
            <div className="mt-3 fig text-2xl text-ink">{p.code}</div>
            <div className="mt-1 text-[12px] leading-snug text-ink-dim">{p.label}</div>
          </li>
        ))}
      </ol>
      {note && <p className="mt-3 text-[12.5px] text-ink-muted leading-relaxed">{note}</p>}
    </div>
  );
}

/** Lettered tiles, for evidence levels. */
export function Levels({ levels }: { levels: readonly { level: string; text: string }[] }) {
  return (
    <ol className="grid gap-px bg-border border border-border sm:grid-cols-2">
      {levels.map((l) => (
        <li key={l.level} className="bg-bg px-4 py-4 flex gap-4">
          <span className="fig text-2xl text-accent w-8 shrink-0">{l.level}</span>
          <span className="text-[13.5px] text-ink-dim leading-relaxed">{l.text}</span>
        </li>
      ))}
    </ol>
  );
}

/** Label/value facts in a tight card. */
export function FactCard({
  title,
  facts,
  className,
}: {
  title?: string;
  facts: { k: string; v: React.ReactNode }[];
  className?: string;
}) {
  return (
    <dl className={cn("border border-border bg-surface/40 p-5 md:p-6", className)}>
      {title && (
        <div className="mb-3 text-[10.5px] uppercase tracking-[0.22em] text-ink-muted">{title}</div>
      )}
      {facts.map((f) => (
        <div
          key={f.k}
          className="flex items-baseline justify-between gap-6 border-t border-border py-2.5 first:border-t-0 text-[13.5px]"
        >
          <dt className="text-ink-muted shrink-0">{f.k}</dt>
          <dd className="text-ink text-right">{f.v}</dd>
        </div>
      ))}
    </dl>
  );
}
