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
      <footer className="self-center flex flex-row bottom-0 py-2 w-full justify-center">
        {footerLinks.map((link, index) => (
          <Link key={index} className="link p-2 uppercase" href={link.href}>
            {link.label}
          </Link>
        ))}
      </footer>
    );}