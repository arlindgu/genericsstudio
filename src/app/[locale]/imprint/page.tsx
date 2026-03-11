import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageHeader from "@/components/sections/pageheader";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "imprint.meta" });
  return {
    title: t("title"),
    description: t("description"),
    robots: { index: false, follow: false },
  };
}

const sections: {
  title: string;
  items?: { label: string; value: string; href?: string }[];
  text?: string;
}[] = [
  {
    title: "Angaben gemäss Art. 3 UWG",
    items: [
      { label: "Unternehmen", value: "Gurgurovci Studio" },
      { label: "Adresse", value: "Bergholzstrasse 21 A" },
      { label: "Ort", value: "9500 Wil SG, Schweiz" },
    ],
  },
  {
    title: "Kontakt",
    items: [
      { label: "Telefon", value: "+41 79 405 99 55", href: "tel:+41794059955" },
      { label: "E-Mail", value: "hello@generics.studio", href: "mailto:hello@generics.studio" },
      { label: "Website", value: "generics.studio", href: "https://generics.studio" },
    ],
  },
  {
    title: "Haftungsausschluss",
    text: "Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen. Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen entstanden sind, werden ausgeschlossen.",
  },
  {
    title: "Urheberrechte",
    text: "Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf dieser Website gehören ausschliesslich Gurgurovci Studio oder den speziell genannten Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung des Urheberrechtsträgers im Voraus einzuholen.",
  },
  {
    title: "Datenschutz",
    text: "Gestützt auf Art. 13 der schweizerischen Bundesverfassung und die datenschutzrechtlichen Bestimmungen des Bundes (Datenschutzgesetz, DSG) hat jede Person Anspruch auf Schutz ihrer Privatsphäre sowie auf Schutz vor Missbrauch ihrer persönlichen Daten. Wir halten diese Bestimmungen ein. Persönliche Daten werden streng vertraulich behandelt und weder an Dritte verkauft noch weitergegeben.",
  },
];

export default async function ImprintPage() {
  const t = await getTranslations("imprint");
  const header = t.raw("header") as { title: string; description: string };

  return (
    <main>
      <PageHeader title={header.title}>
        {header.description}
      </PageHeader>

      <section className="py-24">
        <div className="container px-10 max-w-7xl mx-auto flex flex-col gap-16">
          {sections.map((section) => (
            <div key={section.title} className="flex flex-col lg:flex-row gap-8 border-t border-border pt-10">
              <h2 className="font-mono font-bold text-sm tracking-[0.15em] uppercase text-muted-foreground lg:w-64 flex-shrink-0">
                {section.title}
              </h2>
              <div className="flex-1">
                {section.items ? (
                  <dl className="flex flex-col gap-3">
                    {section.items.map((item) => (
                      <div key={item.label} className="flex gap-6">
                        <dt className="font-mono text-sm text-muted-foreground w-24 flex-shrink-0">
                          {item.label}
                        </dt>
                        <dd className="text-sm">
                          {item.href ? (
                            <a
                              href={item.href}
                              className="hover:text-brand transition-colors duration-300"
                            >
                              {item.value}
                            </a>
                          ) : (
                            item.value
                          )}
                        </dd>
                      </div>
                    ))}
                  </dl>
                ) : (
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                    {section.text}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
