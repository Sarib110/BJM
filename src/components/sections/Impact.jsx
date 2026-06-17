import { useState, useEffect } from 'react';
import Counter from '../ui/Counter';

const LinkedInIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Stars = () => (
  <div style={{ display: 'flex', gap: 3 }}>
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#a3e635" stroke="none">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ))}
  </div>
);

const ClientCard = ({ t, isActive, onClick, extraClass }) => (
  <div
    onClick={onClick}
    className={extraClass}
    style={{
      position: 'relative',
      borderRadius: 20,
      overflow: 'hidden',
      cursor: 'pointer',
      flex: isActive ? 1.45 : 1,
      minWidth: 0,
      height: '100%',
      transition: 'flex 0.55s cubic-bezier(0.4, 0, 0.2, 1)',
    }}
  >
    <img
      src={t.img}
      alt={t.name}
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        objectFit: 'cover', objectPosition: 'center top',
      }}
    />

    <div style={{
      position: 'absolute', inset: 0,
      background: isActive
        ? 'linear-gradient(160deg, rgba(0,0,0,0.42) 0%, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0.9) 100%)'
        : 'linear-gradient(to bottom, transparent 25%, rgba(0,0,0,0.92) 100%)',
      transition: 'background 0.55s ease',
    }} />

    <div style={{ position: 'absolute', inset: 0, padding: '22px 20px', display: 'flex', flexDirection: 'column' }}>
      {isActive && (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Stars />
          <p style={{
            fontFamily: 'sans-serif',
            fontSize: 12.5,
            color: 'rgba(255,255,255,0.88)',
            lineHeight: 1.78,
            marginTop: 14,
            flex: 1,
          }}>
            &ldquo;{t.q}&rdquo;
          </p>
        </div>
      )}

      <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 8 }}>
        <div style={{ minWidth: 0 }}>
          <div style={{
            fontFamily: 'sans-serif',
            fontSize: isActive ? 16 : 14,
            fontWeight: 700,
            color: '#fff',
            lineHeight: 1.2,
            transition: 'font-size 0.3s',
            whiteSpace: isActive ? 'normal' : 'nowrap',
            overflow: 'hidden',
            textOverflow: isActive ? 'unset' : 'ellipsis',
          }}>{t.name}</div>
          <div style={{
            fontFamily: 'Space Mono, monospace',
            fontSize: 10,
            color: 'rgba(255,255,255,0.5)',
            marginTop: 4,
            whiteSpace: isActive ? 'normal' : 'nowrap',
            overflow: 'hidden',
            textOverflow: isActive ? 'unset' : 'ellipsis',
          }}>{t.role} · {t.co}</div>
        </div>
        <a
          href={t.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          onClick={e => e.stopPropagation()}
          style={{ color: 'rgba(255,255,255,0.3)', flexShrink: 0, transition: 'color 0.2s', lineHeight: 0 }}
          onMouseEnter={e => e.currentTarget.style.color = '#a3e635'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'}
          title="View on LinkedIn"
        >
          <LinkedInIcon />
        </a>
      </div>
    </div>
  </div>
);

const Impact = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const handleSelectCard = (i) => {
    setActiveCard(i);
    setIsAutoPlaying(false);
  };

  const tms = [
    {
      q: "Veloq doesn't just build software — they engineer velocity. Their precision allowed us to execute at a speed we thought was impossible for our scale.",
      name: 'Stephen Chen',
      role: 'CEO',
      co: 'Phunware',
      img: '/clients/stephen.png',
      linkedin: 'https://www.linkedin.com/in/stephenchen/',
    },
    {
      q: "The ability to scale our core operations globally without adding a single staff member has fundamentally altered our unit economics.",
      name: 'Tanzim Siddiqui',
      role: 'Founder',
      co: 'AutoScale Agents',
      img: '/clients/tanzim.png',
      linkedin: 'https://www.linkedin.com/in/tanzimsiddiqui/',
    },
    {
      q: "When dealing with enterprise-grade deployments, trust is everything. Veloq delivers premium integration with absolute data security guarantees.",
      name: 'Khalil Shawareb',
      role: 'Executive',
      co: 'Diyar Middle East',
      img: '/clients/khalil.png',
      linkedin: 'https://www.linkedin.com/in/khalil-shawareb-3a3a43112/',
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveCard(prev => (prev + 1) % tms.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isAutoPlaying, tms.length]);

  return (
    <section id="impact" className="py-28 px-6 bg-[#0d0d0b] text-white">
      <div className="max-w-6xl mx-auto">

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-20 reveal">
          {[['$2.3M', 'Savings Generated', 'Diyar United'], ['340%', 'Conversion Increase', 'AutoScale Agents'], ['10×', 'Velocity Multiplier', 'Phunware']].map(([v, l, sub], i) => (
            <div key={i} className="border border-zinc-800 rounded-2xl p-7 text-center hover:border-zinc-700 transition-colors duration-300">
              <div className="font-mono text-3xl font-bold text-[#a3e635] mb-2"><Counter target={v} /></div>
              <div className="font-sans text-[13px] text-white font-medium mb-1">{l}</div>
              <div className="font-mono text-[10px] text-zinc-600">{sub}</div>
            </div>
          ))}
        </div>

        {/* Heading + Cards */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">

          {/* Left: heading */}
          <div className="lg:w-[300px] flex-shrink-0 reveal">
            <div style={{ background: 'rgba(163,230,53,0.08)', color: 'rgba(163,230,53,0.7)', border: '1px solid rgba(163,230,53,0.15)', marginBottom: 20, display: 'inline-block' }} className="px-4 py-2 rounded-full font-mono text-[11px]">
              Impact realized
            </div>
            <h2 className="font-serif text-[clamp(1.9rem,3.5vw,2.8rem)] text-white leading-[1.08] mb-4">
              What our<br /><em className="not-italic text-[#a3e635]">clients say.</em>
            </h2>
            <p className="font-sans text-[13px] text-zinc-500 leading-[1.75] mb-8">
              See how our work has made an impact for businesses around the world.
            </p>

            {/* Dot nav */}
            <div style={{ display: 'flex', gap: 8 }}>
              {tms.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleSelectCard(i)}
                  style={{
                    width: i === activeCard ? 28 : 8,
                    height: 8,
                    borderRadius: 4,
                    background: i === activeCard ? '#a3e635' : 'rgba(255,255,255,0.15)',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'width 0.4s ease, background 0.3s ease',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right: photo cards */}
          <div className="flex-1 min-w-0 w-full">
            {/* Mobile: single active card */}
            <div className="block lg:hidden" style={{ height: 380, borderRadius: 20, overflow: 'hidden', position: 'relative', width: '100%' }}>
              <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: 20, overflow: 'hidden' }}>
                <img
                  src={tms[activeCard].img}
                  alt={tms[activeCard].name}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(0,0,0,0.42) 0%, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0.9) 100%)' }} />
                <div style={{ position: 'absolute', inset: 0, padding: '22px 20px', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <Stars />
                    <p style={{ fontFamily: 'sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.88)', lineHeight: 1.78, marginTop: 14, flex: 1 }}>
                      &ldquo;{tms[activeCard].q}&rdquo;
                    </p>
                  </div>
                  <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 8 }}>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontFamily: 'sans-serif', fontSize: 16, fontWeight: 700, color: '#fff', lineHeight: 1.2 }}>{tms[activeCard].name}</div>
                      <div style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: 'rgba(255,255,255,0.5)', marginTop: 4 }}>{tms[activeCard].role} · {tms[activeCard].co}</div>
                    </div>
                    <a href={tms[activeCard].linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.3)', flexShrink: 0, lineHeight: 0 }}>
                      <LinkedInIcon />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Desktop: expanding flex cards */}
            <div className="hidden lg:flex" style={{ gap: 10, height: 470 }}>
              {tms.map((t, i) => (
                <ClientCard
                  key={i}
                  t={t}
                  isActive={i === activeCard}
                  onClick={() => handleSelectCard(i)}
                  extraClass=""
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Impact;
