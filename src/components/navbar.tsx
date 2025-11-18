import { GenericsStudioLogo } from "./svgs/genericsstudiologo";

export default function Navbar() {
    return (
        <nav className="w-full py-6 bg-background px-10 flex items-center z-10 fixed justify-between">
            <GenericsStudioLogo className="h-12 w-auto" />
            <ul className="flex items-center gap-8">
                <li><a href="#projects" className="hover:underline">Projects</a></li>
                <li><a href="#process" className="hover:underline">Process</a></li>
                <li><a href="#pricing" className="hover:underline">Pricing</a></li>
                <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
        </nav>
    )
}