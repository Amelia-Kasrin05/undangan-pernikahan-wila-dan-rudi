"use client"

import Uji from "../../assets/uji"
import Hikmah from "../../assets/hikmah"
import Dan from "../../assets/dan"
import { motion } from "framer-motion"

export default function IntroView() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{
        opacity: 0,
        display: "none",
        transition: { delay: 4.5, duration: 1 },
      }}
      className="absolute w-full h-[100dvh] flex justify-center bg-gray-200 overflow-hidden"
    >
      <div className="absolute max-w-xl w-full p-5 h-[100dvh] flex flex-col justify-center">
        <div className="relative h-[100dvh] flex flex-col justify-center items-center gap-6">
          {/* Animasi Uji - muncul pertama dengan smooth animation */}
 <motion.div
            className="w-full max-w-[300px] flex justify-center"
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 1.2,
                delay: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94], 
              },
            }}
          >
            <Hikmah />
          </motion.div>

          {/* Animasi Dan - muncul kedua dengan bounce effect */}
          <motion.div
            className="w-full max-w-[100px] flex justify-center"
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
              transition: {
                duration: 0.8,
                delay: 1.8,
                ease: "backOut",
                scale: {
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }
              },
            }}
          >
            <Dan />
          </motion.div>

          {/* Animasi Hikmah - muncul terakhir dengan elegant slide */}
          <motion.div
            className="w-full max-w-[300px] flex justify-center"
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 1.2,
                delay: 2.8,
                ease: [0.25, 0.46, 0.45, 0.94], // matching easing dengan Uji
              },
            }}
          >
            <Uji />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}