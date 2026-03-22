"use client";
import { motion } from "framer-motion";

export default function TechnoChakra() {
  // Spokes logic (12 geometric spokes at 30 degree increments)
  const spokes = Array.from({ length: 12 }, (_, i) => i);

  return (
    <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] flex items-center justify-center pointer-events-none">
      
      {/* 1. ABYSSAL BACKGROUND GLOW */}
      <div className="absolute inset-0 rounded-full bg-[#D4AF37] blur-[100px] opacity-[0.08]" />

      {/* 2. THE OUTER MECHANISM (Slow Clockwise Rotation) */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {/* Concentric rings with varied border styles */}
        <div className="absolute inset-0 rounded-full border border-[#FFD700]/10 border-dashed" />
        <div className="absolute inset-6 rounded-full border-2 border-[#D4AF37]/20 backdrop-blur-[1px]" />
        
        {/* The 'Teeth' of the wheel (dotted geometric accents) */}
        <div className="absolute inset-0 rounded-full border-[6px] border-[#FFD700]/5 border-dotted" />
      </motion.div>

      {/* 3. THE SPOKE SYSTEM (Geometric Data Streams) */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {/* Render 12 geometric spokes as linear data streams */}
        {spokes.map((_, index) => (
          <div 
            key={index}
            className="absolute h-[1px] w-[50%] origin-left"
            style={{ 
              transform: `rotate(${index * 30}deg) translateX(40px)`,
              // Gradient makes it look like light beaming from center
              background: 'linear-gradient(to right, transparent 0%, #B45309 20%, #FFD700 80%, #FFFDF2 100%)'
            }} 
          />
        ))}
      </motion.div>

      {/* 4. THE INNER CORE (Fast Counter-Clockwise Rotation) */}
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute inset-16 md:inset-20 flex items-center justify-center"
      >
        {/* Inner concentric mechanism */}
        <div className="absolute inset-0 rounded-full border border-[#D4AF37]/40" />
        <div className="absolute inset-4 rounded-full border border-[#FFD700]/10 border-dashed" />
        {/* A subtle geometric mandala watermark texture */}
        <div className="absolute inset-10 rounded-full border-4 border-[#B45309]/10 border-dotted" />
      </motion.div>

      {/* 5. THE DHARMA HUB (Central Energy Core) */}
      <div className="absolute w-14 h-14 md:w-18 md:h-18 flex items-center justify-center z-10">
        {/* Layers of intense internal glows */}
        <div className="absolute inset-0 rounded-full bg-[#FFD700] blur-[40px] opacity-[0.3]" />
        <div className="absolute inset-0 rounded-full bg-[#B45309] blur-[20px] opacity-[0.5]" />
        {/* The actual central solid 'hub' with a high-end metal texture effect */}
        <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-b from-[#FFFDF2] to-[#B45309] border border-[#FFD700]/60 shadow-[0_0_20px_rgba(255,215,0,0.6)]" />
      </div>
    </div>
  );
}