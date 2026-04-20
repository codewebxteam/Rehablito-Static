"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react"; // Professional icon import
import { useState } from "react";

export default function WhatsAppWidget() {
  const [isHovered, setIsHovered] = useState(false);
  
  const phoneNumber = "919204786220";
  const message = "Hello Rehablito Team, I would like to inquire about your therapy services.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-24 right-6 lg:bottom-10 lg:right-10 z-[110] flex flex-col items-end gap-3">
      
      {/* Premium Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            className="bg-white/90 backdrop-blur-md border border-slate-100 px-4 py-2 rounded-2xl shadow-xl flex items-center gap-2 mb-1"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[12px] font-bold text-[#1A2E44] whitespace-nowrap">
              Chat with an Expert
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative">
        {/* Animated Pulse Ring for "Premium" attention */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20" />
        
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] border-2 border-white/20 transition-all"
        >
          {/* Lucide React Icon */}
          <MessageCircle size={30} strokeWidth={2.5} fill="currentColor" fillOpacity={0.2} />
        </motion.a>
      </div>
    </div>
  );
}