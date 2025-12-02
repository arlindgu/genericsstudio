"use client";

import Noise from "@/components/Noise";
import PageHeader from "@/components/sections/pageheader";
import Pricing from "@/components/servicessections/pricing";
import CTA from "@/components/sections/cta"

const webDesignContent = [
  {
    title: "Starter",
    description: "Ideal für kleine Projekte und einfache Webauftritte.",
    price: "Ab 600 CHF",
    features: [
      "Individuelles Webdesign",
      "Responsiv",
      "Basis SEO",
      "CMS Setup",
      "Bis 5 Seiten",
      "1 Monat Support",
    ],
  },
  {
    title: "Business",
    description: "Fürs kleine Unternehmen mit mehr Anforderungen.",
    price: "Ab 1500 CHF",
    features: [
      "Individuelles Webdesign + leichte Branding Anpassungen",
      "Erweiterte SEO",
      "Blog/News Setup",
      "Analytics Integration",
      "Performance Optimierung",
      "2 Monate Support",
    ],
  },
  {
    title: "Pro",
    description: "Fürs voll personalisierte, funktionsreiche Projekt.",
    price: "Ab 3000 CHF",
    features: [
      "UX Konzept + Custom UI",
      "Advanced SEO",
      "Automationen",
      "Mehrsprachigkeit",
      "Security Setup + Hosting Setup",
      "3 Monate Support",
    ],
  },
];

export default function WebdesignPage() {
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
      <PageHeader title="Webdesign">
        Erstellen Sie atemberaubende, benutzerfreundliche Websites, die Ihre
        Marke zum Leben erwecken und Ihre Zielgruppe begeistern.
      </PageHeader>
      <Pricing
        pricingData={webDesignContent}
        title="Webdesign Preise"
        description="Wählen Sie den Plan, der am besten zu Ihren Bedürfnissen passt."
      />
      <CTA />
    </main>
  );
}
