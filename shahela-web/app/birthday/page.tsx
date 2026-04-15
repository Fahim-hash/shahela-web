"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Heart, Sparkles, Star, PartyPopper } from "lucide-react";

/** * SHAHELA'S BIRTHDAY - CINEMATIC STORYBOARD EDITION
 * No more album grids. Just a pure visual journey.
 * Built by: RelaxStudio (2026)
 */

const StorySection = ({ src, title, description, index }: { src: string; title: string; description: string; index: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]);

  return (
    <section ref={ref} className="relative h-screen w-full flex items-center justify-center overflow-hidden px-6">
      <motion.div style={{ scale, opacity }} className="relative w-full max-w-5xl aspect-[16/10] md:aspect-video rounded-[40px] md:rounded-[80px] overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.5)]">
        <motion.img 
          style={{ y }}
          src={src} 
          className="absolute inset-0 w-full h-[120%] object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
        
        <div className="absolute bottom-12 left-12 md:bottom-20 md:left-20 z-20 max-w-xl">
          <motion.span className="text-rose-500 font-black text-[10px] tracking-[0.5em] uppercase block mb-4">
            MOMENT — 0{index + 1}
          </motion.span>
          <h2 className="text-4xl md:text-7xl font-black italic tracking-tighter text-white mb-4 uppercase">
            {title}
          </h2>
          <p className="font-['Noto_Serif_Bengali'] text-lg md:text-2xl text-white/60 leading-relaxed font-light italic">
            {description}
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default function CinematicBirthday() {
  const stories = [
    { src: "/images/shahela1.jpg", title: "The Presence", description: "একটি সাধারণ মুহূর্ত যখন অসাধারণ হয়ে ওঠে।" },
    { src: "/images/shahela2.jpg", title: "Noir Soul", description: "মায়ার বাঁধনে ঘেরা এক চিরচেনা রূপ।" },
    { src: "/images/shahela3.jpg", title: "Pure Grace", description: "স্নিগ্ধতায় মোড়ানো বসন্তের এক দুপুর।" },
    { src: "/images/shahela4.jpg", title: "Eternal", description: "দৃষ্টি যেখানে কথা বলে শব্দের চেয়েও বেশি।" },
    { src: "/images/shahela5.png", title: "The Celebration", description: "আজকের এই বিশেষ দিনের প্রতিটি মুহূর্ত হোক সার্থক।" },
  ];

  return (
    <div className="bg-[#030303] text-white selection:bg-rose-600/30 overflow-x-hidden">
      
      {/* 🌌 Intro Landing */}
      <header className="h-screen flex flex-col justify-center items-center text-center relative px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="z-10"
        >
          <div className="flex justify-center mb-8">
            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 10, ease: "linear" }}>
              <Star className="text-amber-400/50" size={40} />
            </motion.div>
          </div>
          <h1 className="text-[15vw] font-black italic tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-rose-900/20">
            SHAHELA
          </h1>
          <p className="mt-8 text-[10px] md:text-xs tracking-[1em] uppercase text-rose-500 font-bold ml-[1em]">
            A Visual Story • Birthday 2026
          </p>
        </motion.div>

        {/* Floating Background Glows */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-rose-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rose-900/5 blur-[150px] rounded-full" />
      </header>

      {/* 🎞️ Story Sections */}
      <main className="relative">
        {stories.map((story, i) => (
          <StorySection key={i} {...story} index={i} />
        ))}
      </main>

      {/* 💌 Final Wish Section */}
      <section className="min-h-screen flex flex-center items-center justify-center px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-4xl w-full bg-zinc-950 border border-white/5 p-16 md:p-32 rounded-[60px] text-center shadow-2xl relative overflow-hidden"
        >
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-rose-600/5 blur-[100px]" />
          <Heart className="mx-auto text-rose-600 mb-12 animate-pulse" size={48} fill="currentColor" />
          <h3 className="text-xs tracking-[1em] uppercase text-white/30 mb-10">Final Note</h3>
          <p className="font-['Noto_Serif_Bengali'] text-2xl md:text-4xl leading-relaxed italic font-light text-white/80">
            "শুভ জন্মদিন শাহেলা আপু! আজকের এই পাতাগুলো শেষ হলেও তোমার জীবনের প্রতিটি পাতা যেন সাফল্যে আর হাসিতে রঙিন থাকে। রিল্যাক্সস্টুডিওর পক্ষ থেকে শ্রদ্ধা ও ভালোবাসা।"
          </p>
          <motion.div className="mt-20">
            <PartyPopper size={32} className="mx-auto text-amber-500 opacity-50" />
          </motion.div>
        </motion.div>
      </section>

      {/* 📜 Footer Signature */}
      <footer className="py-24 text-center">
        <p className="text-[10px] tracking-[2em] text-white/10 uppercase mb-4">RelaxStudio Productions</p>
        <div className="text-6xl font-black italic tracking-tighter opacity-5">SHAHELA.2026</div>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+Bengali:wght@300;400;700&display=swap');
        ::-webkit-scrollbar { display: none; }
        body { background: #030303; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
