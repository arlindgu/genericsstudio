"use client";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import localFont from "next/font/local";
import { useEffect, useState } from "react";


// Import General Sans font using next/font/local
export const generalSans = localFont({
  src: [
    {
      path: "../../public/fonts/general-sans/GeneralSans-Variable.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-general-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
        
  const [theme, setTheme] = useState("light");

  const Time = new Date();
  const hour = Time.getHours();

  if (hour >= 13 || hour <= 6) {
    // Night time: 7 PM - 6 AM
    if (theme !== "dark") {
      setTheme("dark");
    }
  } else {
    // Day time: 7 AM - 6 PM
    if (theme !== "light") {
      setTheme("light");
    }
  }

  return (
    <html lang="en" className={theme}>
      <body suppressHydrationWarning className={`${generalSans.variable} main-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
