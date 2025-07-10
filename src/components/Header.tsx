"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {

    const pathname = usePathname();

    return (
      <header className="w-full sticky top-0 z-1 p-2 border-b-[1.5] border-licorice bg-background shadow-xs">
        <div className="text-sm flex flox-row justify-between items-center">
            <p  className="uppercase font-body font-extrabold">{pathname}</p>
            <Link href="/" className="font-extrabold font-body uppercase">Generics Studio</Link>
        </div>
            
        </header>
    );}