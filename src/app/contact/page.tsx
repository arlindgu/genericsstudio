import FormComponent from "./Form"
import PageTitle from "@/components/ui/PageTitle";
import { generateSEO, seoConfig } from "@/lib/seo";

export const metadata = generateSEO(seoConfig.contact);

export default function ContactPage() {
    return (
      <main>
        <PageTitle title="Kontaktieren Sie Uns">
          Haben Sie eine Projektidee oder Fragen zu unseren Dienstleistungen?
          Wir freuen uns darauf, von Ihnen zu hören und beraten Sie gerne
          persönlich. Lassen Sie uns gemeinsam Ihr nächstes digitales Vorhaben
          planen.
        </PageTitle>
        <section>
          <div className="container">
            <FormComponent />
          </div>
        </section>
      </main>
    );
}
