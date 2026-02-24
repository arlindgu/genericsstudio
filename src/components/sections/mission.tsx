"use client";

import CircularText from "@/components/CircularText";
import SectionTitle from "@/components/sectiontitle";
import Link from "next/link";

const benefits = [
  {
    title: "Mehr Anfragen",
    description:
      "Designs, die Vertrauen aufbauen und Besucher zum Handeln bringen — nicht nur zum Schauen.",
  },
  {
    title: "Schneller live",
    description:
      "Erste Prototypen in Tagen. Kein endloses Hin und Her, kein Warten auf Freigaben.",
  },
  {
    title: "Keine Templates",
    description:
      "100% individuell entwickelt. Dein Auftritt sieht aus wie kein anderer — weil er keiner ist.",
  },
  {
    title: "Direkte Kommunikation",
    description:
      "Du sprichst mit den Machern, nicht mit einem Projektmanager. Kurze Wege, klare Antworten.",
  },
  {
    title: "Langfristig stark",
    description:
      "Zeitlose Designs ohne Ablaufdatum. Keine Neugestaltung nach zwei Jahren.",
  },
  {
    title: "Messbare Wirkung",
    description:
      "Struktur, Hierarchie und Conversion-Logik sind von Anfang an eingebaut — nicht nachträglich.",
  },
];

export default function Mission() {
  return (
    <section className="min-h-[50vh] py-24 flex flex-col items-center justify-center max-w-7xl mx-auto">
      <div className="flex flex-col container px-10">
        <div className="flex flex-col lg:flex-row">
          <SectionTitle title="Deine Website, die verkauft. Nicht nur existiert.">
            Die meisten Websites verlieren täglich potenzielle Kunden — durch
            schlechte Struktur, generisches Design und fehlende Klarheit. Wir
            bauen digitale Auftritte, die das ändern.
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
            <section className="space-y-6">
              <h3 className="text-xl font-medium max-w-md">
                Was du konkret bekommst, wenn du mit uns arbeitest.
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="flex flex-col justify-center bg-foreground text-background p-6 hover:bg-background hover:text-foreground transition-all duration-700"
                  >
                    <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <p className="text-muted-foreground max-w-sm leading-relaxed">
                Bereit für einen Auftritt, der für dich arbeitet?
              </p>
              <Link
                href="/contact"
                className="shrink-0 bg-foreground text-background px-6 py-3 font-medium hover:bg-background hover:text-foreground transition-all duration-300"
              >
                Projekt anfragen
              </Link>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}