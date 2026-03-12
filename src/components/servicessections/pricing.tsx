import { ArrowRight, Check } from "lucide-react";

type PricingPlan = {
  title: string;
  description: string;
  price: string;
  features: string[];
};

type PricingCTA = {
  title: string;
  description: string;
  button: string;
};

type PricingProps = {
  pricingData: PricingPlan[];
  label: string;
  title: string;
  description: string;
  note: string;
  cta: PricingCTA;
};

export default function Pricing({ pricingData, label, title, description, note, cta }: PricingProps) {
  return (
    <section className="py-24 border-t border-border">
      <div className="container px-10 max-w-7xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
              {label}
            </span>
            <h2 className="font-mono font-bold tracking-tighter leading-[0.9] text-5xl lg:text-6xl">
              {title}
            </h2>
          </div>
          <p className="text-muted-foreground text-base max-w-sm leading-relaxed">
            {description}
          </p>
        </div>

        <div className="-mx-10 flex flex-col lg:flex-row">
          {pricingData.map((plan, i) => (
            <div
              key={plan.title}
              className="flex-1 p-10 flex flex-col gap-8 border-r last:border-r-0 border-b last:border-b-0 lg:border-b-0"
            >
              <div className="flex flex-col gap-1">
                <h3 className="text-2xl font-mono font-bold">{plan.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {plan.description}
                </p>
              </div>
              <span className="font-mono font-bold text-3xl text-brand">
                {plan.price}
              </span>
              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check
                      size={14}
                      className="mt-0.5 flex-shrink-0 text-brand"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">* {note}</p>

        <div className="-mx-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-border px-10 pt-10">
          <div className="flex flex-col gap-1">
            <p className="font-mono font-bold text-lg">{cta.title}</p>
            <p className="text-muted-foreground text-sm">{cta.description}</p>
          </div>
          <a
            href="https://cal.com/genericsstudio/discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-foreground text-background px-7 py-3.5 font-medium text-sm hover:gap-5 transition-all duration-300 flex-shrink-0"
          >
            {cta.button}
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
