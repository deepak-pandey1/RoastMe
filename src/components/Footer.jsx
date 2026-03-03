import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative z-10 px-6 py-3 border-t border-white/10 bg-slate-900/40 backdrop-blur-xl"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between text-xs sm:text-sm text-slate-400">

        {/* LEFT */}
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-yellow-400 font-semibold">
            Roast Me
          </span>
        </p>

        {/* CENTER
        <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px]">
          ⚡ Powered by AI
        </div> */}

        {/* RIGHT */}
        {/* RIGHT */}
        <div className="flex items-center gap-3 text-slate-500 text-xs">
          <Link
            to="/privacy"
            className="hover:text-white transition"
          >
            Privacy
          </Link>

          <span>•</span>

          <Link
            to="/terms"
            className="hover:text-white transition"
          >
            Terms
          </Link>
        </div>


      </div>
    </motion.footer>
  );
}
