import { JSX } from "react";
import LoremIpsum from "react-lorem-ipsum";
import Tag from "@/components/tag";

export default function CaseStudiesPage() {

  type CaseStudiesPageProps = {
    title: string;
    description: JSX.Element | string;
    url: string;
    tags: string[];
  };

  const caseStudies: CaseStudiesPageProps[] = [
    {
      title: "ES-SELAM MOSQUE",
      description: "Development of a modern website using Next.js and TailwindCSS, designed for seamless integration with a content management system (CMS) and database. The setup is prepared for additional features such as prayer times management, dynamic content handling, and future scalability.",
      url: "/case-studies/project-alpha",
      tags: ["web design", "development", "UI/UX", "open source"]
    },
    {
      title: "Project Beta",
      description: <LoremIpsum/>,
      url: "/case-studies/project-beta",
      tags: ["branding", "marketing", "SEO"]
    },
    {
      title: "Project Gamma",
      description: <LoremIpsum/>,
      url: "/case-studies/project-gamma",
      tags: ["e-commerce", "web development"]
    },
  ];


  return (
    <main className="flex-1 flex items-center justify-center">
          <div className="flex flex-col h-fit gap-4 justify-center">
      {caseStudies.map(({ title, description, url, tags }) => (
        <div key={url} className="border p-4 max-w-4xl">
          <div className="flex flex-row justify-between items-center">
          <a href={url} className="uppercase text-2xl font-semibold hover:underline">
            {title}
          </a>
          <div>
                                  {tags.map((tag) => (
              <Tag key={tag} tag={tag}/>
            ))}
            </div>

          </div>
          <p className="text-sm text-gray-400">
          {description}
          </p>
        </div>
      ))}
    </div>
    </main>

  );
}