"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function BookingForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Form data capture karne ke liye state
  const [formData, setFormData] = useState({
    childName: "",
    childAge: "",
    whatsappNumber: "",
    therapyType: "",
    concerns: "",
  });

  // Input changes handle karne ka function
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // WhatsApp Message Formatting
    const targetNumber = "919204786220"; // Aapka number (without +)
    
    const message = `*New Clinical Inquiry (Rehablito)* 🏥
-----------------------------------
*Child's Name:* ${formData.childName}
*Child's Age:* ${formData.childAge} Years
*Parent's WhatsApp:* ${formData.whatsappNumber}
*Required Therapy:* ${formData.therapyType}

*Primary Concerns:* ${formData.concerns ? formData.concerns : "No concerns mentioned."}
-----------------------------------
_Submitted securely via Rehablito Website._`;

    // Message ko URL safe banana
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${targetNumber}?text=${encodedMessage}`;

    // UX ke liye thoda loading effect, fir WhatsApp redirect
    setTimeout(() => {
      setLoading(false);
      setSuccess(true); // Show Success UI
      window.open(whatsappUrl, '_blank'); // Open WhatsApp in new tab or app
    }, 1500);
  };

  const resetForm = () => {
    setFormData({ childName: "", childAge: "", whatsappNumber: "", therapyType: "", concerns: "" });
    setSuccess(false);
  };

  return (
    <section className="py-24 bg-white font-plus-jakarta relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-slate-100 rounded-[3rem] p-8 lg:p-14 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] relative overflow-hidden"
        >
          {/* Top Border Accent */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#00AEEF] via-[#8CBF3F] to-[#00AEEF]" />

          <AnimatePresence mode="wait">
            {!success ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit} 
                className="space-y-8"
              >
                
                {/* Form Header */}
                <div className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-8">
                   <div>
                      <h2 className="text-2xl font-black text-[#1A2E44] tracking-tight">Patient Details</h2>
                      <p className="text-sm font-medium text-slate-500 mt-1">All information is encrypted and confidential.</p>
                   </div>
                   <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-100">
                      <svg className="w-4 h-4 text-[#8CBF3F]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                      <span className="text-[10px] font-black uppercase tracking-widest text-green-700">SSL Secure</span>
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Child's Name */}
                  <div className="space-y-2 group">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2 group-focus-within:text-[#00AEEF] transition-colors">Child's Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                         <svg className="w-5 h-5 text-slate-300 group-focus-within:text-[#00AEEF] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                      </div>
                      <input required name="childName" value={formData.childName} onChange={handleChange} type="text" placeholder="e.g. Rahul Singh" className="w-full bg-slate-50/50 border border-slate-200 rounded-2xl pl-12 pr-6 py-4 outline-none focus:bg-white focus:border-[#00AEEF] focus:ring-4 focus:ring-[#00AEEF]/10 transition-all font-bold text-[#1A2E44] placeholder:font-medium" />
                    </div>
                  </div>

                  {/* Child's Age */}
                  <div className="space-y-2 group">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2 group-focus-within:text-[#00AEEF] transition-colors">Child's Age</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                         <svg className="w-5 h-5 text-slate-300 group-focus-within:text-[#00AEEF] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                      </div>
                      <input required name="childAge" value={formData.childAge} onChange={handleChange} type="number" min="1" max="18" placeholder="Years" className="w-full bg-slate-50/50 border border-slate-200 rounded-2xl pl-12 pr-6 py-4 outline-none focus:bg-white focus:border-[#00AEEF] focus:ring-4 focus:ring-[#00AEEF]/10 transition-all font-bold text-[#1A2E44] placeholder:font-medium" />
                    </div>
                  </div>

                  {/* Phone / WhatsApp */}
                  <div className="space-y-2 group">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2 group-focus-within:text-[#00AEEF] transition-colors">WhatsApp Number</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                         <svg className="w-5 h-5 text-slate-300 group-focus-within:text-[#00AEEF] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                      </div>
                      <input required name="whatsappNumber" value={formData.whatsappNumber} onChange={handleChange} type="tel" placeholder="+91 00000 00000" className="w-full bg-slate-50/50 border border-slate-200 rounded-2xl pl-12 pr-6 py-4 outline-none focus:bg-white focus:border-[#00AEEF] focus:ring-4 focus:ring-[#00AEEF]/10 transition-all font-bold text-[#1A2E44] placeholder:font-medium" />
                    </div>
                  </div>

                  {/* Select Therapy */}
                  <div className="space-y-2 group">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2 group-focus-within:text-[#00AEEF] transition-colors">Required Therapy</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                         <svg className="w-5 h-5 text-slate-300 group-focus-within:text-[#00AEEF] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                      </div>
                      <select required name="therapyType" value={formData.therapyType} onChange={handleChange} className="w-full appearance-none bg-slate-50/50 border border-slate-200 rounded-2xl pl-12 pr-10 py-4 outline-none focus:bg-white focus:border-[#00AEEF] focus:ring-4 focus:ring-[#00AEEF]/10 transition-all font-bold text-[#1A2E44] cursor-pointer">
                        <option value="" disabled>Select an option</option>
                        <option value="ABA Therapy">ABA Therapy</option>
                        <option value="Speech Therapy">Speech Therapy</option>
                        <option value="Occupational Therapy">Occupational Therapy</option>
                        <option value="Special Education">Special Education</option>
                        <option value="Not Sure / Assessment Needed">Not Sure / Assessment Needed</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-5 flex items-center pointer-events-none">
                        <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Primary Concerns Area */}
                <div className="space-y-2 group">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2 group-focus-within:text-[#00AEEF] transition-colors">Primary Concerns (Optional)</label>
                  <textarea name="concerns" value={formData.concerns} onChange={handleChange} rows={4} placeholder="Briefly describe the challenge or developmental delay you've noticed..." className="w-full bg-slate-50/50 border border-slate-200 rounded-3xl px-6 py-5 outline-none focus:bg-white focus:border-[#00AEEF] focus:ring-4 focus:ring-[#00AEEF]/10 transition-all font-bold text-[#1A2E44] resize-none placeholder:font-medium"></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={loading}
                  className="relative w-full py-6 bg-[#050A15] text-white rounded-[2rem] font-black uppercase text-xs tracking-[0.4em] hover:bg-[#00AEEF] hover:shadow-[0_20px_40px_rgba(0,174,239,0.3)] transition-all active:scale-95 disabled:opacity-80 disabled:cursor-not-allowed overflow-hidden flex items-center justify-center h-16"
                >
                  {loading ? (
                    <motion.div 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }} 
                      className="flex items-center gap-3"
                    >
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Connecting to WhatsApp...</span>
                    </motion.div>
                  ) : (
                    "Submit Clinical Inquiry"
                  )}
                </button>
              </motion.form>
            ) : (
              /* --- SUCCESS STATE UI --- */
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-16 flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-6 border-8 border-green-100">
                   <motion.svg 
                     initial={{ pathLength: 0 }}
                     animate={{ pathLength: 1 }}
                     transition={{ duration: 0.6, ease: "easeOut" }}
                     className="w-10 h-10 text-[#8CBF3F]" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                   >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                   </motion.svg>
                </div>
                <h3 className="text-4xl font-black text-[#1A2E44] tracking-tighter mb-4">Request Sent via WhatsApp.</h3>
                <p className="text-slate-500 font-medium max-w-md mx-auto mb-10 leading-relaxed">
                  Your details have been successfully transmitted. Our specialist team will review your message and reply to your WhatsApp shortly.
                </p>
                <button 
                  onClick={resetForm}
                  className="px-8 py-4 bg-slate-100 text-slate-600 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-slate-200 transition-colors"
                >
                  Submit Another Request
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}