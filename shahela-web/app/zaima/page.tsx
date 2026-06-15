"use client";

import { motion } from "framer-motion";

export default function ZaimaPremiumUniverse() {
  // 📷 Place your 5 beautiful photos inside public/images/
  const images = [
    "/images/zaima-1.jpg", // Hero image (Main card)
    "/images/zaima-2.jpg", // Gallery Left
    "/images/zaima-3.jpg", // Gallery Right
    "/images/zaima-4.jpg", // Grid Lower Left
    "/images/zaima-5.jpg", // Grid Lower Right
  ];

  return (
    <div className="min-h-screen w-full bg-[#FAF9F6] text-[#1A1A1A] font-sans antialiased selection:bg-pink-100 selection:text-pink-900 relative overflow-hidden">
      
      {/* ── BACKGROUND ARTWORK LAYER ── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        
        {/* Dynamic Ambient Light Glows */}
        <motion.div 
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -60, 40, 0],
            scale: [1, 1.1, 0.9, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-pink-200/30 to-purple-200/20 blur-[120px]"
        />
        <motion.div 
          animate={{
            x: [0, -30, 50, 0],
            y: [0, 40, -50, 0],
            scale: [1, 0.95, 1.05, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-10 right-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-amber-100/40 via-rose-100/20 to-transparent blur-[100px]"
        />

        {/* Micro Architectural Grid */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]"></div>
        
        {/* Premium Matte Film Grain Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.025] mix-blend-neutral pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* ── CONTENT LAYER ── */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Updated Top Navigation Header */}
        <nav className="w-full max-w-7xl mx-auto px-6 py-8 flex justify-between items-center border-b border-black/[0.04]">
          <span className="text-xs font-bold uppercase tracking-[0.35em] opacity-90 text-pink-700">
            Zaima Apu
          </span>
          <span className="text-[10px] font-mono tracking-widest opacity-40 uppercase">
            Edition 2026 // Creative Archive
          </span>
        </nav>

        {/* Hero Section (Image 1) */}
        <main className="max-w-7xl w-full mx-auto px-6 py-12 md:py-20 flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Editorial Typography */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-xs font-bold tracking-[0.3em] text-pink-600/90 uppercase mb-4 block">
                Visual Exhibition
              </span>
              <h1 className="text-5xl md:text-7xl font-light tracking-tighter leading-[1.02] text-[#111] mb-8">
                Capturing the <br />
                <span className="font-serif italic font-normal text-pink-700/90">essence</span> of style.
              </h1>
              <p className="text-sm md:text-base text-stone-500 max-w-md leading-relaxed font-medium mb-12">
                A curated digital archive dedicated to elegant visuals, clean contemporary compositions, and a thoughtful perspective on daily aesthetics.
              </p>
            </motion.div>

            {/* Premium Details Row (Untouched Names) */}
            <div className="grid grid-cols-2 gap-12 pt-8 border-t border-black/[0.06] max-w-sm">
              <div>
                <span className="block text-[9px] uppercase tracking-widest text-stone-400 mb-1.5 font-mono">Creative Direction</span>
                <span className="text-xs font-bold tracking-wide uppercase opacity-80">Zaima Akter</span>
              </div>
              <div>
                <span className="block text-[9px] uppercase tracking-widest text-stone-400 mb-1.5 font-mono">Curated Index</span>
                <span className="text-xs font-bold tracking-wide uppercase opacity-80">Studio Space</span>
              </div>
            </div>
          </div>

          {/* Right Side: Clean Asymmetric Main Frame (Image 1) */}
          <div className="w-full lg:w-1/2 flex justify-center relative px-4">
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="w-full max-w-md aspect-[3/4] bg-stone-100/50 rounded-[2.5rem] overflow-hidden shadow-[0_40px_90px_-15px_rgba(0,0,0,0.08)] border border-white/40 backdrop-blur-sm relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
              <img 
                src={images[0]} 
                alt="Zaima Akter Feature Portrait" 
                className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
              />
            </motion.div>
          </div>
        </main>

        {/* ── EXPANDED GALLERY SECTION (Images 2, 3, 4, 5) ── */}
        <section className="bg-stone-50/40 border-t border-b border-black/[0.03] backdrop-blur-md py-20 w-full relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] opacity-60">Visual Index Expansion</h2>
              <p className="text-xs text-stone-400 mt-2 md:mt-0 font-mono">01 — 05 // COMPREHENSIVE CURATION</p>
            </div>
            
            {/* Split Row for Images 2 and 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
              <div className="aspect-[4/3] bg-stone-200/40 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-white/60 group">
                <img 
                  src={images[1]} 
                  alt="Zaima Akter Collection 02" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102" 
                />
              </div>
              <div className="aspect-[4/3] bg-stone-200/40 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-white/60 group">
                <img 
                  src={images[2]} 
                  alt="Zaima Akter Collection 03" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102" 
                />
              </div>
            </div>

            {/* Asymmetric Tall Grid Row for Images 4 and 5 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="md:col-span-2 aspect-[16/9] bg-stone-200/40 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-white/60 group">
                <img 
                  src={images[3]} 
                  alt="Zaima Akter Collection 04" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-101" 
                />
              </div>
              <div className="aspect-[3/4] md:aspect-auto bg-stone-200/40 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-white/60 group">
                <img 
                  src={images[4]} 
                  alt="Zaima Akter Collection 05" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102" 
                />
              </div>
            </div>

          </div>
        </section>

        {/* Minimal Footer Cleaned From External Brand Names */}
        <footer className="w-full max-w-7xl mx-auto px-6 py-12 flex justify-between items-center text-[9px] font-mono tracking-[0.2em] opacity-40 uppercase">
          <span>© 2026 All Rights Reserved</span>
          <span>Personal Space</span>
        </footer>
      </div>

    </div>
  );
}
