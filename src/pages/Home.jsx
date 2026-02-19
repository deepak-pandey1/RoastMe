import React from "react";
import RoastGenerator from "../components/RoastGenerator";
import { motion } from "framer-motion";

export default function Home({ direction }) {
  return (
    <motion.div
      className="absolute inset-0 will-change-transform"
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
      <main className="flex flex-col gap-10 px-6 pt-16 pb-24 md:pb-10 select-none min-h-screen">

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
