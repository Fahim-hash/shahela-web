"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoadingTransition() {
  const router = useRouter();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          clearInterval(timer);
          router.push('/chat'); // Auto move to chat
          return 100;
        }
        return old + 2;
      });
    }, 50);
    return () => clearInterval(timer);
  }, [router]);

  return (
    <div className="h-screen bg-[#06010f] flex flex-col items-center justify-center font-sans">
      {/* Pulsing Heart Logo */}
      <div className="text-8xl mb-8 animate-pulse drop-shadow-[0_0_25px_rgba(225,29,72,0.8)]">
        ❤️
      </div>
      
      <div className="w-64 h-1 bg-white/5 rounded-full overflow-hidden border border-white/10">
        <div 
          className="h-full bg-gradient-to-r from-rose-600 to-pink-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <p className="mt-4 text-rose-400/60 text-[10px] font-bold tracking-[0.3em] uppercase">
        Establishing Heart Drive Connection... {progress}%
      </p>
    </div>
  );
}