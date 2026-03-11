import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Hero from "@/components/sections/hero";
import Mission from "@/components/sections/mission";
import Pricing from "@/components/sections/pricing";
import Process from "@/components/sections/process";
import Services from "@/components/sections/services";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isDE = locale === "de";
  return {
    title: isDE
      ? "Generics Studio – Webdesign, Branding & Grafikdesign Schweiz"
      : "Generics Studio – Web Design, Branding & Graphic Design Switzerland",
    description: isDE
      ? "Generics Studio aus der Schweiz. Wir bauen Websites, entwickeln Marken und gestalten Grafiken – massgeschneidert, schnell und unverkennbar."
      : "Generics Studio from Switzerland. We build websites, develop brands and create graphics – custom-built, fast and unmistakable.",
    openGraph: {
      title: isDE
        ? "Generics Studio – Webdesign, Branding & Grafikdesign Schweiz"
        : "Generics Studio – Web Design, Branding & Graphic Design Switzerland",
      description: isDE
        ? "Massgeschneiderte Websites, Logos und Grafiken aus der Schweiz."
        : "Custom-built websites, logos and graphics from Switzerland.",
      url: "https://generics.studio",
    },
  };
}

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
