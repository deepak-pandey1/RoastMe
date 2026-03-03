import React, { useState, useRef, useEffect } from "react";
import roasts from "../data/roasts";
import RoastCard from "./RoastCard";
import ShareCard from "./ShareCard"; // ⭐ ADDED
import { motion, AnimatePresence } from "framer-motion";
import { GiFireBowl } from "react-icons/gi";
import { FaLaughSquint, FaRedoAlt } from "react-icons/fa";
import Confetti from "react-confetti";
import { createPortal } from "react-dom";
import { toPng } from "html-to-image";
import { FiShare2 } from "react-icons/fi";


function randomIndex(exclude, max) {
  if (max === 1) return 0;
  let idx;
  do {
    idx = Math.floor(Math.random() * max);
  } while (idx === exclude);
  return idx;
}

export default function RoastGenerator() {

  const ERASE_DURATION = 0.9;

  const [current, setCurrent] = useState(null);
  const [open, setOpen] = useState(false);
  const [phase, setPhase] = useState("idle");
  const [erasing, setErasing] = useState(false);
  const audioRef = useRef(null);

  const cardRef = useRef(null); // ⭐ used for share

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

  /* ⭐ UPDATED SHARE FUNCTION (USES HIDDEN CARD) */
  const handleShare = async () => {
    if (!cardRef.current) return;

    try {
      const dataUrl = await toPng(cardRef.current);

      const blob = await (await fetch(dataUrl)).blob();
      const file = new File([blob], "roast.png", { type: "image/png" });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: "Roast Me 😂",
          // text: "Try this 😂 roastmee.onrender.com"
        });
      } else {
        const link = document.createElement("a");
        link.download = "roast.png";
        link.href = dataUrl;
        link.click();
      }
    } catch (err) {
      console.log(err);
    }
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

      {createPortal(
        <AnimatePresence mode="wait">
          {open && (
            <>
              {/* BACKDROP */}
              <motion.div
                initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                animate={{ opacity: 1, backdropFilter: "blur(14px)" }}
                exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="fixed inset-0 bg-black/40 z-[90]"
              />

              {/* MODAL */}
              <div
                className="fixed inset-0 flex items-center justify-center z-[100] p-4"
                style={{ perspective: 1200 }}
              >
                <motion.div
                  initial={{
                    y: 220,
                    scale: 0.82,
                    rotateX: 18,
                    opacity: 0
                  }}
                  animate={{
                    y: 0,
                    scale: 1,
                    rotateX: 0,
                    opacity: 1
                  }}
                  exit={{
                    y: 120,
                    scale: 0.9,
                    rotateX: 10,
                    opacity: 0
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

                    <motion.button
  onClick={handleShare}
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.92 }}
  className="relative flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white overflow-hidden group"
  style={{
    background: "linear-gradient(135deg, #00c6ff, #0072ff)",
    boxShadow: "0 10px 30px rgba(0, 114, 255, 0.4)",
  }}
>
  {/* Glow Effect */}
  <span className="absolute inset-0 rounded-full bg-white/10 blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></span>

  {/* Shine Effect */}
  <span className="absolute inset-0 overflow-hidden rounded-full">
    <span className="absolute -left-full top-0 h-full w-1/2 bg-white/20 skew-x-[-20deg] group-hover:left-[120%] transition-all duration-700"></span>
  </span>

  {/* Icon Animation */}
  <motion.span
    animate={{ rotate: [0, 15, -10, 0] }}
    transition={{ duration: 0.6 }}
  >
    <FiShare2 className="text-lg" />
  </motion.span>

  Share

</motion.button>

                  </div>

                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}

      {/* ⭐ HIDDEN SHARE CARD (IMPORTANT) */}
      <div
        style={{
          position: "fixed",
          top: "-9999px",
          left: "-9999px"
        }}
      >
        <div ref={cardRef}>
          {current !== null && <ShareCard text={roasts[current]} />}
        </div>
      </div>

    </div>
  );
}