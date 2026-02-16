import React from "react";
import RoastGenerator from "../components/RoastGenerator";
import { motion } from "framer-motion";
2

export default function Home({ direction }) {
  return (
     <motion.div
      className="absolute inset-0"
      custom={direction}
      initial={(direction) => ({
        x: direction === 1 ? "100%" : "-100%",
        opacity: 0.9
      })}
      animate={{ x: "0%", opacity: 1 }}
      exit={(direction) => ({
        x: direction === 1 ? "-100%" : "100%",
        opacity: 0.9
      })}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <main className="flex flex-col gap-10 px-6 pt-16 pb-10 select-none h-full">
      <section className="max-w-3xl mx-auto text-center card">
        <h1 className="text-3xl font-extrabold">Roast Me 🔥</h1>
        {/* <p className="text-slate-300 mt-2">
          Click and receive a perfectly timed roast. Sharing recommended.
        </p> */}
      </section>

      <section className="max-w-3xl mx-auto w-full">
        <RoastGenerator />
      </section>
         </main>
    </motion.div>
  );
}
