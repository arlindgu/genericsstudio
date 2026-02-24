"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";
import SectionTitle from "../sectiontitle";
import Booking from "../booking";
import Link from "next/link";

const servicesPricingOverview = [
  {
    title: "Webdesign",
    description:
      "Massgeschneiderte Websites, moderne UX/UI und schnelle Umsetzung.",
    startingPrice: "Ab 600 CHF",
    link: "/webdesign",
  },
  {
    title: "Branding & Logos",
    description:
      "Logoentwicklung, Markenidentität und komplette Brand Guidelines.",
    startingPrice: "Ab 300 CHF",
    link: "/branding",
  },
  {
    title: "Grafikdesign",
    description:
      "Social Media Designs, Illustrationen, Werbegrafiken und mehr.",
    startingPrice: "Ab 80 CHF",
    link: "/graphicdesign",
  },
  {
    title: "Print Design",
    description:
      "Flyer, Karten, Broschüren, Menu Karten und druckfertige Layouts.",
    startingPrice: "Ab 100 CHF",
    link: "/printdesign",
  },
];

export default function Pricing() {
  return (
    <section className="min-h-[50vh] bg-foreground py-24 flex flex-col items-center justify-center">
      <div className="flex flex-col container px-10 max-w-7xl mx-auto">
        <SectionTitle dark title="Klar. Fair. Ohne Überraschungen.">
          Transparente Preise für echte Qualität. Was du siehst, ist was du bekommst.
        </SectionTitle>

        <div className="lg:grid lg:grid-cols-4 flex-col flex gap-6 mt-12">
          {servicesPricingOverview.map((plan, index) => (
            <Card
              key={index}
              className="rounded-none shadow-none relative flex flex-col justify-around"
            >
              <CardHeader>
                <CardTitle className="text-2xl">{plan.title}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <CardTitle className="text-xl mt-2">{plan.startingPrice}</CardTitle>
              </CardHeader>
              <CardFooter>
                <p className="text-sm text-muted-foreground">
                  Individuelle Angebote je nach Projektumfang möglich.
                </p>
              </CardFooter>
              <Button asChild className="mx-6">
                <Link href={plan.link}>
                Mehr erfahren</Link>
              </Button>
            </Card>
          ))}

          <Card className="col-span-4 rounded-none shadow-none relative">
            <CardHeader>
              <CardTitle className="text-2xl">
                Du weißt nicht, was du brauchst?
              </CardTitle>
              <CardDescription>
                Buch einen kostenlosen Termin mit uns — wir helfen dir, den besten Weg für dein Projekt zu finden.
              </CardDescription>
            </CardHeader>
            <CardContent className="hidden lg:block">
              <Booking />
            </CardContent>
            <CardContent className="lg:hidden">
              <Button asChild>
                <a href="https://cal.com/genericsstudio/discovery-call">
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
