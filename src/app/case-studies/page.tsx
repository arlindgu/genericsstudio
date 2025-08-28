"use client"
import { JSX } from "react";
import Tag from "@/components/tag";
import PageTitle from "@/components/ui/PageTitle";

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
      tags: [
        "Web Design",
        "Landing Page",
        "Branding",
      ],
    },
    {
      title: "Thread IT",
      description:
        "For Thread IT, we developed a comprehensive web solution that included a custom landing page, user-friendly UI/UX design, and robust SEO optimizations. The project aimed to enhance brand visibility and improve user engagement.",
      url: "https://threadit.arlind.io/",
      tags: [
        "Web Design",
        "Landing Page",
        "SEO",
        "Branding",
        "Contact Form",
      ],
    },
    {
      title: "Blendis Barbershop",
      description:
        "For Blendis Barbershop, we created a visually stunning website that showcases their services and expertise. The site features a modern design, easy navigation, and a booking system to enhance user experience.",
      url: "https://blendis.arlind.io/",
      tags: [
        "Web Design",
        "Landing Page",
        "SEO",
        "booking system",
      ],
    }
  ];


  return (
    <>
      <PageTitle title="Our Projects.">
        Take a look at our successfully completed projects. Each project tells a
        unique story of challenges, creative solutions, and satisfied clients
        who trusted us with their vision.
      </PageTitle>
      <section>
        <div className="container flex flex-col gap-4 justify-center items-center">
          {caseStudies.map(({ title, description, url, tags }) => (
            <div
              key={url}
              className="border p-4 bg-background shadow-sm max-w-5xl"
            >
              <div className="flex flex-col justify-between items-start">
                <a
                  href={url}
                  className="uppercase font-body text-2xl font-bold hover:underline order-2 "
                >
                  {title}
                </a>
              </div>
              <p className="text-sm text-licoric-950 mb-2">{description}</p>
              <div>
                {tags.map((tag) => (
                  <Tag key={tag} tag={tag} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}