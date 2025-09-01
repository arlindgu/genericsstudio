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
        "For didischocoberrys, we developed a custom landing page focused on consistent branding, user-friendly UI/UX design, and a clear structure to increase conversions. A responsive contact form and targeted SEO optimizations were integrated to improve visibility on Google.",
      url: "https://didis.arlind.io/",
      tags: ["Web Design", "Landing Page", "Branding"],
    },
    {
      title: "Thread IT",
      description:
        "For Thread IT, we developed a comprehensive web solution that included a custom landing page, user-friendly UI/UX design, and robust SEO optimizations. The project aimed to enhance brand visibility and improve user engagement.",
      url: "https://threadit.arlind.io/",
      tags: ["Web Design", "Landing Page", "SEO", "Branding", "Contact Form"],
    },
    {
      title: "Blendis Barbershop",
      description:
        "For Blendis Barbershop, we created a visually stunning website that showcases their services and expertise. The site features a modern design, easy navigation, and a booking system to enhance user experience.",
      url: "https://blendis.arlind.io/",
      tags: ["Web Design", "Landing Page", "SEO", "booking system"],
    },
  ];


  return (
    <>
      <PageTitle title="Our Featured Projects Portfolio">
        Take a look at our successfully completed projects. Each project tells a
        unique story of challenges, creative solutions, and satisfied clients
        who trusted us with their vision.
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