"use client";

import Link from "next/link";

export default function Footer() {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t z-2 py-4">
      <div className="container">

        <div className="flex flex-row justify-center md:justify-between flex-wrap gap-4">
          <div className="flex flex-row gap-4 text-xs items-center">
            <Link href="/imprint" onClick={handleLinkClick}>
              Imprint
            </Link>
            <Link href="/privacy-policy" onClick={handleLinkClick}>
              Privacy Policy
            </Link>
          </div>
          <p className="text-xs mt-0">
            &copy; {new Date().getFullYear()} Generics Studio. All rights
            reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
