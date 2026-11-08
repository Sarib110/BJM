import { useEffect } from 'react';
import { Head } from 'vite-react-ssg';
import { Link, useLocation } from 'react-router-dom';
import About from '../components/sections/About';
import Team from '../components/sections/Team';
import Impact from '../components/sections/Impact';
import { contentPages } from '../data/siteContent';

const aboutContent = contentPages.find(page => page.path === '/about-us');

const sectionInfo = {
  'Company Overview': { id: 'company-overview', eyebrow: 'Company Overview', title: 'Company Overview' },
  'Who We Are': { id: 'who-we-are', eyebrow: 'Who We Are', title: 'Who We Are' },
  'Our Mission': { id: 'mission-vision', eyebrow: 'Mission & Vision', title: 'Mission & Vision' },
  'Our Vision': { id: 'mission-vision', eyebrow: 'Mission & Vision', title: 'Mission & Vision' },
  'Our Core Values': { id: 'core-values', eyebrow: 'Core Values', title: 'Core Values' },
  'Our Expertise': { id: 'our-expertise', eyebrow: 'Expertise', title: 'Our Expertise' },
  'Our Medical Billing Division': { id: 'medical-billing-division', eyebrow: 'Medical Billing', title: 'Our Medical Billing Division' },
  'Our IT Solutions Division': { id: 'it-solutions-division', eyebrow: 'IT Solutions', title: 'Our IT Solutions Division' },
  'Why Businesses Choose BJ': { id: 'why-choose-us', eyebrow: 'Why Choose Us', title: 'Why Choose Us' },
  'Our Commitment to Quality': { id: 'commitment-to-quality', eyebrow: 'Quality', title: 'Our Commitment to Quality' },
  'Call to Action': { id: 'about-call-to-action', eyebrow: 'Next Step', title: 'Call to Action' },
};

const aboutNav = [
  { label: 'Company Overview', hash: '#company-overview' },
  { label: 'Mission & Vision', hash: '#mission-vision' },
  { label: 'Core Values', hash: '#core-values' },
  { label: 'Our Team', hash: '#our-team' },
  { label: 'Why Choose Us', hash: '#why-choose-us' },
];

const groupedSections = aboutContent?.sections?.reduce((groups, section) => {
  if (section.title === 'Our Team & Leadership') return groups;
  const key = sectionInfo[section.title]?.id || section.title.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const existing = groups.find(group => group.id === key);
  if (existing) existing.sections.push(section);
  else groups.push({ id: key, sections: [section] });
  return groups;
}, []) || [];

const AboutSubheadings = () => {
  if (!groupedSections.length) return null;

  return (
    <section className="relative overflow-hidden py-28 px-6 bg-[#0d0d0b] text-white">
      <div className="absolute inset-0 pointer-events-none opacity-30" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '48px 48px', maskImage: 'linear-gradient(to bottom, black, transparent 85%)' }} />
      <div className="absolute -top-40 right-[-180px] w-[520px] h-[520px] rounded-full blur-3xl opacity-25 pointer-events-none" style={{ background: 'radial-gradient(circle, #a3e635 0%, transparent 68%)' }} />
      <div className="relative max-w-6xl mx-auto">
        <div className="max-w-3xl mb-10 reveal">
          <span className="tag-pill mb-6 inline-block" style={{ background: 'rgba(163,230,53,0.08)', color: 'rgba(163,230,53,0.82)', border: '1px solid rgba(163,230,53,0.18)' }}>About BJ</span>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] text-white leading-[1.04] mb-6">
            Built for dependable billing, technology, and operational support.
          </h2>
          <p className="font-sans text-[13.5px] text-white/55 leading-[1.8]">
            Explore BJ through the same structure used in the navigation: company overview, mission and vision, core values, team, and why businesses choose BJ.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-14 reveal">
          {aboutNav.map(item => (
            <Link
              key={item.hash}
              to={`/about-us${item.hash}`}
              className="tag-pill transition-colors"
              style={{ background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.72)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {groupedSections.map((group, index) => {
            const primary = group.sections[0];
            const info = sectionInfo[primary.title] || { eyebrow: primary.title };
            return (
              <article
                id={group.id}
                key={group.id}
                className="rounded-2xl p-7 reveal scroll-mt-28"
                style={{ minHeight: 240, background: 'rgba(255,255,255,0.045)', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 16px 54px rgba(0,0,0,0.22)' }}
              >
                <div className="font-mono text-[10px] text-[#a3e635] uppercase tracking-[0.18em] mb-5">
                  {String(index + 1).padStart(2, '0')} · {info.eyebrow}
                </div>
                <h3 className="font-serif text-2xl text-white leading-tight mb-4">{info.title || primary.title}</h3>
                {group.sections.map(section => (
                  <div key={section.title} className={section === primary ? '' : 'mt-7 border-t border-white/10 pt-6'}>
                    {group.sections.length > 1 && (
                      <div className="font-mono text-[10px] text-white/35 uppercase tracking-[0.18em] mb-3">{section.title}</div>
                    )}
                    <p className="font-sans text-[13px] text-white/58 leading-[1.75] mb-6">{section.body}</p>
                    {!!section.bullets?.length && (
                      <div className="flex flex-wrap gap-2">
                        {section.bullets.map(bullet => (
                          <span key={bullet} className="tag-pill" style={{ background: 'rgba(163,230,53,0.08)', color: 'rgba(163,230,53,0.78)', border: '1px solid rgba(163,230,53,0.16)' }}>{bullet}</span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const AboutPage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    window.setTimeout(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  }, [hash]);

  return (
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
};

export default AboutPage;
