import React from "react";
import RoastGenerator from "../components/RoastGenerator";
import { motion } from "framer-motion";

export default function Home({ direction }) {
  return (
    <motion.div
      className="absolute inset-0 will-change-transform overflow-hidden bg-[#020617]"
      custom={direction}
      initial={(direction) => ({
        x: direction === 1 ? "100%" : "-100%",
        opacity: 0.98
      })}
      animate={{ x: "0%", opacity: 1 }}
      exit={(direction) => ({
        x: direction === 1 ? "-100%" : "100%",
        opacity: 0.98
      })}
      transition={{
        duration: 0.28,
        ease: [0.22, 1, 0.36, 1]
      }}
    >

      {/* 🌌 SAME BACKGROUND AS ABOUT */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{ x: [0, 25, -20, 0], y: [0, -20, 25, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute w-80 h-80 bg-blue-500/10 blur-3xl rounded-full top-[-80px] left-[-80px]"
        />
        <motion.div
          animate={{ x: [0, -25, 20, 0], y: [0, 20, -25, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute w-80 h-80 bg-yellow-400/10 blur-3xl rounded-full bottom-[-80px] right-[-80px]"
        />
      </div>

      <main className="relative z-10 flex flex-col gap-10 px-6 pt-16 pb-24 md:pb-10 select-none min-h-screen">

        <section className="max-w-3xl mx-auto text-center card">
          <h1 className="text-3xl font-extrabold">Roast Me 🔥</h1>
        </section>

        <section className="max-w-3xl mx-auto w-full">
          <RoastGenerator />
        </section>

      </main>
    </motion.div>
  );
}