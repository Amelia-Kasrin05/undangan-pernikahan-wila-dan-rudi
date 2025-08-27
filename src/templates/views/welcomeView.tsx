"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useWindowWidth from "../../services/hooks/useWindowWidth";

export default function WelcomeView({ setIsOpen, isOpen, audio }: { isOpen: boolean; setIsOpen: (boolean: boolean) => void; audio: any }) {
  const windowWidth = useWindowWidth();
  const [name, setName] = useState("");

  useEffect(() => {
    const path = window.location.pathname;
    const name = path?.split("/")[1].split("-").join(" ");
    setName(name);
  }, []);

  const handleClick = () => {
    audio?.current?.play();
    setIsOpen(true);
  };

  return (
    <React.Fragment>
      {/* Font preloader untuk memastikan font sudah loaded */}
      <div className="font-preload">Wila & Rudi</div>

      <motion.div className="absolute max-w-xl w-full p-5 h-[100dvh] flex flex-col justify-center items-center bg-transparent gap-4 overflow-hidden" animate={isOpen && { display: "none", opacity: 0, transition: { delay: 1.2 } }}>
        <motion.p animate={isOpen && { opacity: 0, y: -30, transition: { duration: 0.5 } }} className="text-lg text-white">
          The Wedding Of
        </motion.p>

        <motion.div animate={isOpen && { opacity: 0, y: -30, transition: { duration: 0.5, delay: 0.2 } }} className="w-44 h-44 rounded-full overflow-hidden relative">
          <motion.div
            className="w-[110%] h-full absolute top-0 left-0"
            style={{
              backgroundImage: "url('/images/welcome.jpg')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
        </motion.div>

        <motion.div animate={isOpen && { scale: 3, y: -50, opacity: 0, transition: { duration: 1.5, delay: 0.6 } }} className="flex items-center justify-center gap-3 text-white intro-text smooth-animation">
          <span
            className="text-5xl md:text-6xl leading-none"
            style={{
              fontFamily: "GreatVibes-Regular, cursive, serif",
              textRendering: "optimizeLegibility",
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
            }}
          >
            Wila
          </span>
          <span
            className="text-3xl md:text-4xl mx-1"
            style={{
              fontFamily: "GreatVibes-Regular, cursive, serif",
              textRendering: "optimizeLegibility",
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
            }}
          >
            &
          </span>
          <span
            className="text-5xl md:text-6xl leading-none"
            style={{
              fontFamily: "GreatVibes-Regular, cursive, serif",
              textRendering: "optimizeLegibility",
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
            }}
          >
            Rudi
          </span>
        </motion.div>

        <motion.p animate={isOpen && { opacity: 0, y: 30, transition: { duration: 0.5, delay: 0.3 } }} className="text-white/80 besley-10 pb-1">
          Kpd. Bpk/Ibu/Saudara/i
        </motion.p>

        {name !== "" && (
          <motion.h1 animate={isOpen && { opacity: 0, y: 30, transition: { duration: 0.5, delay: 0.2 } }} className="text-white font-medium capitalize -mt-1 besley-15">
            {name}
          </motion.h1>
        )}

        <motion.button
          animate={isOpen && { opacity: 0, y: 30, transition: { duration: 0.5 } }}
          onClick={handleClick}
          className={`group relative px-8 py-4 text-white font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden active:scale-95 mt-2 ${windowWidth < 500 && "text-sm px-6 py-3"}`}
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
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

          <div className="relative flex items-center justify-center gap-3">
            <span className="text-lg font-bold drop-shadow-sm transition-colors duration-300">Buka Undangan</span>
          </div>

          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-600/20 to-gray-700/20 group-hover:from-yellow-400/20 group-hover:to-amber-400/20 blur-sm group-hover:blur-md transition-all duration-300" />
        </motion.button>
      </motion.div>
    </React.Fragment>
  );
}
