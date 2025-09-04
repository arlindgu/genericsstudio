import PageTitle from "@/components/ui/PageTitle";
import { Card, CardTitle, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card"
import { Plus, Minus } from "lucide-react";

export default function WebDevelopmentPage() {
const FrameworkComparison = [
  {
    framework: "WordPress",
    description: "Das weltweit beliebteste Content-Management-System, ideal für Blogs, Unternehmenswebsites und kleinere Online-Shops.",
    positive: [
      "Sehr benutzerfreundlich - Sie können Inhalte selbst verwalten",
      "Tausende von kostenlosen und kostenpflichtigen Themes verfügbar",
      "Riesige Community und viele Plugins für Zusatzfunktionen",
      "SEO-freundlich und gut für Google-Rankings",
      "Kostengünstig in der Entwicklung und Wartung"
    ],
    negative: [
      "Regelmäßige Updates nötig für Sicherheit",
      "Kann bei vielen Plugins langsamer werden",
      "Höheres Sicherheitsrisiko durch Popularität",
      "Design-Anpassungen können begrenzt sein",
      "Monatliche Hosting- und Wartungskosten"
    ]
  },
  {
    framework: "Webflow",
    description: "Modernes Design-Tool, das visuelles Design mit professionellem Code kombiniert. Perfekt für designorientierte Websites.",
    positive: [
      "Pixel-perfektes, individuelles Design möglich",
      "Sehr schnelle Ladezeiten und moderne Animationen",
      "Hosting und CMS sind bereits integriert",
      "Mobile Optimierung ist automatisch perfekt",
      "Keine Plugins nötig - alles aus einer Hand"
    ],
    negative: [
      "Höhere monatliche Kosten (ab ca. 25 CHF/Monat)",
      "Weniger flexibel bei komplexen Funktionen",
      "Sie sind an Webflow als Plattform gebunden",
      "Begrenzte E-Commerce-Funktionen",
      "Schwieriger zu migrieren falls gewünscht"
    ]
  },
  {
    framework: "Next.js",
    description: "Modernste Technologie für komplexe Web-Anwendungen und Websites mit höchsten Performance-Anforderungen.",
    positive: [
      "Extrem schnelle Ladezeiten und beste Performance",
      "Zukunftssicher und hochmodern",
      "Unbegrenzte Anpassungsmöglichkeiten",
      "Perfekt für komplexe Funktionen und Integrationen",
      "Sehr gute SEO-Performance"
    ],
    negative: [
      "Höhere Entwicklungskosten",
      "Inhalte können meist nur über Entwickler geändert werden",
      "Komplexer für einfache Website-Anforderungen",
      "Benötigt technisches Know-how für Wartung",
      "Längere Entwicklungszeit"
    ]
  },
  {
    framework: "Framer",
    description: "Design-fokussierte Plattform für interaktive, animierte Websites mit beeindruckenden visuellen Effekten.",
    positive: [
      "Beeindruckende Animationen und Interaktionen",
      "Sehr modernes, zeitgemäßes Design möglich",
      "Einfache Bedienung für Design-Updates",
      "Mobile Optimierung automatisch",
      "Schnelle Entwicklungszeit für Design-Websites"
    ],
    negative: [
      "Begrenzte Funktionalität für komplexe Features",
      "Abhängigkeit von der Framer-Plattform",
      "Nicht ideal für umfangreiche Content-Websites",
      "E-Commerce-Funktionen sehr limitiert",
      "Monatliche Abo-Kosten erforderlich"
    ]
  },
]

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

const PricingContent = [
  {
    name: "Landing Page",
    price: "899 CHF",
    pro: "Einmalig",
    features: [
      "Einseitige Website mit 3-5 Sektionen",
      "Responsive Design für alle Geräte",
      "Kontaktformular und SEO-Grundlagen",
      "1 Monat kostenloser Support",
    ],
  },
  {
    name: "Business Website",
    price: "2'499 CHF",
    pro: "Einmalig",
    features: [
      "5-8 Unterseiten (Home, Über uns, Leistungen, etc.)",
      "Professionelles Design und CMS-Integration",
      "SEO-Optimierung und Google Analytics",
      "Social Media Integration",
      "3 Monate kostenloser Support",
    ],
  },
  {
    name: "E-Commerce Solution",
    price: "4'999 CHF",
    pro: "Einmalig",
    features: [
      "Vollständiger Online-Shop",
      "Payment-Integration (Stripe, PayPal)",
      "Produktverwaltung und Bestellsystem",
      "Kundenaccounts und Bestellhistorie",
      "6 Monate Support und Wartung",
    ],
  },
  {
    name: "Custom",
    price: "Auf Anfrage",
    features: [
      "Individuelle Web-Anwendungen",
      "Complex Database Integration",
      "API-Entwicklung und Schnittstellen",
      "Enterprise-Lösungen",
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

      <section>
        <div className="container">
          <div className="flex flex-col lg:grid lg:grid-cols-12 border-t pt-8">
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
              {PricingContent.map((plan, index) => (
                <Card key={index} className="">
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                    <span className="text-2xl font-bold mt-8">
                      {plan.price}
                    </span>
                    <CardDescription>{plan.pro}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc ml-4 space-y-2">
                      {plan.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="flex flex-col lg:grid lg:grid-cols-12 border-t pt-8">
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
              {FrameworkComparison.map((statement, index) => (
                <div key={index}>
                  <h3 className="lg:mt-0">{statement.framework}</h3>
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
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid lg:grid-cols-12 border-t pt-8">
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
          <div className="grid lg:grid-cols-12 border-t pt-8">
            <h2 id="web-dev" className="col-span-3">
              Ablauf der Analyse
            </h2>
            <div className="col-span-1" />
            <div className="lg:col-span-8 lg:grid lg:grid-cols-2 gap-8">
              {ProcessContent.map((statement, index) => (
                <div key={index}>
                  <p className="lead mt-8 font-semibold text-foreground">
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
