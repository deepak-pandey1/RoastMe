import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="px-4 py-3 border-t border-white/5 bg-transparent backdrop-blur-xl"

    >
      <div className="max-w-5xl mx-auto flex items-center justify-between text-xs sm:text-sm text-slate-400">

        {/* left */}
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-yellow-400 font-medium">Roast Me</span>
        </p>

        {/* center tagline */}
        <p className="hidden sm:block text-slate-500 tracking-wide">

          Fun. Friendly. Savage 😄
        </p>

        {/* right */}
        <motion.a
          href="https://www.linkedin.com/in/deepak-pandey786/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.15 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="text-slate-400 hover:text-blue-400 text-base"
        >
          <FaLinkedin />
        </motion.a>

      </div>
    </motion.footer>
  );
}
