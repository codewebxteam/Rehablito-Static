import BookingHero from "../components/booking/BookingHero";
import BookingForm from "../components/booking/BookingForm";

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-white">
      <BookingHero />
      <BookingForm />
      
      {/* Visual Proof Footer */}
      <div className="py-12 bg-white flex justify-center border-t border-slate-50">
         <div className="flex gap-4 opacity-20 grayscale font-plus-jakarta">
            <span className="text-xl font-black text-slate-400 tracking-tighter uppercase">Data Secured</span>
            <span className="text-xl font-black text-slate-400 tracking-tighter uppercase">Clinical Compliance</span>
         </div>
      </div>
    </main>
  );
}