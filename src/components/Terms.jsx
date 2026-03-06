import React from "react";
import { motion } from "framer-motion";
import {
  FiAlertTriangle,
  FiUser,
  FiFileText,
  FiShield,
  FiRefreshCw,
  FiClipboard,
  FiInfo,
  FiCheckCircle
} from "react-icons/fi";

/* ✅ Same smooth fadeUp animation */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const sections = [
  {
    icon: <FiAlertTriangle />,
    title: "Use at Your Own Risk",
    desc: "Roasts generated are purely for entertainment purposes. If something feels personal, remember it’s all meant to be humorous.",
  },
  {
    icon: <FiShield />,
    title: "No Harmful Content",
    desc: "The platform aims to deliver humor, not harassment. Content that promotes hate or abuse is strictly avoided.",
  },
  {
    icon: <FiUser />,
    title: "User Responsibility",
    desc: "Users are responsible for how generated content is shared or used outside the platform.",
  },
  {
    icon: <FiFileText />,
    title: "Content Ownership",
    desc: "Generated roasts may be used freely, but the platform holds no liability for misuse of the content.",
  },
  {
    icon: <FiRefreshCw />,
    title: "Terms Updates",
    desc: "These terms may evolve over time. Continued usage of the platform indicates acceptance of updated policies.",
  },
];

export default function Terms() {
  return (
    <div className="relative min-h-screen bg-[#020617] text-white overflow-hidden px-4 sm:px-6 md:px-10 lg:px-16 py-14 sm:py-16 md:py-20 lg:py-24">

      <div className="absolute inset-0 z-0 pointer-events-none">

        <motion.div
          animate={{ x: [0, 80, -40, 0], y: [0, -40, 60, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute w-[220px] sm:w-[320px] md:w-[420px] h-[220px] sm:h-[320px] md:h-[420px] bg-blue-500/10 blur-3xl rounded-full top-[-120px] left-[-120px]"
        />

        <motion.div
          animate={{ x: [0, -60, 40, 0], y: [0, 60, -40, 0] }}
          transition={{ duration: 22, repeat: Infinity }}
          className="absolute w-[220px] sm:w-[320px] md:w-[420px] h-[220px] sm:h-[320px] md:h-[420px] bg-pink-500/10 blur-3xl rounded-full bottom-[-120px] right-[-120px]"
        />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.4, once: false }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >

          <h1 className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <span>Terms & Conditions</span>
            <FiClipboard className="text-blue-400 text-2xl sm:text-3xl md:text-4xl" />
          </h1>

          <div className="mt-4 text-gray-400 text-sm sm:text-base text-center max-w-xl mx-auto px-2">
            <p className="inline-flex items-start gap-2 leading-relaxed">
              <FiInfo className="text-blue-400 shrink-0 mt-[6px]" />
              Please review these terms carefully before using the platform.
            </p>
          </div>

        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-6 md:gap-8">

          {sections.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3, once: false }}
              whileHover={{
                scale: 1.04,
                y: -6,
              }}
              className="group relative p-5 sm:p-6 md:p-7 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl overflow-hidden transition-all"
            >

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-blue-500/10 to-pink-500/10 blur-xl" />

              <div className="flex items-start gap-3 sm:gap-4 mb-3">

                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-blue-400 text-xl sm:text-2xl mt-1"
                >
                  {item.icon}
                </motion.div>

                <h2 className="text-base sm:text-lg font-semibold leading-snug">
                  {item.title}
                </h2>

              </div>

              <p className="text-gray-400 text-sm sm:text-[15px] leading-relaxed">
                {item.desc}
              </p>

            </motion.div>
          ))}

        </div>

        {/* Footer */}
        <motion.div
          custom={sections.length}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.4, once: false }}
          className="mt-14 sm:mt-16 md:mt-20 text-gray-500 text-xs sm:text-sm text-center max-w-xl mx-auto px-4"
        >
          <p className="inline-flex items-start gap-2 leading-relaxed">
            <FiCheckCircle className="text-green-400 shrink-0 mt-[5px]" />
            By continuing to use this platform, you agree to these Terms & Conditions.
          </p>
        </motion.div>

      </div>
    </div>
  );
}