"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const posts = [
  {
    title: "Early Signs of Autism in 2-Year-Olds",
    slug: "early-signs-autism-toddlers",
    excerpt: "Learn how to identify developmental milestones and early indicators of ASD in toddlers.",
    category: "Autism",
    author: "Dr. Abhishek",
    date: "March 2026",
    color: "#E32636"
  },
  {
    title: "Speech Delay vs Autism: Understanding the Difference",
    slug: "speech-delay-vs-autism",
    excerpt: "Expert breakdown of communication challenges and how to seek the right therapy.",
    category: "Speech Therapy",
    author: "Specialist Amit",
    date: "March 2026",
    color: "#00AEEF"
  },
  {
    title: "Government Schemes for Disabled Children India 2026",
    slug: "government-schemes-disabled-children-2026",
    excerpt: "A complete guide to Niramaya, ADIP, and other state-specific schemes for parents.",
    category: "Parenting",
    author: "Admin Team",
    date: "March 2026",
    color: "#8CBF3F"
  }
];

export default function BlogGrid() {
  return (
    <section 
      className="py-24 bg-white font-plus-jakarta relative overflow-hidden"
      itemScope itemType="http://schema.org/Blog"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* --- HEADER (SEO H2) --- */}
        <div className="flex justify-between items-end mb-12">
           <h2 className="text-3xl lg:text-5xl font-black text-[#1A2E44] tracking-tighter">
             Latest <span className="text-slate-300 font-medium">Insights.</span>
           </h2>
           <div className="hidden lg:flex gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest">
              Swipe to explore <span className="animate-bounce-x">&rarr;</span>
           </div>
        </div>

        {/* --- HYBRID LAYOUT: Grid on Desktop, Horizontal on Mobile --- */}
        <div className="flex lg:grid lg:grid-cols-3 gap-6 lg:gap-10 overflow-x-auto lg:overflow-visible no-scrollbar snap-x snap-mandatory pb-10 lg:pb-0">
          {posts.map((post, i) => (
            <motion.article 
              key={i}
              itemProp="blogPost" itemScope itemType="http://schema.org/BlogPosting"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="min-w-[85vw] md:min-w-[45vw] lg:min-w-0 snap-center group relative flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] transition-all duration-500"
            >
              <Link href={`/blog/${post.slug}`} className="absolute inset-0 z-30" aria-label={post.title} />

              {/* Thumbnail Area */}
              <div className="aspect-[16/10] bg-slate-50 relative overflow-hidden">
                <div 
                  className="absolute top-5 left-5 z-20 px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest text-white shadow-lg"
                  style={{ backgroundColor: post.color }}
                >
                  {post.category}
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E44]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                   <span className="text-white text-[10px] font-black uppercase tracking-[0.3em]">Read Article &rarr;</span>
                </div>

                <div className="w-full h-full flex items-center justify-center opacity-10 group-hover:scale-110 transition-transform duration-700">
                   <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2z" />
                   </svg>
                </div>
              </div>

              {/* Content Space */}
              <div className="p-8 lg:p-10 flex flex-col flex-grow">
                <h3 
                  itemProp="headline"
                  className="text-xl lg:text-2xl font-black text-[#1A2E44] mb-4 tracking-tighter leading-tight group-hover:text-[#00AEEF] transition-colors"
                >
                  {post.title}
                </h3>
                <p itemProp="description" className="text-slate-500 text-sm font-medium leading-relaxed mb-8 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[10px] font-black text-slate-400">
                       {post.author.charAt(0)}
                    </div>
                    <div className="flex flex-col">
                       <span itemProp="author" className="text-[10px] font-black text-[#1A2E44] uppercase tracking-wider">{post.author}</span>
                       <span itemProp="datePublished" className="text-[9px] font-bold text-slate-400">{post.date}</span>
                    </div>
                  </div>
                  <div className="w-9 h-9 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-[#1A2E44] group-hover:text-white transition-all">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 h-1.5 w-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left" style={{ backgroundColor: post.color }} />
            </motion.article>
          ))}
        </div>

      </div>

      {/* --- INJECTED CSS FOR NO-SCROLLBAR --- */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
        .animate-bounce-x { display: inline-block; animation: bounce-x 1s infinite; }
      `}</style>
    </section>
  );
}