import React from 'react';
import { BarChart3, Users, Shield, Shuffle } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Privacy First',
    desc: 'No names on votes or comments. You control what and when to reveal.'
  },
  {
    icon: BarChart3,
    title: 'Instant Results',
    desc: 'Vote and see live percentages and total votes right away.'
  },
  {
    icon: Users,
    title: 'Vibe Matching',
    desc: 'Match with people who answer like you — not based on bios.'
  },
  {
    icon: Shuffle,
    title: 'Endless Polls',
    desc: 'Shuffle through trending, recent, and personalized polls.'
  }
];

const FeatureGrid = () => {
  return (
    <section id="features" className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">Built for authentic connections</h2>
        <p className="mt-3 text-slate-300/80">Vote fast. Connect safely. Talk freely.</p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-5 text-left shadow-sm backdrop-blur transition hover:border-cyan-400/40 hover:shadow-cyan-500/10"
          >
            <div className="mb-3 inline-flex rounded-lg bg-cyan-500/20 p-2 text-cyan-300">
              <f.icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-white">{f.title}</h3>
            <p className="mt-1 text-sm text-slate-300/80">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureGrid;
