import PageTitle from "@/components/ui/PageTitle";
import Link from "next/link";
import { generateSEO, seoConfig } from "@/lib/seo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowUpRight } from "lucide-react";

export const metadata = generateSEO(seoConfig.projects);

export default function CaseStudiesPage() {

type Content = {
  accordionTitle: string;
  accordionDescription: string;
  accordionContent: {
    title: string;
    person: string;
    description: string;
    url?: string;
    image: string;
  }[];
};

const caseStudyContent: Content[] = [
  {
    accordionTitle: "Interfaces in Action",
    accordionDescription:
      "Entdecken Sie, wie wir intuitive und benutzerfreundliche Schnittstellen für komplexe Systeme entwickelt haben.",
    accordionContent: [
      {
        title: "Webseiten Entwicklung",
        person: "didischocoberries",
        description:
          "Redesign und Entwicklung einer modernen, responsiven Webseite für ein aufstrebendes Startup im Food-Bereich. Das Ziel war, eine digitale Präsenz zu schaffen, die die Frische, Qualität und Persönlichkeit der Marke visuell und technisch transportiert. Das bestehende Design wurde vollständig überarbeitet, um eine klarere Informationsstruktur, stärkere Markenidentität und eine nahtlose User Experience auf allen Geräten zu gewährleisten. Neben dem neuen Look stand vor allem die Performance im Fokus – schnelle Ladezeiten, optimierte Bilder und ein auf Conversion ausgerichtetes Layout. Interaktive Elemente, wie animierte Produktdarstellungen und intuitive Navigation, sorgen für ein lebendiges Nutzererlebnis. Das Projekt wurde mit Next.js realisiert, inklusive Headless-CMS-Anbindung zur einfachen Pflege von Inhalten. Das Ergebnis: eine flexible, skalierbare Plattform, die den Spirit eines modernen Food-Startups authentisch widerspiegelt und bereit ist für Wachstum.",
        url: "https://didis.generics.studio",
        image: "/project_pics/didis_thumb.png",
      },
      {
        title: "Webseiten Entwicklung",
        person: "Blendis Barbershop",
        description:
          "Entwicklung einer modernen Webseite mit Next.js inklusive Integration eines Terminbuchungssystems. Fokus auf klares, minimalistisches Design, hohe Performance und einfache Wartung. Die Seite spiegelt den Stil des Barbershops wider und bietet Kunden eine intuitive Möglichkeit, direkt online Termine zu buchen.",
        image: "/blendis_barbershop.png",
      },
    ],
  },
];

  return (
    <>
      <PageTitle title="Unser Portfolio Ausgewählter Projekte">
        Werfen Sie einen Blick auf unsere erfolgreich abgeschlossenen Projekte.
        Jedes Projekt erzählt eine einzigartige Geschichte von
        Herausforderungen, kreativen Lösungen und zufriedenen Kunden, die uns
        ihr Vision anvertraut haben.
      </PageTitle>
      <section>
        <div className="container flex flex-col gap-4">
          <Accordion type="single" collapsible>
            {caseStudyContent.map(
              ({ accordionTitle, accordionDescription, accordionContent }) => (
                <AccordionItem
                  key={accordionTitle}
                  value={accordionTitle}
                  className="rounded-none first:border-t border-dotted last:border-b py-12"
                >
                  <AccordionTrigger className="rounded-none border-dotted text-3xl">
                    {accordionTitle}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-8 text-lg leading-6 text-muted-foreground max-w-xl">
                      {accordionDescription}
                    </p>
                    {accordionContent.map((item) => (
                      <div key={item.person + item.title} className="mb-12">
                        <div className="grid gap-4 lg:grid-cols-3">
                          <div className="lg:col-span-1 mb-4">
                            <h2 className="mt-0 font-mono">{item.person}</h2>
                            <h4 className="mt-0 font-medium">{item.title}</h4>
                          </div>
                          <div className="lg:col-span-2 mb-4">
                            <p className="mb-4">{item.description}</p>
                            {item.url && (
                              <Link
                              className="underline inline-flex items-center"
                              href={item.url}
                            >
                              View Project <ArrowUpRight size="12" />
                            </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              )
            )}
          </Accordion>
        </div>
      </section>
    </>
  );
}