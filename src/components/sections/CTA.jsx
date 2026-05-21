import Ic from '../ui/Icon';

const CTA = () => (
  <section className="py-28 px-6 bg-[#f5f4f0]">
    <div className="max-w-4xl mx-auto reveal">
      <div className="glass-card rounded-3xl p-14 md:p-20 relative overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl opacity-55 pointer-events-none" style={{ background: 'radial-gradient(circle, #d9f99d 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full blur-3xl opacity-60 pointer-events-none" style={{ background: 'radial-gradient(circle, #e8f5d0 0%, transparent 70%)' }} />
        <div className="relative">
          <div className="inline-flex items-center gap-2 mb-7 px-4 py-2 rounded-full bg-[#f0fad3] border border-[#c8f57a] font-mono text-[11px] text-[#4a7a10]">
            <span className="lime-dot" style={{ width: 6, height: 6 }} /> Currently accepting new clients
          </div>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3.4rem)] text-black leading-[1.06] mb-6">Ready to stop managing<br /><em className="not-italic text-[#a3e635]">friction?</em></h2>
          <p className="font-sans text-[13.5px] text-zinc-500 max-w-lg mx-auto mb-10 leading-[1.8]">Let's build an intelligent system that works while you sleep. Book a free 30-minute strategy call and we'll map your automation opportunity.</p>
          <div className="flex flex-wrap gap-3.5 justify-center">
            <button onClick={() => document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-black text-white font-sans font-medium text-[13px] hover:bg-zinc-800 transition-all duration-200 hover:scale-[1.03] active:scale-95 shadow-md btn-shine">
              Book Strategy Call <Ic n="arrow_r" size={13} color="white" />
            </button>
            <a href="https://www.linkedin.com/company/veloqq" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white border border-zinc-200 text-black font-sans font-medium text-[13px] hover:border-zinc-400 transition-all duration-200 hover:scale-[1.03] active:scale-95">
              <Ic n="linkedin" size={13} color="#333" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CTA;
