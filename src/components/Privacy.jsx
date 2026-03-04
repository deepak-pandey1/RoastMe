import React from "react";
import { motion } from "framer-motion";
import {
  FiDatabase,
  FiLock,
  FiEye,
  FiShield,
  FiServer,
  FiSettings,
  FiUserCheck,
  FiRefreshCw,
  FiInfo,
  FiCheckCircle,
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
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const sections = [
  {
    icon: <FiDatabase />,
    title: "Information We Collect",
    desc: "We do not collect personal data unless you explicitly provide it. Most roasts are generated without storing personal identity.",
  },
  {
    icon: <FiSettings />,
    title: "How We Use Data",
    desc: "Any data used helps improve system performance, generate better responses, and enhance the overall user experience.",
  },
  {
    icon: <FiUserCheck />,
    title: "No Selling Your Data",
    desc: "We do not sell, trade, or rent your personal information to third parties.",
  },
  {
    icon: <FiEye />,
    title: "Cookies",
    desc: "Minimal cookies may be used to improve performance and basic analytics.",
  },
  {
    icon: <FiServer />,
    title: "Third-Party Services",
    desc: "Some features may rely on third-party APIs or tools, which follow their own privacy policies.",
  },
  {
    icon: <FiShield />,
    title: "Security",
    desc: "We implement reasonable security practices, although no system can guarantee complete protection.",
  },
  {
    icon: <FiLock />,
    title: "Your Control",
    desc: "You may stop using the platform at any time. There are no lock-ins.",
  },
  {
    icon: <FiRefreshCw />,
    title: "Policy Updates",
    desc: "This privacy policy may change over time. Continued use indicates acceptance of updates.",
  },
];

export default function Privacy() {
  return (
    <div className="relative min-h-screen bg-[#020617] text-white overflow-hidden px-4 sm:px-6 md:px-10 lg:px-16 py-14 sm:py-16 md:py-20 lg:py-24">

      {/* Animated Background */}
      <div className="absolute inset-0 z-0">

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

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="relative z-10 max-w-7xl mx-auto"
      >

        {/* Header */}
        <motion.div
          variants={fadeUp}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >

          <h1 className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Privacy Policy
            <FiShield className="text-blue-400 text-2xl sm:text-3xl md:text-4xl" />
          </h1>

          <div className="flex items-center justify-center gap-2 text-gray-400 mt-4 text-sm sm:text-base px-2 text-center">
            <FiInfo className="text-blue-400 shrink-0" />
            <p>Your privacy and data protection are important to us.</p>
          </div>

        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-6 md:gap-8">

          {sections.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{
                scale: 1.05,
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
          variants={fadeUp}
          className="mt-14 sm:mt-16 md:mt-20 text-center flex items-center justify-center gap-2 text-gray-500 text-xs sm:text-sm px-4"
        >
          <FiCheckCircle className="text-green-400 shrink-0" />
          <p>Your data remains under your control while using this platform.</p>
        </motion.div>

      </motion.div>
    </div>
  );
}