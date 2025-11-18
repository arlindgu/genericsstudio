"use client";

import { Card} from "@/components/ui/card";
import CircularText from "@/components/CircularText";
import SectionTitle from "@/components/sectiontitle";
import { Circle, Heart, MessageCircle } from "lucide-react";


export default function Mission() {
    return (
      <section className="min-h-[50vh] bg-muted py-24 flex flex-col items-center justify-center">
        <div className="flex flex-col container px-10">
          <div className="flex flex-row">
            <SectionTitle title="We create with purpose, built on dialogue and care.">
              At Generics Studio, we’re on the mission to create websites and
              brand design that spark excitement – just like a Grand Slam Tennis
              match. Partnering with exceptional brands that share our ambition
              for good design. It’s not just about your website. It’s about
              game, set, and match for your brand.
            </SectionTitle>
            <CircularText
              text="MADE*BY*GENERICS*STUDIO*"
              onHover="speedUp"
              spinDuration={20}
            />
          </div>
          <div className="flex flex-row mt-12 gap-8">
            <div className="flex-1 gap-4 grid grid-cols-2 grid-rows-2">
              <Card className="col-span-2 rounded-none border-none shadow-none relative flex items-center justify-center">
                <Circle
                  className="m-6"
                  fill="orange"
                  stroke="orange"
                  size={96}
                  strokeWidth={1.5}
                />
              </Card>
              <Card className="rounded-none border-none shadow-none relative flex items-center justify-center">
                <Heart
                  className="m-6 absolute"
                  size={96}
                  fill="red"
                  stroke="red"
                  strokeWidth={1.5}
                />
                <Heart
                  className="m-6 animate-ping"
                  size={96}
                  fill="red"
                  stroke="red"
                  strokeWidth={1.5}
                />
              </Card>
              <Card className="rounded-none border-none shadow-none relative flex items-center justify-center">
                <MessageCircle
                  className="m-6"
                  size={96}
                  strokeWidth={1.5}
                  fill="black"
                  stroke="black"
                />
              </Card>
            </div>
            <div className="flex-1 flex flex-col gap-4">
              <p>
                We build custom digital experiences from the ground up,
                rejecting generic solutions and pre-made templates. Every
                project is treated as unique, with careful attention to both
                design and code. Rather than applying WordPress themes or Figma
                templates, we create authentic digital identities that reflect
                each client's distinct story—combining modern technology with
                timeless design principles to deliver results that are
                beautiful, fast, and conversion-focused. Your brand deserves its
                own voice, and we ensure it speaks clearly in the digital world.
              </p>

              <p>
                Our approach emphasizes subtlety and depth over noise. We don't
                chase trends; instead, we create work that stands the test of
                time by focusing on clarity, emotion, and structure. Every
                element serves a purpose—whether technical, aesthetic, or
                emotional—resulting in experiences that feel intuitive and
                natural. We read between the lines and design what others
                overlook, building with logic but creating feelings. This is
                where real impact happens: in the spaces others miss, in the
                details that resonate without being obvious.
              </p>

              <p>
                We stay deliberately small to maintain speed, directness, and
                accountability. With minimal hierarchy and maximum
                collaboration, every team member is closely involved in
                projects, eliminating unnecessary meetings and bureaucratic
                overhead. This structure enables us to make rapid decisions,
                prototype early, and continuously improve. We prioritize
                progress over process, ensuring each project remains adaptable
                and true to its original vision. Here, there are no
                spectators—only a focused team moving fast and building better.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
}