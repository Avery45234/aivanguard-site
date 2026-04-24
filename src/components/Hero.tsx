"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Container } from "./Container";
import { Button } from "./Button";
import { Monogram } from "./Monogram";
import { site } from "@/lib/site";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduce ? 0 : 0.08,
        delayChildren: reduce ? 0 : 0.1,
      },
    },
  };

  const rise: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.7, ease: EASE },
    },
  };

  const headline: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.95, ease: EASE },
    },
  };

  return (
    <section
      className="relative banner-wash border-b border-border"
      data-rail-section="Opening"
    >
      {/* Top brand strip — institutional */}
      <div className="border-b border-border">
        <Container size="wide" className="flex items-center justify-between py-3 text-[11px] uppercase tracking-[0.22em] text-ink-muted">
          <span>Vol. 02 · Spring 2026</span>
          <span className="hidden sm:inline font-display italic normal-case tracking-normal text-sm text-ink">
            A student-led nonprofit
          </span>
          <span>aivanguard.org</span>
        </Container>
      </div>

      {/* Banner — the Monogram/Crest lives in ScrollSeal (which starts
          overlaid here in the upper-right and then spins out to the
          bottom-right corner as the scroll progress indicator). The hero
          text reserves the right-side area visually with a grid. */}
      <Container size="wide" className="relative pt-12 pb-10 md:pt-20 md:pb-14">
        <motion.div
          className="grid gap-8 md:grid-cols-12 md:gap-10 items-start"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="md:col-span-8">
            <motion.div
              variants={rise}
              className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-ink-dim"
            >
              <span className="h-px w-6 bg-accent" aria-hidden />
              <span>Student voice · On AI in education</span>
            </motion.div>

            <motion.h1
              variants={headline}
              className="mt-6 md:mt-8 font-display text-ink tracking-tight leading-[0.92] text-[44px] sm:text-[72px] md:text-[96px] lg:text-[132px] xl:text-[156px] break-words"
            >
              AI Vanguard.
            </motion.h1>

            <motion.p
              variants={rise}
              className="mt-8 max-w-xl text-[17px] md:text-[19px] leading-[1.55] text-ink-dim"
            >
              A student-led nonprofit organizing the people most affected by AI
              in the classroom &mdash; with research, advocacy, and a network of
              representatives across Southern California schools.
            </motion.p>

            <motion.div
              variants={rise}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Button href={site.applyUrl} external size="lg">
                Apply as a student rep
                <ArrowRight />
              </Button>
              <Button href="/get-involved#partner" variant="secondary" size="lg">
                Partner with us
              </Button>
            </motion.div>
          </div>

          {/* Right 4 columns — Monogram as a static brand centerpiece.
              Entrance fade-in only; no scroll-linked acrobatics. */}
          <motion.div
            variants={rise}
            className="md:col-span-4 hidden md:flex md:justify-end md:pt-2"
          >
            <div className="relative">
              <Monogram size={300} variant="seal" className="hidden lg:inline-flex" />
              <Monogram size={240} variant="seal" className="hidden md:inline-flex lg:hidden" />
              <div className="absolute -bottom-3 right-1 text-[10px] uppercase tracking-[0.24em] text-ink-muted">
                <span className="text-accent">✦</span> The Crest
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Pull-line under banner: italic serif statement */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: reduce ? 0 : 0.9, ease: EASE }}
          className="mt-12 md:mt-16 pt-8 border-t border-border"
        >
          <p className="font-display italic text-ink-dim text-2xl md:text-3xl lg:text-[40px] leading-[1.15] tracking-tight max-w-5xl">
            Student voice, on the future of AI in education &mdash;{" "}
            <span className="text-ink not-italic font-display">
              because the people most affected shouldn&rsquo;t have to ask for a
              seat at the table.
            </span>
          </p>
        </motion.div>

        {/* Meta strip */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: reduce ? 0 : 0.07 },
            },
          }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-border"
        >
          {[
            { k: "Est.", v: "2024" },
            { k: "Reach", v: "18,000+ students" },
            { k: "Schools", v: "8 campuses" },
            { k: "Districts", v: "5 in SoCal" },
          ].map((x) => (
            <motion.div
              key={x.k}
              variants={rise}
              className="bg-bg px-5 py-5 md:px-6 md:py-7"
            >
              <div className="text-[11px] uppercase tracking-[0.2em] text-ink-muted">
                {x.k}
              </div>
              <div className="mt-2 font-display text-[22px] md:text-2xl text-ink tracking-tight">
                {x.v}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M3 8h9M8 3l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
