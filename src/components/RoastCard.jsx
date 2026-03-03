import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function RoastCard({ text, phase, eraseDuration, onEraseDone }) {

  const controls = useAnimation();
  const words = text.split(" ");

  // dynamic stagger so total time ALWAYS = eraseDuration
  const stagger = eraseDuration / words.length;

  useEffect(() => {
    if (phase === "erasing") {
      controls.start("erase").then(onEraseDone);
    } else {
      controls.start("show");
    }
  }, [phase]);

  const container = {
    show: { transition: { staggerChildren: 0.02 } },
    erase: {
      transition: {
        staggerChildren: stagger,
        staggerDirection: -1
      }
    }
  };

  const char = {
    show: { opacity: 1, y: 0, filter: "blur(0px)" },
    erase: { opacity: 0, y: -12, filter: "blur(8px)" }
  };

  return (
    <motion.div className="text-base sm:text-lg md:text-xl font-medium leading-relaxed px-2" >
      <motion.p variants={container} initial="show" animate={controls}>
        {words.map((word, i) => (
  <motion.span
    key={i}
    variants={char}
    className="inline-block mr-[0.35em] whitespace-nowrap"
  >
    {word}
  </motion.span>
))}

      </motion.p>

    </motion.div>
  );
}
