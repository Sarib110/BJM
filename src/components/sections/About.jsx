const About = () => (
  <section id="about" className="pt-36 pb-28 px-6 bg-white">
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div className="reveal">
        <span className="tag-pill mb-6 inline-block">The team</span>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] text-black leading-[1.06] mb-7">Two engineers.<br /><em className="not-italic text-[#a3e635]">One mission.</em></h2>
        <p className="font-sans text-[13.5px] text-zinc-500 leading-[1.8] mb-5">Veloq is an engineer-led strike team — a System Architect and an AI Specialist who deploy production-grade agentic systems. Not demos. Not prototypes. Autonomous infrastructure that runs your operations at 3am without you.</p>
        <p className="font-sans text-[13.5px] text-zinc-500 leading-[1.8] mb-8">Unlike traditional agencies, we combine deep technical expertise with genuine business understanding to design systems that <strong className="font-semibold text-black">truly solve problems</strong> and scale with your growth.</p>
        <div className="flex flex-wrap gap-2">{['Engineering-first', 'AI-driven', 'Results-focused'].map(t => <span key={t} className="tag-pill">{t}</span>)}</div>
      </div>
      <div className="grid grid-cols-2 gap-3 reveal">
        {[{ name: 'Meesam', role: 'System Architect', img: '/assets/team/meesam.webp', desc: 'Full-stack AI systems & scalable solution design' }, { name: 'Usman', role: 'AI Specialist', img: '/assets/team/usman_safdar.webp', desc: 'RAG, GenAI & agentic AI systems' }].map((p, i) => (
          <div key={i} className="glass-card rounded-2xl p-6 text-center hover-lift hover-glow cursor-default">
            <div style={{ width: 120, height: 120, borderRadius: 14, overflow: 'hidden', margin: '0 auto 16px', border: '1px solid rgba(0,0,0,0.06)', flexShrink: 0 }}>
              <img src={p.img} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
            </div>
            <div className="font-sans font-semibold text-[14.5px] text-black mb-1">{p.name}</div>
            <div className="font-mono text-[10px] text-[#5e8c14] font-bold mb-3 uppercase tracking-wider">{p.role}</div>
            <p className="font-sans text-[12px] text-zinc-500 leading-[1.6]">{p.desc}</p>
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
