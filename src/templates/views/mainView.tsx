"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Opening from "../mainView/opening";
import Introduction from "../mainView/introduction";
import useWindowWidth from "../../services/hooks/useWindowWidth";
import StartAnimation from "../components/startAnimation";
import Location from "../mainView/location";
import Doa from "../mainView/doa";
import EndFooter from "../mainView/endFooter";
import Navbar from "./navbar";
import Gift from "../mainView/gift";
import Schedule from "../mainView/schedule";
import Comment from "../mainView/comment";
import Rsvp from "../mainView/rsvp";
import LoveStory from "../mainView/loveStory";

export default function MainView({ isOpen, audio }: { isOpen: boolean; audio: any }) {
  const windowWidth = useWindowWidth();

  const refHome = useRef(null);
  const refBride = useRef(null);
  const refLocation = useRef(null);
  const refSchedule = useRef(null);
  const refComment = useRef(null);
  const refLoveStory = useRef(null);

  const [isScrolling, setIsScrolling] = useState(false);
  const scrollAnimationRef = useRef<number | null>(null);

  const [name, setName] = useState("");
  useEffect(() => {
    const path = window.location.pathname;
    const name = decodeURIComponent(path?.split("/")[1] || "")
      .split("-")
      .join(" ");
    setName(name);
  }, []);

  useEffect(() => {
    if (isOpen) {
      StartAnimation();
    }
  }, [isOpen]);

  const [isPlaying, setIsPlaying] = useState(true);

  const handleAudio = () => {
    if (audio?.current) {
      if (audio?.current?.paused) {
        audio?.current?.play();
        setIsPlaying(true);
      } else {
        audio?.current?.pause();
        setIsPlaying(false);
      }
    }
  };

const handleScrollDown = () => {
  if (isScrolling) {
    if (scrollAnimationRef.current) {
      cancelAnimationFrame(scrollAnimationRef.current);
      scrollAnimationRef.current = null;
    }
    setIsScrolling(false);
    return;
  }

  setIsScrolling(true);
  const startPosition = window.pageYOffset;
  const targetPosition = document.documentElement.scrollHeight - window.innerHeight;
  const distance = targetPosition - startPosition;

  // KECEPATAN SANGAT SANGAT PELAN - SLOW MOTION
  const baseSpeed = 1; // pixel per detik (super pelan seperti slow motion)
  const minDuration = 20000; // minimal 20 detik
  const maxDuration = 80000; // maksimal 60 detik (1 menit)
  
  const calculatedDuration = (distance / baseSpeed) * 1000;
  const duration = Math.max(Math.min(calculatedDuration, maxDuration), minDuration);

  let startTime: number | null = null;

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    // Linear untuk kecepatan konsisten seperti slow motion
    const currentPosition = startPosition + distance * progress;
    
    window.scrollTo({
      top: currentPosition,
      behavior: 'auto'
    });

    if (progress < 1) {
      scrollAnimationRef.current = requestAnimationFrame(animation);
    } else {
      setIsScrolling(false);
      scrollAnimationRef.current = null;
    }
  };

  scrollAnimationRef.current = requestAnimationFrame(animation);
};
  useEffect(() => {
    if (!audio?.current) {
      return;
    }
    audio?.current?.play();
  }, [audio]);

  return (
    <React.Fragment>
      <motion.div
        initial={{ opacity: 0, display: "none" }}
        animate={
          isOpen && {
            opacity: 1,
            display: "block",
            transition: { duration: 0.5, opacity: { delay: 1.2 } },
          }
        }
        className="max-w-xl w-full h-full opacity-0"
      >
        <div className="absolute w-full h-full left-0 top-0 bg-blue-300 -z-10" />
        <div className="absolute w-full h-full left-0 top-0 flex justify-center">
          <div
            className="w-full max-w-xl h-[112vh] -z-10"
            style={{
              backgroundImage: "url('/images/welcome.jpg')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundPositionX: "46%",
              backgroundSize: "cover",
              filter: "brightness(0.3)",
            }}
          />
        </div>
        {isOpen && (
          <React.Fragment>
            <div className="fixed right-2 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-10">
              <button
                onClick={handleAudio}
                className={`w-12 h-12 rounded-full shadow-lg outline-none flex items-center justify-center transition-all duration-300 transform hover:scale-105 ${
                  isPlaying
                    ? "bg-gradient-to-r from-green-400 to-emerald-500 text-white shadow-green-200 hover:from-green-500 hover:to-emerald-600"
                    : "bg-gradient-to-r from-gray-400 to-slate-500 text-white shadow-gray-200 hover:from-gray-500 hover:to-slate-600"
                }`}
                title={isPlaying ? "Pause audio" : "Play audio"}
              >
                {isPlaying ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="4" width="4" height="16" rx="1" />
                    <rect x="14" y="4" width="4" height="16" rx="1" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                )}
              </button>

              <button
                onClick={handleScrollDown}
                className={`w-12 h-12 rounded-full shadow-lg outline-none flex items-center justify-center transition-all duration-300 transform hover:scale-105 ${
                  isScrolling ? "bg-gradient-to-r from-orange-400 to-red-500 text-white shadow-orange-200 animate-pulse" : "bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-blue-200 hover:from-blue-500 hover:to-blue-700"
                }`}
                title={isScrolling ? "Stop scroll" : "Scroll ke bawah"}
              >
                {isScrolling ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="6" width="12" height="12" rx="2" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14" />
                    <path d="m19 12-7 7-7-7" />
                  </svg>
                )}
              </button>
            </div>
            <Navbar refHome={refHome} refBride={refBride} refLocation={refLocation} refSchedule={refSchedule} refComment={refComment} />
            <Opening refHome={refHome} />
            <Introduction windowWidth={windowWidth} refBride={refBride} />
            <Location refLocation={refLocation} />
            <Schedule refSchedule={refSchedule} />
            <Doa />
            <Gift />
            <LoveStory refLoveStory={refLoveStory} />
            <Rsvp name={name} />
            <Comment refComment={refComment} name={name} />
            <EndFooter />
          </React.Fragment>
        )}
      </motion.div>
    </React.Fragment>
  );
}
