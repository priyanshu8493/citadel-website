"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Marquee from "./Marquee";

// --- 1. COUNTDOWN LOGIC ---
function useCountdown(targetDate: string) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = { days: 0, hours: 0, mins: 0, secs: 0 };
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        mins: Math.floor((difference / 1000 / 60) % 60),
        secs: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);
  return timeLeft;
}

export default function Hero() {
  const timeLeft = useCountdown("2026-05-15T00:00:00");

  return (
    <section className="relative h-screen w-full flex flex-col items-center overflow-x-hidden bg-transparent antialiased">
      
      {/* LAYER 1: FILM GRAIN / NOISE (This is the "Secret Sauce" of premium sites) */}
      <div className="absolute inset-0 z-20 opacity-[0.03] pointer-events-none bg-[url('https://res.cloudinary.com/dlb7qps6p/image/upload/v1677610014/noise_fpxrpk.png')]" />

      {/* LAYER 2: DARK VIGNETTE (Focuses the eye on the center) */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-transparent to-black pointer-events-none" />

      {/* 2. NAVBAR BUFFER */}
      <div className="h-24 md:h-28 w-full shrink-0 z-30"></div>

      {/* 3. MAIN CENTERED CONTENT */}
      <div className="flex-grow flex flex-col items-center justify-center z-30 px-6 max-w-6xl w-full text-center pb-20">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          
          {/* TITLE: Hard Shadow for a "Production" feel */}
          <motion.h1 
            className="font-cinzel text-5xl md:text-7xl lg:text-[7.5rem] font-black tracking-tighter leading-none mb-0"
            style={{
              background: "linear-gradient(to bottom, #FCEECA 0%, #C4923E 35%, #8B5A2B 70%, #3E200C 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0px 8px 0px rgba(0, 0, 0, 0.4))" // Changed to a hard-edge shadow
            }}
          >
            CITADEL
          </motion.h1>

          {/* VERSION MARKER */}
          <div className="text-2xl md:text-4xl font-cinzel font-bold tracking-[0.3em] mt-[-6px] lg:mt-[-12px] mb-2 text-[#C4923E] opacity-90">
            1.0
          </div>
          
          <h2 className="font-federo text-lg md:text-2xl mb-6 uppercase tracking-[0.2em] text-[#C4923E]">
            the dharma of code.
          </h2>

          <p className="max-w-2xl text-[#d4c7b0]/80 text-xs md:text-base font-sans font-normal leading-relaxed mb-12 mx-auto">
            Eastern India's premier Techno-Vedic Hackathon. <br /> Forge your destiny in the 30-hour Kurukshetra of innovation.
          </p>

          {/* ACTION BUTTONS */}
          <div className="flex flex-col lg:flex-row items-center gap-6 justify-center">
            
            {/* COMPACT COUNTDOWN: Cleaner, less "glowing" */}
            <div className="flex gap-5 px-8 py-4 bg-black/40 border border-[#C4923E]/20 rounded-xl backdrop-blur-md shadow-xl">
              {Object.entries(timeLeft).map(([key, value]) => (
                <div key={key} className="flex flex-col items-center justify-center min-w-[40px]">
                  <span className="text-[#C4923E] text-2xl font-bold tracking-tighter leading-none">
                    {String(value).padStart(2, '0')}
                  </span>
                  <span className="text-[9px] uppercase tracking-widest text-zinc-500 font-bold mt-1">
                    {key}
                  </span>
                </div>
              ))}
            </div>

            <a 
              href="http://citadel-hackathon.devfolio.co/"
              target="_blank"
              className="group relative flex items-center justify-center px-12 py-4 bg-[#276EF1] text-white font-space text-[14px] uppercase tracking-[0.2em] font-extrabold rounded-xl transition-all hover:bg-[#1a57cc] active:scale-95 shadow-[0_10px_30px_rgba(39,110,241,0.3)]"
            >
              Register on Devfolio
            </a>
            
            <button className="flex items-center justify-center gap-3 px-10 py-4 bg-transparent border border-[#C4923E]/40 text-[#C4923E] font-space text-[14px] uppercase tracking-[0.2em] font-extrabold rounded-xl hover:bg-[#C4923E]/5 transition-all active:scale-95 shadow-xl group">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 127.14 96.36" fill="currentColor">
                <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.31,60,73.31,53s5-12.74,11.43-12.74S96.2,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
              </svg>
              <span>Join Discord</span>
            </button>

          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 md:bottom-2 left-0 w-full z-50 pointer-events-none overflow-visible">
        <div className="pointer-events-auto">
          <Marquee />
        </div>
      </div>

    </section>
  );
}