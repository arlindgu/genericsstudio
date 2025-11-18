"use client";

import { Card} from "@/components/ui/card";
import CircularText from "@/components/CircularText";
import SectionTitle from "@/components/sectiontitle";
import { Circle, Heart, MessageCircle } from "lucide-react";


export default function Mission() {
    return (
      <section className="min-h-[50vh] bg-muted py-24 flex flex-col items-center justify-center">
        <div className="flex flex-col container px-10">
          <div className="flex flex-row">
            <SectionTitle title="Wir schaffen mit Bedacht, basierend auf Leidenschaft und Sorgfalt">
              Bei Generics Studio haben wir es uns zur Aufgabe gemacht, Websites
              und Markendesigns zu entwickeln, die Begeisterung wecken – genau
              wie ein Grand-Slam-Tennismatch . Wir arbeiten mit
              außergewöhnlichen Marken zusammen, die unsere Ambitionen für gutes
              Design teilen. Es geht nicht nur um Ihre Website. Es geht um
              Spiel, Satz und Sieg für Ihre Marke.
            </SectionTitle>
          </div>
          <div className="flex flex-row mt-12 gap-8">
            <div className="flex-1 items-center justify-center flex">
              <CircularText
                text="MADE*BY*GENERICS*STUDIO*"
                onHover="speedUp"
                spinDuration={20}
                className="relative"
              />
            </div>
            <div className="flex-3 flex flex-col gap-4">
              <p>
                Wir entwickeln maßgeschneiderte digitale Erlebnisse von Grund
                auf neu und lehnen generische Lösungen und vorgefertigte
                Vorlagen ab. Jedes Projekt wird als einzigartig behandelt, wobei
                sowohl dem Design als auch dem Code große Aufmerksamkeit
                geschenkt wird. Anstatt WordPress-Themes oder Figma-Vorlagen zu
                verwenden, schaffen wir authentische digitale Identitäten, die
                die einzigartige Geschichte jedes Kunden widerspiegeln – indem
                wir moderne Technologie mit zeitlosen Designprinzipien
                kombinieren, um Ergebnisse zu erzielen, die schön, schnell und
                konversionsorientiert sind. Ihre Marke verdient eine eigene
                Stimme, und wir sorgen dafür, dass sie in der digitalen Welt
                klar zu hören ist.
              </p>

              <p>
                Unser Ansatz betont Subtilität und Tiefe gegenüber Lärm. Wir
                jagen keinen Trends hinterher, sondern schaffen Werke, die den
                Test der Zeit bestehen, indem wir uns auf Klarheit, Emotion und
                Struktur konzentrieren. Jedes Element erfüllt einen Zweck – sei
                es technisch, ästhetisch oder emotional – und sorgt so für
                intuitive und natürliche Erlebnisse. Wir lesen zwischen den
                Zeilen und gestalten, was andere übersehen, indem wir mit Logik
                arbeiten, aber Gefühle wecken. Hier entsteht die wahre Wirkung:
                in den Zwischenräumen, die andere übersehen, in den Details, die
                ohne Offensichtlichkeit nachhallen.
              </p>

              <p>
                Wir bleiben bewusst klein, um Schnelligkeit, Direktheit und
                Verantwortlichkeit zu gewährleisten. Mit minimaler Hierarchie
                und maximaler Zusammenarbeit ist jedes Teammitglied eng in die
                Projekte eingebunden, wodurch unnötige Besprechungen und
                bürokratischer Aufwand vermieden werden. Diese Struktur
                ermöglicht es uns, schnelle Entscheidungen zu treffen,
                frühzeitig Prototypen zu entwickeln und uns kontinuierlich zu
                verbessern. Wir priorisieren Fortschritt vor Prozess und stellen
                sicher, dass jedes Projekt anpassungsfähig bleibt und seiner
                ursprünglichen Vision treu bleibt. Hier gibt es keine Zuschauer
                – nur ein fokussiertes Team, das schnell vorankommt und bessere
                Ergebnisse erzielt.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
}