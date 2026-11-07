"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, BookOpen,
  Feather, Gift, Heart, Sparkles, X,
} from "lucide-react";

const photos = [
  { src: "/images/shahela1.jpg", caption: "স্মৃতির প্রথম পাতা", alt: "শাহেলার ছবি" },
  { src: "/images/shahela2.jpg", caption: "এক টুকরো আনন্দ", alt: "একটি সুন্দর মুহূর্ত" },
  { src: "/images/shahela3.jpg", caption: "রোদ্দুর মাখা দিন", alt: "রোদেলা দিনের স্মৃতি" },
  { src: "/images/shahela4.jpg", caption: "মায়াভরা মুহূর্ত", alt: "একটি মধুর স্মৃতি" },
  { src: "/images/shahela5.jpg", caption: "গল্প হয়ে থাকা", alt: "প্রিয় একটি স্মৃতি" },
  ...Array.from({ length: 12 }, (_, i) => ({
    src: `/images/a${i + 1}${i === 4 ? ".png" : ".jpg"}`,
    caption: ["অলিখিত গল্প", "হাসির দিনলিপি", "রঙিন বিকেল", "মায়ার ফ্রেম", "চেনা সেই হাসি", "স্মৃতির জানালা", "এক মুঠো সময়", "প্রিয় অধ্যায়", "আলোর মুহূর্ত", "মন ভালো করা দিন", "গল্পের ভাঁজে", "আরও কিছু স্মৃতি"][i],
    alt: `স্মৃতির ছবি ${i + 6}`,
  })),
];

