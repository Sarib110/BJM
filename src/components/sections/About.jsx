const smallStats = [
  { label: 'Delivery', value: 'Production-grade' },
  { label: 'Approach', value: 'Bespoke' },
];

const About = () => (
  <section id="about" className="pt-36 pb-28 px-6 bg-white">
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div className="reveal">
        <span className="tag-pill mb-6 inline-block">The team</span>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] text-black leading-[1.06] mb-7">We build.<br /><em className="not-italic text-[#a3e635]">You scale.</em></h2>
        <p className="font-sans text-[13.5px] text-zinc-500 leading-[1.8] mb-5">We build AI that replaces work. Not wrappers, not chatbots. Custom-built agentic systems that execute real business functions, run unsupervised, and scale with your operations.</p>
        <p className="font-sans text-[13.5px] text-zinc-500 leading-[1.8] mb-8">From startups to enterprises, we engineer bespoke AI workforces: systems that <strong className="font-semibold text-black">think, adapt, and deliver</strong> without a human in the loop.</p>
        <div className="flex flex-wrap gap-2">{['Engineering-first', 'AI-driven', 'Results-focused'].map(t => <span key={t} className="tag-pill">{t}</span>)}</div>
      </div>
      <div className="grid grid-cols-2 gap-3 reveal">
        {smallStats.map(({ label, value }) => (
          <div key={label} className="glass-card rounded-2xl p-6 flex flex-col justify-between lime-glow">
            <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-1">{label}</div>
            <div className="font-mono text-xl font-bold text-black leading-tight">{value}</div>
          </div>
        ))}
        <div className="col-span-2 glass-card rounded-2xl p-6 flex items-center justify-between lime-glow">
          <div><div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Founded</div><div className="font-mono text-3xl font-bold text-black">2025</div></div>
          <div className="text-right"><div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Stage</div><div className="font-sans text-[13px] text-zinc-600">Post-Labor Economy</div></div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
