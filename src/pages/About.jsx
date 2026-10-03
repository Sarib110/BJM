import { Head } from 'vite-react-ssg';
import About from '../components/sections/About';
import Team from '../components/sections/Team';
import Impact from '../components/sections/Impact';

const AboutPage = () => (
  <>
    <Head>
      <title>About BJ Medical Billing Service</title>
      <meta name="description" content="Learn how BJ Medical Billing Service manages eligibility, medical coding, claim submission, payment posting, denials, insurance A/R, credentialing, and revenue cycle reporting." />
      <meta property="og:title" content="About BJ Medical Billing Service" />
      <meta property="og:description" content="A medical billing team focused on accurate claims, documented payer follow-up, denial resolution, and clear revenue cycle reporting." />
      <meta property="og:url" content="https://bjmbilling.com/about" />
    </Head>

    <About />
    <Team />
    <Impact />
  </>
);

export default AboutPage;
