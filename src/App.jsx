import React from 'react';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import HowItWorks from './components/HowItWorks';
import CTASection from './components/CTASection';
import { User } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      {/* Top Bar */}
      <header className="sticky top-0 z-20 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500" />
            <span className="text-sm font-semibold tracking-tight text-white">VibeMatch</span>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-300 sm:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="#get-started" className="hover:text-white">Get started</a>
          </nav>
          <button className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">
            <User className="h-4 w-4" /> Join anonymously
          </button>
        </div>
      </header>

      <main>
        <Hero />
        <FeatureGrid />
        <HowItWorks />
        <CTASection />
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-slate-400">
          <p>© {new Date().getFullYear()} VibeMatch — Built for authentic, anonymous conversations.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
