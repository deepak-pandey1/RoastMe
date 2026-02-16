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
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);
  const [resetSpin, setResetSpin] = useState(0);
  const [phase, setPhase] = useState("idle"); // idle | showing | erasing

  const audioRef = useRef(null);
  const screenSize = useRef({
    width: window.innerWidth,
    height: window.innerHeight,
  });

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

  /* PLAY ROAST */
  const playRoast = () => {
    const next =
      current === null
        ? Math.floor(Math.random() * roasts.length)
        : randomIndex(current, roasts.length);

    setPhase("showing");
    setShow(false);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setCurrent(next);
        setShow(true);

        if (audioRef.current) {
          audioRef.current.currentTime = 0;
          audioRef.current.play().catch(() => {});
        }

        setCount((c) => c + 1);
      });
    });
  };

  /* RESET — START ERASE ANIMATION */
  const handleReset = () => {
    if (!show) return;
    setResetSpin((prev) => prev + 360);
    setPhase("erasing");
  };

  return (
    <div className="relative space-y-8 p-6 text-center">

      {show && current !== null && (
        <Confetti
          numberOfPieces={40}
          recycle={false}
          width={screenSize.current.width}
          height={screenSize.current.height}
          style={{ position: "fixed", top: 0, left: 0, pointerEvents: "none" }}
        />
      )}

      {/* TITLE */}
      <div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-extrabold flex justify-center items-center gap-2"
        >
          <GiFireBowl className="text-pink-500 text-4xl animate-pulse" />
          Press the Button — If You Dare 😈
          <GiFireBowl className="text-yellow-400 text-4xl animate-pulse" />
        </motion.h2>

        <p className="text-slate-400 mt-2">
          Every roast is handcrafted to offend — just the right amount 💅
        </p>
      </div>

      {/* CONTENT */}
      <motion.div layout className="flex flex-col items-center gap-6">

        <AnimatePresence mode="wait">
          {show && current !== null && (
            <motion.div key={current} layout>
              <RoastCard
                text={roasts[current]}
                phase={phase}
                onEraseDone={() => {
                  setShow(false);
                  setCurrent(null);
                  setCount(0);
                  setPhase("idle");
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4">

          <motion.button
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.9 }}
            onClick={playRoast}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 text-black font-bold shadow-lg hover:shadow-pink-500/30 transition"
          >
            <FaLaughSquint className="text-xl" />
            Roast Me
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={handleReset}
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-slate-600 text-slate-200 hover:bg-slate-800 transition"
          >
            <motion.span
              animate={{ rotate: resetSpin }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="flex items-center"
            >
              <FaRedoAlt className="text-xl text-cyan-400" />
            </motion.span>
            Reset
          </motion.button>
        </div>

        {/* COUNTER */}
        <motion.div layout className="text-sm text-slate-400">
          Roasts delivered:{" "}
          <span className="text-yellow-400 font-bold">{count}</span>
        </motion.div>

        <motion.div layout className="text-xs text-slate-500 italic">
          “If you cry, that’s part of the fun 😜”
        </motion.div>
      </motion.div>
    </div>
  );
}
