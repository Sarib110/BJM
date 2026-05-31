import { useEffect } from 'react';
import { Head } from 'vite-react-ssg';
import Services from '../components/sections/Services';
import Process from '../components/sections/Process';
import TechStack from '../components/sections/TechStack';
import CTA from '../components/sections/CTA';

const ServicesPage = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const el = document.querySelector(hash);
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
    }
  }, []);

  return (
  <>
    <Head>
      <title>AI Services — Veloq</title>
      <meta name="description" content="Veloq's AI services: agentic systems, RAG & knowledge bases, full-stack AI products, workflow automation, voice agents, and custom integrations. Production-grade, engineer-led." />
      <meta property="og:title" content="AI Services — Veloq" />
      <meta property="og:description" content="Six production-grade AI service lines. Agentic AI, RAG, voice agents, workflow automation, and more." />
      <meta property="og:url" content="https://veloq.tech/services" />
    </Head>

    <div className="pt-32 pb-4 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-serif text-[clamp(2.4rem,5vw,4rem)] text-black leading-[1.04] mb-5">
          What we<br /><em className="not-italic text-[#a3e635]">actually build.</em>
        </h1>
        <p className="font-sans text-[14px] text-zinc-500 max-w-lg leading-[1.8]">
          Six service lines. All production-grade. All engineer-led. None of it is demo-ware.
        </p>
      </div>
    </div>

    <Services />
    <Process />
    <TechStack />
    <CTA />
  </>
  );
};

export default ServicesPage;
