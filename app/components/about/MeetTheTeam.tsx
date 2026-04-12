"use client";

import { motion } from "framer-motion";

const founders = [
  { 
    name: "Abhishek Chaudhary", 
    role: "Co-Founder & MD", 
    tag: "Strategy",
    color: "#8CBF3F" // Green
  },
  { 
    name: "Amit Singh", 
    role: "Co-Founder & CEO", 
    tag: "Visionary",
    color: "#00AEEF" // Sky Blue
  },
  { 
    name: "Shivansh Diwedi", 
    role: "Co-Founder & COO", 
    tag: "Operations",
    color: "#F28500" // Orange
  }
];

export default function MeetTheTeam() {
  return (
    <section className="relative py-24 lg:py-40 bg-[#050A15] overflow-hidden font-plus-jakarta">
      
      {/* --- ADVANCED TECH BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#1B6CA815_0%,transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-[#00AEEF] animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60">Executive Leadership</span>
          </motion.div>
          <h2 className="text-5xl lg:text-8xl font-black text-white tracking-tighter leading-none">
            The Minds Behind <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-slate-500">The Mission.</span>
          </h2>
        </div>

        {/* --- FOUNDERS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 items-end">
          {founders.map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className={`relative group ${i === 1 ? 'md:mb-12' : ''}`} // CEO card slightly higher
            >
              {/* IMAGE CONTAINER (The Capsule) */}
              <div className="relative aspect-[4/5] rounded-[4rem] lg:rounded-[6rem] overflow-hidden bg-white/5 border border-white/10 transition-all duration-700 group-hover:border-white/30 group-hover:shadow-[0_40px_100px_-20px_rgba(0,174,239,0.2)]">
                
                {/* Image Placeholder / Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050A15] via-transparent to-transparent z-10" />
                
                {/* Static Placeholder for Founders Image */}
                <div className="w-full h-full flex items-center justify-center text-white/10 italic font-black text-2xl uppercase tracking-tighter">
                   Founder Image
                </div>

                {/* Hover Glow Effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700" 
                  style={{ backgroundColor: member.color }}
                />
              </div>

              {/* IDENTITY CARD (Floating Glass) */}
              <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-[90%] z-20">
                <div className="bg-[#0A1120]/80 backdrop-blur-3xl border border-white/10 p-6 lg:p-8 rounded-[2.5rem] shadow-2xl text-center transition-transform duration-500 group-hover:-translate-y-4">
                  <div 
                    className="inline-block px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest mb-3 border border-white/5"
                    style={{ color: member.color, backgroundColor: `${member.color}15` }}
                  >
                    {member.tag}
                  </div>
                  <h4 className="text-2xl lg:text-3xl font-black text-white tracking-tighter leading-none mb-2">
                    {member.name}
                  </h4>
                  <p className="text-slate-500 font-bold text-xs uppercase tracking-widest leading-none">
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Background ID Watermark (Large) */}
              <div className="absolute -top-10 -left-10 text-9xl font-black text-white/[0.02] pointer-events-none select-none uppercase group-hover:text-white/[0.05] transition-all">
                 0{i+1}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
      
      {/* Bottom Visual Spacer */}
      <div className="h-40" />
    </section>
  );
}