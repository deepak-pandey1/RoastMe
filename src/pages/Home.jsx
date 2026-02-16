import React from "react";
import RoastGenerator from "../components/RoastGenerator";
import { motion } from "framer-motion";
2

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -80 }}
      transition={{ duration: 0.35 }}
      className="flex flex-col gap-10 px-6 pt-16 pb-10 select-none"

    >
      <section className="max-w-3xl mx-auto text-center card">
        <h1 className="text-3xl font-extrabold">Roast Me 🔥</h1>
        {/* <p className="text-slate-300 mt-2">
          Click and receive a perfectly timed roast. Sharing recommended.
        </p> */}
      </section>

      <section className="max-w-3xl mx-auto w-full">
        <RoastGenerator />
      </section>
    </motion.main>
  );
}
