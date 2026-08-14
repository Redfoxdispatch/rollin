import type { Metadata } from "next";
import { Cpu, GitBranch, ShieldCheck, Truck, TrendingUp } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { JsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import { siteUrl } from "@/app/layout";

const description =
  "Rollin builds an AI route decision engine for trucking carriers, not a load board or broker tool. Learn what we're building and why.";

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: { canonical: "/about" },
  openGraph: { title: "About · Rollin", description, url: "/about" },
  twitter: { title: "About · Rollin", description },
};

const PILLARS = [
  {
    icon: Cpu,
    title: "Decisions, Not Just Data",
    body: "A dashboard that tells you a rate is up 6% isn't a decision. We build toward a specific call: recommended, alternative, or avoid.",
  },
  {
    icon: GitBranch,
    title: "Full-Sequence Thinking",
    body: "Every recommendation accounts for what happens after delivery: reload odds and deadhead, not just the leg in front of you.",
  },
  {
    icon: TrendingUp,
    title: "Built On Your Own History",
    body: "Recommendations are grounded in your fleet's actual lanes and brokers, not a generic market average.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    body: "Fleet, driver, and business data is protected as a baseline requirement, not an add-on.",
  },
  {
    icon: Truck,
    title: "Carriers First",
    body: "Built specifically for carriers running their own trucks, not a load board, and not a tool built for brokers.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(siteUrl, [
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <PageHero
        eyebrow="About Rollin"
        title="Built for carriers who plan more than one load ahead"
        subtitle="Rollin is an AI route decision engine built specifically for trucking carriers and fleet owners, not a load board, and not a tool built for brokers."
      />

      <section className="bg-white py-24 sm:py-28">
        <Container className="max-w-3xl">
          <Reveal>
            <h2 className="font-heading text-2xl font-bold text-primary-dark sm:text-3xl">
              Our mission
            </h2>
            <p className="mt-5 text-base leading-relaxed text-neutral-gray">
              Don't just find the next load. Plan the next profitable move.
              That's the whole premise behind Rollin: evaluate a load in the
              context of what happens after delivery, not just its rate, so
              a carrier's trucks stay positioned for what's next instead of
              stranded after a good-looking payout.
            </p>
            <p className="mt-5 text-base leading-relaxed text-neutral-gray">
              We built Rollin for an audience that's genuinely time-pressed
              and rightly skeptical of software promises. Every
              recommendation comes with the reasoning behind it, not a
              black-box score to take on faith.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-neutral-light py-24 sm:py-28">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-2xl font-bold text-primary-dark sm:text-3xl">
              What we build around
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.08}>
                <PillarCard pillar={pillar} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-24 sm:py-28">
        <Container className="max-w-3xl">
          <Reveal>
            <h2 className="font-heading text-2xl font-bold text-primary-dark sm:text-3xl">
              Company
            </h2>
            <div className="mt-6 rounded-2xl border border-dashed border-neutral-border bg-neutral-light p-6">
              <p className="text-sm leading-relaxed text-neutral-gray">
                Rollin is operated by{" "}
                <span className="font-semibold text-primary-dark">
                  Rollin
                </span>
                , incorporated in{" "}
                <span className="font-semibold text-primary-dark">
                  Wyoming
                </span>{" "}
                and headquartered at{" "}
                <span className="font-semibold text-primary-dark">
                  100 Main Street, Suite 200, Cheyenne, WY 82001
                </span>
                . Founding date, team, and company history will be added here
                once finalized. Placeholders are used throughout this page
                rather than invented details.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05} className="mt-14 text-center">
            <h2 className="font-heading text-2xl font-bold text-primary-dark sm:text-3xl">
              Want to see it on your own fleet?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-neutral-gray">
              Request a demo and we'll walk through Rollin on your own lanes
              and trucks.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/contact">Request a Demo</Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

function PillarCard({ pillar }: { pillar: (typeof PILLARS)[number] }) {
  return (
    <div className="rounded-2xl border border-neutral-border bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-dark/5">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-blue/10 text-primary-blue">
        <pillar.icon className="h-5.5 w-5.5" strokeWidth={1.75} />
      </div>
      <h3 className="mt-4 font-heading text-base font-semibold text-primary-dark">
        {pillar.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-neutral-gray">
        {pillar.body}
      </p>
    </div>
  );
}
