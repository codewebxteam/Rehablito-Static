"use client";

import { motion } from "framer-motion";

export default function BlogHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#050A15] overflow-hidden font-plus-jakarta">
      
      {/* --- CINEMATIC BG ELEMENTS --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.1, 0.2] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-600/20 blur-[150px] rounded-full"
        />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center lg:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          
          {/* LEFT: TEXT CONTENT */}
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-[#00AEEF] animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60">Clinical Journal</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl lg:text-[11rem] font-black text-white tracking-tighter leading-[0.82] mb-10"
            >
              Latest <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] via-white to-slate-700 italic">Insights.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl lg:text-3xl text-slate-400 font-medium leading-tight max-w-2xl border-l-4 border-[#00AEEF]/40 pl-8 mb-12"
            >
              Exploring the intersection of <span className="text-white">evidence-based science</span> and neurodevelopmental growth.
            </motion.p>

            {/* SEARCH CONSOLE */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative max-w-xl group"
            >
              <div className="absolute inset-0 bg-[#00AEEF]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-center bg-white/5 border border-white/10 rounded-2xl p-2 backdrop-blur-xl">
                <input 
                  type="text" 
                  placeholder="Search articles, therapies, or news..." 
                  className="bg-transparent border-none outline-none flex-1 px-6 text-white text-sm font-medium placeholder:text-slate-500"
                />
                <button className="bg-[#00AEEF] text-[#050A15] px-8 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-white transition-colors">
                  Find
                </button>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: TOPICS & STATS (Visible on Desktop) */}
          <div className="hidden lg:col-span-4 lg:flex flex-col gap-6 justify-end items-end pb-4">
             <div className="flex flex-wrap justify-end gap-3">
                {['Autism', 'ABA Therapy', 'Speech Care', 'Parenting'].map((tag, i) => (
                  <span key={i} className="px-4 py-2 rounded-xl border border-white/5 bg-white/5 text-slate-400 text-[10px] font-black uppercase tracking-widest hover:border-[#00AEEF] hover:text-white transition-all cursor-pointer">
                    #{tag}
                  </span>
                ))}
             </div>
             <div className="text-right">
                <span className="text-6xl font-black text-white block leading-none">48+</span>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">Expert Articles</span>
             </div>
          </div>

        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <div className="w-px h-16 bg-gradient-to-b from-[#00AEEF] to-transparent" />
      </motion.div>

    </section>
  );
}