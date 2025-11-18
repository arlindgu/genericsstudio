import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Services() {
  return (
    <section className="min-h-[50vh] py-24 flex flex-col items-center justify-center">
      <div className="flex flex-col container px-10">
        <div className="max-w-3xl flex flex-col gap-6">
          <h2 className="text-6xl font-bold">We create to last</h2>
          <p className="text-xl text-muted-foreground">
            Our commitment to timeless design and functionality drives us to
            create digital experiences that endure. We believe in crafting
            websites and brand identities that captivate and remain relevant
            over time. By focusing on clarity, emotion, and structure, we ensure
            every project is built to withstand the evolving digital landscape.
          </p>
        </div>

        <div className="flex flex-row mt-12 gap-8 items-center">
          <Card className="rounded-none shadow-none h-114 border-none relative flex-1">
            <div className="absolute bottom-0 p-6 z-1 text-background">
              <p className="text-2xl font-bold">Web Design and Development</p>
              <p className="text-muted-background max-w-2/3">
                We design and develop custom websites tailored to your brand's
                unique needs.
              </p>
            </div>
            <Image
              src="/services/webdesign.png"
              alt="Web Design"
              fill
              className="object-cover z-0 grayscale mask-t-from-0.5"
            />
          </Card>
          <p className="flex-1">
            We're on a mission to create websites and brand design that spark
            excitement—just like a Grand Slam Tennis match. Partnering with
            exceptional brands that share our ambition for good design, we
            approach every project with intensity, strategy, and genuine
            partnership. It's not just about your website. It's about game, set,
            and match for your brand.
          </p>
        </div>
        <div className="flex flex-row mt-12 gap-8 items-center">
          <Card className="rounded-none order-1 shadow-none h-114 border-none relative flex-1">
            <div className="absolute bottom-0 p-6 z-1 text-background">
              <p className="text-2xl font-bold">Analysis</p>
              <p className="text-muted-background max-w-2/3">
                In-depth market research and user behavior insights to inform
                strategic decisions.
              </p>
            </div>
            <Image
              src="/services/analysis.png"
              alt="Web Design"
              fill
              className="object-cover z-0 grayscale mask-t-from-0.5"
            />
          </Card>
          <p className="flex-1">
            Our approach emphasizes subtlety and depth over noise. We don't
            chase trends; instead, we create work that stands the test of time
            by focusing on clarity, emotion, and structure. Every element serves
            a purpose—whether technical, aesthetic, or emotional—resulting in
            experiences that feel intuitive and natural. We read between the
            lines and design what others overlook, building with logic but
            creating feelings. This is where real impact happens: in the spaces
            others miss, in the details that resonate without being obvious.
          </p>
        </div>
        <div className="flex flex-row mt-12 gap-8 items-center">
          <Card className="rounded-none shadow-none h-114 border-none relative flex-1">
            <div className="absolute bottom-0 p-6 z-1 text-background">
              <p className="text-2xl font-bold">Restoration</p>
              <p className="text-muted-background max-w-2/3">
                In-depth market research and user behavior insights to inform
                strategic decisions.
              </p>
            </div>
            <Image
              src="/services/restoration.png"
              alt="Web Design"
              fill
              className="object-cover z-0 grayscale mask-t-from-0.5"
            />
          </Card>
          <p className="flex-1">
            We stay deliberately small to maintain speed, directness, and
            accountability. With minimal hierarchy and maximum collaboration,
            every team member is closely involved in projects, eliminating
            unnecessary meetings and bureaucratic overhead. This structure
            enables us to make rapid decisions, prototype early, and
            continuously improve. We prioritize progress over process, ensuring
            each project remains adaptable and true to its original vision.
            Here, there are no spectators—only a focused team moving fast and
            building better.
          </p>
        </div>
      </div>
    </section>
  );
}
