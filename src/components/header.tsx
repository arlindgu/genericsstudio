"use client";

import { usePathname } from "next/navigation";

export default function Header() {

    const pathname = usePathname();

    return (
      <header className="w-full sticky top-0 z-1 bg-background border-white border-b p-4 shadow-white">
        <div className="text-sm flex flox-row align-center justify-center">
            <a href="/" className="uppercase">{pathname}</a>
        </div>
            
        </header>
    );}