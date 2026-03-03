import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiZap, FiShare2, FiSmile, FiShield } from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.07,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

// 🔢 Counter Hook
function useCounter(end, duration = 1400) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = null;

    const animate = (time) => {
      if (!start) start = time;
      const progress = Math.min((time - start) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return count;
}

// 💬 Reviews
const reviews = [
  // Hinglish 🔥
  "Bhai ye AI personal ho gaya 😭",
  "Itna roast to meri ex ne bhi nahi kiya 💀",
  "Self respect uninstall ho gayi 😂",
  "Ye app dangerous hai bhai 😭",
  "Roast sunke 2 min tak blank ho gaya 🤡",
  "Bhai ye kaise itna accurate bol raha 😳",
  "Mummy se zyada judge kar diya 💀",
  "AI ne meri aukaat dikha di 😂",
  "Bhai confidence tod diya pura 😭",
  "Roast nahi reality check tha 💀",
  "Dil pe lag gaya bhai 🥲",
  "Ye AI sab jaanta hai kya 😳",
  "Mujhe laga mazaak hoga... ye serious ho gaya 💀",
  "Bhai meri personality expose ho gayi 😭",
  "Roast ke baad life rethink kar raha hu 🤡",
  "Bhai ye app uninstall kar raha hu ab 😂",

  // English 😈
  "Bro this AI knows too much 😳",
  "I came for fun, left emotionally damaged 💀",
  "That roast hit harder than expected 😭",
  "Why is this AI so accurate 😭",
  "I wasn’t ready for that level of honesty 💀",
  "This is not AI, this is personal attack 🤡",
  "I laughed… then I cried 😂",
  "Who gave this AI access to my life 😭",
  "That roast was brutally honest 💀",
  "I feel attacked but impressed 😭",
  "This AI just read my soul 💀",
  "I need therapy after this 😂",
  "This went from fun to trauma real quick 😭",
  "Why does this feel so real 💀",
  "I regret clicking that button 😂",

  // Mixed + funny 😆
  "Bhai roast tha ya character assassination 💀",
  "AI ne meri band baja di 😂",
  "Confidence gaya tel lene 😭",
  "This AI didn’t hold back at all 💀",
  "Roast sunke main chup ho gaya 🤡",
  "Bro I wasn’t prepared for this 😭",
  "Ye AI savage level max hai 💀",
  "I laughed but it hurt inside 😂",
  "Mujhe laga joke hoga, ye toh sach bol gaya 😭",
  "This AI needs to chill bro 💀",
  "Bhai itna sach bhi nahi bolna tha 😭",
  "That roast was illegal 💀",
  "I feel exposed 😭",
  "AI ne meri beizzati global kar di 😂",
  "Bro this is too real 💀"
];

// ⌨️ Typing Effect
function useTypingEffect(list) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = list[index];
    const speed = deleting ? 20 : 40;

    const timer = setTimeout(() => {
      setText((prev) =>
        deleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1)
      );

      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 1200);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % list.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, deleting, index, list]);

  return text;
}

export default function About({ direction }) {
  const roasts = useCounter(10000);
  const shares = useCounter(2000);
  const typedText = useTypingEffect(reviews);

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden px-3 py-14 flex justify-center bg-[#020617]"
      custom={direction}
      initial={(direction) => ({
        x: direction === 1 ? "100%" : "-100%",
        opacity: 0,
      })}
      animate={{ x: "0%", opacity: 1 }}
      exit={(direction) => ({
        x: direction === 1 ? "-100%" : "100%",
        opacity: 0,
      })}
      transition={{ duration: 0.5 }}
    >
      {/* 🌌 BACKGROUND (SUBTLE PREMIUM) */}
      {/* 🌌 BACKGROUND (MATCH ORIGINAL THEME) */}
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

      <div className="w-full max-w-4xl space-y-6 relative z-10">

        {/* 🔥 HERO */}
        <motion.div initial="hidden" animate="show" className="text-center">
          <motion.h1
            variants={fadeUp}
            custom={0}
            className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Inside Roast Me
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={1}
            className="text-slate-400 text-xs sm:text-sm mt-2"
          >
            Savage AI roasting — but make it aesthetic ✨
          </motion.p>
        </motion.div>

        {/* 🚀 FEATURES */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { icon: <FiZap />, title: "Instant" },
            { icon: <FiSmile />, title: "Fun" },
            { icon: <FiShare2 />, title: "Share" },
            { icon: <FiShield />, title: "Safe" },
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              whileHover={{ y: -6, scale: 1.03 }}
              className="py-3 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-xl transition-all"
            >
              <div className="text-white text-lg mb-1 flex justify-center">
                {item.icon}
              </div>
              <p className="text-xs text-white text-center">{item.title}</p>
            </motion.div>
          ))}
        </div>

        {/* 💬 REVIEW BOX (PREMIUM GLASS + LIGHT SWEEP) */}
        <motion.div
          variants={fadeUp}
          custom={5}
          initial="hidden"
          animate="show"
          className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-xl"
        >
          {/* ✨ Light sweep */}
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          />

          <div className="px-5 py-5 relative z-10">
            <h2 className="text-center text-sm font-semibold mb-4 text-white/90">
              People After Using
            </h2>

            <div className="bg-black/20 rounded-xl px-4 py-4 min-h-[70px] flex items-center">
              <p className="text-sm text-slate-200 leading-relaxed">
                {typedText}
                <span className="ml-1 opacity-50 animate-pulse">|</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* 📊 STATS */}
        <div className="grid grid-cols-3 gap-2 text-center">
          {[
            { value: roasts, label: "Roasts" },
            { value: shares, label: "Shares" },
            { value: "Global", label: "Users" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i + 6}
              initial="hidden"
              animate="show"
              whileHover={{ scale: 1.05 }}
              className="py-3 rounded-lg bg-white/[0.03] border border-white/10"
            >
              <h3 className="text-sm font-bold text-white">
                {typeof stat.value === "number"
                  ? `${Math.floor(stat.value / 1000)}K+`
                  : stat.value}
              </h3>
              <p className="text-[10px] text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* 🚀 CTA */}
        <motion.div
          variants={fadeUp}
          custom={10}
          initial="hidden"
          animate="show"
          className="text-center pt-2"
        >
          <motion.a
            href="/"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.08 }}
            className="px-6 py-2 rounded-lg bg-white text-black text-xs font-semibold shadow-lg"
          >
            Try Roast
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
}