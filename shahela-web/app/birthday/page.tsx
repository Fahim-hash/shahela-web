"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Heart, Moon,
  Sparkles, X,
} from "lucide-react";

const photos = [
  { src: "/images/shahela1.jpg", caption: "এই গল্পের প্রথম আলো", alt: "শাহেলার একটি সুন্দর ছবি" },
  { src: "/images/shahela2.jpg", caption: "হাসির একটি বিকেল", alt: "শাহেলার স্মৃতি" },
  { src: "/images/shahela3.jpg", caption: "নিজের মতো উজ্জ্বল", alt: "শাহেলার ছবি" },
  { src: "/images/shahela4.jpg", caption: "একটু মায়া, একটু আলো", alt: "শাহেলার স্মৃতি" },
  { src: "/images/shahela5.jpg", caption: "থেকে যাওয়া মুহূর্ত", alt: "শাহেলার ছবি" },
  ...Array.from({ length: 12 }, (_, i) => ({
    src: `/images/a${i + 1}${i === 4 ? ".png" : ".jpg"}`,
    caption: ["অল্প কথার গল্প", "এক চিলতে রোদ", "মনে রাখার মতো", "হাসির ফ্রেম", "চেনা এক মায়া", "স্মৃতির ভাঁজে", "সময় থেমে থাক", "একটি সুন্দর দিন", "আলোর কাছাকাছি", "মন ভালো করা", "প্রিয় কিছু দৃশ্য", "আরও কিছু গল্প"][i],
    alt: `স্মৃতির ছবি ${i + 6}`,
  })),
];

const wishes = [
  "তোমার জীবনে এমন সব সকাল আসুক, যেগুলো শুরু হবে নিশ্চিন্ত হাসিতে; আর এমন সব রাত, যেগুলো শেষ হবে একরাশ শান্তিতে।",
  "যে স্বপ্নগুলো কাউকে বলা হয় না, সেগুলোও একদিন সত্যি হোক। নিজের জন্য, নিজের মতো করে বাঁচার সাহস কখনো হারিয়ো না।",
  "পৃথিবী তোমাকে সবসময় সহজ দিন দেবে না, তবু প্রতিটি কঠিন দিনের শেষে যেন নিজের ভেতর আলো খুঁজে পাও।",
];

const stars = Array.from({ length: 24 }, (_, i) => ({
  left: `${(i * 37 + 11) % 100}%`,
  top: `${(i * 53 + 7) % 100}%`,
  delay: (i % 7) * 0.45,
  size: i % 4 === 0 ? 3 : 2,
}));

