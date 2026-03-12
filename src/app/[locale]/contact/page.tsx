import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageHeader from "@/components/sections/pageheader";
import { ArrowRight } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact.meta" });
  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: `${t("title")} – Generics Studio`,
      description: t("description"),
      url: "https://generics.studio/contact",
    },
  };
}

export default async function ContactPage() {
  const t = await getTranslations("contact");
  const options = t.raw("options") as {
    number: string;
    label: string;
    title: string;
    description: string;
    href: string;
    external: boolean;
  }[];
  const header = t.raw("header") as { title: string; description: string };

  return (
    <main>
      <PageHeader title={header.title}>
        {header.description}
      </PageHeader>

      <section className="py-24">
        <div className="container px-10 max-w-7xl mx-auto flex flex-col gap-12">

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

          <div className="-mx-10 flex flex-col lg:flex-row border-border">
            {options.map((option, i) => (
              <a
                key={option.number}
                href={option.href}
                target={option.external ? "_blank" : undefined}
                rel={option.external ? "noopener noreferrer" : undefined}
                className={[
                  "group flex-1 p-10 flex flex-col gap-6 hover:bg-foreground hover:text-background transition-colors duration-500",
                  i < options.length - 1 ? "border-b lg:border-b-0 lg:border-r border-border" : "",
                ].join(" ")}
              >
                <span className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground group-hover:text-background/40 transition-colors duration-500">
                  {option.label}
                </span>
                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="text-xl font-mono font-bold">{option.title}</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-background/70 transition-colors duration-500 leading-relaxed">
                    {option.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm font-mono group-hover:gap-4 transition-all duration-300">
                  {option.label}
                  <ArrowRight size={14} />
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
