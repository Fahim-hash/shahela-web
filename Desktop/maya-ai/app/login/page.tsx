"use client";
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#080112] flex items-center justify-center p-6 relative overflow-hidden font-sans">
      <div className="relative z-10 w-full max-w-md bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-[40px] shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-white tracking-tight">Welcome Back</h1>
          <p className="text-rose-400/60 text-[10px] font-bold tracking-[0.2em] uppercase mt-2">Sign in to Maya AI</p>
        </div>

        <div className="space-y-4">
          <button className="w-full py-3.5 px-6 bg-white/10 border border-white/10 rounded-full flex items-center justify-center gap-3 hover:bg-white/20 transition-all font-bold text-sm text-white">
            Continue with Google
          </button>
          <button className="w-full py-3.5 px-6 bg-[#1877F2]/20 border border-[#1877F2]/30 rounded-full flex items-center justify-center gap-3 hover:bg-[#1877F2]/40 transition-all font-bold text-sm text-white">
            Continue with Facebook
          </button>

          <div className="py-4 flex items-center gap-4 text-white/10 text-[10px] font-bold uppercase tracking-widest">
            <div className="h-[1px] flex-1 bg-white/10"></div><span>Or use Email</span><div className="h-[1px] flex-1 bg-white/10"></div>
          </div>

          {/* Email & Password Login - NO OTP */}
          <div className="space-y-4">
            <input type="email" placeholder="Email Address" className="w-full bg-[#150a1c] border border-rose-900/30 rounded-full px-6 py-3.5 text-white outline-none focus:border-rose-500/50 text-sm" />
            <input type="password" placeholder="Password" className="w-full bg-[#150a1c] border border-rose-900/30 rounded-full px-6 py-3.5 text-white outline-none focus:border-rose-500/50 text-sm" />
            
            <div className="text-right px-4">
              <button className="text-[10px] text-rose-400/50 font-bold hover:text-rose-400 uppercase tracking-widest transition">Forgot Password?</button>
            </div>

            <button className="w-full py-4 bg-rose-600 rounded-full font-black text-white shadow-[0_0_30px_rgba(225,29,72,0.4)] hover:scale-[1.02] active:scale-95 transition-all">
              Sign In
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center text-sm text-white/30">
          Don't have an account? <Link href="/signup" className="text-rose-500 font-bold hover:underline">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}