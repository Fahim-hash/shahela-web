"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function SignupPage() {
  const [isEmailSignup, setIsEmailSignup] = useState(false);
  const [step, setStep] = useState(1); // 1: Info, 2: OTP

  return (
    <div className="min-h-screen bg-[#06010f] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Heart Drive Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-[10%] left-[20%] text-[100px] animate-pulse">❤️</div>
        <div className="absolute bottom-[10%] right-[20%] text-[120px] rotate-12">❤️</div>
      </div>

      <div className="relative z-10 w-full max-w-md bg-white/5 backdrop-blur-3xl border border-white/10 p-10 rounded-[40px] shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-white tracking-tight">Create Account</h1>
          <p className="text-rose-400/60 text-[10px] font-bold tracking-[0.2em] uppercase mt-2">Join Heart Drive Network</p>
        </div>

        {!isEmailSignup ? (
          /* Initial Options */
          <div className="space-y-4">
            <button className="w-full py-3.5 px-6 bg-white/10 border border-white/10 rounded-full flex items-center justify-center gap-3 hover:bg-white/20 transition-all font-bold text-sm text-white">
              Continue with Google
            </button>
            <button className="w-full py-3.5 px-6 bg-[#1877F2]/20 border border-[#1877F2]/30 rounded-full flex items-center justify-center gap-3 hover:bg-[#1877F2]/30 transition-all font-bold text-sm text-white">
              Continue with Facebook
            </button>
            <div className="py-4 flex items-center gap-4 text-white/10 text-[10px] font-bold uppercase tracking-widest">
              <div className="h-[1px] flex-1 bg-white/10"></div><span>Or</span><div className="h-[1px] flex-1 bg-white/10"></div>
            </div>
            <button 
              onClick={() => setIsEmailSignup(true)}
              className="w-full py-4 bg-rose-600 rounded-full font-black text-white shadow-[0_0_30px_rgba(225,29,72,0.4)] hover:scale-[1.02] active:scale-95 transition-all"
            >
              Sign up with Email
            </button>
          </div>
        ) : step === 1 ? (
          /* Email & Password Info */
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
            <input type="text" placeholder="Full Name" className="w-full bg-[#150a1c] border border-rose-900/30 rounded-full px-6 py-3.5 text-white outline-none focus:border-rose-500/50 text-sm" />
            <input type="email" placeholder="Email Address" className="w-full bg-[#150a1c] border border-rose-900/30 rounded-full px-6 py-3.5 text-white outline-none focus:border-rose-500/50 text-sm" />
            <input type="password" placeholder="Create Password" className="w-full bg-[#150a1c] border border-rose-900/30 rounded-full px-6 py-3.5 text-white outline-none focus:border-rose-500/50 text-sm" />
            <button onClick={() => setStep(2)} className="w-full py-4 bg-rose-600 rounded-full font-black text-white mt-4">Send OTP to Verify</button>
            <button onClick={() => setIsEmailSignup(false)} className="w-full text-[10px] text-white/30 font-bold uppercase tracking-widest mt-2">Back</button>
          </div>
        ) : (
          /* OTP Verification (Only for Email Signup) */
          <div className="space-y-6 animate-in fade-in zoom-in-95">
            <p className="text-center text-rose-100/60 text-sm">Enter the code sent to your email</p>
            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <input key={i} type="text" maxLength={1} className="w-12 h-14 bg-[#150a1c] border border-rose-900/30 rounded-xl text-center text-xl font-bold text-white outline-none focus:border-rose-500" />
              ))}
            </div>
            <button className="w-full py-4 bg-gradient-to-r from-rose-600 to-pink-600 rounded-full font-black text-white shadow-[0_0_30px_rgba(225,29,72,0.3)]">Create Account</button>
          </div>
        )}

        <div className="mt-8 pt-6 border-t border-white/5 text-center text-sm text-white/30">
          Already have an account? <Link href="/login" className="text-rose-500 font-bold hover:underline">Sign In</Link>
        </div>
      </div>
    </div>
  );
}