import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaHeart } from "react-icons/fa";
import { SiTailwindcss, SiFramer } from "react-icons/si";

export default function About() {
  return (
    <main className="fixed inset-0 flex items-center justify-center px-4 sm:px-6 py-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 select-none">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="card w-full max-w-lg sm:max-w-2xl text-center bg-slate-800/70 backdrop-blur-md border border-slate-700 rounded-3xl p-6 sm:p-10 shadow-[0_0_30px_rgba(255,192,203,0.15)] hover:shadow-[0_0_40px_rgba(255,192,203,0.3)] transition-all duration-500"
      >
        {/* ✨ Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-pink-500 via-yellow-400 to-orange-500 bg-clip-text text-transparent mb-4"
        >
          About Roast Me 🔥
        </motion.h2>

        {/* 💬 Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-slate-300 leading-relaxed text-sm sm:text-base"
        >
          <span className="text-yellow-400 font-semibold">Roast Me</span> is a fun little web app built for laughs and friendly sarcasm 😆.
          Every roast here is meant to make you smile — not cry (hopefully 😜).
        </motion.p>

        {/* 👨‍💻 Developer info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 p-4 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-700"
        >
          <h3 className="text-lg sm:text-xl font-bold text-yellow-400 mb-2">
            👨‍💻 Created by Deepak Pandey
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm mb-3">
            A passionate Full-Stack Developer from India 🇮🇳 who loves blending creativity with clean UI.  
            Known for projects like{" "}
            <a
              href="https://deepak-pandey1.github.io/Portfolio-Deepak-Pandey/#/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 underline hover:text-yellow-400 transition-colors"
            >
              Portfolio-Deepak-Pandey
            </a>{" "}
            and the BPIT Career Hub.
          </p>
          <p className="text-slate-300 font-medium text-sm sm:text-base">
            <FaReact className="inline text-cyan-400 text-xl mx-1" /> React •{" "}
            <SiTailwindcss className="inline text-sky-400 text-xl mx-1" /> Tailwind •{" "}
            <SiFramer className="inline text-pink-400 text-xl mx-1" /> Framer Motion
          </p>
        </motion.div>

        {/* ❤️ Closing line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-slate-400 text-xs sm:text-sm italic"
        >
          <FaHeart className="inline text-pink-500 mx-1 animate-pulse" />
          Built with love, humor, and caffeine ☕ by Deepak Pandey.
        </motion.div>
      </motion.div>
    </main>
  );
}
