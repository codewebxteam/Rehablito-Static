"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "The therapists here didn't just treat my son; they understood him. Seeing him speak his first sentence was a miracle for our family.",
    parent: "Priya Singh",
    childInfo: "Mother of 4yo (Autism)",
    color: "#1B6CA8"
  },
  {
    quote: "After months of struggling to find the right care, Rehablito felt like home. The structured approach in Occupational Therapy has completely changed my daughter's life.",
    parent: "Rahul Mishra",
    childInfo: "Father of 6yo (SPD)",
    color: "#F28500"
  },
  {
    quote: "The regular progress reports and parent training sessions helped us continue the therapy at home. Grateful for their compassionate team.",
    parent: "Anita Kumar",
    childInfo: "Mother of 5yo (Speech Delay)",
    color: "#8CBF3F"
  },
  {
    quote: "Scientific methods and emotional care combined. My child's social skills and behavior improved drastically in just three months.",
    parent: "Vikas Verma",
    childInfo: "Father of 7yo (ADHD)",
    color: "#E32636"
  },
  {
    quote: "The gold standard of therapy centers in the region. Their attention to detail and personalized plans are unmatched.",
    parent: "Suman Devi",
    childInfo: "Mother of 3yo (Early Intervention)",
    color: "#00AEEF"
  }
];

export default function TestimonialCarousel() {
  return (
    <section className="relative py-16 lg:py-32 bg-[#0A0F1C] overflow-x-hidden font-plus-jakarta border-b border-white/5">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-10 lg:mb-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 text-center lg:text-left">
          <div className="max-w-2xl">
            <span className="text-cyan-400 font-black text-[10px] uppercase tracking-[0.4em] mb-3 block">Voices of Progress</span>
            <h2 className="text-4xl lg:text-8xl font-black text-white tracking-tighter leading-none">
              Real Stories. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-400 to-slate-700">Real Results.</span>
            </h2>
          </div>
        </div>
      </div>

      {/* --- NATIVE SMOOTH SCROLL CONTAINER (FIXED VERTICAL SCROLL) --- */}
      <div className="relative z-20">
        <div 
          className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar px-6 lg:px-20 gap-4 lg:gap-10 pb-10"
          style={{ 
            WebkitOverflowScrolling: 'touch', // Momentum scroll for iOS
            touchAction: 'pan-x pan-y' // Strictly tells browser to allow vertical page scrolling
          }}
        >
          {testimonials.map((t, index) => (
            <div 
              key={index}
              className="w-[85vw] md:w-[500px] shrink-0 snap-center snap-always"
            >
              <div className="relative bg-white/[0.02] border border-white/10 rounded-[2.5rem] lg:rounded-[4rem] p-7 lg:p-16 backdrop-blur-2xl group transition-all duration-500 hover:border-white/20">
                {/* Star Rating */}
                <div className="flex gap-0.5 mb-6 lg:mb-10">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-white text-lg lg:text-3xl font-medium leading-[1.4] italic mb-10 lg:mb-14 tracking-tight min-h-[120px] lg:min-h-auto">
                  "{t.quote}"
                </p>

                <div className="flex items-center gap-4 lg:gap-6 border-t border-white/5 pt-7 lg:pt-10">
                  <div 
                    className="w-12 h-12 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center font-black text-white text-lg lg:text-2xl shrink-0"
                    style={{ backgroundColor: t.color, boxShadow: `0 8px 20px ${t.color}40` }}
                  >
                    {t.parent[0]}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base lg:text-xl tracking-tight">{t.parent}</h4>
                    <p className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.3em] mt-1 lg:mt-1.5" style={{ color: t.color }}>
                      {t.childInfo}
                    </p>
                  </div>
                </div>

                <span className="absolute top-6 right-8 lg:top-10 lg:right-14 text-white/5 font-serif text-7xl lg:text-[12rem] pointer-events-none">“</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Badge */}
      <div className="mt-10 lg:mt-16 flex justify-center px-4 relative z-20">
        <div className="flex items-center gap-4 px-8 py-3 rounded-full bg-white/[0.03] border border-white/5 backdrop-blur-md">
            <div className="flex -space-x-2">
                {[1,2,3].map(i => <div key={i} className="w-7 h-7 lg:w-8 lg:h-8 rounded-full border-2 border-[#0A0F1C] bg-slate-800" />)}
            </div>
            <p className="text-white font-bold text-[11px] lg:text-sm tracking-wide">2,400+ Families Growing With Us</p>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}