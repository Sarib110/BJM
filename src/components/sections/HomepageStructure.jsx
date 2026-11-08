import { Link } from 'react-router-dom';
import { homepageSections } from '../../data/siteContent';
import Ic from '../ui/Icon';

const HomepageStructure = () => (
  <section className="py-24 px-6 bg-[#f9f9f7]">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 reveal">
        <div>
          <div className="inline-block px-4 py-2 rounded-full font-mono text-[11px] bg-white text-zinc-500 mb-4">BJ website overview</div>
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-black leading-[1.06]">Everything your practice needs<br /><em className="not-italic text-[#a3e635]">in one service structure.</em></h2>
        </div>
        <Link to="/contact" className="inline-flex items-center gap-2 font-sans text-[13px] font-medium text-black hover:text-zinc-500 transition-colors flex-shrink-0">
          Request a Free Consultation <Ic n="arrow_r" size={13} color="currentColor" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {homepageSections.map((section, index) => (
          <Link key={section.title} to={section.path} className="group rounded-3xl border border-black/5 bg-white p-6 hover:border-[#a3e635]/60 hover:-translate-y-1 transition-all duration-300">
            <div className="font-mono text-[10px] text-[#a3e635] font-bold mb-4">{String(index + 2).padStart(2, '0')}</div>
            <h3 className="font-serif text-[1.55rem] text-black leading-[1.08] mb-5">{section.title}</h3>
            <div className="flex flex-wrap gap-2">
              {section.items.map(item => (
                <span key={item} className="rounded-full border border-black/5 bg-[#f9f9f7] px-3 py-1.5 font-sans text-[12px] text-zinc-500 group-hover:text-zinc-700 transition-colors">
                  {item}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default HomepageStructure;
