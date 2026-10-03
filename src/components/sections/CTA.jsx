import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Ic from '../ui/Icon';

const EMAILJS_SERVICE_ID = 'service_7bmdg29';
const EMAILJS_TEMPLATE_ID = 'template_q8paqxr';
const EMAILJS_PUBLIC_KEY = '3S7CpPYCvdczGdxBE';

const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 15 * 60 * 1000;

const CTA = () => {
  const [form, setForm] = useState({ fname: '', lname: '', email: '', company: '', service: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const sendTimestamps = useRef([]);

  const set = k => e => setForm(p => ({ ...p, [k]: e.target.value }));

  const isRateLimited = () => {
    const now = Date.now();
    sendTimestamps.current = sendTimestamps.current.filter(t => now - t < RATE_WINDOW_MS);
    return sendTimestamps.current.length >= RATE_LIMIT;
  };

  const handleSubmit = async () => {
    setStatus(null);

    if (!form.fname.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('error-validation');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setStatus('error-validation');
      return;
    }

    if (isRateLimited()) {
      setStatus('error-ratelimit');
      return;
    }

    setLoading(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: `${form.fname.trim()} ${form.lname.trim()}`.trim(),
          from_email: form.email.trim(),
          company: form.company.trim() || 'Not specified',
          service: form.service || 'Not specified',
          message: form.message.trim(),
        },
        EMAILJS_PUBLIC_KEY
      );

      sendTimestamps.current.push(Date.now());
      setStatus('success');
      setForm({ fname: '', lname: '', email: '', company: '', service: '', message: '' });
    } catch {
      setStatus('error');
    }
    setLoading(false);
  };

  const inp = {
    background: 'rgba(0,0,0,0.03)',
    border: '1px solid rgba(0,0,0,0.08)',
    borderRadius: 12,
    padding: '11px 14px',
    fontFamily: 'DM Sans,sans-serif',
    fontSize: 13,
    color: '#000',
    outline: 'none',
    width: '100%',
    transition: 'border-color 0.2s'
  };
  const lbl = {
    display: 'block',
    fontFamily: 'Space Mono,monospace',
    fontSize: 9.5,
    color: 'rgba(0,0,0,0.45)',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    marginBottom: 7,
    textAlign: 'left'
  };
  const focus = e => e.target.style.borderColor = 'rgba(163,230,53,0.8)';
  const blur = e => e.target.style.borderColor = 'rgba(0,0,0,0.08)';

  return (
    <section className="py-28 px-6 bg-[#f5f4f0]">
      <div className="max-w-6xl mx-auto reveal">
        <div className="glass-card rounded-3xl p-10 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl opacity-55 pointer-events-none" style={{ background: 'radial-gradient(circle, #d9f99d 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full blur-3xl opacity-60 pointer-events-none" style={{ background: 'radial-gradient(circle, #e8f5d0 0%, transparent 70%)' }} />
          
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left Column: CTA Info */}
            <div className="text-left">
              <div className="inline-flex items-center gap-2 mb-7 px-4 py-2 rounded-full bg-[#f0fad3] border border-[#c8f57a] font-mono text-[11px] text-[#4a7a10]">
                <span className="lime-dot" style={{ width: 6, height: 6 }} /> Currently accepting new clients
              </div>
              <h2 className="font-serif text-[clamp(2rem,4.5vw,3.2rem)] text-black leading-[1.06] mb-6">
                Tell us what's<br /><em className="not-italic text-[#a3e635]">slowing you down.</em>
              </h2>
              <p className="font-sans text-[13.5px] text-zinc-500 max-w-lg mb-8 leading-[1.8]">
                You don't need perfect billing vocabulary. Describe the denials, aging, coding gaps, or front-desk friction. We'll tell you exactly how we'd fix it.
              </p>

              <div className="flex flex-col gap-4 mb-10">
                {[
                  { n: '01', title: 'You describe the problem', desc: 'A few sentences is enough. No brief needed.' },
                  { n: '02', title: 'We map the RCM plan', desc: 'We send back a clear breakdown of where revenue is leaking and how we\'d recover it.' },
                  { n: '03', title: 'We run the cycle', desc: 'Coding, claims, denials, and A/R — with reporting you can actually use.' },
                ].map(({ n, title, desc }) => (
                  <div key={n} className="flex items-start gap-4">
                    <span className="font-mono text-[10px] text-[#a3e635] pt-0.5 flex-shrink-0">{n}</span>
                    <div>
                      <span className="font-sans font-semibold text-[13px] text-black">{title}. </span>
                      <span className="font-sans text-[13px] text-zinc-500">{desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3.5">
                <a href="https://www.linkedin.com/company/veloqq" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white border border-zinc-200 text-black font-sans font-medium text-[13px] hover:border-zinc-400 transition-all duration-200 hover:scale-[1.03] active:scale-95">
                  <Ic n="linkedin" size={13} color="#333" /> LinkedIn
                </a>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="w-full">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                <div><label style={lbl}>First name <span style={{ color: '#ef4444' }}>*</span></label><input style={inp} value={form.fname} onChange={set('fname')} placeholder="First Name" onFocus={focus} onBlur={blur} /></div>
                <div><label style={lbl}>Last name</label><input style={inp} value={form.lname} onChange={set('lname')} placeholder="Last Name" onFocus={focus} onBlur={blur} /></div>
              </div>
              <div style={{ marginBottom: 16 }}><label style={lbl}>Email address <span style={{ color: '#ef4444' }}>*</span></label><input style={inp} type="email" value={form.email} onChange={set('email')} placeholder="you@company.com" onFocus={focus} onBlur={blur} /></div>
              <div style={{ marginBottom: 16 }}><label style={lbl}>Company</label><input style={inp} value={form.company} onChange={set('company')} placeholder="Your company (optional)" onFocus={focus} onBlur={blur} /></div>
              <div style={{ marginBottom: 16 }}>
                <label style={lbl}>What best describes your situation?</label>
                <select style={inp} value={form.service} onChange={set('service')} onFocus={focus} onBlur={blur}>
                  <option value="">Pick the closest match...</option>
                  {[
                    'Our denial rate is too high',
                    'Days in A/R keep climbing',
                    'We need better medical coding support',
                    'Eligibility / front-end is leaking revenue',
                    'We need full RCM / billing partnership',
                    'Provider credentialing is delayed',
                    'Something else, I\'ll explain',
                  ].map(s => <option key={s} value={s} style={{ background: '#fff', color: '#000' }}>{s}</option>)}
                </select>
              </div>
              <div style={{ marginBottom: 8 }}><label style={lbl}>Describe the problem in your own words <span style={{ color: '#ef4444' }}>*</span></label><textarea style={{ ...inp, resize: 'none' }} rows={4} value={form.message} onChange={set('message')} placeholder={'e.g. "Our denial rate jumped last quarter" or "We have $200K stuck over 90 days"'} onFocus={focus} onBlur={blur} /></div>

              <button onClick={handleSubmit} disabled={loading}
                style={{ width: '100%', padding: '14px 24px', borderRadius: 12, background: loading ? 'rgba(0,0,0,0.5)' : '#000', color: '#fff', fontFamily: 'DM Sans,sans-serif', fontWeight: 600, fontSize: 13.5, border: 'none', cursor: loading ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 8, transition: 'background 0.2s' }}
                onMouseEnter={e => { if (!loading) e.currentTarget.style.background = '#222'; }}
                onMouseLeave={e => { if (!loading) e.currentTarget.style.background = '#000'; }}>
                {loading ? 'Sending...' : 'Send Message'}
                {!loading && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>}
              </button>

              {status === 'success' && <div style={{ marginTop: 14, padding: '12px 16px', borderRadius: 10, background: 'rgba(163,230,53,0.15)', border: '1px solid rgba(163,230,53,0.35)', color: '#4a7a10', fontFamily: 'DM Sans,sans-serif', fontSize: 12.5, textAlign: 'left' }}>Message sent — we'll be in touch within 24 hours.</div>}
              {status === 'error-ratelimit' && <div style={{ marginTop: 14, padding: '12px 16px', borderRadius: 10, background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', color: 'rgba(239,68,68,0.75)', fontFamily: 'DM Sans,sans-serif', fontSize: 12.5, textAlign: 'left' }}>Too many messages sent. Please try again in a few minutes.</div>}
              {(status === 'error' || status === 'error-validation') && <div style={{ marginTop: 14, padding: '12px 16px', borderRadius: 10, background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', color: 'rgba(239,68,68,0.75)', fontFamily: 'DM Sans,sans-serif', fontSize: 12.5, textAlign: 'left' }}>{status === 'error-validation' ? 'Please fill in your name, email, and message.' : 'Something went wrong — please email us directly at hello@veloq.tech'}</div>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
