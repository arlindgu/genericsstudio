export default function RoadmapPage() {

    const BriefingContent = [
  {
    title: "Briefing & Analysis",
    description: "Laying the foundation of the project by understanding the client and their goals.",
    points: [
      "What is the main goal of the website?",
      "Who is the target audience?",
      "Who are the competitors?",
      "What is the budget and timeline?",
      "Are there existing corporate design elements?"
    ]
  },
  {
    title: "Concept & Strategy",
    description: "Creating the master plan and roadmap based on initial insights.",
    points: [
      "Create sitemap (what pages are needed?)",
      "Define user journey (how will users navigate?)",
      "Develop content strategy",
      "Specify technical requirements",
      "Set up project plan with milestones"
    ]
  },
  {
    title: "Wireframes & Prototyping",
    description: "Building the structural skeleton of the website with focus on layout and function.",
    points: [
      "Create low-fidelity wireframes for all main pages",
      "Define navigation and menu structure",
      "Position content blocks",
      "Define interactive elements",
      "Apply mobile-first approach"
    ]
  },
  {
    title: "Design & Branding",
    description: "Creating the visual identity and design language.",
    points: [
      "Develop color palette",
      "Set typography",
      "Integrate logo and branding elements",
      "Define visual language",
      "Create design system"
    ]
  },
  {
    title: "Development",
    description: "Transforming static designs into a functional, responsive website.",
    points: [
      "Develop with HTML/CSS/JavaScript",
      "Implement responsive design",
      "Integrate CMS (if needed)",
      "Optimize performance",
      "Implement SEO basics"
    ]
  },
  {
    title: "Testing & Optimization",
    description: "Final quality checks before launch.",
    points: [
      "Cross-browser testing",
      "Check mobile responsiveness",
      "Run performance tests",
      "Verify accessibility",
      "Incorporate client feedback"
    ]
  }
];

const phasesContent = [
  {
    title: "Briefing",
    duration: "1–2 weeks"
  },
  {
    title: "Concept",
    duration: "1–2 weeks"
  },
  {
    title: "Wireframes",
    duration: "1–2 weeks"
  },
  {
    title: "Design",
    duration: "2–3 weeks"
  },
  {
    title: "Development",
    duration: "3–4 weeks"
  },
  {
    title: "Testing",
    duration: "1 week"
  },
  {
    title: "Launch",
    duration: "1 week"
  }
];





    
return (
<main>
    <div className="flex-col flex gap-8">
        <div className="header">
            <h1>🎨 Webdesign-Prozess</h1>
            <p>Dein Schritt-für-Schritt Leitfaden für erfolgreiche Kundenprojekte</p>
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-3 lg:grid-rows-2 gap-4">
            {BriefingContent.map((phase, index) => (
                <div key={index} className="card">
                    <div className="phase-number">{index + 1}</div>
                    <h3>{phase.title}</h3>
                    <div className="phase-summary">{phase.description}</div>
                    <div className="phase-content">
                        <div className="details">
                            <h4>Wichtige Punkte:</h4>
                            <ul>
                                {phase.points.map((point, i) => (
                                    <li className="list-disc ml-4" key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <div className="timeline">
            <h3>⏱️ Typische Projektdauer</h3>
            <div className="flex flex-col lg:grid lg:grid-cols-3 lg:grid-rows-2 gap-4">
                {phasesContent.map((phase, index) => (
                    <div key={index} className="card">
                        <h4>{phase.title}</h4>
                        <span>{phase.duration}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>

</main>
);
}