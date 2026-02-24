import { Card } from "@/components/ui/card";
import Image from "next/image";
import SectionTitle from "../sectiontitle";


const ProjectsContent = [
  {
    title: "GF Haustechnik",
    year: "2025",
    mainImage: "/projects/gf-h.png",
    backgroundImage: "/services/webdesign.png",
  },
  {
    title: "Berrys",
    year: "2024",
    mainImage: "/projects/berrys.png",
    backgroundImage: "/services/restoration.png",
  },
  {
    title: "ThreadIT",
    year: "2023",
    mainImage: "/projects/threadit.png",
    backgroundImage: "/services/analysis.png",
  },
] ; 


export default function Projects() {
  return (
    <section className="min-h-[50vh] bg-muted py-24 flex flex-col items-center justify-center">
      <div className="flex flex-col container px-10 max-w-7xl mx-auto">
        <SectionTitle title="Echtes Design verratet sich selbst">
          Worte beschreiben Visionen. Aber Taten sagen mehr als jede Werbung es
          jemals könnte. Unsere Projekte erzählen die Geschichte dessen, woran
          wir glauben – mutiges Design, makellose Leistung und Marken, die sich
          von der Masse abheben. Lassen Sie uns Ihnen zeigen, wie
          aussergewöhnlich aussieht.
        </SectionTitle>
        <div className="grid lg:grid-cols-3 gap-4 mt-6">
          {ProjectsContent.map((project, index) => (
            <Card
              key={index}
              className="rounded-none bg-linear-to-t from-black to-background  shadow-none relative h-124 overflow-hidden grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            >
              <Image
                src={project.mainImage}
                alt={project.title}
                width={400}
                height={300}
                className="hover:scale-105 transition-transform duration-500 absolute inset-0"
              />
              <div className="bottom-0 items-center p-6 text-background inset-x-0 flex justify-between absolute">
                <p className="font-mono font-bold text-2xl">{project.title}</p>
                <p className="font-bold font-xl">{project.year}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
