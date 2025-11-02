import React from 'react';
import { Rocket } from 'lucide-react';

const CTASection = () => {
  return (
    <section id="get-started" className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/15 via-blue-500/10 to-fuchsia-500/10 p-1">
        <div className="rounded-[22px] bg-slate-950/70 p-8 backdrop-blur">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-semibold text-white">Start your anonymous journey</h3>
              <p className="mt-1 max-w-xl text-sm text-slate-300/80">
                Create your first poll in seconds or hop into the feed to see whats trending now.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400"
              >
                <Rocket className="h-4 w-4" />
                Launch Web App
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
