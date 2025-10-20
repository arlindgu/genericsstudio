import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import localFont from "next/font/local";
import { SpeedInsights } from "@vercel/speed-insights/next";


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

  return (
    <html lang="de-CH" className="light">
      <body
        suppressHydrationWarning
        className={`${generalSans.variable} main-h-screen flex flex-col`}
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
