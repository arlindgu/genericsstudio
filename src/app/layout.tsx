import type { Metadata } from "next";
import { Instrument_Serif, Instrument_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  subsets: ["latin"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  weight: "400",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  metadataBase: new URL("https://generics.studio"),
  applicationName: "Generics Studio",
  title: "Generics Studio",
  keywords: [
    "Generics Studio",
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
  authors: [{ name: "Generics Studio", url: "https://generics.studio/" }],
  creator: "Generics Studio",
  description:
    "Generics Studio is a Switzerland-based web design and development agency that creates custom, responsive, and SEO-optimized websites for startups and SMEs. We combine modern design, clean code, and user-focused strategy to boost online visibility and drive business growth.",
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
        <div className="h-dvh flex flex-col">
                            <Header />
          <main className="flex-1 flex items-center justify-center px-4 py-16">
            <div className="w-full md:max-w-xl xl:max-w-5xl">
              {children}
            </div>
          </main>
<Footer />
        </div>
      </body>
    </html>
  );
}
