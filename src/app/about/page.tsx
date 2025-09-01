import PageTitle from "@/components/ui/PageTitle";
import { generateSEO, seoConfig } from "@/lib/seo";

export const metadata = generateSEO(seoConfig.about);

export default function AboutPage() {

    const purposeContent = [
      {
        title: "Handmade Excellence",
        subtitle: "No templates. No shortcuts. No compromises.",
        text: "Every pixel is placed with intention. Every line of code written from scratch. We don't use templates because your vision deserves more than a pre-made solution. We craft digital experiences that are as unique as your story—built from the ground up with modern technology and timeless design principles. In a world of copy-paste solutions, we choose the harder path: creating something truly yours.",
      },
      {
        title: "Authentic Digital Identity",
        subtitle: "Your brand deserves its own voice.",
        text: "Generic solutions create generic results. We believe every business has a unique story worth telling—and deserving of a digital presence that reflects that uniqueness. Through careful listening and thoughtful craft, we transform your vision into digital reality. No WordPress themes. No Figma templates. Just pure, authentic digital experiences that speak your language and connect with your audience.",
      },
      {
        title: "Performance Meets Purpose",
        subtitle: "Beautiful by design. Lightning by code.",
        text: "Great design without great performance is just pretty decoration. We merge stunning visuals with cutting-edge technology to create websites that don't just look exceptional—they perform exceptionally. Built with Next.js for speed, optimized for search engines, and crafted for conversion. Because in the digital world, beauty and brains aren't mutually exclusive.",
      },
      {
        title: "Beyond the Ordinary",
        subtitle: "Where vision meets execution.",
        text: "We don't build websites. We architect digital experiences. Each project begins with understanding not just what you do, but why you do it. From initial concept to final deployment, every decision serves your purpose. No cookie-cutter solutions. No borrowed aesthetics. Just thoughtful design and precise execution that transforms browsers into believers and visitors into customers.",
      },
    ];

    const valueContent = [
      {
        title: "Silence stands out",
        subtitle: "Less noise. More impact.",
        text: "In a world of loud design, silence draws attention. We build digital spaces that breathe. Interfaces that don't scream, but whisper with purpose. It's not about doing more. It's about doing less—better. We remove the unnecessary so what matters can resonate. Real impact doesn't need to shout.",
      },
      {
        title: "Design that lingers",
        subtitle: "Not trendy. Timeless.",
        text: "Trends fade. Principles last. Our work isn't made to impress today and vanish tomorrow. It's built to endure. We design for clarity, emotion, and structure. Not flash. Not noise. Because good design doesn't ask for attention. It earns it—and keeps it.",
      },
      {
        title: "Between the lines",
        subtitle: "We notice what others miss.",
        text: "Every project has a surface and a depth. Most stop at the surface. We go deeper—into nuance, rhythm, behavior. Into what's unspoken but felt. Design is language. We read between the lines. We design what others overlook. That's where the difference happens.",
      },
      {
        title: "Form meets feeling",
        subtitle: "Built with logic. Felt with heart.",
        text: "We bring together structure and emotion. Function and intuition. Every element we craft serves a purpose—technical, aesthetic, emotional. You won't see the logic, but you'll feel it. Because the best experiences aren't explained. They're felt.",
      },
    ];

    return (
      <main>
        <PageTitle title="About Our Creative Studio">
          Meet the team behind the projects. With passion and expertise, we
          transform visions into digital reality and create innovative solutions
          that inspire and convince.
        </PageTitle>

        <section>
          <div className="container">
            <div className="grid lg:grid-cols-12 border-t pt-8">
              <h2 className="col-span-4">Our Purpose</h2>
              <div className="lg:col-span-8 lg:grid lg:grid-cols-2 gap-8">
                {purposeContent.map((statement, index) => (
                  <div key={index}>
                    <h3 className="mt-0">{statement.title}</h3>
                    <p>{statement.text}</p>
                    <p className="muted">{statement.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="grid lg:grid-cols-12 border-t pt-8">
              <h2 className="col-span-4">
                What we value <br /> and how we act
              </h2>
              <div className="lg:col-span-8 lg:grid lg:grid-cols-2 gap-8">
                {valueContent.map((statement, index) => (
                  <div key={index}>
                    <h3 className="mt-0">{statement.title}</h3>
                    <p>{statement.text}</p>
                    <p className="muted">{statement.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    );
}
