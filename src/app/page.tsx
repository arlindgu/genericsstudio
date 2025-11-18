import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import Mission from "@/components/sections/mission";
import Pricing from "@/components/sections/pricing";
import Process from "@/components/sections/process";
import Projects from "@/components/sections/projects";
import Services from "@/components/sections/services";




export default function Home() {
  return (
    <main>
      <Hero />
      <Mission />
      <Services />
      <Projects />
      <Process />
      <Pricing />
      <Footer />
    </main>
  );
}
