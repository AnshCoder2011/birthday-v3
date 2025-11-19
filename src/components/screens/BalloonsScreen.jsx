// d:\other_projects\Birthday Website\birthday-v3\src\components\screens\BalloonsScreen.jsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion"
import GradientButton from "../GradientButton"
import { Play } from "lucide-react";

export default function BalloonsScreen({ onNext }) {
  const words = ["you", "are", "a", "cutie"];
  const [popped, setPopped] = useState([false, false, false, false]);

  const positions = [20, 40, 60, 80];

  const colors = [
    { body: "from-pink-400 via-rose-400 to-fuchsia-500", knot: "#fda4af" },
    { body: "from-amber-400 via-yellow-400 to-orange-500", knot: "#f59e0b" },
    { body: "from-emerald-400 via-green-400 to-teal-500", knot: "#10b981" },
    { body: "from-sky-400 via-blue-400 to-indigo-500", knot: "#60a5fa" },
  ];

  const pop = (i) => {
    if (popped[i]) return;
    setPopped((arr) => arr.map((v, idx) => (idx === i ? true : v)));
  };

  return (
    <div className="px-4 md:px-6 py-10 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 drop-shadow mb-8 leading-tight"
      >
        Pop all 4 balloons
      </motion.h2>

      <div className="mx-auto w-full max-w-5xl rounded-3xl bg-gradient-to-b from-rose-950/40 via-black/30 to-rose-950/40 p-6 md:p-8">
        <div className="relative h-[360px] md:h-[420px]">
          <svg className="absolute inset-0 z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
            {positions.map((x, i) => (
              <path
                key={i}
                d={`M ${x} 32 Q ${x < 50 ? 35 : 65} 70 50 95`}
                stroke="#e5e5e5"
                strokeWidth="1.6"
                strokeOpacity={popped[i] ? 0.2 : 0.85}
                fill="none"
              />
            ))}
            <circle cx="50" cy="95" r="1.5" fill="#e5e5e5" />
          </svg>

          {words.map((w, i) => (
            <div
              key={i}
              className="absolute z-10"
              style={{ left: `${positions[i]}%`, top: "24px", transform: "translateX(-50%)" }}
            >
              <div className="relative w-28 h-36 md:w-32 md:h-40">
                <div className="absolute inset-0 flex items-center justify-center z-0">
                  <span className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 drop-shadow">
                    {w}
                  </span>
                </div>

                <motion.div
                  onClick={() => pop(i)}
                  initial={{ opacity: 0, scale: 0.92, y: 6 }}
                  animate={{
                    opacity: popped[i] ? 0 : 1,
                    scale: popped[i] ? 0 : 1,
                    y: popped[i] ? -10 : 0,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  whileHover={popped[i] ? {} : { scale: 1.05 }}
                  className="select-none"
                  style={{ pointerEvents: popped[i] ? "none" : "auto" }}
                >
                  <div className={`relative mx-auto w-28 h-36 md:w-32 md:h-40 rounded-full shadow-lg bg-gradient-to-br ${colors[i].body}`}>
                    <div className="absolute top-5 left-6 w-8 h-12 md:w-9 md:h-14 rounded-full bg-white/35" />
                  </div>
                  <div
                    className="mx-auto -mt-1 w-3 h-3 rotate-45 rounded-sm"
                    style={{ background: colors[i].knot }}
                  />
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mt-8 flex justify-center"
      >
        <GradientButton onClick={onNext}>
          <Play size={20} className="mt-0.5" /> Play the track!
        </GradientButton>
      </motion.div>
    </div>
  );
}
