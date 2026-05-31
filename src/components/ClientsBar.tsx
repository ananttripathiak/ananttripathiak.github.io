const techs = [
  'Python', 'PyTorch', 'TensorFlow', 'Scikit-Learn', 'XGBoost', 'LightGBM',
  'LangChain', 'LlamaIndex', 'Transformers', 'Keras', 'Generative AI', 'LLMs',
  'RAG Systems', 'MLflow', 'Docker', 'FastAPI', 'Streamlit', 'Hugging Face',
  'AWS', 'GCP', 'Azure OpenAI', 'Databricks', 'Snowflake', 'GitHub Actions',
  'FAISS', 'Pinecone', 'PostgreSQL', 'MongoDB', 'Pandas', 'NumPy', 'Prompt Engineering',
]

export default function ClientsBar() {
  const doubled = [...techs, ...techs]
  return (
    <div className="bg-bg-2 border-y border-white/[0.06] py-5 overflow-hidden group">
      <div className="flex gap-16 w-max animate-marquee group-hover:[animation-play-state:paused]">
        {doubled.map((c, i) => (
          <span
            key={i}
            className="text-[0.85rem] font-bold text-t3 uppercase tracking-widest shrink-0 hover:text-accent-light transition-colors cursor-default"
          >
            {c}
          </span>
        ))}
      </div>
    </div>
  )
}
