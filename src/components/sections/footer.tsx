import { GenericsStudioLogo } from "../svgs/genericsstudiologo";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/genericsstudio/" },
  { label: "Cosmos", href: "https://www.cosmos.so/genericsstudio" },
];

export default async function Footer() {
  const t = await getTranslations("footer");
  const links = t.raw("links") as { label: string; href: string }[];

  return (
    <footer className="border-t border-border pt-16 pb-8">
      <div className="container px-10 max-w-7xl mx-auto flex flex-col gap-16">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          <div className="flex flex-col gap-6">
            <Link href="/">
              <GenericsStudioLogo className="h-10 w-auto" />
            </Link>
            <div className="flex flex-col gap-1 font-mono text-sm text-muted-foreground">
              <a
                href="mailto:hello@generics.studio"
                className="hover:text-foreground transition-colors duration-300"
              >
                hello@generics.studio
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=41794059955"
                className="hover:text-foreground transition-colors duration-300"
              >
                +41 79 405 99 55
              </a>
            </div>
          </div>

          <div className="flex gap-16 lg:gap-24">
            <div className="flex flex-col gap-4">
              <span className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
                {t("pages")}
              </span>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-brand transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <span className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
                {t("social")}
              </span>
              <ul className="flex flex-col gap-2">
                {socials.map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:text-brand transition-colors duration-300"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t border-border pt-8">
          <p className="font-mono text-xs text-muted-foreground tracking-[0.1em]">
            © {new Date().getFullYear()} Generics Studio. {t("copyright")}
          </p>
          <Link
            href="/imprint"
            className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors duration-300 tracking-[0.1em]"
          >
            {t("imprint")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
