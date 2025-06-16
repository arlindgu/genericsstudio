import LoremIpsum from "react-lorem-ipsum";

export default function CaseStudiesPage() {

  type CaseStudiesPageProps = {
    title: string;
    description: string;
    url: string;
  };

  const caseStudies: CaseStudiesPageProps[] = [
    {
      title: "Project Alpha",
      description: "A case study about Project Alpha.",
      url: "/case-studies/project-alpha"
    },
    {
      title: "Project Beta",
      description: "A case study about Project Beta.",
      url: "/case-studies/project-beta"
    },
    {
      title: "Project Gamma",
      description: "A case study about Project Gamma.",
      url: "/case-studies/project-gamma"
    },
    {
      title: "Project Delta",
      description: "A case study about Project Delta.",
      url: "/case-studies/project-delta"
    },
    {
      title: "Project Epsilon",
      description: "A case study about Project Epsilon.",
      url: "/case-studies/project-epsilon"
    },
    {
      title: "Project Zeta",
      description: "A case study about Project Zeta.",
      url: "/case-studies/project-zeta"
    },
    {
      title: "Project Eta",
      description: "A case study about Project Eta.",
      url: "/case-studies/project-eta"
    },
    {
      title: "Project Theta",
      description: "A case study about Project Theta.",
      url: "/case-studies/project-theta"
    },
    {
      title: "Project Iota",
      description: "A case study about Project Iota.",
      url: "/case-studies/project-iota"
    },
    {
      title: "Project Kappa",
      description: "A case study about Project Kappa.",
      url: "/case-studies/project-kappa"
    },
    {
      title: "Project Lambda",
      description: "A case study about Project Lambda.",
      url: "/case-studies/project-lambda"
    },
    {
      title: "Project Mu",
      description: "A case study about Project Mu.",
      url: "/case-studies/project-mu"
    }
  ];


  return (
    <main className="flex-1 flex flex-col p-4">
          <div className="flex flex-wrap h-fit gap-4 justify-center">
      {caseStudies.map(({ title, description, url }) => (
        <div key={url} className="border p-4">
          <a href={url} className="text-2xl font-semibold hover:underline">
            {title}
          </a>
          <p className="text-wrap max-w-2xl truncate"><LoremIpsum p={1}/></p>
        </div>
      ))}
    </div>
    </main>

  );
}