import PageTitle from "@/components/ui/PageTitle";
import { Card, CardHeader, CardTitle, CardAction, CardContent, CardDescription } from "@/components/ui/card";
import {ArrowUpRight } from "lucide-react"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge} from "@/components/ui/badge";
import { generateSEO, seoConfig } from "@/lib/seo";

export const metadata = generateSEO(seoConfig.services);

export default function servicesPage() {

  const WebsiteDevelopmentContent = [
    {
      title: "Von der Vision zur Realität",
      subtitle: "Code, der Ihre Sprache spricht.",
      text: "Jede Zeile Code, die wir schreiben, dient Ihrer Vision. Wir verwenden kein WordPress, Wix oder Vorlagen. Stattdessen entwickeln wir mit Next.js—und erschaffen Websites, die blitzschnell, SEO-optimiert und vollkommen einzigartig sind. Ihr Unternehmen verdient mehr als eine Standardlösung. Es verdient ein digitales Fundament, das speziell für Ihre Ziele gebaut wurde.",
      deliverables: [
        "Massgeschneiderte Next.js Website",
        "Responsives Design",
        "SEO-Optimierung",
        "Performance-Optimierung",
        "Vollständiger Quellcode",
        "Deployment auf Vercel",
      ],
    },
    {
      title: "Performance durch Design",
      subtitle: "Geschwindigkeit ist nicht optional. Sie ist essenziell.",
      text: "Langsame Websites verlieren Kunden. Wir entwickeln jede Komponente für maximale Performance—optimierte Bilder, sauberer Code, strategisches Caching. Das Ergebnis? Websites, die sofort laden und bei Google höher ranken. Denn in der heutigen digitalen Welt ist Geduld ein Luxus, den sich Ihre Konkurrenten nicht leisten können.",
      deliverables: [
        "Bildoptimierung",
        "Code-Minifizierung",
        "Caching-Strategien",
        "Core Web Vitals Optimierung",
        "Performance-Monitoring Setup",
        "Geschwindigkeitsanalyse-Reports",
      ],
    },
    {
      title: "Mobile-First Denken",
      subtitle: "Gebaut für die Art, wie Menschen tatsächlich browsen.",
      text: "Über 60% des Web-Traffics stammt von mobilen Geräten. Wir designen und entwickeln mit dieser Realität im Hinterkopf—und schaffen responsive Erlebnisse, die auf allen Bildschirmgrössen einwandfrei funktionieren. Ihre Website wird auf Smartphone, Tablet oder Desktop atemberaubend aussehen. Keine Kompromisse. Keine Nachgedanken.",
      deliverables: [
        "Mobile-First responsives Design",
        "Cross-Browser-Kompatibilität",
        "Touch-optimierte Oberflächen",
        "Flexible Grid-Systeme",
        "Gerätetest-Dokumentation",
      ],
    },
    {
      title: "Zukunftssicheres Fundament",
      subtitle: "Technologie, die mit Ihnen wächst.",
      text: "Wir bauen Websites, die Bestand haben. Mit modernen Frameworks und sauberer Architektur kann Ihre Seite sich entwickeln, während Ihr Unternehmen wächst. Brauchen Sie neue Features? Möchten Sie skalieren? Unser Code ist für Erweiterung strukturiert, nicht für Ersatz. Es ist eine Investition in Ihre digitale Zukunft, nicht nur eine Website für heute.",
      deliverables: [
        "Skalierbare Architektur",
        "Saubere Codebasis",
        "Umfassende Dokumentation",
        "GitHub Repository",
        "Update-Richtlinien",
        "Erweiterungs-Roadmap",
      ],
    },
  ];

  const BrandingContent = [
    {
      title: "Identität, die nachhallt",
      subtitle: "Mehr als ein Logo. Ein bleibender Eindruck.",
      text: "Ihre Marke ist die Summe jeder Interaktion, jedes Berührungspunkts, jedes Moments, in dem jemand Ihrem Unternehmen begegnet. Wir erschaffen visuelle Identitäten, die nicht nur unverwechselbar aussehen—sie fühlen sich authentisch an. Von Farbpsychologie bis zu Typografie-Entscheidungen ist jedes Element darauf ausgelegt, Ihre Werte zu kommunizieren und emotional mit Ihrem Publikum zu verbinden.",
      deliverables: [
        "Logo-Design Variationen",
        "Farbpalette",
        "Typografie-System",
        "Markenpersönlichkeits-Guide",
        "Visuelle Mood Boards",
        "Anwendungsbeispiele",
      ],
    },
    {
      title: "Strategisches Fundament",
      subtitle: "Zweckgerichtete Design-Entscheidungen.",
      text: "Grossartiges Branding beginnt mit Verständnis. Wer sind Sie? Wofür stehen Sie? Wen möchten Sie erreichen? Wir tauchen tief in Ihre Unternehmenswerte, Marktposition und Zielgruppenbedürfnisse ein. Dieses strategische Fundament stellt sicher, dass jede Design-Entscheidung eine Bedeutung hat, jede Farbe einen Zweck erfüllt und jedes Element Ihre Geschäftsziele unterstützt.",
      deliverables: [
        "Markenstrategie-Dokument",
        "Zielgruppen-Analyse",
        "Wettbewerbsanalyse",
        "Markenpositionierungs-Statement",
        "Wertversprechen",
        "Messaging-Framework",
      ],
    },
    {
      title: "Kohärente Bildsprache",
      subtitle: "Konsistenz, die Vertrauen schafft.",
      text: "Ihre Marke sollte sich unverwechselbar anfühlen—über jede Plattform, jeden Berührungspunkt, jede Interaktion hinweg. Wir entwickeln umfassende Marken-Guidelines, die Konsistenz gewährleisten—ob es Ihre Website, Visitenkarten oder Social Media Präsenz ist. Kohärentes Branding schafft Wiedererkennung. Wiedererkennung schafft Vertrauen. Vertrauen treibt Geschäfte an.",
      deliverables: [
        "Vollständige Marken-Guidelines",
        "Logo-Verwendungsregeln",
        "Farbspezifikationen",
        "Typografie-Richtlinien",
        "Bildstil-Guide",
        "Anwendungsvorlagen",
      ],
    },
    {
      title: "Zeitlos, nicht trendig",
      subtitle: "Gebaut um zu bestehen, designt um zu überdauern.",
      text: "Trends kommen und gehen. Grosse Marken bestehen. Wir schaffen visuelle Identitäten, die in fünf Jahren nicht veraltet aussehen—verwurzelt in zeitlosen Design-Prinzipien, während sie heute frisch und relevant wirken. Ihre Marke sollte sich mit Ihrem Unternehmen entwickeln, nicht von ihm ersetzt werden. Das ist der Unterschied zwischen Design und Investition.",
      deliverables: [
        "Zeitloses Logo-Design",
        "Skalierbares Markensystem",
        "Entwicklungs-Guidelines",
        "Marken-Refresh Roadmap",
        "Langzeit-Markenstrategie",
        "Asset-Bibliothek",
      ],
    },
  ];

  const RestorationContent = [
    {
      title: "Digitale Archäologie",
      subtitle: "Aufdecken, was funktioniert hat.",
      text: "Jede Website hat eine Geschichte—was funktioniert hat, was nicht, was verloren ging. Wir analysieren Ihre bestehende digitale Präsenz wie Archäologen und studieren sorgfältig Nutzerverhalten, Performance-Daten und Content-Effektivität. Wir bewahren, was Ihren Zielen dient, und bauen neu auf, was das nicht tut. Denn gute Restaurierung ehrt die Vergangenheit und umarmt die Zukunft.",
      deliverables: [
        "Vollständiges Website-Audit",
        "Performance-Analyse",
        "Content-Inventar",
        "SEO-Bewertung",
        "Nutzerverhalten-Analyse",
        "Restaurierungs-Roadmap",
      ],
    },
    {
      title: "Performance-Wiederbelebung",
      subtitle: "Von träge zu blitzschnell.",
      text: "Alte Websites tragen oft technische Schulden—veralteter Code, unoptimierte Bilder, aufgeblähte Plugins. Wir entfernen das Unnötige und bauen das Fundament mit moderner Technologie neu auf. Das Ergebnis? Drastisch verbesserte Ladezeiten, bessere Suchmaschinen-Rankings und Nutzererfahrungen, die sich frisch und responsiv anfühlen. Es ist nicht nur ein Facelift—es ist eine komplette Transformation.",
      deliverables: [
        "Moderne Codebasis-Neuerstellung",
        "Performance-Optimierung",
        "Datenbank-Bereinigung",
        "Bildoptimierung",
        "Caching-Implementierung",
        "Geschwindigkeitsverbesserungs-Report",
      ],
    },
    {
      title: "Content-Bewahrung",
      subtitle: "Das Wichtigste retten.",
      text: "Ihr bestehender Content repräsentiert Jahre der Arbeit, SEO-Wert und Markeninvestition. Wir migrieren und optimieren sorgfältig Ihren wertvollen Content, während wir seine Struktur und Präsentation verbessern. Wichtige Seiten behalten ihre Suchmaschinen-Rankings. Schlüsselinformationen werden bewahrt und verbessert. Nichts Wertvolles geht in der Übersetzung verloren.",
      deliverables: [
        "Content-Migration",
        "SEO-Bewahrung",
        "URL-Struktur-Optimierung",
        "301-Redirect Setup",
        "Content-Optimierung",
        "Suchranking-Schutz",
      ],
    },
    {
      title: "Modernes Fundament",
      subtitle: "Gebaut für das nächste Jahrzehnt.",
      text: "Restauration bedeutet nicht, zu dem zurückzukehren, was war—es bedeutet zu schaffen, was hätte sein sollen. Wir bauen neu auf mit modernen Frameworks, aktuellen Design-Prinzipien und zukunftsorientierter Architektur. Ihre restaurierte Website funktioniert nicht nur heute besser—sie ist für die Möglichkeiten und Herausforderungen von morgen vorbereitet.",
      deliverables: [
        "Next.js Neuerstellung",
        "Modernes Design-System",
        "Responsives Layout",
        "Zukunftsbereite Architektur",
        "Wartungsplan",
        "Wachstumsstrategie",
      ],
    },
  ];

  const ServiceCards = [
    {
      title: "Webseiten Entwicklung",
      subtitle: "Digitale Erlebnisse erschaffen",
      url: "services/website-entwicklung",
      description:
        "Wir erstellen atemberaubende, benutzerfreundliche Webseiten, die nicht nur aussergewöhnlich aussehen, sondern echte Ergebnisse für Ihr Unternehmen erzielen.",
    },
    {
      title: "Branding",
      subtitle: "Eine starke Markenidentität aufbauen",
      url: "services/branding",
      description:
        "Wir helfen Ihnen dabei, eine starke Markenidentität zu etablieren, die bei Ihrer Zielgruppe ankommt und Sie von der Konkurrenz abhebt.",
    },
    {
      title: "Analyse und Restaurierung",
      subtitle: "Traditionen wiederbeleben",
      url: "services/analyse",
      description:
        "Wir spezialisieren uns darauf, traditionelle Handwerkskunst zu restaurieren und zu bewahren und bringen einen Hauch von Geschichte in modernes Design.",
    },
  ];

    

  return (
    <main>
      <PageTitle title="Entdecken Sie Unsere Digitalen Services">
        Entdecken Sie unser umfassendes Leistungsspektrum. Von der ersten Idee
        bis zur finalen Umsetzung begleiten wir Sie mit massgeschneiderten
        Lösungen, die Ihr Unternehmen voranbringen und nachhaltigen Erfolg
        schaffen.
      </PageTitle>
      <section>
        <div className="container flex flex-col lg:flex-row gap-8">
          {ServiceCards.map((service) => (
            <Card key={service.title} className="flex-1 min-h-64">
              <CardHeader>
                <CardAction>
                  <Button variant="ghost" className="size-8">
                    <Link href={service.url} aria-label={`Mehr über ${service.title} erfahren`}>
                      <ArrowUpRight /> 
                    </Link>
                  </Button>
                </CardAction>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>{service.description}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid lg:grid-cols-12 border-t pt-8">
            <h2 id="web-dev" className="col-span-3">
              Webdesign & Entwicklung
            </h2>
            <div className="col-span-1" />
            <div className="lg:col-span-8 lg:grid lg:grid-cols-2 gap-8">
              {WebsiteDevelopmentContent.map((statement, index) => (
                <div key={index}>
                  <h3 className="lg:mt-0">{statement.title}</h3>
                  <p>{statement.text}</p>
                  <p className="muted mb-6">{statement.subtitle}</p>
                  {statement.deliverables.map((deliverable) => (
                    <Badge key={deliverable} variant="secondary">
                      {deliverable}
                    </Badge>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="grid lg:grid-cols-12 border-t pt-8">
            <h2 id="branding" className="col-span-3">
              Branding
            </h2>
            <div className="col-span-1" />
            <div className="lg:col-span-8 lg:grid lg:grid-cols-2 gap-8">
              {BrandingContent.map((statement, index) => (
                <div key={index}>
                  <h3 className="lg:mt-0">{statement.title}</h3>
                  <p>{statement.text}</p>
                  <p className="muted mb-6">{statement.subtitle}</p>
                  {statement.deliverables.map((deliverable) => (
                    <Badge key={deliverable} variant="secondary">
                      {deliverable}
                    </Badge>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="grid lg:grid-cols-12 border-t pt-8">
            <h2 id="restoration" className="col-span-3">
              Restauration
            </h2>
            <div className="col-span-1" />
            <div className="lg:col-span-8 lg:grid lg:grid-cols-2 gap-8">
              {RestorationContent.map((statement, index) => (
                <div key={index}>
                  <h3 className="lg:mt-0">{statement.title}</h3>
                  <p>{statement.text}</p>
                  <p className="muted mb-6">{statement.subtitle}</p>
                  {statement.deliverables.map((deliverable) => (
                    <Badge key={deliverable} variant="secondary">
                      {deliverable}
                    </Badge>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
