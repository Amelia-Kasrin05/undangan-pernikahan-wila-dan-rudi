"use client";

import type React from "react";
import { useCallback, useState, useEffect } from "react";
import MainLayout from "../components/mainLayout";
import ProfileCard from "../components/profileCard";
import useVisibility from "../../services/hooks/useVisibility";
import CountdownCard from "../components/countdownCard";
import ButtonAnimate from "../ui/buttonAnimate";

export default function Introduction({ refBride, windowWidth }: { refBride: any; windowWidth: number }) {
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

  const countdownDate = new Date("September 06, 2025 09:00:00").getTime();

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
      <div ref={mergedRef} className="relative flex justify-center items-center w-full max-w-[350px] -my-10">
        <div className={`bismillah-overlay absolute w-full h-20 bg-white origin-right transition-transform duration-700 delay-200 ${bismillah.isVisible ? "scale-x-0" : "scale-x-100"}`} />
       <img src="/bismillah.png" alt="bismillah" loading="lazy" />
      </div>

      <div className="text-center flex flex-col items-center px-4">
        <p className="font-medium mb-4">Assalamu'alaikum Warahmatullaahi Wabarakaatuh</p>

        <p className="font-light text-gray-500 mb-8">Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah semoga ridho-Mu tercurah mengiringi pernikahan kami.</p>

        <p className="text-gray-600 mb-6">Kami yang berbahagia,</p>

        {/* Simplified Profile Cards - No complex refs */}
        <ProfileCard name="Hikmah Suciani, S.Pd ,Gr" desc="Putri Pertama dari Bapak Mufrinal, S.Pd.I dan Ibu Kasmaweni" instagramLink="https://www.instagram.com/hikmahsucianii?igsh=MTd5YWU4YTFzN21sdw==" />

        <ProfileCard name="Uji Purnomo Aji, S.P" desc="Putra Ketiga dari Bapak Suyadi dan Ibu Sugiyanti" instagramLink="https://www.instagram.com/sajakataji?igsh=MTFhZTlycDRtZng2OQ==" />

        <footer className="mx-5 mt-10 flex flex-col gap-10">
          <p className="text-gray-600 text-lg sm:text-xl md:text-2xl font-medium">Sabtu, 06 September 2025</p>

          <div ref={countdown.ref} className="flex gap-3 justify-center">
            <CountdownCard isInView={countdown.isVisible} num={time.days} desc="Days" />
            <CountdownCard isInView={countdown.isVisible} num={time.hours} desc="Hours" delay={0.2} />
            <CountdownCard isInView={countdown.isVisible} num={time.minutes} desc="Min" delay={0.4} />
            <CountdownCard isInView={countdown.isVisible} num={time.seconds} desc="Sec" delay={0.6} />
          </div>

          <ButtonAnimate
            button={button}
            windowWidth={windowWidth}
            img="/calendar.png"
            onClick={() => {
              window.open(
                "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MGc5OGIyb2tjMmY0NGtlMWg4bzI2aDY0dnUgMWJiNTJjNGUyOTMyNWY3MDRmNDJjMjM5NjIyM2I2NTFhOTZiMTg3ZGUyYzYzMzk1NTI2MGQ1ZjQxNjE5ZThiMEBn&tmsrc=1bb52c4e29325f704f42c2396223b651a96b187de2c633955260d5f41619e8b0%40group.calendar.google.com",
                "_blank"
              );
            }}
          >
            Ingatkan Via Google Kalender
          </ButtonAnimate>
        </footer>
      </div>
    </MainLayout>
  );
}