
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { JetBrains_Mono } from "next/font/google";
import Footer from "@/components/sections/footer";


const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jet-brains-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://generics.studio"),
  title: {
    default: "Generics Studio",
    template: "%s | Generics Studio",
  },
  description: "Generics Studio – Zeitloses Webdesign, Branding und Grafikdesign aus der Schweiz. Massgeschneidert, schnell und unverkennbar.",
  keywords: ["Webdesign", "Branding", "Grafikdesign", "Printdesign", "Logo", "Schweiz", "Studio"],
  authors: [{ name: "Generics Studio", url: "https://generics.studio" }],
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: "https://generics.studio",
    siteName: "Generics Studio",
    title: "Generics Studio",
    description: "Zeitloses Webdesign, Branding und Grafikdesign aus der Schweiz.",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Generics Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Generics Studio",
    description: "Zeitloses Webdesign, Branding und Grafikdesign aus der Schweiz.",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${jetBrainsMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
