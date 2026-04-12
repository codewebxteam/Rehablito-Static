"use client";

export default function FacilityGallery() {
  // Blueprint ke rooms aur unke descriptions [cite: 68, 131, 133, 140, 143]
  const rooms = [
    { 
      name: "Sensory Integration Gym", 
      desc: "Equipped with specialized swings and tactile materials.", 
      color: "bg-[#EBF5FF]" // Light Blue Background 
    }, 
    { 
      name: "Speech Therapy Suites", 
      desc: "Sound-optimized rooms for focused communication sessions.", 
      color: "bg-green-50" 
    }, 
    { 
      name: "Occupational Therapy Zone", 
      desc: "Space for fine motor skills and self-care development.", 
      color: "bg-orange-50" 
    }, 
    { 
      name: "Parent Waiting Lounge", 
      desc: "Comfortable space for parents with WiFi and resources.", 
      color: "bg-purple-50" 
    }, 
    { 
      name: "Special Education Classroom", 
      desc: "Small group setting for academic readiness.", 
      color: "bg-yellow-50" 
    }
  ];

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Masonry-style grid layout [cite: 71, 195] */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rooms.map((room, i) => (
          <div 
            key={i} 
            className={`${room.color} rounded-3xl p-2 shadow-sm hover:shadow-xl transition-all group cursor-pointer hover:-translate-y-1`}
          >
            {/* Image Placeholder with Lightbox-ready feel [cite: 71, 195] */}
            <div className="aspect-video bg-white/50 rounded-2xl mb-4 flex items-center justify-center border-2 border-dashed border-slate-200">
              <span className="text-slate-400 font-bold group-hover:text-blue-500 transition-colors">
                [Room Photo]
              </span>
            </div>
            
            <div className="px-6 pb-6 text-center">
              {/* Typography based on Page 10  */}
              <h3 className="text-xl font-bold text-[#1A2E44] font-plus-jakarta mb-2">
                {room.name}
              </h3>
              <p className="text-sm text-[#6B7E95] font-nunito leading-relaxed">
                {room.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}