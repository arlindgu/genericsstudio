import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import SectionTitle from "../sectiontitle";
import { Frame, LayoutPanelTop, Palette, Telescope, VectorSquare } from "lucide-react";

const ServicesContent = [
  {
    title: "Webdesign",
    description: "Individuell gebaut. Schnell geladen. Sofort bereit.",
    icon: <LayoutPanelTop className="mb-4" size={48} strokeWidth={1.5} />,
  },
  {
    title: "Branding & Logos",
    description: "Ihr Name. Ihre Farben. Ihre Identität.",
    icon: <Frame className="mb-4" size={48} strokeWidth={1.5} />,
  },
  {
    title: "Grafikdesign",
    description: "Alles, was ins Auge fällt.",
    icon: <VectorSquare className="mb-4" size={48} strokeWidth={1.5} />,
  },
  {
    title: "Print Design",
    description: "Analog. Sauber. Druckfertig.",
    icon: <Palette className="mb-4" size={48} strokeWidth={1.5} />,
  },
];

export default function Services() {
  return (
    <section className="min-h-[50vh] bg-muted py-24 flex flex-col items-center justify-center">
      <div className="flex flex-col container px-10 max-w-7xl mx-auto">
        <SectionTitle title="Vier Disziplinen. Ein Ziel.">
          Design, das auffällt. Code, der performt. Beides aus einer Hand.
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
