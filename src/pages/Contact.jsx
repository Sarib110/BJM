import { Head } from 'vite-react-ssg';
import Contact from '../components/sections/Contact';
import CalendlySection from '../components/sections/CalendlySection';

const ContactPage = () => (
  <>
    <Head>
      <title>Contact & Book a Call — Veloq</title>
      <meta name="description" content="Get in touch with Veloq. Book a free 30-minute strategy call or send a message. We respond within 24 hours." />
      <meta property="og:title" content="Contact Veloq — Book a Free Strategy Call" />
      <meta property="og:description" content="30 minutes. Your automation roadmap. No sales pitch — just engineering." />
      <meta property="og:url" content="https://veloq.tech/contact" />
    </Head>

    <Contact />
    <CalendlySection />
  </>
);

export default ContactPage;
