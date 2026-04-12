"use client";

import { motion } from "framer-motion";

export default function BookingHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#050A15] overflow-hidden font-plus-jakarta">
      
      {/* --- PREMIUM CINEMATIC BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1] 
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-[-10%] left-[-10%] w-[1000px] h-[1000px] bg-[#00AEEF]/20 blur-[180px] rounded-full"
        />
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* --- LEFT: MASSIVE TYPOGRAPHY --- */}
          <div className="lg:col-span-7 relative z-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-[#8CBF3F] animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/50">Clinical Intake v2.0</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl lg:text-[9rem] font-black text-white tracking-[-0.06em] leading-[0.85] mb-10"
            >
              The First <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] via-white to-slate-500 italic underline decoration-white/10 underline-offset-[15px] lg:underline-offset-[25px]">Step.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg lg:text-2xl text-slate-400 font-medium leading-tight max-w-xl border-l-4 border-[#00AEEF] pl-8"
            >
              Securing your child's <span className="text-white">Priority Assessment</span> starts here. We've simplified the protocol for zero friction.
            </motion.p>
          </div>

          {/* --- RIGHT: INTERACTIVE STATUS CARD --- */}
          <div className="lg:col-span-5 relative mt-20 lg:mt-0">
            {/* Main Card Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="relative mx-auto lg:ml-auto max-w-md aspect-square bg-white/[0.03] border border-white/10 rounded-[3rem] lg:rounded-[4rem] p-8 lg:p-12 backdrop-blur-3xl overflow-hidden group shadow-2xl z-10"
            >
               {/* Animated Aura inside Card */}
               <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-[#00AEEF]/20 blur-3xl rounded-full transition-all group-hover:scale-150" />
               
               <div className="relative z-10 h-full flex flex-col justify-between">
                  {/* Top: Status & Title */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                       <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">System Status</span>
                       <span className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-[#8CBF3F]">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#8CBF3F] animate-ping" />
                          Online
                       </span>
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-black text-white tracking-tighter uppercase leading-none">
                       Secured <br /> Data Terminal
                    </h3>
                  </div>

                  {/* Bottom: Queue & Info (Badge content is now inside here) */}
                  <div className="grid grid-cols-12 gap-6 items-end">
                     {/* Data Info (7 Cols) */}
                     <div className="col-span-12 lg:col-span-7 space-y-6">
                        <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                           <p className="text-[9px] font-black uppercase tracking-widest text-slate-500 mb-1">Queue Priority</p>
                           <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                              <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: "85%" }}
                                transition={{ duration: 2, delay: 1 }}
                                className="h-full bg-gradient-to-r from-[#00AEEF] to-[#8CBF3F]" 
                              />
                           </div>
                        </div>
                        <div className="flex items-center gap-4">
                           <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                              <svg className="w-6 h-6 text-[#00AEEF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                           </div>
                           <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-tight">
                              Encrypted HIPAA <br /> Compliant Logic
                           </p>
                        </div>
                     </div>

                     {/* --- FIX: Fast Response (Now Vertically Integrated) (5 Cols) --- */}
                     <div className="col-span-12 lg:col-span-5 flex lg:justify-end items-end">
                        <div className="p-4 lg:p-6 bg-white/5 border border-white/10 rounded-2xl lg:rounded-3xl flex flex-col items-center gap-1 group-hover:bg-[#00AEEF]/10 group-hover:border-[#00AEEF]/20 transition-all">
                           <span className="text-3xl lg:text-4xl font-black block leading-none tracking-tighter text-[#00AEEF]">Fast</span>
                           <span className="text-[8px] lg:text-[9px] font-bold text-slate-500 uppercase tracking-[0.2em] group-hover:text-white transition-colors">Response</span>
                        </div>
                     </div>
                  </div>
               </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Background Fade to Form */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}