"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowLeft, ArrowRight, Heart, Sparkles, Stars, X } from "lucide-react";

const photos = [
  { src: "/images/shahela1.jpg", alt: "A favourite memory" },
  { src: "/images/shahela2.jpg", alt: "A lovely moment" },
  { src: "/images/shahela3.jpg", alt: "A beautiful memory" },
  { src: "/images/shahela4.jpg", alt: "A day to remember" },
  { src: "/images/shahela5.jpg", alt: "A little piece of happiness" },
];

export default function BirthdayPage() {
  const [opened, setOpened] = useState(false);
  const [activePhoto, setActivePhoto] = useState<number | null>(null);

  const movePhoto = (direction: number) => {
    if (activePhoto === null) return;
    setActivePhoto((activePhoto + direction + photos.length) % photos.length);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#090509] text-[#fff8f2] selection:bg-rose-300 selection:text-[#250b18]">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0">
        <div className="absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-rose-900/25 blur-[120px]" />
        <div className="absolute -bottom-48 -right-40 h-[38rem] w-[38rem] rounded-full bg-amber-700/15 blur-[130px]" />
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(#f8d8c8 0.7px, transparent 0.7px)", backgroundSize: "22px 22px" }} />
      </div>

      <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-6 sm:px-8">
        <a href="/" className="text-xs font-semibold uppercase tracking-[0.28em] text-rose-100/75 transition hover:text-white">A little universe</a>
        <span className="text-[10px] uppercase tracking-[0.25em] text-white/35">A day worth celebrating · 25 November</span>
      </header>

      <section className="relative z-10 mx-auto grid min-h-[82vh] w-full max-w-7xl items-center gap-12 px-5 pb-20 pt-8 sm:px-8 md:grid-cols-[1fr_0.85fr] md:gap-16 md:pb-28">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="order-2 text-center md:order-1 md:text-left">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-rose-200/15 bg-rose-200/[0.06] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-rose-200/80">
            <Sparkles size={13} /> Today is all about you
          </div>
          <p className="mb-4 font-serif text-lg italic text-amber-200/75">To someone who makes ordinary moments feel special</p>
          <h1 className="font-serif text-[clamp(4.5rem,12vw,9rem)] font-medium leading-[0.82] tracking-[-0.075em] text-[#fff7ef]">
            Happy<br /><span className="bg-gradient-to-r from-rose-200 via-amber-100 to-rose-300 bg-clip-text italic text-transparent">Birthday.</span>
          </h1>
          <div className="my-8 flex items-center justify-center gap-4 md:justify-start">
            <span className="h-px w-12 bg-rose-200/40" />
            <p className="text-sm font-medium uppercase tracking-[0.5em] text-rose-100/75">Shahela</p>
            <span className="h-px w-12 bg-rose-200/40" />
          </div>
          <p className="mx-auto max-w-lg font-serif text-lg leading-9 text-white/65 md:mx-0 md:text-xl">
            আকাশের সবটুকু নীল আর বসন্তের সবটুকু স্নিগ্ধতা যেন তোমার হাসিতে মিশে থাকে।
          </p>
          <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-white/45 md:mx-0">
            তোমার প্রতিটি দিন হোক নতুন আনন্দে ভরা, প্রতিটি স্বপ্ন খুঁজে পাক নিজের ঠিকানা। হাসিখুশি থেকো, ভালো থেকো—আজ, আগামীকাল, সবসময়।
          </p>
          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row md:items-start">
            <button onClick={() => setOpened(true)} className="group inline-flex items-center gap-3 rounded-full bg-[#f4d9cf] px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#2b111b] shadow-[0_10px_50px_rgba(244,180,190,0.15)] transition hover:-translate-y-1 hover:bg-white">
              Open your little surprise <Heart size={15} className="transition group-hover:scale-125" />
            </button>
            <a href="#memories" className="inline-flex items-center gap-2 px-5 py-4 text-xs uppercase tracking-[0.2em] text-white/50 transition hover:text-white">
              Explore memories <ArrowDown size={14} />
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.92, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1.1, delay: 0.15 }} className="order-1 mx-auto w-full max-w-[390px] md:order-2">
          <div className="relative p-3">
            <div className="absolute -inset-5 rounded-[48%] bg-gradient-to-br from-rose-400/20 via-transparent to-amber-300/15 blur-2xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[48%_48%_28px_28px] border border-white/15 bg-white/5 shadow-[0_30px_100px_rgba(0,0,0,0.55)]">
              <img src="/images/shahela1.jpg" alt="Shahela" className="h-full w-full object-cover" fetchPriority="high" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#160b12]/70 via-transparent to-white/5" />
              <div className="absolute bottom-8 left-0 right-0 text-center">
                <p className="font-serif text-3xl italic text-white drop-shadow-lg">For you, always.</p>
                <p className="mt-2 text-[9px] uppercase tracking-[0.4em] text-white/65">A collection of good wishes</p>
              </div>
            </div>
            <motion.div animate={{ y: [0, -9, 0], rotate: [0, 5, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -right-2 top-16 rounded-2xl border border-white/15 bg-[#25151f]/80 p-4 shadow-xl backdrop-blur-xl">
              <Stars className="text-amber-200" size={22} />
            </motion.div>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -bottom-2 -left-2 rounded-full border border-rose-100/20 bg-[#28131f]/90 px-5 py-3 text-[10px] uppercase tracking-[0.25em] text-rose-100/80 shadow-xl backdrop-blur-xl">
              25 · 11 · 2008
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section id="memories" className="relative z-10 border-t border-white/[0.08] bg-white/[0.025] px-5 py-24 sm:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-[10px] uppercase tracking-[0.35em] text-rose-200/60">Little moments, lasting smiles</p>
              <h2 className="font-serif text-5xl tracking-tight text-white sm:text-6xl">A few lovely memories<span className="text-rose-300">.</span></h2>
            </div>
            <p className="max-w-xs text-sm leading-7 text-white/40">Some moments deserve their own little place in time. Tap a photograph to take a closer look.</p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">
            {photos.map((photo, index) => (
              <motion.button key={photo.src} type="button" onClick={() => setActivePhoto(index)} whileHover={{ y: -7 }} className={`group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-left ${index === 1 || index === 4 ? "sm:translate-y-8" : ""}`} aria-label={`View memory ${index + 1}`}>
                <img src={photo.src} alt={photo.alt} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-70 transition group-hover:opacity-100" />
                <span className="absolute bottom-4 left-4 text-[9px] uppercase tracking-[0.25em] text-white/80">Memory 0{index + 1}</span>
              </motion.button>
            ))}
          </div>
          <div className="mt-20 flex items-center justify-center gap-3 text-rose-100/50">
            <span className="h-px w-12 bg-rose-100/20" /><Heart size={13} fill="currentColor" /><span className="h-px w-12 bg-rose-100/20" />
          </div>
        </div>
      </section>

      <footer className="relative z-10 px-5 py-12 text-center">
        <p className="font-serif text-2xl italic text-white/70">May life be as beautiful as your kindest dreams.</p>
        <p className="mt-5 text-[9px] uppercase tracking-[0.35em] text-white/25">Made with love · RelaxStudio</p>
        <a href="/" className="mt-7 inline-block text-[10px] uppercase tracking-[0.25em] text-rose-200/55 transition hover:text-white">Back to the universe</a>
      </footer>

      <AnimatePresence>
        {opened && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-[#080408]/90 p-5 backdrop-blur-xl" onClick={() => setOpened(false)}>
            <motion.div initial={{ opacity: 0, y: 24, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: 0.98 }} transition={{ duration: 0.35 }} role="dialog" aria-modal="true" aria-labelledby="surprise-title" onClick={(event) => event.stopPropagation()} className="relative w-full max-w-xl overflow-hidden rounded-[30px] border border-rose-100/15 bg-[#1c1019] p-8 shadow-2xl sm:p-12">
              <button onClick={() => setOpened(false)} aria-label="Close surprise" className="absolute right-5 top-5 rounded-full p-2 text-white/50 transition hover:bg-white/10 hover:text-white"><X size={18} /></button>
              <div className="mb-7 flex justify-center"><div className="rounded-full border border-rose-200/20 bg-rose-200/10 p-4"><Heart size={25} className="text-rose-200" /></div></div>
              <p className="text-center text-[9px] uppercase tracking-[0.4em] text-rose-200/60">A little note for you</p>
              <h2 id="surprise-title" className="mt-4 text-center font-serif text-4xl italic text-white sm:text-5xl">Dear Shahela,</h2>
              <p className="mt-7 text-center font-serif text-lg leading-9 text-white/75">শুভ জন্মদিন! তোমার জীবনের প্রতিটি নতুন সকাল বয়ে আনুক শান্তি, আনন্দ আর অসংখ্য সুন্দর সম্ভাবনা। তোমার মুখের হাসিটা যেন কখনো মলিন না হয়। নিজের মতো করেই সুন্দর থেকো, স্বপ্ন দেখতে থেকো, আর জীবনের প্রতিটি মুহূর্ত উপভোগ করো।</p>
              <p className="mt-7 text-center font-serif text-xl italic text-amber-100/80">With lots of duas and warm wishes ♡</p>
              <div className="mt-8 flex justify-center"><button onClick={() => setOpened(false)} className="rounded-full border border-white/15 px-6 py-3 text-[10px] uppercase tracking-[0.25em] text-white/65 transition hover:border-rose-200/50 hover:text-white">Keep this wish close</button></div>
            </motion.div>
          </motion.div>
        )}
        {activePhoto !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[110] flex items-center justify-center bg-black/95 p-5 backdrop-blur-xl" onClick={() => setActivePhoto(null)}>
            <button onClick={() => setActivePhoto(null)} aria-label="Close photograph" className="absolute right-5 top-5 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"><X size={20} /></button>
            <button onClick={(event) => { event.stopPropagation(); movePhoto(-1); }} aria-label="Previous photograph" className="absolute left-3 z-10 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 sm:left-8"><ArrowLeft size={20} /></button>
            <motion.img key={photos[activePhoto].src} initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} src={photos[activePhoto].src} alt={photos[activePhoto].alt} className="max-h-[82vh] max-w-[min(80vw,900px)] rounded-2xl object-contain shadow-2xl" onClick={(event) => event.stopPropagation()} />
            <button onClick={(event) => { event.stopPropagation(); movePhoto(1); }} aria-label="Next photograph" className="absolute right-3 z-10 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 sm:right-8"><ArrowRight size={20} /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
