"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const therapies = [
  { name: "ABA Therapy", href: "/services#aba" },
  { name: "Speech Therapy", href: "/services#speech" },
  { name: "Occupational Therapy", href: "/services#ot" },
  { name: "Physiotherapy", href: "/services#physio" },
];

const supports = [
  { name: "Book Appointment", href: "/book" },
  { name: "Donate Session", href: "/donate" },
  { name: "Contact Us", href: "/contact" },
  { name: "FAQs", href: "/faq" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#050A15] text-slate-400 pt-20 pb-10 overflow-hidden font-plus-jakarta border-t border-white/5">
      
      {/* --- ADVANCED BACKGROUND GRAPHICS (Deep Depth) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* --- DYNAMIC BOOKING ACTION HUB (High Conversion / Low Height) --- */}
        <div className="relative group mb-20">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#1B6CA8] via-[#00AEEF] to-[#8CBF3F] rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative bg-[#0A1120]/80 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden">
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 shadow-inner">
                <svg className="w-8 h-8 text-[#00AEEF] animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl lg:text-3xl font-black text-white tracking-tighter">Ready to See Progress?</h3>
                <p className="text-slate-500 font-bold text-sm uppercase tracking-widest mt-1">Book your clinical assessment today</p>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end gap-3 relative z-10">
              <Link 
                href="/book" 
                className="group/btn relative px-10 py-5 bg-white text-[#1A2E44] rounded-2xl font-black text-lg transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-[1.02] active:scale-95 flex items-center gap-3"
              >
                Schedule Appointment
                <svg className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Next Available Slot: Today 4:00 PM</span>
              </div>
            </div>

            {/* Background Abstract Wave */}
            <svg className="absolute right-0 top-0 h-full w-1/2 opacity-[0.03] pointer-events-none" viewBox="0 0 400 200">
                <path d="M0,100 C150,200 250,0 400,100 L400,200 L0,200 Z" fill="#fff"></path>
            </svg>
          </div>
        </div>

        {/* --- MAIN FOOTER CONTENT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-5 space-y-8">
            <Link href="/" className="group inline-block">
              <div className="text-3xl font-black tracking-tighter flex items-center">
                <span className="text-[#E32636]">R</span>
                <span className="text-[#F28500]">e</span>
                <span className="text-[#FFD700]">h</span>
                <span className="text-[#8CBF3F]">a</span>
                <span className="text-[#00AEEF]">b</span>
                <span className="text-white">lito</span>
                <div className="w-2 h-2 bg-[#00AEEF] rounded-full ml-1" />
              </div>
            </Link>
            <p className="text-lg leading-relaxed text-slate-500 max-w-sm">
              Science-backed therapy for meaningful life changes. Leading Speech & Autism care in Uttar Pradesh.
            </p>
            <div className="flex gap-4">
              {['WhatsApp', 'Instagram', 'Facebook'].map((item) => (
                <Link key={item} href="#" className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-[#00AEEF] hover:text-white transition-all duration-500">
                   <div className="w-5 h-5 bg-current" />
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] opacity-50">Our Expertise</h4>
              <ul className="space-y-4">
                {therapies.map(t => (
                  <li key={t.name}>
                    <Link href={t.href} className="text-slate-500 hover:text-[#00AEEF] transition-all text-sm font-bold flex items-center gap-2 group">
                      <div className="w-1.5 h-[1px] bg-blue-600 transition-all group-hover:w-4" />
                      {t.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6 text-slate-500">
              <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] opacity-50">Quick Help</h4>
              <ul className="space-y-4">
                {supports.map(s => (
                  <li key={s.name}>
                    <Link href={s.href} className="text-slate-500 hover:text-white transition-all text-sm font-bold">{s.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1 space-y-6">
              <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] opacity-50">Contact Hub</h4>
              <div className="space-y-4">
                <Link href="tel:8271586892" className="text-2xl font-black text-white block hover:text-[#00AEEF] transition-all tracking-tighter leading-none">
                  +91 82715 86892
                </Link>
                <p className="text-xs font-bold uppercase tracking-widest text-[#00AEEF]">Support@rehablito.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- DYNAMIC COPYRIGHT & CREDITS --- */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-[10px] font-black text-slate-700 uppercase tracking-[0.3em]">© 2026 Rehablito Autism Center</p>
          
          <Link 
            href="https://codewebx.in" 
            target="_blank"
            className="group flex items-center gap-4 px-6 py-2.5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#00AEEF]/50 transition-all"
          >
             <span className="text-[10px] font-bold text-slate-600 group-hover:text-white transition-colors uppercase tracking-widest">Built with precision by</span>
             <span className="text-xs font-black text-white group-hover:text-[#00AEEF] transition-colors">CodeWebX.in</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}