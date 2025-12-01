"use client";

import Noise from "@/components/Noise";
import PageHeader from "@/components/sections/pageheader";
import Pricing from "@/components/servicessections/pricing";
import CTA from "@/components/sections/cta";

const brandingContent = [
  {
    title: "Basic",
    description: "Ideal fuer neue kleine Marken oder einfache Logoentwicklung.",
    price: "Ab 300 CHF",
    features: [
      "1 Logo Konzept",
      "2 Revisionen",
      "Farbschema Basis",
      "Typografie Vorschlaege",
      "Export in allen Formaten",
    ],
  },
  {
    title: "Identity",
    description: "Fuers stabile Markenfundament mit klarer visueller Linie.",
    price: "Ab 700 CHF",
    features: [
      "2–3 Logo Konzepte",
      "Brand Colors Palette",
      "Typografie Setup",
      "Mini Styleguide (PDF)",
      "3 Revisionen",
    ],
  },
  {
    title: "Full Branding",
    description: "Komplette Markenidentitaet mit allem drum und dran.",
    price: "Ab 1200 CHF",
    features: [
      "Logo Set + Varianten",
      "Farbpalette + Typografie System",
      "Brand Elements / Patterns",
      "Brand Guidelines Dokument",
      "Social Media Assets",
      "4 Revisionen",
    ],
  },
];

export default function BrandingPage() {
  return (
    <main className="relative">
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 100,
        }}
      >
        <Noise />
      </div>
      <PageHeader title="Webdesign Dienstleistungen">
        Erstellen Sie atemberaubende, benutzerfreundliche Websites, die Ihre
        Marke zum Leben erwecken und Ihre Zielgruppe begeistern.
      </PageHeader>
      <Pricing
        pricingData={brandingContent}
        title="Branding"
        description="Wählen Sie den Plan, der am besten zu Ihren Bedürfnissen passt."
      />
      <CTA />
    </main>
  );
}
