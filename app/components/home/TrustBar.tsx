"use client";

import { motion } from "framer-motion";

const StatsData = [
  { 
    number: "2.4k+", 
    label: "Families", 
    color: "#1B6CA8", 
    bg: "bg-blue-50/80",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
    )
  },
  { 
    number: "15+", 
    label: "Specialists", 
    color: "#8CBF3F", 
    bg: "bg-green-50/80",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    )
  },
  { 
    number: "ISO", 
    label: "Certified", 
    color: "#F28500", 
    bg: "bg-orange-50/80",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-1.947 3.42 3.42 0 014.438 0c.601.43 1.295.624 1.947.195a3.42 3.42 0 014.438 4.438c-.43.601-.624 1.295-.195 1.947a3.42 3.42 0 010 4.438c.43.601.624 1.295.195 1.947a3.42 3.42 0 01-4.438 4.438c-.601-.43-1.295-.624-1.947-.195a3.42 3.42 0 01-4.438 0c-.601-.43-1.295-.624-1.947.195a3.42 3.42 0 01-4.438-4.438c.43-.601.624-1.295.195-1.947a3.42 3.42 0 010-4.438c-.43-.601-.624-1.295-.195-1.947a3.42 3.42 0 014.438-4.438z" /></svg>
    )
  },
  { 
    number: "2010", 
    label: "Since", 
    color: "#E32636", 
    bg: "bg-red-50/80",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
    )
  }
];

export default function TrustBar() {
  return (
    <div className="w-full bg-white py-6 lg:py-10 relative z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Colorful Bento Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
          {StatsData.map((stat, i) => (
            <motion.div
              key={i}
              className={`relative p-4 lg:p-6 rounded-[2rem] ${stat.bg} border border-white shadow-sm flex items-center gap-4 lg:gap-6 group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {/* Vibrant Icon Container */}
              <div 
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-white flex items-center justify-center shadow-sm transition-transform group-hover:rotate-12 duration-500 shrink-0"
                style={{ color: stat.color }}
              >
                {stat.icon}
              </div>

              {/* Text Group */}
              <div className="flex flex-col">
                <div 
                  className="text-2xl lg:text-3xl font-black tracking-tighter leading-none"
                  style={{ color: stat.color }}
                >
                  {stat.number}
                </div>
                <div className="text-[9px] lg:text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">
                  {stat.label}
                </div>
              </div>

              {/* Subtle Animated Pulse */}
              <div 
                className="absolute top-2 right-4 w-1 h-1 rounded-full opacity-50"
                style={{ backgroundColor: stat.color }}
              >
                <div className="absolute inset-0 rounded-full animate-ping opacity-75" style={{ backgroundColor: stat.color }}></div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}