import { Chair } from "../svgs/chair";


const Socials = [
  {
    name: "Twitter",
    href: "https://twitter.com/generics_studio",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/generics-studio/",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/generics.studio/",
  },
]

export default function Footer() {
    return (
      <footer className="h-screen relative py-6 bg-background px-10 flex flex-col items-center justify-center">
        <div className="flex gap-24 items-center">
          <ul className="text-center">
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li className="mb-4">
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li className="mb-4">
              <a href="#services" className="hover:underline">
                Services
              </a>
            </li>
            <li className="mb-4">
              <a href="#work" className="hover:underline">
                Our Work
              </a>
            </li>
            <li className="mb-4">
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
          <div className="text-center flex flex-col items-center justify-center">
            <Chair className="w-32 h-32 mb-6 scale-x-[-1] " />
            <p>hey@generics.studio</p>
            <p>+41 79 405 99 55</p>
          </div>

          <ul className="text-center">
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

        <p className="self-end text-center absolute inset-12 text-sm mx-auto">
          &copy; {new Date().getFullYear()} Generics Studio. All rights
          reserved.
        </p>
      </footer>
    );
}