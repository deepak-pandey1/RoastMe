import React, { useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaFireAlt, FaLaughBeam } from "react-icons/fa";

export default function Header() {
  const audioRef = useRef(null);
  const location = useLocation();

  // 🔊 Handle sound playback
  const handleAboutClick = () => {
    if (audioRef.current) {
      audioRef.current.pause(); // stop if already playing
      audioRef.current.currentTime = 0;
    }

    const audio = new Audio("/sounds/roast2.mp3");
    audio.loop = true; // infinite play
    audio.volume = 0.5; // set volume
    audio.play();

    // store reference
    audioRef.current = audio;
  };

  // 🧹 Stop audio when user navigates away from About
  React.useEffect(() => {
    if (location.pathname !== "/about" && audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
  }, [location]);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 10 }}
      className="sticky top-0 z-50 w-full backdrop-blur-md bg-slate-900/70 border-b border-slate-800 shadow-md"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* 🌈 Logo Section */}
        <Link
          to="/"
          className="flex items-center gap-3 text-2xl font-extrabold bg-gradient-to-r from-pink-500 via-yellow-400 to-orange-500 bg-clip-text text-transparent hover:scale-105 transition-transform"
        >
          <motion.div
            animate={{ rotate: [0, 20, -20, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <FaFireAlt className="text-yellow-400 text-3xl" />
          </motion.div>
          Roast<span className="text-pink-400">Me</span>
          <FaLaughBeam className="text-yellow-300 text-3xl" />
        </Link>

        {/* 🔗 Navigation */}
        <nav className="flex gap-6">
          {["/", "/about"].map((path, i) => {
            const name = path === "/" ? "Home" : "About";
            return (
              <NavLink
                key={i}
                to={path}
                end
                onClick={name === "About" ? handleAboutClick : undefined}
                className={({ isActive }) =>
                  `relative text-sm md:text-base font-semibold transition-all duration-200 ${
                    isActive
                      ? "text-yellow-400"
                      : "text-slate-300 hover:text-white"
                  }`
                }
              >
                {name}
                <motion.span
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-yellow-400 to-pink-500"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                ></motion.span>
              </NavLink>
            );
          })}
        </nav>
      </div>
    </motion.header>
  );
}
