import PageTitle from "@/components/ui/PageTitle";
import { Card, CardTitle, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { generateSEO, seoConfig } from "@/lib/seo";

export const metadata = generateSEO(seoConfig.analyse);

export default function AnalysePage() {

const WebsiteDevelopmentContent = [
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
    title: "Marktrecherche und Konkurrenzanalyse",
    text: "Wir analysieren Ihre Mitbewerber und identifizieren deren Stärken und Schwächen. Dabei decken wir Lead-Generierung-Killer auf Ihrer Website auf und finden heraus, wo Sie Potenzial verschenken.",
  },
  {
    number: "02",
    title: "Detaillierte Website-Prüfung",
    text: "Wir durchleuchten Ihre komplette Website auf technische Probleme, UX-Schwächen und Conversion-Blocker. Jeder Punkt wird dokumentiert und nach Priorität bewertet.",
  },
  {
    number: "03",
    title: "Video-Analyse mit Erklärungen",
    text: "Sie erhalten eine ausführliche Video-Aufnahme, in der wir jeden gefundenen Punkt erläutern. So verstehen Sie nicht nur was optimiert werden muss, sondern auch warum—die Logik dahinter wird transparent.",
  },
  {
    number: "04",
    title: "Übergabe und Handlungsempfehlungen",
    text: "Mit der fertigen Analyse in der Hand können Sie alle Punkte selbst umsetzen oder uns mit der Optimierung beauftragen. Sie haben die volle Kontrolle über den nächsten Schritt.",
  },
];

const PricingContent = [
  {
    name: "Visuelle Analyse der Webseite",
    price: "29 CHF",
    pro: "Per Unterseite",
    features: [
      "Detaillierte Überprüfung der gewählten Seite",
      "Identifikation von Stärken und Schwächen",
      "Priorisierte Handlungsempfehlungen",
    ],
  },
  {
    name: "Technische Analyse der Webseite",
    price: "49 CHF",
    pro: "Per Unterseite",
    features: [
      "Umfassende technische Prüfung der Seite",
      "Erkennung von Performance- und Sicherheitsproblemen",
      "Detaillierte Berichterstattung mit Lösungen",
    ],
  },
  {
    name: "Komplettanalyse (Visuell + Technisch)",
    price: "69 CHF",
    pro: "Per Unterseite",
    features: [
      "Kombinierte visuelle und technische Analyse",
      "Ganzheitliche Bewertung der gewählten Seite",
      "Priorisierte Liste mit Optimierungsvorschlägen",
    ],
  },
  {
    name: "Custom",
    price: "Auf Anfrage",
    features: [
        "Individuelle Analysepakete",
        "Massgeschneiderte Lösungen für spezielle Anforderungen",
        "Flexible Preisgestaltung basierend auf Umfang",
    ]
  },
];



  return (
    <>
      <PageTitle title="Analyse und Restaurierung">
        Wir helfen Ihnen, Ihre digitale Strategie zu optimieren und fundierte
        Entscheidungen zu treffen.
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
                Unsere Preise verstehen sich pro Unterseite Ihrer Website. Eine
                Unterseite ist eine einzelne Seite wie z.B. Ihre Homepage,
                Über-uns-Seite, Kontakt-Seite oder Produktseite. So zahlen Sie
                nur für das, was Sie wirklich analysieren lassen möchten -
                perfekt für KMUs, die gezielt einzelne Bereiche ihrer Website
                optimieren wollen.
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
              Warum ist eine Webseite so wichtig?
            </h2>
            <div className="col-span-1" />
            <div className="lg:col-span-8 lg:grid lg:grid-cols-2 gap-8">
              {WebsiteDevelopmentContent.map((statement, index) => (
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
