import { LineSquiggle, Telescope, Rocket } from "lucide-react";
import SectionTitle from "../sectiontitle";

export default function Process() {
  return (
    <section className="min-h-[50vh] py-24 flex flex-col items-center justify-center">
      <div className="flex flex-col container px-10">
        <SectionTitle title="We Guide Every Project With Clarity and Care">
          From our first conversation to the final handoff, we chart a clear
          path forward. Every step is intentional, every milestone matters. We
          keep you in the loop, aligned with the vision, and confident in the
          direction. It's not just a process—it's a partnership built on
          transparency and trust.
        </SectionTitle>

        <div className="flex flex-row mt-12 gap-8">
          <div className="flex flex-col hover:bg-background hover:text-foreground hover:transition-all duration-700 justify-center flex-3 bg-foreground text-background p-6">
            <Telescope className="mb-4" size={48} strokeWidth={1.5} />
            <h3 className="text-2xl font-bold mb-2">Discover & Define</h3>
            <p>
              We listen deeply to understand your vision, goals, and challenges.
              Through strategic questions and careful analysis, we define the
              roadmap that guides everything that follows.
            </p>
          </div>
          <div className="flex flex-col justify-center flex-3 bg-foreground text-background hover:bg-background hover:text-foreground hover:transition-all duration-700 p-6">
            <LineSquiggle className="mb-4" size={48} strokeWidth={1.5} />
            <h3 className="text-2xl font-bold mb-2">Design & Develop</h3>
            <p>
              With clarity in hand, we build. Every design decision, every line
              of code serves your purpose. We prototype early, iterate fast, and
              keep you updated every step of the way.
            </p>
          </div>
          <div className="flex flex-col justify-center flex-3 bg-foreground text-background p-6 hover:bg-background hover:text-foreground hover:transition-all duration-700">
            <Rocket className="mb-4" size={48} strokeWidth={1.5} />
            <h3 className="text-2xl font-bold mb-2">Launch & Support</h3>
            <p>
              When it's time to go live, we're there. We ensure a smooth handoff
              with complete documentation and ongoing support. Your project is
              never finished—it's always ready to grow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
