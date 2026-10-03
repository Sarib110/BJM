import { useEffect } from 'react';
import useReveal from '../../hooks/useReveal';
import SeverityBadge from '../ui/SeverityBadge';

const ArrowLeft = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 5l-7 7 7 7" /></svg>);
const ArrowRight = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>);

const CaseStudyPage = ({ cs, onBack }) => {
  useReveal();
  useEffect(() => { window.scrollTo(0, 0); }, [cs.id]);
  return (
    <div className="page-enter" style={{ background: '#070b12', minHeight: '100vh' }}>
      <nav className="cs-nav" style={{ position: 'sticky', top: 0, zIndex: 50, padding: '14px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <button className="back-btn text-[#fefcfd]" onClick={onBack}><ArrowLeft /> Back to Work</button>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span className="tag-pill" style={{ background: 'rgba(163,230,53,0.08)', color: 'rgba(163,230,53,0.7)', border: '1px solid rgba(163,230,53,0.15)' }}>{cs.label}</span>
            <span style={{ fontFamily: 'Space Mono,monospace', fontSize: 10, color: 'rgba(255,255,255,0.2)' }}>CASE_ID: {cs.id.toUpperCase().replace('-', '_')}</span>
          </div>
        </div>
      </nav>
      <div style={{ padding: '80px 24px 64px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ marginBottom: 16 }}><span className="tag-dark" style={{ marginRight: 10 }}>{cs.label}</span></div>
          <h1 style={{ fontFamily: 'DM Serif Display,serif', fontSize: 'clamp(2.8rem,6vw,5rem)', color: '#fff', lineHeight: 0.95, letterSpacing: '-0.02em', marginBottom: 20 }}>{cs.tagline}</h1>
          <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.55)', maxWidth: 540, lineHeight: 1.75, marginBottom: 40 }}>{cs.summary}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 48 }}>{cs.stack.map(t => <span key={t} className="tag-neutral">{t}</span>)}</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12, maxWidth: 700 }}>
            {cs.metrics.map((m, i) => (
              <div key={i} className="metric-card">
                <div style={{ fontFamily: 'Space Mono,monospace', fontSize: 22, fontWeight: 700, color: '#a3e635', lineHeight: 1, marginBottom: 6 }}>{m.value}</div>
                <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        {/* Context */}
        <div className="cs-section reveal">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}>
            <div>
              <span className="tag-dark" style={{ marginBottom: 16, display: 'inline-block' }}>Business Context</span>
              <h2 style={{ fontFamily: 'DM Serif Display,serif', fontSize: 'clamp(1.6rem,3vw,2.4rem)', color: '#fff', lineHeight: 1.1, marginBottom: 20 }}>{cs.context.heading}</h2>
              <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: 13.5, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>{cs.context.body}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, paddingTop: 48 }}>
              {cs.context.stats.map((s, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: '18px 22px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontFamily: 'DM Sans,sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>{s.l}</span>
                  <span style={{ fontFamily: 'Space Mono,monospace', fontSize: 18, fontWeight: 700, color: '#fff' }}>{s.v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Problem */}
        <div className="cs-section reveal">
          <span className="tag-dark" style={{ marginBottom: 16, display: 'inline-block' }}>Problem Analysis</span>
          <h2 style={{ fontFamily: 'DM Serif Display,serif', fontSize: 'clamp(1.6rem,3vw,2.4rem)', color: '#fff', lineHeight: 1.1, marginBottom: 32 }}>{cs.problem.heading}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
            {cs.problem.points.map((p, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: 24, transition: 'border-color 0.25s' }} onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.13)'} onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                  <span style={{ fontFamily: 'Space Mono,monospace', fontSize: 10, color: 'rgba(255,255,255,0.25)' }}>0{i + 1}</span>
                  <SeverityBadge level={p.severity} />
                </div>
                <h3 style={{ fontFamily: 'DM Sans,sans-serif', fontWeight: 600, fontSize: 14, color: '#fff', marginBottom: 10 }}>{p.title}</h3>
                <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: 12.5, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Solution */}
        <div className="cs-section reveal">
          <span className="tag-dark" style={{ marginBottom: 16, display: 'inline-block' }}>Solution Architecture</span>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}>
            <div>
              <h2 style={{ fontFamily: 'DM Serif Display,serif', fontSize: 'clamp(1.6rem,3vw,2.4rem)', color: '#fff', lineHeight: 1.1, marginBottom: 16 }}>{cs.solution.heading}</h2>
              <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: 13.5, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>{cs.solution.desc}</p>
            </div>
            <div>
              {cs.solution.steps.map((s, i) => (
                <div key={i} className="process-step">
                  <span style={{ fontFamily: 'Space Mono,monospace', fontSize: 28, fontWeight: 700, color: 'rgba(163,230,53,0.15)', lineHeight: 1, flexShrink: 0, width: 40 }}>{s.n}</span>
                  <div>
                    <h3 style={{ fontFamily: 'DM Sans,sans-serif', fontWeight: 600, fontSize: 14, color: '#fff', marginBottom: 6 }}>{s.title}</h3>
                    <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: 12.5, color: 'rgba(255,255,255,0.45)', lineHeight: 1.72 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Comparison */}
        <div className="cs-section reveal">
          <span style={{ fontFamily: 'Space Mono,monospace', fontSize: 10, color: 'rgba(163,230,53,0.7)', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '3px 10px', borderRadius: 999, background: 'rgba(163,230,53,0.08)', border: '1px solid rgba(163,230,53,0.15)', display: 'inline-block', marginBottom: 16 }}>Performance Analysis</span>
          <h2 style={{ fontFamily: 'DM Serif Display,serif', fontSize: 'clamp(1.6rem,3vw,2.4rem)', color: '#fff', lineHeight: 1.1, marginBottom: 32 }}>Before vs. After</h2>
          <div style={{ border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              {['Metric', 'Before', 'After', 'Delta'].map((h, i) => (
                <div key={i} style={{ padding: '12px 20px', fontFamily: 'Space Mono,monospace', fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.08em', textAlign: i === 0 ? 'left' : 'center' }}>{h}</div>
              ))}
            </div>
            {cs.comparison.map((row, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', borderBottom: i < cs.comparison.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.015)', transition: 'background 0.2s' }} onMouseEnter={e => e.currentTarget.style.background = 'rgba(163,230,53,0.04)'} onMouseLeave={e => e.currentTarget.style.background = i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.015)'}>
                <div style={{ padding: '14px 20px', fontFamily: 'DM Sans,sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>{row.metric}</div>
                <div style={{ padding: '14px 20px', fontFamily: 'Space Mono,monospace', fontSize: 12, color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>{row.before}</div>
                <div style={{ padding: '14px 20px', fontFamily: 'Space Mono,monospace', fontSize: 12, color: '#a3e635', fontWeight: 700, textAlign: 'center' }}>{row.after}</div>
                <div style={{ padding: '14px 20px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ background: 'rgba(163,230,53,0.08)', color: 'rgba(163,230,53,0.75)', fontFamily: 'Space Mono,monospace', fontSize: 10, padding: '3px 10px', borderRadius: 999, border: '1px solid rgba(163,230,53,0.18)', whiteSpace: 'nowrap' }}>{row.delta}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Results */}
        <div className="cs-section reveal">
          <span className="tag-dark" style={{ marginBottom: 16, display: 'inline-block' }}>Results</span>
          <h2 style={{ fontFamily: 'DM Serif Display,serif', fontSize: 'clamp(1.6rem,3vw,2.4rem)', color: '#fff', lineHeight: 1.1, marginBottom: 32 }}>The Numbers Don't Lie.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, marginBottom: 32 }}>
            {cs.results.map((r, i) => (
              <div key={i} style={{ background: 'rgba(163,230,53,0.04)', border: '1px solid rgba(163,230,53,0.12)', borderRadius: 16, padding: '28px 20px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Space Mono,monospace', fontSize: 28, fontWeight: 700, color: '#a3e635', lineHeight: 1, marginBottom: 8 }}>{r.value}</div>
                <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.45)' }}>{r.label}</div>
              </div>
            ))}
          </div>
          <div style={{ background: 'rgba(163,230,53,0.06)', border: '1px solid rgba(163,230,53,0.2)', borderRadius: 16, padding: '24px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontFamily: 'Space Mono,monospace', fontSize: 10, color: 'rgba(163,230,53,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>Total ROI</div>
              <div style={{ fontFamily: 'DM Serif Display,serif', fontSize: 48, color: '#a3e635', lineHeight: 1 }}>{cs.roi}</div>
              <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 4 }}>{cs.roiPeriod}</div>
            </div>
            <a href="mailto:hello@veloq.tech" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 24px', background: '#a3e635', color: '#000', fontFamily: 'DM Sans,sans-serif', fontWeight: 600, fontSize: 13, borderRadius: 12, textDecoration: 'none', transition: 'background 0.2s' }} onMouseEnter={e => e.currentTarget.style.background = '#b5f059'} onMouseLeave={e => e.currentTarget.style.background = '#a3e635'}>
              Get Similar Results <ArrowRight />
            </a>
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '32px 24px', marginTop: 80 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <button className="back-btn text-[#fefcfd]" onClick={onBack}><ArrowLeft /> All Case Studies</button>
          <span style={{ fontFamily: 'Space Mono,monospace', fontSize: 10, color: 'rgba(255,255,255,0.2)' }}>bjm © 2026</span>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyPage;
