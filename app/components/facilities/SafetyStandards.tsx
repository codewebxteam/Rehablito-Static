"use client"; // Client component ensure karne ke liye

export default function SafetyStandards() {
  const standards = [
    "24/7 CCTV Surveillance in all therapy rooms", // 
    "Child-proof furniture with rounded safety edges", 
    "Medical-grade sanitization after every session", 
    "Filtered drinking water and hygienic restrooms",
    "Fire safety and emergency protocols in place"
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Card Container */}
        <div className="bg-white rounded-[2xl] p-10 md:p-16 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-12 items-center"> [cite: 192]
          
          <div className="flex-1 text-center md:text-left">
            {/* Accent Green Color from Design System: #4CAF82 */}
            <h2 className="text-3xl font-bold text-slate-900 font-plus-jakarta mb-6">
              Safety First, <span className="text-[#4CAF82]">Always</span> 
            </h2>
            
            <p className="text-slate-600 font-nunito mb-8 leading-relaxed"> 
              We understand that your child's safety is your top priority. Our center is built to exceed standard safety and hygiene requirements. 
            </p>

            <ul className="space-y-4">
              {standards.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-bold font-nunito">
                  {/* Icon uses Accent Green #4CAF82 */}
                  <svg className="w-5 h-5 text-[#4CAF82]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Visual Placeholder for Safety Standards Photo */}
          <div className="flex-1 w-full h-80 bg-slate-100 rounded-3xl border-2 border-dashed border-slate-200 flex items-center justify-center">
            <span className="text-slate-400 font-bold">Safety Standards Visual</span>
          </div>
        </div>
      </div>
    </section>
  );
}