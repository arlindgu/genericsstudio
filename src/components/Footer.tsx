"use client"

import Link from 'next/link'

export default function Footer() {
    const handleLinkClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-background/80 shadow-xs border-t backdrop-blur-2xl bottom-0 inset-x-0 z-2 fixed p-2">
            <div className="flex flex-row justify-center md:justify-between flex-wrap gap-4 p-2">
                <p className="text-sm text-night-700">
                    &copy; {new Date().getFullYear()} Generics Studio. All rights reserved.
                </p>
                <div className="flex flex-row gap-4 text-xs text-night-700 items-center">
                    <Link href="/legal/imprint" onClick={handleLinkClick}>Imprint</Link>
                    <Link href="/legal/privacy-policy" onClick={handleLinkClick}>Privacy Policy</Link>
                </div>
            </div>
        </footer>
    )
}
