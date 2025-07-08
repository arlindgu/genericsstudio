"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {

    const FooterLinks = {
        "Home": "/",
        "About": "/about",
        "Pricing": "/pricing",
        "Contact": "/contact",
        "Case Studies": "/case-studies",
        "Imprint": "/imprint",
        "Restriced Access": "/login",
    }

    return (
        <footer className="bg-background z-1 border-t-[1.5px] border-licorice">
                <div className="flex flex-col flex-wrap">
                    {Object.entries(FooterLinks).map(([label, href], i) => (
                        <motion.p
                            animate={{ y: 0, opacity: 1 }}
                            initial={{ y: 100, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 + i * 0.1, type: "spring", stiffness: 100 }}
                            key={href}
                            className="border-b-[1.5px] p-2 text-base uppercase font-bold"
                        >
                        <Link  href={href}>
                                {label}
                            </Link>
                        </motion.p>
                    ))}
                    <div className="mb-4 mt-4">
                        <p className="text-sm text-center text-muted-foreground">
                            &copy; {new Date().getFullYear()} Generics Studio. All rights reserved.
                        </p>
                    </div>
                </div>
        </footer>
    );
    }