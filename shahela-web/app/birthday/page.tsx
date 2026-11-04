"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Gift,
  Heart,
  Music2,
  Sparkles,
  Star,
  X,
} from "lucide-react";

const photos = [
  { src: "/images/shahela1.jpg", alt: "Shahela smiling for a birthday portrait", caption: "The main character" },
  { src: "/images/shahela2.jpg", alt: "A favourite memory of Shahela", caption: "Little joys" },
  { src: "/images/shahela3.jpg", alt: "A lovely moment with Shahela", caption: "Golden hour" },
  { src: "/images/shahela4.jpg", alt: "A day worth remembering", caption: "The good days" },
  { src: "/images/shahela5.jpg", alt: "A happy memory of Shahela", caption: "One for the books" },
];

const wishes = [
  "May this year surprise you in the loveliest ways.",
  "May you find a thousand reasons to smile, even on ordinary days.",
  "May every brave little dream find its way to becoming real.",
  "May the people and places around you always feel like sunshine.",
];

export default function BirthdayPage() {
  const [surpriseOpen, setSurpriseOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState<number | null>(null);
  const [wishIndex, setWishIndex] = useState(0);

  useEffect(() => {
    if (activePhoto === null && !surpriseOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActivePhoto(null);
        setSurpriseOpen(false);
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
  }, [activePhoto, surpriseOpen]);

  const movePhoto = (direction: number) => {
    setActivePhoto((current) => current === null ? null : (current + direction + photos.length) % photos.length);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f7f2] text-[#191a36] selection:bg-[#c6f36b] selection:text-[#191a36]">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -right-40 top-20 h-[30rem] w-[30rem] rounded-full bg-[#d8d4ff]/55 blur-[100px]" />
        <div className="absolute -left-40 bottom-0 h-[26rem] w-[26rem] rounded-full bg-[#ffd7c9]/55 blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.18]" style={{ backgroundImage: "radial-gradient(#191a36 0.65px, transparent 0.65px)", backgroundSize: "18px 18px" }} />
      </div>

      <header className="relative z-10 mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 sm:px-10 lg:px-16">
        <a href="/" className="flex items-center gap-2 text-sm font-black tracking-tight"><span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#2426a8] text-white"><Star size={15} fill="currentColor" /></span> THE SHAHELA EDITION</a>
        <span className="hidden rounded-full border border-[#191a36]/10 bg-white/70 px-4 py-2 text-[9px] font-extrabold uppercase tracking-[0.22em] text-[#191a36]/55 backdrop-blur sm:inline-flex">Special issue · No. 25</span>
        <a href="#moments" className="group flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.18em]">Explore <ArrowDown size={14} className="transition group-hover:translate-y-1" /></a>
      </header>

      <section className="relative z-10 mx-auto grid max-w-[1440px] items-center gap-12 px-5 pb-24 pt-10 sm:px-10 md:min-h-[760px] md:grid-cols-[1.08fr_.92fr] md:gap-8 md:px-16 md:py-16">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75 }} className="relative z-10 order-2 md:order-1">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-[#e9e7ff] px-4 py-2 text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#3434b7]"><Sparkles size={13} /> It's your day. Make it count.</div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.28em] text-[#f06c55]">25 November · A celebration of you</p>
          <h1 className="font-black leading-[.78] tracking-[-.09em]">
            <span className="block text-[clamp(4.8rem,12vw,10.5rem)]">HAPPY</span>
            <span className="mt-3 block text-[clamp(4.8rem,12vw,10.5rem)] text-[#3434b7]">BIRTH<span className="text-[#f06c55]">DAY</span><span className="text-[#c6f36b]">!</span></span>
          </h1>
          <div className="mt-8 flex items-center gap-3">
            <span className="h-[3px] w-10 bg-[#f06c55]" />
            <span className="text-sm font-black uppercase tracking-[0.38em]">Shahela</span>
            <span className="h-[3px] w-10 bg-[#f06c55]" />
          </div>
          <p className="mt-8 max-w-xl text-lg font-medium leading-8 text-[#191a36]/75 sm:text-xl sm:leading-9">
            আজকের দিনটা শুধু ক্যালেন্ডারের একটা তারিখ নয়—আজ উদযাপন সেই মানুষটাকে, যে নিজের মতো করেই আলাদা।
          </p>
          <p className="mt-4 max-w-lg text-sm leading-7 text-[#191a36]/55">
            Here's to fresh beginnings, unexpected happiness, big dreams and countless little moments that make life beautiful. Keep being wonderfully you.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button onClick={() => setSurpriseOpen(true)} className="group inline-flex items-center gap-3 rounded-full bg-[#2426a8] px-7 py-4 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white shadow-[0_14px_35px_rgba(36,38,168,.22)] transition duration-300 hover:-translate-y-1 hover:bg-[#191a36]">
              <Gift size={16} /> Unwrap your surprise <ArrowUpRight size={14} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
            <a href="#moments" className="inline-flex items-center gap-2 px-2 py-3 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#191a36]/60 transition hover:text-[#f06c55]">See the memories <ArrowDown size={14} /></a>
          </div>
          <div className="mt-12 flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.2em] text-[#191a36]/35"><Music2 size={14} /> A little celebration, made just for you</div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: .92, rotate: 3 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: .9, delay: .12 }} className="relative order-1 mx-auto w-full max-w-[520px] md:order-2">
          <div className="absolute -left-6 top-12 z-20 hidden rotate-[-9deg] rounded-2xl bg-[#c6f36b] px-5 py-4 shadow-xl sm:block">
            <p className="text-[8px] font-black uppercase tracking-[0.2em] text-[#191a36]/55">Officially</p>
            <p className="mt-1 text-2xl font-black tracking-tight text-[#191a36]">ICONIC.</p>
          </div>
          <div className="relative rounded-[2rem] bg-[#3434b7] p-3 shadow-[0_30px_90px_rgba(36,38,168,.2)] sm:p-4">
            <div className="absolute -right-5 -top-5 z-20 flex h-24 w-24 rotate-12 flex-col items-center justify-center rounded-full border-[5px] border-[#f8f7f2] bg-[#f06c55] text-center text-white shadow-lg">
              <span className="text-[8px] font-black uppercase tracking-[0.18em]">Birthday</span>
              <span className="text-3xl font-black leading-none">25</span>
              <span className="text-[8px] font-black uppercase tracking-[0.18em]">November</span>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] bg-[#d8d4ff]">
              <img src="/images/shahela1.jpg" alt="Shahela" fetchPriority="high" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17184f]/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white sm:bottom-8 sm:left-8">
                <p className="text-[9px] font-extrabold uppercase tracking-[0.25em] text-white/75">The one and only</p>
                <p className="mt-1 text-5xl font-black tracking-[-.06em] sm:text-6xl">SHAHELA<span className="text-[#c6f36b]">.</span></p>
              </div>
            </div>
            <div className="flex items-center justify-between px-2 pb-1 pt-4 text-[8px] font-extrabold uppercase tracking-[0.22em] text-white/75 sm:px-3"><span>25 · 11 · 2008</span><span>One of one <Heart size={11} className="ml-1 inline" fill="#c6f36b" stroke="#c6f36b" /></span></div>
          </div>
          <motion.div animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -bottom-8 -right-3 z-20 flex h-20 w-20 items-center justify-center rounded-[1.5rem] border-4 border-[#f8f7f2] bg-[#c6f36b] text-[#191a36] shadow-xl sm:-right-8"><Sparkles size={30} /></motion.div>
        </motion.div>
      </section>

      <section className="relative z-10 overflow-hidden bg-[#2426a8] px-5 py-7 text-white sm:px-10">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-black text-2xl tracking-[-.04em] sm:text-3xl">A WHOLE YEAR OF <span className="text-[#c6f36b]">POSSIBILITIES.</span></p>
          <span className="rounded-full border border-white/25 px-4 py-2 text-[8px] font-extrabold uppercase tracking-[0.25em]">Chapter 25 · Starts now</span>
        </div>
      </section>

      <section id="moments" className="relative z-10 mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-32 lg:px-16">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-[9px] font-extrabold uppercase tracking-[0.28em] text-[#f06c55]">The memory wall · 01—05</p>
            <h2 className="max-w-3xl text-5xl font-black leading-[.9] tracking-[-.075em] sm:text-7xl">GOOD TIMES.<br /><span className="text-[#3434b7]">GREAT MEMORIES.</span></h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-[#191a36]/55">A few snapshots from the highlight reel. Tap any frame to open the memory and take a closer look.</p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-6 sm:gap-5">
          {photos.map((photo, index) => (
            <motion.button key={photo.src} type="button" onClick={() => setActivePhoto(index)} whileHover={{ y: -7, rotate: index % 2 === 0 ? -1 : 1 }} className={`group relative overflow-hidden rounded-[1.35rem] bg-[#e9e7ff] text-left shadow-[0_10px_30px_rgba(25,26,54,.08)] ${index === 0 ? "col-span-2 row-span-2 aspect-[4/5] sm:col-span-2 sm:aspect-[4/5]" : "aspect-[4/5] sm:col-span-1"} ${index === 3 ? "sm:col-start-2" : ""}`} aria-label={`Open ${photo.caption}`}>
              <img src={photo.src} alt={photo.alt} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17184f]/70 via-transparent to-transparent opacity-80 transition group-hover:opacity-100" />
              <span className="absolute bottom-4 left-4 rounded-full bg-white/15 px-3 py-2 text-[8px] font-extrabold uppercase tracking-[0.16em] text-white backdrop-blur-md">{photo.caption}</span>
              <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#c6f36b] text-[#191a36] opacity-0 transition group-hover:opacity-100"><ArrowUpRight size={16} /></span>
            </motion.button>
          ))}
        </div>
      </section>

      <section className="relative z-10 px-5 pb-24 sm:px-10">
        <div className="mx-auto grid max-w-[1280px] gap-8 overflow-hidden rounded-[2rem] bg-[#e9e7ff] p-7 sm:p-12 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="mb-3 text-[9px] font-extrabold uppercase tracking-[0.25em] text-[#f06c55]">A tiny wish generator</p>
            <AnimatePresence mode="wait"><motion.p key={wishIndex} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="max-w-3xl text-2xl font-bold leading-snug tracking-[-.04em] sm:text-4xl">“{wishes[wishIndex]}”</motion.p></AnimatePresence>
          </div>
          <button onClick={() => setWishIndex((current) => (current + 1) % wishes.length)} className="inline-flex items-center justify-center gap-3 rounded-full bg-[#191a36] px-6 py-4 text-[9px] font-extrabold uppercase tracking-[0.18em] text-white transition hover:bg-[#3434b7]">Another little wish <Sparkles size={14} /></button>
        </div>
      </section>

      <footer className="relative z-10 bg-[#191a36] px-5 py-16 text-center text-white sm:px-10 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto mb-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c6f36b] text-[#191a36]"><Heart size={20} fill="currentColor" /></div>
          <p className="text-4xl font-black leading-[.95] tracking-[-.06em] sm:text-6xl">STAY GOLDEN,<br /><span className="text-[#c6f36b]">SHAHELA.</span></p>
          <p className="mx-auto mt-6 max-w-md text-xs leading-6 text-white/50">May your days be colourful, your heart be light, and your next chapter be your best one yet.</p>
          <p className="mt-10 text-[8px] font-bold uppercase tracking-[0.3em] text-white/30">Made with love · A birthday special</p>
          <a href="/" className="mt-6 inline-flex items-center gap-2 text-[9px] font-extrabold uppercase tracking-[0.2em] text-white/65 transition hover:text-[#c6f36b]">Back to home <ArrowUpRight size={13} /></a>
        </div>
      </footer>

      <AnimatePresence>
        {surpriseOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-[#191a36]/80 p-4 backdrop-blur-md" onClick={() => setSurpriseOpen(false)}>
            <motion.div initial={{ opacity: 0, y: 25, scale: .96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 15, scale: .98 }} role="dialog" aria-modal="true" aria-labelledby="surprise-title" onClick={(event) => event.stopPropagation()} className="relative w-full max-w-xl overflow-hidden rounded-[2rem] border-4 border-white bg-[#f8f7f2] p-8 text-[#191a36] shadow-2xl sm:p-12">
              <button onClick={() => setSurpriseOpen(false)} aria-label="Close surprise" className="absolute right-5 top-5 rounded-full bg-[#e9e7ff] p-2 transition hover:bg-[#c6f36b]"><X size={18} /></button>
              <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#c6f36b] text-[#191a36]"><Gift size={28} /></div>
              <p className="text-center text-[9px] font-extrabold uppercase tracking-[0.3em] text-[#f06c55]">A little something for you</p>
              <h2 id="surprise-title" className="mt-4 text-center text-4xl font-black tracking-[-.06em] sm:text-5xl">Dear Shahela<span className="text-[#f06c55]">!</span></h2>
              <p className="mt-7 text-center text-base font-medium leading-8 text-[#191a36]/75 sm:text-lg">শুভ জন্মদিন! তোমার জীবনের প্রতিটি দিন হোক নতুন গল্পের শুরু। অনেক হাসি, সুন্দর মুহূর্ত, প্রিয় মানুষের ভালোবাসা আর স্বপ্নপূরণের আনন্দে ভরে উঠুক তোমার আগামী দিনগুলো। নিজের মতো উজ্জ্বল থেকো—তোমার জন্য রইল অনেক অনেক দোয়া ও শুভকামনা।</p>
              <p className="mt-7 text-center text-sm font-extrabold uppercase tracking-[0.15em] text-[#3434b7]">You deserve all the good things. ♡</p>
              <div className="mt-9 flex justify-center"><button onClick={() => setSurpriseOpen(false)} className="rounded-full bg-[#2426a8] px-7 py-3 text-[9px] font-extrabold uppercase tracking-[0.2em] text-white transition hover:bg-[#191a36]">Close your gift</button></div>
            </motion.div>
          </motion.div>
        )}
        {activePhoto !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[110] flex items-center justify-center bg-[#11122e]/95 p-5 backdrop-blur-md" onClick={() => setActivePhoto(null)}>
            <button onClick={() => setActivePhoto(null)} aria-label="Close photo viewer" className="absolute right-5 top-5 rounded-full border border-white/20 p-3 text-white transition hover:bg-white/10"><X size={20} /></button>
            <button onClick={(event) => { event.stopPropagation(); movePhoto(-1); }} aria-label="Previous photo" className="absolute left-3 z-10 rounded-full border border-white/20 p-3 text-white transition hover:bg-white/10 sm:left-8"><ArrowLeft size={20} /></button>
            <div className="flex max-h-[88vh] max-w-[min(80vw,900px)] flex-col items-center gap-4" onClick={(event) => event.stopPropagation()}>
              <motion.img key={photos[activePhoto].src} initial={{ opacity: 0, scale: .98 }} animate={{ opacity: 1, scale: 1 }} src={photos[activePhoto].src} alt={photos[activePhoto].alt} className="max-h-[78vh] max-w-full rounded-xl object-contain shadow-2xl" />
              <p className="text-[9px] font-extrabold uppercase tracking-[0.25em] text-white/70">{photos[activePhoto].caption} · 0{activePhoto + 1} / 0{photos.length}</p>
            </div>
            <button onClick={(event) => { event.stopPropagation(); movePhoto(1); }} aria-label="Next photo" className="absolute right-3 z-10 rounded-full border border-white/20 p-3 text-white transition hover:bg-white/10 sm:right-8"><ArrowRight size={20} /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
