"use client";

import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "./Button";
import { cn } from "@/lib/cn";

const inquiryTypes = [
  "Student question",
  "School partnership",
  "Press / media",
  "Speaking request",
  "Competition",
  "General",
];

export function ContactForm() {
  const [state, handleSubmit] = useForm("xpqgnpva");
  const [inquiry, setInquiry] = useState(inquiryTypes[0]);
  const [name, setName] = useState("");

  if (state.succeeded) {
    return (
      <div className="border border-accent/50 p-8">
        <h3 className="font-display text-2xl text-ink">
          Message sent{name ? `, ${name.split(" ")[0]}` : ""}.
        </h3>
        <p className="mt-3 text-sm text-ink-dim">
          Thanks for reaching out — we&apos;ll reply to the email you provided,
          usually within a couple of days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <input type="hidden" name="inquiryType" value={inquiry} />
      <input
        type="hidden"
        name="_subject"
        value={`[AI Vanguard · ${inquiry}] from ${name || "website visitor"}`}
      />
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <Field label="I'm reaching out about">
        <div className="flex flex-wrap gap-2">
          {inquiryTypes.map((t) => (
            <button
              type="button"
              key={t}
              onClick={() => setInquiry(t)}
              className={cn(
                "border px-4 h-9 text-sm transition-colors",
                inquiry === t
                  ? "border-accent text-ink bg-accent/10"
                  : "border-border text-ink-dim hover:text-ink hover:border-ink/40",
              )}
            >
              {t}
            </button>
          ))}
        </div>
      </Field>

      <div className="grid gap-8 sm:grid-cols-2">
        <Field label="Your name">
          <Input name="name" value={name} onChange={setName} placeholder="Alex Rivera" required />
        </Field>
        <Field label="Email">
          <Input name="email" type="email" placeholder="you@school.edu" required />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="mt-2 block text-[13px] text-accent"
          />
        </Field>
      </div>

      <Field label="Message">
        <Textarea
          name="message"
          placeholder="Tell us a little about what you're reaching out about."
          required
          rows={6}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="mt-2 block text-[13px] text-accent"
        />
      </Field>

      <ValidationError errors={state.errors} className="block text-sm text-accent" />

      <div className="flex items-center justify-between pt-4 border-t border-border">
        <p className="text-xs text-ink-muted max-w-xs">
          We&apos;ll reply by email.
        </p>
        <Button type="submit" size="lg" disabled={state.submitting}>
          {state.submitting ? "Sending…" : "Send message"}
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-[11px] uppercase tracking-[0.18em] text-ink-muted mb-3">
        {label}
      </span>
      {children}
    </label>
  );
}

function Input({
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  required,
}: {
  name: string;
  value?: string;
  onChange?: (v: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <input
      name={name}
      value={value}
      onChange={onChange ? (e) => onChange(e.target.value) : undefined}
      type={type}
      placeholder={placeholder}
      required={required}
      className="w-full border-b border-border bg-transparent py-3 text-[16px] text-ink placeholder:text-ink-muted transition-colors focus:border-accent focus:outline-none"
    />
  );
}

function Textarea({
  name,
  placeholder,
  required,
  rows = 5,
}: {
  name: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
}) {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      required={required}
      rows={rows}
      className="w-full border-b border-border bg-transparent py-3 text-[16px] text-ink placeholder:text-ink-muted transition-colors focus:border-accent focus:outline-none resize-y min-h-[140px]"
    />
  );
}
