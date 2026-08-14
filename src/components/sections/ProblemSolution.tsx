import { X, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

const PROBLEMS = [
  "Rate-first decisions, position-last thinking",
  "No visibility into lane or broker performance",
  "High deadhead quietly eating a good rate",
];

const SOLUTIONS = [
  "Every load scored on the full sequence, not just the rate",
  "Broker and lane performance from your own history",
  "Lower deadhead, faster reloads, tracked over time",
];

export function ProblemSolution() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-primary-dark sm:text-4xl">
            The highest-paying load isn't always the right one
          </h2>
          <p className="mt-3 text-base text-neutral-gray">
            A good rate today can strand a truck tomorrow.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal className="rounded-2xl border border-neutral-border bg-neutral-light p-8">
            <h3 className="font-heading text-lg font-semibold text-primary-dark">
              The old way
            </h3>
            <ul className="mt-6 space-y-4">
              {PROBLEMS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-gray/15">
                    <X className="h-3 w-3 text-neutral-gray" strokeWidth={2.5} />
                  </span>
                  <span className="text-sm leading-relaxed text-neutral-gray">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            delay={0.1}
            className="rounded-2xl border border-primary-blue/20 bg-primary-dark p-8"
          >
            <h3 className="font-heading text-lg font-semibold text-white">
              With Rollin
            </h3>
            <ul className="mt-6 space-y-4">
              {SOLUTIONS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary-green/20">
                    <Check className="h-3 w-3 text-secondary-green" strokeWidth={2.5} />
                  </span>
                  <span className="text-sm leading-relaxed text-white/75">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
