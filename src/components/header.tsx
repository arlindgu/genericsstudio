"use client";

import { usePathname } from "next/navigation";

export default function Header() {

    const pathname = usePathname();

    return (
      <header className="w-full">
        <div className="text-sm p-1 px-2 flex flox-row align-center justify-between border-b border-t border-white">
            <a href="/" className="uppercase">{pathname}</a>
            <a className="uppercase">Contact</a>
        </div>
            
        </header>
    );}