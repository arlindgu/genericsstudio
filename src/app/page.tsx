import type { Metadata } from "next";
import Hero from "@/components/sections/hero";

export const metadata: Metadata = {
  title: "Generics Studio – Webdesign, Branding & Grafikdesign Schweiz",
  description: "Generics Studio aus der Schweiz. Wir bauen Websites, entwickeln Marken und gestalten Grafiken – massgeschneidert, schnell und unverkennbar.",
  openGraph: {
    title: "Generics Studio – Webdesign, Branding & Grafikdesign Schweiz",
    description: "Massgeschneiderte Websites, Logos und Grafiken aus der Schweiz.",
    url: "https://generics.studio",
  },
};
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
