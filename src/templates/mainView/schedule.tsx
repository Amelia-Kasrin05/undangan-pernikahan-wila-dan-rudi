"use client";

import useVisibility from "../../services/hooks/useVisibility";
import MainLayout from "../components/mainLayout";
import { motion } from "framer-motion";

export default function Schedule({ refSchedule }: { refSchedule: any }) {
  const text1 = useVisibility(); // Untuk "Susunan Acara"
  const text3 = useVisibility(); // Untuk "06 September 2025" dan isinya

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
            06 September 2025
          </motion.h2>

          {/* Timeline Container - Modern Timeline Design */}
          <div ref={text3.ref} className="w-full max-w-xs mx-auto relative">
            {/* Vertical Line - Positioned behind content */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={text3.isVisible ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
              className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-blue-300 via-blue-400 to-blue-300 origin-top z-0"
            />

            {/* Akad Nikah */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={text3.isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }} transition={{ duration: 0.7, delay: 0.8 }} className="relative mb-8 flex items-center z-10">
              {/* Icon Circle */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={text3.isVisible ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                transition={{ duration: 0.6, delay: 1, type: "spring", damping: 15, stiffness: 300 }}
                className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center z-10 shadow-lg flex-shrink-0"
              >
                <img src="/images/ring.png" alt="ring" className="w-6 h-6 object-contain filter brightness-0 invert" />
              </motion.div>

              {/* Content Card */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={text3.isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="ml-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-blue-100/50 flex-1 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="font-bold text-gray-700 mb-1 text-lg">Akad Nikah</h3>
                <p className="text-gray-500 text-sm">09.00 WIB - Selesai</p>
              </motion.div>
            </motion.div>

            {/* Resepsi */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={text3.isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }} transition={{ duration: 0.7, delay: 1.4 }} className="relative flex items-center z-10">
              {/* Icon Circle */}
              <motion.div
                initial={{ scale: 0, rotate: 180 }}
                animate={text3.isVisible ? { scale: 1, rotate: 0 } : { scale: 0, rotate: 180 }}
                transition={{ duration: 0.6, delay: 1.6, type: "spring", damping: 15, stiffness: 300 }}
                className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center z-10 shadow-lg flex-shrink-0"
              >
                <img src="/images/reception.png" alt="reception" className="w-6 h-6 object-contain filter brightness-0 invert" />
              </motion.div>

              {/* Content Card */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={text3.isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ duration: 0.5, delay: 1.8 }}
                className="ml-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-pink-100/50 flex-1 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="font-bold text-gray-700 mb-1 text-lg">Resepsi</h3>
                <p className="text-gray-500 text-sm">11.00 WIB - Selesai</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
