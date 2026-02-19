import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight, FiX } from "react-icons/fi";
import profile from "../assets/profile.jpg";

export default function About({ direction }) {

  const [open, setOpen] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = profile;
    img.decode().then(() => {
      setImgLoaded(true);
    });
  }, []);

  return (
    <>
    <motion.div
      className="absolute inset-0 will-change-transform flex items-center justify-center px-4 py-24 sm:py-12 md:py-20"
      custom={direction}
      initial={(direction) => ({
        x: direction === 1 ? "100%" : "-100%",
        opacity: 0.98
      })}
      animate={{ x: "0%", opacity: 1 }}
      exit={(direction) => ({
        x: direction === 1 ? "-100%" : "100%",
        opacity: 0.98
      })}
      transition={{
        duration: 0.28,
        ease: [0.22, 1, 0.36, 1]
      }}
    >

      <motion.div
        initial={{ opacity: 0, y: 35, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="
        w-full max-w-lg sm:max-w-2xl lg:max-w-3xl
        rounded-3xl
        bg-gradient-to-b from-white/[0.06] to-white/[0.02]
        backdrop-blur-2xl
        ring-1 ring-white/10
        shadow-[0_15px_50px_rgba(0,0,0,0.55)]
        px-5 py-5 sm:px-10 sm:py-7
        "
      >

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-5 tracking-tight bg-gradient-to-r from-pink-500 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
          About Roast Me 🔥
        </h2>

        <p className="text-center text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-snug sm:leading-relaxed">
          Roast Me is a fun web app made for friendly roasting and laughs 😄  
          The goal is simple — make you smile, not cry.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-7 text-center sm:text-left">

          <div className="flex justify-center sm:justify-start">
            <motion.button
              onClick={() => setOpen(true)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-fuchsia-500 via-pink-500 to-amber-400 opacity-40 blur-md group-hover:opacity-70 transition" />

              <div className="relative w-20 sm:w-28 md:w-32 aspect-square rounded-full overflow-hidden border border-white/20">

                <div className={`absolute inset-0 bg-white/10 backdrop-blur-xl transition-opacity duration-500 ${imgLoaded ? "opacity-0" : "opacity-100"}`} />

                <img
                  src={profile}
                  alt="profile"
                  className={`w-full h-full object-cover transition-all duration-700 ${imgLoaded ? "scale-100 blur-0" : "scale-110 blur-2xl"}`}
                />
              </div>
            </motion.button>
          </div>

          <div className="space-y-2 sm:space-y-3 max-w-xl mx-auto sm:mx-0">
            <h3 className="text-lg sm:text-2xl font-bold text-yellow-400">
              Deepak Pandey
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-snug sm:leading-relaxed">
              I build simple and useful websites that feel smooth and easy to use.
              I enjoy clean design and fun interactions.
            </p>

            <motion.a
              href="https://deepak-pandey1.github.io/Portfolio-Deepak-Pandey/#/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96, y: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="inline-flex items-center justify-center gap-2 mt-2 px-4 py-2.5 sm:px-5 sm:py-3 w-full sm:w-fit rounded-xl bg-gradient-to-r from-pink-500 via-rose-500 to-amber-400 text-slate-900 font-semibold shadow-lg shadow-pink-500/20"
            >
              <span>View Portfolio</span>
              <motion.span
                animate={{ x: [0, 3, 0], y: [0, -3, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                className="text-base flex items-center"
              >
                <FiArrowUpRight />
              </motion.span>
            </motion.a>

          </div>
        </div>

      </motion.div>
    </motion.div>

    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.8, y: 40 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 40 }}
            transition={{ type: "spring", damping: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative rounded-full overflow-hidden shadow-2xl"
          >
            <img
              src={profile}
              alt="profile large"
              className="max-h-[80vmin] max-w-[80vmin] aspect-square rounded-full object-cover"
            />

            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 bg-black/60 hover:bg-black/80 p-2 rounded-full text-white"
            >
              <FiX size={18} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>

    </>
  );
}
