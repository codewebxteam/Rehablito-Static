export default function CategoryFilter() {
  const categories = ["All", "Autism", "Speech Therapy", "Occupational Therapy", "Parenting Tips", "Research"];
  
  return (
    <nav className="py-8 sticky top-20 z-40 bg-[#F7FBFF]/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
        <div className="flex space-x-4 min-w-max justify-center">
          {categories.map((cat, i) => (
            <button 
              key={i} 
              className={`px-6 py-2 rounded-full font-bold text-sm transition-all shadow-sm
                ${i === 0 ? 'bg-[#1B6CA8] text-white' : 'bg-white text-slate-600 hover:border-[#1B6CA8] border border-slate-200'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}