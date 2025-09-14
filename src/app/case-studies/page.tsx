import { JSX } from "react";
import PageTitle from "@/components/ui/PageTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { generateSEO, seoConfig } from "@/lib/seo";

export const metadata = generateSEO(seoConfig.projects);

export default function CaseStudiesPage() {

  type CaseStudiesPageProps = {
    title: string;
    description: JSX.Element | string;
    url: string;
    tags: string[];
  };

  const caseStudies: CaseStudiesPageProps[] = [
    {
      title: "didischocoberrys",
      description:
        "Für didischocoberrys entwickelten wir eine massgeschneiderte Landing Page mit Fokus auf konsistentes Branding, benutzerfreundliches UI/UX-Design und eine klare Struktur zur Steigerung der Conversion-Rate. Ein responsives Kontaktformular und gezielte SEO-Optimierungen wurden integriert, um die Sichtbarkeit bei Google zu verbessern.",
      url: "https://didis.generics.studio/",
      tags: ["Web Design", "Landing Page", "Branding"],
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
          {caseStudies.map(({ title, description, url, tags }) => (
            <Link key={title} href={url}>
              <Card className="hover:bg-primary hover:text-background transition-all duration-200">
                <CardHeader>
                  <CardTitle className="uppercase">{title}</CardTitle>
                  <p>{description}</p>
                </CardHeader>
                <CardContent>
                  {tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="uppercase">
                      {tag}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}