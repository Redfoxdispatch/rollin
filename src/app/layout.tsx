import type { Metadata, Viewport } from "next";
import { Poppins, Inter } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const siteUrl = "https://rollin.ai";
const siteName = "Rollin";
const defaultTitle = "Rollin · AI Route Decision Engine for Trucking Carriers";
const defaultDescription =
  "Rollin evaluates every available load against your truck's position, route economics, and what comes next, not just the rate on top. Built for carriers, not brokers.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s · Rollin",
  },
  description: defaultDescription,
  keywords: [
    "route decision engine",
    "trucking dispatch software",
    "carrier dispatch platform",
    "load matching software",
    "fleet intelligence",
    "route profitability",
    "AI dispatch for carriers",
    "owner operator dispatch software",
  ],
  authors: [{ name: "Rollin" }],
  creator: "Rollin",
  publisher: "Rollin",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: defaultTitle,
    description:
      "Don't just find the next load. Plan the next profitable move, with an AI decision engine built for carriers.",
    url: siteUrl,
    siteName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description:
      "Don't just find the next load. Plan the next profitable move, with an AI decision engine built for carriers.",
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#0A1626",
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "Rollin",
  url: siteUrl,
  logo: `${siteUrl}/brand/logo-fullname.png`,
  description: defaultDescription,
  foundingLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
      addressRegion: "WY",
    },
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "100 Main Street, Suite 200",
    addressLocality: "Cheyenne",
    addressRegion: "WY",
    postalCode: "82001",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "hello@rollin.ai",
    telephone: "+1-123-456-7890",
    areaServed: "US",
    availableLanguage: "English",
  },
  sameAs: [],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "Rollin",
  description: defaultDescription,
  publisher: { "@id": `${siteUrl}/#organization` },
  inLanguage: "en-US",
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Rollin",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: defaultDescription,
  url: siteUrl,
  provider: { "@id": `${siteUrl}/#organization` },
  audience: {
    "@type": "Audience",
    audienceType: "Trucking carriers and fleet owners",
  },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    url: `${siteUrl}/contact`,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-neutral-white text-primary-dark">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
