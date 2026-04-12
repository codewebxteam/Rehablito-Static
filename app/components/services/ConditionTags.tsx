"use client";

import { motion } from "framer-motion";
import Link from "next/link"; // Fixed: Added missing import

const conditions = [
  { name: "Autism (ASD)", color: "#E32636" },
  { name: "ADHD", color: "#6366F1" },
  { name: "Cerebral Palsy", color: "#8CBF3F" },
  { name: "Speech Delay", color: "#00AEEF" },
  { name: "Down Syndrome", color: "#F28500" },
  { name: "Developmental Delay", color: "#E91E63" },
  { name: "Sensory Processing", color: "#1B6CA8" },
];

export default function ConditionTags() {
  return (
    <section className="py-12 lg:py-20 bg-white font-plus-jakarta relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- COMPACT HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-l-4 border-[#00AEEF] pl-6">
          <div>
            <h2 className="text-3xl lg:text-5xl font-black text-[#1A2E44] tracking-tighter">
              Clinical <span className="text-slate-300 font-medium">Specializations.</span>
            </h2>
            <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mt-1">
              Conditions we transform through precision care
            </p>
          </div>
          <div className="hidden md:block h-px flex-1 bg-slate-100 mx-10" />
        </div>

        {/* --- COMPACT TAG GRID --- */}
        <div className="flex flex-wrap gap-3 lg:gap-4">
          {conditions.map((tag, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4, backgroundColor: "#f8fafc" }}
              className="px-6 py-3 bg-white border border-slate-100 rounded-2xl shadow-sm flex items-center gap-3 cursor-default transition-all group"
            >
              {/* Pulse Indicator */}
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-40" style={{ backgroundColor: tag.color }}></span>
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: tag.color }}></span>
              </div>
              
              <span className="text-sm lg:text-base font-black text-slate-700 tracking-tight group-hover:text-[#1A2E44]">
                {tag.name}
              </span>
            </motion.div>
          ))}
          
          {/* Action Link Tag */}
          <Link 
            href="/contact" 
            className="px-6 py-3 bg-[#1A2E44] text-white rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-[#00AEEF] transition-all flex items-center gap-2 active:scale-95"
          >
            And More 
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}