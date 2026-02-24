export default function SectionTitle({
  title, children, dark
}: {
  title: string;
    children: React.ReactNode;
    dark?: boolean;
}) {
  return (
    <div className="max-w-2xl flex flex-col gap-6">
      {dark ? (
        <>
          <h2 className="text-5xl lg:text-6xl font-mono text-background font-bold tracking-tighter">
            {title}
          </h2>
          <p className="text-xl text-background">{children}</p>
        </>
      ) : (
        <>
          <h2 className="text-5xl lg:text-6xl font-mono font-bold tracking-tighter">{title}</h2>
          <p className="text-xl text-muted-foreground">{children}</p>
        </>
      )}
    </div>
  );
}