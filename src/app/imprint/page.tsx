import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und rechtliche Angaben von Generics Studio.",
  robots: { index: false, follow: false },
};

export default function ImprintPage() {
    return (
      <main>
        <section className="h-[50vh] border">
          <div className="container">
            <div className="flex border bg-amber-300 justify-end">
              <h1 className="text-4xl font-bold mb-6">Imprint</h1>
            </div>
          </div>
        </section>
      </main>
    );
}