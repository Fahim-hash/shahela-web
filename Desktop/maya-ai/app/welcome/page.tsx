"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function WelcomeDashboard() {
  const router = useRouter();
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const moods = [
    { id: 'creative', label: 'Creative', icon: '🎨' },
    { id: 'romantic', label: 'Romantic', icon: '💖' },
    { id: 'chill', label: 'Chill', icon: '🍃' },
    { id: 'sad', label: 'Need Support', icon: '🫂' },
  ];

  const handleStart = () => {
    if (selectedMood) {
      // Logic: Mood-ta database-e ba state-e save kora jabe
      router.push('/chat');
    }
  };

  return (
    <div className="min-h-screen bg-[#06010f] flex flex-col items-center justify-center p-6 text-white font-sans relative overflow-hidden">
      
      {/* Background Hearts */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <div className="absolute top-[10%] left-[20%] text-[100px] blur-[2px] animate-pulse">❤️</div>
        <div className="absolute bottom-[20%] right-[15%] text-[140px] blur-[1px] rotate-12 drop-shadow-[0_0_30px_rgba(244,63,94,0.7)]">❤️</div>
      </div>

      <div className="relative z-10 w-full max-w-2xl text-center animate-in fade-in zoom-in-95 duration-700">
        <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter leading-tight">
          Welcome Home, <span className="text-rose-500 drop-shadow-[0_0_15px_rgba(225,29,72,0.4)]">Fahim</span>
        </h1>
        <p className="text-rose-100/40 text-sm md:text-base font-medium mb-12 tracking-widest uppercase">
          Heart Drive Connected & Ready
        </p>

        {/* Mood Selection Card */}
        <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-8 rounded-[40px] shadow-2xl">
          <h2 className="text-lg font-bold mb-8 text-rose-200/80">Aajke tumar mood kemon?</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {moods.map((mood) => (
              <button
                key={mood.id}
                onClick={() => setSelectedMood(mood.id)}
                className={`p-6 rounded-[28px] border transition-all duration-300 flex flex-col items-center gap-3 group ${
                  selectedMood === mood.id 
                    ? 'bg-rose-600 border-rose-400 shadow-[0_0_25px_rgba(225,29,72,0.4)]' 
                    : 'bg-white/5 border-white/5 hover:border-rose-900/50 hover:bg-white/10'
                }`}
              >
                <span className="text-3xl group-hover:scale-125 transition-transform">{mood.icon}</span>
                <span className="text-[11px] font-black uppercase tracking-wider">{mood.label}</span>
              </button>
            ))}
          </div>

          <button 
            disabled={!selectedMood}
            onClick={handleStart}
            className={`mt-10 w-full py-4 rounded-full font-black text-white transition-all uppercase tracking-[0.2em] shadow-xl ${
              selectedMood 
                ? 'bg-rose-600 hover:scale-[1.02] active:scale-95' 
                : 'bg-white/5 text-white/20 cursor-not-allowed border border-white/5'
            }`}
          >
            Start Conversation
          </button>
        </div>

        {/* Quick Info Footer */}
        <div className="mt-12 flex justify-center gap-10 text-white/20 text-[10px] font-black uppercase tracking-[0.3em]">
          <div>System: 2.0.4</div>
          <div>Server: Dhaka, BD</div>
        </div>
      </div>
    </div>
  );
}