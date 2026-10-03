import { Link } from 'react-router-dom';
import { Head } from 'vite-react-ssg';
import { caseStudies } from '../data/billingCaseStudies';
import { withBase } from '../utils/withBase';

const WorkCard = ({ id, label, title, summary, image, stack, metric }) => (
  <Link
    to={`/work/${id}`}
    className="group block rounded-2xl overflow-hidden border border-zinc-200 hover:border-zinc-400 transition-all duration-300 hover:shadow-xl bg-white"
  >
    <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
      <img
        src={withBase(image)}
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
          View Billing Workflow →
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
      <title>Medical Billing Workflows — BJ Medical Billing Service</title>
      <meta name="description" content="Explore medical billing workflows for eligibility, coding, claims, payment posting, denial management, insurance A/R, credentialing, and full revenue cycle management." />
      <meta property="og:title" content="Medical Billing Workflows — BJ Medical Billing Service" />
      <meta property="og:description" content="See how BJ Medical Billing Service organizes medical billing work from front-end verification through payer follow-up." />
      <meta property="og:url" content="https://bjmbilling.com/work" />
    </Head>

    <div className="pt-32 pb-4 px-6 bg-[#0d0d0b]">
      <div className="max-w-6xl mx-auto">
        <div className="inline-block px-4 py-2 rounded-full font-mono text-[11px] bg-[#a3e635]/10 text-[#a3e635]/70 border border-[#a3e635]/20 mb-5">Medical billing workflows</div>
        <h1 className="font-serif text-[clamp(2.4rem,5vw,4rem)] text-white leading-[1.04] mb-5">
          Revenue cycle work.<br /><em className="not-italic text-[#a3e635]">Clearly organized.</em>
        </h1>
        <p className="font-sans text-[14px] text-zinc-400 max-w-lg leading-[1.8]">
          Review the workqueues, controls, handoffs, and reporting used to manage medical billing from patient intake through insurance A/R.
        </p>
      </div>
    </div>

    <section className="py-16 px-6 bg-[#f5f4f0]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map(cs => (
            <WorkCard
              key={cs.id}
              id={cs.id}
              label={cs.label}
              title={cs.title}
              tagline={cs.tagline}
              summary={cs.summary}
              image={cs.image}
              stack={cs.stack}
              metric={cs.metric}
              bg={cs.bg}
            />
          ))}
        </div>
      </div>
    </section>
  </>
);

export default WorkIndex;
