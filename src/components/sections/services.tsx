import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import SectionTitle from "../sectiontitle";
import { Frame, LayoutPanelTop, Palette, Telescope, VectorSquare } from "lucide-react";

const ServicesContent = [
  {
    title: "Webdesign",
    description:
      "Massgeschneiderte Websites, moderne UI/UX, schnelle Performance und responsive Umsetzung.",
    icon: <LayoutPanelTop className="mb-4" size={48} strokeWidth={1.5} />,
  },
  {
    title: "Branding & Logos",
    description:
      "Logo-Design, Markenidentitaet, Farbkonzepte und visuelle Guidelines fuer einen klaren und starken Markenauftritt.",
    icon: <Frame className="mb-4" size={48} strokeWidth={1.5} />,
  },
  {
    title: "Grafikdesign",
    description:
      "Individuelle Grafiken, Illustrationen, Social Media Visuals und alles, was visuell wirkt.",
    icon: <VectorSquare className="mb-4" size={48} strokeWidth={1.5} />,
  },
  {
    title: "Print Design",
    description:
      "Flyer, Visitenkarten, Menu Karten, Broschueren und weitere analoge Designs, sauber fuers Drucken vorbereitet.",
    icon: <Palette className="mb-4" size={48} strokeWidth={1.5} />,
  },
];

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

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mt-12">
          {ServicesContent.map((service, index) => (
            <div
              key={index}
              className="flex flex-col hover:bg-background hover:text-foreground hover:transition-all duration-700 justify-center flex-3 bg-foreground text-background p-6"
            >
            <div className="flex items-center justify-start mb-4">
              {service.icon}
            </div>
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
