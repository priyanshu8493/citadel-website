"use client";
import { useState, useEffect } from "react";
import { Menu, X, Home, Calendar, Trophy, Globe, Users, Briefcase } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Added icons to the navigation array
  const navLinks = [
    { name: "Home", href: "#", icon: Home },
    { name: "Timeline", href: "#timeline", icon: Calendar },
    { name: "Prizes", href: "#prizes", icon: Trophy },
    { name: "Sponsors", href: "#sponsors", icon: Globe },
    { name: "Mentors", href: "#mentors", icon: Users },
    { name: "Crew", href: "#crew", icon: Briefcase },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-[#080705]/90 backdrop-blur-xl border-b border-[#C4923E]/20 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]" 
          : "bg-transparent py-6 md:py-8"
      }`}
    >
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Logos Group - Scaled up for more impact */}
        <div className="flex items-center gap-6 md:gap-8">
          <img 
            src="/uem-logo.png" 
            alt="UEM Logo" 
            className="h-16 md:h-20 w-auto object-contain transition-all" 
          />
          <div className="h-10 w-[2px] bg-[#C4923E]/30 hidden sm:block" />
          <img 
            src="/citadel-logo.png" 
            alt="Citadel 1.0" 
            className="h-14 md:h-16 lg:h-20 w-auto object-contain drop-shadow-[0_0_15px_rgba(196,146,62,0.3)] transition-all" 
          />
        </div>

        {/* Desktop Links - Bolder, larger, with icons */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="flex items-center gap-2 font-space text-[12px] xl:text-[14px] font-bold uppercase tracking-[0.2em] text-[#d4c7b0] hover:text-[#C4923E] transition-colors relative group"
            >
              <link.icon className="w-4 h-4 xl:w-5 xl:h-5 text-[#C4923E]/70 group-hover:text-[#C4923E] transition-colors mb-[2px]" />
              <span>{link.name}</span>
              {/* Antique underline effect */}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#C4923E] transition-all duration-300 group-hover:w-full shadow-[0_0_10px_rgba(196,146,62,0.5)]" />
            </a>
          ))}
        </div>

        {/* Join Discord Button - Styled to match the antique theme */}
        <div className="hidden md:block">
          <button className="px-8 py-3 bg-black/50 border border-[#C4923E]/50 text-[#C4923E] font-space text-[12px] uppercase tracking-[0.2em] font-bold hover:bg-[#C4923E]/10 transition-all rounded-lg shadow-xl backdrop-blur-md">
            Join Discord
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-[#C4923E]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu with Icons */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#080705]/95 backdrop-blur-3xl border-b border-[#C4923E]/20 py-8 px-8 flex flex-col gap-8 shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="flex items-center gap-4 font-space font-bold text-lg tracking-[0.2em] text-[#d4c7b0] uppercase hover:text-[#C4923E]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <link.icon className="w-6 h-6 text-[#C4923E]" />
              {link.name}
            </a>
          ))}
          <button className="mt-4 w-full px-8 py-4 bg-[#C4923E]/10 border border-[#C4923E]/50 text-[#C4923E] font-space text-sm uppercase tracking-[0.2em] font-bold rounded-lg">
            Join Discord
          </button>
        </div>
      )}
    </nav>
  );
}