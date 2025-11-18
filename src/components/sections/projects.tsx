import { Card } from "@/components/ui/card";
import Image from "next/image";


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
      <div className="flex flex-col container px-10">
        <div className="max-w-3xl flex flex-col gap-6">
          <h2 className="text-6xl font-bold">
            The eyes, Chico. <br /> They never lie.
          </h2>
          <p className="text-xl text-muted-foreground">
            Words describe vision. But work speaks louder than any pitch ever
            could. Our projects tell the story of what we believe in—bold
            design, flawless performance, and brands that stand out. Let's show
            you what exceptional looks like.
          </p>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-6">
          {ProjectsContent.map((project, index) => (
          <Card key={index} className="rounded-none shadow-none relative h-124 overflow-hidden grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <Image
              src={project.backgroundImage}
              alt="Project 1"
              fill
              className="object-cover"
            />
            <Image
              src={project.mainImage}
              alt={project.title}
              fill
              className="object-cover mt-16 hover:scale-105 transition-transform duration-500 shadow-2xl"
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
