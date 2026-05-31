'use client'

import { motion } from 'framer-motion'

const services = [
  {
    icon: (
      <svg className="w-7 h-7 stroke-white fill-none stroke-[1.5]" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    gradient: 'from-blue-900 to-blue-600',
    title: 'Marketing Mix Optimization',
    desc: 'SME for Axtria\'s MarketingIQ Optimization module. SLSQP, COBYLA, CCSA, Pyomo — portfolio-level and single-brand optimization for global pharma clients.',
  },
  {
    icon: (
      <svg className="w-7 h-7 stroke-white fill-none stroke-[1.5]" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3" />
      </svg>
    ),
    gradient: 'from-purple-900 to-purple-600',
    title: 'LLMs & GenAI Engineering',
    desc: 'Production RAG pipelines, vector search with FAISS & Pinecone, LangChain, LlamaIndex, Azure OpenAI — end-to-end GenAI systems that scale in the real world.',
  },
  {
    icon: (
      <svg className="w-7 h-7 stroke-white fill-none stroke-[1.5]" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3" />
      </svg>
    ),
    gradient: 'from-emerald-900 to-emerald-600',
    title: 'MLOps & Deployment',
    desc: 'Docker, MLflow, GitHub Actions CI/CD, FastAPI, Databricks — production-grade ML deployment, model monitoring, and end-to-end pipeline automation.',
  },
  {
    icon: (
      <svg className="w-7 h-7 stroke-white fill-none stroke-[1.5]" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    gradient: 'from-orange-900 to-orange-600',
    title: 'Predictive Analytics',
    desc: 'XGBoost, LightGBM, Random Forest, LSTM — forecast trends, identify early adopters, and power data-driven decisions with advanced ML models at scale.',
  },
  {
    icon: (
      <svg className="w-7 h-7 stroke-white fill-none stroke-[1.5]" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    gradient: 'from-indigo-900 to-indigo-600',
    title: 'System Design & Architecture',
    desc: 'Scalable ML system architecture, API design, code stabilisation roadmaps, and UAT processes — built for enterprise-grade reliability and long-term maintainability.',
  },
  {
    icon: (
      <svg className="w-7 h-7 stroke-white fill-none stroke-[1.5]" viewBox="0 0 24 24">
        <ellipse cx="12" cy="5" rx="9" ry="3" strokeLinecap="round" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" strokeLinecap="round" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" strokeLinecap="round" />
      </svg>
    ),
    gradient: 'from-sky-900 to-sky-600',
    title: 'Data Engineering',
    desc: 'Apache Spark, Databricks, Snowflake, Kafka, Airflow — build robust data pipelines and infrastructure optimised for ML operations and real-time analytics.',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut', delay: i * 0.08 },
  }),
}

export default function Services() {
  return (
    <section id="services" className="py-24 bg-bg">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-[clamp(1.7rem,3vw,2.4rem)] font-black text-t1 tracking-[-0.02em] mb-3">
            Our Ultimate Set of Services for<br />Your Business Implementation
          </h2>
          <p className="text-[0.95rem] text-t2 max-w-[480px] mx-auto leading-relaxed">
            From marketing mix optimisation to production GenAI systems — end-to-end ML
            engineering that drives real outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group bg-card border border-white/[0.06] rounded-2xl p-7 relative overflow-hidden cursor-default transition-shadow hover:shadow-[0_20px_60px_rgba(37,99,235,0.10)] hover:border-accent/20"
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

              <div className={`w-16 h-16 rounded-[16px] bg-gradient-to-br ${s.gradient} flex items-center justify-center mb-5 relative z-10`}>
                {s.icon}
              </div>
              <h3 className="text-[1.05rem] font-bold text-t1 mb-2.5 relative z-10">{s.title}</h3>
              <p className="text-[0.83rem] text-t2 leading-[1.75] relative z-10">{s.desc}</p>
              <div className="flex items-center gap-1.5 mt-4 text-[0.78rem] text-accent-light font-semibold relative z-10 group-hover:gap-2.5 transition-all">
                Read More
                <svg className="w-3 h-3 stroke-current fill-none stroke-[2.5]" viewBox="0 0 24 24">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
