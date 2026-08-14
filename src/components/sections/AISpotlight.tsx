"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Bot,
  CircleCheck,
  TrendingUp,
  MapPin,
  ShieldAlert,
} from "lucide-react";
import { Container, Eyebrow } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

const CAPABILITIES = [
  "Explains every Recommended, Alternative, or Avoid call in plain language",
  "Answers direct follow-up questions about a load, lane, or driver",
  "Learns from your fleet's own outcomes, not generic market data",
];

const EXCHANGES = [
  {
    question: "Why Atlanta over the Nashville load? It pays $300 less.",
    type: "text" as const,
    answer:
      "Nashville pays more upfront, but your fleet's own history shows Atlanta loads reload faster with less deadhead. Over the full sequence, Atlanta nets more.",
  },
  {
    question: "What's Unit 214's status right now?",
    type: "card" as const,
    card: {
      icon: MapPin,
      tone: "text-primary-blue",
      title: "Unit 214",
      subtitle: "I-40, near Little Rock, AR",
      meta: "ETA 4h 20m",
      metaTone: "text-neutral-gray",
    },
  },
  {
    question: "Which broker should I watch on the Memphis lane?",
    type: "text" as const,
    answer:
      "Over your last 12 loads, one broker has averaged 2.5 days longer detention on Memphis pickups than your fleet average.",
  },
  {
    question: "Show me this week's most profitable lane.",
    type: "card" as const,
    card: {
      icon: TrendingUp,
      tone: "text-secondary-green",
      title: "Dallas, TX → Atlanta, GA",
      subtitle: "RPM $2.41 · Deadhead 6%",
      meta: "Est. profit $1,180",
      metaTone: "text-secondary-green",
    },
  },
  {
    question: "Anything I should flag before I dispatch tomorrow?",
    type: "card" as const,
    card: {
      icon: ShieldAlert,
      tone: "text-red-500",
      title: "Dallas, TX → Jackson, MS",
      subtitle: "Matches your fleet's Avoid pattern",
      meta: "Weak reload market",
      metaTone: "text-red-500",
    },
  },
];

type Message = (typeof EXCHANGES)[number] & { uid: number };

export function AISpotlight() {
  const [state, setState] = useState<{
    cursor: number;
    nextUid: number;
    messages: Message[];
  }>(() => ({
    cursor: 0,
    nextUid: 1,
    messages: [{ ...EXCHANGES[0], uid: 0 }],
  }));
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setState((prev) => {
        const next = (prev.cursor + 1) % EXCHANGES.length;
        const uid = prev.nextUid;
        const entry = { ...EXCHANGES[next], uid };
        const messages = next === 0 ? [entry] : [...prev.messages, entry];
        return { cursor: next, nextUid: uid + 1, messages };
      });
    }, 6000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [state.messages]);

  return (
    <section id="ai-spotlight" className="scroll-mt-24 bg-neutral-light py-24 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Eyebrow>Explainable, not a black box</Eyebrow>
            <h2 className="mt-4 font-heading text-3xl font-bold text-primary-dark sm:text-4xl">
              Ask why, and get a real answer
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-gray">
              A recommendation you can't question isn't useful to a
              dispatcher who has to defend the call. Rollin explains its
              reasoning in plain language, and takes a direct follow-up
              question.
            </p>
            <ul className="mt-8 space-y-4">
              {CAPABILITIES.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CircleCheck className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary-blue" strokeWidth={1.75} />
                  <span className="text-sm leading-relaxed text-neutral-gray">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-neutral-border bg-white p-5 shadow-xl shadow-primary-dark/5 sm:p-6">
              <div className="flex items-center gap-2.5 border-b border-neutral-border pb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-blue/10 text-primary-blue">
                  <Bot className="h-4.5 w-4.5" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary-dark">Decision Engine</p>
                  <p className="flex items-center gap-1.5 text-xs text-neutral-gray">
                    <span className="h-1.5 w-1.5 rounded-full bg-secondary-green" />
                    Reasoning on your fleet's data
                  </p>
                </div>
              </div>

              <div
                ref={scrollRef}
                className="mt-5 flex h-[300px] flex-col gap-4 overflow-hidden pr-1"
              >
                {state.messages.map((msg) => (
                  <div key={msg.uid} className="space-y-3">
                    <motion.div
                      initial={{ opacity: 0, x: 60, scale: 0.85 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                      className="ml-auto max-w-[90%] rounded-2xl rounded-tr-sm bg-neutral-light px-4 py-2.5 text-sm text-primary-dark"
                    >
                      {msg.question}
                    </motion.div>

                    {msg.type === "text" ? (
                      <motion.div
                        initial={{ opacity: 0, x: -60, scale: 0.85 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
                        className="max-w-[92%] rounded-2xl rounded-tl-sm bg-primary-blue/10 px-4 py-2.5 text-sm leading-relaxed text-primary-dark"
                      >
                        {msg.answer}
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, x: -60, scale: 0.85 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
                        className="flex max-w-[92%] items-start gap-3 rounded-2xl rounded-tl-sm bg-primary-blue/10 px-4 py-3"
                      >
                        <div
                          className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white ${msg.card.tone}`}
                        >
                          <msg.card.icon className="h-4 w-4" strokeWidth={1.75} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-primary-dark">
                            {msg.card.title}
                          </p>
                          <p className="mt-0.5 text-xs text-neutral-gray">
                            {msg.card.subtitle}
                          </p>
                          <p className={`mt-1 text-xs font-semibold ${msg.card.metaTone}`}>
                            {msg.card.meta}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
