import { useParams, Navigate, Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import { Head } from 'vite-react-ssg';
import emailjs from '@emailjs/browser';
import { services } from '../data/services';
import { caseStudies } from '../data/caseStudies';
import Ic from '../components/ui/Icon';

const EMAILJS_SERVICE_ID = 'service_7bmdg29';
const EMAILJS_TEMPLATE_ID = 'template_q8paqxr';
const EMAILJS_PUBLIC_KEY = '3S7CpPYCvdczGdxBE';
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 15 * 60 * 1000;

const ArrowUpRight = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17 17 7M7 7h10v10" />
  </svg>
);

/* ────────────────────── Related Project Card ────────────────────── */
const ProjectCard = ({ cs }) => (
  <Link
    to={`/work/${cs.id}`}
    className="group block rounded-2xl overflow-hidden border border-white/[0.08] hover:border-[#a3e635]/40 transition-all duration-300 hover:shadow-xl bg-[#161614]"
  >
    <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
      <img
        src={cs.image}
        alt={cs.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />
      <div className="absolute top-4 left-4">
        <span className="font-mono text-[10px] text-[#a3e635] bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[#a3e635]/25 tracking-wide font-bold">
          {cs.metric}
        </span>
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="font-mono text-[11px] font-bold text-white tracking-widest uppercase bg-black/50 px-4 py-2 rounded-full border border-white/20 backdrop-blur-sm">
          Read Case Study →
        </span>
      </div>
    </div>
    <div className="p-5">
      <h3 className="font-serif text-[1.15rem] text-white leading-tight mb-2">{cs.title}</h3>
      <p className="font-sans text-[12.5px] text-white/40 leading-[1.75] mb-3 line-clamp-2">{cs.summary}</p>
      <div className="flex flex-wrap gap-1.5">
        {cs.stack.slice(0, 3).map(t => (
          <span key={t} className="px-2 py-0.5 rounded-full font-mono text-[9px] text-white/35 border border-white/[0.08] bg-white/[0.03]">
            {t}
          </span>
        ))}
      </div>
    </div>
  </Link>
);

/* ────────────────────── CTA Email Form ────────────────────── */
const ServiceCTAForm = ({ serviceName }) => {
  const [form, setForm] = useState({ fname: '', lname: '', email: '', company: '', service: serviceName, message: '' });
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
          service: form.service || serviceName,
          message: form.message.trim(),
        },
        EMAILJS_PUBLIC_KEY
      );

      sendTimestamps.current.push(Date.now());
      setStatus('success');
      setForm({ fname: '', lname: '', email: '', company: '', service: serviceName, message: '' });
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
      {(status === 'error' || status === 'error-validation') && <div style={{ marginTop: 14, padding: '12px 16px', borderRadius: 10, background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', color: 'rgba(239,68,68,0.75)', fontFamily: 'DM Sans,sans-serif', fontSize: 12.5 }}>{status === 'error-validation' ? 'Please fill in your name, email, and message.' : 'Something went wrong — please email us directly at hello@veloq.tech'}</div>}
    </div>
  );
};


/* ────────────────────── Service Detail Page ────────────────────── */
const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = services.find(s => s.id === serviceId);

  if (!service) return <Navigate to="/services" replace />;

  const relatedProjects = (service.relatedCaseStudies || [])
    .map(id => caseStudies.find(cs => cs.id === id))
    .filter(Boolean);

  const serviceIndex = services.findIndex(s => s.id === serviceId);

  return (
    <>
      <Head>
        <title>{service.title} — Veloq</title>
        <meta name="description" content={service.longDesc} />
        <meta property="og:title" content={`${service.title} — Veloq`} />
        <meta property="og:description" content={service.desc} />
        <meta property="og:url" content={`https://veloq.tech/services/${service.id}`} />
      </Head>

      {/* ── Hero Section ── */}
      <section className="pt-32 pb-16 px-6 bg-[#0d0d0b]">
        <div className="max-w-6xl mx-auto">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8">
            <Link to="/services" className="font-mono text-[11px] text-white/35 hover:text-[#a3e635] transition-colors uppercase tracking-wider">Services</Link>
            <span className="font-mono text-[11px] text-white/20">/</span>
            <span className="font-mono text-[11px] text-[#a3e635]/70 uppercase tracking-wider">{service.category}</span>
          </div>

          {/* Category badge */}
          <div style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: '#a3e635', letterSpacing: '0.12em', marginBottom: 20 }}>
            {String(serviceIndex + 1).padStart(2, '0')} &bull; {service.category}
          </div>

          {/* Title */}
          <h1 className="font-serif text-[clamp(2.4rem,5vw,4rem)] text-white leading-[1.04] mb-6">
            {service.title}
          </h1>

          {/* Description */}
          <p className="font-sans text-[15px] text-white/50 max-w-2xl leading-[1.85] mb-8">
            {service.longDesc}
          </p>

          {/* Tags + Metric row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-12">
            <div className="flex flex-wrap gap-2">
              {service.tags.map(t => (
                <span key={t} style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  padding: '5px 14px', borderRadius: 999,
                  border: '1px solid rgba(255,255,255,0.1)',
                  background: 'rgba(255,255,255,0.04)',
                  fontFamily: 'Space Mono, monospace', fontSize: 10.5,
                  color: 'rgba(255,255,255,0.55)',
                }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#a3e635', flexShrink: 0 }} />
                  {t}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-3 sm:ml-auto">
              <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 700, color: '#fff', lineHeight: 1 }}>{service.metric}</span>
              <div>
                <ArrowUpRight />
                <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 9, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', marginTop: 2 }}>{service.metricLabel}</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="rounded-2xl overflow-hidden" style={{ height: 'clamp(260px, 40vw, 480px)' }}>
            <img
              src={service.image}
              alt={service.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: service.imagePosition || 'center' }}
            />
          </div>
        </div>
      </section>


      {/* ── Capabilities Section ── */}
      {service.capabilities && service.capabilities.length > 0 && (
        <section className="py-24 px-6 bg-[#f5f4f0]">
          <div className="max-w-6xl mx-auto">
            <div className="mb-14 reveal">
              <span className="inline-block px-4 py-2 rounded-full font-mono text-[11px] bg-[#e8e7e3] text-zinc-500 mb-5">What we deliver</span>
              <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-black leading-[1.06]">
                Built for production.<br /><em className="not-italic text-[#a3e635]">Not for demos.</em>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal">
              {service.capabilities.map((cap, i) => (
                <div
                  key={i}
                  style={{
                    background: '#fff',
                    border: '1px solid rgba(0,0,0,0.06)',
                    borderRadius: 18,
                    padding: '32px 28px',
                    transition: 'border-color 0.25s, box-shadow 0.25s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(163,230,53,0.4)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(163,230,53,0.06)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <div style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: '#a3e635', letterSpacing: '0.1em', marginBottom: 16 }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 style={{ fontFamily: 'DM Sans,sans-serif', fontSize: 17, fontWeight: 600, color: '#0d0d0b', lineHeight: 1.3, marginBottom: 10 }}>
                    {cap.title}
                  </h3>
                  <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: 13, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8 }}>
                    {cap.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}


      {/* ── Related Projects Section ── */}
      {relatedProjects.length > 0 && (
        <section className="py-24 px-6 bg-[#0d0d0b]">
          <div className="max-w-6xl mx-auto">
            <div className="mb-14 reveal">
              <span style={{ display: 'inline-block', fontFamily: 'Space Mono,monospace', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em', padding: '5px 14px', borderRadius: 999, background: 'rgba(163,230,53,0.08)', color: 'rgba(163,230,53,0.7)', border: '1px solid rgba(163,230,53,0.15)', marginBottom: 20 }}>Related work</span>
              <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-white leading-[1.06]">
                Projects built with<br /><em className="not-italic text-[#a3e635]">this capability.</em>
              </h2>
            </div>

            <div className={`grid grid-cols-1 ${relatedProjects.length >= 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-6 reveal`}>
              {relatedProjects.map(cs => (
                <ProjectCard key={cs.id} cs={cs} />
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link to="/work" className="inline-flex items-center gap-2 font-mono text-[11px] text-zinc-500 hover:text-[#a3e635] transition-colors uppercase tracking-widest">
                View all case studies <Ic n="arrow_ur" size={11} color="currentColor" />
              </Link>
            </div>
          </div>
        </section>
      )}


      {/* ── CTA Section with Email Form ── */}
      <section className="py-24 px-6 bg-[#0d0d0b]" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start reveal">
            {/* Left: CTA text */}
            <div>
              <span style={{ display: 'inline-block', fontFamily: 'Space Mono,monospace', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em', padding: '5px 14px', borderRadius: 999, background: 'rgba(163,230,53,0.08)', color: 'rgba(163,230,53,0.7)', border: '1px solid rgba(163,230,53,0.15)', marginBottom: 20 }}>Get started</span>
              <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-white leading-[1.06] mb-5">
                Ready to build<br /><em className="not-italic text-[#a3e635]">{service.title.toLowerCase()}?</em>
              </h2>
              <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, marginBottom: 28 }}>
                Drop us a message about your project and we'll get back to you within one business day with a strategy outline.
              </p>

              {/* Quick info */}
              {[
                { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a3e635" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>, label: 'Email', value: 'hello@veloq.tech' },
                { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a3e635" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>, label: 'Response time', value: 'Within 24 hours' },
                { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a3e635" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>, label: 'Status', value: <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ width: 6, height: 6, borderRadius: '50%', background: '#a3e635' }} />Accepting clients</span> },
              ].map(({ icon, label, value }, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 9, background: 'rgba(163,230,53,0.08)', border: '1px solid rgba(163,230,53,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{icon}</div>
                  <div>
                    <div style={{ fontFamily: 'Space Mono,monospace', fontSize: 9, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 2 }}>{label}</div>
                    <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: 13, color: '#fff' }}>{value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Email form */}
            <ServiceCTAForm serviceName={service.title} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
