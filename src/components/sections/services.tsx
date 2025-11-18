import { Card } from "@/components/ui/card";
import Image from "next/image";
import SectionTitle from "../sectiontitle";

export default function Services() {
  return (
    <section className="min-h-[50vh] py-24 flex flex-col items-center justify-center">
      <div className="flex flex-col container px-10">
        <SectionTitle title="Wir schaffen, um zu bleiben">
          Unser Bekenntnis zu zeitlosem Design und Funktionalität treibt uns
          dazu an, digitale Erlebnisse zu schaffen, die Bestand haben. Wir
          glauben daran, Websites und Markenidentitäten zu entwickeln, die
          begeistern und über lange Zeit relevant bleiben. Indem wir uns auf
          Klarheit, Emotion und Struktur konzentrieren, stellen wir sicher, dass
          jedes Projekt so gestaltet ist, dass es der sich ständig
          weiterentwickelnden digitalen Landschaft standhält.
        </SectionTitle>

        <div className="flex flex-row mt-12 gap-8 items-center">
          <Card className="rounded-none shadow-none h-114 border-none relative flex-1">
            <div className="absolute bottom-0 p-6 z-1 text-background">
              <p className="text-2xl font-bold">Webdesign und Entwicklung</p>
              <p className="text-muted-background max-w-2/3">
                Wir entwerfen und entwickeln maßgeschneiderte Websites, die auf
                die individuellen Bedürfnisse Ihrer Marke zugeschnitten sind.
                unique needs.
              </p>
            </div>
            <Image
              src="/services/webdesign.png"
              alt="Web Design"
              fill
              className="object-cover z-0 grayscale mask-t-from-0.5"
            />
          </Card>
          <p className="flex-1">
            Wir haben es uns zur Aufgabe gemacht, Websites und Markendesigns zu
            entwickeln, die Begeisterung wecken – genau wie ein
            Grand-Slam-Tennismatch. In Zusammenarbeit mit außergewöhnlichen
            Marken, die unsere Ambitionen für gutes Design teilen, gehen wir
            jedes Projekt mit Intensität, Strategie und echter Partnerschaft an.
            Es geht nicht nur um Ihre Website. Es geht um Spiel, Satz und Sieg
            für Ihre Marke.
          </p>
        </div>
        <div className="flex flex-row mt-12 gap-8 items-center">
          <Card className="rounded-none order-1 shadow-none h-114 border-none relative flex-1">
            <div className="absolute bottom-0 p-6 z-1 text-background">
              <p className="text-2xl font-bold">Analyse</p>
              <p className="text-muted-background max-w-2/3">
                Umfassende Marktforschung und Einblicke in das Nutzerverhalten
                als Grundlage für strategische Entscheidungen.
              </p>
            </div>
            <Image
              src="/services/analysis.png"
              alt="Web Design"
              fill
              className="object-cover z-0 grayscale mask-t-from-0.5"
            />
          </Card>
          <p className="flex-1">
            Unser Ansatz betont Subtilität und Tiefe gegenüber Lärm. Wir jagen
            keinen Trends hinterher, sondern schaffen Werke, die den Test der
            Zeit bestehen, indem wir uns auf Klarheit, Emotion und Struktur
            konzentrieren. Jedes Element erfüllt einen Zweck – sei es technisch,
            ästhetisch oder emotional – und führt zu Erfahrungen, die sich
            intuitiv und natürlich anfühlen. Wir lesen zwischen den Zeilen und
            gestalten, was andere übersehen, bauen mit Logik, schaffen aber
            dennoch etwas, das sich intuitiv und natürlich anfühlt. Jedes
            Element erfüllt einen Zweck – sei es technisch, ästhetisch oder
            emotional – und führt zu Erlebnissen, die sich intuitiv und
            natürlich anfühlen. Wir lesen zwischen den Zeilen und entwerfen, was
            andere übersehen, bauen mit Logik, aber schaffen Gefühle. Hier
            entsteht die wahre Wirkung: in den Räumen, die andere übersehen, in
            den Details, die ohne offensichtlich zu sein, nachhallen.
          </p>
        </div>
        <div className="flex flex-row mt-12 gap-8 items-center">
          <Card className="rounded-none shadow-none h-114 border-none relative flex-1">
            <div className="absolute bottom-0 p-6 z-1 text-background">
              <p className="text-2xl font-bold">Restaurierung</p>
              <p className="text-muted-background max-w-2/3">
                Revitalisierung und Modernisierung bestehender digitaler
                Ressourcen zur Verbesserung der Leistung und Benutzererfahrung.
              </p>
            </div>
            <Image
              src="/services/restoration.png"
              alt="Web Design"
              fill
              className="object-cover z-0 grayscale mask-t-from-0.5"
            />
          </Card>
          <p className="flex-1">
            Wir bleiben bewusst klein, um Schnelligkeit, Direktheit und
            Verantwortlichkeit zu gewährleisten. Mit minimaler Hierarchie und
            maximaler Zusammenarbeit ist jedes Teammitglied eng in die Projekte
            eingebunden, wodurch unnötige Besprechungen und bürokratischer
            Aufwand vermieden werden. Diese Struktur ermöglicht es uns, schnelle
            Entscheidungen zu treffen, frühzeitig Prototypen zu entwickeln und
            uns kontinuierlich zu verbessern. Wir legen mehr Wert auf
            Fortschritt als auf Prozesse und stellen so sicher, dass jedes
            Projekt anpassungsfähig bleibt und seiner ursprünglichen Vision treu
            bleibt. Hier gibt es keine Zuschauer – nur ein fokussiertes Team,
            das schnell vorankommt und bessere Ergebnisse erzielt.
          </p>
        </div>
      </div>
    </section>
  );
}
