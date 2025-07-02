"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {

    const pathname = usePathname();

    return (
      <header className="w-full sticky top-0 z-1 p-2 border-b border-licorice bg-background  shadow-xs">
        <div className="text-sm flex flox-row align-center justify-center">
            <Link href="/" className="uppercase">{pathname}</Link>
        </div>
            
        </header>
    );}