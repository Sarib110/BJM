import Ic from '../ui/Icon';
import { services } from '../../data/services';

const Services = () => (
  <section id="services" className="py-28 px-6 bg-white">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((s, i) => (
          <div key={i} className={`glass-card rounded-2xl p-7 hover-lift hover-glow group cursor-default transition-colors duration-300 reveal delay-${(i % 3) + 1}`}>
            <div className="w-9 h-9 rounded-xl bg-zinc-100 flex items-center justify-center mb-5 group-hover:bg-[#f0fad3] transition-colors duration-300"><Ic n={s.icon} size={17} color="#333" /></div>
            <h3 className="font-sans font-semibold text-[14.5px] text-black mb-2.5 tracking-[-0.01em]">{s.title}</h3>
            <p className="font-sans text-[13px] text-zinc-500 leading-[1.72] mb-5">{s.desc}</p>
            <div className="flex flex-wrap gap-1.5">{s.tags.map(t => <span key={t} className="tag-pill">{t}</span>)}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
