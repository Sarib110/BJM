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
      <title>Medical Billing Services — BJM</title>
      <meta name="description" content="BJM medical billing services: coding, claim submission, denial management, eligibility & benefits, A/R follow-up, and credentialing with full RCM." />
      <meta property="og:title" content="Medical Billing Services — BJM" />
      <meta property="og:description" content="Six RCM service lines. Coding, claims, denials, eligibility, A/R, and full-cycle partnership." />
      <meta property="og:url" content="https://veloq.tech/services" />
    </Head>

    <div className="pt-32 pb-4 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-serif text-[clamp(2.4rem,5vw,4rem)] text-black leading-[1.04] mb-5">
          Everything<br /><em className="not-italic text-[#a3e635]">we bill for.</em>
        </h1>
        <p className="font-sans text-[14px] text-zinc-500 max-w-lg leading-[1.8]">
          Six capabilities. All practice-ready. Built for clean claims, fewer denials, and faster cash.
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
