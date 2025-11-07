import React, { useState } from "react";
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
  const [emoji, setEmoji] = useState(null);
  const emojis = [];

  const generate = () => {
    const idx = randomIndex(current, roasts.length);
    setCurrent(idx);
    setShow(false);
    setCount((c) => c + 1);
    setTimeout(() => setShow(true), 100);
    setEmoji(emojis[Math.floor(Math.random() * emojis.length)]);
  };

  const handleReset = () => {
    // Start fade-out animation first
    setShow(false);

    // Wait for exit animation to complete (400ms)
    setTimeout(() => {
      setCurrent(null);
      setCount(0);
    }, 400);
  };

  return (
    <div className="relative space-y-8 p-6 text-center">
      {/* 🎉 Confetti on every roast */}
      {show && current !== null && (
        <Confetti
          numberOfPieces={50}
          recycle={false}
          width={window.innerWidth}
          height={window.innerHeight}
          style={{ position: "fixed", top: 0, left: 0, pointerEvents: "none" }}
        />
      )}

      {/* Floating emoji animation */}
      <AnimatePresence>
        {emoji && (
          <motion.div
            key={emoji + count}
            initial={{ y: 100, opacity: 0, x: 0 }}
            animate={{
              y: -200,
              opacity: 1,
              x: Math.random() * 200 - 100,
              rotate: Math.random() * 90,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="absolute left-1/2 top-1/2 text-6xl"
          >
            {emoji}
          </motion.div>
        )}
      </AnimatePresence>

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

      <div className="flex flex-col items-center gap-6">
        <AnimatePresence mode="wait">
          {show && current !== null && (
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 12,
              }}
            >
              <RoastCard text={roasts[current]} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* 🔘 Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {/* Roast Me Button */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              // 🔊 Play sound
              const audio = new Audio("/sounds/roast.mp3");
              audio.volume = 0.8;
              audio.play();

              if (current === null) {
                setShow(true);
                setCurrent(Math.floor(Math.random() * roasts.length));
              } else {
                generate();
              }
            }}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 text-black font-bold shadow-lg hover:shadow-pink-500/30 transition"
          >
            <FaLaughSquint className="text-xl" />
            Roast Me
          </motion.button>

          {/* Reset Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={handleReset}
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-slate-600 text-slate-200 hover:bg-slate-800 transition"
          >
            <FaRedoAlt className="text-xl text-cyan-400" />
            Reset
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-sm text-slate-400"
        >
          Roasts delivered:{" "}
          <span className="text-yellow-400 font-bold">{count}</span>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: "spring" }}
          className="text-xs text-slate-500 italic"
        >
          “If you cry, that’s part of the fun 😜”
        </motion.div>
      </div>
    </div>
  );
}
