"üse client";

import { Card} from "@/components/ui/card";
import CircularText from "@/components/CircularText";
import SectionTitle from "@/components/sectiontitle";
import { Circle, Heart, MessageCircle, Rocket } from "lucide-react";


export default function Mission() {
    return (
      <section className="min-h-[50vh] bg-muted py-24 flex flex-col items-center justify-center">
        <div className="flex flex-col container px-10">
          <div className="flex flex-col lg:flex-row">
            <SectionTitle title="Wir schaffen mit Bedacht, basierend auf Leidenschaft und Sorgfalt">
              Bei Generics Studio entwickeln wir Websites und Markendesigns, die
              Emotionen wecken. Wir arbeiten mit Marken zusammen, die unsere
              Ambitionen für gutes Design teilen. Es geht nicht nur um
              Websites. Es geht um Wirkung.
            </SectionTitle>
            <div className="flex-1 items-center mt-12 lg:mt-0 justify-center flex">
              <CircularText
                text="MADE*BY*GENERICS*STUDIO*"
                onHover="speedUp"
                spinDuration={20}
                className="relative"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row mt-12 gap-8">
            <div className="flex-3 flex flex-col gap-16">
              {/* 02 — Warum wir existieren */}
              <section className="space-y-4">
                <h3 className="text-xl font-medium max-w-md">
                  Warum Generics Studio der beste Ort ist, um starke, zeitlose
                  Designs entwickeln zu lassen.
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex flex-col justify-center flex-3 bg-foreground text-background p-6 hover:bg-background hover:text-foreground hover:transition-all duration-700">
                    <h3 className="text-2xl font-bold mb-2">Klarheit</h3>
                    <p>
                      Wir schaffen Strukturen, die ruhig wirken und Führung
                      geben.
                    </p>
                  </div>
                  <div className="flex flex-col justify-center flex-3 bg-foreground text-background p-6 hover:bg-background hover:text-foreground hover:transition-all duration-700">
                    <h3 className="text-2xl font-bold mb-2">Zeitlosigkeit</h3>
                    <p>Wir baün nicht für heute. Wir baün für immer.</p>
                  </div>
                  <div className="flex flex-col justify-center flex-3 bg-foreground text-background p-6 hover:bg-background hover:text-foreground hover:transition-all duration-700">
                    <h3 className="text-2xl font-bold mb-2">Details</h3>
                    <p>
                      Wir optimieren die Zwischenräume: das, was andere
                      übersieht.
                    </p>
                  </div>
                  <div className="flex flex-col justify-center flex-3 bg-foreground text-background p-6 hover:bg-background hover:text-foreground hover:transition-all duration-700">
                    <h3 className="text-2xl font-bold mb-2">Authentisch</h3>
                    <p>Keine WordPress-Themes, keine Figma-Kopien.</p>
                  </div>
                  <div className="flex flex-col justify-center flex-3 bg-foreground text-background p-6 hover:bg-background hover:text-foreground hover:transition-all duration-700">
                    <h3 className="text-2xl font-bold mb-2">Schnell</h3>
                    <p>Frühe Prototypen, klare Entscheidungen.</p>
                  </div>
                  <div className="flex flex-col justify-center flex-3 bg-foreground text-background p-6 hover:bg-background hover:text-foreground hover:transition-all duration-700">
                    <h3 className="text-2xl font-bold mb-2">Fokussiert</h3>
                    <p>Jedes Element hat einen Zweck.</p>
                  </div>
                </div>
              </section>

              {/* 06 — Unsere Haltung */}
              <section className="space-y-4 max-w-md">
                <h3 className="text-xl font-medium">
                  Wir bleiben bewusst klein.
                </h3>

                <p className="leading-relaxed">
                  Weniger Prozess. Mehr Fortschritt. Mit einem Team, das direkt,
                  schnell und persönlich arbeitet. Keine Hierarchie, kein
                  Bürokratiedrama. Nur Menschen, die machen.
                </p>

                <p className="leading-relaxed">
                  Weniger Lärm. Mehr Wirkung. So treffen wir schnelle
                  Entscheidungen, bleiben nah an der Vision und liefern
                  Ergebnisse, die nicht generisch wirken, sondern persönlich.
                  Keine Zuschaür, nur Macher.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    );
}