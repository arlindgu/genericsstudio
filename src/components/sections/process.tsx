import { LineSquiggle, Telescope, Rocket } from "lucide-react";
import SectionTitle from "../sectiontitle";

export default function Process() {
  return (
    <section className="min-h-[50vh] py-24 flex flex-col items-center justify-center">
      <div className="flex flex-col container px-10">
        <SectionTitle title="Wir begleiten jedes Projekt mit Klarheit und Sorgfalt">
          Von unserem ersten Gespräch bis zur endgültigen Übergabe legen wir
          einen klaren Weg fest. Jeder Schritt ist bewusst gewählt, jeder
          Meilenstein ist wichtig. Wir halten Sie auf dem Laufenden, stimmen uns
          mit Ihnen ab und geben Ihnen Sicherheit hinsichtlich der weiteren
          Vorgehensweise. Es handelt sich nicht nur um einen Prozess, sondern um
          eine Partnerschaft, die auf Transparenz und Vertrauen basiert.
        </SectionTitle>

        <div className="flex flex-col lg:flex-row mt-12 gap-8">
          <div className="flex flex-col hover:bg-background hover:text-foreground hover:transition-all duration-700 justify-center flex-3 bg-foreground text-background p-6">
            <Telescope className="mb-4" size={48} strokeWidth={1.5} />
            <h3 className="text-2xl font-bold mb-2">Entdecken & Definieren</h3>
            <p>
              Wir hören Ihnen aufmerksam zu, um Ihre Vision, Ihre Ziele und Ihre
              Herausforderungen zu verstehen. Durch strategische Fragen und
              sorgfältige Analysen definieren wir den Fahrplan, der alles
              Weitere bestimmt.
            </p>
          </div>
          <div className="flex flex-col justify-center flex-3 bg-foreground text-background hover:bg-background hover:text-foreground hover:transition-all duration-700 p-6">
            <LineSquiggle className="mb-4" size={48} strokeWidth={1.5} />
            <h3 className="text-2xl font-bold mb-2">Design & Entwicklung</h3>
            <p>
              Mit Klarheit in der Hand bauen wir. Jede Designentscheidung, jede
              Zeile Code dient Ihrem Zweck. Wir erstellen frühzeitig Prototypen,
              iterieren schnell und halten Sie über jeden Schritt auf dem
              Laufenden.
            </p>
          </div>
          <div className="flex flex-col justify-center flex-3 bg-foreground text-background p-6 hover:bg-background hover:text-foreground hover:transition-all duration-700">
            <Rocket className="mb-4" size={48} strokeWidth={1.5} />
            <h3 className="text-2xl font-bold mb-2">Launch & Support</h3>
            <p>
              Wenn es Zeit für den Start ist, sind wir zur Stelle. Wir sorgen
              für eine reibungslose Übergabe mit vollständiger Dokumentation und
              fortlaufendem Support. Ihr Projekt ist niemals abgeschlossen – es
              ist immer bereit für weiteres Wachstum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
