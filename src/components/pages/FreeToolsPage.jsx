import { Link } from 'react-router-dom';
import { Head } from 'vite-react-ssg';

const FreeToolsPage = () => (
  <>
    <Head>
      <title>Free SEO Tools — Veloq</title>
      <meta name="description" content="Free AI-powered SEO tools from Veloq: Visibility Check and AI Crawl Audit. Boost your website's search performance." />
    </Head>
    <div className="pt-36 pb-24 px-6 min-h-[80vh] bg-white max-w-5xl mx-auto flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-5xl font-serif text-black mb-4 text-center">Free SEO Tools</h1>
      <p className="text-zinc-500 text-center mb-12 max-w-xl mx-auto">
        Boost your website's performance with our suite of free, powerful AI and visibility tools.
      </p>

      <div className="grid md:grid-cols-2 gap-6 w-full">
        <Link
          to="/tools/visibility-check"
          className="text-left p-10 rounded-3xl border border-zinc-200 hover:border-black transition-all group hover:shadow-xl bg-zinc-50/50 hover:bg-white"
        >
          <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
          </div>
          <h2 className="text-2xl font-serif text-black mb-3">Visibility Check</h2>
          <p className="text-zinc-500 mb-8 leading-relaxed">Analyze your website's search engine visibility and get actionable insights to rank higher in search results.</p>
          <span className="font-sans font-medium text-[13px] text-black border-b border-black pb-0.5 uppercase tracking-wide">Launch Tool</span>
        </Link>

        <Link
          to="/tools/ai-crawl-audit"
          className="text-left p-10 rounded-3xl border border-zinc-200 hover:border-black transition-all group hover:shadow-xl bg-zinc-50/50 hover:bg-white"
        >
          <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
          </div>
          <h2 className="text-2xl font-serif text-black mb-3">AI Crawl Audit</h2>
          <p className="text-zinc-500 mb-8 leading-relaxed">Let our advanced AI crawl your site to find technical SEO issues, broken links, and optimization opportunities.</p>
          <span className="font-sans font-medium text-[13px] text-black border-b border-black pb-0.5 uppercase tracking-wide">Launch Tool</span>
        </Link>
      </div>
    </div>
  </>
);

export default FreeToolsPage;
