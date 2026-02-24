import { LineSquiggle, Telescope, Rocket } from "lucide-react";
import SectionTitle from "../sectiontitle";

export default function Process() {
  return (
    <section className="min-h-[50vh] py-24 flex flex-col items-center justify-center">
      <div className="flex flex-col container px-10 max-w-7xl mx-auto">
        <SectionTitle title="Drei Schritte. Ein Ergebnis.">
          Kein Chaos. Kein Warten. Von der Idee bis zum Launch — klar und direkt.
        </SectionTitle>

        <div className="flex flex-col lg:flex-row mt-12 gap-8">
          <div className="flex flex-col hover:bg-background hover:text-foreground hover:transition-all duration-700 justify-center flex-3 bg-foreground text-background p-6">
            <Telescope className="mb-4" size={48} strokeWidth={1.5} />
            <h3 className="text-2xl font-bold mb-2">Entdecken & Definieren</h3>
            <p>
              Wir hören zu. Stellen die richtigen Fragen. Und bauen den Plan, der alles Weitere trägt.
            </p>
          </div>
          <div className="flex flex-col justify-center flex-3 bg-foreground text-background hover:bg-background hover:text-foreground hover:transition-all duration-700 p-6">
            <LineSquiggle className="mb-4" size={48} strokeWidth={1.5} />
            <h3 className="text-2xl font-bold mb-2">Design & Entwicklung</h3>
            <p>
              Frühe Prototypen. Schnelles Feedback. Jede Entscheidung mit Absicht.
            </p>
          </div>
          <div className="flex flex-col justify-center flex-3 bg-foreground text-background p-6 hover:bg-background hover:text-foreground hover:transition-all duration-700">
            <Rocket className="mb-4" size={48} strokeWidth={1.5} />
            <h3 className="text-2xl font-bold mb-2">Launch & Support</h3>
            <p>
              Reibungslos live. Vollständig übergeben. Bereit zu wachsen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
