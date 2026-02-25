import type { Metadata } from "next";
import PageHeader from "@/components/sections/pageheader";

export const metadata: Metadata = {
  title: "Printdesign",
  description: "Druckfertiges Printdesign aus der Schweiz. Flyer, Visitenkarten, Broschüren und mehr – präzise und professionell. Ab 100 CHF.",
  openGraph: {
    title: "Printdesign Schweiz – Analog. Präzise. Unübersehbar.",
    description: "Druckfertige Layouts für Flyer, Visitenkarten, Broschüren und Menükarten. Ab 100 CHF.",
    url: "https://generics.studio/printdesign",
  },
};
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
      <PageHeader title="Printdesign">
        Analog. Präzise. Unübersehbar.
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
