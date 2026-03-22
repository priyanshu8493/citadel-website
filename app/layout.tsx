import type { Metadata } from "next";
import { Cinzel, Kalam, Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Outfit } from "next/font/google";


const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "700", "900"], // 900 is the "Black" weight we need
});

// 1. Epic Title Font (Vedic/Historic feel)
const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "500", "600", "700", "800", "900"],
});

// 2. Scripture/Calligraphy Font (For that Hindi/Sanskrit experiment)
const kalam = Kalam({
  subsets: ["devanagari", "latin"],
  variable: "--font-kalam",
  weight: ["300", "400", "700"],
});

// 3. Premium Tech Font (For buttons, countdown labels, and small UI elements)
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

// 4. Standard Body Font (Clean and readable)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Citadel 1.0 | The Dharma of Code",
  description: "Eastern India's premier Techno-Vedic Hackathon. Forge your destiny in the 30-hour Kurukshetra of innovation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cinzel.variable} ${kalam.variable} ${spaceGrotesk.variable} ${inter.variable} font-sans bg-[#080705] text-[#d4c7b0] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}