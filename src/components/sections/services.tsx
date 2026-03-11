import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/ui/animate-in";
import { getTranslations } from "next-intl/server";

export default async function Services() {
  const t = await getTranslations("services");
  const items = t.raw("items") as {
    number: string;
    title: string;
    description: string;
    href: string;
  }[];

  return (
    <section className="py-24 border-t border-border" id="leistungen">
      <div className="container px-10 max-w-7xl mx-auto flex flex-col gap-12">

        <AnimateIn>
        <div className="flex flex-col gap-4">
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
            {t("label")}
          </span>
          <h2 className="font-mono font-bold tracking-tighter leading-[0.9] text-5xl lg:text-7xl">
            {t("title").split("\n").map((line, i) => (
              <span key={i}>{line}{i < t("title").split("\n").length - 1 && <br />}</span>
            ))}
          </h2>
        </div>
        </AnimateIn>

        <AnimateIn delay={0.1}>
        <div className="-mx-10 grid grid-cols-1 lg:grid-cols-2 border-t border-border">
          {items.map((service, i) => (
            <Link
              key={service.number}
              href={service.href}
              className={[
                "group p-10 flex flex-col gap-6 hover:bg-foreground hover:text-background transition-colors duration-500",
                i < 2 ? "border-b border-border" : "",
                i % 2 === 0 ? "lg:border-r border-border" : "",
              ].join(" ")}
            >
              <span className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground group-hover:text-background/40 transition-colors duration-500">
                {service.number}
              </span>
              <div className="flex flex-col gap-2 flex-1">
                <h3 className="text-3xl font-mono font-bold tracking-tight">
                  {service.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-background/70 transition-colors duration-500">
                  {service.description}
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm font-mono group-hover:gap-4 transition-all duration-300">
                {t("more")}
                <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>
        </AnimateIn>

      </div>
    </section>
  );
}
