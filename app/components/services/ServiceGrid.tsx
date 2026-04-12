"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const servicesData = [
  {
    title: "ABA Therapy",
    desc: "Structured positive reinforcement to develop essential life & social skills.",
    who: "Children aged 2-12 with Autism spectrum.",
    expect: "1-on-1 intensive therapy, 2-3 hour clinical sessions.",
    color: "#E32636",
    id: "01",
    tag: "Behavioral"
  },
  {
    title: "Speech & Language",
    desc: "Targeted interventions for verbal communication and language processing.",
    who: "Children with speech delays or articulation issues.",
    expect: "45-min play-based therapeutic modules.",
    color: "#00AEEF",
    id: "02",
    tag: "Communication"
  },
  {
    title: "Occupational Therapy",
    desc: "Developing fine motor skills, sensory processing, and daily independence.",
    who: "Children with Sensory Processing Disorder or CP.",
    expect: "Hands-on sensory gym activities with experts.",
    color: "#8CBF3F",
    id: "03",
    tag: "Physical"
  },
  {
    title: "Physiotherapy",
    desc: "Physical rehab to improve mobility, muscle tone, and body coordination.",
    who: "Children with motor delays or postural issues.",
    expect: "Active exercise-based strength building.",
    color: "#F28500",
    id: "04",
    tag: "Mobility"
  },
  {
    title: "Special Education",
    desc: "Academic & cognitive support bridge for children with learning needs.",
    who: "Children with ADHD or learning disabilities.",
    expect: "1.5-hour customized academic coaching.",
    color: "#6366F1",
    id: "05",
    tag: "Cognitive"
  }
];

