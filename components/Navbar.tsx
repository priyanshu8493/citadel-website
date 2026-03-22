"use client";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "HOME", href: "#" },
  { name: "TIMELINE", href: "#timeline" },
  { name: "PRIZES", href: "#prizes" },
  { name: "SPONSORS", href: "#sponsors" },
  { name: "MENTORS", href: "#mentors" },
  { name: "CREW", href: "#crew" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full h-20 md:h-24 z-[100] px-6 md:px-12 flex items-center justify-between bg-gradient-to-b from-black/95 via-black/40 to-transparent backdrop-blur-[1px]">
      
      {/* 1. BRANDING CLUSTER (Overhanging Large Logos) */}
      <div className="flex items-center gap-1 md:gap-2 relative"> 
        {/* UEM Logo */}
        <div className="relative w-28 h-28 md:w-36 md:h-36 shrink-0 mt-2">
          <Image 
            src="/uem-logo.png" 
            alt="UEM Logo" 
            fill 
            sizes="(max-width: 768px) 112px, 144px"
            className="object-contain brightness-110" 
            priority // Added priority because this is a header element
          />
        </div>
        
        {/* Citadel Logo */}
        <div className="relative w-20 h-20 md:w-28 md:h-28 shrink-0 -ml-4 mt-2"> 
          <Image 
            src="/citadel-logo1.png" 
            alt="Citadel Icon" 
            fill 
            sizes="(max-width: 768px) 80px, 112px"
            className="object-contain" 
            priority
          />
        </div>
      </div>

      {/* 2. NAVIGATION LINKS */}
      <div className="hidden lg:flex items-center gap-10">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="font-outfit text-sm md:text-base font-black tracking-[0.25em] text-[#d4c7b0] hover:text-[#C4923E] transition-all duration-300 relative group"
          >
            {link.name}
            <span className="absolute -bottom-1 left-0 w-0 h-[2.5px] bg-[#C4923E] transition-all duration-300 group-hover:w-full" />
          </Link>
        ))}
      </div>

      {/* 3. CTA BUTTON */}
      <Link
        href="https://discord.gg/yourlink"
        target="_blank"
        className="px-8 py-3 bg-transparent border-2 border-[#C4923E]/70 text-[#C4923E] font-outfit text-sm font-black uppercase tracking-[0.2em] rounded-md hover:bg-[#C4923E]/10 transition-all active:scale-95"
      >
        JOIN DISCORD
      </Link>
    </nav>
  );
}