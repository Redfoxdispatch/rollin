import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { LegalSection, LegalToc } from "@/components/LegalSection";
import { JsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import { siteUrl } from "@/app/layout";

const description =
  "The terms that govern use of the Rollin AI-powered dispatch platform.";

export const metadata: Metadata = {
  title: "Terms of Service",
  description,
  alternates: { canonical: "/terms" },
  openGraph: { title: "Terms of Service · Rollin", description, url: "/terms" },
  twitter: { title: "Terms of Service · Rollin", description },
};

const SECTIONS = [
  { id: "acceptance", title: "Acceptance of Terms" },
  { id: "description", title: "Description of Service" },
  { id: "eligibility", title: "Eligibility" },
  { id: "account", title: "Account Registration & Security" },
  { id: "fees", title: "Subscription, Fees & Payment" },
  { id: "acceptable-use", title: "Acceptable Use" },
  { id: "third-party", title: "Third-Party Data & Services" },
  { id: "ip", title: "Intellectual Property" },
  { id: "customer-data", title: "Customer Data Ownership" },
  { id: "disclaimers", title: "Disclaimers & Warranties" },
  { id: "liability", title: "Limitation of Liability" },
  { id: "indemnification", title: "Indemnification" },
  { id: "termination", title: "Termination" },
  { id: "governing-law", title: "Governing Law & Dispute Resolution" },
  { id: "changes", title: "Changes to Terms" },
  { id: "contact", title: "Contact Information" },
];

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(siteUrl, [
          { name: "Home", path: "/" },
          { name: "Terms of Service", path: "/terms" },
        ])}
      />
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        subtitle="The terms that govern your use of the Rollin dispatch platform."
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.7fr_2fr] lg:gap-16">
            <div className="lg:sticky lg:top-24 lg:h-fit">
              <LegalToc items={SECTIONS} />
              <p className="mt-6 text-xs leading-relaxed text-neutral-gray-light">
                This is a professional draft prepared for review. It should
                be reviewed by a licensed attorney before publication.
              </p>
            </div>

            <div className="max-w-none space-y-10">
              <p className="text-sm text-neutral-gray">
                Effective Date: <strong className="text-primary-dark">August 13, 2026</strong>
              </p>

              <LegalSection id="acceptance" number={1} title="Acceptance of Terms">
                <p>
                  These Terms of Service ("Terms") govern your access to and
                  use of the Rollin dispatch platform, including our website
                  and web application (the "Service"), operated by Rollin
                  ("we," "us," or "our"). By creating an
                  account or otherwise using the Service, you agree to be
                  bound by these Terms. If you are using the Service on
                  behalf of a company, you represent that you have authority
                  to bind that company.
                </p>
              </LegalSection>

              <LegalSection id="description" number={2} title="Description of Service">
                <p>
                  Rollin provides AI-assisted dispatch software for trucking
                  operations, including load sourcing and matching through
                  integrated freight-data providers, dispatch assignment,
                  route planning, shipment tracking, payment tracking, and
                  AI-generated business insights. Features may be added,
                  changed, or removed over time.
                </p>
              </LegalSection>

              <LegalSection id="eligibility" number={3} title="Eligibility">
                <p>
                  You must be at least 18 years old and able to form a
                  binding contract to use the Service. The Service is
                  intended for authorized, licensed motor carriers and their
                  personnel, not freight brokers or load-board operators. By
                  using the Service, you represent that you and your
                  business hold all licenses, permits, and authority required
                  by applicable transportation law, including FMCSA
                  operating authority.
                </p>
              </LegalSection>

              <LegalSection id="account" number={4} title="Account Registration & Security">
                <p>
                  You must provide accurate, current information when
                  creating an account and keep it up to date. You are
                  responsible for maintaining the confidentiality of your
                  login credentials and for all activity that occurs under
                  your account. Notify us immediately at hello@rollin.ai if
                  you suspect unauthorized use of your account.
                </p>
              </LegalSection>

              <LegalSection id="fees" number={5} title="Subscription, Fees & Payment">
                <p>
                  Access to paid features requires a subscription billed on
                  the plan and cadence presented at checkout or in your order
                  form (
                  <span className="italic">
                    pricing model to be finalized, placeholder language
                  </span>
                  ). Fees are billed in advance and are non-refundable except
                  as required by law or expressly stated in your order form.
                  We may change pricing on advance notice; continued use
                  after a price change takes effect constitutes acceptance.
                </p>
              </LegalSection>

              <LegalSection id="acceptable-use" number={6} title="Acceptable Use">
                <p>You agree not to:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Use the Service for any unlawful purpose or in violation of transportation, safety, or data-protection law;</li>
                  <li>Reverse engineer, decompile, or attempt to extract the source code of the Service, except as permitted by law;</li>
                  <li>Interfere with or disrupt the integrity or performance of the Service or its underlying infrastructure;</li>
                  <li>Use the Service to misrepresent load, rate, or carrier information to a third party;</li>
                  <li>Access another User's account or data without authorization.</li>
                </ul>
              </LegalSection>

              <LegalSection id="third-party" number={7} title="Third-Party Data & Services">
                <p>
                  Rollin integrates with third-party load-board and
                  freight-data providers to power dispatch and load-matching
                  features. Your use of any connected third-party service is
                  also governed by that provider's own terms, and you are
                  responsible for complying with them. Rollin does not
                  control and does not guarantee the accuracy, completeness,
                  or availability of data supplied by third-party providers.
                </p>
              </LegalSection>

              <LegalSection id="ip" number={8} title="Intellectual Property">
                <p>
                  The Service, including its software, design, branding, and
                  content (excluding Customer Data as defined below), is
                  owned by Rollin and its licensors and is protected by
                  intellectual property laws. Subject to these Terms, we
                  grant you a limited, non-exclusive, non-transferable
                  license to use the Service for your internal business
                  purposes.
                </p>
              </LegalSection>

              <LegalSection id="customer-data" number={9} title="Customer Data Ownership">
                <p>
                  As between you and Rollin, you own all data you submit to
                  or generate through the Service relating to your fleet,
                  drivers, shipments, and business ("Customer Data"). You
                  grant Rollin a license to use Customer Data solely to
                  provide, maintain, and improve the Service. We do not claim
                  ownership of Customer Data and will make reasonable
                  provisions for you to export it, consistent with your
                  subscription plan.
                </p>
              </LegalSection>

              <LegalSection id="disclaimers" number={10} title="Disclaimers & Warranties">
                <p>
                  The Service, including AI-generated recommendations,
                  routes, and insights, is provided "as is" and "as
                  available" without warranties of any kind, express or
                  implied, including merchantability, fitness for a
                  particular purpose, and non-infringement. AI-generated
                  output is a decision-support tool, not a substitute for
                  your own judgment, dispatch procedures, or regulatory
                  compliance obligations.
                </p>
              </LegalSection>

              <LegalSection id="liability" number={11} title="Limitation of Liability">
                <p>
                  To the maximum extent permitted by law, Rollin will not be
                  liable for any indirect, incidental, special,
                  consequential, or punitive damages, or for lost profits or
                  revenue, arising from your use of the Service. Our total
                  liability for any claim arising out of these Terms will not
                  exceed the amount you paid us for the Service in the twelve
                  (12) months preceding the claim.
                </p>
              </LegalSection>

              <LegalSection id="indemnification" number={12} title="Indemnification">
                <p>
                  You agree to indemnify and hold Rollin harmless from any
                  claims, damages, liabilities, and expenses (including
                  reasonable attorneys' fees) arising from your use of the
                  Service, your violation of these Terms, or your violation
                  of any law or third-party right.
                </p>
              </LegalSection>

              <LegalSection id="termination" number={13} title="Termination">
                <p>
                  You may cancel your subscription at any time in accordance
                  with your plan terms. We may suspend or terminate your
                  access to the Service if you materially breach these Terms
                  and do not cure the breach within a reasonable period after
                  notice, or immediately if required to prevent harm to the
                  Service, other Users, or third parties.
                </p>
              </LegalSection>

              <LegalSection id="governing-law" number={14} title="Governing Law & Dispute Resolution">
                <p>
                  These Terms are governed by the laws of the State of
                  Wyoming, without regard to conflict-of-laws principles. Any
                  dispute arising out of these Terms will be resolved in the
                  state or federal courts located in Wyoming, and you consent
                  to personal jurisdiction there (
                  <span className="italic">
                    placeholder, arbitration clause to be added if elected
                  </span>
                  ).
                </p>
              </LegalSection>

              <LegalSection id="changes" number={15} title="Changes to Terms">
                <p>
                  We may update these Terms from time to time. We will post
                  the updated Terms with a revised effective date and, for
                  material changes, provide additional notice. Continued use
                  of the Service after changes take effect constitutes
                  acceptance of the updated Terms.
                </p>
              </LegalSection>

              <LegalSection id="contact" number={16} title="Contact Information">
                <p>Questions about these Terms can be directed to:</p>
                <ul className="list-none space-y-1 pl-0">
                  <li>Rollin</li>
                  <li>100 Main Street, Suite 200, Cheyenne, WY 82001</li>
                  <li>hello@rollin.ai</li>
                  <li>+1 123 456 7890</li>
                </ul>
              </LegalSection>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
