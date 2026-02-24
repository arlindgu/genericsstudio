import { GenericsStudioLogo } from "./svgs/genericsstudiologo";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Navbar() {
    return (
      <nav className="w-full backdrop-blur-sm bg-background/75 py-2 px-10 flex items-center sticky top-0 z-2 justify-between">
          <Link href="/" className="">
            <GenericsStudioLogo className="h-12 w-auto my-4" />
          </Link>
        <ul className="flex items-center gap-8">
          <li>
            <Button asChild>
              <a href="/contact" className="">
                Kontakt
              </a>
            </Button>
          </li>
        </ul>
      </nav>
    );
}