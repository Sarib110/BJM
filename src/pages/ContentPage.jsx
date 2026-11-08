import { Link, Navigate, useLocation } from 'react-router-dom';
import { Head } from 'vite-react-ssg';
import { contentPages } from '../data/siteContent';
import { withBase } from '../utils/withBase';

const normalizeSection = section => (typeof section === 'string' ? { title: section, body: '', bullets: [] } : section);

const ContentPage = () => {
  const { pathname } = useLocation();
  const page = contentPages.find(item => item.path === pathname);

  if (!page) return <Navigate to="/404" replace />;

  const sections = page.sections.map(normalizeSection);

  return (
    <>
      <Head>
        <title>{page.title} — BJ Medical Billing Service</title>
        <meta name="description" content={page.description} />
        <meta property="og:title" content={`${page.title} — BJ Medical Billing Service`} />
        <meta property="og:description" content={page.description} />
      </Head>

      <section className="pt-32 pb-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 font-mono text-[11px] text-zinc-500 hover:text-black transition-colors uppercase tracking-widest mb-10">
            ← Home
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center mb-14">
            <div>
              <span className="inline-block px-4 py-2 rounded-full font-mono text-[11px] bg-[#f5f4f0] text-zinc-500 mb-5">{page.eyebrow}</span>
              <h1 className="font-serif text-[clamp(2.6rem,5vw,4.5rem)] text-black leading-[1.02] mb-5">{page.title}</h1>
              <p className="font-sans text-[15px] text-zinc-500 leading-[1.85] max-w-2xl">{page.description}</p>
            </div>
            {page.image && (
              <div className="overflow-hidden rounded-3xl border border-black/5 bg-[#f5f4f0] shadow-sm" style={{ aspectRatio: '16/11' }}>
                <img src={withBase(page.image)} alt={page.title} className="h-full w-full object-cover" />
              </div>
            )}
          </div>

          {page.links && (
            <div className="mb-12 rounded-3xl border border-black/5 bg-[#f9f9f7] p-6">
              <h2 className="font-serif text-[clamp(1.8rem,3vw,2.4rem)] text-black leading-[1.06] mb-5">Explore {page.eyebrow}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {page.links.map(item => (
                  <Link key={`${item.label}-${item.path}`} to={item.path} className="rounded-2xl bg-white border border-black/5 px-4 py-3 font-sans text-[13px] text-zinc-600 hover:text-black hover:border-[#a3e635]/60 transition-colors">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {page.articles && (
            <div className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-5">
              {page.articles.map(article => (
                <article key={article.title} className="rounded-3xl border border-black/5 bg-[#f9f9f7] p-6">
                  <div className="font-mono text-[10px] text-[#a3e635] font-bold uppercase tracking-widest mb-3">{article.category}</div>
                  <h2 className="font-serif text-[1.7rem] text-black leading-tight mb-3">{article.title}</h2>
                  <p className="font-sans text-[13.5px] text-zinc-500 leading-[1.85] mb-4">{article.summary}</p>
                  <ul className="space-y-2">
                    {article.points.map(point => <li key={point} className="font-sans text-[13px] text-zinc-600 leading-relaxed">• {point}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {sections.map((section, index) => (
              <div key={section.title} className="rounded-2xl border border-black/5 bg-[#f9f9f7] p-6">
                <div className="font-mono text-[10px] text-[#a3e635] font-bold mb-3">{String(index + 1).padStart(2, '0')}</div>
                <h2 className="font-sans text-[17px] font-semibold text-black leading-snug mb-3">{section.title}</h2>
                {section.body && <p className="font-sans text-[13.5px] text-zinc-500 leading-[1.85] mb-4">{section.body}</p>}
                {section.bullets?.length > 0 && (
                  <ul className="space-y-2">
                    {section.bullets.map(bullet => <li key={bullet} className="font-sans text-[12.8px] text-zinc-600 leading-relaxed">• {bullet}</li>)}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {page.faqs && (
            <div className="mt-12 rounded-3xl border border-black/5 bg-white p-6">
              <h2 className="font-serif text-[2rem] text-black leading-tight mb-5">Frequently Asked Questions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {page.faqs.map(({ q, a }) => (
                  <div key={q} className="rounded-2xl bg-[#f9f9f7] p-5 border border-black/5">
                    <h3 className="font-sans text-[14px] font-semibold text-black mb-2">{q}</h3>
                    <p className="font-sans text-[13px] text-zinc-500 leading-[1.75]">{a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center px-5 py-3 rounded-xl bg-black text-white font-sans font-medium text-[13px] hover:bg-zinc-800 transition-colors">
              Book a Free Consultation
            </Link>
            <Link to="/" className="inline-flex items-center px-5 py-3 rounded-xl border border-black/10 text-black font-sans font-medium text-[13px] hover:border-black/30 transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContentPage;
