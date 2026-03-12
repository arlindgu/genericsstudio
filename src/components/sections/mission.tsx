import { getTranslations } from "next-intl/server";
import { AnimateIn } from "@/components/ui/animate-in";
import { cn } from "@/lib/utils";

export default async function Mission() {
  const t = await getTranslations("mission");
  const benefits = t.raw("benefits") as {
    number: string;
    title: string;
    description: string;
  }[];

  return (
    <section className="py-24 border-t border-border">
      <div className="container px-10 max-w-7xl mx-auto flex flex-col gap-12">
        <AnimateIn>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="flex flex-col gap-4 max-w-2xl">
              <span className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
                {t("label")}
              </span>
              <h2 className="font-mono font-bold tracking-tighter leading-[0.9] text-5xl lg:text-7xl">
                {t("title")}
              </h2>
            </div>
            <p className="text-muted-foreground text-base max-w-sm leading-relaxed">
              {t("description")}
            </p>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <div className="-mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, i) => (
              <div
                key={benefit.number}
                className={cn(
                  "group p-10 flex flex-col gap-6 hover:bg-foreground lg:border-b-0 hover:text-background transition-colors duration-500 border-b last:border-0 lg:order-border",
                  i % 3 !== 2 && "lg:border-r",
                  i < benefits.length - 3 && "lg:border-b",
                )}
              >
                <span className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground group-hover:text-background/40 transition-colors duration-500">
                  {benefit.number}
                </span>
                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="text-xl font-mono font-bold">
                    {benefit.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-background/70 transition-colors duration-500">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
