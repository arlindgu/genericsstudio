import type { Metadata } from "next";
import { Instrument_Serif, Instrument_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";

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
  title: "VIVID Studios",
  keywords: ["studios", "web design", "website", "development"],
  authors: [{ name: "Arlind Gurgurovci", url: "https://arlind.io" }],
  creator: "Arlind Gurgurovci",
  description: "VIVID Studios is a web design and development studio that creates unique and engaging websites.",
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
