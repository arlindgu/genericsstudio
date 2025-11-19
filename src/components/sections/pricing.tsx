"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";
import SectionTitle from "../sectiontitle";
import Booking from "../booking";

export default function Pricing() {
  return (
    <section className="min-h-[50vh] bg-foreground py-24 flex flex-col items-center justify-center">
      <div className="flex flex-col container px-10">
        <SectionTitle dark title="Gutes Design sollte kein Vermögen kosten">
          Ironischerweise ist schlechtes Design oft die teuerste Investition,
          die ein Unternehmen tätigt. Versteckte Kosten durch schlechte
          Leistung, verlorene Konversionen und ständige Korrekturen belasten das
          Budget auf unsichtbare Weise. Wir glauben, dass außergewöhnliches
          Design zugänglich sein sollte – und kein Luxus, der nur wenigen
          vorbehalten ist. Deshalb haben wir unsere Preisgestaltung transparent,
          fair und auf den tatsächlichen Wert ausgerichtet gestaltet.
        </SectionTitle>

        <div className="flex flex-col lg:flex-rowitems-end gap-4 mt-6">
          <Card className="flex-3 rounded-none shadow-none relative h-124">
            <CardHeader>
              <CardTitle className="text-2xl">
                Webdesign und Entwicklung
              </CardTitle>
              <CardDescription>
                Ideal für Start-ups und kleine Unternehmen, die eine starke
                Online-Präsenz mit wesentlichen Funktionen und klarem Design
                aufbauen möchten.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Maßgeschneidertes Webdesign, das auf Ihre Marke zugeschnitten
                  ist
                </li>
                <li>Responsives Design für Mobilgeräte und Desktop</li>
                <li>Grundlegende SEO-Optimierung</li>
                <li>Integration eines Content-Management-Systems</li>
                <li>Initiales Hochladen von Inhalten (bis zu 10 Seiten)</li>
                <li>1 Monat Support nach dem Launch</li>
              </ul>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-background">
                Ab 2.000 $ – Individuelle Angebote je nach Projektumfang
                möglich. Umfang.
              </p>
            </CardFooter>
            <Button className="mx-6">Loslegen</Button>
          </Card>
          <Card className="flex-3 rounded-none shadow-none relative">
            <CardHeader>
              <CardTitle className="text-2xl">Analyse</CardTitle>
              <CardDescription>
                Ideal für wachsende Unternehmen, die detaillierte
                Marktforschung, Einblicke in das Nutzerverhalten und
                strategische Empfehlungen benötigen.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Umfassende Marktforschung und Wettbewerbsanalyse</li>
                <li>Nutzerverhalten und Customer-Journey-Mapping</li>
                <li>Datengestützte Erkenntnisse und Empfehlungen</li>
                <li>Performance-Benchmarking-Bericht</li>
                <li>Strategische Roadmap-Entwicklung</li>
                <li>3 Monate Beratungsunterstützung</li>
              </ul>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-background">
                Ab 3.000 $ – Individuelle Angebote je nach Projektumfang
                verfügbar. Umfang.
              </p>
            </CardFooter>
            <Button className="mx-6">Loslegen</Button>
          </Card>
          <Card className="flex-3 rounded-none shadow-none relative">
            <CardHeader>
              <CardTitle className="text-2xl">Restaurierung</CardTitle>
              <CardDescription>
                Entwickelt für etablierte Marken, die ihre digitale Präsenz mit
                modernem Design und verbesserter Funktionalität neu gestalten
                möchten.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Website-Audit und Leistungsanalyse</li>
                <li>Modernes Design-Refresh und Neugestaltung</li>
                <li>Leistungsoptimierung und Geschwindigkeitsverbesserungen</li>
                <li>Sicherheitsupdates und Compliance-Überprüfung</li>
                <li>Inhaltsumstrukturierung und Aktualisierungen</li>
                <li>3 Monate laufende Unterstützung</li>
              </ul>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-background">
                Ab 5.000 $ – Individuelle Angebote je nach Projektumfang
                verfügbar. Umfang.
              </p>
            </CardFooter>
            <Button className="mx-6">Loslegen</Button>
          </Card>
        </div>
        <Card className="flex-3 mt-4 rounded-none shadow-none relative">
          <CardHeader>
            <CardTitle className="text-2xl">
              Sie wissen nicht, was Sie brauchen?
            </CardTitle>
            <CardDescription>
              Vereinbaren Sie einen Termin für ein unverbindliches Gespräch mit
              uns, und wir helfen Ihnen dabei, den besten Weg für Ihr Projekt zu
              finden.
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
    </section>
  );
}
