import Ic from '../ui/Icon';
import { processSteps } from '../../data/process';

const Process = () => (
  <section id="process" className="py-28 px-6 bg-white">
    <div className="max-w-5xl mx-auto">
      <div className="mb-16 reveal">
        <span className="tag-pill mb-5 inline-block">How we work</span>
        <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.5rem)] text-black leading-[1.06]">
          The <span style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 500, letterSpacing: '0.04em', textDecoration: 'underline #a3e635', textDecorationThickness: '2px', textUnderlineOffset: '7px' }}>BJ Medical</span>{' '}
          <em className="not-italic text-[#a3e635]">Billing Workflow.</em>
        </h2>
      </div>
      <div className="space-y-3">
        {processSteps.map((s, i) => (
          <div key={i} className={`glass-card rounded-2xl px-8 py-6 flex gap-6 items-center hover-lift hover-glow group cursor-default reveal delay-${i + 1}`}>
            <span className="font-mono text-[40px] font-bold text-zinc-100 group-hover:text-[#d9f99d] transition-colors duration-300 leading-none select-none flex-shrink-0 w-12">{s.n}</span>
            <div className="w-9 h-9 rounded-xl bg-zinc-100 flex items-center justify-center flex-shrink-0 group-hover:bg-[#f0fad3] transition-colors duration-300"><Ic n={s.icon} size={16} color="#444" /></div>
            <div className="flex-1 min-w-0">
              <h3 className="font-sans font-semibold text-[14.5px] text-black mb-1.5 tracking-[-0.01em]">{s.title}</h3>
              <p className="font-sans text-[13px] text-zinc-500 leading-[1.7]">{s.desc}</p>
            </div>
            <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"><Ic n="arrow_r" size={15} color="#aaa" /></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
