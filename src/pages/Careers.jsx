import { Head } from 'vite-react-ssg';
import { jobs } from '../data/jobs';

const values = [
  {
    title: 'Operators own outcomes',
    desc: 'There is no handoff maze between you and the result. Every role owns a piece of the revenue cycle and is measured on clean claims, recoveries, and turnaround — not busywork.',
  },
  {
    title: 'Accuracy over shortcuts',
    desc: 'We do not chase aggressive coding that puts practices at risk. Compliance and documentation quality sit beside collection KPIs.',
  },
  {
    title: 'Clear communication',
    desc: 'Practices deserve straight answers. You will talk to people who understand payers, denials, and aging — not a ticket queue that disappears.',
  },
  {
    title: 'Small team, full cycle',
    desc: 'At this size, you see the whole path from eligibility to cash. You will touch coding, claims, denials, and client reporting — often in the same week.',
  },
];

const CareersPage = () => (
  <>
    <Head>
      <title>Careers — BJ Medical Billing Service</title>
      <meta name="description" content="Career opportunities with BJ Medical Billing Service across eligibility, medical coding, claim submission, payment posting, denial management, insurance A/R, credentialing, and client reporting." />
      <meta property="og:title" content="Careers at BJ Medical Billing Service" />
      <meta property="og:description" content="Billing professionals who want ownership, accuracy, and real impact on practice cash flow." />
      <meta property="og:url" content="https://bjmbilling.com/careers" />
    </Head>

    {/* Hero */}
    <div className="pt-32 pb-20 px-6 bg-[#0d0d0b]">
      <div className="max-w-6xl mx-auto">
        <div className="inline-block px-4 py-2 rounded-full font-mono text-[11px] bg-[#a3e635]/10 text-[#a3e635]/70 border border-[#a3e635]/20 mb-5">Careers</div>
        <h1 className="font-serif text-[clamp(2.4rem,5vw,4rem)] text-white leading-[1.04] mb-5">
          Protect practice revenue.<br /><em className="not-italic text-[#a3e635]">Own the cycle.</em>
        </h1>
        <p className="font-sans text-[14px] text-zinc-400 max-w-xl leading-[1.8]">
          BJ Medical Billing Service supports healthcare practices across eligibility, coding, charge entry, claim submission, payment posting, denials, insurance follow-up, credentialing, and reporting. Each role is expected to document work clearly and understand how its decisions affect the next revenue-cycle queue.
        </p>
      </div>
    </div>

    {/* Open Roles */}
    <section className="py-20 px-6 bg-[#f5f4f0]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] text-black leading-tight mb-3">Open Roles</h2>
        </div>

        {jobs.length > 0 ? (
          <div className="flex flex-col gap-4">
            {jobs.map(job => (
              <div key={job.id} className="bg-white rounded-2xl border border-zinc-200 p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="font-sans font-semibold text-[16px] text-black mb-1">{job.title}</h3>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-[10px] text-zinc-500 bg-zinc-100 px-2.5 py-1 rounded-full">{job.type}</span>
                    <span className="font-mono text-[10px] text-zinc-500">{job.location}</span>
                  </div>
                  <p className="font-sans text-[13px] text-zinc-500 leading-[1.7] max-w-xl">{job.blurb}</p>
                </div>
                <a
                  href={`mailto:hello@bjmbilling.com?subject=Application: ${job.title}`}
                  className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-black text-white font-sans font-medium text-[13px] hover:bg-zinc-800 transition-all"
                >
                  Apply
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-zinc-200 p-10 text-center max-w-xl mx-auto">
            <div className="w-12 h-12 rounded-full bg-[#f5f4f0] flex items-center justify-center mx-auto mb-5">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a3e635" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
            </div>
            <h3 className="font-sans font-semibold text-[16px] text-black mb-2">No open roles right now</h3>
            <p className="font-sans text-[13px] text-zinc-500 leading-[1.7] mb-7">
              We're not actively hiring at the moment, but we're always interested in billing professionals who care about accuracy and outcomes. Send us your resume and we'll keep you in mind.
            </p>
            <a
              href="mailto:hello@bjmbilling.com?subject=General Application — Medical Billing"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-black text-white font-sans font-medium text-[13px] hover:bg-zinc-800 transition-all"
            >
              Send Your Resume
            </a>
          </div>
        )}
      </div>
    </section>

    {/* Culture & Values */}
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="inline-block px-4 py-2 rounded-full font-mono text-[11px] bg-[#f5f4f0] text-zinc-500 mb-5">How we work</div>
          <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] text-black leading-tight mb-3">
            Operators and specialists.<br /><em className="not-italic text-[#a3e635]">Not ticket takers.</em>
          </h2>
          <p className="font-sans text-[14px] text-zinc-500 max-w-lg leading-[1.8]">
            Our medical billing work depends on accurate data, payer-specific follow-up, complete notes, and reliable handoffs. Here's what that means day-to-day.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map(({ title, desc }) => (
            <div key={title} className="glass-card rounded-2xl p-7">
              <div className="w-7 h-[2px] bg-[#a3e635] mb-5" />
              <h3 className="font-sans font-semibold text-[15px] text-black mb-3">{title}</h3>
              <p className="font-sans text-[13px] text-zinc-500 leading-[1.75]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="py-16 px-6 bg-[#f5f4f0]">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] text-black leading-tight mb-4">Think you'd fit?</h2>
        <p className="font-sans text-[13.5px] text-zinc-500 leading-[1.8] mb-8">
          No open roles doesn't mean not interested. Send a short note and your experience across coding, claims, denials, or A/R. That's enough to start a conversation.
        </p>
        <a
          href="mailto:hello@bjmbilling.com?subject=Hey, I work in medical billing"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-black text-white font-sans font-medium text-[13px] hover:bg-zinc-800 transition-all btn-shine"
        >
          Get in Touch
        </a>
      </div>
    </section>
  </>
);

export default CareersPage;
