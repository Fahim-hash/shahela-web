"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Heart,
  Sparkles,
  X,
} from "lucide-react";

const photos = [
  { src: "/images/shahela1.jpg", alt: "Shahela, captured in a lovely moment", note: "The birthday portrait" },
  { src: "/images/shahela2.jpg", alt: "A favourite memory of Shahela", note: "A little joy" },
  { src: "/images/shahela3.jpg", alt: "A beautiful memory with Shahela", note: "A moment to keep" },
  { src: "/images/shahela4.jpg", alt: "A day worth remembering", note: "Golden memories" },
  { src: "/images/shahela5.jpg", alt: "A happy moment with Shahela", note: "Simply unforgettable" },
];

export default function BirthdayPage() {
  const [letterOpen, setLetterOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState<number | null>(null);

  useEffect(() => {
    if (activePhoto === null && !letterOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActivePhoto(null);
        setLetterOpen(false);
      }
      if (activePhoto !== null && event.key === "ArrowRight") {
        setActivePhoto((current) => current === null ? null : (current + 1) % photos.length);
      }
      if (activePhoto !== null && event.key === "ArrowLeft") {
        setActivePhoto((current) => current === null ? null : (current - 1 + photos.length) % photos.length);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activePhoto, letterOpen]);

  const movePhoto = (direction: number) => {
    setActivePhoto((current) =>
      current === null ? null : (current + direction + photos.length) % photos.length
    );
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f0e7] text-[#183c32] selection:bg-[#e66b4e] selection:text-white">
      <header className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 sm:px-10 lg:px-16">
        <a href="/" className="font-serif text-xl font-semibold tracking-tight">S. <span className="italic font-normal">Studio</span></a>
        <div className="hidden items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#183c32]/55 sm:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-[#e66b4e]" />
          A birthday edition
        </div>
        <a href="#memories" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] transition hover:text-[#e66b4e]">
          The memories <ArrowUpRight size={14} />
        </a>
      </header>

      <section className="relative mx-auto grid max-w-[1440px] items-center gap-10 px-5 pb-20 pt-8 sm:px-10 md:min-h-[760px] md:grid-cols-[1.05fr_.95fr] md:gap-6 md:px-16 md:py-16">
        <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full border border-[#183c32]/[0.08]" />
        <div className="pointer-events-none absolute -left-10 top-36 h-44 w-44 rounded-full border border-[#183c32]/[0.08]" />

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }} className="relative z-10 order-2 md:order-1">
          <p className="mb-7 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#e66b4e]">
            <span className="h-px w-8 bg-[#e66b4e]" /> 25 November · A day for you
          </p>
          <p className="mb-3 font-serif text-xl italic text-[#183c32]/65">To Shahela, with love</p>
          <h1 className="max-w-3xl font-serif text-[clamp(4.5rem,11vw,10rem)] leading-[.78] tracking-[-.075em]">
            Happy
            <span className="mt-3 block text-[#e66b4e] italic">Birthday<span className="text-[#183c32]">.</span></span>
          </h1>
          <div className="my-9 flex items-center gap-4">
            <span className="h-px w-12 bg-[#183c32]/25" />
            <span className="text-[11px] font-bold uppercase tracking-[0.42em]">Shahela</span>
            <span className="h-px w-12 bg-[#183c32]/25" />
          </div>
          <p className="max-w-xl font-serif text-xl leading-[1.8] text-[#183c32]/80 sm:text-2xl">
            তোমার নতুন বছরটা ভরে উঠুক শান্তি, আনন্দ আর এমন সব মুহূর্তে—যেগুলো মনে পড়লে অজান্তেই মুখে হাসি চলে আসে।
          </p>
          <p className="mt-5 max-w-lg text-sm leading-7 text-[#183c32]/60">
            Keep being curious, keep dreaming big, and never lose the little things that make you who you are. Wishing you a year that feels as wonderful as you deserve.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <button onClick={() => setLetterOpen(true)} className="group inline-flex items-center gap-5 bg-[#183c32] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#f4f0e7] transition duration-300 hover:bg-[#e66b4e]">
              Read your birthday note <ArrowUpRight size={15} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
            <a href="#memories" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#183c32]/60 transition hover:text-[#e66b4e]">
              Scroll to memories <ArrowDownRight size={15} />
            </a>
          </div>
          <p className="mt-12 font-serif text-sm italic text-[#183c32]/40">A little reminder: you make the world brighter.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30, rotate: 2 }} animate={{ opacity: 1, x: 0, rotate: 0 }} transition={{ duration: 0.9, delay: 0.12 }} className="relative order-1 mx-auto w-full max-w-[540px] md:order-2">
          <div className="absolute -right-3 -top-3 z-20 flex h-24 w-24 rotate-12 flex-col items-center justify-center rounded-full bg-[#e66b4e] text-center text-[#fff8ed] shadow-xl sm:-right-5 sm:-top-5">
            <Sparkles size={17} />
            <span className="mt-1 text-[8px] font-bold uppercase leading-4 tracking-[0.16em]">Your day<br />your story</span>
          </div>
          <div className="relative bg-white p-3 pb-14 shadow-[0_25px_80px_rgba(24,60,50,.14)] sm:p-4 sm:pb-16">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#d8d4c8]">
              <img src="/images/shahela1.jpg" alt="Shahela" fetchPriority="high" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102a23]/45 via-transparent to-transparent" />
              <span className="absolute bottom-5 left-5 font-serif text-3xl italic text-white sm:bottom-7 sm:left-7 sm:text-4xl">A day to celebrate.</span>
            </div>
            <div className="absolute bottom-4 right-5 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#183c32]/55 sm:bottom-5 sm:right-7">
              <Heart size={12} fill="#e66b4e" stroke="#e66b4e" /> 25 · 11 · 2008
            </div>
          </div>
          <span className="absolute -bottom-8 -left-5 -z-0 hidden font-serif text-8xl italic text-[#183c32]/[0.06] lg:block">Shahela</span>
        </motion.div>
      </section>

      <section className="border-y border-[#183c32]/10 bg-[#e9e4d9] px-5 py-5 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="font-serif text-lg italic text-[#183c32]/75">“The best is yet to bloom.”</p>
          <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#183c32]/40">A new chapter begins · 25.11</p>
        </div>
      </section>

      <section id="memories" className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-32 lg:px-16">
        <div className="mb-12 grid gap-6 md:grid-cols-[1fr_300px] md:items-end">
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#e66b4e]">The photo journal · 01—05</p>
            <h2 className="font-serif text-5xl leading-[.95] tracking-[-.05em] sm:text-7xl">Moments worth<br /><span className="italic text-[#e66b4e]">keeping.</span></h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-[#183c32]/55">A small collection of snapshots, smiles and memories. Choose a photograph to see it up close.</p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-6 sm:gap-5">
          {photos.map((photo, index) => (
            <motion.button
              key={photo.src}
              type="button"
              onClick={() => setActivePhoto(index)}
              whileHover={{ y: -7 }}
              className={`group relative overflow-hidden bg-[#ded9ce] text-left ${index === 0 ? "col-span-2 row-span-2 aspect-[4/5] sm:col-span-3 sm:aspect-[4/5]" : "aspect-[4/5] sm:col-span-1"} ${index === 3 ? "sm:col-start-2" : ""}`}
              aria-label={`Open photograph: ${photo.note}`}
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102a23]/65 via-transparent to-transparent opacity-80 transition group-hover:opacity-100" />
              <span className="absolute bottom-4 left-4 text-[9px] font-bold uppercase tracking-[0.2em] text-white/90">{photo.note}</span>
              <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/50 bg-black/10 text-white opacity-0 backdrop-blur-sm transition group-hover:opacity-100"><ArrowUpRight size={14} /></span>
            </motion.button>
          ))}
        </div>
      </section>

      <footer className="bg-[#183c32] px-5 py-16 text-[#f4f0e7] sm:px-10 sm:py-20 lg:px-16">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center text-center">
          <Heart size={20} className="mb-6 text-[#e66b4e]" />
          <p className="font-serif text-3xl italic sm:text-5xl">May this year be your favourite yet.</p>
          <p className="mt-5 max-w-md text-xs leading-6 text-white/50">Wishing you a beautiful birthday and a year full of kind people, brave dreams and unforgettable days.</p>
          <div className="my-9 h-px w-full max-w-[180px] bg-white/15" />
          <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-white/35">Made with care · 25 November</p>
          <a href="/" className="mt-7 text-[10px] font-bold uppercase tracking-[0.2em] text-[#f4f0e7]/65 transition hover:text-[#e66b4e]">Back to home ↗</a>
        </div>
      </footer>

      <AnimatePresence>
        {letterOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-[#102a23]/75 p-4 backdrop-blur-md" onClick={() => setLetterOpen(false)}>
            <motion.div initial={{ opacity: 0, y: 24, scale: .97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 18, scale: .98 }} transition={{ duration: .3 }} role="dialog" aria-modal="true" aria-labelledby="birthday-note-title" onClick={(event) => event.stopPropagation()} className="relative w-full max-w-xl border border-[#183c32]/10 bg-[#f4f0e7] px-7 py-12 shadow-2xl sm:px-14 sm:py-16">
              <button onClick={() => setLetterOpen(false)} aria-label="Close birthday note" className="absolute right-5 top-5 p-2 text-[#183c32]/50 transition hover:text-[#e66b4e]"><X size={19} /></button>
              <div className="mx-auto mb-7 flex h-12 w-12 items-center justify-center rounded-full bg-[#e66b4e]/10 text-[#e66b4e]"><Heart size={20} /></div>
              <p className="text-center text-[9px] font-bold uppercase tracking-[0.3em] text-[#e66b4e]">A note, just for you</p>
              <h2 id="birthday-note-title" className="mt-4 text-center font-serif text-4xl italic tracking-tight sm:text-5xl">Dear Shahela,</h2>
              <p className="mt-8 text-center font-serif text-lg leading-9 text-[#183c32]/80">শুভ জন্মদিন! তোমার জীবনের প্রতিটি সকাল শুরু হোক নতুন আশায়, প্রতিটি দিন কাটুক সুন্দর কিছু মুহূর্তে, আর প্রতিটি স্বপ্ন একদিন সত্যি হয়ে উঠুক। নিজের মতো করে উজ্জ্বল থেকো, হাসিখুশি থেকো—তোমার জন্য রইল অনেক অনেক দোয়া ও শুভকামনা।</p>
              <p className="mt-8 text-center font-serif text-xl italic text-[#e66b4e]">With warmest wishes, always.</p>
              <div className="mt-9 flex justify-center"><button onClick={() => setLetterOpen(false)} className="border border-[#183c32]/20 px-6 py-3 text-[9px] font-bold uppercase tracking-[0.2em] text-[#183c32] transition hover:border-[#e66b4e] hover:bg-[#e66b4e] hover:text-white">Close this note</button></div>
            </motion.div>
          </motion.div>
        )}
        {activePhoto !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[110] flex items-center justify-center bg-[#102a23]/95 p-5 backdrop-blur-md" onClick={() => setActivePhoto(null)}>
            <button onClick={() => setActivePhoto(null)} aria-label="Close photo viewer" className="absolute right-5 top-5 rounded-full border border-white/20 p-3 text-white transition hover:bg-white/10"><X size={20} /></button>
            <button onClick={(event) => { event.stopPropagation(); movePhoto(-1); }} aria-label="Previous photo" className="absolute left-3 z-10 rounded-full border border-white/20 p-3 text-white transition hover:bg-white/10 sm:left-8"><ArrowLeft size={20} /></button>
            <div className="flex max-h-[88vh] max-w-[min(80vw,900px)] flex-col items-center gap-4" onClick={(event) => event.stopPropagation()}>
              <motion.img key={photos[activePhoto].src} initial={{ opacity: 0, scale: .98 }} animate={{ opacity: 1, scale: 1 }} src={photos[activePhoto].src} alt={photos[activePhoto].alt} className="max-h-[78vh] max-w-full rounded-sm object-contain shadow-2xl" />
              <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/65">{photos[activePhoto].note} · 0{activePhoto + 1} / 0{photos.length}</p>
            </div>
            <button onClick={(event) => { event.stopPropagation(); movePhoto(1); }} aria-label="Next photo" className="absolute right-3 z-10 rounded-full border border-white/20 p-3 text-white transition hover:bg-white/10 sm:right-8"><ArrowRight size={20} /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
