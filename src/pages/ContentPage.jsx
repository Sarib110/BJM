import { useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { Head } from 'vite-react-ssg';
import { contentPages } from '../data/siteContent';
import { withBase } from '../utils/withBase';

const normalizeSection = section => (typeof section === 'string' ? { title: section, body: '', bullets: [] } : section);

const ArrowUpRight = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17 17 7M7 7h10v10" />
  </svg>
);

const ImagePanel = ({ image, title, eyebrow }) => {
  const [failed, setFailed] = useState(false);

  return (
    <div className="content-image-panel">
      {image && !failed && (
        <img src={withBase(image)} alt={title} onError={() => setFailed(true)} />
      )}
      <div className="content-image-overlay" />
      <div className="content-image-grid" />
      <div className="content-image-badge">BJ • {eyebrow}</div>
      <div className="content-image-caption">
        <span>Focused support</span>
        <strong>{title}</strong>
      </div>
    </div>
  );
};

const BulletList = ({ bullets, dark = false }) => {
  if (!bullets?.length) return null;

  return (
    <ul className="content-bullet-list">
      {bullets.map(bullet => (
        <li key={bullet} className={dark ? 'is-dark' : ''}>
          <span />
          {bullet}
        </li>
      ))}
    </ul>
  );
};

const ContentPage = () => {
  const { pathname } = useLocation();
  const page = contentPages.find(item => item.path === pathname);

  if (!page) return <Navigate to="/404" replace />;

  const sections = page.sections.map(normalizeSection);
  const pageStats = [
    { value: String(sections.length).padStart(2, '0'), label: 'Page sections' },
    { value: String(page.links?.length || page.articles?.length || page.faqs?.length || 3).padStart(2, '0'), label: page.links ? 'Related pages' : page.articles ? 'Resource items' : 'Key answers' },
    { value: 'RCM', label: 'Process focused' },
  ];

  return (
    <>
      <Head>
        <title>{page.title} — BJ Medical Billing Service</title>
        <meta name="description" content={page.description} />
        <meta property="og:title" content={`${page.title} — BJ Medical Billing Service`} />
        <meta property="og:description" content={page.description} />
      </Head>

      <style>{`
        .content-shell { background: #f5f4f0; }
        .content-hero { position: relative; overflow: hidden; padding: 132px 24px 72px; background: #0d0d0b; color: #fff; }
        .content-hero::before { content: ''; position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px); background-size: 48px 48px; mask-image: linear-gradient(to bottom, black, transparent 80%); }
        .content-hero::after { content: ''; position: absolute; width: 760px; height: 760px; right: -260px; top: -280px; border-radius: 999px; background: radial-gradient(circle, rgba(163,230,53,0.16), transparent 64%); }
        .content-wrap { position: relative; z-index: 1; max-width: 1152px; margin: 0 auto; }
        .content-breadcrumb { display: inline-flex; align-items: center; gap: 8px; margin-bottom: 34px; font-family: Space Mono, monospace; font-size: 10.5px; color: rgba(255,255,255,0.45); text-transform: uppercase; letter-spacing: 0.14em; text-decoration: none; transition: color .2s; }
        .content-breadcrumb:hover { color: #a3e635; }
        .content-hero-grid { display: grid; grid-template-columns: minmax(0, 1.07fr) minmax(360px, .93fr); gap: 18px; align-items: stretch; }
        .content-eyebrow { display: inline-flex; align-items: center; gap: 9px; margin-bottom: 22px; padding: 8px 14px; border-radius: 999px; border: 1px solid rgba(163,230,53,0.22); background: rgba(163,230,53,0.08); color: #a3e635; font-family: Space Mono, monospace; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: .12em; }
        .content-eyebrow::before { content: ''; width: 7px; height: 7px; border-radius: 999px; background: #a3e635; box-shadow: 0 0 22px rgba(163,230,53,.75); }
        .content-title { max-width: 780px; margin: 0 0 22px; font-family: serif; font-size: clamp(2.75rem, 6vw, 5.75rem); line-height: .94; letter-spacing: -0.045em; color: #fff; }
        .content-description { max-width: 684px; margin: 0; font-size: 15px; line-height: 1.9; color: rgba(255,255,255,.58); }
        .content-stat-row { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 32px; }
        .content-stat { min-width: 136px; border: 1px solid rgba(255,255,255,.08); border-radius: 18px; background: rgba(255,255,255,.035); padding: 15px 16px; }
        .content-stat strong { display: block; color: #fff; font-family: Space Mono, monospace; font-size: 20px; line-height: 1; }
        .content-stat span { display: block; margin-top: 7px; color: rgba(255,255,255,.36); font-family: Space Mono, monospace; font-size: 9.5px; letter-spacing: .08em; text-transform: uppercase; }
        .content-image-panel { position: relative; min-height: 520px; border-radius: 26px; overflow: hidden; background: radial-gradient(circle at 25% 10%, rgba(163,230,53,.24), transparent 30%), linear-gradient(135deg, #1d2118, #0d0d0b); border: 1px solid rgba(255,255,255,.08); box-shadow: 0 28px 80px rgba(0,0,0,.32); }
        .content-image-panel img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; display: block; }
        .content-image-overlay { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(0,0,0,.08), rgba(0,0,0,.68)); }
        .content-image-grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px); background-size: 42px 42px; opacity: .24; }
        .content-image-badge { position: absolute; top: 18px; left: 18px; padding: 8px 12px; border-radius: 999px; border: 1px solid rgba(163,230,53,.25); background: rgba(0,0,0,.45); backdrop-filter: blur(12px); color: #a3e635; font-family: Space Mono, monospace; font-size: 10px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; }
        .content-image-caption { position: absolute; left: 22px; right: 22px; bottom: 22px; border-radius: 20px; border: 1px solid rgba(255,255,255,.1); background: rgba(13,13,11,.74); backdrop-filter: blur(18px); padding: 20px; }
        .content-image-caption span { display: block; margin-bottom: 7px; color: rgba(255,255,255,.38); font-family: Space Mono, monospace; font-size: 9.5px; letter-spacing: .1em; text-transform: uppercase; }
        .content-image-caption strong { display: block; color: #fff; font-family: serif; font-size: clamp(1.35rem, 2vw, 1.85rem); line-height: 1.1; }
        .content-panel-section { padding: 64px 24px; background: #f5f4f0; }
        .content-section-heading { max-width: 680px; margin: 0 0 26px; font-family: serif; font-size: clamp(2rem, 4vw, 3.25rem); line-height: 1; letter-spacing: -.035em; color: #0d0d0b; }
        .content-link-grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 12px; }
        .content-link-card { display: flex; align-items: center; justify-content: space-between; gap: 16px; min-height: 104px; padding: 20px; border-radius: 22px; background: #fff; border: 1px solid rgba(0,0,0,.06); color: #111; text-decoration: none; transition: transform .25s ease, border-color .25s ease, background .25s ease, box-shadow .25s ease; }
        .content-link-card:hover { transform: translateY(-3px); border-color: rgba(163,230,53,.65); box-shadow: 0 18px 45px rgba(0,0,0,.08); }
        .content-link-card span:first-child { display: block; font-family: Space Mono, monospace; font-size: 10px; color: rgba(0,0,0,.38); margin-bottom: 10px; }
        .content-link-card span:last-child { display: block; font-size: 14px; font-weight: 600; color: #111; line-height: 1.25; }
        .content-link-icon { flex: 0 0 auto; width: 34px; height: 34px; border-radius: 999px; display: grid; place-items: center; background: #0d0d0b; color: #a3e635; }
        .content-article-section { padding: 70px 24px; background: #0d0d0b; }
        .content-article-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 16px; }
        .content-article-card { border-radius: 26px; border: 1px solid rgba(255,255,255,.08); background: #161614; padding: 28px; }
        .content-article-card small { display: block; margin-bottom: 14px; font-family: Space Mono, monospace; font-size: 10px; color: #a3e635; font-weight: 700; text-transform: uppercase; letter-spacing: .12em; }
        .content-article-card h2 { margin: 0 0 12px; font-family: serif; color: #fff; font-size: clamp(1.55rem, 2.5vw, 2rem); line-height: 1.05; }
        .content-article-card p { margin: 0 0 18px; color: rgba(255,255,255,.55); font-size: 13.5px; line-height: 1.85; }
        .content-story { padding: 0; }
        .content-story-row { padding: 52px 24px; }
        .content-story-row.is-dark { background: #0d0d0b; color: #fff; }
        .content-story-row.is-light { background: #f5f4f0; color: #0d0d0b; }
        .content-story-card { display: grid; grid-template-columns: 320px minmax(0,1fr); gap: 14px; max-width: 1152px; margin: 0 auto; }
        .content-story-index { border-radius: 22px; padding: 30px; min-height: 260px; display: flex; flex-direction: column; justify-content: space-between; background: #161614; border: 1px solid rgba(255,255,255,.08); }
        .is-light .content-story-index { background: #0d0d0b; }
        .content-story-index strong { font-family: Space Mono, monospace; font-size: clamp(2.8rem, 6vw, 4.7rem); line-height: .85; color: #fff; letter-spacing: -.06em; }
        .content-story-index span { display: inline-flex; width: fit-content; align-items: center; gap: 7px; padding: 7px 11px; border-radius: 999px; border: 1px solid rgba(163,230,53,.22); background: rgba(163,230,53,.08); color: #a3e635; font-family: Space Mono, monospace; font-size: 9.5px; text-transform: uppercase; letter-spacing: .1em; }
        .content-story-copy { border-radius: 22px; padding: 34px; background: rgba(255,255,255,.045); border: 1px solid rgba(255,255,255,.08); }
        .is-light .content-story-copy { background: #fff; border-color: rgba(0,0,0,.06); }
        .content-story-copy h2 { margin: 0 0 14px; font-family: serif; font-size: clamp(1.65rem, 3vw, 2.7rem); line-height: 1.03; letter-spacing: -.03em; color: inherit; }
        .content-story-copy p { margin: 0 0 22px; font-size: 14px; line-height: 1.9; color: rgba(255,255,255,.55); }
        .is-light .content-story-copy p { color: rgba(0,0,0,.56); }
        .content-bullet-list { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 10px; list-style: none; margin: 0; padding: 0; }
        .content-bullet-list li { display: flex; gap: 10px; align-items: flex-start; border-radius: 15px; padding: 13px 14px; background: #f5f4f0; border: 1px solid rgba(0,0,0,.05); color: rgba(0,0,0,.67); font-size: 12.6px; line-height: 1.65; }
        .content-bullet-list li.is-dark { background: rgba(255,255,255,.045); border-color: rgba(255,255,255,.08); color: rgba(255,255,255,.6); }
        .content-bullet-list li span { flex: 0 0 auto; width: 6px; height: 6px; border-radius: 999px; margin-top: 8px; background: #a3e635; box-shadow: 0 0 15px rgba(163,230,53,.5); }
        .content-faq-section { padding: 72px 24px; background: #0d0d0b; color: #fff; }
        .content-faq-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 14px; }
        .content-faq-card { border-radius: 22px; border: 1px solid rgba(255,255,255,.08); background: #161614; padding: 24px; }
        .content-faq-card h3 { margin: 0 0 10px; font-size: 15px; color: #fff; font-weight: 600; line-height: 1.35; }
        .content-faq-card p { margin: 0; color: rgba(255,255,255,.52); font-size: 13px; line-height: 1.8; }
        .content-cta { padding: 66px 24px 84px; background: #f5f4f0; }
        .content-cta-card { display: grid; grid-template-columns: minmax(0,1fr) auto; gap: 26px; align-items: center; max-width: 1152px; margin: 0 auto; border-radius: 30px; background: #0d0d0b; color: #fff; padding: 34px; overflow: hidden; position: relative; }
        .content-cta-card::after { content: ''; position: absolute; width: 360px; height: 360px; right: -130px; bottom: -170px; border-radius: 999px; background: radial-gradient(circle, rgba(163,230,53,.2), transparent 65%); }
        .content-cta-card h2 { position: relative; margin: 0 0 9px; font-family: serif; font-size: clamp(1.85rem, 4vw, 3rem); line-height: 1; }
        .content-cta-card p { position: relative; margin: 0; color: rgba(255,255,255,.48); font-size: 13.5px; line-height: 1.8; max-width: 620px; }
        .content-cta-actions { position: relative; z-index: 1; display: flex; flex-wrap: wrap; gap: 10px; }
        .content-primary-btn, .content-secondary-btn { display: inline-flex; align-items: center; gap: 9px; justify-content: center; height: 46px; padding: 0 19px; border-radius: 13px; font-size: 13px; font-weight: 700; text-decoration: none; transition: transform .2s, background .2s, border-color .2s; }
        .content-primary-btn { background: #a3e635; color: #050505; }
        .content-secondary-btn { color: #fff; border: 1px solid rgba(255,255,255,.12); background: rgba(255,255,255,.045); }
        .content-primary-btn:hover, .content-secondary-btn:hover { transform: translateY(-2px); }
        .content-secondary-btn:hover { border-color: rgba(163,230,53,.42); color: #a3e635; }
        @media (max-width: 1023px) {
          .content-hero-grid, .content-story-card, .content-cta-card { grid-template-columns: 1fr; }
          .content-image-panel { min-height: 420px; }
          .content-link-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
          .content-story-index { min-height: 180px; }
        }
        @media (max-width: 640px) {
          .content-hero { padding-top: 116px; }
          .content-link-grid, .content-article-grid, .content-bullet-list, .content-faq-grid { grid-template-columns: 1fr; }
          .content-image-panel { min-height: 340px; }
          .content-story-copy, .content-story-index, .content-cta-card { padding: 24px; }
        }
      `}</style>

      <main className="content-shell">
        <section className="content-hero">
          <div className="content-wrap">
            <Link to="/" className="content-breadcrumb">← Home</Link>
            <div className="content-hero-grid">
              <div>
                <span className="content-eyebrow">{page.eyebrow}</span>
                <h1 className="content-title">{page.title}</h1>
                <p className="content-description">{page.description}</p>
                <div className="content-stat-row">
                  {pageStats.map(stat => (
                    <div className="content-stat" key={stat.label}>
                      <strong>{stat.value}</strong>
                      <span>{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <ImagePanel image={page.image} title={page.title} eyebrow={page.eyebrow} />
            </div>
          </div>
        </section>

        {page.links && (
          <section className="content-panel-section">
            <div className="content-wrap">
              <h2 className="content-section-heading">Explore {page.eyebrow}</h2>
              <div className="content-link-grid">
                {page.links.map((item, index) => (
                  <Link key={`${item.label}-${item.path}`} to={item.path} className="content-link-card">
                    <span>
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <span>{item.label}</span>
                    </span>
                    <span className="content-link-icon"><ArrowUpRight size={14} /></span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {page.articles && (
          <section className="content-article-section">
            <div className="content-wrap">
              <h2 className="content-section-heading" style={{ color: '#fff' }}>Featured resources</h2>
              <div className="content-article-grid">
                {page.articles.map(article => (
                  <article key={article.title} className="content-article-card">
                    <small>{article.category}</small>
                    <h2>{article.title}</h2>
                    <p>{article.summary}</p>
                    <BulletList bullets={article.points} dark />
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="content-story">
          {sections.map((section, index) => {
            const isDark = index % 2 === 0;
            return (
              <div key={section.title} className={`content-story-row ${isDark ? 'is-dark' : 'is-light'}`}>
                <div className="content-story-card">
                  <div className="content-story-index">
                    <strong>{String(index + 1).padStart(2, '0')}</strong>
                    <span>{page.eyebrow}</span>
                  </div>
                  <div className="content-story-copy">
                    <h2>{section.title}</h2>
                    {section.body && <p>{section.body}</p>}
                    <BulletList bullets={section.bullets} dark={isDark} />
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {page.faqs && (
          <section className="content-faq-section">
            <div className="content-wrap">
              <h2 className="content-section-heading" style={{ color: '#fff' }}>Frequently Asked Questions</h2>
              <div className="content-faq-grid">
                {page.faqs.map(({ q, a }) => (
                  <div key={q} className="content-faq-card">
                    <h3>{q}</h3>
                    <p>{a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="content-cta">
          <div className="content-cta-card">
            <div>
              <h2>Ready to discuss your workflow?</h2>
              <p>Share your current billing, technology, or specialty-support needs and BJ will help map the practical next steps.</p>
            </div>
            <div className="content-cta-actions">
              <Link to="/contact" className="content-primary-btn">Book a Free Consultation <ArrowUpRight size={14} /></Link>
              <Link to="/" className="content-secondary-btn">Back to Home</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContentPage;