const wishes = [
  "তোমার প্রতিটি সকাল শুরু হোক নতুন আশায়, আর প্রতিটি সন্ধ্যা শেষ হোক একরাশ প্রশান্তিতে।",
  "জীবনের প্রতিটি বাঁকে খুঁজে পাও আনন্দ, ভালোবাসা আর নিজের স্বপ্ন ছুঁয়ে দেখার সাহস।",
  "তোমার হাসি থাকুক অমলিন, মন থাকুক আকাশের মতো উদার, আর পথ হোক আলোয় ভরা।",
  "সময় তোমার জন্য লিখে রাখুক অসংখ্য সুন্দর গল্প—যার প্রতিটি পাতায় থাকবে প্রাপ্তির আনন্দ।",
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
    <main className="relative min-h-screen overflow-hidden bg-[#f3ead8] text-[#35251f] selection:bg-[#8b3441]/20">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/assets/background.png')] bg-cover bg-center opacity-[0.055] mix-blend-multiply" />
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(#9b7652 0.65px, transparent 0.65px)", backgroundSize: "13px 13px" }} />
        <div className="absolute -left-40 top-24 h-96 w-96 rounded-full bg-[#b77b68]/15 blur-[100px]" />
        <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#c4a36a]/20 blur-[110px]" />
      </div>

      <header className="relative z-10 mx-auto flex max-w-[1320px] items-center justify-between px-5 py-6 sm:px-10 lg:px-16">
        <a href="/" className="font-['Noto_Serif_Bengali'] text-lg font-bold tracking-tight text-[#6e2938]">শাহেলার জন্য <span className="text-[#a47b4f]">✦</span></a>
        <span className="hidden border-y border-[#9b7652]/35 px-4 py-2 font-['Noto_Serif_Bengali'] text-xs tracking-[0.12em] text-[#806b58] sm:inline-flex">বিশেষ জন্মদিন সংখ্যা · ২৫ নভেম্বর</span>
        <a href="#moments" className="group flex items-center gap-2 font-['Noto_Serif_Bengali'] text-sm text-[#6e2938] transition hover:text-[#a47b4f]">স্মৃতির পাতায় <ArrowDown size={15} className="transition group-hover:translate-y-1" /></a>
      </header>

      <section className="relative z-10 mx-auto grid max-w-[1320px] items-center gap-12 px-5 pb-24 pt-10 sm:px-10 md:min-h-[730px] md:grid-cols-[1.08fr_.92fr] md:gap-12 md:px-16 md:py-16">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }} className="relative z-10 order-2 md:order-1">
          <div className="mb-7 inline-flex items-center gap-2 border border-[#9b7652]/35 bg-[#fffaf0]/65 px-4 py-2 font-['Noto_Serif_Bengali'] text-xs text-[#8b3441] shadow-sm"><Sparkles size={13} /> আজ আনন্দের এক নতুন অধ্যায়</div>
          <p className="mb-5 font-['Noto_Serif_Bengali'] text-sm tracking-[0.12em] text-[#9b7652]">২৫ নভেম্বর · একটি বিশেষ দিনের গল্প</p>
          <h1 className="font-['Noto_Serif_Bengali'] font-black leading-[1.12] tracking-tight text-[#472d2a]">
            <span className="block text-[clamp(3.7rem,9vw,7.6rem)]">শুভ</span>
            <span className="mt-1 block text-[clamp(3.4rem,8.5vw,7.1rem)] text-[#8b3441]">জন্মদিন<span className="text-[#bd9864]">।</span></span>
          </h1>
          <div className="mt-7 flex items-center gap-4 font-['Noto_Serif_Bengali'] text-xl font-bold tracking-[0.18em] text-[#76513f]">
            <span className="h-px w-12 bg-[#b28b62]" /> শাহেলা <span className="h-px w-12 bg-[#b28b62]" />
          </div>
          <p className="mt-8 max-w-xl font-['Noto_Serif_Bengali'] text-lg leading-[2.15] text-[#5f4a3e] sm:text-xl">
            আজকের দিনটি কেবল ক্যালেন্ডারের একটি তারিখ নয়—আজ সেই মানুষটির জন্য, যার উপস্থিতিতে সাধারণ মুহূর্তও হয়ে ওঠে মনে রাখার মতো।
          </p>
          <p className="mt-4 max-w-lg font-['Noto_Serif_Bengali'] text-base leading-8 text-[#806b58]">
            জীবনের নতুন অধ্যায়ে জমা হোক অফুরন্ত আনন্দ, স্বপ্নপূরণের সাহস, প্রিয় মানুষের সান্নিধ্য আর অসংখ্য মধুর স্মৃতি।
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button onClick={() => setSurpriseOpen(true)} className="group inline-flex items-center gap-3 rounded-sm border border-[#6e2938] bg-[#7d3040] px-7 py-4 font-['Noto_Serif_Bengali'] text-sm text-[#fff8ed] shadow-[0_12px_35px_rgba(91,42,48,.18)] transition duration-300 hover:-translate-y-1 hover:bg-[#632532]">
              <Gift size={16} /> উপহারের খাম খোলো <ArrowUpRight size={14} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
            <a href="#moments" className="inline-flex items-center gap-2 px-2 py-3 font-['Noto_Serif_Bengali'] text-sm text-[#806b58] transition hover:text-[#8b3441]">স্মৃতিগুলো দেখো <ArrowDown size={14} /></a>
          </div>
          <div className="mt-10 flex items-center gap-3 font-['Noto_Serif_Bengali'] text-xs text-[#a18a72]"><Heart size={13} /> ভালোবাসা দিয়ে সাজানো কয়েকটি পাতা</div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: .94, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: .9, delay: .12 }} className="relative order-1 mx-auto w-full max-w-[490px] md:order-2">
          <div className="absolute -left-5 top-12 z-20 hidden -rotate-6 border border-[#c7ad86] bg-[#fff8e9] px-5 py-4 shadow-xl sm:block">
            <p className="font-['Noto_Serif_Bengali'] text-xs text-[#9b7652]">আজকের বিশেষণ</p>
            <p className="mt-1 font-['Noto_Serif_Bengali'] text-2xl font-bold text-[#8b3441]">প্রিয়তমা</p>
          </div>
          <div className="relative rotate-[1deg] border border-[#bda17a] bg-[#fff9ed] p-3 shadow-[0_28px_75px_rgba(74,48,33,.2)] sm:p-4">
            <div className="absolute -right-4 -top-5 z-20 flex h-24 w-24 rotate-12 flex-col items-center justify-center rounded-full border-[5px] border-[#f3ead8] bg-[#8b3441] text-center font-['Noto_Serif_Bengali'] text-[#fff8ed] shadow-xl">
              <span className="text-xs">শুভ</span><span className="text-3xl font-bold leading-none">২৫</span><span className="text-xs">নভেম্বর</span>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden bg-[#e7d8c0]">
              <img src="/images/shahela1.jpg" alt="শাহেলা" fetchPriority="high" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#251714]/75 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-[#fff8ed] sm:bottom-8 sm:left-8">
                <p className="font-['Noto_Serif_Bengali'] text-sm text-white/80">এই সংখ্যার উৎসর্গ</p>
                <p className="mt-1 font-['Noto_Serif_Bengali'] text-5xl font-bold tracking-wide sm:text-6xl">শাহেলা<span className="text-[#e5bd83]">।</span></p>
              </div>
            </div>
            <div className="flex items-center justify-between px-2 pb-1 pt-4 font-['Noto_Serif_Bengali'] text-xs text-[#92775b] sm:px-3"><span>২৫ · ১১ · ২০০৮</span><span>একান্ত আপন <Heart size={12} className="ml-1 inline text-[#8b3441]" fill="currentColor" /></span></div>
          </div>
          <motion.div animate={{ y: [0, -9, 0], rotate: [0, 5, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -bottom-7 -right-3 z-20 flex h-16 w-16 items-center justify-center rounded-full border border-[#b28b62]/50 bg-[#fff8e9] text-[#8b3441] shadow-xl sm:-right-7"><Feather size={27} /></motion.div>
        </motion.div>
      </section>

      <section className="relative z-10 border-y border-[#bda17a]/45 bg-[#e9dcc7]/70 px-5 py-8">
        <div className="mx-auto flex max-w-[1180px] flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="font-['Noto_Serif_Bengali'] text-2xl font-bold tracking-tight text-[#593a32] sm:text-3xl">জীবন হোক <span className="text-[#8b3441]">সুন্দর গল্পের মতো।</span></p>
          <span className="font-['Noto_Serif_Bengali'] text-sm text-[#92775b]">নতুন বছরের প্রথম পাতা · আজ থেকে</span>
        </div>
      </section>

      <section id="moments" className="relative z-10 mx-auto max-w-[1320px] px-5 py-20 sm:px-10 sm:py-28 lg:px-16">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 font-['Noto_Serif_Bengali'] text-sm tracking-[0.12em] text-[#9b7652]">স্মৃতির অ্যালবাম · ০১—১৭</p>
            <h2 className="font-['Noto_Serif_Bengali'] text-4xl font-black leading-tight tracking-tight text-[#472d2a] sm:text-6xl">কিছু প্রিয় মুহূর্ত,<br /><span className="text-[#9a6b58]">কিছু গল্প হয়ে থাকা দিন।</span></h2>
          </div>
          <p className="max-w-sm font-['Noto_Serif_Bengali'] text-sm leading-8 text-[#806b58]">সময় চলে যায়, অথচ কিছু মুহূর্ত ছবির ফ্রেমে থেকে যায়। প্রতিটি ছবিতে ছুঁয়ে দেখো স্মৃতির একেকটি পাতা।</p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5 lg:grid-cols-6">
          {photos.map((photo, index) => (
            <motion.button key={photo.src} type="button" onClick={() => setActivePhoto(index)} whileHover={{ y: -6, rotate: index % 2 === 0 ? -1 : 1 }} className={`group relative aspect-[4/5] overflow-hidden border border-[#bda17a]/55 bg-[#e7d8c0] text-left shadow-[0_10px_25px_rgba(74,48,33,.12)] ${index === 0 ? "col-span-2 row-span-2" : ""}`} aria-label={`ছবি খুলুন: ${photo.caption}`}>
              <img src={photo.src} alt={photo.alt} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#251714]/80 via-transparent to-transparent opacity-90 transition group-hover:opacity-100" />
              <span className="absolute bottom-3 left-3 right-3 font-['Noto_Serif_Bengali'] text-sm text-[#fff8ed] sm:bottom-4 sm:left-4">{photo.caption}</span>
              <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#fff8ed]/90 text-[#8b3441] opacity-0 transition group-hover:opacity-100"><ArrowUpRight size={15} /></span>
            </motion.button>
          ))}
        </div>
      </section>

      <section className="relative z-10 px-5 pb-24 sm:px-10">
        <div className="mx-auto max-w-[1180px] border-y border-[#bda17a]/55 bg-[#fff8e9]/65 px-7 py-10 text-center shadow-[0_18px_55px_rgba(74,48,33,.08)] sm:px-14 sm:py-14">
          <div className="mb-5 flex justify-center text-[#9b7652]"><BookOpen size={25} /></div>
          <p className="mb-4 font-['Noto_Serif_Bengali'] text-sm tracking-[0.12em] text-[#9b7652]">তোমার জন্য কয়েকটি শুভকামনা</p>
          <p key={wishIndex} className="mx-auto max-w-3xl font-['Noto_Serif_Bengali'] text-2xl font-semibold leading-[1.9] text-[#593a32] sm:text-3xl">“{wishes[wishIndex]}”</p>
          <button onClick={() => setWishIndex((current) => (current + 1) % wishes.length)} className="mt-8 inline-flex items-center justify-center gap-3 border border-[#8b3441]/35 px-6 py-3 font-['Noto_Serif_Bengali'] text-sm text-[#8b3441] transition hover:bg-[#8b3441] hover:text-[#fff8ed]">আরও একটি শুভকামনা <Sparkles size={14} /></button>
        </div>
      </section>

      <footer className="relative z-10 border-t border-[#bda17a]/45 bg-[#e9dcc7]/75 px-5 py-16 text-center sm:px-10">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-[#bda17a]/60 bg-[#fff8e9] text-[#8b3441]"><Heart size={19} fill="currentColor" /></div>
          <p className="font-['Noto_Serif_Bengali'] text-4xl font-black leading-tight text-[#593a32] sm:text-6xl">ভালো থেকো,<br /><span className="text-[#8b3441]">প্রিয় শাহেলা।</span></p>
          <p className="mx-auto mt-5 max-w-md font-['Noto_Serif_Bengali'] text-sm leading-8 text-[#806b58]">তোমার দিনগুলো হোক কবিতার মতো মায়াময়, আর আগামী প্রতিটি অধ্যায় ভরে উঠুক অনাবিল আনন্দে।</p>
          <p className="mt-8 font-['Noto_Serif_Bengali'] text-xs tracking-[0.12em] text-[#a18a72]">ভালোবাসা ও শুভকামনায় সাজানো · জন্মদিনের বিশেষ আয়োজন</p>
          <a href="/" className="mt-6 inline-flex items-center gap-2 font-['Noto_Serif_Bengali'] text-sm text-[#806b58] transition hover:text-[#8b3441]">মূল পাতায় ফিরে যাও <ArrowUpRight size={13} /></a>
        </div>
      </footer>

      <AnimatePresence>
        {surpriseOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-[#241815]/80 p-4 backdrop-blur-md" onClick={() => setSurpriseOpen(false)}>
            <motion.div initial={{ opacity: 0, y: 25, scale: .96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 15, scale: .98 }} role="dialog" aria-modal="true" aria-labelledby="surprise-title" onClick={(event) => event.stopPropagation()} className="relative w-full max-w-xl border border-[#c7ad86] bg-[#fff8e9] p-8 text-[#472d2a] shadow-2xl sm:p-12">
              <button onClick={() => setSurpriseOpen(false)} aria-label="বন্ধ করুন" className="absolute right-5 top-5 rounded-full border border-[#bda17a]/50 p-2 text-[#806b58] transition hover:bg-[#eadcc6]"><X size={18} /></button>
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-[#bda17a]/60 bg-[#f1e5d1] text-[#8b3441]"><Gift size={25} /></div>
              <p className="text-center font-['Noto_Serif_Bengali'] text-sm tracking-[0.12em] text-[#9b7652]">একটি ছোট্ট উপহার</p>
              <h2 id="surprise-title" className="mt-3 text-center font-['Noto_Serif_Bengali'] text-3xl font-bold text-[#8b3441] sm:text-4xl">প্রিয় শাহেলা,</h2>
              <p className="mt-6 text-center font-['Noto_Serif_Bengali'] text-base leading-[2.1] text-[#5f4a3e] sm:text-lg">শুভ জন্মদিন! তোমার জীবনের প্রতিটি দিন হোক নতুন গল্পের শুরু। অনেক হাসি, সুন্দর মুহূর্ত, প্রিয় মানুষের ভালোবাসা আর স্বপ্নপূরণের আনন্দে ভরে উঠুক তোমার আগামী দিনগুলো। নিজের মতো উজ্জ্বল থেকো—তোমার জন্য রইল অনেক অনেক দোয়া ও শুভকামনা।</p>
              <p className="mt-6 text-center font-['Noto_Serif_Bengali'] text-sm text-[#9b7652]">তোমার জন্য রইল এক আকাশ ভালোবাসা। ♡</p>
              <div className="mt-8 flex justify-center"><button onClick={() => setSurpriseOpen(false)} className="bg-[#7d3040] px-7 py-3 font-['Noto_Serif_Bengali'] text-sm text-[#fff8ed] transition hover:bg-[#632532]">খামটি বন্ধ করো</button></div>
            </motion.div>
          </motion.div>
        )}
        {activePhoto !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[110] flex items-center justify-center bg-[#211714]/95 p-5 backdrop-blur-md" onClick={() => setActivePhoto(null)}>
            <button onClick={() => setActivePhoto(null)} aria-label="ছবি বন্ধ করুন" className="absolute right-5 top-5 rounded-full border border-white/25 p-3 text-white/80 transition hover:bg-white/10"><X size={20} /></button>
            <button onClick={(event) => { event.stopPropagation(); movePhoto(-1); }} aria-label="আগের ছবি" className="absolute left-3 z-10 rounded-full border border-white/25 p-3 text-white transition hover:bg-white/10 sm:left-8"><ArrowLeft size={20} /></button>
            <div className="flex max-h-[88vh] max-w-[min(80vw,900px)] flex-col items-center gap-4" onClick={(event) => event.stopPropagation()}>
              <motion.img key={photos[activePhoto].src} initial={{ opacity: 0, scale: .98 }} animate={{ opacity: 1, scale: 1 }} src={photos[activePhoto].src} alt={photos[activePhoto].alt} className="max-h-[78vh] max-w-full rounded-sm border border-[#c7ad86]/50 object-contain shadow-2xl" />
              <p className="font-['Noto_Serif_Bengali'] text-sm text-white/75">{photos[activePhoto].caption} · {String(activePhoto + 1).padStart(2, "0")} / {photos.length}</p>
            </div>
            <button onClick={(event) => { event.stopPropagation(); movePhoto(1); }} aria-label="পরের ছবি" className="absolute right-3 z-10 rounded-full border border-white/25 p-3 text-white transition hover:bg-white/10 sm:right-8"><ArrowRight size={20} /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
