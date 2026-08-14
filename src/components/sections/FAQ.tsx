"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container, Eyebrow } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { JsonLd } from "@/components/JsonLd";

const FAQS = [
  {
    question: "Is Rollin a load board?",
    answer:
      "No. Rollin connects to the load boards and freight-data platforms you already use, then decides which of those available loads actually sets your truck up best for what comes next. It's a decision layer on top of your data sources, not another board to check.",
  },
  {
    question: "Does Rollin work with brokers?",
    answer:
      "Rollin is built for carriers, not brokers. It evaluates loads from a carrier's perspective, including how a specific broker and lane have historically performed for your fleet.",
  },
  {
    question: "How is this different from a rate calculator or RPM tool?",
    answer:
      "A rate calculator tells you what a load pays. Rollin tells you what a load pays and what it sets up for your next move, using your fleet's own reload and deadhead history, not just the number on the load.",
  },
  {
    question: "What data does Rollin use to make recommendations?",
    answer:
      "Truck position, current load, route economics, driver availability, and your fleet's own historical lane and broker performance. Not generic market averages.",
  },
  {
    question: "Is my fleet and driver data secure?",
    answer:
      "Yes. Data is encrypted in transit and at rest, access is role-based by user, and Rollin does not sell your data.",
  },
  {
    question: "Does Rollin support ELD or HOS integration?",
    answer:
      "Not yet, it's on the roadmap. Once connected, recommendations will factor in driver hours and available drive time so Rollin never suggests a load a driver can't legally complete.",
  },
  {
    question: "How much does Rollin cost?",
    answer:
      "Pricing depends on fleet size and how you plan to use Rollin. Request a demo and we'll walk through a plan for your operation.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 bg-white py-24 sm:py-28">
      <JsonLd data={faqJsonLd} />
      <Container className="max-w-3xl">
        <Reveal className="text-center">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-4 font-heading text-3xl font-bold text-primary-dark sm:text-4xl">
            Common questions
          </h2>
        </Reveal>

        <div className="mt-12 divide-y divide-neutral-border rounded-2xl border border-neutral-border">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4.5 text-left sm:px-6"
                >
                  <span className="font-heading text-sm font-semibold text-primary-dark sm:text-base">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-4.5 w-4.5 shrink-0 text-neutral-gray transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    strokeWidth={1.75}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4.5 text-sm leading-relaxed text-neutral-gray sm:px-6">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
