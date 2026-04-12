"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const services = [
  { 
    id: "01",
    title: "ABA Therapy", 
    desc: "Scientific positive reinforcement system to build vital communication and life skills. We focus on measurable progress and behavioral excellence.", 
    color: "#1B6CA8", 
    image: "/images/ABA.webp", 
    accent: "shadow-blue-500/20"
  },
  { 
    id: "02",
    title: "Speech Therapy", 
    desc: "Expert techniques to master verbal expression and social communication hurdles. We help children find their unique voice and confidence.", 
    color: "#F28500", 
    image: "/images/speech.webp", 
    accent: "shadow-orange-500/20"
  },
  { 
    id: "03",
    title: "Occupational Therapy", 
    desc: "Empowering kids with fine motor skills and sensory processing for daily independence. Bridge the gap in physical coordination.", 
    color: "#8CBF3F", 
    image: "/images/Occupational.webp", 
    accent: "shadow-green-500/20"
  },
  { 
    id: "04",
    title: "Physiotherapy", 
    desc: "Advanced physical care to improve posture, balance, and gross motor functions through specialized exercise paths tailored for kids.", 
    color: "#E32636", 
    image: "/images/Physiotherapy.webp", 
    accent: "shadow-red-500/20"
  },
  { 
    id: "05",
    title: "Special Education", 
    desc: "Customized learning paths and Individualized Education Plans (IEP) to unlock academic readiness and social integration.", 
    color: "#00AEEF", 
    image: "/images/specialedu.webp", 
    accent: "shadow-cyan-500/20"
  },
];

export default function ServicesSnapshot() {
  const [activeTab, setActiveTab] = useState(0);

  const handleNext = () => {
    setActiveTab((prev) => (prev + 1) % services.length);
  };

  const handlePrev = () => {
    setActiveTab((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section className="relative py-20 lg:py-32 bg-[#FDFDFD] overflow-hidden font-plus-jakarta">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="mb-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-[#1B6CA8] font-black text-[10px] lg:text-xs uppercase tracking-[0.4em] mb-4 block">What We Offer</span>
            <h2 className="text-4xl lg:text-7xl font-black text-[#1A2E44] tracking-tighter leading-none">
              Specialized <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1B6CA8] to-cyan-500">Therapy Paths.</span>
            </h2>
          </div>
          
          <div className="hidden lg:flex items-center gap-4">
            <button onClick={handlePrev} className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all active:scale-90 shadow-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={handleNext} className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all active:scale-90 shadow-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        {/* --- INTERACTIVE SWIPE PANEL --- */}
        <motion.div 
          className="relative min-h-[550px] lg:min-h-[600px] w-full bg-white border border-slate-100 rounded-[3.5rem] p-8 lg:p-20 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] overflow-hidden cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, { offset }) => {
            const swipe = offset.x;
            if (swipe < -50) handleNext();
            else if (swipe > 50) handlePrev();
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative z-10 grid lg:grid-cols-2 gap-12 items-center h-full"
            >
              {/* --- TEXT SIDE --- */}
              <div className="flex flex-col items-start text-left">
                <div 
                    className="mb-6 px-5 py-2 rounded-full text-[10px] font-black tracking-[0.2em] uppercase border-2 transition-colors"
                    style={{ borderColor: services[activeTab].color, color: services[activeTab].color }}
                >
                    Program {services[activeTab].id}
                </div>
                <h3 className="text-4xl lg:text-7xl font-black mb-6 leading-tight text-[#1A2E44]">
                  {services[activeTab].title}
                </h3>
                <p className="text-slate-500 text-lg lg:text-2xl font-medium leading-relaxed mb-10 lg:max-w-lg">
                  {services[activeTab].desc}
                </p>
                
                <Link 
                  href="/services" 
                  className={`group inline-flex items-center gap-4 bg-[#1A2E44] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all active:scale-95 ${services[activeTab].accent}`}
                >
                  View Details
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* --- IMAGE SIDE (With Highlighted Rotating Shapes) --- */}
              <div className="relative flex items-center justify-center h-full mt-10 lg:mt-0">
                {/* Background Glow */}
                <div className="absolute inset-0 rounded-full blur-[140px] opacity-30" style={{ backgroundColor: services[activeTab].color }}></div>
                
                {/* Image Frame */}
                <motion.div 
                   className="relative w-full aspect-square max-w-[420px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-100 z-20"
                   initial={{ rotate: 3 }}
                   animate={{ rotate: 0 }}
                   transition={{ duration: 0.8 }}
                >
                   <img 
                    src={services[activeTab].image} 
                    alt={services[activeTab].title}
                    className="w-full h-full object-cover"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </motion.div>

                {/* --- HIGHLIGHTED ROTATING SHAPES (Darker & Bold) --- */}
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-16 border-[4px] opacity-25 rounded-[5rem] pointer-events-none z-10" 
                    style={{ borderColor: services[activeTab].color }}
                />
                <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-10 border-[3px] border-dashed opacity-20 rounded-[4.5rem] pointer-events-none z-10" 
                    style={{ borderColor: services[activeTab].color }}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* --- PAGINATION & DOTS --- */}
        <div className="mt-12 flex flex-col items-center gap-8">
            <div className="flex gap-3">
                {services.map((_, i) => (
                    <div 
                        key={i} 
                        onClick={() => setActiveTab(i)}
                        className={`h-1.5 transition-all duration-500 rounded-full cursor-pointer 
                        ${activeTab === i ? 'w-12 bg-[#1A2E44]' : 'w-3 bg-slate-200 hover:bg-slate-300'}`}
                    />
                ))}
            </div>

            <div className="flex lg:hidden items-center gap-6">
                <button onClick={handlePrev} className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center active:bg-slate-900 active:text-white transition-all">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
                </button>
                <span className="font-bold text-[#1A2E44] text-sm tracking-widest">{activeTab + 1} / {services.length}</span>
                <button onClick={handleNext} className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center active:bg-slate-900 active:text-white transition-all">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>
        </div>

      </div>
    </section>
  );
}