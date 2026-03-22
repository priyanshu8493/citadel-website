import type { Metadata } from "next";
import { Inter, Cinzel_Decorative, Space_Grotesk, Federo } from "next/font/google";
import "./globals.css";

// Configure our 4 fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: 'swap' });
const cinzel = Cinzel_Decorative({ weight: ["700", "900"], subsets: ["latin"], variable: "--font-cinzel", display: 'swap' });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space", display: 'swap' });
const federo = Federo({ weight: "400", subsets: ["latin"], variable: "--font-federo", display: 'swap' });

export const metadata: Metadata = {
  title: "Citadel 1.0 | The Dharma of Code",
  description: " Eastern India's premier Techno-Vedic Hackathon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${cinzel.variable} ${space.variable} ${federo.variable} font-sans bg-[#0d0a08] text-[#e5e1d8] antialiased`}>
        {children}
      </body>
    </html>
  );
}