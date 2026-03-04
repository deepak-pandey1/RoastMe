import React, { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import Privacy from "./components/Privacy";   // ✅ added
import Terms from "./components/Terms";       // ✅ added
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // direction: 1 = next page, -1 = prev page
  const [direction, setDirection] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (location.pathname === "/") {
        setDirection(1);
        navigate("/about");
      } else if (location.pathname === "/about") {
        setDirection(1);
        navigate("/privacy");   // ✅ added
      } else if (location.pathname === "/privacy") {
        setDirection(1);
        navigate("/terms");     // ✅ added
      }
    },

    onSwipedRight: () => {
      if (location.pathname === "/terms") {
        setDirection(-1);
        navigate("/privacy");   // ✅ added
      } else if (location.pathname === "/privacy") {
        setDirection(-1);
        navigate("/about");     // ✅ added
      } else if (location.pathname === "/about") {
        setDirection(-1);
        navigate("/");
      }
    },

    delta: 80,
    preventScrollOnSwipe: true,
    trackTouch: true,
  });

  return (
    <div
      {...handlers}
      className="min-h-screen flex flex-col text-white bg-[radial-gradient(ellipse_at_top,_#0f172a,_#020617)] overflow-x-hidden"
    >

      <ScrollToTop />   {/* 👈 ADD THIS */}
      <Header />

      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home direction={direction} />} />
            <Route path="/about" element={<About direction={direction} />} />

            {/* ✅ added routes */}
            <Route path="/privacy" element={<Privacy direction={direction} />} />
            <Route path="/terms" element={<Terms direction={direction} />} />
          </Routes>
        </AnimatePresence>
      </div>

      <Footer />
    </div>
  );
}