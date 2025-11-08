import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-5 px-6 text-center border-t border-slate-800 bg-slate-900/60 backdrop-blur-lg"
    >
      {/* 💬 Text */}
      <motion.p
        className="text-sm text-slate-400"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        Made with{" "}
        <span className="text-pink-500 animate-pulse">❤️</span> by{" "}
        <a
          href="https://deepak-pandey1.github.io/Portfolio-Deepak-Pandey/#/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-400 font-semibold hover:text-pink-400 transition"
        >
          Deepak Pandey
        </a>
      </motion.p>

      {/* 🌈 Subtle line and icon */}
      <div className="flex justify-center items-center gap-2 mt-3">
        <motion.div
          className="h-[2px] w-8 bg-gradient-to-r from-pink-500 to-yellow-400 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 32 }}
          transition={{ duration: 1 }}
        />

        {/* 🔗 LinkedIn Icon */}
        <motion.a
          href="https://www.linkedin.com/in/deepak-pandey786/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 5 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="text-slate-400 hover:text-blue-400 text-lg"
        >
          <FaLinkedin />
        </motion.a>

        <motion.div
          className="h-[2px] w-8 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 32 }}
          transition={{ duration: 1 }}
        />
      </div>
    </motion.footer>
  );
}
