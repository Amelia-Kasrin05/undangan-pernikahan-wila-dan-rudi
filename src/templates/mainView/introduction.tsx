"use client";

import type React from "react";
import { useCallback, useState, useEffect } from "react";
import MainLayout from "../components/mainLayout";
import ProfileCard from "../components/profileCard";
import useVisibility from "../../services/hooks/useVisibility";
import CountdownCard from "../components/countdownCard";
import { motion } from "framer-motion";

export default function Introduction({ refBride }: { refBride: any; windowWidth: number }) {
  const bismillah = useVisibility();
  const countdown = useVisibility();
  const button = useVisibility();

  // Simplified ref merging
  const mergedRef = useCallback(
    (node: HTMLDivElement) => {
      if (bismillah.ref) {
        (bismillah.ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
      }
      if (typeof refBride === "function") {
        refBride(node);
      } else if (refBride) {
        (refBride as React.MutableRefObject<HTMLDivElement | null>).current = node;
      }
    },
    [bismillah.ref, refBride]
  );

  // Countdown logic
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const countdownDate = new Date("September 21, 2025 08:00:00").getTime();

  // FIX: Pindahkan interval ke useEffect dan bersihkan
  useEffect(() => {
    const updateDuration = (duration: number) => {
      const days = Math.floor(duration / (1000 * 60 * 60 * 24));
      const hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((duration % (1000 * 60)) / 1000);
      setTime({ days, hours, minutes, seconds });
    };

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance < 0) {
        clearInterval(interval);
        updateDuration(0);
        return;
      }

      updateDuration(distance);
    }, 1000);

    // Initial calculation
    const now = new Date().getTime();
    const distance = countdownDate - now;
    updateDuration(distance > 0 ? distance : 0);

    // Cleanup interval
    return () => clearInterval(interval);
  }, [countdownDate]);

  return (
    <MainLayout>
      <motion.div ref={mergedRef} className="relative flex justify-center items-center w-full mb-6 text-center px-4" animate={bismillah.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }} transition={{ duration: 0.7 }}>
        <h1 className="font-bold text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl z-10 relative leading-relaxed whitespace-nowrap">بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</h1>
      </motion.div>

      <div className="text-center flex flex-col items-center px-4">
        <p className="font-medium mb-4">Assalamu'alaikum Warahmatullaahi Wabarakaatuh</p>

        <p className="font-light text-gray-500 mb-8">Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah semoga ridho-Mu tercurah mengiringi pernikahan kami.</p>

        <p className="text-gray-600 mb-6">Kami yang berbahagia,</p>

        {/* Simplified Profile Cards - No complex refs */}
        <ProfileCard name="Wila Novita Sari, AM.d" desc="Putri tunggal dari Bapak Jusrul (Alm.) dan Ibu Desmaini" />

        <ProfileCard name="Rudi Mardiansah" desc="Putra kedua dari Bapak Hamdaniwal dan Ibu Lina Fitri Yeni" />

        <footer className="mx-5 mt-10 flex flex-col gap-10">
          <p className="text-gray-600 text-lg sm:text-xl md:text-2xl font-medium">Minggu, 21 September 2025</p>

          <div ref={countdown.ref} className="flex gap-3 justify-center">
            <CountdownCard isInView={countdown.isVisible} num={time.days} desc="Days" />
            <CountdownCard isInView={countdown.isVisible} num={time.hours} desc="Hours" delay={0.2} />
            <CountdownCard isInView={countdown.isVisible} num={time.minutes} desc="Min" delay={0.4} />
            <CountdownCard isInView={countdown.isVisible} num={time.seconds} desc="Sec" delay={0.6} />
          </div>

          <motion.button
            ref={button.ref}
            animate={button.isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, type: "spring", damping: 15 }}
            onClick={() => {
              window.open("https://calendar.app.google/6JdZsh2FY2SMricr7", "_blank");
            }}
            className="group relative px-8 py-4 text-white font-semibold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden active:scale-95"
            style={{
              background: "linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 25%, #434343 50%, #1a1a1a 75%, #2a2a2a 100%)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(68, 68, 68, 0.3)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "linear-gradient(135deg, #D4AF37 0%, #FFD700 25%, #B8860B 50%, #FFD700 75%, #D4AF37 100%)";
              e.currentTarget.style.color = "#1a1a1a";
              e.currentTarget.style.boxShadow = "0 15px 40px rgba(212, 175, 55, 0.6), 0 0 30px rgba(255, 215, 0, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 25%, #434343 50%, #1a1a1a 75%, #2a2a2a 100%)";
              e.currentTarget.style.color = "#ffffff";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(68, 68, 68, 0.3)";
            }}
          >
            {/* Shimmer effect - lebih terlihat pada background gelap */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

            <div className="relative flex items-center justify-center gap-3">
              <img src="/calendar.png" alt="Calendar" className="w-5 h-5 drop-shadow-sm transition-all duration-300" />
              <span className="text-lg font-bold drop-shadow-sm transition-colors duration-300">Ingatkan via Google Kalender</span>
            </div>

            {/* Glow effect yang berubah saat hover */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gray-600/20 to-gray-700/20 group-hover:from-yellow-400/20 group-hover:to-amber-400/20 blur-sm group-hover:blur-md transition-all duration-300" />
          </motion.button>
        </footer>
      </div>
    </MainLayout>
  );
}
