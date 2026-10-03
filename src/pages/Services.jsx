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
      <title>Medical Billing Services — BJ Medical Billing Service</title>
      <meta name="description" content="Medical billing services including eligibility and benefits verification, CPT and ICD-10 coding support, claim submission, denial management, insurance A/R follow-up, credentialing, and full RCM." />
      <meta property="og:title" content="Medical Billing Services — BJ Medical Billing Service" />
      <meta property="og:description" content="Medical billing support across eligibility, coding, claims, payment posting, denials, insurance follow-up, credentialing, and reporting." />
      <meta property="og:url" content="https://veloq.tech/services" />
    </Head>

    <div className="pt-32 pb-4 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-serif text-[clamp(2.4rem,5vw,4rem)] text-black leading-[1.04] mb-5">
          Medical billing.<br /><em className="not-italic text-[#a3e635]">From intake to payment.</em>
        </h1>
        <p className="font-sans text-[14px] text-zinc-500 max-w-lg leading-[1.8]">
          Choose focused support for a specific workqueue or a complete revenue cycle service covering front-end verification, claims, remittance, denials, and A/R.
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
