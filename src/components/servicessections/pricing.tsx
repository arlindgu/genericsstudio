import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import SectionTitle from "../sectiontitle";

type PricingPlan = {
    title: string;
    description: string;
    price: string;
    features: string[];
};

type PricingProps = {
  pricingData: PricingPlan[];
  title: string;
  description: string;
};

export default function Pricing({ pricingData, title, description }: PricingProps) {
  return (
    <section className="min-h-[50vh] bg-background py-24 flex flex-col items-center justify-center">
      <div className="flex flex-col container px-10 max-w-7xl mx-auto">
        <SectionTitle title={title}>
            {description}
        </SectionTitle>

        <div className="lg:grid lg:grid-cols-3 flex-col flex gap-6 mt-12">
          {pricingData.map((plan, index) => (
            <Card
              key={index}
              className="rounded-none shadow-none bg-foreground text-background relative flex flex-col justify-around"
            >
              <CardHeader>
                <CardTitle className="text-2xl">{plan.title}</CardTitle>
                <CardDescription className="text-background/75">{plan.description}</CardDescription>
                <CardTitle className="text-xl mt-2">{plan.price}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-background/75">
                  Individuelle Angebote je nach Projektumfang möglich.
                </p>
              </CardFooter>
            </Card>
          ))}

          <Card className="col-span-4 bg-foreground text-background rounded-none shadow-none relative">
            <CardHeader>
              <CardTitle className="text-2xl">
                Du weißt nicht, was du brauchst?
              </CardTitle>
              <CardDescription className="text-background/75">
                Buch einen kostenlosen Termin mit uns — wir helfen dir, den besten Weg für dein Projekt zu finden.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant={"secondary"}>
                <a href="https://cal.com/genericsstudio/discovery-call" target="_blank" rel="noopener noreferrer">
                  Termin vereinbaren
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
