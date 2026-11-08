import { Link, Navigate, useLocation } from 'react-router-dom';
import { Head } from 'vite-react-ssg';
import { contentPages } from '../data/siteContent';

const ContentPage = () => {
  const { pathname } = useLocation();
  const page = contentPages.find(item => item.path === pathname);

  if (!page) return <Navigate to="/404" replace />;

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
          <div className="max-w-3xl mb-12">
            <span className="inline-block px-4 py-2 rounded-full font-mono text-[11px] bg-[#f5f4f0] text-zinc-500 mb-5">{page.eyebrow}</span>
            <h1 className="font-serif text-[clamp(2.6rem,5vw,4.5rem)] text-black leading-[1.02] mb-5">{page.title}</h1>
            <p className="font-sans text-[15px] text-zinc-500 leading-[1.8] max-w-2xl">{page.description}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {page.sections.map((section, index) => (
              <div key={section} className="rounded-2xl border border-black/5 bg-[#f9f9f7] p-6">
                <div className="font-mono text-[10px] text-[#a3e635] font-bold mb-3">{String(index + 1).padStart(2, '0')}</div>
                <h2 className="font-sans text-[16px] font-semibold text-black leading-snug">{section}</h2>
              </div>
            ))}
          </div>

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
