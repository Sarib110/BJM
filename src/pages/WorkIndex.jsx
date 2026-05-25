import { Link } from 'react-router-dom';
import { Head } from 'vite-react-ssg';
import { caseStudies } from '../data/caseStudies';

const WorkCard = ({ id, label, title, tagline, summary, image, stack, metric, bg }) => (
  <Link
    to={`/work/${id}`}
    className="group block rounded-2xl overflow-hidden border border-zinc-200 hover:border-zinc-400 transition-all duration-300 hover:shadow-xl bg-white"
  >
    <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />
      <div className="absolute top-4 left-4">
        <span className="font-mono text-[10px] text-[#a3e635] bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[#a3e635]/25 tracking-wide font-bold">
          {metric}
        </span>
      </div>
      <div className="absolute bottom-4 left-4">
        <span className="font-mono text-[9.5px] text-white/70 bg-white/15 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
          {label}
        </span>
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="font-mono text-[11px] font-bold text-white tracking-widest uppercase bg-black/50 px-4 py-2 rounded-full border border-white/20 backdrop-blur-sm">
          Read Case Study →
        </span>
      </div>
    </div>
    <div className="p-6">
      <h2 className="font-serif text-[1.35rem] text-black leading-tight mb-2">{title}</h2>
      <p className="font-sans text-[13px] text-zinc-500 leading-[1.75] mb-4">{summary}</p>
      <div className="flex flex-wrap gap-1.5">
        {stack.map(t => (
          <span key={t} className="px-2.5 py-1 rounded-full font-mono text-[10px] text-zinc-500 border border-zinc-200 bg-zinc-50">
            {t}
          </span>
        ))}
      </div>
    </div>
  </Link>
);

const WorkIndex = () => (
  <>
    <Head>
      <title>Case Studies — Veloq</title>
      <meta name="description" content="Production AI systems built by Veloq: voice agents, multi-agent research pipelines, logistics AI, recruitment platforms, and enterprise document intelligence." />
      <meta property="og:title" content="Case Studies — Veloq" />
      <meta property="og:description" content="Real systems. Real results. Browse Veloq's 8 production AI case studies with measurable ROI." />
      <meta property="og:url" content="https://veloq.tech/work" />
    </Head>

    <div className="pt-32 pb-4 px-6 bg-[#0d0d0b]">
      <div className="max-w-6xl mx-auto">
        <div className="inline-block px-4 py-2 rounded-full font-mono text-[11px] bg-[#a3e635]/10 text-[#a3e635]/70 border border-[#a3e635]/20 mb-5">Selected work</div>
        <h1 className="font-serif text-[clamp(2.4rem,5vw,4rem)] text-white leading-[1.04] mb-5">
          Production systems.<br /><em className="not-italic text-[#a3e635]">Real results.</em>
        </h1>
        <p className="font-sans text-[14px] text-zinc-400 max-w-lg leading-[1.8]">
          Eight production deployments. Measurable ROI. No demos, no prototypes.
        </p>
      </div>
    </div>

    <section className="py-16 px-6 bg-[#f5f4f0]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map(cs => <WorkCard key={cs.id} {...cs} />)}
        </div>
      </div>
    </section>
  </>
);

export default WorkIndex;
