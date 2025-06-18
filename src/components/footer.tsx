import Link from "next/link";

export default function Footer() {

interface FooterLinks {
  href: string;
  label: string;
}

const footerLinks: FooterLinks[] = [
  { href: "/", label: "home" },
  { href: "https://github.com/arlindgu/", label: "github" },
  { href: "/case-studies", label: "cases studies" },
];


    return (
      <footer className="bg-background self-center flex flex-row bottom-0 py-2 border-t w-full justify-center z-10">
        {footerLinks.map((link, index) => (
          <Link key={index} className="link p-2 uppercase" href={link.href}>
            {link.label}
          </Link>
        ))}
      </footer>
    );}