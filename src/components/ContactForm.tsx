"use client";

import { useState, type FormEvent } from "react";
import { CircleCheck } from "lucide-react";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [errors, setErrors] = useState<Errors>({});

  // NOTE: front-end only. Wire this handler to a real email/CRM/backend
  // endpoint before launch — it currently just validates and shows a
  // confirmation state.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    const nextErrors: Errors = {};
    if (!name) nextErrors.name = "Enter your name so we know who to reply to.";
    if (!email) {
      nextErrors.email = "Enter an email address so we can reply.";
    } else if (!EMAIL_RE.test(email)) {
      nextErrors.email = "Enter a valid email address, like name@company.com.";
    }
    if (!message) nextErrors.message = "Add a message so we know how to help.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setStatus("sent");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-neutral-border bg-neutral-light p-10 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary-green/15 text-secondary-green">
          <CircleCheck className="h-6 w-6" strokeWidth={1.75} />
        </div>
        <h3 className="mt-5 font-heading text-xl font-semibold text-primary-dark">
          Message sent
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-neutral-gray">
          We'll get back to you within one business day at the email you
          provided.
        </p>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required error={errors.name} />
        <Field label="Company" name="company" />
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Email" name="email" type="email" required error={errors.email} />
        <Field label="Phone" name="phone" type="tel" />
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium text-primary-dark">
          Message <span className="text-primary-blue">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`mt-2 w-full rounded-xl border bg-white px-4 py-3 text-sm text-primary-dark outline-none transition-colors placeholder:text-neutral-gray-light focus:border-primary-blue ${
            errors.message ? "border-red-400" : "border-neutral-border"
          }`}
          placeholder="Tell us about your fleet and what you're looking for."
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-red-500">
            {errors.message}
          </p>
        )}
      </div>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-full bg-primary-blue px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-primary-blue-dark hover:shadow-lg hover:shadow-primary-blue/25 sm:w-auto"
      >
        Send Message
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-primary-dark">
        {label} {required && <span className="text-primary-blue">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`mt-2 w-full rounded-xl border bg-white px-4 py-3 text-sm text-primary-dark outline-none transition-colors placeholder:text-neutral-gray-light focus:border-primary-blue ${
          error ? "border-red-400" : "border-neutral-border"
        }`}
      />
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}
