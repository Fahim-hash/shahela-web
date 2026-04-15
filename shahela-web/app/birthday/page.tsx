"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles, Star } from "lucide-react";

/** * SHAHELA'S BIRTHDAY - THE EXCLUSIVE WISH PAGE
 * Focused on a single masterpiece image.
 * Built by: RelaxStudio (2026)
 */

export default function SingleImageWishPage() {
  return (
    <div className="relative h-screen w-full bg-[#050505] text-white overflow-hidden flex items-center justify-center font-serif">
      
      {/* 🎭 Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-rose-900/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-rose-800/5 blur-[100px] rounded-full"></div>
        {/* Subtle Noise Texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      <main className="relative z-10 w-full max-w-6xl px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        
        {/* 📸 The Only Hero Image (Image #1) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: -50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative group"
        >
          {/* Decorative Frame */}
          <div className="absolute -inset-4 border border-rose-600/20 rounded-[40px] md:rounded-[60px] pointer-events-none"></div>
          
          <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-[30px] md:rounded-[50px] shadow-2xl border border-white/10">
            <img 
              src="/images/shahela1.jpg" 
              alt="Shahela Apu" 
              className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
            />
            {/* Soft Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>

          {/* Floating Element */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -bottom-6 -right-6 bg-zinc-950/80 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl hidden md:block"
          >
            <Sparkles className="text-rose-500 mb-2" size={20} />
            <div className="text-[10px] font-black tracking-widest uppercase text-white/40">Exclusive Moment</div>
          </motion.div>
        </motion.div>

        {/* 💌 The Wish Content */}
        <div className="flex flex-col text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="flex items-center justify-center md:justify-start gap-4 mb-8">
              <div className="h-px w-8 bg-rose-600"></div>
              <span className="text-rose-500 font-black text-[10px] tracking-[0.6em] uppercase">03 March 2026</span>
            </div>

            <h1 className="text-6xl md:text-[100px] font-black italic tracking-tighter leading-[0.85] mb-10 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
              HAPPY. <br /> BIRTHDAY. <br /> <span className="text-rose-600">SHAHELA</span>
            </h1>

            <div className="space-y-6 font-['Noto_Serif_Bengali']">
              <p className="text-xl md:text-3xl text-white/80 leading-relaxed italic font-light">
                "আকাশের সবটুকু নীল আর বসন্তের সবটুকু স্নিগ্ধতা যেন তোমার হাসিতে মিশে থাকে।"
              </p>
              
              <div className="pt-8">
                <p className="text-lg md:text-xl text-white/40 font-light leading-loose">
                  শুভ জন্মদিন শাহেলা আপু! আজকের এই বিশেষ দিনে তোমার জন্য অনেক অনেক দোয়া ও শুভকামনা। রিল্যাক্সস্টুডিওর পক্ষ থেকে তোমাকে জানাই বিনম্র শ্রদ্ধা আর ভালোবাসা। জীবন হোক আনন্দের এক মহাকাব্য।
                </p>
              </div>
            </div>

            <div className="mt-12 flex items-center justify-center md:justify-start gap-6">
              <Heart className="text-rose-600 animate-pulse" size={24} fill="currentColor" />
              <div className="h-px w-24 bg-white/10"></div>
              <p className="text-[10px] tracking-[0.3em] font-black uppercase text-white/20">RelaxStudio Production</p>
            </div>
          </motion.div>
        </div>
      </main>

      {/* 📜 Signature Footer */}
      <footer className="absolute bottom-10 left-0 w-full text-center opacity-10 pointer-events-none">
        <div className="text-[8vw] font-black italic tracking-tighter uppercase leading-none">Celebrating A Muse</div>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+Bengali:wght@300;400;700&display=swap');
        
        ::-webkit-scrollbar { display: none; }
        body { background: #050505; }
      `}</style>
    </div>
  );
}
