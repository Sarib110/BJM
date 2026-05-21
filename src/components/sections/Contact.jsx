import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_7bmdg29';
const EMAILJS_TEMPLATE_ID = 'template_q8paqxr';
const EMAILJS_PUBLIC_KEY = '3S7CpPYCvdczGdxBE';

// Spam protection: max 3 emails per 15 minutes
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 15 * 60 * 1000;

const Contact = () => {
  const [form, setForm] = useState({ fname: '', lname: '', email: '', company: '', service: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const sendTimestamps = useRef([]);

  const set = k => e => setForm(p => ({ ...p, [k]: e.target.value }));

  const isRateLimited = () => {
    const now = Date.now();
    // Remove timestamps older than the rate window
    sendTimestamps.current = sendTimestamps.current.filter(t => now - t < RATE_WINDOW_MS);
    return sendTimestamps.current.length >= RATE_LIMIT;
  };

  const handleSubmit = async () => {
    setStatus(null);

    // Validation: name, email, and message are required
    if (!form.fname.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('error-validation');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setStatus('error-validation');
      return;
    }

    // Spam protection
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

  const inp = { background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: '11px 14px', fontFamily: 'DM Sans,sans-serif', fontSize: 13, color: '#fff', outline: 'none', width: '100%', transition: 'border-color 0.2s' };
  const lbl = { display: 'block', fontFamily: 'Space Mono,monospace', fontSize: 9.5, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 7 };
  const focus = e => e.target.style.borderColor = 'rgba(163,230,53,0.45)';
  const blur = e => e.target.style.borderColor = 'rgba(255,255,255,0.1)';

  return (
    <section id="contact" style={{ background: '#0d0d0b', padding: '112px 24px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <span style={{ display: 'inline-block', fontFamily: 'Space Mono,monospace', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em', padding: '3px 12px', borderRadius: 999, background: 'rgba(163,230,53,0.08)', color: 'rgba(163,230,53,0.7)', border: '1px solid rgba(163,230,53,0.15)', marginBottom: 20 }}>Get in touch</span>
        <h2 style={{ fontFamily: 'DM Serif Display,serif', fontSize: 'clamp(2.2rem,4.5vw,3.5rem)', color: '#fff', lineHeight: 1.06, marginBottom: 14 }}>Let's build something<br /><em style={{ fontStyle: 'normal', color: '#a3e635' }}>worth shipping.</em></h2>
        <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: 13.5, color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, maxWidth: 400, marginBottom: 0 }}>Drop us a message and we'll get back to you within one business day.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 64, marginTop: 56, alignItems: 'start' }}>
          <div>
            {[
              { icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#a3e635" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>, label: 'Email us', value: <a href="mailto:contact@veloq.tech" style={{ color: '#a3e635', textDecoration: 'none' }}>contact@veloq.tech</a> },
              { icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#a3e635" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>, label: 'LinkedIn', value: <a href="https://www.linkedin.com/company/veloqq" target="_blank" rel="noopener noreferrer" style={{ color: '#a3e635', textDecoration: 'none' }}>linkedin.com/company/veloqq</a> },
              { icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#a3e635" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>, label: 'Response time', value: 'Within 24 hours' },
              { icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#a3e635" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>, label: 'Status', value: <span style={{ display: 'flex', alignItems: 'center', gap: 7 }}><span style={{ width: 6, height: 6, borderRadius: '50%', background: '#a3e635', display: 'inline-block' }} />Accepting new clients</span> },
            ].map(({ icon, label, value }, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 28 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(163,230,53,0.08)', border: '1px solid rgba(163,230,53,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{icon}</div>
                <div>
                  <div style={{ fontFamily: 'Space Mono,monospace', fontSize: 9.5, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>{label}</div>
                  <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: 13.5, color: '#fff' }}>{value}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: '36px 32px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
              <div><label style={lbl}>First name <span style={{ color: '#ef4444' }}>*</span></label><input style={inp} value={form.fname} onChange={set('fname')} placeholder="First Name" onFocus={focus} onBlur={blur} /></div>
              <div><label style={lbl}>Last name</label><input style={inp} value={form.lname} onChange={set('lname')} placeholder="Last Name" onFocus={focus} onBlur={blur} /></div>
            </div>
            <div style={{ marginBottom: 16 }}><label style={lbl}>Email address <span style={{ color: '#ef4444' }}>*</span></label><input style={inp} type="email" value={form.email} onChange={set('email')} placeholder="you@company.com" onFocus={focus} onBlur={blur} /></div>
            <div style={{ marginBottom: 16 }}><label style={lbl}>Company</label><input style={inp} value={form.company} onChange={set('company')} placeholder="Your company (optional)" onFocus={focus} onBlur={blur} /></div>
            <div style={{ marginBottom: 16 }}>
              <label style={lbl}>What are you looking to build?</label>
              <select style={{ ...inp, appearance: 'none' }} value={form.service} onChange={set('service')} onFocus={focus} onBlur={blur}>
                <option value="">Select a service...</option>
                {['Agentic AI System', 'RAG / Knowledge System', 'Full-Stack AI Product', 'Workflow Automation', 'Voice AI Agent', 'Custom AI Integration', 'Something else'].map(s => <option key={s} value={s} style={{ background: '#1a1a18' }}>{s}</option>)}
              </select>
            </div>
            <div style={{ marginBottom: 8 }}><label style={lbl}>Tell us about your project <span style={{ color: '#ef4444' }}>*</span></label><textarea style={{ ...inp, resize: 'none' }} rows={4} value={form.message} onChange={set('message')} placeholder="Describe the problem you're solving, your current bottleneck, or what you have in mind..." onFocus={focus} onBlur={blur} /></div>

            <button onClick={handleSubmit} disabled={loading}
              style={{ width: '100%', padding: '14px 24px', borderRadius: 12, background: loading ? 'rgba(163,230,53,0.5)' : '#a3e635', color: '#000', fontFamily: 'DM Sans,sans-serif', fontWeight: 600, fontSize: 13.5, border: 'none', cursor: loading ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 8, transition: 'background 0.2s' }}
              onMouseEnter={e => { if (!loading) e.currentTarget.style.background = '#b5f059'; }}
              onMouseLeave={e => { if (!loading) e.currentTarget.style.background = '#a3e635'; }}>
              {loading ? 'Sending...' : 'Send message'}
              {!loading && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>}
            </button>

            {status === 'success' && <div style={{ marginTop: 14, padding: '12px 16px', borderRadius: 10, background: 'rgba(163,230,53,0.1)', border: '1px solid rgba(163,230,53,0.25)', color: 'rgba(163,230,53,0.85)', fontFamily: 'DM Sans,sans-serif', fontSize: 12.5 }}>Message sent — we'll be in touch within 24 hours.</div>}
            {status === 'error-ratelimit' && <div style={{ marginTop: 14, padding: '12px 16px', borderRadius: 10, background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', color: 'rgba(239,68,68,0.75)', fontFamily: 'DM Sans,sans-serif', fontSize: 12.5 }}>Too many messages sent. Please try again in a few minutes.</div>}
            {(status === 'error' || status === 'error-validation') && <div style={{ marginTop: 14, padding: '12px 16px', borderRadius: 10, background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', color: 'rgba(239,68,68,0.75)', fontFamily: 'DM Sans,sans-serif', fontSize: 12.5 }}>{status === 'error-validation' ? 'Please fill in your name, email, and message.' : 'Something went wrong — please email us directly at contact@veloq.tech'}</div>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;