"use client";

import PricingCard, { type PricingCardProps } from "@/components/PricingCard"
import { motion } from "framer-motion"

export default function PricingPage() {
  const pricingOptions: PricingCardProps[] = [
    {
      title: "Deep Plan",
      description: "Website with up to 5 pages. Standard for small businesses.",
      price: "1250",
      currency: "CHF",
      features: [
        "Up to 5 Pages",
        "Responsive Design",
      ],
    },
    {
      title: "Start Plan",
      description: "Classic Landing Page for your startup.",
      price: "250",
      currency: "CHF",
      features: [
        "One Landing Page",
        "Unlimited Length",
        "Responsive Design",
      ],
    },
    {
      title: "Ultra Plan",
      description: "Website with up to 10 pages. Perfect for medium businesses.",
      price: "2500",
      currency: "CHF",
      features: [
        "Up to 10 Pages",
        "Responsive Design",
        "SEO Optimization",
        "Contact Form",
      ],
    },
    {
      title: "Need something else?",
      buttonText: "Contact Us",
      buttonUrl: "/contact",
    }
  ];

  return (
    <main className="flex flex-col items-center justify-center gap-4">
      <title>Generics Studio – Pricing</title>
        <h1>Pricing Plans</h1>
        <p>Choose the plan that fits your needs</p>
      <div className="flex flex-col sm:flex-row gap-4 sm:justify-center">
        {pricingOptions.map((option, index) => (
          <motion.div
            key={index}
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 10, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0 + index * 0.1 }}
            className="w-full">
            <PricingCard
              key={index}
              title={option.title}
              description={option.description}
              currency={option.currency}
              price={option.price}
              features={option.features}
              buttonText={option.buttonText}
              buttonUrl={option.buttonUrl}
              tag={option.tag}
            />
                      </motion.div>
        ))}

      </div>
    </main>
  );
}