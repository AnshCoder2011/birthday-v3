"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import GradientButton from "../GradientButton"
import { ArrowRight } from "lucide-react"

export default function MessageScreen({ onNext }) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className="px-4 md:px-6 py-10 text-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 drop-shadow mb-6 leading-tight"
            >
                A Special Message
            </motion.h2>

            <div className="mx-auto relative w-full max-w-3xl flex justify-center" style={{ perspective: 1200 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative w-[300px] md:w-[360px] h-[420px] md:h-[460px]"
                    style={{ transformStyle: "preserve-3d" }}
                    onClick={() => setFlipped((f) => !f)}
                >
                    <motion.div
                        animate={{ rotateY: flipped ? 180 : 0, scale: flipped ? 1.02 : 1 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="absolute inset-0"
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-pink-100 to-pink-50 rounded-2xl shadow-lg p-6 text-center" style={{ backfaceVisibility: "hidden" }}>
                            <div className="h-full flex flex-col items-center justify-center">
                                <p className="text-[#301733] text-base md:text-lg">Tap to open</p>
                                <ArrowRight size={20} className="mt-2 text-[#301733]" />
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-pink-100 to-pink-50 rounded-2xl shadow-lg p-4 md:p-6 text-center" style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}>
                            <p className="text-[#301733] text-base md:text-lg leading-relaxed pr-2">
                                Happy Birthday, Cutiepie! You deserve all the happiness, love, and smiles in the world today and always.
                                You have this special way of making everything around you brighter, your smile, your kindness, and the way
                                you make people feel truly cared for. I hope your day is filled with laughter, surprises, and moments that
                                make your heart happy. You’re truly one of a kind, and I just want you to know how special you are.
                                Keep being the amazing person you are, spreading joy wherever you go. Wishing you endless happiness,
                                success, and all the sweet things life.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1, transition: { delay: 0.4 } }}
                transition={{ duration: 0.6 }}
                className="mt-8 flex justify-center"
            >
                <GradientButton onClick={onNext}>
                    <ArrowRight size={20} className="mt-0.5" /> Pop the balloons
                </GradientButton>
            </motion.div>
        </div>
    )
}