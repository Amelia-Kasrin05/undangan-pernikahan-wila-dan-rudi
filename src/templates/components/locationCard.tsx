import { motion } from "framer-motion";
import useVisibility from "../../services/hooks/useVisibility";

export default function LocationCard({
  title,
  date,
  time,
  home,
  location,
}: {
  title: string;
  date: string;
  time: string;
  home: string;
  location: string;
}) {
  const text1 = useVisibility();
  const text2 = useVisibility();
  const text3 = useVisibility();
  const text4 = useVisibility();
  const text5 = useVisibility();

  return (
    <div 
      className="shadow-custom p-6 flex flex-col gap-3 text-center max-w-[350px] z-10 rounded-xl location-card"
      style={{
        // SOLUSI 1: Background gelap dengan border gold
        background: "linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 50%, #2a2a2a 100%)",
        border: "3px solid #FFD700",
        boxShadow: "0 8px 32px rgba(255, 215, 0, 0.4), 0 4px 16px rgba(218, 165, 32, 0.3), inset 0 1px 0 rgba(255, 215, 0, 0.3)"
      }}
    >
      <motion.h1
        ref={text1.ref}
        animate={
          text1.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }
        }
        transition={{ duration: 0.7 }}
        className="latin-20 location-card-text"
        style={{ 
          color: "#FFD700 !important", 
          fontWeight: "700",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 10px rgba(255, 215, 0, 0.3)",
          fontSize: "2.5rem"
        }}
      >
        {title}
      </motion.h1>
      
      <motion.p
        ref={text1.ref}
        animate={
          text1.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }
        }
        transition={{ duration: 0.7 }}
        className="location-card-text"
        style={{ 
          color: "#FFFFFF !important", 
          fontWeight: "600",
          textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)",
          fontSize: "1.1rem"
        }}
      >
        {date}
      </motion.p>
      
      <motion.p
        ref={text2.ref}
        animate={
          text2.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }
        }
        transition={{ duration: 0.7 }}
        className="location-card-text"
        style={{ 
          color: "#FFFFFF !important", 
          fontWeight: "600",
          textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)",
          fontSize: "1.1rem"
        }}
      >
        {time}
      </motion.p>
      
      <motion.h2
        ref={text3.ref}
        animate={
          text3.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }
        }
        transition={{ duration: 0.7 }}
        className="font-bold location-card-text"
        style={{ 
          color: "#FFD700 !important", 
          fontWeight: "800",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 8px rgba(255, 215, 0, 0.2)",
          fontSize: "1.2rem",
          marginTop: "0.5rem"
        }}
      >
        Lokasi / Tempat Acara:
      </motion.h2>
      
      <motion.p
        ref={text4.ref}
        animate={
          text4.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }
        }
        transition={{ duration: 0.7 }}
        className="-mb-2 location-card-text"
        style={{ 
          color: "#FFFFFF !important", 
          fontWeight: "700",
          textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)",
          fontSize: "1.1rem"
        }}
      >
        {home}
      </motion.p>
      
      <motion.p
        ref={text5.ref}
        animate={
          text5.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }
        }
        transition={{ duration: 0.7 }}
        className="leading-6 location-card-text"
        style={{ 
          color: "#FFFFFF !important", 
          fontWeight: "600",
          textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)",
          fontSize: "1rem",
          lineHeight: "1.5"
        }}
      >
        {location}
      </motion.p>
    </div>
  );
}