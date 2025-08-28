import { ReactNode } from "react";

interface PageTitleProps {
  title: string;
  children: ReactNode;
}

export default function PageTitle({ title, children }: PageTitleProps) {
  return (
    <section>
      <div className="container">
        <h1>{title}</h1>
        <p className="max-w-lg">{children}</p>
      </div>
    </section>
  );
}
