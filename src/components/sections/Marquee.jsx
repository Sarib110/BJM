const Marquee = () => {
  const items = ['Full-Stack AI', 'GenAI Products', 'Workflow Automation', 'RAG Systems', 'Custom SaaS', 'LLM Integration', 'Voice Agents', 'Agentic Pipelines', 'Fine-Tuning', 'Production Engineering'];
  const d = [...items, ...items];
  return (
    <div className="py-5 border-y border-zinc-200 bg-white mq-wrap">
      <div className="mq-track">
        {d.map((x, i) => (
          <span key={i} className="inline-flex items-center gap-3 px-6 font-mono text-[11px] text-zinc-400 uppercase tracking-widest whitespace-nowrap">
            <span className="lime-dot flex-shrink-0" style={{ width: 5, height: 5, opacity: 0.55 }} />{x}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