export default function BirthdayPage() {
  const [activePhoto, setActivePhoto] = useState<number | null>(null);
  const [letterOpen, setLetterOpen] = useState(false);
  const [wishIndex, setWishIndex] = useState(0);
  const [finalOpen, setFinalOpen] = useState(false);

  useEffect(() => {
    if (activePhoto === null && !finalOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActivePhoto(null);
        setFinalOpen(false);
      }
      if (activePhoto !== null && event.key === "ArrowRight") setActivePhoto((v) => v === null ? null : (v + 1) % photos.length);
      if (activePhoto !== null && event.key === "ArrowLeft") setActivePhoto((v) => v === null ? null : (v - 1 + photos.length) % photos.length);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activePhoto, finalOpen]);

  const movePhoto = (direction: number) => setActivePhoto((v) => v === null ? null : (v + direction + photos.length) % photos.length);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#090b12] text-[#f4eee4] selection:bg-[#d5ad72]/30">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(109,77,92,.24),transparent_48%),radial-gradient(ellipse_at_90%_70%,rgba(135,101,58,.13),transparent_35%)]" />
        <div className="absolute inset-0 opacity-[0.12]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)", backgroundSize: "72px 72px" }} />
        {stars.map((star, i) => <motion.span key={i} className="absolute rounded-full bg-[#e7c997]" style={{ left: star.left, top: star.top, width: star.size, height: star.size, boxShadow: "0 0 12px rgba(231,201,151,.7)" }} animate={{ opacity: [.15, .85, .15], scale: [1, 1.5, 1] }} transition={{ duration: 3 + star.delay, delay: star.delay, repeat: Infinity }} />)}
        <div className="absolute -left-48 top-[30%] h-[32rem] w-[32rem] rounded-full bg-[#6c3f56]/10 blur-[120px]" />
        <div className="absolute -right-48 top-[58%] h-[32rem] w-[32rem] rounded-full bg-[#9c7848]/10 blur-[130px]" />
      </div>

      <header className="relative z-10 mx-auto flex max-w-[1400px] items-center justify-between px-5 py-6 sm:px-10 lg:px-16">
        <a href="/" className="font-[var(--font-noto-bengali)] text-sm tracking-wide text-[#e5c99a]">শাহেলার জন্য <span className="ml-1 text-[#a77b8d]">✳</span></a>
        <div className="hidden items-center gap-3 font-[var(--font-noto-bengali)] text-[11px] tracking-[.22em] text-white/40 sm:flex"><span className="h-px w-8 bg-white/20" /> পঁচিশে নভেম্বর <span className="h-px w-8 bg-white/20" /></div>
        <a href="#moments" className="group flex items-center gap-2 font-[var(--font-noto-bengali)] text-xs text-white/60 transition hover:text-[#e5c99a]">স্মৃতির দিকে <ArrowDown size={14} className="transition group-hover:translate-y-1" /></a>
      </header>

      <section className="relative z-10 mx-auto grid min-h-[calc(100svh-84px)] max-w-[1400px] items-center gap-12 px-5 pb-20 pt-8 sm:px-10 md:grid-cols-[1fr_.88fr] md:gap-16 md:px-16 md:py-12">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="order-2 md:order-1">
          <div className="mb-8 flex items-center gap-3 font-[var(--font-noto-bengali)] text-xs tracking-[.18em] text-[#d6b47e]"><span className="h-px w-9 bg-[#d6b47e]/70" /> একটি দিন, একজন মানুষ, অনেক অনুভূতি</div>
          <p className="mb-4 font-[var(--font-noto-bengali)] text-sm text-white/45">২৫ নভেম্বর · তোমার দিন</p>
          <h1 className="font-[var(--font-noto-bengali)] font-black leading-[1.13] tracking-tight">
            <span className="block text-[clamp(3.6rem,9vw,7.8rem)] text-[#f3eadb]">শুভ</span>
            <span className="mt-1 block text-[clamp(3.6rem,9vw,7.8rem)] text-[#d9b783]">জন্মদিন<span className="text-[#a77b8d]">।</span></span>
          </h1>
          <div className="mt-7 flex items-center gap-4">
            <span className="h-px w-12 bg-[#a77b8d]/70" />
            <span className="font-[var(--font-noto-bengali)] text-2xl font-semibold tracking-[.12em] text-white/85">শাহেলা</span>
            <span className="text-[#d9b783]">✦</span>
          </div>
          <p className="mt-8 max-w-xl font-[var(--font-noto-bengali)] text-lg leading-[2.1] text-white/70 sm:text-xl">
            কিছু মানুষ জীবনে আসে, তারপর ধীরে ধীরে জীবনেরই একটা সুন্দর অংশ হয়ে যায়। তোমাকে নিয়ে এই ছোট্ট আয়োজন—সেই অনুভূতিরই সামান্য প্রকাশ।
          </p>
          <p className="mt-4 max-w-lg font-[var(--font-noto-bengali)] text-sm leading-8 text-white/40 sm:text-base">
            আজকের দিনটা তোমার মতোই সুন্দর হোক। আর আগামী দিনগুলো জমিয়ে রাখুক এমন সব মুহূর্ত, যেগুলো মনে পড়লে অজান্তেই মুখে হাসি চলে আসে।
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#letter" className="group inline-flex items-center gap-3 border border-[#d9b783]/55 bg-[#d9b783] px-6 py-4 font-[var(--font-noto-bengali)] text-sm font-semibold text-[#17131a] transition duration-300 hover:-translate-y-1 hover:bg-[#ecd3a9]">কিছু কথা আছে <ArrowUpRight size={15} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" /></a>
            <a href="#moments" className="inline-flex items-center gap-2 px-3 py-3 font-[var(--font-noto-bengali)] text-sm text-white/55 transition hover:text-white">ছবিগুলো দেখো <ArrowDown size={14} /></a>
          </div>
          <div className="mt-12 flex items-center gap-3 text-white/30"><Moon size={14} /><span className="font-[var(--font-noto-bengali)] text-xs tracking-wide">এই আয়োজনটুকু শুধু তোমার জন্য</span></div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: .94, rotate: 1.5 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1.1, delay: .15 }} className="relative order-1 mx-auto w-full max-w-[500px] md:order-2">
          <div className="absolute -inset-6 rounded-[48%] bg-[#b68b72]/10 blur-[70px]" />
          <div className="absolute -left-5 top-[16%] z-20 hidden h-24 w-24 items-center justify-center rounded-full border border-[#d9b783]/30 bg-[#11131b]/80 text-center font-[var(--font-noto-bengali)] text-xs leading-6 text-[#d9b783] backdrop-blur sm:flex">একটি<br />বিশেষ<br />দিন</div>
          <div className="relative overflow-hidden border border-white/15 bg-[#171720] p-2 shadow-[0_35px_100px_rgba(0,0,0,.55)] sm:p-3">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img src="/images/shahela1.jpg" alt="শাহেলা" fetchPriority="high" className="h-full w-full object-cover object-[72%_center]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090f]/90 via-[#08090f]/5 to-[#08090f]/10" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-9">
                <p className="font-[var(--font-noto-bengali)] text-xs tracking-[.18em] text-[#e7c997]/80">২৫ · ১১ · ২০০৮</p>
                <p className="mt-3 font-[var(--font-noto-bengali)] text-5xl font-bold tracking-wide text-white sm:text-6xl">শাহেলা<span className="text-[#d9b783]">।</span></p>
                <p className="mt-3 font-[var(--font-noto-bengali)] text-sm text-white/65">তোমার গল্পের নতুন একটি বছর শুরু হোক।</p>
              </div>
            </div>
          </div>
          <motion.div animate={{ y: [0, -10, 0], rotate: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute -bottom-7 -right-4 flex h-16 w-16 items-center justify-center rounded-full border border-[#d9b783]/35 bg-[#11131b] text-[#d9b783] shadow-xl"><Sparkles size={24} /></motion.div>
        </motion.div>
      </section>

      <section className="relative z-10 border-y border-white/10 bg-white/[.025] px-5 py-10 sm:py-14">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-[var(--font-noto-bengali)] text-xs tracking-[.24em] text-[#d9b783]/70">একটা কথা মনে রেখো</p>
          <p className="mx-auto mt-5 max-w-4xl font-[var(--font-noto-bengali)] text-2xl font-medium leading-[1.9] text-white/85 sm:text-4xl">“কিছু মানুষকে আলাদা করে আপন লাগে—কেন লাগে, তার ব্যাখ্যা হয়তো সবসময় দেওয়া যায় না।”</p>
        </div>
      </section>

      <section id="letter" className="relative z-10 mx-auto max-w-[1120px] px-5 py-24 sm:px-10 sm:py-32">
        <div className="grid gap-12 md:grid-cols-[.7fr_1.3fr] md:gap-20">
          <div>
            <p className="font-[var(--font-noto-bengali)] text-xs tracking-[.2em] text-[#d9b783]/70">শুধু তোমার জন্য</p>
            <h2 className="mt-5 font-[var(--font-noto-bengali)] text-4xl font-bold leading-tight text-white sm:text-5xl">কিছু কথা,<br /><span className="text-[#d9b783]">যা বলা হয় না।</span></h2>
            <div className="mt-7 h-px w-20 bg-[#a77b8d]" />
            <p className="mt-6 font-[var(--font-noto-bengali)] text-sm leading-8 text-white/40">সব অনুভূতির নাম দিতে হয় না। কিছু অনুভূতি নীরবে সুন্দর থাকুক।</p>
          </div>
          <div className="relative border-l border-[#d9b783]/35 pl-7 sm:pl-10">
            <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-[#d9b783] shadow-[0_0_20px_rgba(217,183,131,.8)]" />
            <p className="font-[var(--font-noto-bengali)] text-sm tracking-wide text-[#d9b783]">প্রিয় শাহেলা,</p>
            <div className="mt-6 space-y-5 font-[var(--font-noto-bengali)] text-base leading-[2.15] text-white/65 sm:text-lg">
              <p>তোমাকে নিয়ে কী লিখব, সেটা ভাবতে গিয়ে বুঝলাম—কিছু মানুষকে নিয়ে লিখতে বসলে শব্দের চেয়ে অনুভূতিই বেশি হয়ে যায়। তুমি তেমনই একজন।</p>
              <p>তোমার হাসি, তোমার ছোট ছোট অভ্যাস, তোমার নিজের মতো করে থাকা—এসবের মাঝেই এমন কিছু আছে, যা হয়তো তুমি নিজেও জানো না। কিন্তু কারও কারও দিন একটু ভালো করে দেওয়ার জন্য তোমার শুধু তুমি হয়ে থাকাটাই যথেষ্ট।</p>
              <p>জন্মদিনে খুব বেশি কিছু চাইব না। শুধু চাই, তুমি নিজের স্বপ্নগুলোকে কখনো ছোট করে দেখো না। মন খারাপ হলে মনে রেখো, এই পৃথিবীতে এমন কেউ আছে যে তোমার ভালো থাকাটাকে সত্যিই গুরুত্বপূর্ণ মনে করে।</p>
              <p className="pt-2 text-[#e4c99b]">শুভ জন্মদিন, শাহেলা। তোমার জীবনের প্রতিটি নতুন অধ্যায় হোক তোমার কল্পনার চেয়েও সুন্দর।</p>
            </div>
            <button onClick={() => setLetterOpen((v) => !v)} className="mt-8 inline-flex items-center gap-3 border border-white/15 px-5 py-3 font-[var(--font-noto-bengali)] text-sm text-white/70 transition hover:border-[#d9b783]/60 hover:text-[#e4c99b]">{letterOpen ? "চিঠির শেষটুকু লুকাও" : "চিঠির শেষটুকু পড়ো"} <Heart size={14} className="text-[#c58d9d]" /></button>
            <AnimatePresence>{letterOpen && <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} className="mt-6 border-l-2 border-[#a77b8d] pl-5 font-[var(--font-noto-bengali)] text-lg leading-[2] text-[#e4c99b]">আর একটা কথা—তোমার জীবনে আমার জায়গাটা যাই হোক, তোমার জন্য আমার শুভকামনাটা সবসময়ই সত্যি থাকবে। ভালো থেকো, নিজের মতো করে।</motion.p>}</AnimatePresence>
            <p className="mt-9 font-[var(--font-noto-bengali)] text-sm text-white/35">— অনেক মায়া আর শুভকামনায়</p>
          </div>
        </div>
      </section>

      <section id="moments" className="relative z-10 border-y border-white/10 bg-white/[.025] px-5 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div><p className="font-[var(--font-noto-bengali)] text-xs tracking-[.2em] text-[#d9b783]/70">সময় জমে থাকে ছবিতে</p><h2 className="mt-4 font-[var(--font-noto-bengali)] text-4xl font-bold leading-tight text-white sm:text-6xl">তোমার কিছু<br /><span className="text-[#d9b783]">সুন্দর মুহূর্ত।</span></h2></div>
            <p className="max-w-sm font-[var(--font-noto-bengali)] text-sm leading-8 text-white/40">প্রতিটি ছবির পেছনে হয়তো আলাদা গল্প আছে। সব গল্প জানা না থাকলেও, মুহূর্তগুলো সুন্দর।</p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5 lg:grid-cols-6">
            {photos.map((photo, index) => <motion.button key={photo.src} type="button" onClick={() => setActivePhoto(index)} whileHover={{ y: -6, scale: 1.015 }} className={`group relative aspect-[4/5] overflow-hidden border border-white/10 bg-[#171720] text-left ${index === 0 ? "col-span-2 row-span-2" : ""}`} aria-label={`ছবি খুলুন: ${photo.caption}`}>
              <img src={photo.src} alt={photo.alt} loading="lazy" className={`h-full w-full object-cover transition duration-700 group-hover:scale-110 ${index === 0 ? "object-[72%_center]" : ""}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090f]/85 via-transparent to-transparent opacity-80 transition group-hover:opacity-100" />
              <span className="absolute bottom-3 left-3 right-3 font-[var(--font-noto-bengali)] text-xs text-white/90 sm:bottom-4 sm:left-4 sm:text-sm">{photo.caption}</span>
              <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white opacity-0 backdrop-blur transition group-hover:opacity-100"><ArrowUpRight size={14} /></span>
            </motion.button>)}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-24 sm:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <Sparkles className="mx-auto text-[#d9b783]" size={23} />
          <p className="mt-5 font-[var(--font-noto-bengali)] text-xs tracking-[.2em] text-[#d9b783]/70">তোমার জন্য কিছু প্রার্থনা</p>
          <p key={wishIndex} className="mt-8 min-h-[120px] font-[var(--font-noto-bengali)] text-xl font-medium leading-[2] text-white/80 sm:text-3xl">“{wishes[wishIndex]}”</p>
          <button onClick={() => setWishIndex((v) => (v + 1) % wishes.length)} className="mt-8 border border-[#d9b783]/40 px-6 py-3 font-[var(--font-noto-bengali)] text-sm text-[#e4c99b] transition hover:bg-[#d9b783] hover:text-[#111018]">আরেকটি শুভকামনা <ArrowRight size={14} className="ml-2 inline" /></button>
        </div>
      </section>

      <section className="relative z-10 overflow-hidden border-t border-white/10 bg-[#11121a] px-5 py-24 text-center sm:py-32">
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8c5e73]/10 blur-[100px]" />
        <div className="relative mx-auto max-w-3xl">
          <p className="font-[var(--font-noto-bengali)] text-xs tracking-[.22em] text-[#d9b783]/70">আজকের দিনটা তোমার</p>
          <h2 className="mt-6 font-[var(--font-noto-bengali)] text-4xl font-black leading-[1.5] text-white sm:text-6xl">ভালো থেকো,<br /><span className="text-[#d9b783]">শাহেলা।</span></h2>
          <p className="mx-auto mt-6 max-w-xl font-[var(--font-noto-bengali)] text-sm leading-8 text-white/45 sm:text-base">সময় বদলাবে, অনেক কিছু বদলাবে—তবু তোমার জন্য আজকের এই শুভকামনাটুকু থেকে যাবে।</p>
          <button onClick={() => setFinalOpen(true)} className="mt-9 inline-flex items-center gap-3 bg-[#d9b783] px-7 py-4 font-[var(--font-noto-bengali)] text-sm font-semibold text-[#17131a] transition hover:-translate-y-1 hover:bg-[#ecd3a9]">শেষে তোমার জন্য <Heart size={15} fill="currentColor" /></button>
        </div>
      </section>

      <footer className="relative z-10 flex flex-col items-center gap-4 border-t border-white/10 px-5 py-8 text-center">
        <p className="font-[var(--font-noto-bengali)] text-xs text-white/30">২৫ · ১১ · ২০০৮ <span className="mx-2 text-[#d9b783]">✦</span> একটি ছোট্ট আয়োজন, শুধু তোমার জন্য</p>
        <a href="/" className="font-[var(--font-noto-bengali)] text-xs text-white/35 transition hover:text-[#d9b783]">মূল পাতায় ফিরে যাও <ArrowUpRight size={12} className="ml-1 inline" /></a>
      </footer>

      <AnimatePresence>
        {finalOpen && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[120] flex items-center justify-center bg-[#05060a]/90 p-5 backdrop-blur-xl" onClick={() => setFinalOpen(false)}>
          <motion.div initial={{ opacity: 0, y: 25, scale: .96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 15 }} onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" className="relative w-full max-w-lg border border-[#d9b783]/30 bg-[#13141d] px-7 py-12 text-center shadow-2xl sm:px-12">
            <button onClick={() => setFinalOpen(false)} aria-label="বন্ধ করুন" className="absolute right-4 top-4 p-2 text-white/40 hover:text-white"><X size={18} /></button>
            <Heart className="mx-auto text-[#d9b783]" size={28} />
            <p className="mt-7 font-[var(--font-noto-bengali)] text-xs tracking-[.2em] text-[#d9b783]/70">একদম শেষের কথাটা</p>
            <p className="mt-6 font-[var(--font-noto-bengali)] text-2xl font-medium leading-[2] text-white sm:text-3xl">তুমি জানো কি না জানি না, তবে তোমার ভালো থাকাটা কারও কাছে ভীষণ গুরুত্বপূর্ণ।</p>
            <p className="mt-6 font-[var(--font-noto-bengali)] text-sm text-white/45">শুভ জন্মদিন, শাহেলা। ♡</p>
          </motion.div>
        </motion.div>}
        {activePhoto !== null && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[110] flex items-center justify-center bg-[#05060a]/95 p-5 backdrop-blur-xl" onClick={() => setActivePhoto(null)}>
          <button onClick={() => setActivePhoto(null)} aria-label="ছবি বন্ধ করুন" className="absolute right-5 top-5 rounded-full border border-white/20 p-3 text-white/80"><X size={20} /></button>
          <button onClick={(e) => { e.stopPropagation(); movePhoto(-1); }} aria-label="আগের ছবি" className="absolute left-3 z-10 rounded-full border border-white/20 p-3 text-white sm:left-8"><ArrowLeft size={20} /></button>
          <div className="flex max-h-[88vh] max-w-[min(80vw,900px)] flex-col items-center gap-4" onClick={(e) => e.stopPropagation()}>
            <motion.img key={photos[activePhoto].src} initial={{ opacity: 0, scale: .98 }} animate={{ opacity: 1, scale: 1 }} src={photos[activePhoto].src} alt={photos[activePhoto].alt} className="max-h-[78vh] max-w-full object-contain shadow-2xl" />
            <p className="font-[var(--font-noto-bengali)] text-sm text-white/65">{photos[activePhoto].caption} · {String(activePhoto + 1).padStart(2, "0")} / {photos.length}</p>
          </div>
          <button onClick={(e) => { e.stopPropagation(); movePhoto(1); }} aria-label="পরের ছবি" className="absolute right-3 z-10 rounded-full border border-white/20 p-3 text-white sm:right-8"><ArrowRight size={20} /></button>
        </motion.div>}
      </AnimatePresence>
    </main>
  );
}
