"use client";

import { motion } from "framer-motion";

const certifications = [
  { 
    name: "ISO Certified 9001:2015", 
    detail: "Quality Management Systems, ensuring every session follows strict protocols.", 
    color: "#E32636", 
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
  },
  { 
    name: "NABH Accredited Clinic", 
    detail: "Highest healthcare excellence standards for patient safety and operational transparency.", 
    color: "#00AEEF", 
    icon: "M13 10V3L4 14h7v7l9-11h-7z"
  },
  { 
    name: "Section 12A Registered", 
    detail: "Verified non-profit trust status, ensuring all funds are used for patient rehabilitation.", 
    color: "#8CBF3F", 
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
  },
  { 
    name: "80G Tax Exemption", 
    detail: "Certified transparency for all strategic donations and clinical expenditures.", 
    color: "#F28500", 
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  }
];

const partners = ["Healthcare UP", "Neuro Bihar", "UNICEF Partner", "NIMHANS Linked", "Child Care Trust", "Global Health Standards"];

export default function Accreditations() {
  return (
    <section className="py-24 lg:py-40 bg-white font-plus-jakarta relative overflow-hidden border-t border-slate-50">
      
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,#F1F9FF_0%,transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col lg:flex-row gap-12 lg:items-center mb-24">
          <div className="lg:w-3/5">
             <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[2px] bg-[#1A2E44]" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#1A2E44]">Institutional Trust</span>
             </div>
             <h2 className="text-6xl lg:text-[10rem] font-black text-[#1A2E44] tracking-tighter leading-[0.85] mb-4">
               Verified <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-blue-700">Protocol.</span>
             </h2>
          </div>
          <p className="lg:w-2/5 text-slate-500 text-lg lg:text-3xl font-medium leading-tight border-l-2 border-slate-100 pl-8">
             Engineered on <span className="text-[#1A2E44] font-black underline decoration-[#00AEEF]/30">global medical frameworks</span> for absolute transparency.
          </p>
        </div>

        {/* --- DYNAMIC TILES --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {certifications.map((cert, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-[3.5rem] p-10 lg:p-14 border border-slate-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_100px_-20px_rgba(0,174,239,0.12)] transition-all duration-500 overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-10 pb-8 border-b border-slate-50">
                   <div className="flex items-center gap-5">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center border border-slate-100 bg-slate-50 shadow-inner group-hover:scale-110 transition-transform duration-500">
                        <svg className="w-8 h-8" style={{ color: cert.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d={cert.icon} />
                        </svg>
                      </div>
                      <span className="text-sm font-black text-[#1A2E44] opacity-40 group-hover:opacity-100 transition-opacity uppercase tracking-widest">{cert.name}</span>
                   </div>
                   <div className="text-xs font-black text-slate-200 group-hover:text-slate-400 transition-colors">0{i+1}</div>
                </div>

                <h3 className="text-4xl lg:text-5xl font-black text-[#1A2E44] mb-8 tracking-tighter leading-none">
                  Clinical <br /> <span style={{ color: cert.color }}>Validation.</span>
                </h3>

                <p className="text-xl lg:text-2xl text-slate-500 font-medium leading-relaxed mb-10 italic">
                  "{cert.detail}"
                </p>

                {/* Status Badge */}
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 group-hover:bg-white transition-colors">
                   <div className="relative flex h-2 w-2">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ backgroundColor: cert.color }}></span>
                     <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: cert.color }}></span>
                   </div>
                   <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1A2E44]">Active Compliance</span>
                </div>
              </div>

              {/* Huge Background Seal */}
              <div className="absolute -bottom-10 -right-10 text-[20rem] font-black text-slate-900/[0.015] uppercase pointer-events-none select-none group-hover:text-slate-900/[0.03] transition-all">
                Core
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- LOGO MARQUEE --- */}
        <div className="pt-20 border-t border-slate-50">
           <p className="text-center text-[10px] font-black text-slate-300 uppercase tracking-[0.6em] mb-12">Global Alliances</p>
           <div className="relative overflow-hidden flex whitespace-nowrap opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
              <motion.div 
                animate={{ x: [0, -1000] }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                className="flex gap-24 items-center pr-24"
              >
                 {[...partners, ...partners].map((p, i) => (
                   <span key={i} className="text-3xl lg:text-5xl font-black text-slate-400 tracking-tighter hover:text-[#1A2E44] transition-colors">{p}</span>
                 ))}
              </motion.div>
           </div>
        </div>

      </div>
    </section>
  );
}