import { useEffect } from 'react';

const CALENDLY_URL = 'https://calendly.com/usmansafderktk/30min';

const CalendlySection = () => {
  useEffect(() => {
    if (!document.getElementById('calendly-script')) {
      const script = document.createElement('script');
      script.id = 'calendly-script';
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="book" style={{ background: '#0d0d0b', padding: '112px 24px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <span style={{ display: 'inline-block', fontFamily: 'Space Mono,monospace', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em', padding: '3px 12px', borderRadius: 999, background: 'rgba(163,230,53,0.08)', color: 'rgba(163,230,53,0.7)', border: '1px solid rgba(163,230,53,0.15)', marginBottom: 20 }}>Book a call</span>
        <h2 style={{ fontFamily: 'DM Serif Display,serif', fontSize: 'clamp(2.2rem,4.5vw,3.5rem)', color: '#fff', lineHeight: 1.06, marginBottom: 14 }}>30 minutes.<br /><em style={{ fontStyle: 'normal', color: '#a3e635' }}>Your automation roadmap.</em></h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 64, marginTop: 56, alignItems: 'start' }}>
          <div>
            <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: 13.5, color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, marginBottom: 36 }}>Pick a time that works for you. We'll map out exactly where AI can eliminate your biggest operational bottlenecks — no sales pitch, just engineering.</p>
            {[{ val: '30 min', lbl: 'Strategy call, completely free' }, { val: '3×', lbl: 'Average ROI delivered to clients' }, { val: '24h', lbl: 'Turnaround on proposals post-call' }].map(({ val, lbl }, i) => (
              <div key={i} style={{ padding: '20px 24px', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, marginBottom: 12 }}>
                <div style={{ fontFamily: 'Space Mono,monospace', fontSize: 24, fontWeight: 700, color: '#a3e635', lineHeight: 1, marginBottom: 6 }}>{val}</div>
                <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{lbl}</div>
              </div>
            ))}
            {[['Completely free, no obligation'], ['Walk away with a clear action plan'], ["Proposal within 24 hours if it's a fit"]].map(([text], i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 14 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a3e635" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span style={{ fontFamily: 'DM Sans,sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>{text}</span>
              </div>
            ))}
          </div>

          <div
            className="calendly-inline-widget"
            data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=0d0d0b&text_color=ffffff&primary_color=a3e635`}
            style={{ minWidth: 320, height: 700, borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}
          />
        </div>
      </div>
    </section>
  );
};

export default CalendlySection;
