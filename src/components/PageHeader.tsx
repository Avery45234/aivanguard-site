import { Container } from "./Container";
import { Eyebrow } from "./Eyebrow";

export function PageHeader({
  eyebrow,
  title,
  blurb,
  meta,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  blurb?: React.ReactNode;
  meta?: React.ReactNode;
}) {
  return (
    <section className="relative pt-14 pb-10 md:pt-20 md:pb-14 border-b border-border">
      <Container size="wide">
        <div className="grid gap-8 md:grid-cols-[1.3fr_1fr] md:gap-14 items-end">
          <div>
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            <h1 className="mt-5 md:mt-6 font-display tracking-tight text-ink leading-[1.02] text-[40px] sm:text-5xl md:text-6xl lg:text-[76px] max-w-4xl">
              {title}
            </h1>
          </div>
          {(blurb || meta) && (
            <div className="md:pb-2">
              {blurb && (
                <p className="text-[15.5px] md:text-[16.5px] text-ink-dim leading-relaxed max-w-md">
                  {blurb}
                </p>
              )}
              {meta && <div className="mt-5">{meta}</div>}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
