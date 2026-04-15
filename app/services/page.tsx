"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ServiceHero from "../components/services/ServiceHero";
import ServiceGrid from "../components/services/ServiceGrid";
import ConditionTags from "../components/services/ConditionTags";
import TherapyProcess from "../components/services/TherapyProcess";

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC] font-plus-jakarta">
      {/* 1. Hero Section: Deep Dark / High Tech Introduction */}
      <ServiceHero />

      {/* 2. Main Services: Interactive Dashboard (Light Theme) */}
      <ServiceGrid />

      {/* 3. Conditions We Treat: Compact Specialization Tags */}
      <ConditionTags />

      {/* 4. Therapy Process: Step-by-step Clinical Journey */}
      <TherapyProcess />

      {/* 5. --- ENHANCED LIGHT BG CTA SECTION --- */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Subtle Background Graphics */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-50 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#F1F9FF] border border-blue-100 rounded-[3rem] p-10 lg:p-20 shadow-[0_40px_80px_-20px_rgba(0,174,239,0.1)]"
          >
            {/* Pulsing Status */}
            <div className="flex justify-center mb-8">
               <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-blue-100 shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#1A2E44]">Initial Assessments Available</span>
               </div>
            </div>

            <h2 className="text-4xl lg:text-7xl font-black text-[#1A2E44] mb-8 tracking-tighter leading-[0.95]">
              Not sure which <br /> 
              therapy is <span className="text-[#00AEEF]">right for your child?</span>
            </h2>

            <p className="text-slate-500 text-lg lg:text-2xl font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
              Every child's journey is unique. Schedule a clinical consultation 
              to engineer a <span className="text-[#1A2E44] font-bold">personalized development roadmap.</span>
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <Link 
                href="/booking" 
                className="w-full sm:w-auto px-12 py-5 bg-[#1A2E44] text-white rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:bg-[#00AEEF] hover:shadow-2xl hover:-translate-y-1 transition-all active:scale-95"
              >
                Book Free Consultation
              </Link>
              
              <a 
                href="tel:92047 86220" 
                className="w-full sm:w-auto px-12 py-5 bg-white border-2 border-slate-100 text-[#1A2E44] rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:border-[#00AEEF] hover:text-[#00AEEF] transition-all flex items-center justify-center gap-3"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Call Clinic
              </a>
            </div>

            {/* Bottom Proof */}
            <div className="mt-12 flex items-center justify-center gap-4 text-slate-400">
               <div className="h-px w-8 bg-slate-200" />
               <p className="text-[10px] font-bold uppercase tracking-widest">Trusted by 2,400+ Families in UP & Bihar</p>
               <div className="h-px w-8 bg-slate-200" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}