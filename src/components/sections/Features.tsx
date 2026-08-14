"use client";

import { motion } from "framer-motion";
import {
  Route,
  ListChecks,
  Calculator,
  Truck,
  Building2,
  RefreshCw,
} from "lucide-react";
import { Container, Eyebrow } from "@/components/ui/Container";
import { Reveal, RevealGroup, revealItem } from "@/components/motion/Reveal";
import { IconReveal } from "@/components/motion/IconReveal";

const PILLARS = [
  {
    number: "01",
    icon: Route,
    title: "Route Decision Engine",
    benefit: "Evaluates the full sequence, not just the rate: recommended, alternative, or avoid, with the reasoning shown.",
    href: "#decision-engine",
  },
  {
    number: "02",
    icon: ListChecks,
    title: "Intelligent Load Matching",
    benefit: "Matches freight to the right truck and driver by lane fit, equipment, and preferences, not a raw list of everything on the board.",
  },
  {
    number: "03",
    icon: Calculator,
    title: "Route Profitability",
    benefit: "Real economics before you commit: RPM, deadhead, estimated fuel cost, and estimated profit, not just the gross rate.",
  },
  {
    number: "04",
    icon: Truck,
    title: "Fleet & Driver Intelligence",
    benefit: "Know where every truck is, what it's doing, and how it's performing, without a round of phone calls.",
  },
  {
    number: "05",
    icon: Building2,
    title: "Broker & Lane Intelligence",
    benefit: "See which brokers and lanes actually perform for your fleet, based on your own booking history.",
  },
  {
    number: "06",
    icon: RefreshCw,
    title: "Decision & Outcome Learning",
    benefit: "Every recommendation is compared against what actually happened, sharpening the engine for your fleet specifically.",
  },
];

export function Features() {
  return (
    <section id="features" className="scroll-mt-24 bg-neutral-light py-24 sm:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>What Rollin runs on</Eyebrow>
          <h2 className="mt-4 font-heading text-3xl font-bold text-primary-dark sm:text-4xl">
            Six capabilities, one decision loop
          </h2>
        </Reveal>

        <RevealGroup className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((pillar, i) => (
            <PillarCard key={pillar.title} pillar={pillar} index={i} />
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}

function PillarCard({
  pillar,
  index,
}: {
  pillar: (typeof PILLARS)[number];
  index: number;
}) {
  const Tag = pillar.href ? "a" : "div";
  return (
    <motion.div variants={revealItem} className="h-full">
      <Tag
        {...(pillar.href ? { href: pillar.href } : {})}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-border bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-primary-blue/30 hover:shadow-lg hover:shadow-primary-dark/5"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-1 -top-3 z-0 font-heading text-8xl font-bold text-primary-dark/[0.04] transition-colors duration-200 group-hover:text-primary-blue/[0.06]"
        >
          {pillar.number}
        </span>
        <div className="relative z-10">
          <IconReveal
            icon={pillar.icon}
            delay={index * 60}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-blue/10 text-primary-blue"
            iconClassName="h-5.5 w-5.5"
          />
          <h3 className="mt-4 font-heading text-base font-semibold text-primary-dark">
            {pillar.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-gray">
            {pillar.benefit}
          </p>
        </div>
      </Tag>
    </motion.div>
  );
}
