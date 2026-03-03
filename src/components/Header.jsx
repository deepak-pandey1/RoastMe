import React, { useRef, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaFireAlt, FaLaughBeam } from "react-icons/fa";

export default function Header() {
  const audioRef = useRef(null);
  const location = useLocation();

  // 🔊 Handle sound playback
  const handleAboutClick = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    const audio = new Audio("/sounds/roast2.mp3");
    audio.loop = true;
    audio.volume = 0.5;
    audio.play();

    audioRef.current = audio;
  };

  // 🧹 Stop audio when leaving About page
  useEffect(() => {
    if (location.pathname !== "/about" && audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
  }, [location]);

  return (
    <>
      {/* 🌌 BACKGROUND */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 30, -20, 0], y: [0, -20, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-96 h-96 bg-blue-500/10 blur-3xl rounded-full top-[-120px] left-[-120px]"
        />

        <motion.div
          animate={{ x: [0, -30, 20, 0], y: [0, 20, -30, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-96 h-96 bg-yellow-400/10 blur-3xl rounded-full bottom-[-120px] right-[-120px]"
        />
      </div>

      {/* 🔥 HEADER */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 12 }}
        className="sticky top-0 z-50 w-full bg-slate-900/50 backdrop-blur-xl border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* 🌈 LOGO */}
          <Link
            to="/"
            className="flex items-center gap-3 text-2xl font-extrabold bg-gradient-to-r from-pink-500 via-yellow-400 to-orange-500 bg-clip-text text-transparent hover:scale-105 transition-transform"
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <FaFireAlt className="text-yellow-400 text-3xl" />
            </motion.div>

            Roast<span className="text-pink-400">Me</span>

            <FaLaughBeam className="text-yellow-300 text-3xl" />
          </Link>

          {/* 🔗 NAVIGATION */}
          <nav className="flex gap-8">
            {["/", "/about"].map((path, i) => {
              const name = path === "/" ? "Home" : "About";

              return (
                <NavLink
                  key={i}
                  to={path}
                  end
                  onClick={name === "About" ? handleAboutClick : undefined}
                  className={({ isActive }) =>
                    `relative text-sm md:text-base font-semibold transition-all duration-300 ${
                      isActive
                        ? "text-yellow-400"
                        : "text-slate-300 hover:text-white"
                    }`
                  }
                >
                  {name}

                  {/* ✨ PREMIUM UNDERLINE */}
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-yellow-400 to-pink-500"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                    style={{
                      opacity:
                        location.pathname === path ? 1 : 0,
                    }}
                  />
                </NavLink>
              );
            })}
          </nav>
        </div>
      </motion.header>
    </>
  );
}