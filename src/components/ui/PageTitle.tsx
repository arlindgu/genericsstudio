import { ReactNode } from "react";

interface PageTitleProps {
  title: string;
  children: ReactNode;
}

export default function PageTitle({ title, children }: PageTitleProps) {
  return (
    <section className="-mb-12 lg:-mb-24">
      <div className="container">
        <h1>{title}</h1>
        <div className="max-w-lg">{children}</div>
      </div>
    </section>
  );
}
