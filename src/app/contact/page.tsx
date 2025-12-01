"use client";

import PageHeader from "@/components/sections/pageheader";
import FormComponent from "./Form";
import SectionTitle from "@/components/sectiontitle";

export default function ContactPage() {
    return (
      <main>
        <PageHeader title="Kontakt">
          Haben Sie ein Projekt im Kopf oder moechten Sie mehr ueber unsere
          Dienstleistungen erfahren? Kontaktieren Sie uns noch heute, um Ihre
          Ideen zu besprechen und herauszufinden, wie wir Ihnen helfen koennen,
          Ihre Vision zum Leben zu erwecken.
        </PageHeader>
        <section className="min-h-[50vh] py-24 flex flex-col items-center justify-center">
          <div className="flex flex-col lg:flex-row container px-10">
            <div className="relative lg:flex-1">
              <SectionTitle title="Bereit?">
                Sie möchten Ihrer Marke ein starkes, visuelles Profil geben? Wir
                sind Ihre Agentur für Branding, Webdesign und Grafikdesign – mit
                klarer Strategie, kreativer Exzellenz und einem Auge fürs
                Wesentliche. Kontaktieren Sie uns für ein unverbindliches
                Erstgespräch. Gemeinsam entwickeln wir Designlösungen, die
                Vertrauen schaffen und Ihre Marke im Markt sichtbar
                positionieren.
              </SectionTitle>
            </div>
            <div className="flex-3 mt-12">
              <FormComponent />
            </div>
          </div>
        </section>
      </main>
    );
}