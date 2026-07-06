"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/Button";
import { cn } from "@/lib/cn";

const topics = [
  "Registration",
  "Submission",
  "Rules & eligibility",
  "Technical issue",
  "Other",
];

export function HelpForm() {
  const [state, handleSubmit] = useForm("xpqgnpva");
  const [topic, setTopic] = useState(topics[0]);
  const [name, setName] = useState("");

  if (state.succeeded) {
    return (
      <div className="rounded-2xl border border-accent/50 bg-bg p-8 text-center">
        <div className="text-[11px] uppercase tracking-[0.22em] text-accent">
          Request received
        </div>
        <h2 className="mt-4 font-display text-2xl tracking-tight text-ink">
          Thanks{name ? `, ${name.split(" ")[0]}` : ""} — we&apos;re on it.
        </h2>
        <p className="mt-3 text-[14px] text-ink-dim leading-relaxed">
          Your request has been sent to the organizers. We&apos;ll reply to the
          email you provided.
        </p>
        <div className="mt-6">
          <Button href="/portal" variant="secondary">
            Back to the portal
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-bg shadow-[0_2px_16px_rgba(60,34,116,0.05)] p-7 md:p-9 space-y-7"
    >
      <input type="hidden" name="topic" value={topic} />
      <input
        type="hidden"
        name="_subject"
        value={`Portal Help — ${topic} — ${name || "Entrant"}`}
      />
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <label className="block">
        <span className="block text-[13px] font-medium text-ink mb-3">
          What is this about?
        </span>
        <span className="flex flex-wrap gap-2">
          {topics.map((t) => (
            <button
              type="button"
              key={t}
              onClick={() => setTopic(t)}
              className={cn(
                "border px-4 h-9 text-sm rounded-full transition-colors",
                topic === t
                  ? "border-accent text-ink bg-accent/10"
                  : "border-border text-ink-dim hover:text-ink hover:border-ink/40",
              )}
            >
              {t}
            </button>
          ))}
        </span>
      </label>

      <label className="block">
        <span className="block text-[13px] font-medium text-ink mb-2">
          Your name
        </span>
        <input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Alex Rivera"
          required
          className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-[15px] text-ink placeholder:text-ink-muted transition-colors focus:border-accent focus:bg-bg focus:outline-none"
        />
      </label>

      <label className="block">
        <span className="block text-[13px] font-medium text-ink mb-2">
          Email
        </span>
        <input
          name="email"
          type="email"
          placeholder="you@school.edu"
          required
          className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-[15px] text-ink placeholder:text-ink-muted transition-colors focus:border-accent focus:bg-bg focus:outline-none"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="mt-2 block text-[13px] text-accent"
        />
      </label>

      <label className="block">
        <span className="block text-[13px] font-medium text-ink mb-2">
          How can we help?
        </span>
        <textarea
          name="message"
          rows={5}
          required
          placeholder="Tell us what you need — the more specific, the faster we can help."
          className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-[15px] text-ink placeholder:text-ink-muted transition-colors focus:border-accent focus:bg-bg focus:outline-none resize-y"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="mt-2 block text-[13px] text-accent"
        />
      </label>

      <ValidationError errors={state.errors} className="block text-[14px] text-accent" />

      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        <p className="text-[12px] text-ink-muted">
          Or head back to{" "}
          <Link href="/portal" className="text-accent underline underline-offset-4">
            the portal
          </Link>
          .
        </p>
        <Button type="submit" size="lg" disabled={state.submitting}>
          {state.submitting ? "Sending…" : "Send request"}
        </Button>
      </div>
    </form>
  );
}
