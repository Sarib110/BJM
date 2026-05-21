const TechStack = () => {
  const s = ['OpenAI', 'LangChain', 'Pinecone', 'Python', 'FastAPI', 'Next.js', 'React', 'Supabase', 'Vercel', 'HuggingFace', 'Llama 3', 'Docker', 'PostgreSQL', 'Anthropic', 'Retell AI', 'n8n', 'Tailwind CSS'];
  const d = [...s, ...s];
  return (
    <div className="py-10 bg-white border-y border-zinc-100 overflow-hidden">
      <div className="text-center mb-7"><span className="tag-pill">Powered by modern infrastructure</span></div>
      <div className="mq-wrap">
        <div className="mq-track">
          {d.map((t, i) => <span key={i} className="inline-flex items-center gap-2.5 px-5 font-mono text-[10.5px] text-zinc-400 font-bold uppercase tracking-widest whitespace-nowrap"><span className="lime-dot" style={{ width: 5, height: 5, opacity: 0.45 }} />{t}</span>)}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
