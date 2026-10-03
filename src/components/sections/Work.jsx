import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../../data/projects';
import { withBase } from '../../utils/withBase';

const ArrowIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17 17 7M7 7h10v10" />
  </svg>
);

const Work = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setActive(prev => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(timerRef.current);
  }, [paused]);

  const select = (i) => {
    clearInterval(timerRef.current);
    setActive(i);
    setPaused(false);
  };

  const p = projects[active];

  return (
    <section
      id="work"
      className="py-28 px-6 bg-[#0d0d0b]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12 reveal">
          <div style={{ background: 'rgba(163,230,53,0.08)', color: 'rgba(163,230,53,0.7)', border: '1px solid rgba(163,230,53,0.15)', marginBottom: 20, display: 'inline-block' }} className="px-4 py-2 rounded-full font-mono text-[11px]">
            Selected work
          </div>
          <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.5rem)] text-white leading-[1.06]">
            Revenue outcomes.<br /><em className="not-italic text-[#a3e635]">Real results.</em>
          </h2>
        </div>

        {/* Mobile: horizontal pill nav */}
        <div className="flex lg:hidden gap-2 overflow-x-auto pb-4 mb-6" style={{ scrollbarWidth: 'none' }}>
          {projects.map((proj, i) => (
            <button
              key={i}
              onClick={() => select(i)}
              style={{
                flexShrink: 0,
                padding: '6px 14px',
                borderRadius: 999,
                border: `1px solid ${i === active ? '#a3e635' : 'rgba(255,255,255,0.1)'}`,
                background: i === active ? 'rgba(163,230,53,0.1)' : 'transparent',
                color: i === active ? '#a3e635' : 'rgba(255,255,255,0.4)',
                fontFamily: 'Space Mono, monospace',
                fontSize: 10,
                cursor: 'pointer',
                transition: 'all 0.2s',
                whiteSpace: 'nowrap',
              }}
            >
              {proj.label}
            </button>
          ))}
        </div>

        {/* Main two-panel layout */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 reveal">

          {/* Left: project list (desktop only) */}
          <div className="hidden lg:flex flex-col gap-0 flex-shrink-0" style={{ width: 252 }}>
            {projects.map((proj, i) => (
              <button
                key={i}
                onClick={() => select(i)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: 3,
                  padding: '13px 16px',
                  borderLeft: `2px solid ${i === active ? '#a3e635' : 'rgba(255,255,255,0.07)'}`,
                  background: i === active ? 'rgba(163,230,53,0.05)' : 'transparent',
                  border: 'none',
                  outline: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'background 0.2s',
                  position: 'relative',
                }}
              >
                {/* left accent border via pseudo — achieved with absolute div */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, bottom: 0, width: 2,
                  background: i === active ? '#a3e635' : 'rgba(255,255,255,0.07)',
                  transition: 'background 0.2s',
                }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                  <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 9, color: i === active ? '#a3e635' : 'rgba(255,255,255,0.2)', letterSpacing: '0.06em' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 9, color: i === active ? 'rgba(163,230,53,0.55)' : 'rgba(255,255,255,0.18)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    {proj.label}
                  </span>
                </div>
                <span style={{ fontFamily: 'sans-serif', fontSize: 13, fontWeight: 600, color: i === active ? '#fff' : 'rgba(255,255,255,0.38)', lineHeight: 1.3, transition: 'color 0.2s' }}>
                  {proj.title}
                </span>
                <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 9.5, color: i === active ? 'rgba(163,230,53,0.65)' : 'rgba(255,255,255,0.15)', marginTop: 1 }}>
                  {proj.metric}
                </span>
              </button>
            ))}
          </div>

          {/* Right: showcase */}
          <div className="flex-1 min-w-0">

            {/* Image area */}
            <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', height: 390 }}>

              {/* Cross-fade images */}
              {projects.map((proj, i) => (
                <img
                  key={proj.caseStudyId}
                  src={withBase(proj.image)}
                  alt={proj.title}
                  style={{
                    position: 'absolute', inset: 0,
                    width: '100%', height: '100%',
                    objectFit: 'cover', objectPosition: 'center',
                    opacity: i === active ? 1 : 0,
                    transition: 'opacity 0.6s ease',
                  }}
                />
              ))}

              {/* Gradient overlay */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.68) 100%)' }} />

              {/* Sector badge — top right */}
              <div style={{
                position: 'absolute', top: 18, right: 18,
                padding: '5px 12px', borderRadius: 999,
                background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)',
                fontFamily: 'Space Mono, monospace', fontSize: 9.5,
                color: 'rgba(255,255,255,0.55)', border: '1px solid rgba(255,255,255,0.1)',
                letterSpacing: '0.08em', textTransform: 'uppercase',
              }}>
                {p.label}
              </div>

              {/* Giant metric — bottom left */}
              <div style={{ position: 'absolute', bottom: 24, left: 26 }}>
                <div style={{
                  fontFamily: 'Space Mono, monospace',
                  fontSize: 'clamp(46px, 6.5vw, 72px)',
                  fontWeight: 700,
                  color: '#a3e635',
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                }}>
                  {p.metric.split(' ')[0]}
                </div>
                <div style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: 'rgba(255,255,255,0.45)', marginTop: 6, letterSpacing: '0.04em' }}>
                  {p.metric.split(' ').slice(1).join(' ')}
                </div>
              </div>

              {/* Progress bar */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 2, background: 'rgba(255,255,255,0.06)' }}>
                <div
                  key={`${active}-${paused}`}
                  style={{
                    height: '100%',
                    background: '#a3e635',
                    width: paused ? '100%' : '0%',
                    animation: paused ? 'none' : 'work-progress 5s linear forwards',
                  }}
                />
              </div>
            </div>

            {/* Info row below image */}
            <div className="mt-6 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5">
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3 style={{ fontFamily: 'serif', fontSize: 'clamp(1.25rem,2.5vw,1.6rem)', fontWeight: 600, color: '#fff', lineHeight: 1.25, marginBottom: 7 }}>{p.title}</h3>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.42)', lineHeight: 1.8, maxWidth: 500 }}>{p.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 13 }}>
                  {p.stack.map(t => (
                    <span key={t} style={{ padding: '3px 10px', borderRadius: 999, fontFamily: 'Space Mono, monospace', fontSize: 9.5, color: 'rgba(255,255,255,0.3)', border: '1px solid rgba(255,255,255,0.09)', background: 'rgba(255,255,255,0.03)' }}>{t}</span>
                  ))}
                </div>
              </div>
              <button
                onClick={() => navigate(`/work/${p.caseStudyId}`)}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 7,
                  padding: '10px 18px', borderRadius: 10,
                  background: 'rgba(163,230,53,0.08)',
                  border: '1px solid rgba(163,230,53,0.2)',
                  color: '#a3e635',
                  fontFamily: 'Space Mono, monospace', fontSize: 10.5,
                  cursor: 'pointer', flexShrink: 0,
                  transition: 'background 0.2s, border-color 0.2s',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(163,230,53,0.14)'; e.currentTarget.style.borderColor = 'rgba(163,230,53,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(163,230,53,0.08)'; e.currentTarget.style.borderColor = 'rgba(163,230,53,0.2)'; }}
              >
                View case study <ArrowIcon />
              </button>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @keyframes work-progress {
          from { width: 0% }
          to   { width: 100% }
        }
      `}</style>
    </section>
  );
};

export default Work;
