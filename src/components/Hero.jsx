import React from 'react';
import Spline from '@splinetool/react-spline';
import { Sparkles, Shield, MessageCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden rounded-b-3xl bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft glow overlay to improve text contrast without blocking 3D */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950/80" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-20 pb-16 text-center sm:pt-28">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium backdrop-blur">
          <Sparkles className="h-4 w-4 text-cyan-300" />
          Anonymous, poll‑driven social discovery
        </span>
        <h1 className="text-balance bg-gradient-to-br from-white via-cyan-100 to-blue-200 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-6xl">
          Find your people by the vibes, not the bios
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-base text-slate-200/80 sm:text-lg">
          Vote on quick polls, match with similar minds, and chat — all while staying comfortably anonymous.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#get-started"
            className="group inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400"
          >
            Get Started
          </a>
          <a
            href="#how"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            Learn how it works
          </a>
        </div>

        <div className="mt-10 grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-left backdrop-blur">
            <Shield className="mb-2 h-5 w-5 text-cyan-300" />
            <p className="text-sm text-white/90">Strict anonymity by default — no names on votes or comments.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-left backdrop-blur">
            <MessageCircle className="mb-2 h-5 w-5 text-cyan-300" />
            <p className="text-sm text-white/90">Unlock chats when your responses align. Unmask later if you want.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-left backdrop-blur">
            <Sparkles className="mb-2 h-5 w-5 text-cyan-300" />
            <p className="text-sm text-white/90">Smart recommendations for polls and people based on your vibe.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
