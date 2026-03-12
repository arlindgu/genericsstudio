import { getTranslations } from "next-intl/server";
import { AnimateIn } from "@/components/ui/animate-in";

export default async function Process() {
  const t = await getTranslations("process");
  const steps = t.raw("steps") as {
    number: string;
    title: string;
    description: string;
  }[];

  return (
    <section className="py-24 border-t border-border">
      <div className="container px-10 max-w-7xl mx-auto flex flex-col gap-12">

        <AnimateIn>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
              {t("label")}
            </span>
            <h2 className="font-mono font-bold tracking-tighter leading-[0.9] text-5xl lg:text-7xl">
              {t("title").split("\n").map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
            </h2>
          </div>
          <p className="text-muted-foreground text-base max-w-sm leading-relaxed">
            {t("description")}
          </p>
        </div>
        </AnimateIn>

        <AnimateIn delay={0.1}>
        <div className="-mx-10 flex flex-col lg:flex-row border-border">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className=
                "flex-1 p-10 flex flex-col gap-6 border-b lg:border-b-0 last:border-0 lg:border-r lg:last:border-r-0"
            >
              <span className="font-mono text-4xl font-bold text-brand">
                {step.number}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-mono font-bold">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {step.description}
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
