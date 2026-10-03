const smallStats = [
  { label: 'Core service', value: 'Medical billing' },
  { label: 'Coverage', value: 'Full-cycle RCM' },
];

const About = () => (
  <section id="about" className="pt-36 pb-28 px-6 bg-white">
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div className="reveal">
        <span className="tag-pill mb-6 inline-block">BJ Medical Billing Service</span>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] text-black leading-[1.06] mb-7">We bill.<br /><em className="not-italic text-[#a3e635]">You care.</em></h2>
        <p className="font-sans text-[13.5px] text-zinc-500 leading-[1.8] mb-5">We support healthcare providers with the daily work required to turn documented care into accurate, payable claims. That includes insurance eligibility, charge entry, CPT and ICD-10 coding support, claim scrubbing, electronic submission, payment posting, denial management, and payer follow-up.</p>
        <p className="font-sans text-[13.5px] text-zinc-500 leading-[1.8] mb-8">Our approach connects front-end verification with back-end collections so billing issues are identified early, worked consistently, and reported clearly. <strong className="font-semibold text-black">Every claim has a status, every denial has a next action, and every aging balance stays visible.</strong></p>
        <div className="flex flex-wrap gap-2">{['Claim accuracy', 'Payer follow-up', 'Clear reporting'].map(t => <span key={t} className="tag-pill">{t}</span>)}</div>
      </div>
      <div className="grid grid-cols-2 gap-3 reveal">
        {smallStats.map(({ label, value }) => (
          <div key={label} className="glass-card rounded-2xl p-6 flex flex-col justify-between lime-glow">
            <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-1">{label}</div>
            <div className="font-mono text-xl font-bold text-black leading-tight">{value}</div>
          </div>
        ))}
        <div className="col-span-2 glass-card rounded-2xl p-6 flex items-center justify-between lime-glow">
          <div><div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Workflow</div><div className="font-mono text-2xl font-bold text-black">Claim to payment</div></div>
          <div className="text-right"><div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Focus</div><div className="font-sans text-[13px] text-zinc-600">Medical Billing & RCM</div></div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
