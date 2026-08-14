"use client";

import { useRef, useState } from "react";
import { easeInOut, motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { Inbox, Cpu, GitBranch, UserCheck, RotateCcw } from "lucide-react";
import { Eyebrow } from "@/components/ui/Container";

const STEPS = [
  {
    icon: Inbox,
    title: "Loads come in",
    body: "Available freight flows in from your connected load sources, nothing to check manually.",
  },
  {
    icon: Cpu,
    title: "Rollin evaluates the full picture",
    body: "Truck position, current load, route economics, driver availability, and your fleet's own lane and broker history.",
  },
  {
    icon: GitBranch,
    title: "The decision engine recommends",
    body: "Recommended, Alternative, or Avoid, with the reasoning shown, not just a rate on a screen.",
  },
  {
    icon: UserCheck,
    title: "The trucker decides",
    body: "Book it, skip it, call the broker, or override the call. The recommendation informs. It doesn't decide for you.",
  },
  {
    icon: RotateCcw,
    title: "The outcome is recorded, and Rollin learns",
    body: "Actual results are compared against the prediction, sharpening the next recommendation.",
  },
];

export function ProductFlow() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(STEPS.length - 1) * 100}%`],
    { ease: easeInOut }
  );

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(STEPS.length - 1, Math.round(v * (STEPS.length - 1))));
  });

  return (
    <section
      id="how-it-works"
      className="scroll-mt-24 bg-primary-dark"
      ref={trackRef}
      style={{ height: `${STEPS.length * 90}vh` }}
    >
      <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-4 font-heading text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            One loop, and it gets smarter every time it runs
          </h2>
        </div>

        <motion.div style={{ x }} className="mt-8 flex w-full sm:mt-10">
          {STEPS.map((step, i) => (
            <div key={step.title} className="flex w-full shrink-0 items-center justify-center">
              <div className="flex h-[42vh] w-full max-w-sm flex-col justify-center rounded-2xl border border-white/10 bg-white/3 p-6 sm:h-[46vh] sm:max-w-xl sm:p-8 lg:max-w-2xl">
                <span className="font-heading text-3xl font-bold text-primary-blue-light sm:text-4xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="mt-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary-blue/15 text-primary-blue-light sm:h-11 sm:w-11">
                  <step.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-white sm:text-xl">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-white/60">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="mt-8 flex justify-center gap-1.5">
          {STEPS.map((_, i) => (
            <span
              key={i}
              className={`h-1 w-6 rounded-full transition-colors duration-300 ${
                i === active ? "bg-primary-blue-light" : "bg-white/10"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
