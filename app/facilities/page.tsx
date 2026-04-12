import FacilityHero from "../components/facilities/FacilityHero";
import FacilityGallery from "../components/facilities/FacilityGallery";
import SafetyStandards from "../components/facilities/SafetyStandards";
import VirtualTour from "../components/facilities/VirtualTour";

export default function FacilitiesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Hero: Center Infrastructure Overview */}
      <FacilityHero />

      {/* 2. Photo Gallery: Visuals of Therapy Rooms, Play Area */}
      <FacilityGallery />

      {/* 3. Safety & Hygiene: CCTV, Sanitization, Child-proof spaces */}
      <SafetyStandards />

      {/* 4. Interactive: Virtual Tour / Video Walkthrough */}
      <VirtualTour />

      {/* Bottom CTA */}
      <section className="py-20 bg-[#F7FBFF] text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 font-plus-jakarta">
            Visit Our Center in Person
          </h2>
          <p className="text-slate-600 mb-8 font-nunito">
            We welcome parents to take a physical tour of our facility to see our world-class environment first-hand.
          </p>
          <a href="/contact" className="bg-[#1B6CA8] text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-blue-700 transition-all">
            Schedule a Visit
          </a>
        </div>
      </section>
    </div>
  );
}