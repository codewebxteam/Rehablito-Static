"use client";

import { motion } from "framer-motion";

export default function MissionVision() {
  return (
    <section className="py-24 lg:py-40 bg-white font-plus-jakarta relative overflow-hidden">
      
      {/* --- ADVANCED VISUAL DECOR --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-full h-px bg-slate-100" />
        <div className="absolute left-1/2 top-0 w-px h-full bg-slate-100" />
        {/* Animated Background Pulse */}
        <motion.div 
          animate={{ opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <svg className="w-full h-full text-[#00AEEF]" viewBox="0 0 100 100" fill="none">
             <path d="M0 50 H20 L25 40 L35 60 L40 50 H100" stroke="currentColor" strokeWidth="0.1" />
          </svg>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-stretch">
          
          {/* --- MISSION: THE "ENGINEERING" BLOCK --- */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex-1 relative group"
          >
            <div className="h-full bg-[#F1F9FF] rounded-[4rem] p-12 lg:p-20 overflow-hidden relative transition-all duration-700 group-hover:shadow-[0_50px_100px_-20px_rgba(27,108,168,0.15)]">
              {/* Graphic Element */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#1B6CA8]/5 rounded-full blur-3xl group-hover:bg-[#1B6CA8]/10 transition-all" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-12">
                   <span className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#1B6CA8] font-black text-xl border border-blue-50">M</span>
                   <div className="h-[2px] w-12 bg-[#1B6CA8]/20" />
                   <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#1B6CA8]">Operational Goal</span>
                </div>

                <h3 className="text-5xl lg:text-7xl font-black text-[#1A2E44] tracking-tighter leading-none mb-10">
                  Precision <br /> <span className="text-[#1B6CA8]">Mission.</span>
                </h3>

                <p className="text-2xl lg:text-4xl text-slate-500 font-medium leading-[1.2] tracking-tight">
                  "To provide <span className="text-[#1A2E44] font-black">world-class</span>, evidence-based rehabilitation that empowers every child to reach their fullest potential."
                </p>

                <div className="mt-16 flex items-center gap-4 text-[#1B6CA8]">
                   <div className="w-2 h-2 rounded-full bg-[#1B6CA8] animate-ping" />
                   <span className="text-xs font-black uppercase tracking-widest">Clinically Validated</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* --- VISION: THE "EMPATHY" BLOCK --- */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex-1 relative lg:mt-24 group"
          >
            <div className="h-full bg-white border border-slate-100 rounded-[4rem] p-12 lg:p-20 overflow-hidden relative transition-all duration-700 group-hover:shadow-[0_50px_100px_-20px_rgba(140,191,63,0.15)]">
              {/* Graphic Element */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#8CBF3F]/5 rounded-full blur-3xl group-hover:bg-[#8CBF3F]/10 transition-all" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-12">
                   <span className="w-12 h-12 rounded-2xl bg-[#8CBF3F]/10 flex items-center justify-center text-[#8CBF3F] font-black text-xl border border-[#8CBF3F]/10">V</span>
                   <div className="h-[2px] w-12 bg-[#8CBF3F]/20" />
                   <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#8CBF3F]">Future Outlook</span>
                </div>

                <h3 className="text-5xl lg:text-7xl font-black text-[#1A2E44] tracking-tighter leading-none mb-10">
                  Inclusive <br /> <span className="text-[#8CBF3F]">Vision.</span>
                </h3>

                <p className="text-2xl lg:text-4xl text-slate-500 font-medium leading-[1.2] tracking-tight">
                  "A society where every child, regardless of their challenges, has <span className="text-[#1A2E44] font-black">equal opportunity</span> to learn, grow, and flourish."
                </p>

                <div className="mt-16 flex items-center gap-4 text-[#8CBF3F]">
                   <div className="w-2 h-2 rounded-full bg-[#8CBF3F] animate-ping" />
                   <span className="text-xs font-black uppercase tracking-widest">Social Impact Framework</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}