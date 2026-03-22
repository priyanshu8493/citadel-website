"use client";

import React from "react";

export default function Marquee() {
  const baseText = "THE DHARMA OF CODE • 30 HOURS OF INNOVATION • ENTER THE ARENA • ";
  
  // We repeat the text 10 times to create a massive continuous string
  const repeatedText = Array(10).fill(baseText).join("");

  return (
    <div className="relative w-full overflow-hidden py-4 z-50 shadow-[0_-10px_40px_rgba(158,27,27,0.4)] -rotate-1 scale-[1.05] origin-center bg-gradient-to-r from-[#800000] via-[#C8102E] to-[#800000] border-y border-white/20 backdrop-blur-sm select-none">
      
      {/* GLASSY TOP HIGHLIGHT */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      
      {/* CINEMATIC GRAIN OVERLAY */}
      <div className="absolute inset-0 opacity-[0.06] bg-[url('https://res.cloudinary.com/dlb7qps6p/image/upload/v1677610014/noise_fpxrpk.png')] pointer-events-none" />

      {/* THE SCROLLING CONTAINER */}
      <div className="animate-marquee-ultra-fast cursor-pointer">
        <span className="font-outfit text-base md:text-xl font-black uppercase tracking-[0.3em] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] pr-4">
          {repeatedText}
        </span>
      </div>

      {/* BOTTOM HIGHLIGHT */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-black/20 to-transparent" />
    </div>
  );
}