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

        <div className="flex lg:flex-row flex-col gap-8 mt-12">
          <div className="flex-1 flex flex-col lg:flex-row gap-8 items-center">
            <Card className="rounded-none shadow-none h-114 bg-foreground border-none relative flex-1">
              <div className="lg:absolute bottom-0 p-6 z-1 text-background">
                <p className="text-2xl font-bold">Webdesign und Entwicklung</p>
                <p className="text-muted-background lg:max-w-2/3">
                  Wir entwerfen und entwickeln massgeschneiderte Websites, die
                  auf die individuellen Bedürfnisse Ihrer Marke zugeschnitten
                  sind. unique needs.
                </p>
              </div>
              <Image
                src="/services/webdesign.png"
                alt="Web Design"
                fill
                className="object-cover z-0 grayscale mask-t-from-0.5"
              />
            </Card>
          </div>
          <div className="flex-1 flex flex-col lg:flex-row gap-8 items-center">
            <Card className="rounded-none bg-foreground shadow-none h-114 border-none relative flex-1">
              <div className="lg:absolute bottom-0 p-6 z-1 text-background">
                <p className="text-2xl font-bold">Restaurierung</p>
                <p className="text-muted-background lg:max-w-2/3">
                  Revitalisierung und Modernisierung bestehender digitaler
                  Ressourcen zur Verbesserung der Leistung und
                  Benutzererfahrung.
                </p>
              </div>
              <Image
                src="/services/restoration.png"
                alt="Web Design"
                fill
                className="object-cover z-0 grayscale mask-t-from-0.5"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
