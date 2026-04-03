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

      <div className="flex items-center gap-2 md:gap-3 relative">
        <div className="relative w-22 h-22 md:w-25 md:h-25 shrink-0">
          <Image
            src="/iemuem.png"
            alt="UEM Logo"
            fill
            sizes="(max-width: 768px) 90px, 100px"
            className="object-contain"
            priority
          />
        </div>

        <div className="relative w-16 h-16 md:w-20 md:h-20 shrink-0">
          <Image
            src="/citadel-logo1.png"
            alt="Citadel Logo"
            fill
            sizes="(max-width: 768px) 64px, 80px"
            className="object-contain"
            priority
          />
        </div>

        <div className="relative w-16 h-16 md:w-20 md:h-20 shrink-0">
          <Image
            src="/iic.png"
            alt="IIC Logo"
            fill
            sizes="(max-width: 768px) 64px, 80px"
            className="object-contain"
            priority
          />
        </div>
      </div>

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

      <Link
        href="https://discord.gg/tRxndfSKY"
        target="_blank"
        className="px-8 py-3 bg-transparent border-2 border-[#C4923E]/70 text-[#C4923E] font-outfit text-sm font-black uppercase tracking-[0.2em] rounded-md hover:bg-[#C4923E]/10 transition-all active:scale-95"
      >
        JOIN DISCORD
      </Link>
    </nav>
  );
}