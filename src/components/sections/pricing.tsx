import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/ui/animate-in";
import { getTranslations } from "next-intl/server";

export default async function Pricing() {
  const t = await getTranslations("pricing");
  const items = t.raw("items") as {
    title: string;
    description: string;
    startingPrice: string;
    link: string;
  }[];
  const cta = t.raw("cta") as { title: string; description: string; button: string };

  return (
    <section className="py-24 border-t border-border bg-foreground text-background">
      <div className="container px-10 max-w-7xl mx-auto flex flex-col gap-12">
        <AnimateIn>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="flex flex-col gap-4">
              <span className="font-mono text-xs tracking-[0.2em] uppercase text-background/40">
                {t("label")}
              </span>
              <h2 className="font-mono font-bold tracking-tighter leading-[0.9] text-5xl lg:text-7xl">
                {t("title")
                  .split("\n")
                  .map((line, i, arr) => (
                    <span key={i}>
                      {line}
                      {i < arr.length - 1 && <br />}
                    </span>
                  ))}
              </h2>
            </div>
            <p className="text-background/60 text-base max-w-sm leading-relaxed">
              {t("description")}
            </p>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <div className="-mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {items.map((plan, i) => (
              <Link
                key={plan.title}
                href={plan.link}
                className="group p-10 flex flex-col gap-6 hover:bg-background hover:text-foreground transition-colors duration-500 border-b lg:border-b-0 lg:border-r last:border-0 border-background/10 "
              >
                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="text-xl font-mono font-bold">{plan.title}</h3>
                  <p className="text-sm text-background/60 group-hover:text-foreground/60 transition-colors duration-500 leading-relaxed">
                    {plan.description}
                  </p>
                </div>
                <div className="flex items-end justify-between">
                  <span className="font-mono font-bold text-brand">
                    {plan.startingPrice}
                  </span>
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </div>
              </Link>
            ))}
          </div>
        </AnimateIn>

        <AnimateIn delay={0.15}>
          <div className="-mx-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-background/10 px-10 pt-10">
            <div className="flex flex-col gap-1">
              <p className="font-mono font-bold text-lg">{cta.title}</p>
              <p className="text-background/60 text-sm">{cta.description}</p>
            </div>
            <a
              href="https://cal.com/genericsstudio/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-background text-foreground px-7 py-3.5 font-medium text-sm hover:gap-5 transition-all duration-300 flex-shrink-0"
            >
              {cta.button}
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
