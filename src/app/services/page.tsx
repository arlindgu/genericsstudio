import PageTitle from "@/components/ui/PageTitle";
import { Card, CardHeader, CardTitle, CardAction, CardContent, CardDescription } from "@/components/ui/card";
import BrandGuidelines from "@/components/svgs/brandguidelines.svg"
import Webdesign from "@/components/svgs/webdesign.svg"
import Webrestauration from "@/components/svgs/webrestauration.svg"
import {ArrowUpRight } from "lucide-react"
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function servicesPage() {

    const ServiceCards = [
      {
        title: "Website Design",
        subtitle: "Crafting digital experiences.",
        picture: <Webdesign className="h-12 fill-foreground" />,
        url: "/contact",
        description: "We create stunning, user-friendly websites that not only look exceptional but drive real results for your business."
      },
      {
        title: "Branding",
        subtitle: "Building a strong brand identity.",
        picture: <BrandGuidelines className="h-12 fill-foreground" />,
        url: "/contact",
        description: "We help you establish a strong brand identity that resonates with your target audience and sets you apart from the competition."
      },
      {
        title: "Restauration",
        subtitle: "Reviving traditions.",
        picture: <Webrestauration className="h-12 fill-foreground" />,
        url: "/contact",
        description: "We specialize in restoring and preserving traditional craftsmanship, bringing a touch of history to modern design."
      },
    ];

    

  return (
    <main>
      <PageTitle title="Explore Services.">
        {" "}
        Discover our comprehensive range of services. From initial concept to
        final implementation, we accompany you with tailored solutions that
        drive your business forward and create sustainable success.
      </PageTitle>
      <section>
        <div className="container flex flex-col lg:flex-row gap-8">
          {ServiceCards.map((service) => (
            <Card key={service.title} className="flex-1 min-h-64">
              <CardHeader>
                <CardAction>
                  <Button variant="ghost" className="size-8">
                    <Link href={service.url}>
                      <ArrowUpRight />
                    </Link>
                  </Button>
                </CardAction>
                <CardTitle>{service.picture}</CardTitle>
                <CardDescription>{service.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                {service.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
