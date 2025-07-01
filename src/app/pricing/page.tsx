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
      "Responsive Design",
    ],
    buttonText: "Choose Deep",
    buttonUrl: "/contact",
  },
    {
    title: "Start Plan",
    description: "Classic Landing Page for your business.",
    price: "250",
    currency: "CHF",
    features: [
      "One Landing Page",
      "Unlimited Length",
      "Responsive Design",
    ],
    buttonText: "Choose Start",
    buttonUrl: "/contact",
  },
  {
    title: "Elite Plan",
    description: "Freedom.",
    price: "Consult",
    features: [
      "Custom",
      "24/7 Support",
    ],
    buttonText: "Choose Elite",
    buttonUrl: "/contact"
  }
];

  return (
    <main className="flex flex-col items-center justify-center gap-4">
      <title>Generics Studio – Pricing</title>

      <div className="self-center flex flex-col items-center justify-center">
      <h1>Pricing Plans</h1>
      <p>Choose the plan that fits your needs</p>
      </div>
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