import { useState, useEffect } from 'react';
import Counter from '../ui/Counter';
import { withBase } from '../../utils/withBase';

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
      src={withBase(t.img)}
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
          <span style={{ fontFamily: 'Space Mono,monospace', fontSize: 9.5, color: '#a3e635', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Service standard</span>
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
      q: 'Every submitted claim should be traceable from charge entry through clearinghouse acceptance, payer adjudication, payment posting, or a documented follow-up action.',
      name: 'Claim Visibility',
      role: 'Operational priority',
      co: 'Medical Billing',
      img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80',
    },
    {
      q: 'Rejections and denials require reason-specific action, filing-deadline awareness, supporting documentation, and feedback to the workflow that caused the issue.',
      name: 'Denial Accountability',
      role: 'Operational priority',
      co: 'Revenue Cycle',
      img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80',
    },
    {
      q: 'Practice leaders need reports that explain what was submitted, paid, rejected, denied, aged, or waiting on payer or practice action—not just a total balance.',
      name: 'Actionable Reporting',
      role: 'Operational priority',
      co: 'Practice Management',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
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
          {[['6', 'Core Billing Services', 'Focused or full RCM support'], ['4', 'Claim Control Stages', 'Prepare · submit · post · follow up'], ['1', 'Connected Workflow', 'From eligibility to insurance A/R']].map(([v, l, sub], i) => (
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
              Billing operations
            </div>
            <h2 className="font-serif text-[clamp(1.9rem,3.5vw,2.8rem)] text-white leading-[1.08] mb-4">
              What reliable<br /><em className="not-italic text-[#a3e635]">billing requires.</em>
            </h2>
            <p className="font-sans text-[13px] text-zinc-500 leading-[1.75] mb-8">
              BJ Medical Billing Service organizes the revenue cycle around visibility, timely action, and clear responsibility.
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
                  src={withBase(tms[activeCard].img)}
                  alt={tms[activeCard].name}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(0,0,0,0.42) 0%, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0.9) 100%)' }} />
                <div style={{ position: 'absolute', inset: 0, padding: '22px 20px', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontFamily: 'Space Mono,monospace', fontSize: 9.5, color: '#a3e635', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Service standard</span>
                    <p style={{ fontFamily: 'sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.88)', lineHeight: 1.78, marginTop: 14, flex: 1 }}>
                      &ldquo;{tms[activeCard].q}&rdquo;
                    </p>
                  </div>
                  <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 8 }}>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontFamily: 'sans-serif', fontSize: 16, fontWeight: 700, color: '#fff', lineHeight: 1.2 }}>{tms[activeCard].name}</div>
                      <div style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: 'rgba(255,255,255,0.5)', marginTop: 4 }}>{tms[activeCard].role} · {tms[activeCard].co}</div>
                    </div>
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
