import CircularText from "../CircularText";
import { Chair } from "../svgs/chair";

export default function PageHeader({
  title,
  children,
}: Readonly<{
  title: string;
  children?: React.ReactNode;
}>) {
  return (
    <section className="min-h-[50vh] bg-foreground text-background py-24 flex items-center justify-center">
      <div className="flex flex-col lg:flex-row items-center container px-10">
        <div className="mb-16 lg:mb-0 relative lg:flex-1">
          <CircularText
            text="MADE*BY*GENERICS*STUDIO*"
            onHover="speedUp"
            spinDuration={20}
            className=""
          />
        </div>
        <div className="relative lg:flex-3 text-center lg:text-left">
          <h1 className="text-5xl lg:text-7xl font-bold font-mono">{title}</h1>
          <p className="max-w-xl mt-2">{children}</p>
        </div>
      </div>
    </section>
  );
}