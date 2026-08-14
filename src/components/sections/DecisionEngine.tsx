import { CircleCheck, CircleAlert, CircleX } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

const EXAMPLE = [
  {
    tag: "Recommended",
    icon: CircleCheck,
    tone: "border-secondary-green/30 bg-secondary-green/[0.06]",
    tagTone: "text-secondary-green",
    route: "Dallas, TX → Atlanta, GA",
    note: "Pays $300 less than the alternative below, but this lane historically produces faster reloads, lower deadhead, and stronger future earning potential.",
  },
  {
    tag: "Alternative",
    icon: CircleAlert,
    tone: "border-neutral-border bg-white",
    tagTone: "text-neutral-gray",
    route: "Dallas, TX → Nashville, TN",
    note: "+$300 upfront, but this lane historically runs longer reload times and higher deadhead after delivery.",
  },
  {
    tag: "Avoid",
    icon: CircleX,
    tone: "border-red-200 bg-red-50/60",
    tagTone: "text-red-500",
    route: "Dallas, TX → Jackson, MS",
    note: "Decent rate, but a historically weak reload market, with high deadhead risk on the next move.",
  },
];

export function DecisionEngine() {
  return (
    <section id="decision-engine" className="scroll-mt-24 bg-white py-24 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-blue/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-blue">
              Route Decision Engine
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold text-primary-dark sm:text-4xl">
              The load that pays isn't always the load that positions you
              best
            </h2>
            <p className="mt-5 text-base leading-relaxed text-neutral-gray">
              Rollin scores every load by what happens after delivery:
              reload odds, deadhead, and revenue over the whole
              sequence, not just the rate on top.
            </p>
            <div className="mt-8 rounded-2xl border border-dashed border-neutral-border bg-neutral-light p-5">
              <p className="text-xs leading-relaxed text-neutral-gray">
                <strong className="text-primary-dark">Not a load board.</strong>{" "}
                We evaluate where a load leaves your truck, not just what
                it pays today.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-neutral-border bg-neutral-light p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-gray">
                Illustrative example
              </p>
              <div className="mt-4 space-y-3">
                {EXAMPLE.map((item) => (
                  <div
                    key={item.tag}
                    className={`rounded-xl border p-4 ${item.tone}`}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`flex items-center gap-1.5 text-xs font-semibold ${item.tagTone}`}
                      >
                        <item.icon className="h-3.5 w-3.5" strokeWidth={2} />
                        {item.tag}
                      </span>
                    </div>
                    <p className="mt-2 text-sm font-semibold text-primary-dark">
                      {item.route}
                    </p>
                    <p className="mt-1.5 text-xs leading-relaxed text-neutral-gray">
                      {item.note}
                    </p>
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
