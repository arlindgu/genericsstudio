import type { Metadata } from "next";
import PageHeader from "@/components/sections/pageheader";

export const metadata: Metadata = {
  title: "Webdesign",
  description: "Professionelles Webdesign aus der Schweiz. Individuell entwickelte Websites – responsiv, schnell und unverkennbar. Ab 600 CHF.",
  openGraph: {
    title: "Webdesign Schweiz – Individuell, schnell und unverkennbar",
    description: "Massgeschneiderte Websites aus der Schweiz. Responsiv, SEO-optimiert und modern. Ab 600 CHF.",
    url: "https://generics.studio/webdesign",
  },
};
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
      <PageHeader title="Webdesign">
        Individuell gebaut. Schnell. Unverkennbar.
      </PageHeader>
      <Pricing
        pricingData={webDesignContent}
        title="Preise"
        description="Wählen Sie den Plan, der am besten zu Ihren Bedürfnissen passt."
      />
      <CTA />
    </main>
  );
}
