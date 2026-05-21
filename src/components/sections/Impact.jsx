import Ic from '../ui/Icon';
import Counter from '../ui/Counter';

const Impact = () => {
  const tms = [
    { q: "Veloq doesn't just build software — they engineer velocity. Their precision allowed us to execute at a speed we thought was impossible for our scale.", name: 'Stephen Chen', co: 'Phunware' },
    { q: "The ability to scale our core operations globally without adding a single staff member has fundamentally altered our unit economics.", name: 'Tanzim', co: 'AutoScale Agents' },
    { q: "When dealing with enterprise-grade deployments, trust is everything. Veloq delivers premium integration with absolute data security guarantees.", name: 'Khalil Ismael', co: 'Diyar MiddleEast' },
  ];
  return (
    <section id="impact" className="py-28 px-6 bg-[#0d0d0b] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 reveal">
          <div style={{ background: 'rgba(163,230,53,0.08)', color: 'rgba(163,230,53,0.7)', border: '1px solid rgba(163,230,53,0.15)', marginBottom: 20, display: 'inline-block' }} className="px-4 py-2 rounded-full font-mono text-[11px]">Impact realized</div>
          <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.5rem)] text-white leading-[1.06]">Partners who chose<br /><em className="not-italic text-[#a3e635]">engineering over theater.</em></h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-12">
          {[['$2.3M', 'Savings Generated', 'Diyar United'], ['340%', 'Conversion Increase', 'AutoScale Agents'], ['10×', 'Velocity Multiplier', 'Phunware']].map(([v, l, sub], i) => (
            <div key={i} className="border border-zinc-800 rounded-2xl p-7 text-center hover:border-zinc-700 transition-colors duration-300 reveal">
              <div className="font-mono text-3xl font-bold text-[#a3e635] mb-2"><Counter target={v} /></div>
              <div className="font-sans text-[13px] text-white font-medium mb-1">{l}</div>
              <div className="font-mono text-[10px] text-zinc-600">{sub}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {tms.map((t, i) => (
            <div key={i} className={`border border-zinc-800 rounded-2xl p-7 hover:border-zinc-700 transition-colors duration-300 flex flex-col gap-6 reveal delay-${i + 1}`}>
              <div className="text-[#a3e635]"><Ic n="quote" size={17} color="#a3e635" /></div>
              <p className="font-sans text-[12.5px] text-zinc-400 leading-[1.78] flex-1">{t.q}</p>
              <div className="border-t border-zinc-800 pt-4">
                <div className="font-sans text-[13px] font-semibold text-white">{t.name}</div>
                <div className="font-mono text-[10px] text-zinc-500 mt-0.5">{t.co}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
