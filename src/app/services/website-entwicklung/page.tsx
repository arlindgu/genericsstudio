import PageTitle from "@/components/ui/PageTitle";
import { Card, CardTitle, CardDescription, CardHeader, CardFooter } from "@/components/ui/card"
import { generateSEO, seoConfig } from "@/lib/seo";
import { FramerLogo } from "@/components/svgs/framerlogo";
import { NextJSLogo }  from "@/components/svgs/nextjslogo";
import { Separator } from "@/components/ui/separator";

export const metadata = generateSEO(seoConfig.websiteentwicklung);

export default function WebDevelopmentPage() {
const FrameworkComparison = [
  {
    logo: <NextJSLogo className="h-8"/>,
    framework: "Next.js",
    description:
      "Modernste Technologie für komplexe Web-Anwendungen und Websites mit höchsten Performance-Anforderungen.",
    positive: [
      "Extrem schnelle Ladezeiten und beste Performance",
      "Zukunftssicher und hochmodern",
      "Unbegrenzte Anpassungsmöglichkeiten",
      "Perfekt für komplexe Funktionen und Integrationen",
      "Sehr gute SEO-Performance",
    ],
    negative: [
      "Höhere Entwicklungskosten",
      "Inhalte können meist nur über Entwickler geändert werden",
      "Komplexer für einfache Website-Anforderungen",
      "Benötigt technisches Know-how für Wartung",
      "Längere Entwicklungszeit",
    ],
  },
  {
    logo: <FramerLogo className="size-8"/>,
    framework: "Framer",
    description:
      "Design-fokussierte Plattform für interaktive, animierte Websites mit beeindruckenden visuellen Effekten.",
    positive: [
      "Beeindruckende Animationen und Interaktionen",
      "Sehr modernes, zeitgemäßes Design möglich",
      "Einfache Bedienung für Design-Updates",
      "Mobile Optimierung automatisch",
      "Schnelle Entwicklungszeit für Design-Websites",
    ],
    negative: [
      "Begrenzte Funktionalität für komplexe Features",
      "Abhängigkeit von der Framer-Plattform",
      "Nicht ideal für umfangreiche Content-Websites",
      "E-Commerce-Funktionen sehr limitiert",
      "Monatliche Abo-Kosten erforderlich",
    ],
  },
];

const WebDevelopmentContent = [
  {
    title: "Digitale Visitenkarte rund um die Uhr",
    text: "Ihre Website ist oft der erste Kontaktpunkt mit potenziellen Kunden. Sie präsentiert Ihr Unternehmen professionell und ist 24/7 erreichbar—auch wenn Sie schlafen oder im Urlaub sind.",
  },
  {
    title: "Glaubwürdigkeit und Vertrauen schaffen",
    text: "Kunden erwarten heute eine professionelle Online-Präsenz. Eine gut gestaltete Website vermittelt Seriosität und Kompetenz. Ohne Website wirken Unternehmen oft unprofessionell oder veraltet.",
  },
  {
    title: "Neue Kunden erreichen und gewinnen",
    text: "Menschen suchen online nach Produkten und Dienstleistungen. Mit einer Website werden Sie bei Google gefunden und können neue Zielgruppen erreichen, die Sie sonst nie entdeckt hätten.",
  },
  {
    title: "Kosten sparen und Effizienz steigern",
    text: "Eine Website beantwortet häufige Fragen automatisch, reduziert Telefonanrufe und ermöglicht Online-Buchungen oder -Anfragen. Das spart Zeit und Personalkosten im Tagesgeschäft.",
  },
];

const ProcessContent = [
  {
    number: "01",
    title: "Anforderungsanalyse und Konzeption",
    text: "Wir analysieren Ihre Geschäftsziele und Zielgruppe. Dabei entwickeln wir ein maßgeschneidertes Website-Konzept, das Ihre Anforderungen perfekt abbildet und optimal auf Ihre Kunden ausgerichtet ist.",
  },
  {
    number: "02",
    title: "Design und User Experience",
    text: "Wir erstellen ein ansprechendes, benutzerfreundliches Design, das Ihre Marke widerspiegelt. Dabei achten wir auf intuitive Navigation, mobile Optimierung und eine optimale User Experience.",
  },
  {
    number: "03",
    title: "Entwicklung und Programmierung",
    text: "Ihre Website wird mit modernsten Technologien entwickelt. Wir programmieren sauberen, sicheren Code und sorgen für schnelle Ladezeiten, SEO-Optimierung und vollständige Responsive-Funktionalität.",
  },
  {
    number: "04",
    title: "Testing und Live-Schaltung",
    text: "Vor dem Launch testen wir Ihre Website ausführlich auf allen Geräten und Browsern. Nach der Freigabe übernehmen wir die Live-Schaltung und bieten Ihnen eine umfassende Einführung in die Verwaltung.",
  },
];

type PricingContent = {
  name: string;
  price: string;
  goodFor: string[];
  description: string;
  features: string[];
  examples: string[];
};

const pricingContent: PricingContent[] = [
  {
    name: "Starter / Mini Business",
    price: "CHF 500 – 1’000",
    goodFor: [
      "Einzelpersonen",
      "Fahrschulen",
      "Coiffeure",
      "Essensstände",
      "Kleine lokale Services",
    ],
    description:
      "Einfache, saubere Website für kleine Betriebe mit Fokus auf Übersichtlichkeit und Erreichbarkeit. Ideal für erste Online-Präsenz.",
    features: [
      "Bis zu 3 Seiten",
      "Responsives Design",
      "Kontaktformular",
      "Google Maps Einbindung",
      "Calendly oder ähnliches Buchungstool",
      "Basis SEO-Struktur",
    ],
    examples: [
      "Fahrschule mit Kontaktformular und Kurszeiten",
      "Foodtruck-Website mit Standort und Menü",
      "Barbershop mit Buchungslink",
      "Einzelunternehmer (z. B. Fotograf, Designer) mit Portfolio-Seite",
    ],
  },
  {
    name: "Startup / Kleines KMU",
    price: "CHF 1’250 – 2’000",
    goodFor: ["Startups", "kleine Unternehmen", "Dienstleister", "Agenturen"],
    description:
      "Individuelles Layout und leichte Animationen mit professionellem Look, abgestimmt auf Branding und Zielgruppe.",
    features: [
      "Bis zu 7 Seiten",
      "Individuelles Design (Farben, Branding)",
      "Responsives Layout",
      "Kontakt- und Angebotsformular",
      "Einbindung von Tools wie Calendly, Google Reviews, Instagram Feed",
      "Einfache CMS-Integration (z. B. Notion, Sanity, Framer CMS)",
    ],
    examples: [
      "Beratungsfirma oder Treuhandbüro mit Teamseite",
      "Kleines Fitnessstudio mit Kursübersicht",
      "Agentur oder Freelancer-Portfolio",
      "Startup Landingpage mit Call-to-Action",
    ],
  },
  {
    name: "KMU Plus",
    price: "CHF 2’000 – 3’500",
    goodFor: [
      "Arztpraxen",
      "Fitnessstudios",
      "Restaurants",
      "Beratungsunternehmen",
    ],
    description:
      "Umfangreichere Website mit Mehrsprachigkeit, Animationen und strukturiertem CMS. Ideal für wachsende Unternehmen mit klarer Markenidentität.",
    features: [
      "Bis zu 12 Seiten",
      "Mehrsprachigkeit",
      "SEO-Basics optimiert",
      "Kleine API-Integrationen (z. B. FormSubmit, SendGrid, externe Datenfeeds)",
      "Animationen und Micro-Interactions",
      "CMS-Integration (z. B. Sanity, Payload, Framer CMS)",
    ],
    examples: [
      "Restaurant mit Menü, Reservationstool und Bewertungen",
      "Arztpraxis mit Team, Leistungen und Kontakt",
      "Fitnesscenter mit Kursbuchung und Blog",
      "KMU mit mehrsprachiger Unternehmensseite",
    ],
  },
  {
    name: "Corporate / Grossprojekt",
    price: "CHF 3’500 – 6’000+",
    goodFor: [
      "Schulen",
      "Agenturen",
      "Organisationen",
      "mittelgrosse Unternehmen",
    ],
    description:
      "Massgeschneiderte Lösung mit individuellen UI-Komponenten, API-Anbindungen und performanter Architektur. Ideal für grössere Teams und Projekte mit klaren Anforderungen.",
    features: [
      "Mehr als 12 Seiten",
      "Komplexe Navigation & Unterseiten",
      "Headless CMS (z. B. Sanity, Strapi)",
      "API-Integrationen (z. B. externe Daten, Buchungssysteme)",
      "Individuelle Animationen & UI-Komponenten",
      "Optimiert für Performance & SEO",
    ],
    examples: [
      "Schule mit News-Bereich, Team, Formularen und Kalender",
      "Kreativagentur mit Case Studies und Blog",
      "Verein oder Organisation mit Mitgliederbereich",
      "Unternehmenswebsite mit dynamischen Inhalten über API",
    ],
  },
  {
    name: "Enterprise / Spezialanforderung",
    price: "Preis auf Anfrage",
    goodFor: [
      "Grosse Unternehmen",
      "Projekte mit hohen technischen Anforderungen",
    ],
    description:
      "Hochindividuelle Next.js-Architektur mit API-Integrationen, Skalierbarkeit und massgeschneidertem Design. Komplett custom Lösung.",
    features: [
      "Unbegrenzte Seitenstruktur",
      "Komplexe API-Integrationen",
      "Mehrsprachigkeit & Multi-Domain Support",
      "UX/UI-Konzept & Prototyping inklusive",
      "Custom Animations & Performance Tuning",
      "Langfristige Wartung & Support optional",
    ],
    examples: [
      "Grossunternehmen mit mehreren Standorten und APIs (z. B. Datenportale)",
      "Event-Plattform oder Verzeichnis-Seite mit Filterfunktionen",
      "Marketingplattform mit dynamischen Inhalten",
      "Komplexe Landingpage-Systeme mit Headless CMS und Schnittstellen",
    ],
  },
];



  return (
    <>
      <PageTitle title="Professionelle Webentwicklung für Ihren Erfolg">
        Entdecken Sie unser umfassendes Webentwicklungs-Spektrum. Von der ersten
        Konzeptidee bis zur Live-Schaltung entwickeln wir massgeschneiderte
        Websites, die Ihr Unternehmen online erfolgreich machen und neue Kunden
        gewinnen.
      </PageTitle>

      <section className="">
        <div className="container">
          <div className="flex flex-col lg:grid lg:grid-cols-12 border-t  border-dotted pt-8">
            <div className="col-span-3">
              <h2 id="web-dev">Unsere Preise</h2>
            </div>
            <div className="col-span-1" />
            <div className="lg:col-span-8 lg:grid lg:grid-cols-2 flex flex-col gap-8">
              <p className="mb-8 lg:col-span-2">
                Unsere Webentwicklungs-Pakete sind transparent kalkuliert und
                auf verschiedene Unternehmensgrößen zugeschnitten. Von der
                einfachen Landing Page bis zum komplexen E-Commerce-Shop - Sie
                zahlen nur für die Funktionen, die Sie wirklich benötigen.
                Perfekt für KMUs, die professionell online durchstarten möchten.
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-col lg:grid lg:grid-cols-2 gap-8 rounded-lg">
            {pricingContent.map((plan, index) => (
              <Card key={index} className="lg:last:col-span-2">
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <span className="text-2xl font-mono font-semibold text-primary mt-4">
                    {plan.price}
                  </span>
                </CardHeader>
                <CardHeader>
                  <CardTitle>Leistungen</CardTitle>
                  <CardDescription className="text-foreground">
                    <ul className="list-disc ml-4 space-y-2">
                      {plan.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </CardDescription>
                </CardHeader>

                <Separator className="my-2" />
                <CardHeader>
                  <CardTitle>Beispiele</CardTitle>
                  <CardDescription className="text-foreground">
                    <ul className="list-disc ml-4 space-y-2">
                      {plan.examples.map((example, idx) => (
                        <li key={idx}>{example}</li>
                      ))}
                    </ul>
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <span className="text-sm text-muted-foreground">
                    Gut geeignet für: {plan.goodFor.join(", ")}
                  </span>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="flex flex-col lg:grid lg:grid-cols-12 border-t border-dotted pt-8">
            <div className="col-span-3">
              <h2 id="web-dev">Unsere Frameworks</h2>
            </div>
            <div className="col-span-1" />
            <div className="lg:col-span-8 lg:grid lg:grid-cols-2 flex flex-col gap-8">
              <p className="mb-8 lg:col-span-2">
                Wir arbeiten mit modernsten Technologien und Plattformen, um
                Ihnen die beste Lösung für Ihre Anforderungen zu bieten. Ob
                komplexe Web-Anwendungen, designorientierte Websites oder
                benutzerfreundliche Content-Management-Systeme - wir wählen
                immer die optimale Technologie für Ihr spezifisches Projekt und
                Ihre Zielgruppe.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-2 container gap-8">
          {FrameworkComparison.map((statement, index) => (
            <div key={index} className="border bg-card p-6">
              <div className="h-12 bg-foreground h-24 text-background flex items-center justify-center">
                {statement.logo}
              </div>
              <h3 className="mb-0">{statement.framework}</h3>
              <p>{statement.description}</p>
              <ul className="mt-4">
                <h4>Vorteile</h4>
                {statement.positive.map((feature, idx) => (
                  <li key={idx} className="list-disc ml-5">
                    {feature}
                  </li>
                ))}
              </ul>
              <ul className="mt-4">
                <h4>Nachteile</h4>
                {statement.negative.map((feature, idx) => (
                  <li key={idx} className="list-disc ml-5">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid lg:grid-cols-12 border-t border-dotted pt-8">
            <h2 id="web-dev" className="col-span-3">
              Warum ist eine Webseite so wichtig?
            </h2>
            <div className="col-span-1" />
            <div className="lg:col-span-8 lg:grid lg:grid-cols-2 gap-8">
              {WebDevelopmentContent.map((statement, index) => (
                <div key={index}>
                  <h3 className="lg:mt-0">{statement.title}</h3>
                  <p>{statement.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid lg:grid-cols-12 border-t border-dotted pt-8">
            <h2 id="web-dev" className="col-span-3">
              Ablauf der Analyse
            </h2>
            <div className="col-span-1" />
            <div className="lg:col-span-8 lg:grid lg:grid-cols-2 gap-8">
              {ProcessContent.map((statement, index) => (
                <div key={index}>
                  <p className="lead font-semibold text-foreground">
                    {statement.number}
                  </p>
                  <h3 className="mt-0">{statement.title}</h3>
                  <p>{statement.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
