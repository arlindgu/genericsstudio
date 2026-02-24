import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-foreground text-background py-24">
      <div className="container px-10 max-w-7xl mx-auto">
        <div className=" pt-16 flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <h2 className="text-6xl lg:text-8xl font-mono font-bold tracking-tighter leading-none">
            Dein nächstes<br />Projekt beginnt<br />hier.
          </h2>
          <div className="flex flex-col gap-6 lg:items-end">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-background text-foreground px-8 py-4 font-medium text-lg hover:gap-5 transition-all duration-300 w-fit"
            >
              Jetzt anfragen
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
