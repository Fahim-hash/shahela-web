"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles, Star, Crown } from "lucide-react";

/** * SHAHELA'S BIRTHDAY - ULTIMATE MOBILE RESPONSIVE
 * Focused on Single Masterpiece | Zero Mess | Luxury Feel
 * Built by: RelaxStudio (2026)
 */

export default function PerfectBirthdayPage() {
  return (
    <div className="relative min-h-screen w-full bg-[#050505] text-white flex flex-col font-sans overflow-x-hidden">
      
      {/* 🌌 Ambient Background Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-20%] w-[100%] h-[50%] bg-rose-900/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-20%] w-[100%] h-[50%] bg-rose-800/5 blur-[100px] rounded-full"></div>
      </div>

      <main className="relative z-10 flex flex-col items-center w-full px-5 py-10 md:py-20 max-w-4xl mx-auto">
        
        {/* 👑 Top Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center mb-10"
        >
          <Crown className="text-amber-400 mb-2" size={24} />
          <span className="text-[10px] tracking-[0.6em] font-black uppercase text-rose-500">The Queen of 3rd March</span>
        </motion.div>

        {/* 📸 The Hero Image - Perfectly Responsive */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-full max-w-[340px] md:max-w-[450px] aspect-[4/5] z-20"
        >
          {/* Animated Glow Border */}
          <div className="absolute -inset-1 bg-gradient-to-tr from-rose-600 to-amber-500 rounded-[45px] md:rounded-[65px] blur-sm opacity-30 animate-pulse"></div>
          
          <div className="relative h-full w-full rounded-[40px] md:rounded-[60px] overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src="/images/shahela1.jpg" 
              alt="Shahela Apu" 
              className="w-full h-full object-cover"
            />
            {/* Soft Shadow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          </div>

          {/* Floating Sparkle Icon */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            className="absolute -top-4 -right-4 bg-zinc-900 border border-white/20 p-3 rounded-2xl shadow-xl"
          >
            <Sparkles className="text-amber-400" size={20} />
          </motion.div>
        </motion.div>

        {/* 💌 The Content Card - Mobile Balanced */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-12 w-full text-center"
        >
          {/* Happy Birthday Text */}
          <h1 className="text-5xl md:text-8xl font-black italic tracking-tighter leading-none mb-6">
            HAPPY <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-rose-700 uppercase">Birthday</span>
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-bold tracking-[0.2em] uppercase text-white/90 mb-8">
            SHAHELA
          </h2>

          {/* Bengali Wish - Clean & Readable */}
          <div className="bg-white/[0.03] border border-white/5 backdrop-blur-xl p-8 rounded-[35px] md:rounded-[50px] shadow-inner relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rose-600 to-transparent"></div>
            
            <p className="font-['Noto_Serif_Bengali'] text-lg md:text-2xl text-white/80 leading-relaxed italic mb-6">
              "আকাশের সবটুকু নীল আর বসন্তের সবটুকু স্নিগ্ধতা যেন তোমার হাসিতে মিশে থাকে।"
            </p>
            
            <p className="font-['Noto_Serif_Bengali'] text-sm md:text-lg text-white/40 leading-relaxed">
              শুভ জন্মদিন শাহেলা আপু! আজকের এই বিশেষ দিনে তোমার জন্য অনেক অনেক দোয়া ও শুভকামনা। রিল্যাক্সস্টুডিওর পক্ষ থেকে শ্রদ্ধা ও ভালোবাসা।
            </p>
          </div>

          {/* Footer Heart Animation */}
          <div className="mt-12 flex flex-col items-center gap-4">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Heart className="text-rose-600" size={32} fill="currentColor" />
            </motion.div>
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <p className="text-[9px] tracking-[0.5em] font-black uppercase text-white/20">RelaxStudio Production</p>
          </div>
        </motion.div>

      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+Bengali:wght@300;400;700&display=swap');
        
        ::-webkit-scrollbar { display: none; }
        body { 
          background: #050505; 
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }
      `}</style>
    </div>
  );
}
