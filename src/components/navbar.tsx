import { GenericsStudioLogo } from "./svgs/genericsstudiologo";

export default function Navbar() {
    return (
        <nav className="w-full backdrop-blur-sm bg-background/75 py-2 px-10 flex flex-col lg:flex-row items-center sticky top-0 z-2 justify-between">
            <GenericsStudioLogo className="h-12 w-auto my-4" />
            <ul className="flex items-center gap-8">
                <li><a href="#projects" className="hover:underline">Unsere Arbeit</a></li>
                <li><a href="#contact" className="hover:underline">Kontakt</a></li>
            </ul>
        </nav>
    )
}