import { Head } from 'vite-react-ssg';
import Contact from '../components/sections/Contact';
import CalendlySection from '../components/sections/CalendlySection';

const ContactPage = () => (
  <>
    <Head>
      <title>Contact BJ Medical Billing Service</title>
      <meta name="description" content="Contact BJ Medical Billing Service to discuss medical coding, claim submission, denial management, insurance verification, A/R follow-up, credentialing, or full revenue cycle management." />
      <meta property="og:title" content="Contact BJ Medical Billing Service" />
      <meta property="og:description" content="Book a billing review to discuss your practice workflow, payer issues, denials, and accounts receivable." />
      <meta property="og:url" content="https://veloq.tech/contact" />
    </Head>

    <Contact />
    <CalendlySection />
  </>
);

export default ContactPage;
