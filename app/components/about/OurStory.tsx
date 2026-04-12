"use client";

import { motion } from "framer-motion";

const milestones = [
  { year: "2010", event: "Founding", detail: "Vision for inclusive care.", color: "#E32636" },
  { year: "2016", event: "Expansion", detail: "ABA specialized wing.", color: "#00AEEF" },
  { year: "2024", event: "Trust", detail: "2,400+ Families.", color: "#8CBF3F" }
];

export default function OurStory() {
  return (
    <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-24 bg-[#050A15] overflow-hidden font-plus-jakarta border-b border-white/5">
      
      {/* --- BG GRAPHICS --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,#00AEEF10_0%,transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* --- LEFT CONTENT (Text & Horizontal Scroll Milestones) --- */}
          <div className="w-full lg:w-3/5">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6"
            >
              <div className="w-1 h-1 rounded-full bg-[#00AEEF] animate-pulse" />
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/50">Our Heritage</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-6"
            >
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-white">Journey.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-base lg:text-xl text-slate-400 font-medium leading-relaxed max-w-xl mb-10 border-l border-[#00AEEF]/40 pl-5"
            >
              Engineering hope since 2010. From a single clinic to a regional leader in excellence.
            </motion.p>

            {/* --- SMART MILESTONES: Horizontal on Mobile, Grid on Desktop --- */}
            <div className="flex lg:grid lg:grid-cols-3 gap-4 overflow-x-auto no-scrollbar snap-x pb-4 lg:pb-0">
               {milestones.map((m, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, scale: 0.9 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   className="min-w-[140px] lg:min-w-0 snap-center p-4 bg-white/[0.03] border border-white/5 rounded-2xl hover:bg-white/[0.07] transition-all flex flex-col justify-between"
                 >
                    <div>
                      <div className="text-lg font-black mb-1" style={{ color: m.color }}>{m.year}</div>
                      <div className="text-[11px] font-bold text-white mb-1 uppercase tracking-wider">{m.event}</div>
                    </div>
                    <div className="text-[9px] text-slate-500 font-bold leading-tight">{m.detail}</div>
                 </motion.div>
               ))}
            </div>
          </div>

          {/* --- RIGHT: COMPACT VISUAL FRAME --- */}
          <div className="w-full lg:w-2/5 flex justify-center">
            <div className="relative w-full max-w-[320px] aspect-square bg-white/[0.02] border border-white/10 rounded-[2.5rem] overflow-hidden group shadow-2xl backdrop-blur-3xl flex flex-col items-center justify-center p-6 transition-transform hover:scale-[1.02]">
               
               {/* Founder Badge */}
               <div className="absolute top-5 right-5 z-20">
                  <div className="bg-black/60 backdrop-blur-xl border border-white/10 px-3 py-2 rounded-xl">
                     <p className="text-[10px] font-black text-white leading-none">Dr. [Name]</p>
                     <span className="text-[7px] font-bold uppercase tracking-widest text-[#00AEEF]">Founder</span>
                  </div>
               </div>

               {/* Center Symbol */}
               <div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#00AEEF]/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
               </div>
               
               <h3 className="text-xl font-black text-white/20 uppercase tracking-tighter">Est. 2010</h3>
               <p className="text-[8px] font-black text-slate-600 uppercase tracking-[0.3em] mt-1">Global Standards</p>

               {/* Stat Badge */}
               <motion.div 
                 animate={{ y: [0, -5, 0] }}
                 transition={{ duration: 3, repeat: Infinity }}
                 className="absolute -bottom-2 -left-2 bg-[#00AEEF] text-white px-5 py-3 rounded-2xl shadow-xl z-30"
               >
                  <span className="text-2xl font-black block leading-none">16+</span>
                  <span className="text-[7px] font-black uppercase tracking-widest">Years</span>
               </motion.div>
            </div>
          </div>

        </div>
      </div>
      
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}