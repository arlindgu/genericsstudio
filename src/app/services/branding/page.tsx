import PageTitle from "@/components/ui/PageTitle";
import { Card, CardTitle, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card"
import { features } from "process";

export default function AnalysePage() {

const BrandingDevelopmentContent = [
  {
    title: "Einprägsame Markenidentität schaffen",
    text: "Ihr Branding ist das Gesicht Ihres Unternehmens. Es sorgt für Wiedererkennung und prägt sich in die Köpfe Ihrer Kunden ein—vom ersten Kontakt bis zur langfristigen Kundenbeziehung.",
  },
  {
    title: "Vertrauen und Professionalität vermitteln",
    text: "Ein starkes Branding schafft Vertrauen und Glaubwürdigkeit. Kunden kaufen eher von Marken, die professionell und vertrauenswürdig wirken. Schwaches Branding kann potenzielle Kunden abschrecken.",
  },
  {
    title: "Sich von der Konkurrenz abheben",
    text: "In überfüllten Märkten entscheidet oft das Branding über Erfolg oder Misserfolg. Eine einzigartige Markenidentität hilft Ihnen, aus der Masse herauszustechen und in Erinnerung zu bleiben.",
  },
  {
    title: "Höhere Preise durchsetzen und Loyalität aufbauen",
    text: "Starke Marken können Premium-Preise verlangen und schaffen emotionale Bindungen zu Kunden. Gutes Branding verwandelt einmalige Käufer in treue Markenbotschafter.",
  },
];

const ProcessContent = [
  {
    number: "01",
    title: "Markenanalyse und Positionierung",
    text: "Wir analysieren Ihre aktuelle Markenwahrnehmung und Ihre Mitbewerber. Dabei identifizieren wir Ihre Alleinstellungsmerkmale und entwickeln eine klare Markenpositionierung, die Sie von der Konkurrenz abhebt.",
  },
  {
    number: "02",
    title: "Brand Identity Entwicklung",
    text: "Wir entwickeln Ihre komplette visuelle Identität: Logo, Farbpalette, Typografie und Bildsprache. Jedes Element wird strategisch gewählt, um Ihre Markenpersönlichkeit optimal zu transportieren.",
  },
  {
    number: "03",
    title: "Markenstrategie und Guidelines",
    text: "Sie erhalten ein umfassendes Brand Book mit allen Richtlinien für die Anwendung Ihrer Marke. Von der Visitenkarte bis zur Website—alles wird einheitlich und professionell umgesetzt.",
  },
  {
    number: "04",
    title: "Implementierung und Markteinführung",
    text: "Wir unterstützen Sie bei der Einführung Ihrer neuen Markenidentität und sorgen für eine konsistente Umsetzung in allen Kommunikationskanälen—digital und print.",
  },
];

const PricingContent = [
  {
    name: "Logo Design",
    price: "499 CHF",
    pro: "Einmalig",
    features: [
      "3 Logokonzepte zur Auswahl",
      "Unbegrenzte Revisionen",
      "Alle Dateiformate (PNG, SVG, AI, etc.)",
      "Einfache Anwendungsrichtlinien",
    ],
  },
  {
    name: "Brand Identity Paket",
    price: "1'299 CHF",
    pro: "Einmalig",
    features: [
      "Logo Design + Varianten",
      "Farbpalette und Typografie",
      "Visitenkarten und Briefpapier Design",
      "Grundlegendes Brand Book",
      "Social Media Templates",
    ],
  },
  {
    name: "Complete Branding Solution",
    price: "2'999 CHF",
    pro: "Einmalig",
    features: [
      "Vollständige Brand Identity",
      "Umfassendes Brand Book (50+ Seiten)",
      "Website Design Integration",
      "Marketing-Materialien Design",
      "Brand Launch Strategie",
      "3 Monate Support",
    ],
  },
  {
    name: "Custom",
    price: "Auf Anfrage",
    features: [
      "Massgeschneiderte Branding-Lösungen",
      "Komplexe Markenstrategien",
      "Grossunternehmen und Konzerne",
      "Internationale Markenentwicklung",
    ],
  },
];



  return (
    <>
      <PageTitle title="Branding">
        Ein starkes Branding macht Sie unverwechselbar und schafft Vertrauen bei
        Ihren Kunden.
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
                Unsere Branding-Pakete sind modular aufgebaut und auf
                verschiedene Unternehmensgrößen zugeschnitten. Vom einfachen
                Logo-Design bis zur kompletten Markenidentität - Sie wählen
                genau die Leistungen, die Ihre Marke benötigt. Perfekt für KMUs,
                die professionell auftreten und sich von der Konkurrenz abheben
                möchten.
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
          <div className="grid lg:grid-cols-12 border-t pt-8">
            <h2 id="web-dev" className="col-span-3">
              Warum ist Branding so wichtig?
            </h2>
            <div className="col-span-1" />
            <div className="lg:col-span-8 lg:grid lg:grid-cols-2 gap-8">
              {BrandingDevelopmentContent.map((statement, index) => (
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
