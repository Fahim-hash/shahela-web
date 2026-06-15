"use client";

import { motion } from "framer-motion";

export default function ZaimaAesthetic() {
  // 📷 Just place her clean photos in public/images/
  const images = [
    "/images/zaima-1.jpg",
    "/images/zaima-2.jpg",
    "/images/zaima-3.jpg",
  ];

  return (
    <div className="min-h-screen w-full bg-[#FAF9F6] text-[#1A1A1A] font-sans antialiased selection:bg-pink-100 selection:text-pink-900">
      
      {/* Premium Minimal Navigation */}
      <nav className="w-full max-w-7xl mx-auto px-6 py-8 flex justify-between items-center border-b border-black/5">
        <span className="text-xs font-bold uppercase tracking-[0.3em] opacity-80">
          Zaima Akter
        </span>
        <span className="text-[10px] font-mono tracking-widest opacity-40 uppercase">
          Edition 2026 // Archive
        </span>
      </nav>

      {/* Hero Visual Section */}
      <main className="max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Editorial Typography */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-xs font-semibold tracking-[0.25em] text-pink-600/80 uppercase mb-4 block">
              Personal Exhibition
            </span>
            <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-[1.05] text-[#111] mb-8">
              Capturing the <br />
              <span className="font-serif italic font-normal text-pink-700/90">essence</span> of style.
            </h1>
            <p className="text-sm md:text-base text-stone-500 max-w-md leading-relaxed font-medium mb-8">
              A curated space dedicated to elegant visuals, minimal design aesthetics, and a quiet narrative of daily moments.
            </p>
          </motion.div>

          {/* Minimalist Stats/Labels */}
          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-black/5 max-w-sm">
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-stone-400 mb-1 font-mono">Subject</span>
              <span className="text-sm font-semibold tracking-wide">Zaima Akter</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-stone-400 mb-1 font-mono">Curation</span>
              <span className="text-sm font-semibold tracking-wide">RelaxStudio</span>
            </div>
          </div>
        </div>

        {/* Right Side: Clean Asymmetric Image Frame */}
        <div className="w-full lg:w-1/2 flex justify-center relative px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="w-full max-w-md aspect-[3/4] bg-stone-100 rounded-[2rem] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.06)] relative group"
          >
            {/* Soft gradient overlay for premium touch */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            
            <img 
              src={images[0]} 
              alt="Zaima Akter Portrait" 
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              onError={(e) => {
                // Fallback placeholder gradient if image isn't loaded yet
                e.currentTarget.style.display = 'none';
              }}
            />
          </motion.div>
        </div>

      </main>

      {/* Secondary Elegant Minimalist Grid */}
      <section className="bg-stone-50 border-t border-black/5 py-20 w-full mt-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] opacity-60">Visual Index</h2>
            <p className="text-xs text-stone-400 mt-2 md:mt-0 font-mono">01 — 02 // GALLERY STACKS</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-video bg-stone-200/60 rounded-2xl overflow-hidden shadow-sm">
              <img src={images[1]} alt="Gallery 01" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-video bg-stone-200/60 rounded-2xl overflow-hidden shadow-sm">
              <img src={images[2]} alt="Gallery 02" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Clean Aesthetic Footer */}
      <footer className="w-full max-w-7xl mx-auto px-6 py-12 flex justify-between items-center text-[10px] font-mono tracking-widest opacity-40 uppercase">
        <span>© 2026 Creative Portfolio</span>
        <span>Designed via RelaxStudio</span>
      </footer>

    </div>
  );
}
