import { Head } from 'vite-react-ssg';
import About from '../components/sections/About';
import Team from '../components/sections/Team';
import Impact from '../components/sections/Impact';
import { contentPages } from '../data/siteContent';

const aboutContent = contentPages.find(page => page.path === '/about-us');

const AboutSubheadings = () => {
  if (!aboutContent?.sections?.length) return null;

  return (
    <section className="py-28 px-6 bg-[#f5f4f0]">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-14 reveal">
          <span className="tag-pill mb-6 inline-block">About BJ</span>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] text-black leading-[1.04] mb-6">
            Built for dependable billing, technology, and operational support.
          </h2>
          <p className="font-sans text-[13.5px] text-zinc-500 leading-[1.8]">
            The sections below follow the requested About Us structure while keeping the original About page design language, team section, and client impact section.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {aboutContent.sections.map((section, index) => (
            <article
              key={section.title}
              className="glass-card rounded-2xl p-7 lime-glow reveal"
              style={{ minHeight: 240 }}
            >
              <div className="font-mono text-[10px] text-zinc-400 uppercase tracking-[0.18em] mb-5">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="font-serif text-2xl text-black leading-tight mb-4">{section.title}</h3>
              <p className="font-sans text-[13px] text-zinc-500 leading-[1.75] mb-6">{section.body}</p>
              {!!section.bullets?.length && (
                <div className="flex flex-wrap gap-2">
                  {section.bullets.map(bullet => (
                    <span key={bullet} className="tag-pill">{bullet}</span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutPage = () => (
  <>
    <Head>
      <title>About Us — BJ Medical Billing Service</title>
      <meta name="description" content={aboutContent?.description || 'Learn how BJ Medical Billing Service manages medical billing, RCM, technology services, team operations, and client support.'} />
      <meta property="og:title" content="About Us — BJ Medical Billing Service" />
      <meta property="og:description" content={aboutContent?.description || 'A medical billing and technology team focused on accurate work, documented follow-up, and clear communication.'} />
      <meta property="og:url" content="https://bjmbilling.com/about-us" />
    </Head>

    <About />
    <AboutSubheadings />
    <Team />
    <Impact />
  </>
);

export default AboutPage;
