import { GenericsStudioLogo } from "./svgs/genericsstudiologo";

export default function Navbar() {
    return (
        <nav className="w-full py-6 bg-background/55 px-10 flex flex-col lg:flex-row items-center sticky top-0 z-250 backdrop-blur-2xl justify-between">
            <GenericsStudioLogo className="h-12 w-auto my-4" />
            <ul className="flex items-center gap-8">
                <li><a href="#projects" className="hover:underline">Projects</a></li>
                <li><a href="#process" className="hover:underline">Process</a></li>
                <li><a href="#pricing" className="hover:underline">Pricing</a></li>
                <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
        </nav>
    )
}