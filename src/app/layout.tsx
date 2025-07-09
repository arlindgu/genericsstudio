import type { Metadata } from "next";
import { JetBrains_Mono, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

const robotoMonoNarrow = Roboto_Condensed({
  variable: "--font-roboto-mono-narrow",
  weight: ["400", "700", "900", "300", "500", "600", "800", "200", "100"],
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
        className={`${robotoMonoNarrow} ${jetBrainsMono.variable} subpixel-antialiased`}
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
