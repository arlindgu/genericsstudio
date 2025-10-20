import PageTitle from "@/components/ui/PageTitle";
import { generateSEO, seoConfig } from "@/lib/seo";

export const metadata = generateSEO(seoConfig.about);

export default function AboutPage() {

    const purposeContent = [
      {
        title: "Handgemachte Exzellenz",
        subtitle: "Keine Vorlagen. Keine Abkürzungen. Keine Kompromisse.",
        text: "Jeder Pixel wird mit Bedacht platziert. Jede Zeile Code von Grund auf geschrieben. Wir verwenden keine Vorlagen, weil Ihre Vision mehr verdient als eine vorgefertigte Lösung. Wir erschaffen digitale Erlebnisse, die so einzigartig sind wie Ihre Geschichte—von Grund auf mit moderner Technologie und zeitlosen Designprinzipien entwickelt. In einer Welt der Copy-Paste-Lösungen wählen wir den schwierigeren Weg: etwas wirklich Ihres zu schaffen.",
      },
      {
        title: "Authentische Digitale Identität",
        subtitle: "Ihre Marke verdient ihre eigene Stimme.",
        text: "Generische Lösungen erzeugen generische Ergebnisse. Wir glauben, dass jedes Unternehmen eine einzigartige Geschichte hat, die es wert ist, erzählt zu werden—und eine digitale Präsenz verdient, die diese Einzigartigkeit widerspiegelt. Durch aufmerksames Zuhören und durchdachtes Handwerk verwandeln wir Ihre Vision in digitale Realität. Keine WordPress-Themes. Keine Figma-Vorlagen. Nur pure, authentische digitale Erlebnisse, die Ihre Sprache sprechen und mit Ihrem Publikum verbinden.",
      },
      {
        title: "Performance trifft Zweck",
        subtitle: "Schön durch Design. Blitzschnell durch Code.",
        text: "Grossartiges Design ohne grossartige Performance ist nur hübsche Dekoration. Wir verbinden atemberaubende Optik mit modernster Technologie, um Websites zu schaffen, die nicht nur aussergewöhnlich aussehen—sie leisten aussergewöhnlich. Entwickelt mit Next.js für Geschwindigkeit, optimiert für Suchmaschinen und gestaltet für Conversion. Denn in der digitalen Welt schliessen sich Schönheit und Intelligenz nicht gegenseitig aus.",
      },
      {
        title: "Jenseits des Gewöhnlichen",
        subtitle: "Wo Vision auf Umsetzung trifft.",
        text: "Wir bauen keine Websites. Wir entwerfen digitale Erlebnisse. Jedes Projekt beginnt mit dem Verständnis nicht nur dessen, was Sie tun, sondern warum Sie es tun. Von der ersten Idee bis zur finalen Bereitstellung dient jede Entscheidung Ihrem Zweck. Keine Einheitslösungen. Keine geliehene Ästhetik. Nur durchdachtes Design und präzise Umsetzung, die aus Browsern Gläubige und aus Besuchern Kunden macht.",
      },
    ];

    const valueContent = [
      {
        title: "Stille fällt auf",
        subtitle: "Weniger Lärm. Mehr Wirkung.",
        text: "In einer Welt lauten Designs zieht Stille Aufmerksamkeit auf sich. Wir schaffen digitale Räume, die atmen. Oberflächen, die nicht schreien, sondern mit Absicht flüstern. Es geht nicht darum, mehr zu tun. Es geht darum, weniger zu tun—aber besser. Wir entfernen das Unnötige, damit das Wichtige nachklingen kann. Echte Wirkung muss nicht laut sein.",
      },
      {
        title: "Design, das nachhallt",
        subtitle: "Nicht trendig. Zeitlos.",
        text: "Trends vergehen. Prinzipien bleiben. Unsere Arbeit ist nicht gemacht, um heute zu beeindrucken und morgen zu verschwinden. Sie ist gebaut, um zu bestehen. Wir gestalten für Klarheit, Emotion und Struktur. Nicht für Effekte. Nicht für Lärm. Denn gutes Design bittet nicht um Aufmerksamkeit. Es verdient sie—und behält sie.",
      },
      {
        title: "Zwischen den Zeilen",
        subtitle: "Wir bemerken, was andere übersehen.",
        text: "Jedes Projekt hat eine Oberfläche und eine Tiefe. Die meisten bleiben an der Oberfläche. Wir gehen tiefer—in Nuancen, Rhythmus, Verhalten. In das Unausgesprochene, aber Gefühlte. Design ist Sprache. Wir lesen zwischen den Zeilen. Wir gestalten, was andere übersehen. Dort passiert der Unterschied.",
      },
      {
        title: "Form trifft Gefühl",
        subtitle: "Mit Logik gebaut. Mit Herz gefühlt.",
        text: "Wir verbinden Struktur und Emotion. Funktion und Intuition. Jedes Element, das wir erschaffen, dient einem Zweck—technisch, ästhetisch, emotional. Sie werden die Logik nicht sehen, aber Sie werden sie spüren. Denn die besten Erlebnisse werden nicht erklärt. Sie werden gefühlt.",
      },
    ];

    return (
      <main>
        <PageTitle title="Über Unser Kreatives Studio">
          Lernen Sie das Team hinter den Projekten kennen. Mit Leidenschaft und
          Expertise verwandeln wir Visionen in digitale Realität und schaffen
          innovative Lösungen, die begeistern und überzeugen.
        </PageTitle>

        <section>
          <div className="container">
            <div className="grid lg:grid-cols-12 border-t border-dotted  pt-8">
              <h2 className="col-span-3">Unsere Bestimmung</h2>
              <div className="col-span-1" />
              <div className="lg:col-span-8 lg:grid lg:grid-cols-2 gap-8">
                {purposeContent.map((statement, index) => (
                  <div key={index}>
                    <h3 className="lg:mt-0">{statement.title}</h3>
                    <p>{statement.text}</p>
                    <p className="muted">{statement.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="grid lg:grid-cols-12 border-t border-dotted pt-8">
              <h2 className="col-span-3">
                Was wir leben und wie wir handeln
              </h2>
              <div className="col-span-1" />
              <div className="lg:col-span-8 lg:grid lg:grid-cols-2 gap-8">
                {valueContent.map((statement, index) => (
                  <div key={index}>
                    <h3 className="lg:mt-0">{statement.title}</h3>
                    <p>{statement.text}</p>
                    <p className="muted">{statement.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    );
}
