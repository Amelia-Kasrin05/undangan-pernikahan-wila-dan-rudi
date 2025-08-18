"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import useWindowWidth from "../../services/hooks/useWindowWidth"

export default function WelcomeView({
  setIsOpen,
  isOpen,
  audio,
}: { isOpen: boolean; setIsOpen: (boolean: boolean) => void; audio: any }) {
  const windowWidth = useWindowWidth()
  const [name, setName] = useState("")

  useEffect(() => {
    const path = window.location.pathname
    const name = path?.split("/")[1].split("-").join(" ")
    setName(name)
  }, [])

  const handleClick = () => {
    audio?.current?.play()
    setIsOpen(true)
  }

  return (
    <React.Fragment>
      {/* Font preloader untuk memastikan font sudah loaded */}
      <div className="font-preload">Hikmah & Uji</div>
      
      <motion.div
        className="absolute max-w-xl w-full p-5 h-[100dvh] flex flex-col justify-center items-center bg-transparent gap-4 overflow-hidden"
        animate={isOpen && { display: "none", opacity: 0, transition: { delay: 1.2 } }}
      >
        <motion.p
          animate={isOpen && { opacity: 0, y: -30, transition: { duration: 0.5 } }}
          className="text-lg text-white"
        >
          The Wedding Of
        </motion.p>

        <motion.div
          animate={isOpen && { opacity: 0, y: -30, transition: { duration: 0.5, delay: 0.2 } }}
          className="w-44 h-44 rounded-full overflow-hidden relative"
        >
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

        <motion.div
          animate={isOpen && { scale: 3, y: -50, opacity: 0, transition: { duration: 1.5, delay: 0.6 } }}
          className="flex items-center justify-center gap-3 text-white intro-text smooth-animation"
        >
          <span 
            className="text-5xl md:text-6xl leading-none"
            style={{
              fontFamily: "GreatVibes-Regular, cursive, serif",
              textRendering: "optimizeLegibility",
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
            }}
          >
            Hikmah
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
            Uji
          </span>
        </motion.div>

        <motion.p
          animate={isOpen && { opacity: 0, y: 30, transition: { duration: 0.5, delay: 0.3 } }}
          className="text-white/80 besley-10 pb-1"
        >
          Kpd. Bpk/Ibu/Saudara/i
        </motion.p>

        {name !== "" && (
          <motion.h1
            animate={isOpen && { opacity: 0, y: 30, transition: { duration: 0.5, delay: 0.2 } }}
            className="text-white font-medium capitalize -mt-1 besley-15"
          >
            {name}
          </motion.h1>
        )}

        <motion.button
          animate={isOpen && { opacity: 0, y: 30, transition: { duration: 0.5 } }}
          onClick={handleClick}
          className={`p-[6px] px-4 bg-blue-400 text-white rounded-full mt-2 hover:bg-blue-400/80 transition-all duration-300 transform hover:scale-105 ${windowWidth < 500 && "text-xs"}`}
        >
          Buka Undangan
        </motion.button>
      </motion.div>
    </React.Fragment>
  )
}