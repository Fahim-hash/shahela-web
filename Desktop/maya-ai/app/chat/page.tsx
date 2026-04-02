"use client";
import { useState, useEffect, useRef } from 'react';

type Message = {
  id: number;
  role: 'user' | 'assistant';
  content: string;
  replyToId?: number | null;
};

export default function MessengerPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [replyingTo, setReplyingTo] = useState<Message | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // --- Change this name to anything you want ---
  const chatName = "Maya ❤️"; 

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const isOnlyEmoji = (str: string) => {
    const cleanStr = str.replace(/\s/g, '');
    if (!cleanStr) return false;
    const emojiRegex = /^(\p{Emoji_Presentation}|\p{Emoji_Modifier_Base}|\p{Emoji_Component}|\p{Emoji_Modifier}|\p{Symbol}|\p{Punctuation})+$/u;
    return emojiRegex.test(cleanStr);
  };

  const sendMessage = async (manualText?: string) => {
    const textToSend = manualText || input;
    if (!textToSend.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      role: 'user',
      content: textToSend,
      replyToId: replyingTo?.id || null
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setReplyingTo(null);

    if (loading) return; 
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, { role: 'user', content: textToSend }] }),
      });

      const data = await res.json();
      if (data.content) {
        const parts = data.content.split(/[.?!]+/).filter((p: string) => p.trim().length > 0);
        parts.forEach((part: string, index: number) => {
          setTimeout(() => {
            setMessages((prev) => [...prev, {
              id: Date.now() + index,
              role: 'assistant',
              content: part.trim(),
              replyToId: index === 0 ? userMessage.id : null 
            }]);
            if (index === parts.length - 1) setLoading(false);
          }, (index + 1) * 900);
        });
      } else {
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[#06010f] text-white overflow-hidden relative font-sans">
      
      {/* Background Hearts */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-50">
        <div className="absolute top-[15%] left-[10%] text-[110px] text-rose-600/20 blur-[1px] animate-pulse drop-shadow-[0_0_25px_rgba(225,29,72,0.6)]">❤️</div>
        <div className="absolute top-[25%] right-[15%] text-[90px] text-pink-600/15 blur-[2px] animate-bounce duration-[5s]">💖</div>
        <div className="absolute bottom-[30%] left-[25%] text-[130px] text-rose-500/20 blur-[1.5px] rotate-12 drop-shadow-[0_0_30px_rgba(244,63,94,0.7)]">❤️</div>
      </div>

      {/* --- Upgraded Header --- */}
      <div className="relative z-10 p-4 bg-black/40 backdrop-blur-3xl border-b border-white/5 flex items-center justify-between shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="relative group cursor-pointer">
            <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-rose-500 to-pink-600 flex items-center justify-center font-bold text-lg shadow-[0_0_15px_rgba(225,29,72,0.4)] group-hover:scale-105 transition-transform">
              {chatName.charAt(0)}
            </div>
            <div className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 bg-green-500 border-2 border-[#06010f] rounded-full"></div>
          </div>
          <div className="flex flex-col">
            {/* Glow Text for Name */}
            <h2 className="font-bold text-[17px] tracking-tight text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
              {chatName}
            </h2>
            <div className="flex items-center gap-1">
               <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
               <p className="text-[10px] text-rose-400/80 font-semibold tracking-wider uppercase">Heart Drive Active</p>
            </div>
          </div>
        </div>
        
        {/* Call Icons */}
        <div className="flex gap-6 text-xl text-white/30 mr-2">
           <span className="cursor-pointer hover:text-rose-400 transition-colors">📞</span>
           <span className="cursor-pointer hover:text-rose-400 transition-colors">📹</span>
           <span className="cursor-pointer hover:text-rose-400 transition-colors">ℹ️</span>
        </div>
      </div>

      {/* Chat Area */}
      <div className="relative z-10 flex-1 overflow-y-auto p-4 space-y-4 md:px-40 lg:px-[450px]">
        {messages.map((m) => {
          const repliedMsg = m.replyToId ? messages.find(msg => msg.id === m.replyToId) : null;
          const emojiOnly = isOnlyEmoji(m.content);

          return (
            <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in zoom-in-95`}>
              <div className="flex flex-col max-w-[85%]">
                {repliedMsg && !emojiOnly && (
                   <div className={`text-[10px] px-3 py-1 bg-white/5 rounded-t-2xl border-l-2 mb-[-8px] opacity-40 truncate ${m.role === 'user' ? 'border-rose-400 self-end mr-1' : 'border-pink-400 self-start ml-1'}`}>
                     {repliedMsg.content}
                   </div>
                )}
                <div 
                  onClick={() => setReplyingTo(m)}
                  className={`transition-all duration-200 cursor-pointer ${
                    emojiOnly 
                      ? 'text-6xl py-2 bg-transparent shadow-none border-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)] active:scale-90' 
                      : `px-4 py-2.5 rounded-[22px] text-[15px] shadow-lg border ${
                          m.role === 'user' 
                            ? 'bg-gradient-to-r from-rose-600 to-pink-600 border-rose-400/30 text-white rounded-br-none shadow-rose-900/20' 
                            : 'bg-white/10 backdrop-blur-xl border-white/10 text-rose-50 rounded-bl-none'
                        }`
                  }`}
                >
                  {m.content}
                </div>
              </div>
            </div>
          );
        })}
        {loading && <div className="text-[10px] text-rose-500/40 animate-pulse ml-2 italic tracking-widest">MAYA TYPING...</div>}
        <div ref={scrollRef} />
      </div>

      {/* Input Section */}
      <div className="relative z-10 p-5 md:px-40 lg:px-[450px] mb-4">
        {replyingTo && (
          <div className="flex justify-between items-center bg-rose-950/40 backdrop-blur-3xl px-4 py-2 rounded-t-[22px] border-x border-t border-rose-900/30 text-[10px] text-rose-200">
            <span className="truncate italic">Replying...</span>
            <button onClick={() => setReplyingTo(null)} className="text-sm px-1">✕</button>
          </div>
        )}

        <div className={`flex items-center gap-3 bg-[#120614]/80 backdrop-blur-3xl p-2 px-5 ${replyingTo ? 'rounded-b-[22px]' : 'rounded-full'} border border-rose-900/30 shadow-2xl transition-all focus-within:border-rose-500/50`}>
          <input 
            className="flex-1 bg-transparent outline-none text-[15px] text-rose-50 placeholder-rose-900/40 py-2"
            placeholder="Aa"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          />
          <button 
            type="button"
            onClick={() => input.trim() ? sendMessage() : sendMessage("💋")} 
            className={`transition-all active:scale-125 ${input.trim() ? 'text-rose-500 font-bold px-2' : 'text-pink-500 text-3xl drop-shadow-[0_0_12px_rgba(244,63,94,0.6)]'}`}
          >
            {input.trim() ? '➤' : '💋'}
          </button>
        </div>
      </div>
    </div>
  );
}