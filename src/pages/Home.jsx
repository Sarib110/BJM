import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Head } from 'vite-react-ssg';
import Intro from '../components/sections/Intro';
import Hero from '../components/sections/Hero';
import Marquee from '../components/sections/Marquee';
import Work from '../components/sections/Work';
import Impact from '../components/sections/Impact';
import CTA from '../components/sections/CTA';
import { services } from '../data/services';
import Ic from '../components/ui/Icon';

const ServicePreviewCard = ({ icon, title, desc, tags, index }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff',
        border: `1px solid ${hovered ? 'rgba(163,230,53,0.45)' : 'rgba(0,0,0,0.08)'}`,
        borderRadius: 16,
        padding: '32px 28px 26px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        transition: 'border-color 0.22s, box-shadow 0.22s',
        boxShadow: hovered ? '0 8px 40px rgba(0,0,0,0.06)' : '0 1px 4px rgba(0,0,0,0.03)',
        cursor: 'default',
      }}
    >
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        background: 'linear-gradient(90deg, #a3e635, rgba(163,230,53,0.2))',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.22s',
      }} />

      {/* Number (left) + Icon (right) */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <div style={{
          fontFamily: 'Space Mono, monospace',
          fontSize: 13,
          fontWeight: 700,
          color: hovered ? '#a3e635' : 'rgba(163,230,53,0.45)',
          letterSpacing: '0.06em',
          transition: 'color 0.22s',
        }}>
          {String(index + 1).padStart(2, '0')}
        </div>
        <div style={{
          width: 36, height: 36, borderRadius: 10,
          background: hovered ? '#0d0d0b' : '#f5f4f0',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background 0.22s',
          flexShrink: 0,
        }}>
          <Ic n={icon} size={16} color={hovered ? '#a3e635' : '#555'} />
        </div>
      </div>

      <h3 style={{ fontSize: 15.5, fontWeight: 600, color: '#0d0d0b', lineHeight: 1.32, marginBottom: 10 }}>{title}</h3>
      <p style={{ fontSize: 13, color: '#666', lineHeight: 1.78, flex: 1, marginBottom: 20 }}>{desc}</p>

      <div style={{ paddingTop: 16, borderTop: '1px solid rgba(0,0,0,0.06)', fontFamily: 'Space Mono, monospace', fontSize: 10, color: '#aaa', letterSpacing: '0.02em' }}>
        {tags.join(' / ')}
      </div>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => <ServicePreviewCard key={s.title} {...s} index={i} />)}
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
