import { useEffect, useRef } from 'react';
import Ic from '../ui/Icon';

const Hero = () => {
  const layer0Ref = useRef(null);
  const layer1Ref = useRef(null);
  const layer2Ref = useRef(null);
  const layer3Ref = useRef(null);
  const layer4Ref = useRef(null);
  const scanRef = useRef(null);
  const mouseGlowRef = useRef(null);
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const fn = () => {
      const y = window.scrollY;
      if (layer0Ref.current) layer0Ref.current.style.transform = `translateY(${y * 0.08}px)`;
      if (layer1Ref.current) layer1Ref.current.style.transform = `translateY(${y * 0.18}px)`;
      if (layer2Ref.current) layer2Ref.current.style.transform = `translateY(${y * 0.28}px)`;
      if (layer3Ref.current) layer3Ref.current.style.transform = `translateY(${y * 0.40}px)`;
      if (layer4Ref.current) layer4Ref.current.style.transform = `translateY(${y * 0.55}px)`;
      if (scanRef.current) scanRef.current.style.transform = `translateY(${y * 0.22}px)`;
    };
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const fn = (e) => {
      const rect = hero.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      if (mouseGlowRef.current) { mouseGlowRef.current.style.left = mx + 'px'; mouseGlowRef.current.style.top = my + 'px'; }
      if (contentRef.current) { const rx = ((e.clientY - cy) / (rect.height / 2)) * -2.5; const ry = ((e.clientX - cx) / (rect.width / 2)) * 2.5; contentRef.current.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg)`; }
      if (layer3Ref.current) { const dx = (e.clientX - cx) / rect.width; const dy = (e.clientY - cy) / rect.height; layer3Ref.current.style.transform = `translate(${dx * 14}px, ${dy * 10}px) translateY(${window.scrollY * 0.40}px)`; }
      if (layer4Ref.current) { const dx = (e.clientX - cx) / rect.width; const dy = (e.clientY - cy) / rect.height; layer4Ref.current.style.transform = `translate(${dx * 22}px, ${dy * 16}px) translateY(${window.scrollY * 0.55}px)`; }
    };
    const reset = () => { if (contentRef.current) contentRef.current.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)'; };
    hero.addEventListener('mousemove', fn);
    hero.addEventListener('mouseleave', reset);
    return () => { hero.removeEventListener('mousemove', fn); hero.removeEventListener('mouseleave', reset); };
  }, []);


  useEffect(() => {
    const els = document.querySelectorAll('.hero-reveal');
    const t = setTimeout(() => els.forEach(el => el.classList.add('in')), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-6 px-6">
      <div ref={layer0Ref} className="parallax-layer-0 pointer-events-none"><div className="grid-lines" style={{ inset: 0, position: 'absolute' }} /></div>
      <div ref={layer1Ref} className="parallax-layer-1">
        <div className="absolute" style={{ top: '10%', left: '4%', width: 380, height: 380, borderRadius: '50%', background: 'radial-gradient(circle, rgba(204,251,128,0.28) 0%, transparent 68%)' }} />
        <div className="absolute" style={{ bottom: '8%', right: '3%', width: 460, height: 460, borderRadius: '50%', background: 'radial-gradient(circle, rgba(220,220,210,0.32) 0%, transparent 70%)' }} />
        <div className="geo-ring-2 ring-rotate" style={{ width: 520, height: 520, top: '50%', left: '50%', marginTop: -260, marginLeft: -260, opacity: 0.6 }} />
      </div>
      <div ref={layer2Ref} className="parallax-layer-2">
        <div className="absolute float-a" style={{ top: '22%', right: '12%', width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(163,230,53,0.14) 0%, transparent 70%)' }} />
        <div className="absolute float-b" style={{ bottom: '22%', left: '14%', width: 160, height: 160, borderRadius: '50%', background: 'radial-gradient(circle, rgba(163,230,53,0.10) 0%, transparent 70%)' }} />
        <div className="geo-ring ring-rotate-rev" style={{ width: 340, height: 340, top: '50%', left: '50%', marginTop: -170, marginLeft: -170 }} />
        <div className="geo-ring" style={{ width: 680, height: 680, top: '50%', left: '50%', marginTop: -340, marginLeft: -340, borderColor: 'rgba(163,230,53,0.07)' }} />
      </div>
      <div ref={layer3Ref} className="parallax-layer-3">
        <div className="geo-cross fade-pulse" style={{ top: '18%', left: '8%', width: 12, height: 12 }} />
        <div className="geo-cross fade-pulse-2" style={{ bottom: '28%', right: '10%', width: 12, height: 12 }} />
        <div className="geo-cross fade-pulse-3" style={{ top: '55%', right: '18%', width: 8, height: 8 }} />
        <div className="fade-pulse absolute" style={{ top: '32%', left: '15%', width: 5, height: 5, background: 'rgba(163,230,53,0.5)', borderRadius: 1 }} />
        <div className="fade-pulse-3 absolute" style={{ bottom: '35%', right: '20%', width: 4, height: 4, background: 'rgba(163,230,53,0.4)', borderRadius: 1 }} />
        <svg className="absolute fade-pulse-2" style={{ top: '14%', right: '6%', width: 80, height: 80, opacity: 0.18 }} viewBox="0 0 80 80" fill="none"><path d="M10 70 Q40 10 70 40" stroke="#a3e635" strokeWidth="1" strokeDasharray="4 5" /></svg>
        <svg className="absolute fade-pulse" style={{ bottom: '16%', left: '6%', width: 100, height: 60, opacity: 0.14 }} viewBox="0 0 100 60" fill="none"><path d="M5 55 Q50 5 95 30" stroke="#111" strokeWidth="0.8" strokeDasharray="3 4" /></svg>
      </div>
      <div ref={layer4Ref} className="parallax-layer-4">
        <div className="absolute fade-pulse" style={{ top: '28%', left: '22%', width: 6, height: 6, borderRadius: '50%', background: 'rgba(163,230,53,0.55)' }} />
        <div className="absolute fade-pulse-2" style={{ top: '62%', left: '28%', width: 4, height: 4, borderRadius: '50%', background: 'rgba(163,230,53,0.35)' }} />
        <div className="absolute fade-pulse-3" style={{ top: '38%', right: '24%', width: 5, height: 5, borderRadius: '50%', background: 'rgba(163,230,53,0.45)' }} />
        <div className="absolute fade-pulse" style={{ bottom: '30%', right: '30%', width: 7, height: 7, borderRadius: '50%', background: 'rgba(0,0,0,0.08)' }} />
        <div className="absolute fade-pulse-2" style={{ top: '20%', right: '38%', width: 3, height: 3, borderRadius: '50%', background: 'rgba(163,230,53,0.6)' }} />
      </div>
      <div ref={scanRef} className="grid-scanline" />
      <div id="hero-mouse-glow" ref={mouseGlowRef} />
      <div className="depth-vignette" />
      <div ref={contentRef} className="hero-content max-w-5xl mx-auto text-center w-full" style={{ transition: 'transform 0.45s cubic-bezier(0.16,1,0.3,1)', willChange: 'transform' }}>
        <h1 className="hero-reveal hr-d2 font-serif text-[clamp(3rem,7.2vw,6rem)] leading-[0.93] tracking-tight text-black mb-7 hero-headline">
          We don't build<br /><em className="not-italic text-[#a3e635]">tools</em>. We build<br />
          <span className="relative inline-block">workforces<em className="not-italic text-[#a3e635]">.</em>
            <svg className="absolute -bottom-2 left-0 w-full" height="5" viewBox="0 0 400 5" preserveAspectRatio="none" fill="none"><path d="M0 2.5 Q100 0 200 2.5 Q300 5 400 2.5" stroke="#a3e635" strokeWidth="2.5" strokeLinecap="round" /></svg>
          </span>
        </h1>
        <p className="hero-reveal hr-d3 font-sans text-[14.5px] text-zinc-500 max-w-xl mx-auto mt-6 mb-8 leading-[1.8]">
          We engineer AI that replaces headcount. Our agentic systems execute full business roles without supervision, scaling operations across logistics, healthcare, construction, and energy. No templates. No wrappers. <strong className="font-semibold text-black">Purpose-built for your business.</strong>
        </p>
        <div className="hero-reveal hr-d4 flex flex-wrap gap-3 justify-center mb-6">
          <button onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-black text-white font-sans font-medium text-sm hover:bg-zinc-800 transition-all duration-200 hover:scale-[1.03] active:scale-95 shadow-md btn-shine">
            View Our Work <Ic n="arrow_r" size={14} color="white" />
          </button>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white border border-zinc-200 text-black font-sans font-medium text-sm hover:border-zinc-400 transition-all duration-200 hover:scale-[1.03] active:scale-95">
            Book a Strategy Call
          </button>
        </div>
      </div>
      <div className="hero-reveal hr-d5 w-full mt-6 text-center">
        <p className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest mb-5">Trusted by</p>
        <div className="mq-wrap">
          <div className="mq-track" style={{ animationDuration: '18s' }}>
            {[
              { src: '/assets/logos/autoscale.png', alt: 'AutoScale' },
              { src: '/assets/logos/diyar.png', alt: 'Diyar' },
              { src: '/assets/logos/ezmd.webp', alt: 'EZMD' },
              { src: '/assets/logos/phunware.webp', alt: 'Phunware' },
              { src: '/assets/logos/blackpine.png', alt: 'Blackpine', darkBg: true },
              { src: '/assets/logos/choicesflooringmackay.webp', alt: 'Choices Flooring Mackay' },
              { src: '/assets/logos/trueclaim.avif', alt: 'TrueClaim', darkBg: true },
              { src: '/assets/logos/autoscale.png', alt: 'AutoScale2' },
              { src: '/assets/logos/diyar.png', alt: 'Diyar2' },
              { src: '/assets/logos/ezmd.webp', alt: 'EZMD2' },
              { src: '/assets/logos/phunware.webp', alt: 'Phunware2' },
              { src: '/assets/logos/blackpine.png', alt: 'Blackpine2' },
              { src: '/assets/logos/choicesflooringmackay.webp', alt: 'Choices Flooring Mackay2' },
              { src: '/assets/logos/trueclaim.avif', alt: 'TrueClaim2', darkBg: true },
            ].map(l => (
              <div key={l.alt} style={{ flexShrink: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0 52px' }}>
                <img
                  src={l.src}
                  alt={l.alt}
                  style={{ height: 40, width: 'auto', objectFit: 'contain', filter: 'grayscale(1)', opacity: 0.55, transition: 'filter 0.25s, opacity 0.25s', ...(l.darkBg && { background: '#333', borderRadius: 6, padding: '4px 8px' }) }}
                  onMouseEnter={e => { e.currentTarget.style.filter = 'grayscale(0)'; e.currentTarget.style.opacity = '1'; }}
                  onMouseLeave={e => { e.currentTarget.style.filter = 'grayscale(1)'; e.currentTarget.style.opacity = '0.55'; }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
