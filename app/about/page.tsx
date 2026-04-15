"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import OurStory from "../components/about/OurStory";
import MissionVision from "../components/about/MissionVision";
import MeetTheTeam from "../components/about/MeetTheTeam";
import Accreditations from "../components/about/Accreditations";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-plus-jakarta">
      
      {/* 1. Hero / Founding Narrative (Dark) */}
      <OurStory />

      {/* 2. Core Values, Mission & Vision (Light) */}
      <MissionVision />

      {/* 3. Meet the Team - Specialist Profiles (Dark) */}
      <MeetTheTeam />

      {/* 4. Awards & Accreditations (Light) */}
      <Accreditations />

      {/* 5. --- ENHANCED PATHWAY CTA --- */}
      <section className="py-24 lg:py-40 bg-white relative overflow-hidden">
        {/* Abstract Background Accents */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-50/50 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#050A15] rounded-[4rem] p-12 lg:p-24 text-center relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)]"
          >
            {/* Background Glow for Dark CTA */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#00AEEF]/10 blur-[100px] rounded-full" />

            <div className="relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#8CBF3F] animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60">Next Step toward Growth</span>
              </motion.div>

              <h2 className="text-5xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-10">
                Ready to explore <br /> 
                our <span className="text-[#00AEEF]">clinical solutions?</span>
              </h2>

              <p className="text-slate-400 text-lg lg:text-2xl font-medium max-w-2xl mx-auto mb-14 leading-relaxed">
                Discover how our evidence-based science and <span className="text-white">dedicated specialists</span> help children achieve their natural milestones.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <Link 
                  href="/services" 
                  className="w-full sm:w-auto px-12 py-6 bg-[#00AEEF] text-[#050A15] rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:bg-white hover:shadow-[0_20px_50px_rgba(0,174,239,0.3)] transition-all active:scale-95"
                >
                  Explore Services
                </Link>
                
                <Link 
                  href="/booking" 
                  className="w-full sm:w-auto px-12 py-6 bg-transparent border border-white/10 text-white rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:bg-white/5 transition-all flex items-center justify-center gap-3"
                >
                  Expert Consult
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
              </div>

              {/* Trust Badge */}
              <div className="mt-16 pt-12 border-t border-white/5 flex flex-col items-center gap-4">
                 <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em]">Validated Excellence</p>
                 <div className="flex items-center gap-8 opacity-20 grayscale grayscale-100">
                    <span className="text-2xl font-black text-white">ISO</span>
                    <span className="text-2xl font-black text-white">NABH</span>
                    <span className="text-2xl font-black text-white">REHAB</span>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}