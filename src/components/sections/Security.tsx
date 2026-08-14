"use client";

import { ShieldCheck, Lock, KeyRound, FileCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { IconReveal } from "@/components/motion/IconReveal";

const COMMITMENTS = [
  {
    icon: Lock,
    title: "Encrypted in transit and at rest",
    body: "Data moving between your fleet, our platform, and integrated providers is encrypted end to end, and stays encrypted in storage.",
  },
  {
    icon: KeyRound,
    title: "Role-based access controls",
    body: "Every user sees only what their role requires: drivers, dispatchers, and owners each get scoped access.",
  },
  {
    icon: FileCheck,
    title: "Clear data-handling commitments",
    body: "We don't sell your data. Access is logged, and what's shared with integrated partners is limited to what powers dispatch.",
  },
];

export function Security() {
  return (
    <section id="security" className="scroll-mt-24 bg-primary-dark py-24 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary-green/15 text-secondary-green">
              <ShieldCheck className="h-6 w-6" strokeWidth={1.75} />
            </div>
            <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-secondary-green/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-secondary-green">
              Security &amp; Compliance
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl">
              Built for a business that can't afford to lose data
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/60">
              Your dispatch data (loads, routes, driver locations, payments)
              is sensitive by nature. Rollin is built with that in mind
              from the ground up, not bolted on afterward.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-1">
            {COMMITMENTS.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 0.08}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/3 p-6"
              >
                <IconReveal
                  icon={item.icon}
                  delay={i * 80}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-secondary-green"
                  iconClassName="h-5 w-5"
                />
                <div>
                  <h3 className="font-heading text-base font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
