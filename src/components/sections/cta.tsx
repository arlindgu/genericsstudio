import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CTA() {
    return (
      <section className="h-[calc(100vh/2)] bg-foreground text-background flex-col flex justify-center items-center">
        <h3>Bereit, Ihr Projekt zu starten?</h3>
        <p>
          Kontaktieren Sie uns noch heute, um Ihre Vision zum Leben zu erwecken.
        </p>
        <Button asChild variant="outline" className="mt-6 text-foreground">
          <Link href="/contact">Kontakt aufnehmen</Link>
        </Button>
      </section>
    );
}