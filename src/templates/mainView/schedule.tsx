"use client";

import useVisibility from "../../services/hooks/useVisibility";
import MainLayout from "../components/mainLayout";
import { motion } from "framer-motion";

export default function Schedule({ refSchedule }: { refSchedule: any }) {
  const text1 = useVisibility(); // Untuk "Susunan Acara"
  const text3 = useVisibility(); // Untuk "21 September 2025" dan isinya

  return (
    <MainLayout className="gap-5" height="h-full">
      <section ref={refSchedule} className="w-full max-w-sm mx-auto px-4">
        <motion.h1 ref={text1.ref} animate={text1.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }} transition={{ duration: 0.7 }} className="latin-20 z-10 text-center mb-6">
          Susunan Acara
        </motion.h1>

        <div className="w-full flex flex-col items-center z-10 relative">
          {/* Tanggal - UKURAN DIPERBESAR */}
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={text3.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-400 mb-8 text-center"
          >
            21 September 2025
          </motion.h2>

          {/* Timeline Container - Modern Timeline Design */}
          <div ref={text3.ref} className="w-full max-w-xs mx-auto relative">
            {/* Vertical Line - Timeline dengan gradient emas */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={text3.isVisible ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
              className="absolute left-6 top-6 bottom-6 w-0.5 origin-top z-0"
              style={{
                background: "linear-gradient(to bottom, #CD853F 0%, #B8860B 25%, #8B7355 50%, #B8860B 75%, #CD853F 100%)",
                boxShadow: "0 0 8px rgba(205, 133, 63, 0.3)"
              }}
            />

            {/* Akad Nikah */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={text3.isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }} transition={{ duration: 0.7, delay: 0.8 }} className="relative mb-8 flex items-center z-10">
              {/* Icon Circle */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={text3.isVisible ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                transition={{ duration: 0.6, delay: 1, type: "spring", damping: 15, stiffness: 300 }}
                className="relative w-12 h-12 rounded-full flex items-center justify-center z-10 flex-shrink-0 overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #B8860B 0%, #CD853F 50%, #8B7355 100%)",
                  boxShadow: "0 6px 20px rgba(184, 134, 11, 0.3), 0 0 12px rgba(205, 133, 63, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15)"
                }}
              >
                {/* Inner glow - lebih subtle */}
                <div className="absolute inset-0.5 bg-gradient-to-br from-yellow-100/20 to-transparent rounded-full" />
                
                {/* Wedding Ring icon yang lebih jelas */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="relative z-10 text-black drop-shadow-sm">
                  {/* Ring 1 */}
                  <circle cx="8" cy="12" r="4" fill="none"/>
                  {/* Ring 2 interlocking */}
                  <circle cx="16" cy="12" r="4" fill="none"/>
                  {/* Diamond on ring 1 */}
                  <path d="M8 8L9 9L8 10L7 9Z" fill="currentColor"/>
                  {/* Diamond on ring 2 */}
                  <path d="M16 8L17 9L16 10L15 9Z" fill="currentColor"/>
                </svg>
                
                {/* Sparkle effect - lebih subtle */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <div className="absolute top-1 right-1 w-0.5 h-0.5 bg-white/40 rounded-full animate-pulse" />
                  <div className="absolute bottom-2 left-2 w-0.5 h-0.5 bg-yellow-50/60 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
                </motion.div>
              </motion.div>

              {/* Content Card dengan warm tone */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={text3.isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="ml-6 backdrop-blur-sm rounded-xl p-4 shadow-lg flex-1 hover:shadow-xl transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #fefdf8 0%, #faf9f2 50%, #f7f5eb 100%)",
                  border: "1px solid rgba(205, 133, 63, 0.2)",
                  boxShadow: "0 8px 25px rgba(205, 133, 63, 0.15), 0 0 15px rgba(184, 134, 11, 0.1)"
                }}
              >
                <h3 className="font-bold text-gray-700 mb-1 text-lg">Akad Nikah</h3>
                <p className="text-gray-500 text-sm">08.00 WIB - Selesai</p>
              </motion.div>
            </motion.div>

            {/* Resepsi */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={text3.isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }} transition={{ duration: 0.7, delay: 1.4 }} className="relative flex items-center z-10">
              {/* Icon Circle */}
              <motion.div
                initial={{ scale: 0, rotate: 180 }}
                animate={text3.isVisible ? { scale: 1, rotate: 0 } : { scale: 0, rotate: 180 }}
                transition={{ duration: 0.6, delay: 1.6, type: "spring", damping: 15, stiffness: 300 }}
                className="relative w-12 h-12 rounded-full flex items-center justify-center z-10 flex-shrink-0 overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #B8860B 0%, #CD853F 50%, #8B7355 100%)",
                  boxShadow: "0 6px 20px rgba(184, 134, 11, 0.3), 0 0 12px rgba(205, 133, 63, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15)"
                }}
              >
                {/* Inner glow - lebih subtle */}
                <div className="absolute inset-0.5 bg-gradient-to-br from-yellow-100/20 to-transparent rounded-full" />
                
                {/* Ceremonial/Party icon yang lebih wedding-specific */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="relative z-10 text-black drop-shadow-sm">
                  <path d="M12 2L13.09 8.26L20 9L14 14L15.18 21L12 17.77L8.82 21L10 14L4 9L10.91 8.26L12 2Z" fill="currentColor" fillOpacity="0.3"/>
                  <path d="M8 17L16 17"/>
                  <path d="M10 20L14 20"/>
                  <circle cx="12" cy="12" r="2" fill="currentColor"/>
                  <path d="M6 6L8 8"/>
                  <path d="M18 6L16 8"/>
                </svg>
                
                {/* Sparkle effect dengan delay berbeda - lebih subtle */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <div className="absolute top-2 left-1 w-0.5 h-0.5 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
                  <div className="absolute bottom-1 right-2 w-0.5 h-0.5 bg-yellow-50/60 rounded-full animate-pulse" style={{ animationDelay: "2s" }} />
                </motion.div>
              </motion.div>

              {/* Content Card dengan warm tone */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={text3.isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ duration: 0.5, delay: 1.8 }}
                className="ml-6 backdrop-blur-sm rounded-xl p-4 shadow-lg flex-1 hover:shadow-xl transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #fefdf8 0%, #faf9f2 50%, #f7f5eb 100%)",
                  border: "1px solid rgba(205, 133, 63, 0.2)",
                  boxShadow: "0 8px 25px rgba(205, 133, 63, 0.15), 0 0 15px rgba(184, 134, 11, 0.1)"
                }}
              >
                <h3 className="font-bold text-gray-700 mb-1 text-lg">Resepsi</h3>
                <p className="text-gray-500 text-sm">10.00 WIB - Selesai</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}