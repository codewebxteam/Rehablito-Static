"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import BlogHero from "../components/blog/BlogHero";
import BlogGrid from "../components/blog/BlogGrid";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white font-plus-jakarta">
      
      {/* 1. HERO SECTION (Dark & Searchable) */}
      <BlogHero />

      {/* 2. BLOG LIST (The Smart Grid with Horizontal Snap on Mobile) */}
      <BlogGrid />

      {/* 3. --- ENHANCED BLOG-SPECIFIC CTA --- */}
      <section className="py-24 lg:py-40 bg-white relative overflow-hidden">
        {/* Subtle Background Blobs */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-50/50 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-50/50 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#050A15] rounded-[4rem] p-12 lg:p-28 text-center relative overflow-hidden shadow-[0_60px_100px_-20px_rgba(0,0,0,0.3)]"
          >
            {/* Inner Glow Decorative */}
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,#00AEEF15_0%,transparent_50%)]" />

            <div className="relative z-10">
               <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#00AEEF] animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60">Community Engagement</span>
              </motion.div>

              <h2 className="text-5xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-10">
                Found what you were <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-white italic">looking for?</span>
              </h2>

              <p className="text-slate-400 text-lg lg:text-2xl font-medium max-w-2xl mx-auto mb-14 leading-relaxed">
                If our articles raised more questions, our <span className="text-white">Clinical Specialists</span> are ready to help with personalized answers.
              </p>

              {/* Action Buttons (Email Funda Removed) */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <Link 
                  href="/book" 
                  className="w-full sm:w-auto px-12 py-6 bg-[#00AEEF] text-[#050A15] rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:bg-white hover:shadow-2xl transition-all active:scale-95"
                >
                  Book Assessment
                </Link>
                
                <a 
                  href="https://wa.me/8271586892" 
                  target="_blank"
                  className="w-full sm:w-auto px-12 py-6 bg-white/5 border border-white/10 text-white rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:bg-white/10 transition-all flex items-center justify-center gap-3"
                >
                  <svg className="w-4 h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Connect via WhatsApp
                </a>
              </div>

              {/* Verified Trust Band */}
              <div className="mt-16 pt-12 border-t border-white/5 flex flex-col items-center gap-2">
                 <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em]">2,400+ Stories of Progress</p>
                 <div className="flex gap-4">
                    <div className="h-1 w-8 bg-[#00AEEF] rounded-full" />
                    <div className="h-1 w-8 bg-white/10 rounded-full" />
                    <div className="h-1 w-8 bg-white/10 rounded-full" />
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}