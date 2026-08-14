import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { LegalSection, LegalToc } from "@/components/LegalSection";
import { JsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import { siteUrl } from "@/app/layout";

const description =
  "How Rollin collects, uses, and protects account, usage, location, fleet-tracking, and payment data.";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description,
  alternates: { canonical: "/privacy" },
  openGraph: { title: "Privacy Policy · Rollin", description, url: "/privacy" },
  twitter: { title: "Privacy Policy · Rollin", description },
};

const SECTIONS = [
  { id: "overview", title: "Overview & Scope" },
  { id: "information-collected", title: "Information We Collect" },
  { id: "how-used", title: "How Information Is Used" },
  { id: "how-shared", title: "How Information Is Shared" },
  { id: "third-party-integrations", title: "Third-Party Integrations" },
  { id: "cookies", title: "Cookies & Tracking Technologies" },
  { id: "data-security", title: "Data Security" },
  { id: "data-retention", title: "Data Retention" },
  { id: "your-rights", title: "Your Rights and Choices" },
  { id: "childrens-privacy", title: "Children's Privacy" },
  { id: "changes", title: "Changes to This Policy" },
  { id: "contact", title: "Contact Information" },
  { id: "effective-date", title: "Effective Date" },
];

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(siteUrl, [
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ])}
      />
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="How Rollin collects, uses, shares, and protects information, including the location and fleet-tracking data at the core of the platform."
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

              <LegalSection id="overview" number={1} title="Overview & Scope">
                <p>
                  This Privacy Policy explains how Rollin ("we," "us," or
                  "our") collects, uses, discloses, and safeguards
                  information in connection with the Rollin dispatch
                  platform, including our website, web application, and any
                  related mobile applications (collectively, the "Service").
                </p>
                <p>
                  This Policy applies to proprietors, dispatchers, drivers,
                  and other authorized users of the Service ("Users," "you"),
                  and to visitors of our website. It does not apply to
                  third-party websites, load boards, or freight-data
                  platforms that you may access through or alongside the
                  Service, which are governed by their own privacy policies.
                </p>
              </LegalSection>

              <LegalSection id="information-collected" number={2} title="Information We Collect">
                <p>We collect the following categories of information:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    <strong className="text-primary-dark">Account and registration data:</strong>{" "}
                    name, company name, email address, phone number,
                    password, role, and motor carrier or business
                    credentials provided at signup.
                  </li>
                  <li>
                    <strong className="text-primary-dark">Usage data:</strong>{" "}
                    how you interact with the Service, including features
                    used, pages viewed, and actions taken within the
                    dashboard.
                  </li>
                  <li>
                    <strong className="text-primary-dark">Device and log data:</strong>{" "}
                    IP address, browser type, device identifiers, operating
                    system, and access timestamps.
                  </li>
                  <li>
                    <strong className="text-primary-dark">
                      Location and fleet-tracking data:
                    </strong>{" "}
                    real-time and historical GPS location of trucks and
                    shipments, route data, and related telematics
                    information collected through the Service or connected
                    devices, used to power dispatch, routing, and tracking
                    features.
                  </li>
                  <li>
                    <strong className="text-primary-dark">Payment data:</strong>{" "}
                    billing information and transaction records, processed in
                    part through third-party payment processors. We do not
                    store full payment card numbers on our own servers.
                  </li>
                  <li>
                    <strong className="text-primary-dark">
                      Data from third-party integrations:
                    </strong>{" "}
                    load, rate, and freight data received from connected
                    load-board and freight-data platforms when you authorize
                    an integration.
                  </li>
                </ul>
              </LegalSection>

              <LegalSection id="how-used" number={3} title="How Information Is Used">
                <p>We use collected information to:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Provide, operate, and maintain the Service, including dispatch, routing, tracking, and payment features;</li>
                  <li>Match loads to trucks and generate AI-driven insights and recommendations;</li>
                  <li>Communicate with you about your account, updates, and support requests;</li>
                  <li>Monitor, secure, and improve the Service, including detecting fraud and abuse;</li>
                  <li>Comply with legal, regulatory, and contractual obligations applicable to motor carriers and logistics providers.</li>
                </ul>
              </LegalSection>

              <LegalSection id="how-shared" number={4} title="How Information Is Shared">
                <p>We may share information with:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    <strong className="text-primary-dark">Service providers</strong> who
                    perform functions on our behalf, such as hosting,
                    analytics, customer support, and payment processing,
                    under confidentiality and data-protection obligations;
                  </li>
                  <li>
                    <strong className="text-primary-dark">Integrated data partners</strong>,
                    limited to the information required to source loads,
                    verify rates, or complete a dispatch action you initiate;
                  </li>
                  <li>
                    <strong className="text-primary-dark">Legal and compliance recipients</strong>,
                    when required to comply with law, respond to legal
                    process, or protect the rights, safety, or property of
                    Rollin, our Users, or others;
                  </li>
                  <li>
                    <strong className="text-primary-dark">Successors in a business transfer</strong>,
                    such as a merger, acquisition, or asset sale, subject to
                    this Policy or a policy offering comparable protections.
                  </li>
                </ul>
                <p className="font-medium text-primary-dark">
                  We do not sell personal information.
                </p>
              </LegalSection>

              <LegalSection id="third-party-integrations" number={5} title="Third-Party Integrations">
                <p>
                  Rollin is built to integrate with leading freight-data and
                  load-board platforms so that load matching, rate data, and
                  dispatch actions can happen inside a single workflow. When
                  you connect a third-party integration, we exchange the
                  minimum information necessary to perform the action you
                  requested, for example, a rate lookup or a load booking.
                </p>
                <p>
                  Connecting an integration does not give Rollin ownership
                  over your account with that third-party provider, and does
                  not give that provider access to Rollin data beyond what
                  the integration explicitly shares. You can review and
                  revoke connected integrations from your account settings.
                </p>
              </LegalSection>

              <LegalSection id="cookies" number={6} title="Cookies & Tracking Technologies">
                <p>
                  We use cookies and similar technologies to keep you signed
                  in, remember preferences, and understand how the Service is
                  used. This may include first-party cookies we set directly
                  and, where used, analytics cookies from service providers
                  acting on our behalf. You can control cookies through your
                  browser settings; disabling certain cookies may limit parts
                  of the Service.
                </p>
              </LegalSection>

              <LegalSection id="data-security" number={7} title="Data Security">
                <p>
                  We use administrative, technical, and physical safeguards
                  designed to protect information against unauthorized
                  access, alteration, disclosure, or destruction, including
                  encryption of data in transit and at rest and role-based
                  access controls. No method of transmission or storage is
                  completely secure, and we cannot guarantee absolute
                  security.
                </p>
              </LegalSection>

              <LegalSection id="data-retention" number={8} title="Data Retention">
                <p>
                  We retain personal information for as long as needed to
                  provide the Service, comply with legal and regulatory
                  obligations applicable to motor carriers and logistics
                  providers, resolve disputes, and enforce our agreements.
                  Retention periods vary by data type and are reviewed
                  periodically; fleet-tracking and shipment records may be
                  retained longer where required for compliance or
                  contractual recordkeeping.
                </p>
              </LegalSection>

              <LegalSection id="your-rights" number={9} title="User Rights and Choices">
                <p>
                  Depending on your location, you may have rights to access,
                  correct, delete, or receive a copy of your personal
                  information, and to opt out of certain uses of it. For
                  California residents, the California Consumer Privacy Act
                  and California Privacy Rights Act (CCPA/CPRA) provide
                  rights to know what personal information is collected, to
                  request deletion, to correct inaccurate information, and to
                  opt out of the sale or sharing of personal information. We
                  do not sell personal information, and do not knowingly
                  share it for cross-context behavioral advertising.
                </p>
                <p>
                  To exercise any of these rights, contact us using the
                  details in Section 12. We will verify your request and
                  respond within the timeframe required by applicable law.
                </p>
              </LegalSection>

              <LegalSection id="childrens-privacy" number={10} title="Children's Privacy">
                <p>
                  The Service is intended for business use by authorized
                  motor carriers, logistics companies, and their personnel,
                  and is not directed to children. We do not knowingly
                  collect personal information from anyone under 18. If you
                  believe a child has provided us with personal information,
                  contact us and we will take steps to delete it.
                </p>
              </LegalSection>

              <LegalSection id="changes" number={11} title="Changes to This Policy">
                <p>
                  We may update this Policy from time to time to reflect
                  changes to our practices or for legal, operational, or
                  regulatory reasons. We will post the updated Policy with a
                  revised effective date, and where changes are material, we
                  will provide additional notice, such as an in-app or email
                  notification.
                </p>
              </LegalSection>

              <LegalSection id="contact" number={12} title="Contact Information">
                <p>
                  Questions about this Policy or your information can be
                  directed to:
                </p>
                <ul className="list-none space-y-1 pl-0">
                  <li>Rollin</li>
                  <li>100 Main Street, Suite 200, Cheyenne, WY 82001</li>
                  <li>hello@rollin.ai</li>
                  <li>+1 123 456 7890</li>
                </ul>
              </LegalSection>

              <LegalSection id="effective-date" number={13} title="Effective Date">
                <p>
                  This Policy is effective as of{" "}
                  <strong className="text-primary-dark">August 13, 2026</strong>.
                </p>
              </LegalSection>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
