"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";
import SectionTitle from "../sectiontitle";
import Booking from "../booking";

const webDesignContent = [
  {
    title: "Starter",
    description:
      "Ideal für kleine Projekte und einfache Webauftritte mit klarer Struktur und sauberem Design.",
    price: "Ab 1000 CHF",
    features: [
      "Massgeschneidertes Webdesign",
      "Responsives Design",
      "Basis SEO",
      "CMS Integration",
      "Initialer Content Upload (bis 10 Seiten)",
      "1 Monat Support",
    ],
  },
  {
    title: "Business",
    description:
      "Für wachsende Marken, die ein stärkeres Fundament, Branding Anpassungen und mehr Funktion brauchen.",
    price: "Ab 2500 CHF",
    features: [
      "Individuelles Webdesign + Branding",
      "Erweiterte SEO",
      "Blog/News Einrichtung",
      "Analytics Integration",
      "Performance Optimierung",
      "2 Monate Support",
    ],
  },
  {
    title: "Pro",
    description:
      "Für voll personalisierte, komplexere Projekte mit vielen Funktionen und hohen Anforderungen.",
    price: "Ab 5000 CHF",
    features: [
      "UX Konzept + voll individualisiertes Design",
      "Advanced SEO",
      "Automationen und Formulare",
      "Mehrsprachigkeit",
      "Security Hardening + Hosting Setup",
      "3 Monate Support",
    ],
  },
];

const restaurationContent = [
  {
    title: "Refresh",
    description:
      "Ideal für leichte Modernisierungen und kleine Design Updates.",
    price: "Ab 1500 CHF",
    features: [
      "Design Refresh",
      "Content Cleanup",
      "Grund Performance Optimierung",
      "Kleine UX Verbesserungen",
      "1 Monat Betreuung",
    ],
  },
  {
    title: "Revamp",
    description:
      "Für Websites, die ein deutlich besseres Design und echte technische Verbesserungen brauchen.",
    price: "Ab 3500 CHF",
    features: [
      "Redesign im bestehenden System",
      "Volle Performance Optimierung",
      "Security Checks",
      "Struktur Anpassungen",
      "2 Monate Betreuung",
    ],
  },
  {
    title: "Rebuild",
    description:
      "Für komplette Neuaufbereitung inkl. neuem Design, Struktur und Technik.",
    price: "Ab 5000 CHF",
    features: [
      "Komplettes Audit",
      "Modernes UX/UI Redesign",
      "CMS Umbau wenn nötig",
      "Pro Performance und Security Setup",
      "Content Migration + Neuordnung",
      "3 Monate Betreuung",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="min-h-[50vh] bg-foreground py-24 flex flex-col items-center justify-center">
      <div className="flex flex-col container px-10">
        <SectionTitle dark title="Gutes Design sollte kein Vermögen kosten">
          Ironischerweise ist schlechtes Design oft die teuerste Investition,
          die ein Unternehmen tätigt. Versteckte Kosten durch schlechte
          Leistung, verlorene Konversionen und ständige Korrekturen belasten das
          Budget auf unsichtbare Weise. Wir glauben, dass aussergewöhnliches
          Design zugänglich sein sollte – und kein Luxus, der nur wenigen
          vorbehalten ist. Deshalb haben wir unsere Preisgestaltung transparent,
          fair und auf den tatsächlichen Wert ausgerichtet gestaltet.
        </SectionTitle>

        <div className="lg:grid lg:grid-cols-3 flex-col flex gap-6 mt-12">
          {webDesignContent.map((plan, index) => (
            <Card
              key={index}
              className="rounded-none shadow-none relative flex flex-col justify-around"
            >
              <CardHeader>
                <CardTitle className="text-2xl">{plan.title}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
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
                <p className="text-sm text-muted-foreground">
                  Individuelle Angebote je nach Projektumfang möglich.
                </p>
              </CardFooter>
              <Button className="mx-6">Loslegen</Button>
            </Card>
          ))}
          {restaurationContent.map((plan, index) => (
            <Card
              key={index}
              className="rounded-none shadow-none relative flex flex-col justify-around"
            >
              <CardHeader>
                <CardTitle className="text-2xl">{plan.title}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
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
                <p className="text-sm text-muted-foreground">
                  Individuelle Angebote je nach Projektumfang möglich.
                </p>
              </CardFooter>
              <Button className="mx-6">Loslegen</Button>
            </Card>
          ))}
          <Card className="col-span-3 rounded-none shadow-none relative">
            <CardHeader>
              <CardTitle className="text-2xl">
                Sie wissen nicht, was Sie brauchen?
              </CardTitle>
              <CardDescription>
                Vereinbaren Sie einen Termin für ein unverbindliches Gespräch
                mit uns, und wir helfen Ihnen dabei, den besten Weg für Ihr
                Projekt zu finden.
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
