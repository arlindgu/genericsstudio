import { ReactNode } from "react";

interface PageTitleProps {
  title: string;
  children: ReactNode;
}

export default function PageTitle({ title, children }: PageTitleProps) {
  return (
    <section className=" text-background bg-foreground">
      <div className="container">
        <h1 className="font-mono">{title}</h1>
        <div className="lg:max-w-1/2">{children}</div>
      </div>
    </section>
  );
}
