"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Flame, Trophy, Calendar, Users, Target } from "lucide-react";
import Marquee from "@/components/Marquee";

// Reusable Section Header Component for Cohesion
const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="flex flex-col items-center mb-16 text-center">
    <div className="flex items-center gap-4 mb-2">
      <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold" />
      <Flame className="w-5 h-5 text-gold animate-pulse" />
      <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold" />
    </div>
    <h2 className="font-cinzel text-5xl md:text-6xl font-bold text-gold drop-shadow-[0_0_15px_rgba(255,215,0,0.3)] uppercase tracking-tighter">
      {title}
    </h2>
    <p className="font-federo text-xl md:text-2xl text-gold/60 mt-2">{subtitle}</p>
  </div>
);

export default function Home() {
  return (
    <main className="relative min-h-screen selection:bg-gold selection:text-black">
      <Navbar />
      
      {/* Hero fills exactly 100% of the screen height */}
      <Hero />

      
      {/* 3. ABOUT SECTION - The Story */}
      <section id="about" className="relative py-32 px-6 overflow-hidden">
        {/* Ambient background light */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-deep/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader title="The Saga Begins" subtitle="where code meets destiny" />
          <p className="font-serif text-lg md:text-xl text-zinc-400 leading-relaxed mb-8 italic">
            "In the realm where silicon meets spirituality, a new Kurukshetra emerges. 
            Citadel 1.0 is not just a hackathon; it is a test of your inner 'Dharma'."
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { icon: Target, label: "Precision", desc: "Crafting flawless logic" },
              { icon: Users, label: "Unity", desc: "Strengthening the Akshauhini" },
              { icon: Trophy, label: "Victory", desc: "Attaining the ultimate prize" }
            ].map((item, i) => (
              <div key={i} className="p-8 border border-gold/10 bg-black/40 backdrop-blur-sm group hover:border-gold/40 transition-all">
                <item.icon className="w-8 h-8 text-gold mb-4 mx-auto group-hover:scale-110 transition-transform" />
                <h4 className="font-cinzel text-gold text-lg mb-2">{item.label}</h4>
                <p className="text-zinc-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TRACKS SECTION - The Vyuhas */}
      <section id="tracks" className="relative py-32 px-6 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="The Vyuhas" subtitle="choose your battlefront" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sample Track Card */}
            {["AI & Intelligence", "Blockchain & Security", "Sustainability & Flow"].map((track, i) => (
              <div key={i} className="relative aspect-[4/5] p-10 border border-gold/20 flex flex-col justify-end group overflow-hidden">
                {/* Background image for track (placeholder) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                <div className="absolute inset-0 bg-gold/5 group-hover:bg-gold/10 transition-colors" />
                
                <div className="relative z-20">
                  <span className="text-gold/40 font-space text-xs uppercase tracking-[0.3em] mb-2 block">Track 0{i+1}</span>
                  <h3 className="font-cinzel text-2xl text-gold mb-4">{track}</h3>
                  <p className="text-zinc-400 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Master the artifacts of tomorrow to solve the complexities of today.
                  </p>
                  <button className="text-gold text-xs uppercase font-bold tracking-widest flex items-center gap-2">
                    Learn Lore <div className="h-[1px] w-8 bg-gold" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TIMELINE SECTION */}
      <section id="timeline" className="py-32 px-6 border-t border-gold/5">
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="The Timeline" subtitle="the 30-hour war" />
          <div className="space-y-12">
            {[
              { time: "09:00 AM", event: "Opening Ceremony", desc: "The bugle sounds. The gates of Citadel open." },
              { time: "11:00 AM", event: "Hacking Begins", desc: "The first line of code is forged in fire." },
              { time: "10:00 PM", event: "Mid-Night Mentorship", desc: "Seeking wisdom from the gurus of the craft." }
            ].map((item, i) => (
              <div key={i} className="flex gap-8 group">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center font-space text-xs text-gold">
                    {i+1}
                  </div>
                  <div className="w-[1px] h-full bg-gradient-to-b from-gold/30 to-transparent mt-2" />
                </div>
                <div className="pb-8">
                  <span className="font-space text-gold-glow text-sm font-bold">{item.time}</span>
                  <h4 className="font-cinzel text-2xl text-zinc-100 group-hover:text-gold transition-colors">{item.event}</h4>
                  <p className="text-zinc-500 mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 border-t border-gold/10 text-center">
         <img src="/uem-logo.png" alt="UEM" className="h-16 mx-auto mb-8 opacity-50 hover:opacity-100 transition-opacity" />
         <p className="font-cinzel text-gold/60 text-sm tracking-widest uppercase">
           Citadel 1.0 — Forge the Future
         </p>
         <p className="font-serif text-zinc-600 text-xs mt-4">
           © 2026 UEM Kolkata | Designed for the Epic
         </p>
      </footer>
    </main>
  );
}