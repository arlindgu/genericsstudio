import type { Metadata } from "next";
import { Instrument_Serif, Instrument_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Background from "@/components/Background";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  subsets: ["latin"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  weight: "variable",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VIVID Studios – Web Design & Development for Startups and SMEs",
  keywords: [
    "VIVID Studios",
    "web design agency",
    "custom websites",
    "responsive web development",
    "SEO optimization",
    "modern website design",
    "frontend development",
    "creative web design",
    "user experience design",
    "web development for startups",
    "web design for small businesses",
    "SME website solutions",
    "startup website design",
    "Switzerland web agency"
  ],
  authors: [{ name: "Arlind Gurgurovci", url: "https://arlind.io" }],
  creator: "Arlind Gurgurovci",
  description:
    "VIVID Studios is a Switzerland-based web design and development agency that creates custom, responsive, and SEO-optimized websites for startups and SMEs. We combine modern design, clean code, and user-focused strategy to boost online visibility and drive business growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSerif.variable} ${instrumentSans.variable}`}
      >
        
        <div className="flex min-h-dvh flex-col">
          
          <Header />
          
          <div className="flex flex-1 p-8">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
