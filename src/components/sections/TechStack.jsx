const TechStack = () => {
  const s = ['CPT', 'ICD-10', 'HCPCS', 'EDI 837', 'Clearinghouse', 'Eligibility 270/271', 'ERA/EOB', 'CAQH', 'Prior Auth', 'Denial Codes', 'A/R Aging', 'HIPAA', 'EMR Workflows', 'Modifier Rules', 'Payer Portals', 'Clean Claim Edits', 'Appeals'];
  const d = [...s, ...s];
  return (
    <div className="py-10 bg-white border-y border-zinc-100 overflow-hidden">
      <div className="text-center mb-7"><span className="tag-pill">Medical billing workflow coverage</span></div>
      <div className="mq-wrap">
        <div className="mq-track">
          {d.map((t, i) => <span key={i} className="inline-flex items-center gap-2.5 px-5 font-mono text-[10.5px] text-zinc-400 font-bold uppercase tracking-widest whitespace-nowrap"><span className="lime-dot" style={{ width: 5, height: 5, opacity: 0.45 }} />{t}</span>)}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
