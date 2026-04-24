"use client";

import { useState } from "react";
import { Button } from "./Button";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

const inquiryTypes = [
  "Student question",
  "School partnership",
  "Press / media",
  "Speaking request",
  "General",
];

export function ContactForm() {
  const [inquiry, setInquiry] = useState(inquiryTypes[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // MVP: open user's mail client with a prefilled message.
    const subject = `[AI Vanguard · ${inquiry}] from ${name}`;
    const body = `From: ${name} <${email}>\nInquiry type: ${inquiry}\n\n${message}`;
    const href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="border border-accent/50 p-8">
        <h3 className="font-display text-2xl text-ink">
          Your mail client should be open.
        </h3>
        <p className="mt-3 text-sm text-ink-dim">
          If nothing opened, email us directly at{" "}
          <a
            href={`mailto:${site.email}`}
            className="text-accent underline underline-offset-4"
          >
            {site.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
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
          <Input value={name} onChange={setName} placeholder="Alex Rivera" required />
        </Field>
        <Field label="Email">
          <Input
            type="email"
            value={email}
            onChange={setEmail}
            placeholder="you@school.edu"
            required
          />
        </Field>
      </div>

      <Field label="Message">
        <Textarea
          value={message}
          onChange={setMessage}
          placeholder="Tell us a little about what you're reaching out about."
          required
          rows={6}
        />
      </Field>

      <div className="flex items-center justify-between pt-4 border-t border-border">
        <p className="text-xs text-ink-muted max-w-xs">
          We&apos;ll reply from {site.email}.
        </p>
        <Button type="submit" size="lg">
          Send message
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
  value,
  onChange,
  type = "text",
  placeholder,
  required,
}: {
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      type={type}
      placeholder={placeholder}
      required={required}
      className="w-full border-b border-border bg-transparent py-3 text-[16px] text-ink placeholder:text-ink-muted transition-colors focus:border-accent focus:outline-none"
    />
  );
}

function Textarea({
  value,
  onChange,
  placeholder,
  required,
  rows = 5,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
  rows?: number;
}) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      required={required}
      rows={rows}
      className="w-full border-b border-border bg-transparent py-3 text-[16px] text-ink placeholder:text-ink-muted transition-colors focus:border-accent focus:outline-none resize-y min-h-[140px]"
    />
  );
}
