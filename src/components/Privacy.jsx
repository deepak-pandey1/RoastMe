import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const sections = [
  {
    title: "Information We Collect",
    desc: "We don’t collect personal data unless you explicitly provide it. Most roasts are generated without storing any personal identity.",
  },
  {
    title: "How We Use Data",
    desc: "Data is used only to improve performance, generate better roasts, and enhance user experience.",
  },
  {
    title: "No Selling Your Data",
    desc: "We do NOT sell, trade, or rent your personal information to anyone. No shady business here.",
  },
  {
    title: "Cookies",
    desc: "We may use minimal cookies for performance and analytics — nothing creepy, promise.",
  },
  {
    title: "Third-Party Services",
    desc: "We may use third-party APIs/tools, but they follow their own privacy policies.",
  },
  {
    title: "Security",
    desc: "We use reasonable security measures, but remember — no system is 100% hack-proof.",
  },
  {
    title: "Your Control",
    desc: "You can stop using the platform anytime. No lock-ins, no drama.",
  },
  {
    title: "Updates",
    desc: "Privacy policy may change over time. Keep checking — or stay dangerously unaware 😈",
  },
];

export default function Privacy() {
  return (
    <div className="relative min-h-screen bg-[#020617] text-white overflow-hidden px-6 py-16">

      {/* 🌌 Background Glow */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{ x: [0, 40, -30, 0], y: [0, -30, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute w-[400px] h-[400px] bg-blue-500/10 blur-3xl rounded-full top-[-100px] left-[-100px]"
        />
        <motion.div
          animate={{ x: [0, -40, 30, 0], y: [0, 30, -40, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute w-[400px] h-[400px] bg-pink-500/10 blur-3xl rounded-full bottom-[-100px] right-[-100px]"
        />
      </div>

      {/* 🔥 Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-5xl mx-auto"
      >
        {/* Title */}
        <motion.h1
          variants={fadeUp}
          className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-pink-400 text-transparent bg-clip-text"
        >
          Privacy Policy 🔐
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-center text-gray-400 mb-12"
        >
          We respect your privacy… even while roasting you 😌
        </motion.p>

        {/* Sections */}
        <div className="grid md:grid-cols-2 gap-6">
          {sections.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
              className="relative group rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 transition-all duration-300"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-blue-500/10 to-pink-500/10 blur-xl" />

              <h2 className="text-lg font-semibold mb-2 text-white">
                {item.title}
              </h2>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          variants={fadeUp}
          className="mt-16 text-center text-gray-500 text-sm"
        >
          Your data stays yours. We just roast — not steal 🔥
        </motion.div>
      </motion.div>
    </div>
  );
}