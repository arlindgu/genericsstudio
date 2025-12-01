import { Chair } from "../svgs/chair";
import { GenericsStudioLogo } from "../svgs/genericsstudiologo";


const Socials = [
  {
    name: "Cosmos",
    href: "https://www.cosmos.so/genericsstudio",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/genericsstudio/",
  },
]

export default function Footer() {
    return (
      <footer className="h-screen relative py-6 px-10 flex flex-col items-center justify-center">
        <div className="flex flex-col lg:flex-row gap-6 mb-12 lg:mb-0 lg:gap-24 items-center">
          <ul className="text-center">
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li className="mb-4">
              <a href="#about" className="hover:underline">
                Das Studio
              </a>
            </li>
            <li className="mb-4">
              <a href="#services" className="hover:underline">
                Dienstleistungen
              </a>
            </li>
            <li className="mb-4">
              <a href="#work" className="hover:underline">
                Unsere Arbeit
              </a>
            </li>
            <li className="mb-4">
              <a href="#contact" className="hover:underline">
                Kontakt
              </a>
            </li>
          </ul>
          <div className="text-center flex flex-col items-center justify-center">
            <Chair className="w-32 h-32 mb-6 scale-x-[-1] " />
            <a className="hover:underline" href="mailto:hello@generics.studio">
              hello@generics.studio
            </a>
            <a className="hover:underline" href="https://api.whatsapp.com/send/?phone=41794059955">
              +41 79 405 99 55
            </a>
          </div>

          <ul className="text-center flex gap-8 lg:block" >
            {Socials.map((social) => (
              <li key={social.name} className="mb-4">
                <a
                  href={social.href}
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col lg:flex-row w-full justify-between items-center px-12 absolute bottom-8">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Generics Studio. All rights
            reserved.
          </p>
          <ul className="flex gap-6 text-xs">
            <li className="">
              <a href="#" className="hover:underline">
                Datenschutzerklärung
              </a>
            </li>
            <li className="">
              <a href="#" className="hover:underline">
                Impressum
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
}