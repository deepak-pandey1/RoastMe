import React, { useState, useRef, useEffect } from "react";
import roasts from "../data/roasts";
import RoastCard from "./RoastCard";
import { motion, AnimatePresence } from "framer-motion";
import { GiFireBowl } from "react-icons/gi";
import { FaLaughSquint, FaRedoAlt } from "react-icons/fa";
import Confetti from "react-confetti";

function randomIndex(exclude, max) {
  if (max === 1) return 0;
  let idx;
  do {
    idx = Math.floor(Math.random() * max);
  } while (idx === exclude);
  return idx;
}

export default function RoastGenerator() {
  const [current, setCurrent] = useState(null);
  const [open, setOpen] = useState(false);
  const [phase, setPhase] = useState("idle");
  const audioRef = useRef(null);

  /* AUDIO PRELOAD */
  useEffect(() => {
    const audio = new Audio("/sounds/roast.mp3");
    audio.volume = 0.8;
    audio.preload = "auto";
    audio.load();

    const unlock = () => {
      audio.play().then(() => {
        audio.pause();
        audio.currentTime = 0;
      }).catch(() => {});
      window.removeEventListener("click", unlock);
    };
    window.addEventListener("click", unlock);

    audioRef.current = audio;
  }, []);

  /* OPEN MODAL + PLAY ROAST */
  const playRoast = () => {
    const next =
      current === null
        ? Math.floor(Math.random() * roasts.length)
        : randomIndex(current, roasts.length);

    setCurrent(next);
    setOpen(true);
    setPhase("showing");

    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
  };

  /* ERASE + CLOSE */
  const handleReset = () => {
    setPhase("erasing");
  };

  return (
    <div className="space-y-8 text-center">

      {/* TITLE */}
      <div>
        <h2 className="text-3xl font-extrabold flex justify-center items-center gap-2">
          <GiFireBowl className="text-pink-500 text-4xl animate-pulse" />
          Press the Button — If You Dare 😈
          <GiFireBowl className="text-yellow-400 text-4xl animate-pulse" />
        </h2>

        <p className="text-slate-400 mt-2">
          AI certified emotional damage generator
        </p>
      </div>

      {/* MAIN BUTTON (never moves now) */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={playRoast}
        className="mx-auto flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 text-black font-bold shadow-xl hover:shadow-pink-500/30 transition"
      >
        <FaLaughSquint className="text-xl" />
        Roast Me
      </motion.button>

      {/* MODAL */}
      <AnimatePresence mode="wait">
  {open && (
    <>
      {/* BACKDROP — grows first */}
      <motion.div
        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
        animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="fixed inset-0 bg-black/40 z-40"
      />

      {/* CARD — delayed float + overshoot */}
      <motion.div
        initial={{ y: 80, scale: 0.85, opacity: 0 }}
        style={{ transformOrigin: "center bottom" }}

        animate={{
          y: 0,
          scale: 1,
          opacity: 1
        }}
        exit={{ y: 60, scale: 0.9, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          mass: 0.8,
          delay: 0.12
        }}
        className="fixed inset-0 flex items-center justify-center z-50 p-6"
      >

              <div className="card max-w-xl w-full text-center space-y-8">

                <Confetti numberOfPieces={50} recycle={false} />

                <RoastCard
                  text={roasts[current]}
                  phase={phase}
                  onEraseDone={() => {
                    setOpen(false);
                    setCurrent(null);
                    setPhase("idle");
                  }}
                />

                <div className="flex justify-center gap-4">

                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={playRoast}
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 text-black font-bold"
                  >
                    Roast Again
                  </motion.button>

                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={handleReset}
                    className="flex items-center gap-2 px-6 py-3 rounded-full border border-slate-500 text-slate-200"
                  >
                    <FaRedoAlt className="text-cyan-400" />
                    Clear
                  </motion.button>

                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
