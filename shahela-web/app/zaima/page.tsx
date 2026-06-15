"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * 🧸 POOKIE UNIVERSE - SOFT PASTEL EDITION
 * Built by: RelaxStudio (2026)
 * Theme: Soft Pink / Pastel Cloud / Minimalist Interactive
 */

// --- Sub-Components ---

function FloatingHeart({ delay = 0, left = "10%" }) {
  return (
    <motion.div
      initial={{ y: "100vh", opacity: 0, scale: 0.5 }}
      animate={{ y: "-10vh", opacity: [0, 1, 1, 0], scale: [0.5, 1, 1, 0.7] }}
      transition={{ duration: 8, repeat: Infinity, delay: delay, ease: "linear" }}
      className="fixed text-2xl z-0 pointer-events-none"
      style={{ left }}
    >
      🌸
    </motion.div>
  );
}

export default function PookieUniverse() {
  const [mounted, setMounted] = useState(false);
  const [isPetni, setIsPetni] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [pookieQuote, setPookieQuote] = useState("Click the magic star below for sweet words! ✨");

  useEffect(() => {
    setMounted(true);
  }, []);

  // Matro 3-4 ta chobi lagbe max!
  const pookieImages = {
    normal: "/images/pookie_cute.jpg",     // Her best soft/cute smile picture
    angry: "/images/pookie_angry.jpg",     // A funny, angry face or candid snapshot
    favorite: "/images/pookie_fav.jpg"      // Another beautiful aesthetic picture
  };

  const cuteQuotes = [
    "Tumi prithibir shobcheye soft ar cute pookie! 🧸",
    "Tomar bhalo-mon ta ekdom tulor megher moto niramish! ☁️",
    "Kotha dilam, tomake r bhoot-petni bole khedabo na (ajker jonno)! 🎀",
    "Tomar smile-ta mathay thakle shob dushchinta dore palay! ✨",
    "Aesthetic feeds ar soft soft kotha—tumi asholei ekta pori! 🌸"
  ];

  const petniQuotes = [
    "Dure thako! Ekhuni bhoot chorano dorkar! 👹",
    "Exam er age 'kisu pori nai' bole top kora ultra petni ekta! 📝",
    "Ragle tomake eto baje lage jekhane bhoot-raও voy pay! 💀",
    "Mecho petni r moto shubidha pailei macher piche dhorbe! 🐟"
  ];

  const handleMagicClick = () => {
    setClickCount((prev) => prev + 1);
    const pool = isPetni ? petniQuotes : cuteQuotes;
    const randomIndex = Math.floor(Math.random() * pool.length);
    setPookieQuote(pool[randomIndex]);
  };

  if (!mounted) return null;

  return (
    <div className={`relative min-h-screen w-full transition-colors duration-1000 overflow-x-hidden selection:bg-pink-300 ${
      isPetni ? "bg-[#1d1124] text-purple-200" : "bg-[#fff0f5] text-pink-900"
    }`}>
      
      {/* 🌸 Floating Background Elements */}
      {!isPetni && (
        <>
          <FloatingHeart delay={0} left="5%" />
          <FloatingHeart delay={2} left="25%" />
          <FloatingHeart delay={5} left="60%" />
          <FloatingHeart delay={1.5} left="85%" />
          <FloatingHeart delay={4} left="45%" />
        </>
      )}

      {/* 🦄 Top Glass Navbar */}
      <nav className="fixed top-6 left-0 w-full z-50 px-6">
        <div className={`max-w-4xl mx-auto flex justify-between items-center border backdrop-blur-xl px-6 py-3 rounded-full transition-all ${
          isPetni ? "bg-purple-950/40 border-purple-800/40" : "bg-white/40 border-pink-200/50"
        }`}>
          <span className="text-lg font-black tracking-wider uppercase font-sans">
            {isPetni ? "👹 Petni.exe" : "🎀 Pookie.Hub"}
          </span>
          <button
            onClick={() => {
              setIsPetni(!isPetni);
              setPookieQuote(isPetni ? "Returned to sweet zone! 🌸" : "Uh-oh! Beast mode on! 👹");
            }}
            className={`px-4 py-2 rounded-full text-xs font-bold shadow-md active:scale-95 transition-all duration-300 ${
              isPetni ? "bg-pink-400 text-white" : "bg-purple-600 text-white"
            }`}
          >
            {isPetni ? "🌸 Make Her Pookie" : "👹 Trigger Petni Mode"}
          </button>
        </div>
      </nav>

      {/* 🧸 Hero & Dynamic Main Image Display */}
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-24 relative z-10 flex flex-col items-center">
        
        {/* Soft Heading */}
        <motion.div 
          key={isPetni ? "petni-head" : "pookie-head"}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-5xl md:text-7xl font-black font-sans tracking-tight">
            {isPetni ? "The Ultimate Petni" : "The Softest Pookie"}
          </h1>
          <p className="text-sm font-medium uppercase tracking-[0.2em] opacity-60 mt-3 font-sans">
            {isPetni ? "— Anger level 999% —" : "— Custom Designed for Her —"}
          </p>
        </motion.div>

        {/* 🎞️ The Hero Image Component - Custom Visual Frame */}
        <motion.div 
          key={isPetni ? "petni-img" : "pookie-img"}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className={`p-4 rounded-[40px] shadow-2xl max-w-sm w-full mb-12 border-4 transition-all ${
            isPetni ? "bg-purple-900/30 border-purple-500" : "bg-white border-pink-300"
          }`}
        >
          <div className="aspect-[3/4] rounded-[28px] overflow-hidden relative group">
            <img 
              src={isPetni ? pookieImages.angry : pookieImages.normal} 
              alt="Pookie" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Soft Overlay Pill */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center">
              <span className={`px-4 py-1.5 rounded-full text-xs font-bold text-white tracking-widest uppercase shadow-md ${
                isPetni ? "bg-purple-700 animate-pulse" : "bg-pink-400"
              }`}>
                {isPetni ? "⚠️ High Risk Zone" : "🍭 Cutest Human"}
              </span>
            </div>
          </div>
        </motion.div>

        {/* ✨ Interactive Magical Quote Box */}
        <div className={`w-full max-w-xl p-8 rounded-[35px] text-center border transition-all shadow-xl ${
          isPetni ? "bg-purple-950/40 border-purple-800" : "bg-white/80 border-pink-100"
        }`}>
          <div className="text-3xl mb-3">{isPetni ? "🔮" : "💫"}</div>
          <div className="min-h-[60px] flex items-center justify-center mb-6 px-4">
            <p className="text-xl italic font-medium tracking-wide">
              "{pookieQuote}"
            </p>
          </div>
          <button
            onClick={handleMagicClick}
            className={`px-8 py-3 rounded-full font-bold text-sm tracking-widest uppercase shadow-lg transform active:scale-95 transition-all ${
              isPetni 
                ? "bg-purple-600 text-white hover:bg-purple-700 shadow-purple-900/40" 
                : "bg-pink-400 text-white hover:bg-pink-500 shadow-pink-200"
            }`}
          >
            {isPetni ? "Click to Get Roasted 💀" : "Click for Warm Hearts 🌸"}
          </button>
        </div>

        {/* 🍨 Tiny Secondary Visual Grid (Optional/Requires just 1 more image) */}
        <div className="w-full max-w-xl grid grid-cols-2 gap-4 mt-8">
          <div className={`p-4 rounded-[25px] flex flex-col justify-center border text-center ${
            isPetni ? "bg-purple-950/20 border-purple-900" : "bg-pink-100/40 border-pink-200/60"
          }`}>
            <span className="text-2xl mb-1">🍭</span>
            <span className="text-xs font-bold opacity-60 uppercase tracking-widest">Total Clicks</span>
            <span className="text-2xl font-black mt-1">{clickCount}</span>
          </div>

          <div className={`rounded-[25px] overflow-hidden border p-2 ${
            isPetni ? "bg-purple-950/20 border-purple-900" : "bg-white border-pink-200/60"
          }`}>
            <img 
              src={pookieImages.favorite} 
              alt="Fav Frame" 
              className="w-full h-32 object-cover rounded-[18px]" 
            />
          </div>
        </div>

        {/* Minimal Footer */}
        <footer className="mt-24 pt-8 text-center text-[10px] font-mono tracking-widest opacity-40 border-t w-full max-w-xl border-current/10">
          RELAXSTUDIO POOKIE ARCHIVE • 2026
        </footer>
      </main>

      <style jsx global>{`
        ::-webkit-scrollbar { display: none; }
        html { scroll-behavior: smooth; }
        body { 
          -ms-overflow-style: none; 
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
