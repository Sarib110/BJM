import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Head } from 'vite-react-ssg';
import Intro from '../components/sections/Intro';
import Hero from '../components/sections/Hero';
import Marquee from '../components/sections/Marquee';
import Work from '../components/sections/Work';
import Impact from '../components/sections/Impact';
import CTA from '../components/sections/CTA';
import { services } from '../data/services';
import Ic from '../components/ui/Icon';

const RowArrow = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17 17 7M7 7h10v10" />
  </svg>
);

const ServiceRow = ({ id, icon, title, desc, tags, index }) => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 0,
        padding: '22px 16px 22px 20px',
        borderRadius: 14,
        position: 'relative',
        background: hovered ? 'rgba(163,230,53,0.04)' : 'transparent',
        transition: 'background 0.25s',
        cursor: 'default',
        borderBottom: '1px solid rgba(0,0,0,0.06)',
      }}
    >
      {/* Left lime accent */}
      <div style={{
        position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)',
        width: 2, borderRadius: 1,
        height: hovered ? '60%' : 0,
        background: '#a3e635',
        transition: 'height 0.3s cubic-bezier(0.4,0,0.2,1)',
      }} />

      {/* Number */}
      <div style={{
        fontFamily: 'Space Mono, monospace', fontSize: 10, fontWeight: 700,
        color: hovered ? '#a3e635' : 'rgba(163,230,53,0.65)',
        width: 28, flexShrink: 0,
        transition: 'color 0.22s',
        letterSpacing: '0.04em',
      }}>
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Icon box */}
      <div style={{
        width: 42, height: 42, borderRadius: 11,
        background: hovered ? '#0d0d0b' : '#f5f4f0',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0, marginRight: 20,
        transition: 'background 0.22s',
      }}>
        <Ic n={icon} size={17} color={hovered ? '#a3e635' : '#666'} />
      </div>

      {/* Title + tags */}
      <div style={{ width: 210, flexShrink: 0, marginRight: 28 }}>
        <div style={{ fontSize: 15, fontWeight: 600, color: '#0d0d0b', lineHeight: 1.25, marginBottom: 7 }}>{title}</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
          {tags.map(t => (
            <span key={t} style={{
              padding: '2px 8px', borderRadius: 999,
              fontFamily: 'Space Mono, monospace', fontSize: 9,
              color: hovered ? 'rgba(0,0,0,0.6)' : 'rgba(0,0,0,0.42)',
              border: '1px solid rgba(0,0,0,0.08)',
              transition: 'color 0.2s',
            }}>{t}</span>
          ))}
        </div>
      </div>

      {/* Description */}
      <div style={{
        flex: 1, fontSize: 12.5, lineHeight: 1.78,
        color: hovered ? '#222' : 'rgba(0,0,0,0.5)',
        transition: 'color 0.28s',
        minWidth: 0,
        fontSize: 13.5,
      }} className="hidden md:block">
        {desc}
      </div>

      {/* Arrow link button */}
      <button
        onClick={() => navigate(`/services#${id}`)}
        style={{
          marginLeft: 20, flexShrink: 0,
          width: 34, height: 34, borderRadius: 9,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          border: `1px solid ${hovered ? 'rgba(163,230,53,0.5)' : 'rgba(0,0,0,0.08)'}`,
          background: hovered ? 'rgba(163,230,53,0.08)' : 'transparent',
          color: hovered ? '#a3e635' : 'rgba(0,0,0,0.22)',
          cursor: 'pointer',
          transition: 'all 0.22s',
        }}
        aria-label={`Learn more about ${title}`}
      >
        <RowArrow />
      </button>
    </div>
  );
};

const Home = () => {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && !sessionStorage.getItem('intro-shown')) {
      setShowIntro(true);
    }
  }, []);

  const handleIntroDone = () => {
    if (typeof window !== 'undefined') sessionStorage.setItem('intro-shown', '1');
    setShowIntro(false);
  };

  return (
    <>
      <Head>
        <title>Veloq — Engineer-Led AI Software House</title>
        <meta name="description" content="Veloq builds production-grade agentic AI systems, RAG pipelines, voice agents, and full-stack AI products that run 24/7. Engineer-led. Results-focused." />
        <meta property="og:title" content="Veloq — Engineer-Led AI Software House" />
        <meta property="og:description" content="We don't build demos. We build infrastructure. Autonomous AI systems, RAG, voice agents, and workflow automation at production scale." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://veloq.tech/" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Veloq",
          url: "https://veloq.tech",
          logo: "https://veloq.tech/assets/logo_white.svg",
          description: "Engineer-led AI software house building production-grade agentic AI systems.",
          sameAs: [
            "https://www.linkedin.com/company/veloqq",
            "https://www.upwork.com/companies/veloq",
          ],
          contactPoint: { "@type": "ContactPoint", email: "contact@veloq.tech", contactType: "customer service" },
        })}</script>
      </Head>

      {showIntro && <Intro onDone={handleIntroDone} />}

      <Hero />

      {/* Services preview */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 reveal">
            <div>
              <div className="inline-block px-4 py-2 rounded-full font-mono text-[11px] bg-[#f5f4f0] text-zinc-500 mb-4">What we build</div>
              <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-black leading-[1.06]">Engineering capabilities<br /><em className="not-italic text-[#a3e635]">that scale with you.</em></h2>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 font-sans text-[13px] font-medium text-black hover:text-zinc-500 transition-colors flex-shrink-0">
              View all services <Ic n="arrow_r" size={13} color="currentColor" />
            </Link>
          </div>
          <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
            {services.map((s, i) => <ServiceRow key={s.title} {...s} index={i} />)}
          </div>
        </div>
      </section>

      <Marquee />

      <Work />

      {/* Work index link */}
      <div className="py-6 px-6 bg-[#0d0d0b] flex justify-center">
        <Link to="/work" className="inline-flex items-center gap-2 font-mono text-[11px] text-zinc-500 hover:text-[#a3e635] transition-colors uppercase tracking-widest">
          View all case studies <Ic n="arrow_ur" size={11} color="currentColor" />
        </Link>
      </div>

      <Marquee reverse />

      <Impact />
      <CTA />
    </>
  );
};

export default Home;
