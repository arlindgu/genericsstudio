"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {

    const FooterLinks = {
        "Home": "/",
        "About": "/about",
        "Services": "/services",
        "Contact": "/contact",
        "Case Studies": "/case-studies",
        "Restriced Access": "/login",
    }

    return (
        <motion.footer 
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut", type: "spring", stiffness: 100 }}
        className="bg-background border-t-[1.5px] border-licorice">
                <div className="flex flex-col flex-wrap">
                    {Object.entries(FooterLinks).map(([label, href], i) => (
                        <motion.p
                            animate={{ y: 0, opacity: 1 }}
                            initial={{ y: 100, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut", delay: 2.5 + i * 0.1, type: "spring", stiffness: 100 }}
                            key={href}
                            className="border-b-[1.5px] p-2 text-base uppercase font-bold"
                        >
                        <Link  href={href}>
                                {label}
                            </Link>
                        </motion.p>
                    ))}
                    <motion.div
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 2 }} 
                     className="mb-4 mt-4 flex flex-col self-center items-center">
                        <p className="text-sm text-center">
                            &copy; {new Date().getFullYear()} Generics Studio. All rights reserved.
                        </p>
                        <div className="flex flex-row gap-4 text-xs text-night-700">
                        <Link href="/legal/imprint">Imprint</Link>
                        <Link href="/legal/privacy-policy">Privacy Policy</Link>
                        </div>
                    </motion.div>
                </div>
        </motion.footer>
    );
    }