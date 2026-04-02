"use client";
import React from "react"
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Marquee from "./Marquee";

// --- HYDRATION SECURE COUNTDOWN ---
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
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    // Load Devfolio SDK
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="relative h-screen w-full flex flex-col items-center overflow-x-hidden bg-transparent antialiased">
      
      {/* VIGNETTE OVERLAY */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/95 via-transparent to-black pointer-events-none" />

      {/* NAVBAR BUFFER */}
      <div className="h-24 md:h-28 w-full shrink-0 z-30"></div>

      {/* MAIN CONTENT */}
      <div className="flex-grow flex flex-col items-center justify-center z-30 px-6 max-w-6xl w-full text-center pb-20">
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          
          {/* CITADEL Name with Premium "Satin Bronze" Metallic Effect */}
          <h1 
            className="font-outfit text-6xl md:text-8xl lg:text-[9.5rem] font-black tracking-tighter leading-[0.8] mb-4"
            style={{
              background: "linear-gradient(180deg, #BD9354 0%, #FCEECA 30%, #C4923E 50%, #8B5A2B 75%, #4A2511 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0px 10px 4px rgba(0, 0, 0, 0.5)) drop-shadow(0px 25px 40px rgba(0, 0, 0, 0.9))"
            }}
          >
            CITADEL
          </h1>

          {/* VERSION MARKER */}
          <div className="text-xl md:text-3xl font-outfit font-black tracking-[0.4em] mb-4 text-[#C4923E]/80 uppercase italic">
            v 1.0
          </div>
          
          {/* SLOGAN */}
          <h2 className="font-outfit text-3xl md:text-5xl font-black mb-8 uppercase tracking-tight text-[#f2f2f2] drop-shadow-xl">
            the dharma of <span className="text-[#C4923E]">code.</span>
          </h2>

          <p className="max-w-xl text-[#d4c7b0]/80 text-sm md:text-lg font-outfit font-medium leading-relaxed mb-10 mx-auto">
            Eastern India's premier Techno-Vedic Hackathon. <br /> 
            Forge your destiny in the 30-hour Kurukshetra of innovation.
          </p>

          <div className="flex flex-col lg:flex-row items-center gap-6 justify-center">
            
            {/* COUNTDOWN */}
            <div className="flex gap-5 px-8 py-4 bg-black/50 border border-[#C4923E]/20 rounded-xl backdrop-blur-md">
              {Object.entries(timeLeft).map(([key, value]) => (
                <div key={key} className="flex flex-col items-center justify-center min-w-[40px]">
                  <span className="text-[#C4923E] text-2xl font-black font-outfit tracking-tighter leading-none">
                    {hasMounted ? String(value).padStart(2, '0') : "00"}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-black mt-1">
                    {key}
                  </span>
                </div>
              ))}
            </div>

            {/* DEVFOLIO APPLY BUTTON */}
            <div
              className="apply-button"
              data-hackathon-slug="citadel-hackathon"
              data-button-theme="dark"
              style={{ height: "44px", width: "312px" }}
            />
            
            {/* DISCORD BUTTON */}
            <button className="flex items-center justify-center gap-3 px-10 py-4 bg-transparent border border-[#C4923E]/40 text-[#C4923E] font-outfit text-[14px] uppercase tracking-[0.1em] font-black rounded-xl hover:bg-[#C4923E]/5 transition-all shadow-xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 127.14 96.36" fill="currentColor">
                <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.31,60,73.31,53s5-12.74,11.43-12.74S96.2,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
              </svg>
              <span>Join Discord</span>
            </button>

          </div>
        </motion.div>
      </div>

      {/* MARQUEE */}
      <div className="absolute bottom-0 md:bottom-2 left-0 w-full z-50 pointer-events-none overflow-visible">
        <div className="pointer-events-auto">
          <Marquee />
        </div>
      </div>

    </section>
  );
}