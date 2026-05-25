import { Head } from 'vite-react-ssg';
import About from '../components/sections/About';
import Team from '../components/sections/Team';
import Impact from '../components/sections/Impact';

const AboutPage = () => (
  <>
    <Head>
      <title>About — Veloq</title>
      <meta name="description" content="Veloq is an engineer-led AI software house. Two founding engineers — a system architect and an AI specialist — building production AI systems that actually ship." />
      <meta property="og:title" content="About Veloq — Engineers Who Build, Not Manage" />
      <meta property="og:description" content="No managers. No demos. Just engineers building autonomous AI infrastructure that runs 24/7." />
      <meta property="og:url" content="https://veloq.tech/about" />
    </Head>

    <About />
    <Team />
    <Impact />
  </>
);

export default AboutPage;
