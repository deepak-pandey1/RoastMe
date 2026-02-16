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

  const ERASE_DURATION = 0.9; // 🔥 MASTER TIMELINE (change feel here)

  const [current, setCurrent] = useState(null);
  const [open, setOpen] = useState(false);
  const [phase, setPhase] = useState("idle");
  const [erasing, setErasing] = useState(false);
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
    setErasing(true);
    setPhase("erasing");
  };

  return (
    <div className="space-y-8 text-center">

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

      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={playRoast}
        className="mx-auto flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 text-black font-bold shadow-xl hover:shadow-pink-500/30 transition"
      >
        <FaLaughSquint className="text-xl" />
        Roast Me
      </motion.button>

      <AnimatePresence mode="wait">
  {open && (
    <>
      {/* BACKDROP — air compression feel */}
      <motion.div
        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
        animate={{ opacity: 1, backdropFilter: "blur(14px)" }}
        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 bg-black/40 z-40"
      />

      {/* PERSPECTIVE WRAPPER */}
      <div
        className="fixed inset-0 flex items-end justify-center z-50 p-4 md:items-center"
        style={{ perspective: 1200 }}
      >

        <motion.div
          initial={{
            y: 220,
            scale: 0.82,
            rotateX: 18,
            opacity: 0,
            filter: "blur(8px)"
          }}
          animate={{
            y: 0,
            scale: 1,
            rotateX: 0,
            opacity: 1,
            filter: "blur(0px)"
          }}
          exit={{
            y: 120,
            scale: 0.9,
            rotateX: 10,
            opacity: 0,
            filter: "blur(6px)"
          }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1]
          }}
          style={{ transformOrigin: "bottom center" }}
          className="card max-w-xl w-full text-center space-y-8"
        >

          <Confetti numberOfPieces={50} recycle={false} />

          <RoastCard
            text={roasts[current]}
            phase={phase}
            eraseDuration={ERASE_DURATION}
            onEraseDone={() => {
              setOpen(false);
              setCurrent(null);
              setPhase("idle");
              setErasing(false);
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
              <motion.span
                animate={erasing ? { rotate: 360 } : { rotate: 0 }}
                transition={{ duration: ERASE_DURATION, ease: "easeInOut" }}
              >
                <FaRedoAlt className="text-cyan-400" />
              </motion.span>
              Clear
            </motion.button>

          </div>

        </motion.div>
      </div>
    </>
  )}
</AnimatePresence>

    </div>
  );
}
