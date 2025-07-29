"use client";
import {useEffect} from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

export default function AboutPage() {
    gsap.registerPlugin(SplitText);

    useEffect(() => {
        const splitTitle = SplitText.create("#pagetitle", { type: "words" });
        const splitSubtitle = SplitText.create("#pagesubtitle", { type: "words, chars" });

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
                stagger: 0.01
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
        <div>
            <section className="h-dvh flex flex-col items-center justify-center -mt-32">
                <section className="p-4 text-center">
                <h1 id="pagetitle" className="text-7xl mb-4 max-w-2xl">Why we stand out and why it matters.</h1>
                <p  id="pagesubtitle" className="max-w-2xl">We are a creative studio specializing in digital solutions. Our
                multidisciplinary team combines expertise from development,
                design, user experience, and project management. Together, we
                craft innovative concepts and evaluate their potential for
                sustainable success.</p>
                </section>
            </section>
            {content.map((item, index) => (
                <section
                    key={index}
                    className="min-h-dvh flex flex-col items-center justify-center relative"
                >
                    <video
                        src={item.video}
                        className="w-full h-full object-cover absolute top-0 left-0"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                    <div className="relative text-center text-powder p-4">
                        <h1 className="font-bold mb-2">{item.title}</h1>
                        <h2 className="text-xl mb-4">{item.subtitle}</h2>
                        <p className="max-w-2xl mx-auto">{item.text}</p>
                    </div>
                    
                </section>
            ))}
        </div>
    );
}
