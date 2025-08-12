import { ReactNode } from "react";

interface PageTitleProps {
  title: string;
  children: ReactNode;
}

export default function PageTitle({ title, children }: PageTitleProps) {
  return (
    <section className="h-dvh flex flex-col items-center justify-center -mt-32">
      <section className="p-4 text-center">
        <h1 className="font-bold">{title}</h1>
        <h2 className="text-muted-foreground">{children}</h2>
      </section>
    </section>
  );
}
