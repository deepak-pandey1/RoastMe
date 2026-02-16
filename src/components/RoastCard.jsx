import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function RoastCard({ text, phase, onEraseDone }) {
  const controls = useAnimation();
  const letters = text.split("");

  useEffect(() => {
    if (phase === "erasing") {
      controls.start("erase").then(() => {
        onEraseDone();
      });
    } else {
      controls.start("show");
    }
  }, [phase]);

  const container = {
    show: {
      transition: { staggerChildren: 0.018 }
    },
    erase: {
      transition: { staggerChildren: 0.012, staggerDirection: -1 }
    }
  };

  const char = {
    show: { opacity: 1, y: 0, filter: "blur(0px)" },
    erase: { opacity: 0, y: -10, filter: "blur(6px)" }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={phase === "erasing"
        ? { scale: 0.9, opacity: 0.7 }
        : { scale: 1, opacity: 1 }
      }
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
      className="card max-w-xl mx-auto overflow-hidden"
    >
      <motion.p
        variants={container}
        initial="show"
        animate={controls}
        className="text-lg md:text-xl font-medium text-center leading-relaxed"
      >
        {letters.map((ch, i) => (
          <motion.span key={i} variants={char} className="inline-block">
            {ch === " " ? "\u00A0" : ch}
          </motion.span>
        ))}
      </motion.p>
    </motion.div>
  );
}
