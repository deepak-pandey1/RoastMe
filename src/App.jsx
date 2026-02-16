import React from "react";
// import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";


export default function App(){
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col text-white bg-[radial-gradient(ellipse_at_top,_#0f172a,_#020617)]">

      <Header />

      <div className="flex-1 relative">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </AnimatePresence>
      </div>

      <Footer />
    </div>
  );
}

