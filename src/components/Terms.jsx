import React from "react";
import { motion } from "framer-motion";
import {
  FiAlertTriangle,
  FiUser,
  FiFileText,
  FiShield,
  FiRefreshCw,
} from "react-icons/fi";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const sections = [
  {
    icon: <FiAlertTriangle />,
    title: "Use at Your Own Risk",
    desc: "Roasts generated are purely for entertainment purposes. If it hurts your feelings… maybe it was accurate 😏",
  },
  {
    icon: <FiShield />,
    title: "No Harmful Content",
    desc: "The goal is humor, not harassment. We avoid abusive or hateful content.",
  },
  {
    icon: <FiUser />,
    title: "User Responsibility",
    desc: "You are responsible for how you use or share the generated roasts.",
  },
  {
    icon: <FiFileText />,
    title: "Content Ownership",
    desc: "Generated content can be used freely, but we are not liable for misuse.",
  },
  {
    icon: <FiRefreshCw />,
    title: "Terms Updates",
    desc: "These terms may change over time. Continuing to use the platform means you accept updates.",
  },
];

export default function Terms() {
  return (
    <div className="relative min-h-screen bg-[#020617] text-white overflow-hidden px-6 sm:px-10 py-16 md:py-24">

      {/* Background Glow */}
      <div className="absolute inset-0 z-0">

        <motion.div
          animate={{ x: [0, 80, -40, 0], y: [0, -40, 60, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute w-[260px] sm:w-[420px] h-[260px] sm:h-[420px] bg-blue-500/10 blur-3xl rounded-full top-[-120px] left-[-120px]"
        />

        <motion.div
          animate={{ x: [0, -60, 40, 0], y: [0, 60, -40, 0] }}
          transition={{ duration: 22, repeat: Infinity }}
          className="absolute w-[260px] sm:w-[420px] h-[260px] sm:h-[420px] bg-pink-500/10 blur-3xl rounded-full bottom-[-120px] right-[-120px]"
        />

      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="relative z-10 max-w-6xl mx-auto"
      >

        {/* Header */}
        <motion.div
          variants={fadeUp}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-pink-400 text-transparent bg-clip-text">
            Terms & Conditions 📜
          </h1>

          <p className="text-gray-400 mt-4 text-sm sm:text-base">
            Read this before you get roasted 😌
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

          {sections.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{
                scale: 1.05,
                y: -6,
              }}
              className="group relative p-6 md:p-7 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl overflow-hidden transition-all"
            >

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-blue-500/10 to-pink-500/10 blur-xl" />

              {/* Icon + Title */}
              <div className="flex items-start gap-4 mb-3">

                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-blue-400 text-xl sm:text-2xl mt-1"
                >
                  {item.icon}
                </motion.div>

                <h2 className="text-base sm:text-lg font-semibold">
                  {item.title}
                </h2>

              </div>

              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>

            </motion.div>
          ))}

        </div>

        {/* Footer */}
        <motion.div
          variants={fadeUp}
          className="mt-16 md:mt-20 text-center text-gray-500 text-xs sm:text-sm"
        >
          By using this platform, you agree to these terms. Stay cool and roast responsibly 🔥
        </motion.div>

      </motion.div>
    </div>
  );
}