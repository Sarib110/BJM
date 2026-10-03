import { Link } from 'react-router-dom';
import { Head } from 'vite-react-ssg';

const NotFound = () => (
  <>
    <Head>
      <title>404 — Page Not Found — BJM</title>
    </Head>
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 py-32 text-center">
      <span className="font-mono text-[11px] text-zinc-400 uppercase tracking-widest mb-6">404</span>
      <h1 className="font-serif text-[clamp(2rem,5vw,3.5rem)] text-black leading-tight mb-4">
        Page not found.
      </h1>
      <p className="font-sans text-[14px] text-zinc-500 max-w-sm leading-[1.8] mb-10">
        That page doesn't exist. Maybe it was moved, maybe it never was. Either way, the homepage knows what to do.
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-black text-white font-sans font-medium text-[13px] hover:bg-zinc-800 transition-all">
          Go Home
        </Link>
        <Link to="/work" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-zinc-200 text-black font-sans font-medium text-[13px] hover:border-zinc-400 transition-all">
          View Case Studies
        </Link>
      </div>
    </div>
  </>
);

export default NotFound;
