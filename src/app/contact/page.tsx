"use client";

import PageHeader from "@/components/sections/pageheader";
import Booking from "@/components/booking";
import { Mail, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <main>
      <PageHeader title="Kontakt">
        Projekt im Kopf? Wir hören zu.
      </PageHeader>
      <section className="py-24">
        <div className="container px-10 max-w-7xl mx-auto flex flex-col gap-16">

          <div className="flex flex-col gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl font-mono font-bold tracking-tighter mb-4">Schreib uns.</h2>
              <p className="text-xl text-muted-foreground">Kein Kontaktformular. Kein Hin und Her. Einfach direkt — per E-Mail oder WhatsApp. Wir melden uns innerhalb von 24 Stunden.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="mailto:hello@generics.studio"
                className="group flex-1 flex flex-col gap-4 bg-foreground text-background p-10 hover:bg-background hover:text-foreground transition-all duration-500"
              >
                <Mail size={32} strokeWidth={1.5} />
                <div>
                  <p className="text-sm uppercase tracking-widest mb-1 opacity-60">E-Mail</p>
                  <p className="text-xl font-mono font-bold">hello@generics.studio</p>
                </div>
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=41794059955"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-1 flex flex-col gap-4 bg-foreground text-background p-10 hover:bg-background hover:text-foreground transition-all duration-500"
              >
                <MessageCircle size={32} strokeWidth={1.5} />
                <div>
                  <p className="text-sm uppercase tracking-widest mb-1 opacity-60">WhatsApp</p>
                  <p className="text-xl font-mono font-bold">+41 79 405 99 55</p>
                </div>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl font-mono font-bold tracking-tighter mb-4">Oder direkt einen Termin buchen.</h2>
              <p className="text-xl text-muted-foreground">Kostenloses 30-Minuten-Gespräch. Kein Druck, nur ein offenes Gespräch über dein Projekt.</p>
            </div>
            <Booking />
          </div>

        </div>
      </section>
    </main>
  );
}
