'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    gradient: 'from-[#0c1827] to-[#0d2347]',
    iconColor: 'from-blue-900 to-blue-600',
    badge: 'Production',
    tags: ['Python', 'SLSQP', 'FastAPI', 'Pyomo'],
    name: 'MARKETINGIQ — MMX OPTIMIZER',
    desc: 'SME for Axtria\'s flagship MarketingIQ Optimisation module. 10+ major capabilities shipped — Portfolio Optimisation, Pre/Post APIs, Scaling Revamp. Serving 15+ global pharma clients.',
    link: 'https://www.axtria.com/cloud-products/axtria-marketingiq-marketing-analytics/',
    linkLabel: 'View Product',
  },
  {
    gradient: 'from-[#0c1a0e] to-[#0d2810]',
    iconColor: 'from-emerald-900 to-emerald-600',
    badge: 'Open Source',
    tags: ['XGBoost', 'MLflow', 'Docker', 'CI/CD'],
    name: 'TOURISM PURCHASE PREDICTOR',
    desc: 'End-to-end MLOps pipeline predicting customer purchase behaviour. XGBoost + MLflow tracking, GitHub Actions CI/CD, Docker, Streamlit app deployed to Hugging Face Spaces.',
    link: 'https://github.com/ananttripathi/Tourism_Project',
    linkLabel: 'View on GitHub',
  },
  {
    gradient: 'from-[#1a0c18] to-[#280d22]',
    iconColor: 'from-purple-900 to-purple-600',
    badge: 'Open Source',
    tags: ['Random Forest', 'GBM', 'Time Series'],
    name: 'ENGINE PREDICTIVE MAINTENANCE',
    desc: 'Predictive maintenance system forecasting engine failures from IoT sensor data. Automated evaluation pipeline, model versioning, and interactive dashboards.',
    link: 'https://github.com/ananttripathi/engine-predictive-maintenance',
    linkLabel: 'View on GitHub',
  },
]

function MockScreen({ gradient }: { gradient: string }) {
  return (
    <div className={`h-[190px] bg-gradient-to-br ${gradient} flex items-center justify-center relative overflow-hidden`}>
      <div className="w-[78%] bg-white/[0.04] border border-white/[0.06] rounded-lg overflow-hidden">
        <div className="h-[14px] bg-white/[0.06] flex items-center gap-1 px-2">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/60" />
          <span className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
        </div>
        <div className="p-2.5 flex flex-col gap-1.5">
          <div className="w-8 h-8 rounded-md bg-gradient-to-br from-blue-900 to-blue-600" />
          <div className="h-1 rounded-full bg-white/[0.07] w-[80%]" />
          <div className="h-1 rounded-full bg-white/[0.07] w-[60%]" />
          <div className="h-1 rounded-full bg-white/[0.07] w-[70%]" />
          <div className="h-1 rounded-full bg-white/[0.07] w-[50%]" />
        </div>
      </div>
    </div>
  )
}

export default function Work() {
  return (
    <section id="work" className="py-24 bg-bg-2">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-[clamp(1.7rem,3vw,2.4rem)] font-black text-t1 tracking-[-0.02em] mb-3">
            Our Work, Your Future
          </h2>
          <p className="text-[0.95rem] text-t2 max-w-[480px] mx-auto leading-relaxed">
            Production systems and open-source projects spanning enterprise ML optimisation,
            MLOps pipelines, and predictive modelling.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group bg-card border border-white/[0.06] rounded-2xl overflow-hidden cursor-pointer hover:border-accent/25 hover:shadow-[0_24px_60px_rgba(37,99,235,0.10)] transition-shadow"
            >
              <MockScreen gradient={p.gradient} />
              <div className="absolute top-3 right-3 -mt-[167px] mr-0">
                <span className="px-2.5 py-1 bg-black/55 backdrop-blur border border-white/10 rounded-md text-[0.62rem] text-white/50 font-bold tracking-wider uppercase">
                  {p.badge}
                </span>
              </div>

              <div className="p-5">
                <div className="flex flex-wrap gap-1.5 mb-2.5">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[0.63rem] font-bold text-t3 uppercase tracking-wider">
                      {t}
                      {p.tags.indexOf(t) < p.tags.length - 1 && <span className="ml-1.5">·</span>}
                    </span>
                  ))}
                </div>
                <h3 className="text-[0.97rem] font-black text-t1 mb-2 tracking-[0.01em]">{p.name}</h3>
                <p className="text-[0.8rem] text-t2 leading-[1.7]">{p.desc}</p>
                <div className="flex items-center justify-between mt-4 pt-3.5 border-t border-white/[0.06]">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[0.75rem] text-accent-light font-semibold group-hover:gap-2.5 transition-all"
                  >
                    {p.linkLabel}
                    <svg className="w-[11px] h-[11px] stroke-current fill-none stroke-[2.5]" viewBox="0 0 24 24">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
