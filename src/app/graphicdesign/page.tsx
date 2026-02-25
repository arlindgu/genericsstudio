import type { Metadata } from "next";
import PageHeader from "@/components/sections/pageheader";

export const metadata: Metadata = {
  title: "Grafikdesign",
  description: "Professionelles Grafikdesign aus der Schweiz. Social Media Designs, Illustrationen und Werbegrafiken. Ab 80 CHF.",
  openGraph: {
    title: "Grafikdesign Schweiz – Grafiken, die hängen bleiben.",
    description: "Social Media Posts, Illustrationen, Templates und mehr. Kreatives Grafikdesign aus der Schweiz. Ab 80 CHF.",
    url: "https://generics.studio/graphicdesign",
  },
};
import Pricing from "@/components/servicessections/pricing";
import CTA from "@/components/sections/cta";

const graphicDesignContent = [
  {
    title: "Starter",
    description: "Fürs schnelle, einfache Grafiken.",
    price: "Ab 80 CHF",
    features: [
      "1 Design (z. B. Social Post)",
      "2 Revisionen",
      "Export in allen Formaten",
    ],
  },
  {
    title: "Creative",
    description: "Fürs regelmässige oder komplexere Grafiken.",
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
    description: "Fürs volle Grafikpaket mit mehr Umfang.",
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
      <PageHeader title="Grafikdesign">
        Grafiken, die hängen bleiben.
      </PageHeader>
      <Pricing
        pricingData={graphicDesignContent}
        title="Preise"
        description="Wählen Sie den Plan, der am besten zu Ihren Bedürfnissen passt."
      />
      <CTA />
    </main>
  );
}
