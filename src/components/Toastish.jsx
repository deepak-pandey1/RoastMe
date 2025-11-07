import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Toastish({show, text}) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div initial={{y:30, opacity:0}} animate={{y:0, opacity:1}} exit={{y:30, opacity:0}} className="fixed right-6 bottom-6 bg-slate-900/90 border border-slate-700 px-4 py-2 rounded shadow">
          {text}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
