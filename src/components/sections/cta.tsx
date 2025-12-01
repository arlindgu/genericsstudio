import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CTA() {
    return (
      <section className="h-[calc(100vh/2)] bg-foreground">
        <div className="flex items-center justify-center h-full px-6">
          <Card className="rounded-none shadow-none h-fit">
            <CardContent className="flex flex-col items-center justify-center text-center py-16 px-8">
              <h2 className="text-4xl font-bold mb-4">
                Bereit, Ihr Projekt zu starten?
              </h2>
              <p className="mb-6 max-w-xl">
                Kontaktieren Sie uns noch heute für eine unverbindliche Beratung
                und erfahren Sie, wie wir Ihnen helfen können, Ihre Designziele
                zu erreichen.
              </p>
              <Button variant="default" size="lg">
                Kontakt aufnehmen
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
}