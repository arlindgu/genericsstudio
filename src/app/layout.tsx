import type { Metadata } from "next";
import { Instrument_Serif, Instrument_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/Footer";

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
  title: "Generic Studio – Web Design & Development for Startups and SMEs",
  keywords: [
    "Generic Studio",
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
  authors: [{ name: "Generic Studio", url: "https://arlind.io" }],
  creator: "Generic Studio",
  description:
    "Generic Studio is a Switzerland-based web design and development agency that creates custom, responsive, and SEO-optimized websites for startups and SMEs. We combine modern design, clean code, and user-focused strategy to boost online visibility and drive business growth.",
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
        <div className="min-h-screen flex flex-col">
                            <Header />
          <main className="flex-1 flex items-center justify-center px-4 py-8">
            <div className="w-full md:max-w-5xl">

              {children}
                        
            </div>
          </main>
<Footer />
        </div>
      </body>
    </html>
  );
}
