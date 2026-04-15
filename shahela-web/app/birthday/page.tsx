"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles, Star } from "lucide-react";

/** * SHAHELA'S BIRTHDAY - THE DEFINITIVE EDITION
 * Correct Date: 25th November 2008
 * Design Style: Artistic Portrait / Minimal Luxe
 */

export default function FinalBirthdayPage() {
  return (
    <div className="relative min-h-[100dvh] w-full bg-[#030303] text-white flex flex-col items-center overflow-x-hidden selection:bg-rose-500/30">
      
      {/* 🌌 Atmospheric Backdrop */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[100%] h-[50%] bg-rose-900/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[100%] h-[50%] bg-amber-900/5 blur-[120px] rounded-full"></div>
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      <main className="relative z-10 w-full max-w-[1200px] flex flex-col items-center px-6 py-12 md:py-24">
        
        {/* --- Section 1: The Portrait --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
          className="relative w-full max-w-[360px] md:max-w-[480px] aspect-[3/4] group"
        >
          {/* Glowing Aura behind the image */}
          <div className="absolute -inset-2 bg-gradient-to-tr from-rose-600/20 to-transparent blur-2xl rounded-[60px] group-hover:opacity-100 transition-opacity opacity-50"></div>
          
          <div className="relative h-full w-full rounded-[50px] md:rounded-[80px] overflow-hidden border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.8)]">
            <img 
              src="/images/shahela1.jpg" 
              alt="Shahela" 
              className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            
            {/* Overlay Text on Image */}
            <div className="absolute bottom-10 left-10">
              <span className="text-[10px] tracking-[0.5em] font-bold text-rose-500 uppercase block mb-1">Born In</span>
              <h3 className="text-2xl font-black italic tracking-tighter">25 NOV 2008</h3>
            </div>
          </div>

          {/* Floating Star Icon */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="absolute -top-6 -right-6 bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-full"
          >
            <Star className="text-amber-400" size={24} fill="currentColor" />
          </motion.div>
        </motion.div>

        {/* --- Section 2: The Typography --- */}
        <div className="mt-16 text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <h1 className="text-6xl md:text-[120px] font-black italic tracking-tighter leading-[0.8] mb-10 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30 uppercase">
              Shahela.
            </h1>

            {/* --- The Wish Card (Mobile Optimized) --- */}
            <div className="relative p-10 bg-white/[0.02] border border-white/5 rounded-[40px] backdrop-blur-3xl shadow-2xl">
              <div className="flex justify-center mb-8 gap-2">
                {[...Array(3)].map((_, i) => (
                  <Sparkles key={i} size={14} className="text-rose-500/40" />
                ))}
              </div>

              <p className="font-['Noto_Serif_Bengali'] text-xl md:text-3xl text-white/90 leading-relaxed italic mb-8 font-light">
                "আকাশের নক্ষত্ররা আজ তোমার হাসির প্রেমে পড়ুক।"
              </p>

              <div className="h-px w-20 bg-rose-600/30 mx-auto mb-8"></div>

              <p className="font-['Noto_Serif_Bengali'] text-sm md:text-lg text-white/40 leading-relaxed max-w-md mx-auto">
                শুভ জন্মদিন শাহেলা আপু! ২০০৮ সালের এই দিনটি ছিল পৃথিবীর জন্য এক উপহার। তোমার প্রতিটি স্বপ্ন যেন সার্থকতা পায়। 
              </p>
            </div>
          </motion.div>
        </div>

        {/* --- Section 3: Signature --- */}
        <footer className="mt-24 flex flex-col items-center">
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }} 
            transition={{ repeat: Infinity, duration: 3 }}
            className="mb-6 cursor-pointer"
          >
            <Heart size={32} className="text-rose-600" fill="currentColor" />
          </motion.div>
          <p className="text-[10px] tracking-[1em] text-white/10 uppercase font-black">RelaxStudio</p>
        </footer >

      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+Bengali:wght@300;400;700&display=swap');
        ::-webkit-scrollbar { display: none; }
        body { 
          background: #030303; 
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }
      `}</style>
    </div>
  );
}
