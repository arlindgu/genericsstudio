import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import localFont from "next/font/local";
import { SpeedInsights } from "@vercel/speed-insights/next";
import {JetBrains_Mono} from "next/font/google";

export const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "700"],
  display: "swap",
});

// Import General Sans font using next/font/local
const generalSans = localFont({
  src: "../fonts/GeneralSans-Variable.woff2",
  variable: "--font-general-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="de-CH" className="light">
      <body
        suppressHydrationWarning
        className={`${generalSans.variable} ${jetBrainsMono.variable} main-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">
          {children}
          <SpeedInsights />
        </main>
        <Footer />
      </body>
    </html>
  );
}
