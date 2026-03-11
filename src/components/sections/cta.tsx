import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/ui/animate-in";
import { getTranslations } from "next-intl/server";

export default async function CTA() {
  const t = await getTranslations("cta");
  const titleLines = t("title").split("\n");

  return (
    <section className="bg-foreground text-background py-24 border-t border-background/10">
      <AnimateIn>
      <div className="container px-10 max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-12">
        <div className="flex flex-col gap-4">
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-background/40">
            {t("label")}
          </span>
          <h2 className="font-mono font-bold tracking-tighter leading-[0.875] text-5xl lg:text-7xl">
            {titleLines.map((line, i) => (
              <span key={i}>
                {i < titleLines.length - 1 ? (
                  <>{line}<br /></>
                ) : (
                  <span className="text-brand">{line}</span>
                )}
              </span>
            ))}
          </h2>
        </div>
        <Link
          href="/contact"
          className="group inline-flex items-center gap-3 bg-background text-foreground px-8 py-4 font-medium text-sm hover:gap-5 transition-all duration-300 flex-shrink-0"
        >
          {t("button")}
          <ArrowRight
            size={14}
            className="group-hover:translate-x-1 transition-transform duration-300"
          />
        </Link>
      </div>
      </AnimateIn>
    </section>
  );
}
