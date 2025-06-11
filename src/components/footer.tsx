export default function Footer() {

interface FooterLinks {
  href: string;
  label: string;
}

const footerLinks: FooterLinks[] = [
  { href: "/", label: "home" },
  { href: "/blog", label: "blog" },
  { href: "https://github.com/arlindgu/", label: "github" },
  { href: "/references", label: "references" },
];


    return (
      <footer className="self-center flex flex-row gap-4 bottom-0 absolute py-5">
        {footerLinks.map((link, index) => (
          <a key={index} className="link" href={link.href}>
            {link.label}
          </a>
        ))}
      </footer>
    );}