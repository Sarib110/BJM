import { Head } from 'vite-react-ssg';
import About from '../components/sections/About';
import Team from '../components/sections/Team';
import Impact from '../components/sections/Impact';

const AboutPage = () => (
  <>
    <Head>
      <title>About — BJM</title>
      <meta name="description" content="BJM is a medical billing and RCM partner. A focused team that helps practices protect revenue through coding, claims, denials, and A/R excellence." />
      <meta property="og:title" content="About BJM — Medical Billing Partners" />
      <meta property="og:description" content="Revenue-first billing operators who own outcomes — clean claims, denial recovery, and collections clarity." />
      <meta property="og:url" content="https://veloq.tech/about" />
    </Head>

    <About />
    <Team />
    <Impact />
  </>
);

export default AboutPage;
