import React from 'react';
import { PenSquare, ThumbsUp, MessageSquare } from 'lucide-react';

const steps = [
  {
    icon: PenSquare,
    title: 'Create or Discover',
    desc: 'Spin up a one‑question poll with up to 4 choices, or jump into the feed.'
  },
  {
    icon: ThumbsUp,
    title: 'Vote Anonymously',
    desc: 'Tap to vote, see results instantly, and comment without revealing identity.'
  },
  {
    icon: MessageSquare,
    title: 'Connect & Chat',
    desc: 'When your answers align with someone, unlock an anonymous chat room.'
  }
];

const HowItWorks = () => {
  return (
    <section id="how" className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {steps.map((s, i) => (
          <div
            key={s.title}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-left backdrop-blur"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-300">
              <s.icon className="h-5 w-5" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-sm font-medium text-cyan-300/80">Step {i + 1}</span>
              <h3 className="text-lg font-semibold text-white">{s.title}</h3>
            </div>
            <p className="mt-2 text-sm text-slate-300/80">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
