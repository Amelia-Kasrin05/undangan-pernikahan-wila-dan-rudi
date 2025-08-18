"use client";

import useVisibility from "../../services/hooks/useVisibility";
import MainLayout from "../components/mainLayout";
import { motion } from "framer-motion";

export default function LoveStory({ refLoveStory }: { refLoveStory: any }) {
  const title = useVisibility();
  const story1 = useVisibility();
  const story2 = useVisibility();
  const story3 = useVisibility();
  const story4 = useVisibility();

  const stories = [
    {
      ref: story1,
      year: "2019",
      title: "Awal Pertemuan",
      content:
        "Tahun 2019, takdir mempertemukan kami dalam rekan satu tim organisasi di kampus tercinta Universitas Jambi. Dari sana, kami mulai sering bertukar pikiran, ide, berbagi cerita, dan saling menguatkan di setiap langkah. Semuanya menumbuhkan rasa yang tak kami sadari menjadi awal kisah ini.",
    },
    {
      ref: story2,
      year: "2024",
      title: "Mulai Merajut Masa Depan",
      content: "Lima tahun berlalu, di 2024 kami menyadari ada kecocokan yang tak bisa diabaikan. Kami pun mulai merencanakan masa depan bersama, untuk saling mengenal lebih dalam termasuk mengenal keluarga.",
    },
    {
      ref: story3,
      year: "2025",
      title: "Lamaran",
      content:
        "Sabtu, 5 Juli 2025, menjadi hari penuh makna bagi kami. Ketika dua keluarga besar bertemu berbagi cerita dan restu. Dihari itu niat yang selama ini kami simpan, resmi terucap, mengikat hati dalam janji untuk melangkah bersama.",
    },
    {
      ref: story4,
      year: "2025",
      title: "Hari Bahagia",
      content:
        "Tibalah hari yang kami nantikan, 6 September 2025, hari dimana kami memulai babak baru. Bukan lagi sekadar aku dan kamu, tetapi kita. Bukan hanya kisah cinta, tetapi janji seumur hidup, hingga surga. Inilah cerita kami, yang kini berlanjut menjadi ikatan suci.",
    },
  ];

  return (
    <MainLayout className="text-center gap-5" height="h-full">
      <section ref={refLoveStory}>
        {/* Judul dengan style yang sama seperti Wedding Gift */}
        <motion.h1 ref={title.ref} animate={title.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }} transition={{ duration: 0.7 }} className="latin-25">
          Love Story
        </motion.h1>

        {/* Container dengan padding minimal untuk full width */}
        <div className="w-full h-full flex flex-col gap-6 z-10 relative px-1 pb-4">
          {/* Timeline container */}
          <div className="relative w-full">
            {/* Main vertical line - digeser lebih ke kiri */}
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-400"></div>

            {/* Story items */}
            <div className="space-y-6">
              {stories.map((story, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline dot - digeser lebih ke kiri */}
                  <motion.div initial={{ scale: 0 }} animate={story.ref.isVisible ? { scale: 1 } : { scale: 0 }} transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }} className="absolute left-2.5 w-3 h-3 bg-gray-400 rounded-full z-10" />

                  {/* Horizontal line connecting to content */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={story.ref.isVisible ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="absolute left-3 top-1.5 w-8 h-0.5 bg-gray-400 origin-left"
                  />

                  {/* Content - margin kiri dikurangi untuk lebih full */}
                  <div ref={story.ref.ref} className="ml-12 flex-1 pr-1">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={story.ref.isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.7, delay: 0.6 + index * 0.1 }}
                      className="bg-white p-4 rounded-lg shadow-md border-l-4 border-gray-400 w-full"
                    >
                      <h3 className="text-lg font-bold text-black mb-3 text-left">{story.title}</h3>
                      <p className="text-black leading-relaxed text-sm text-justify">{story.content}</p>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
