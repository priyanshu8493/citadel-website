"use client";
import { Home, Calendar, Trophy, Globe, Users, Briefcase } from "lucide-react";

const navItems = [
  { name: "Home", icon: Home, href: "#" },
  { name: "Timeline", icon: Calendar, href: "#timeline" },
  { name: "Prizepool", icon: Trophy, href: "#prizes" },
  { name: "Sponsors", icon: Globe, href: "#sponsors" },
  { name: "Mentors", icon: Users, href: "#mentors" },
  { name: "Crew", icon: Briefcase, href: "#crew" },
];

export default function CommandDock() {
  return (
    <div className="w-full max-w-6xl px-4 mb-8">
      <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4 bg-black/40 backdrop-blur-2xl border border-white/10 p-2 md:p-3 rounded-2xl shadow-2xl">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="flex flex-col md:flex-row items-center justify-center gap-2 py-4 md:py-6 rounded-xl hover:bg-white/5 hover:border-gold/30 border border-transparent transition-all group"
          >
            <item.icon className="w-5 h-5 md:w-6 md:h-6 text-zinc-400 group-hover:text-gold group-hover:scale-110 transition-all duration-300" />
            <span className="font-space text-[10px] md:text-xs uppercase tracking-[0.2em] text-zinc-400 group-hover:text-zinc-100 transition-colors">
              {item.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}