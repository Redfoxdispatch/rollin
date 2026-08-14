import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import { siteUrl } from "@/app/layout";

const description =
  "Request a demo or get in touch with the Rollin team about AI-powered dispatch for your fleet.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact · Rollin", description, url: "/contact" },
  twitter: { title: "Contact · Rollin", description },
};

const INFO = [
  { icon: MapPin, label: "Address", value: "100 Main Street, Suite 200, Cheyenne, WY 82001" },
  { icon: Mail, label: "Support", value: "hello@rollin.ai" },
  { icon: Phone, label: "Phone", value: "+1 123 456 7890" },
  { icon: Clock, label: "Hours", value: "Support available 24/7" },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(siteUrl, [
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your fleet"
        subtitle="Request a demo or send a question. A real person will get back to you, not an autoresponder loop."
      />

      <section className="bg-white py-24 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <Reveal>
              <h2 className="font-heading text-xl font-semibold text-primary-dark">
                Reach us directly
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-gray">
                Rollin is a Wyoming company. The address below is a
                placeholder until finalized.
              </p>
              <ul className="mt-8 space-y-6">
                {INFO.map((item) => (
                  <li key={item.label} className="flex items-start gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-blue/10 text-primary-blue">
                      <item.icon className="h-4.5 w-4.5" strokeWidth={1.75} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-neutral-gray">
                        {item.label}
                      </p>
                      <p className="mt-0.5 text-sm font-medium text-primary-dark">
                        {item.value}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-neutral-border bg-neutral-light p-6 sm:p-8">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
