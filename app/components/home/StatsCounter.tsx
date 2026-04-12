"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const locations = [
  { 
    city: "Lucknow", 
    branches: "2 Active Centers", 
    address: "Hazratganj & Gomti Nagar Hub",
    color: "#1B6CA8", 
    tag: "Main HQ"
  },
  { 
    city: "Gorakhpur", 
    branches: "1 Mega Center", 
    address: "Medical Road, Near Golghar",
    color: "#F28500", 
    tag: "Active"
  },
  { 
    city: "Basti", 
    branches: "1 Center", 
    address: "Civil Lines Area",
    color: "#8CBF3F", 
    tag: "Active"
  },
  { 
    city: "Khalilabad", 
    branches: "1 Center", 
    address: "Main Market Hub",
    color: "#E32636", 
    tag: "Active"
  },
  { 
    city: "Ayodhya", 
    branches: "Coming Soon", 
    address: "Ram Nagar Expansion",
    color: "#00AEEF", 
    tag: "Expansion"
  }
];

export default function NetworkReach() {
  const [activeLoc, setActiveLoc] = useState(0);

  return (
    <section className="relative py-16 lg:py-24 bg-white overflow-hidden font-plus-jakarta">
      
      {/* --- ARCHITECTURAL BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-10 pointer-events-none">
            {/* Abstract Connectivity Dots */}
            <svg className="w-full h-full" viewBox="0 0 800 400" fill="none">
                <circle cx="200" cy="100" r="2" fill="#CBD5E1" />
                <circle cx="400" cy="300" r="2" fill="#CBD5E1" />
                <circle cx="600" cy="150" r="2" fill="#CBD5E1" />
                <path d="M200 100L400 300L600 150" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="4 4" />
            </svg>
        </div>
        <motion.div 
            animate={{ backgroundColor: locations[activeLoc].color }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 blur-[150px] opacity-5 transition-colors duration-700"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* --- LEFT: CITY SELECTOR (Sticky/List) --- */}
            <div className="lg:col-span-5 flex flex-col gap-3">
                <span className="text-[#1B6CA8] font-black text-xs uppercase tracking-[0.4em] mb-4 block text-center lg:text-left">
                    Network Presence
                </span>
                <h2 className="text-4xl lg:text-6xl font-black text-[#1A2E44] tracking-tighter leading-none mb-10 text-center lg:text-left">
                    Cities We <br /> <span className="text-slate-400">Transform.</span>
                </h2>

                <div className="flex flex-col gap-2">
                    {locations.map((loc, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveLoc(i)}
                            className={`group relative flex items-center justify-between p-5 lg:p-6 rounded-3xl transition-all duration-300
                            ${activeLoc === i ? 'bg-[#1A2E44] text-white shadow-xl translate-x-2' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}
                        >
                            <div className="flex items-center gap-4">
                                <div 
                                    className={`w-2 h-2 rounded-full ${activeLoc === i ? 'bg-white' : 'bg-slate-300'}`}
                                    style={{ backgroundColor: activeLoc === i ? '#FFF' : loc.color }}
                                ></div>
                                <span className="text-xl lg:text-2xl font-black">{loc.city}</span>
                            </div>
                            <span className={`text-[10px] font-bold uppercase tracking-widest ${activeLoc === i ? 'opacity-60' : 'opacity-0'}`}>
                                View Hub
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* --- RIGHT: DYNAMIC HUB CARD --- */}
            <div className="lg:col-span-7">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeLoc}
                        initial={{ opacity: 0, scale: 0.95, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.95, x: -20 }}
                        transition={{ duration: 0.4 }}
                        className="relative bg-white border border-slate-100 rounded-[3rem] p-10 lg:p-16 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] overflow-hidden"
                    >
                        {/* Dynamic Background ID */}
                        <div 
                            className="absolute -top-10 -right-10 text-[15rem] font-black opacity-[0.03] select-none pointer-events-none"
                            style={{ color: locations[activeLoc].color }}
                        >
                            {activeLoc + 1}
                        </div>

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-slate-50 border border-slate-100 text-slate-500">
                                    {locations[activeLoc].tag}
                                </span>
                                <div className="h-px w-12 bg-slate-100"></div>
                            </div>

                            <h3 className="text-4xl lg:text-6xl font-black text-[#1A2E44] mb-4">
                                Rehablito <span style={{ color: locations[activeLoc].color }}>{locations[activeLoc].city}</span>
                            </h3>
                            
                            <p className="text-slate-500 text-lg lg:text-2xl font-medium leading-relaxed mb-10 max-w-md">
                                {locations[activeLoc].branches} located at {locations[activeLoc].address}.
                            </p>

                            <div className="mt-auto pt-8 border-t border-slate-50">
                                <button 
                                    className="group flex items-center gap-6 bg-[#1A2E44] text-white px-8 lg:px-12 py-5 lg:py-6 rounded-2xl font-black text-lg lg:text-xl transition-all hover:shadow-2xl active:scale-95"
                                    style={{ boxShadow: `0 20px 40px -10px ${locations[activeLoc].color}30` }}
                                >
                                    Book on your Nearest
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-[#1A2E44] transition-all">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

        </div>
      </div>

    </section>
  );
}