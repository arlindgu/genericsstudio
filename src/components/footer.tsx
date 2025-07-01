"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {

    const FooterLinks = {
        "Home": "/",
        "About": "/about",
        "Case Studies": "/case-studies",
        "Contact": "/contact",
        "Imprint": "/imprint",
        "Pricing": "/pricing"
    }

    return (
        <footer className="bg-background z-1">
                <div className="flex flex-col flex-wrap">
                    {Object.entries(FooterLinks).map(([label, href], i) => (
                        <motion.p
                            animate={{ y: 0, opacity: 1 }}
                            initial={{ y: 100, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 + i * 0.1 }}
                            key={href}
                            className="border-t last:border-b p-2 text-base uppercase font-bold"
                        >
                        <Link href={href}>
                                {label}
                            </Link>
                        </motion.p>
                    ))}
                </div>
        </footer>
    );
    }