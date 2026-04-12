export default function VirtualTour() {
  return (
    <section className="py-20 bg-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 font-plus-jakarta mb-6">Take a Virtual Walkthrough</h2> 
        <div className="aspect-video bg-slate-900 rounded-[2rem] shadow-2xl overflow-hidden relative group cursor-pointer">
          {/* Future: Replace with YouTube/Vimeo Embed */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-blue-600 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            </div>
          </div>
          <img src="/api/placeholder/800/450" alt="Virtual Tour Thumbnail" className="w-full h-full object-cover opacity-50" />
        </div>
        <p className="mt-8 text-slate-500 font-nunito italic">
          Explore our center from the comfort of your home. Video walk-through coming soon. 
        </p>
      </div>
    </section>
  );
}