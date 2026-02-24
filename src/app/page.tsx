import Hero from "@/components/sections/hero";
import Mission from "@/components/sections/mission";
import Pricing from "@/components/sections/pricing";
import Process from "@/components/sections/process";
import Services from "@/components/sections/services";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Mission />
      <Services />
      <Process />
      <Pricing />
    </main>
  );
}
