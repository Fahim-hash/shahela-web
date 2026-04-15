"use client";

import { motion } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";

/** * SHAHELA'S BIRTHDAY - THE ATTRACTION EDITION
 * Concept: Royal Crimson & Gold Magic
 * Built by: RelaxStudio (2026)
 */

export default function AttractiveWishPage() {
  return (
    <div className="relative min-h-[100dvh] w-full bg-[#050002] flex items-center justify-center overflow-hidden font-sans">
      
      {/* 🌌 Magical Background Animations */}
      <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none">
        {/* Spinning Ambient Glow */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="absolute w-[150vw] h-[150vw] md:w-[80vw] md:h-[80vw] bg-gradient-to-tr from-rose-900/20 via-amber-900/10 to-transparent blur-[100px] rounded-full"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[50px]"></div>
        <div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
      </div>

      <main className="relative z-10 w-full max-w-5xl px-5 py-10 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
        
        {/* 📸 The Hero Portrait - Majestic Frame */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative w-full max-w-[320px] md:max-w-[400px] aspect-[4/5] shrink-0"
        >
          {/* Animated Golden/Rose Border */}
          <div className="absolute -inset-[2px] rounded-[2.5rem] bg-gradient-to-b from-amber-300 via-rose-500 to-transparent opacity-50 blur-[2px]"></div>
          
          <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden bg-black shadow-[0_0_50px_rgba(225,29,72,0.3)]">
            <img 
              src="/images/shahela1.jpg" 
              alt="Shahela Apu" 
              className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-all duration-700 hover:scale-105"
            />
            {/* Elegant Inner Shadow */}
            <div className="absolute inset-0 border border-white/20 rounded-[2.5rem] pointer-events-none mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#050002] via-transparent to-transparent opacity-80"></div>
          </div>

          {/* Floating Date Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute bottom-8 -left-4 md:-left-8 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-2xl shadow-xl flex items-center gap-3"
          >
            <Sparkles className="text-amber-300" size={18} />
            <div>
              <span className="block text-[8px] text-white/50 tracking-[0.3em] uppercase">Est.</span>
              <span className="block text-sm font-black tracking-widest text-white">25 NOV 2008</span>
            </div>
          </motion.div>
        </motion.div>

        {/* 💌 The Enchanting Message */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.2 }}
          className="w-full text-center md:text-left flex flex-col items-center md:items-start"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-rose-500/30 bg-rose-500/10 text-rose-300 text-[10px] font-bold tracking-[0.5em] uppercase mb-6">
            A Special Day
          </div>

          <h1 className="text-6xl md:text-[90px] font-black italic tracking-tighter leading-[0.85] mb-6 text-white drop-shadow-2xl">
            Happy <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-rose-400 to-rose-600">
              Birthday
            </span>
          </h1>
          
          <h2 className="text-3xl md:text-5xl font-bold tracking-widest text-white/90 mb-10 uppercase">
            Shahela
          </h2>

          <div className="relative max-w-md w-full">
            {/* Quote Icon styling */}
            <span className="absolute -top-8 -left-4 text-6xl text-rose-500/20 font-serif italic">"</span>
            <p className="font-['Noto_Serif_Bengali'] text-xl md:text-2xl text-white/90 leading-relaxed italic mb-6 font-light relative z-10">
              আকাশের সবটুকু নীল আর বসন্তের সবটুকু স্নিগ্ধতা যেন তোমার হাসিতে মিশে থাকে।
            </p>
            <p className="font-['Noto_Serif_Bengali'] text-sm md:text-base text-white/50 leading-relaxed font-light">
              শুভ জন্মদিন শাহেলা আপু! আজকের এই বিশেষ দিনে তোমার জন্য অনেক অনেক দোয়া ও শুভকামনা। জীবন হোক আনন্দের এক মহাকাব্য।
            </p>
          </div>

          <div className="mt-12 flex items-center gap-4">
            <Heart className="text-rose-500 animate-pulse" size={20} fill="currentColor" />
            <div className="h-[1px] w-16 bg-gradient-to-r from-rose-500/50 to-transparent"></div>
            <p className="text-[10px] tracking-[0.4em] font-bold uppercase text-white/30">
              RelaxStudio Production
            </p>
          </div>
        </motion.div>

      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+Bengali:wght@300;400;700&display=swap');
        body { background: #050002; margin: 0; padding: 0; overflow-x: hidden; }
      `}</style>
    </div>
  );
}
