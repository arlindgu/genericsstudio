"use client";

import Noise from "@/components/Noise";
import PageHeader from "@/components/sections/pageheader";
import Pricing from "@/components/servicessections/pricing";
import CTA from "@/components/sections/cta";

const printDesignContent = [
  {
    title: "Basic",
    description: "Ideal für einzelne kleine Print Projekte.",
    price: "Ab 100 CHF",
    features: [
      "Einseitiges Design (Flyer, Karte etc.)",
      "Druckfertige Dateien",
      "2 Revisionen",
    ],
  },
  {
    title: "Standard",
    description: "Fürs gängige Printmaterial für Unternehmen.",
    price: "Ab 250 CHF",
    features: [
      "Mehrseitige Designs oder Sets",
      "Visitenkarten + Flyer + Poster",
      "Druckoptimierung",
      "3 Revisionen",
    ],
  },
  {
    title: "Premium",
    description: "Fürs volle Printpaket eines Unternehmens.",
    price: "Ab 500 CHF",
    features: [
      "Komplettes Print Set",
      "Broschüren / Menü Karten",
      "Sonderformate",
      "Professionelle Druckvorbereitung",
      "4 Revisionen",
    ],
  },
];

export default function PrintDesignPage() {
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
      <PageHeader title="Printdesign">
        Erstellen Sie atemberaubende, benutzerfreundliche Websites, die Ihre
        Marke zum Leben erwecken und Ihre Zielgruppe begeistern.
      </PageHeader>
      <Pricing
        pricingData={printDesignContent}
        title="Preise"
        description="Wählen Sie den Plan, der am besten zu Ihren Bedürfnissen passt."
      />
      <CTA />
    </main>
  );
}
