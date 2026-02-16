import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function RoastCard({ text, phase, onEraseDone }) {
  const controls = useAnimation();
  const letters = text.split("");

  useEffect(() => {
    if (phase === "erasing") {
      controls.start("erase").then(onEraseDone);
    } else {
      controls.start("show");
    }
  }, [phase]);

  const container = {
    show: { transition: { staggerChildren: 0.02 } },
    erase: { transition: { staggerChildren: 0.01, staggerDirection: -1 } }
  };

  const char = {
    show: { opacity: 1, y: 0, filter: "blur(0px)" },
    erase: { opacity: 0, y: -12, filter: "blur(8px)" }
  };

  return (
    <motion.div className="text-lg md:text-xl font-medium leading-relaxed">
      <motion.p variants={container} initial="show" animate={controls}>
        {letters.map((ch, i) => (
          <motion.span key={i} variants={char} className="inline-block">
            {ch === " " ? "\u00A0" : ch}
          </motion.span>
        ))}
      </motion.p>
    </motion.div>
  );
}
