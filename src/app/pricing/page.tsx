import PricingCard, { type PricingCardProps } from "@/components/PricingCard"

export default function PricingPage() {
const pricingOptions: PricingCardProps[] = [
  {
    title: "Deep Plan",
    description: "Website with up to 5 pages.",
    price: "1250",
    currency: "CHF",
    features: [
      "Up to 5 Pages",
      "Priorisierter Support"
    ],
    buttonText: "Deep wählen",
    buttonUrl: "/pricing/deep",
  },
    {
    title: "Start Plan",
    description: "Classic Landing Page for your business.",
    price: "250",
    currency: "CHF",
    features: [
      "One Landing Page",
      "Unlimited Length",
      "Support per Mail"
    ],
    buttonText: "Start wählen",
    buttonUrl: "/pricing/start",
  },
  {
    title: "Elite Plan",
    description: "Freiheit.",
    price: "Consult",
    features: [
      "Custom",
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
            currency={option.currency}
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