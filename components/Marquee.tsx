"use client";

export default function Marquee() {
  const text = "THE DHARMA OF CODE • 30 HOURS OF INNOVATION • ENTER THE ARENA • ";

  return (
    <div className="relative w-full overflow-hidden py-3 z-50 shadow-[0_0_50px_rgba(0,0,0,0.9)] -rotate-2 scale-[1.02] origin-center"
         style={{ backgroundColor: "#5A0A0A", borderTop: "2px solid rgba(196, 146, 62, 0.6)", borderBottom: "2px solid rgba(196, 146, 62, 0.6)" }}>
      
      {/* Texture overlay for an ancient fabric/leather feel */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] opacity-40 mix-blend-multiply pointer-events-none" />
      
      {/* Glowing center highlight */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C4923E]/20 to-transparent pointer-events-none" />
      
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="font-space text-base md:text-xl font-black uppercase tracking-[0.4em]"
              style={{ 
                color: "#C4923E",
                /* This gives the font that glowing, burning artifact look */
                textShadow: "0 0 10px rgba(196, 146, 62, 0.9), 0 0 20px rgba(196, 146, 62, 0.5)"
              }}>
          {text + text + text}
        </span>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
}