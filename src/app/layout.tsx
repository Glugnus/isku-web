import type { Viewport } from "next";
import { Oswald, Orbitron, Inter } from "next/font/google";
import { jsonLd } from "@/config/metadata";
import "@/app/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-orbitron",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A0B14",
  width: "device-width",
  initialScale: 1,
};

export { metadata } from "@/config/metadata";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`dark ${inter.variable} ${oswald.variable} ${orbitron.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-background text-white font-sans antialiased selection:bg-primary selection:text-black">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
