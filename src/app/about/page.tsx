"use client";
import {useEffect} from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import PageTitle from "@/components/ui/PageTitle";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function AboutPage() {
    gsap.registerPlugin(SplitText);

    useEffect(() => {
        const splitTitle = SplitText.create("#pagetitle", { type: "words" });
        const splitSubtitle = SplitText.create("#pagesubtitle", { type: "words" });

        const timeline = gsap.timeline({ defaults: { ease: "power1.out" } });
        timeline
            .from(splitTitle.words, {
                duration: 0.5,
                y: 100,
                autoAlpha: 0,
                stagger: 0.05
            })
            .from(splitSubtitle.words, {
                duration: 0.5,
                y: 100,
                autoAlpha: 0,
                stagger: 0.005
            });

    }, []);

    const content = [
    {
        title: "Not just pixels.",
        subtitle: "We craft experiences, not websites.",
        text: "We don’t just build websites. We create presence.\n\nWhere others add color, we subtract clutter. Where others chase trends, we design silence.\n\nWe believe in tension, contrast, rhythm. In what’s felt more than seen. In design that disappears—until it’s unforgettable.\n\nThis isn’t about code or canvas. It’s about meaning. Movement. Precision.\n\nWelcome to the space between the lines.",
        video: "video_1.mp4"
    },
    {
        title: "Silence stands out.",
        subtitle: "Less noise. More impact.",
        text: "In a world of loud design, silence draws attention.\n\nWe build digital spaces that breathe. Interfaces that don’t scream, but whisper with purpose.\n\nIt’s not about doing more. It’s about doing less—better.\n\nWe remove the unnecessary so what matters can resonate.\n\nReal impact doesn’t need to shout.",
        video: "video_2.mp4"
    },
    {
        title: "Design that lingers.",
        subtitle: "Not trendy. Timeless.",
        text: "Trends fade. Principles last.\n\nOur work isn’t made to impress today and vanish tomorrow. It’s built to endure.\n\nWe design for clarity, emotion, and structure. Not flash. Not noise.\n\nBecause good design doesn’t ask for attention. It earns it—and keeps it.",
        video: "video_3.mp4"
    },
    {
        title: "Between the lines.",
        subtitle: "We notice what others miss.",
        text: "Every project has a surface and a depth. Most stop at the surface.\n\nWe go deeper—into nuance, rhythm, behavior. Into what’s unspoken but felt.\n\nDesign is language. We read between the lines. We design what others overlook.\n\nThat’s where the difference happens.",
        video: "video_4.mp4"
    },
    {
        title: "Form meets feeling.",
        subtitle: "Built with logic. Felt with heart.",
        text: "We bring together structure and emotion. Function and intuition.\n\nEvery element we craft serves a purpose—technical, aesthetic, emotional.\n\nYou won’t see the logic, but you’ll feel it.\n\nBecause the best experiences aren’t explained. They’re felt.",
        video: "video_5.mp4"
    }
];

    return (
      <main>
        <PageTitle title="About Studio.">
          Meet the team behind the projects. With passion and expertise, we
          transform visions into digital reality and create innovative solutions
          that inspire and convince.
        </PageTitle>

        <section>
          <div className="container">
            <Carousel
              plugins={[
                Autoplay({
                  delay: 5000,
                  stopOnInteraction: true,
                }),
              ]}
            >
              <CarouselContent >
                {content.map((item, index) => (
                  <CarouselItem key={index}>
                    <section
                      key={index}
                      className="min-h-dvh flex flex-col items-center justify-center relative"
                    >
                      <video
                        src={item.video}
                        className="w-full h-3/4 object-cover absolute"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                      <div className="relative text-center max-w-3xl text-background dark:text-foreground">
                        <h3>{item.title}</h3>
                        <h4>{item.subtitle}</h4>
                        <p>{item.text}</p>
                      </div>
                    </section>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
      </main>
    );
}
