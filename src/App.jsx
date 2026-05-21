import { useState } from 'react';
import useReveal from './hooks/useReveal';
import { caseStudies } from './data/caseStudies';
import Cursor from './components/ui/Cursor';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Intro from './components/sections/Intro';
import Hero from './components/sections/Hero';
import Marquee from './components/sections/Marquee';
import Services from './components/sections/Services';
import Work from './components/sections/Work';
import TechStack from './components/sections/TechStack';
import Process from './components/sections/Process';
import Impact from './components/sections/Impact';
import PartnerMarquee from './components/sections/PartnerMarquee';
import About from './components/sections/About';
import Team from './components/sections/Team';
import Contact from './components/sections/Contact';
import CalendlySection from './components/sections/CalendlySection';
import CTA from './components/sections/CTA';
import CaseStudyPage from './components/pages/CaseStudyPage';
import ToolPage from './components/pages/ToolPage';

const App = () => {
  const [done, setDone] = useState(false);
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);
  const [activeToolUrl, setActiveToolUrl] = useState(null);
  useReveal(activeCaseStudy);

  const handleSelectCaseStudy = id => {
    const cs = caseStudies.find(c => c.id === id);
    if (cs) setActiveCaseStudy(cs);
  };

  const handleBack = () => {
    setActiveCaseStudy(null);
    setTimeout(() => { document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }); }, 80);
  };

  if (activeCaseStudy) return <CaseStudyPage cs={activeCaseStudy} onBack={handleBack} />;
  
  if (activeToolUrl) return <ToolPage url={activeToolUrl} onBack={() => setActiveToolUrl(null)} />;

  return (
    <div className="font-sans">
      {!done && <Intro onDone={() => setDone(true)} />}
      <Cursor />
      <Navbar onToolSelect={setActiveToolUrl} />
      <Hero />
      <Marquee />
      <Services />
      <Work onSelect={handleSelectCaseStudy} />
      <TechStack />
      <Process />
      <Impact />
      <PartnerMarquee />
      <About />
      <Team />
      <Contact />
      <CalendlySection />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
