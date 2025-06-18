import PricingCard, { type PricingCardProps } from "@/components/PricingCard"

export default function PricingPage() {
const pricingOptions: PricingCardProps[] = [
  {
    title: "Start Plan",
    description: "Klassische Landing Page – eine Seite, so lang du willst.",
    price: "CHF 250",
    features: [
      "Eine Seite (unbegrenzt lang)",
      "Basic SEO",
      "Support per Mail"
    ],
    buttonText: "Start wählen",
    buttonUrl: "/pricing/start"
  },
  {
    title: "Deep Plan",
    description: "Website mit mehreren Seiten (bis zu 5).",
    price: "CHF 1250",
    features: [
      "Bis zu 5 Seiten",
      "Erweitertes SEO",
      "Priorisierter Support"
    ],
    buttonText: "Deep wählen",
    buttonUrl: "/pricing/deep"
  },
  {
    title: "Elite Plan",
    description: "Unlimitierte Website für maximale Freiheit.",
    price: "Consult",
    features: [
      "Unlimitierte Seiten",
      "Custom SEO Strategien",
      "24/7 Support",
    ],
    buttonText: "Elite wählen",
    buttonUrl: "/pricing/elite"
  }
];

  return (
    <main className="flex-1 flex flex-col p-4 justify-center item-center">
      <div className="self-center flex flex-col sm:flex-row gap-4">
        {pricingOptions.map((option, index) => (
          <PricingCard
            key={index}
            title={option.title}
            description={option.description}
            price={option.price}
            features={option.features}
            buttonText={option.buttonText}
            buttonUrl={option.buttonUrl}
          />
        ))}
      </div>
    </main>
  );
}