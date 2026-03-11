import Link from "next/link";
import { AnimateIn } from "@/components/ui/animate-in";

export default function PageHeader({
  title,
  children,
}: Readonly<{
  title: string;
  children?: React.ReactNode;
}>) {
  return (
    <section className="bg-foreground text-background pt-24 pb-16 border-b border-background/10">
      <div className="container px-10 max-w-7xl mx-auto flex flex-col gap-8">
        <AnimateIn>
        <div className="flex items-center gap-2 font-mono text-xs tracking-[0.2em] uppercase text-background/40">
          <Link href="/" className="hover:text-background transition-colors duration-300 z-1">
            Generics Studio
          </Link>
          <span>/</span>
          <span>{title}</span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <h1 className="font-mono font-bold tracking-tighter leading-[0.875] text-6xl lg:text-8xl">
            {title}
          </h1>
          {children && (
            <p className="text-background/60 text-base max-w-sm leading-relaxed">
              {children}
            </p>
          )}
        </div>
        </AnimateIn>
      </div>
    </section>
  );
}
