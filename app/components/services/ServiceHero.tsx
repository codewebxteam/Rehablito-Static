"use client";

import { motion } from "framer-motion";

export default function ServiceHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-52 lg:pb-40 bg-[#050A15] overflow-hidden font-plus-jakarta border-b border-white/5">
      
      {/* --- ADVANCED BACKGROUND GRAPHICS --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Animated Neon Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.1, 0.15] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -top-24 -left-24 w-[600px] h-[600px] bg-[#00AEEF]/20 blur-[150px] rounded-full"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1] 
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-24 -right-24 w-[600px] h-[600px] bg-purple-500/10 blur-[150px] rounded-full"
        />
        {/* Cyber Digital Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', 
            backgroundSize: '45px 45px' 
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center lg:text-left">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* --- CONTENT BLOCK --- */}
          <div className="max-w-4xl">
            {/* Clinical Tag */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-[#00AEEF] animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60">Clinical Excellence</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-6xl lg:text-[10rem] font-black text-white tracking-tighter leading-[0.85] mb-10"
            >
              Specialist <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] via-white to-slate-500">
                Therapies.
              </span>
            </motion.h1>

            {/* Corrected Tag: motion.div to motion.div */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col md:flex-row items-start gap-6 border-l-2 border-[#00AEEF]/30 pl-8 py-2"
            >
              <p className="text-slate-400 max-w-2xl text-lg lg:text-2xl font-medium leading-relaxed">
                We engineer personalized, data-driven rehabilitation pathways 
                that empower every child to unlock their hidden potential.
              </p>
            </motion.div>
          </div>

          {/* --- STATS ACCENT --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="hidden lg:flex flex-col gap-8 bg-white/[0.02] border border-white/5 p-10 rounded-[3rem] backdrop-blur-3xl shadow-2xl"
          >
            <div className="space-y-1">
              <span className="text-4xl font-black text-white block tracking-tighter">100%</span>
              <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Evidence Based</span>
            </div>
            <div className="h-px w-12 bg-white/10" />
            <div className="space-y-1">
              <span className="text-4xl font-black text-white block tracking-tighter">Gold</span>
              <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Standard Care</span>
            </div>
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00AEEF]/30 to-transparent" />
    </section>
  );
}