"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cake, Heart, Sparkles, X, Star } from "lucide-react";

/** * SHAHELA'S BIRTHDAY PAGE (/birthday)
 * Theme: Rosé Noir
 */

export default function BirthdayPage() {
  const [mounted, setMounted] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showWish, setShowWish] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const galleryImages = [
    { id: 1, src: "/images/shahela1.jpg", title: "দ্য রেডিয়েন্ট স্মাইল", span: "md:col-span-2 md:row-span-2" },
    { id: 2, src: "/images/shahela2.jpg", title: "মায়াবী চাহনি", span: "col-span-1" },
    { id: 3, src: "/images/shahela3.jpg", title: "স্নিগ্ধতা", span: "col-span-1" },
    { id: 4, src: "/images/shahela4.jpg", title: "আনমনা মুহূর্ত", span: "col-span-1" },
    { id: 5, src: "/images/shahela5.png", title: "রেশমি ছোঁয়া", span: "col-span-1" },
    { id: 6, src: "/images/a5.png", title: "আর্কাইভ মেমরি", span: "md:col-span-2" },
  ];

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen w-full bg-[#030303] text-white font-serif selection:bg-rose-500/30 overflow-x-hidden">
      
      {/* Background Glow */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-rose-900/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-rose-800/5 blur-[120px] rounded-full"></div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative z-10">
        
        {/* Navbar */}
        <nav className="fixed top-8 left-0 w-full z-[100] px-6">
          <div className="max-w-5xl mx-auto flex justify-between items-center bg-white/[0.03] border border-white/10 backdrop-blur-2xl px-8 py-4 rounded-full shadow-2xl">
            <div className="flex items-center gap-3">
              <Cake className="text-rose-500 animate-pulse" size={18} />
              <div className="text-lg font-black italic tracking-tighter uppercase">Shahela<span className="text-rose-600">.Day</span></div>
            </div>
            <div className="text-[9px] font-mono text-white/30 uppercase tracking-[0.3em] hidden md:block">
              Special Edition — 2026
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-6 pt-48 pb-32">
          
          {/* Hero Section */}
          <header className="mb-64 text-center">
            <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
              <span className="inline-block px-4 py-1 rounded-full border border-rose-500/30 bg-rose-500/5 text-rose-500 text-[10px] font-bold tracking-[0.5em] uppercase mb-8">
                Celebrating Shahela Apu
              </span>
              <h1 className="text-7xl md:text-[180px] font-black italic tracking-tighter leading-[0.8] mb-12">
                HBD. <br /> <span className="text-transparent bg-clip-text bg-gradient-to-b from-rose-400 to-rose-700">SHAHELA</span>
              </h1>
            </motion.div>

            <motion.button 
              onClick={() => setShowWish(true)}
              className="mt-12 px-12 py-5 bg-white text-black rounded-full font-black text-[10px] tracking-[0.4em] uppercase hover:scale-105 transition-transform"
            >
              একটি বিশেষ বার্তা দেখুন
            </motion.button>
          </header>

          {/* Gallery */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[350px]">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                layoutId={`bday-img-${img.src}`}
                onClick={() => setSelectedImage(img.src)}
                className={`${img.span} relative group cursor-pointer overflow-hidden rounded-[30px] md:rounded-[50px] border border-white/10 bg-white/5`}
              >
                <img src={img.src} alt={img.title} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-xl font-bold tracking-tight italic">{img.title}</h3>
                </div>
              </motion.div>
            ))}
          </section>

          {/* Modal Message */}
          <AnimatePresence>
            {showWish && (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-xl p-6"
              >
                <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="bg-zinc-950 border border-white/10 p-12 md:p-20 rounded-[60px] max-w-2xl w-full text-center shadow-2xl">
                  <Star className="text-amber-400 mx-auto mb-10" size={40} fill="currentColor" />
                  <p className="font-['Noto_Serif_Bengali'] text-xl md:text-2xl text-white/80 leading-loose italic">
                    "শুভ জন্মদিন শাহেলা আপু! তোমার এই মায়াবী হাসি আর স্নিগ্ধ ব্যক্তিত্ব দিয়ে তুমি জয় করে নাও সারা পৃথিবী। জীবনের প্রতিটি মোড় হোক আনন্দময়। রিল্যাক্সস্টুডিওর পক্ষ থেকে অনেক ভালোবাসা!"
                  </p>
                  <button onClick={() => setShowWish(false)} className="mt-12 text-[10px] font-black uppercase tracking-widest text-white/30">বন্ধ করুন</button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Lightbox */}
          <AnimatePresence>
            {selectedImage && (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setSelectedImage(null)}
                className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 p-6"
              >
                <motion.div layoutId={`bday-img-${selectedImage}`} className="max-w-5xl w-full aspect-video rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
                  <img src={selectedImage} className="w-full h-full object-cover" alt="Zoomed" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

        </main>
      </motion.div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;700&family=Noto+Serif+Bengali:wght@300;400;700&family=Tiropi:ital,wght@1,400;1,700&display=swap');
        ::-webkit-scrollbar { display: none; }
        body { background: #030303; overflow: ${selectedImage || showWish ? 'hidden' : 'auto'}; }
      `}</style>
    </div>
  );
}
