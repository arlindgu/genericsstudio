import Link from "next/link";

export default function ToolsPage() {

const toolsData = [
  {
    title: "📋 Briefing & Analyse",
    tools: [
      { name: "Notion", 
        desc: "Projektdokumentation und Kundenfragebögen",
        link: "https://www.notion.so" },
      { name: "Google Analytics", 
        desc: "Bestehende Website-Daten analysieren",
        link: "https://analytics.google.com" },
      { name: "SimilarWeb", 
        desc: "Konkurrenzanalyse",
        link: "https://www.similarweb.com" }
    ]
  },
  {
    title: "🗺️ Konzept & Strategie",
    tools: [
      { name: "Miro/Mural", desc: "Brainstorming und Sitemap-Erstellung", link: "https://miro.com" },
      { name: "Lucidchart", desc: "User Journey Mapping", link: "https://www.lucidchart.com" },
      { name: "Trello/Asana", desc: "Projektmanagement", link: "https://trello.com" }
    ]
  },
  {
    title: "✏️ Wireframes & Prototyping",
    tools: [
      { name: "Figma", desc: "Wireframes und Prototyping (Empfehlung!)", link: "https://www.figma.com" },
      { name: "Sketch", desc: "Mac-basiertes Design-Tool",  link: "https://www.sketch.com" },
      { name: "Balsamiq", desc: "Schnelle Low-Fidelity Wireframes", link: "https://balsamiq.com" }
    ]
  },
  {
    title: "🎨 Design & Branding",
    tools: [
      { name: "Adobe Creative Suite", desc: "Photoshop, Illustrator, InDesign", link: "https://www.adobe.com/creativecloud.html" },
      { name: "Canva Pro", desc: "Schnelle Grafiken und Templates", link: "https://www.canva.com/pro" },
      { name: "Unsplash/Pexels", desc: "Stock-Fotos", link: "https://unsplash.com" }
    ]
  },
  {
    title: "💻 Entwicklung",
    tools: [
      { name: "WordPress", desc: "CMS für 90% der Projekte", link: "https://wordpress.org" },
      { name: "VS Code", desc: "Code-Editor (kostenlos)", link: "https://code.visualstudio.com" },
      { name: "Git/GitHub", desc: "Versionskontrolle", link: "https://github.com" }
    ]
  },
  {
    title: "🧪 Testing & Optimierung",
    tools: [
      { name: "BrowserStack", desc: "Cross-Browser Testing", link: "https://www.browserstack.com" },
      { name: "GTmetrix", desc: "Performance-Analyse", link: "https://gtmetrix.com" },
      { name: "WAVE", desc: "Accessibility-Check", link: "https://wave.webaim.org" }
    ]
  }
];

    
return (
<main>
    <div className="flex-col flex gap-8">
        <div className="header">
            <h1>🛠️ Tools</h1>
        </div>

        <div className="flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {toolsData.map((category) => (
              <div className="tool-category card" key={category.title}>
                <h4>{category.title}</h4>
                <div className="gap-2 flex flex-col">
                  {category.tools.map((tool) => (
                    <div className="flex flex-col" key={tool.name}>
                      <Link href={tool.link} className="font-bold underline">{tool.name}</Link>
                      <span className="">{tool.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>

</main>
);
}