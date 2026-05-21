import { useState, useRef } from 'react';
import { projects } from '../../data/projects';

const Work = ({ onSelect }) => {
  const [current, setCurrent] = useState(0);
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef(null);
  const prev = () => setCurrent(c => Math.max(0, c - 1));
  const next = () => setCurrent(c => Math.min(projects.length - 1, c + 1));
  const onPointerDown = e => { dragStart.current = e.clientX ?? e.touches?.[0]?.clientX; setDragging(true); };
  const onPointerUp = e => {
    if (!dragging || dragStart.current === null) return;
    const end = e.clientX ?? e.changedTouches?.[0]?.clientX;
    const diff = dragStart.current - end;
    if (diff > 50) next(); else if (diff < -50) prev();
    dragStart.current = null; setDragging(false);
  };
  return (
    <section id="work" className="py-28 px-6 bg-[#0d0d0b]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 reveal">
          <div>
            <div style={{ background: 'rgba(163,230,53,0.08)', color: 'rgba(163,230,53,0.7)', border: '1px solid rgba(163,230,53,0.15)', marginBottom: 20, display: 'inline-block' }} className="px-4 py-2 rounded-full font-mono text-[11px]">Selected work</div>
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.5rem)] text-white leading-[1.06]">Production systems.<br /><em className="not-italic text-[#a3e635]">Real results.</em></h2>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            <div className="flex gap-1.5">
              {projects.map((_, i) => <button key={i} onClick={() => setCurrent(i)} style={{ width: i === current ? 20 : 6, height: 6, borderRadius: 999, background: i === current ? '#a3e635' : 'rgba(255,255,255,0.15)', border: 'none', cursor: 'pointer', padding: 0, transition: 'all 0.3s' }} />)}
            </div>
            <div className="flex gap-2">
              <button onClick={prev} disabled={current === 0} className="w-10 h-10 rounded-xl border border-zinc-800 flex items-center justify-center transition-all duration-200 hover:border-zinc-600 hover:bg-zinc-900 disabled:opacity-25 disabled:cursor-not-allowed"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 5l-7 7 7 7" /></svg></button>
              <button onClick={next} disabled={current === projects.length - 1} className="w-10 h-10 rounded-xl border border-zinc-800 flex items-center justify-center transition-all duration-200 hover:border-zinc-600 hover:bg-zinc-900 disabled:opacity-25 disabled:cursor-not-allowed"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg></button>
            </div>
            <span className="font-mono text-[11px] text-zinc-600">{String(current + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl cursor-grab active:cursor-grabbing select-none" onMouseDown={onPointerDown} onMouseUp={onPointerUp} onMouseLeave={() => { setDragging(false); dragStart.current = null; }} onTouchStart={onPointerDown} onTouchEnd={onPointerUp}>
          <div className="flex" style={{ transform: `translateX(-${current * 100}%)`, transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1)' }}>
            {projects.map((p, i) => (
              <div key={i} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-zinc-800 rounded-2xl overflow-hidden">
                  <div className="relative group overflow-hidden" style={{ minHeight: 280 }}>
                    <img src={p.image} alt={p.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 ease-out" />
                    <div className="absolute inset-0 opacity-20 group-hover:opacity-0 transition-opacity duration-500" style={{ background: `linear-gradient(140deg, ${p.bg} 0%, transparent 60%)` }} />
                    <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-sm font-mono text-[10px] font-bold text-[#a3e635] border border-[#a3e635]/25 tracking-wide">{p.metric}</div>
                    <div className="absolute bottom-5 left-5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm font-mono text-[9.5px] text-white/70 border border-white/10">{p.label}</div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-400 ease-out pointer-events-none">
                      <span className="font-mono text-[11px] font-bold text-white tracking-widest uppercase bg-black/50 px-4 py-2 rounded-full border border-white/20 backdrop-blur-sm">View Case Study →</span>
                    </div>
                  </div>
                  <div className="bg-zinc-900 p-8 md:p-10 flex flex-col justify-between">
                    <div>
                      <div className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest mb-4">{String(i + 1).padStart(2, '0')} of {String(projects.length).padStart(2, '0')}</div>
                      <h3 className="font-serif text-[clamp(1.6rem,3vw,2.2rem)] text-white leading-tight mb-4">{p.title}</h3>
                      <p className="font-sans text-[13.5px] text-zinc-400 leading-[1.8] mb-6">{p.desc}</p>
                    </div>
                    <div>
                      <div className="font-mono text-[9px] text-zinc-700 uppercase tracking-widest mb-3">Stack</div>
                      <div className="flex flex-wrap gap-2 mb-8">{p.stack.map(t => <span key={t} className="px-3 py-1 rounded-full font-mono text-[10px] text-zinc-400 border border-zinc-800 bg-zinc-950">{t}</span>)}</div>
                      <button onClick={() => onSelect(p.caseStudyId)} className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-[#a3e635] text-black font-sans font-semibold text-[12.5px] transition-all duration-200 hover:bg-[#b5f059] hover:scale-[1.02] active:scale-95">
                        View Case Study <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M7 7h10v10" /></svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
