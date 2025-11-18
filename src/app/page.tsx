"use client";
import Hero from "@/components/sections/hero";
import Mission from "@/components/sections/mission";
import Pricing from "@/components/sections/pricing";
import Process from "@/components/sections/process";
import Projects from "@/components/sections/projects";
import Services from "@/components/sections/services";
import Noise from "@/components/Noise";




export default function Home() {
  return (
    <main className="relative">
      <div
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: 100,
      }}
      >
      <Noise />
      </div>
      <Hero />
      <Mission />
      <Services />
      <Projects />
      <Process />
      <Pricing />
    </main>
  );
}