export default function ServiceGrid() {
  const [activeTab, setActiveTab] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-[#F8FAFC] py-24 lg:py-40 font-plus-jakarta relative overflow-hidden">
      
      {/* --- PREMIUM AMBIENT BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-blue-100/40 blur-[150px] rounded-full"
        />
        <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- DYNAMIC HEADER --- */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-[#1A2E44]" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#1A2E44]">Service Ecosystem</span>
          </div>
          <h2 className="text-6xl lg:text-[10rem] font-black text-[#1A2E44] tracking-tighter leading-[0.85] mb-4">
            Clinical <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">Precision.</span>
          </h2>
        </div>

        {/* --- MOBILE: HORIZONTAL KINETIC SNAPPING CARDS --- */}
        <div className="lg:hidden">
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-6 pb-10"
            style={{ scrollbarWidth: 'none' }}
          >
            {servicesData.map((s, i) => (
              <div key={i} className="min-w-[85vw] snap-center">
                <div className="bg-white rounded-[3rem] p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] border border-slate-100 h-full relative overflow-hidden group">
                  <span className="text-[100px] font-black absolute -top-10 -right-5 text-slate-50 opacity-10 group-hover:opacity-20 transition-opacity">
                    {s.id}
                  </span>
                  
                  <div className="relative z-10">
                    <div className="px-4 py-1.5 rounded-full border text-[9px] font-black uppercase tracking-widest mb-8 inline-block" 
                         style={{ borderColor: s.color + '40', color: s.color }}>
                      {s.tag}
                    </div>
                    <h3 className="text-4xl font-black text-[#1A2E44] mb-6 tracking-tight">{s.title}</h3>
                    <p className="text-slate-500 text-lg font-medium leading-relaxed mb-10 italic">"{s.desc}"</p>
                    
                    <div className="space-y-6 border-t border-slate-50 pt-8">
                       <div className="flex flex-col gap-1">
                          <span className="text-[9px] font-black uppercase text-slate-400">Target Group</span>
                          <p className="text-sm font-bold text-[#1A2E44]">{s.who}</p>
                       </div>
                       <div className="flex flex-col gap-1">
                          <span className="text-[9px] font-black uppercase text-slate-400">What to expect</span>
                          <p className="text-sm font-bold text-[#1A2E44]">{s.expect}</p>
                       </div>
                    </div>

                    <Link href="/book" className="mt-10 w-full py-5 bg-[#1A2E44] text-white rounded-2xl flex items-center justify-center font-black uppercase text-[10px] tracking-widest shadow-xl">
                      Consult Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Custom Scroll Indicator */}
          <div className="flex justify-center gap-2">
            {servicesData.map((_, i) => (
              <div key={i} className={`h-1 rounded-full transition-all duration-300 ${activeTab === i ? 'w-8 bg-blue-600' : 'w-2 bg-slate-200'}`} />
            ))}
          </div>
        </div>

        {/* --- DESKTOP: THE BENTO CONSOLE --- */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Interactive Navigation Pills */}
          <div className="col-span-4 flex flex-col gap-4">
            {servicesData.map((s, i) => (
              <button
                key={i}
                onMouseEnter={() => setActiveTab(i)}
                className={`relative px-10 py-8 rounded-[2.5rem] text-left transition-all duration-500 overflow-hidden group ${
                  activeTab === i 
                  ? "bg-[#1A2E44] text-white shadow-2xl translate-x-4" 
                  : "bg-white text-slate-400 border border-slate-100 hover:border-blue-200 hover:text-[#1A2E44]"
                }`}
              >
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] mb-1 opacity-50">{s.id}</span>
                    <span className="text-2xl font-black tracking-tighter">{s.title}</span>
                  </div>
                  <div className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-transform ${activeTab === i ? 'scale-100' : 'scale-0'}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" /></svg>
                  </div>
                </div>
                {/* Background ID Glow */}
                {activeTab === i && (
                  <motion.div layoutId="hover-bg" className="absolute top-0 right-0 h-full w-2 shadow-[0_0_40px_rgba(255,255,255,0.2)]" style={{ backgroundColor: s.color }} />
                )}
              </button>
            ))}
          </div>

          {/* Right: The Data Visualization Panel */}
          <div className="col-span-8">
            <div className="bg-white rounded-[4rem] border border-slate-100 p-20 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] h-full relative overflow-hidden flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex items-center gap-6 mb-12">
                    <div className="h-2 w-24 rounded-full overflow-hidden bg-slate-100">
                      <motion.div 
                        initial={{ width: 0 }} 
                        animate={{ width: "100%" }} 
                        className="h-full" 
                        style={{ backgroundColor: servicesData[activeTab].color }} 
                      />
                    </div>
                    <span className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">Clinical Focus</span>
                  </div>

                  <h3 className="text-8xl font-black text-[#1A2E44] tracking-tighter leading-none mb-10">
                    {servicesData[activeTab].title}<span style={{ color: servicesData[activeTab].color }}>.</span>
                  </h3>

                  <p className="text-3xl text-slate-500 font-medium leading-tight italic mb-16 max-w-2xl">
                    "{servicesData[activeTab].desc}"
                  </p>

                  <div className="grid grid-cols-2 gap-12 border-t border-slate-100 pt-16">
                    <div className="space-y-4">
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600">Primary Audience</span>
                      <p className="text-2xl font-black text-[#1A2E44] tracking-tight">{servicesData[activeTab].who}</p>
                    </div>
                    <div className="space-y-4">
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500">Service Delivery</span>
                      <p className="text-2xl font-black text-[#1A2E44] tracking-tight">{servicesData[activeTab].expect}</p>
                    </div>
                  </div>

                  <Link href="/book" className="mt-16 inline-flex px-16 py-6 bg-[#1A2E44] text-white rounded-3xl font-black text-xs uppercase tracking-[0.3em] hover:shadow-2xl hover:-translate-y-1 transition-all">
                    Register Case
                  </Link>
                </motion.div>
              </AnimatePresence>

              {/* Huge Background Label */}
              <div className="absolute -bottom-10 -right-5 text-[22rem] font-black text-slate-900/[0.02] uppercase select-none">
                {servicesData[activeTab].id}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}