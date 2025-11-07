import React from "react";
import { motion } from "framer-motion";

export default function RoastCard({ text }) {
  return (
    <motion.div
      className="card max-w-xl mx-auto"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
    >
      <motion.p
        key={text}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.35 }}
        className="text-lg md:text-xl font-medium text-center"
      >
        {text}
      </motion.p>
    </motion.div>
  );
}
