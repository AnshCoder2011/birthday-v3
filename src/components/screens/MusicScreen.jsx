// d:\other_projects\Birthday Website\birthday-v3\src\components\screens\MusicScreen.jsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function MusicScreen() {
  const audioRef = useRef(null);
  const [time, setTime] = useState(0);
  const [autoplayFailed, setAutoplayFailed] = useState(false);

  const lyrics = useMemo(
    () => [
      { t: 0, text: "..." },
      { t: 11, text: "Tu hi hai, bas tu hi hai" },
      { t: 14, text: "Meri har hansi mein tu hi hai" },
      { t: 17, text: "Tu hi hai, bas tu hi hai" },
      { t: 20, text: "Har lamhe mein aur saal mein" },
      { t: 23, text: "Tu hi hai, bas tu hi hai" },
      { t: 26, text: "Mere gham khushi mein tu hi hai" },
      { t: 29, text: "Tu hi hai, bas tu hi hai" },
      { t: 32, text: "Teri dosti har haal mein" },
      { t: 35, text: "Agar mudke dekhu jo main zara" },
      { t: 41, text: "Toh kabhi na raha tujhse judaa" },
      { t: 47, text: "Yaara teri yaari" },
      { t: 50, text: "Umrr saari saath hai" },
      { t: 54, text: "Yaara teri yaari" },
      { t: 56, text: "Umrr saari saath hai" },
      { t: 60, text: "Yaara teri yaari" },
      { t: 63, text: "Umrr saari saath hai" },
      { t: 66, text: "Yaara teri yaari" },
      { t: 68, text: "Umrr saari saath hai" },
    ],
    []
  );

  const currentIndex = useMemo(() => {
    let idx = 0;
    for (let i = 0; i < lyrics.length; i++) {
      if (time >= lyrics[i].t) idx = i;
    }
    return idx;
  }, [time, lyrics]);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    const onTime = () => setTime(el.currentTime);
    el.addEventListener("timeupdate", onTime);
    el.addEventListener("ended", () => setTime(0));
    el.play().catch(() => setAutoplayFailed(true));
    return () => {
      el.removeEventListener("timeupdate", onTime);
    };
  }, []);

  const tryPlay = async () => {
    try {
      await audioRef.current?.play();
      setAutoplayFailed(false);
    } catch {}
  };

  return (
    <div className="px-4 md:px-6 py-10 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 drop-shadow mb-6 leading-tight"
      >
        Yaara Teri Yaari
      </motion.h2>

      <div className="mx-auto w-full max-w-3xl rounded-3xl bg-gradient-to-b from-rose-950/40 via-black/30 to-rose-950/40 p-6 md:p-8">
        <audio
          ref={audioRef}
          src="/audio/yaara-teri-yaari.mp3"
          preload="metadata"
        />

        <div className="h-48 md:h-56 grid place-items-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 drop-shadow"
              style={{ filter: "drop-shadow(0 0 20px rgba(255,105,180,0.35))" }}
            >
              {lyrics[currentIndex]?.text || ""}
            </motion.div>
          </AnimatePresence>
        </div>

        {autoplayFailed && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-4"
          >
            <button
              onClick={tryPlay}
              className="px-8 py-3 rounded-full text-white font-semibold text-lg bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-500 shadow-[0_0_28px_rgba(244,114,182,0.35)] transition-transform duration-200 ease-out hover:scale-[1.03] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300/70"
            >
              Play
            </button>
          </motion.div>
        )}
      </div>

    </div>
  );
}
