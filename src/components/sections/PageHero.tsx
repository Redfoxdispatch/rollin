import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-primary-dark">
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(50% 60% at 85% 0%, rgba(37,99,235,0.22) 0%, rgba(13,27,42,0) 70%)",
        }}
        aria-hidden="true"
      />
      <Container className="relative py-20 sm:py-24">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary-blue-light">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-2xl font-heading text-4xl font-bold text-white sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/65">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
}
