import { useState } from "react";
import MainLayout from "../components/mainLayout";
import ModalRsvp from "../components/modalRsvp";
import useVisibility from "../../services/hooks/useVisibility";
import { motion } from "framer-motion";

export default function Rsvp({ name }: { name: string }) {
  const text1 = useVisibility();
  const text2 = useVisibility();
  const text3 = useVisibility();
  const btn1 = useVisibility();

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <MainLayout height="h-full" className="text-center gap-4">
        <motion.h1
          ref={text1.ref}
          animate={
            text1.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }
          }
          transition={{ duration: 0.7 }}
          className="latin-20"
        >
          RSVP
        </motion.h1>
        <motion.p
          ref={text2.ref}
          animate={
            text2.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }
          }
          transition={{ duration: 0.7 }}
          className="font-medium"
        >
          Tanpa mengurangi rasa hormat kami kepada para tamu undangan, mohon
          sekiranya tamu undangan dapat melakukan konfirmasi kehadiran terlebih
          dahulu.
        </motion.p>
        <motion.p
          ref={text3.ref}
          animate={
            text3.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }
          }
          transition={{ duration: 0.7 }}
        >
          Isi konfirmasi kehadiran hanya dapat dilakukan satu kali
        </motion.p>
        <motion.button
          ref={btn1.ref}
          animate={
            btn1.isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.6, type: "spring", damping: 15 }}
          disabled={isModalOpen}
          onClick={() => setIsModalOpen(true)}
          className="group relative px-8 py-4 text-white font-semibold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden active:scale-95"
          style={{
            background: "linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 25%, #434343 50%, #1a1a1a 75%, #2a2a2a 100%)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(68, 68, 68, 0.3)"
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
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="drop-shadow-sm transition-colors duration-300">
              <path d="M9 11H7l5-8 5 8h-2l-1.5 3L12 16.5 10.5 14 9 11zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            </svg>
            <span className="text-lg font-bold drop-shadow-sm transition-colors duration-300">Isi Konfirmasi Kehadiran</span>
          </div>
          
          {/* Glow effect yang berubah saat hover */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gray-600/20 to-gray-700/20 group-hover:from-yellow-400/20 group-hover:to-amber-400/20 blur-sm group-hover:blur-md transition-all duration-300" />
        </motion.button>
      </MainLayout>
      {isModalOpen && (
        <ModalRsvp setIsModalOpen={setIsModalOpen} username={name} />
      )}
    </>
  );
}