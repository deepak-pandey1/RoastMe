import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaSmileBeam, FaHeart } from "react-icons/fa";
import { SiTailwindcss, SiFramer } from "react-icons/si";

export default function About() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="card max-w-2xl text-center bg-slate-800/60 backdrop-blur-lg border border-slate-700 rounded-2xl p-8 shadow-2xl"
      >
        {/* ✨ Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 via-yellow-400 to-orange-500 bg-clip-text text-transparent mb-3"
        >
          About Roast Me 🔥
        </motion.h2>

        {/* 💬 Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-slate-300 leading-relaxed"
        >
          <span className="text-yellow-400 font-semibold">Roast Me</span> is a fun little web app built for pure laughs and friendly sarcasm 😆.
          Every roast you see here is meant to make you smile — not cry (hopefully 😜).
        </motion.p>

        {/* 👨‍💻 Developer info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 p-5 rounded-xl bg-slate-900/60 border border-slate-700"
        >
          <h3 className="text-xl font-bold text-yellow-400 mb-2">👨‍💻 Created by Deepak Pandey</h3>
          <p className="text-slate-400 text-sm mb-3">
            A passionate Full-Stack Developer from India 🇮🇳 who loves to blend creativity with clean UI.  
            Known for projects like <a href="https://deepak-pandey1.github.io/Portfolio-Deepak-Pandey/#/" target="_blank" rel="noopener noreferrer" className="text-pink-400 underline hover:text-yellow-400">Portfolio-Deepak-Pandey</a> and the BPIT Career Hub.
          </p>
          <p className="text-slate-300 font-medium">
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
          className="mt-6 text-slate-400 text-sm italic"
        >
          <FaHeart className="inline text-pink-500 mx-1 animate-pulse" />
          Built with love, humor, and caffeine ☕ by Deepak Pandey.
        </motion.div>
      </motion.div>
    </main>
  );
}
