import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageHeader from "@/components/sections/pageheader";
import Pricing from "@/components/servicessections/pricing";
import CTA from "@/components/sections/cta";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.graphicdesign.meta" });
  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: `${t("title")} – Generics Studio`,
      description: t("description"),
      url: "https://generics.studio/graphicdesign",
    },
  };
}

export default async function GraphicDesignPage() {
  const t = await getTranslations("pages.graphicdesign");
  const header = t.raw("header") as { title: string; description: string };
  const pricing = t.raw("pricing") as {
    title: string;
    description: string;
    note: string;
    cta: { title: string; description: string; button: string };
    plans: { title: string; description: string; price: string; features: string[] }[];
  };

  return (
    <main className="relative">
      <PageHeader title={header.title}>
        {header.description}
      </PageHeader>
      <Pricing
        pricingData={pricing.plans}
        label={pricing.title}
        title={pricing.title}
        description={pricing.description}
        note={pricing.note}
        cta={pricing.cta}
      />
      <CTA />
    </main>
  );
}
