"use client";

import React, { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Logging in...");
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col justify-between antialiased text-slate-800">
      
      {/* Header Logo */}
      <header className="py-8 flex justify-center items-center">
        <div className="flex items-center gap-1.5 cursor-pointer" onClick={() => window.location.href = "/"}>
          <svg className="w-6 h-7 shrink-0" viewBox="0 0 40 48" fill="#af0707">
            <path d="M20 0 L0 8 L0 26 C0 37 9 45 20 48 C31 45 40 37 40 26 L40 8 Z" />
            <path d="M12 24 L17 30 L28 18" stroke="white" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-xl font-black text-[#af0707] tracking-tight">McAfee</span>
        </div>
      </header>

      {/* Main card */}
      <main className="flex-1 flex items-center justify-center p-4 -mt-8">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-lg py-8 px-10 w-full max-w-lg space-y-6">
          
          <h2 className="text-[28px] font-bold text-[#333]">Sign in</h2>

          {/* Social Sign-In buttons */}
          <div className="grid grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <button className="w-full flex items-center justify-center border border-blue-400 rounded-3xl py-2 hover:bg-slate-50 transition cursor-pointer">
                {/* Apple icon */}
                <svg className="w-6 h-6 text-slate-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.69-1.12 1.83-.98 2.94 1.07.08 2.16-.52 2.81-1.33z"/>
                </svg>
              </button>
              <span className="text-xs font-bold text-blue-600 mt-2">Apple</span>
            </div>

            <div className="flex flex-col items-center">
              <button className="w-full flex items-center justify-center border border-blue-400 rounded-3xl py-2 hover:bg-slate-50 transition cursor-pointer">
                {/* Google icon */}
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.56-2.77c-.98.66-2.23 1.06-3.72 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
              </button>
              <span className="text-xs font-bold text-blue-600 mt-2">Google</span>
            </div>

            <div className="flex flex-col items-center">
              <button className="w-full flex items-center justify-center border border-blue-400 rounded-3xl py-2 hover:bg-slate-50 transition cursor-pointer">
                {/* Microsoft icon */}
                <svg className="w-6 h-6" viewBox="0 0 23 23">
                  <path fill="#F25022" d="M0 0h11v11H0z" />
                  <path fill="#7FBA00" d="M12 0h11v11H12z" />
                  <path fill="#00A4EF" d="M0 12h11v11H0z" />
                  <path fill="#FFB900" d="M12 12h11v11H12z" />
                </svg>
              </button>
              <span className="text-xs font-bold text-blue-600 mt-2">Microsoft</span>
            </div>
          </div>

          <p className="text-sm text-slate-500 text-center leading-relaxed">
            Your social account <span className="font-semibold text-slate-700">email must match</span> the one associated with your McAfee account.
          </p>

          <hr className="border-slate-100" />

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="text-base font-normal text-slate-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:border-blue-500 outline-none text-base transition"
                required
              />
            </div>

            <div className="space-y-1 relative">
              <label className="text-base font-normal text-slate-700">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:border-blue-500 outline-none text-base transition pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-600 hover:text-blue-700 focus:outline-none cursor-pointer"
                >
                  {showPassword ? (
                    /* Crossed out eye (Hide state) */
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                    </svg>
                  ) : (
                    /* Open eye (Show state) */
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 rounded-full bg-[#e5e7eb] hover:bg-slate-300 text-slate-700 font-bold text-sm transition cursor-pointer"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="text-center pt-2">
            <span className="text-sm font-bold text-blue-600 hover:underline cursor-pointer">
              Sign in with one-time passcode
            </span>
          </div>

        </div>
      </main>

      {/* Reset your password (outside box, grey, underlined) */}
      <div className="text-center -mt-8 mb-4">
        <span className="text-sm font-semibold text-slate-500 underline hover:text-slate-800 cursor-pointer">
          Reset your password
        </span>
      </div>

      {/* Footer */}
      <footer className="py-8 px-12 bg-transparent flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 gap-4 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-4">
          <span style={{ color: "#2563eb", textDecoration: "underline" }} className="hover:text-blue-700 cursor-pointer">Contact Us</span>
          <span className="text-slate-300">|</span>
          <span style={{ color: "#2563eb", textDecoration: "underline" }} className="hover:text-blue-700 cursor-pointer">Privacy Notice</span>
          <span className="text-slate-300">|</span>
          <span style={{ color: "#2563eb", textDecoration: "underline" }} className="hover:text-blue-700 cursor-pointer">FAQs</span>
        </div>
        <div className="text-sm font-bold text-slate-500">
          <span>Copyright &copy; 2026 McAfee, LLC</span>
        </div>
      </footer>

    </div>
  );
}
