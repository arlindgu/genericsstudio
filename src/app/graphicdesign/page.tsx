"use client";

import Noise from "@/components/Noise";
import PageHeader from "@/components/sections/pageheader";
import Pricing from "@/components/servicessections/pricing";
import CTA from "@/components/sections/cta";

const graphicDesignContent = [
  {
    title: "Starter",
    description: "Fuers schnelle, einfache Grafiken.",
    price: "Ab 80 CHF",
    features: [
      "1 Design (z. B. Social Post)",
      "2 Revisionen",
      "Export in allen Formaten",
    ],
  },
  {
    title: "Creative",
    description: "Fuers regelmaessige oder komplexere Grafiken.",
    price: "Ab 250 CHF",
    features: [
      "Bis 5 Grafiken",
      "Illustrationen optional",
      "Social Media Templates",
      "3 Revisionen",
    ],
  },
  {
    title: "Pro Package",
    description: "Fuers volle Grafikpaket mit mehr Umfang.",
    price: "Ab 500 CHF",
    features: [
      "Bis 12 Grafiken",
      "Custom Illustrationen",
      "Brand Templates",
      "4 Revisionen",
    ],
  },
];

export default function GraphicDesignPage() {
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
      <PageHeader title="Grafikdesign">
        Erstellen Sie atemberaubende, benutzerfreundliche Websites, die Ihre
        Marke zum Leben erwecken und Ihre Zielgruppe begeistern.
      </PageHeader>
      <Pricing
        pricingData={graphicDesignContent}
        title="Grafikdesign Preise"
        description="Wählen Sie den Plan, der am besten zu Ihren Bedürfnissen passt."
      />
      <CTA />
    </main>
  );
}
