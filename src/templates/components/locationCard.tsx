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
      className="shadow-custom p-4 flex flex-col gap-2 text-center max-w-[350px] z-10 rounded-xl"
      style={{
        background: "linear-gradient(135deg, #FFD700 0%, #DAA520 50%, #B8860B 100%)",
        border: "2px solid #FFD700",
        boxShadow: "0 8px 32px rgba(218, 165, 32, 0.3), 0 4px 16px rgba(255, 215, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
      }}
    >
      <motion.h1
        ref={text1.ref}
        animate={
          text1.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }
        }
        transition={{ duration: 0.7 }}
        className="latin-20"
        style={{ color: "#000000", fontWeight: "600" }}
      >
        {title}
      </motion.h1>
      
      <motion.p
        ref={text1.ref}
        animate={
          text1.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }
        }
        transition={{ duration: 0.7 }}
        style={{ color: "#000000", fontWeight: "600" }}
      >
        {date}
      </motion.p>
      
      <motion.p
        ref={text2.ref}
        animate={
          text2.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }
        }
        transition={{ duration: 0.7 }}
        style={{ color: "#000000", fontWeight: "600" }}
      >
        {time}
      </motion.p>
      
      <motion.h2
        ref={text3.ref}
        animate={
          text3.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }
        }
        transition={{ duration: 0.7 }}
        className="font-bold"
        style={{ color: "#000000", fontWeight: "800" }}
      >
        Lokasi / Tempat Acara:
      </motion.h2>
      
      <motion.p
        ref={text4.ref}
        animate={
          text4.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }
        }
        transition={{ duration: 0.7 }}
        className="-mb-3"
        style={{ color: "#000000", fontWeight: "700" }}
      >
        {home}
      </motion.p>
      
      <motion.p
        ref={text5.ref}
        animate={
          text5.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }
        }
        transition={{ duration: 0.7 }}
        className="leading-6"
        style={{ color: "#000000", fontWeight: "600" }}
      >
        {location}
      </motion.p>
    </div>
  );
}