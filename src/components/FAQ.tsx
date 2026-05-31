'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const items = [
  {
    q: 'What is your current role and expertise?',
    a: (
      <>
        <strong className="text-t1">Manager – Software Engineering at Axtria (promoted May 2026).</strong> I am the foremost
        Subject Matter Expert (SME) for the full Optimisation module of Axtria&apos;s MarketingIQ platform. My expertise spans
        Marketing Mix Optimisation, LLMs &amp; RAG systems, production ML engineering, and system design.
        5+ years building and scaling AI-powered analytics solutions for global pharma clients.
      </>
    ),
  },
  {
    q: 'What did you deliver as Project Leader (2024–2026)?',
    a: (
      <ul className="space-y-1.5 mt-1">
        {[
          'Owned 10+ major Optimisation capabilities end-to-end: Portfolio Optimisation, Scaling Revamp, Monthly Gating/Phasing, Grouping Constraints, Multi-Level Constraints',
          'Designed and delivered Pre-Optimisation and Post-Optimisation APIs — significantly improved scalability and modularity',
          'Achieved 95%+ on-time, 98–100% error-free delivery across all releases',
          'Led 15+ advanced POCs including Adam Optimizer, Pyomo, Scalable Grid Selection, and System Design',
          'Completed Stanford ML Specialisation (70 hrs, Andrew Ng) and UT Austin PGP AI/ML (CGPA 4.13) while in this role',
        ].map((point, i) => (
          <li key={i} className="relative pl-4 text-[0.86rem] text-t2 leading-relaxed">
            <span className="absolute left-0 text-accent-light text-xs">→</span>
            {point}
          </li>
        ))}
      </ul>
    ),
  },
  {
    q: 'What was your biggest technical contribution as Senior Associate?',
    a: (
      <ul className="space-y-1.5 mt-1">
        {[
          'Led the full migration of the Optimisation module from KNIME (R) to JupyterHub (Python) — complete codebase with zero regressions',
          'Implemented Grid Selection algorithm (including edge cases for skewed datasets), CCSA, COBYLA, SLSQP, Scaling, and Hyperparameter Tuning',
          'Delivered 7 Novartis MMx projects across Germany, Poland, Romania — avg. TAT <2 hrs, near-perfect client rating',
          'Became AICT Certified Trainer for Python and PySpark. Received the Right Brigade Award.',
        ].map((point, i) => (
          <li key={i} className="relative pl-4 text-[0.86rem] text-t2 leading-relaxed">
            <span className="absolute left-0 text-accent-light text-xs">→</span>
            {point}
          </li>
        ))}
      </ul>
    ),
  },
  {
    q: 'What is your educational background and certifications?',
    a: (
      <ul className="space-y-1.5 mt-1">
        {[
          'B.E. + M.S. — BITS Pilani (Electrical & Electronics Engineering, CGPA 7.62)',
          'PGP AI & ML — University of Texas at Austin (CGPA 4.13/4.33, 2025)',
          'Exec. PGP — Applied & Agentic AI, IIIT Bangalore (In Progress)',
          'Masters of Data Science — Deakin University, Australia (In Progress)',
          'Stanford ML Specialisation · IBM GenAI · Google Cloud AI · Axtria GenAI All 3 Levels · AICT Trainer (Python & PySpark)',
        ].map((point, i) => (
          <li key={i} className="relative pl-4 text-[0.86rem] text-t2 leading-relaxed">
            <span className="absolute left-0 text-accent-light text-xs">→</span>
            {point}
          </li>
        ))}
      </ul>
    ),
  },
  {
    q: 'How can I contact you or hire you for a project?',
    a: (
      <>
        Reach me at <strong className="text-t1">ananttripathiakt@gmail.com</strong> or connect on LinkedIn at{' '}
        <strong className="text-t1">linkedin.com/in/ananttripathiakt</strong>. I&apos;m open to consulting engagements,
        full-time opportunities, and collaborations in AI/ML, marketing analytics, and optimisation.
        Response time is typically within 24 hours.
      </>
    ),
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 bg-bg">
      <div className="max-w-[1200px] mx-auto px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-[clamp(1.7rem,3vw,2.4rem)] font-black text-t1 tracking-[-0.02em]">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="max-w-[760px] mx-auto flex flex-col gap-3">
          {items.map((item, i) => {
            const isOpen = open === i
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className={`bg-card rounded-[14px] border overflow-hidden transition-colors ${isOpen ? 'border-accent/25' : 'border-white/[0.06]'}`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center gap-4 px-6 py-5 text-left hover:bg-white/[0.02] transition-colors"
                >
                  <div className={`w-9 h-9 rounded-lg shrink-0 flex items-center justify-center text-[0.75rem] font-black transition-colors ${isOpen ? 'bg-accent/10 text-accent-light' : 'bg-card-2 text-t3'}`}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <span className={`flex-1 text-[0.92rem] font-semibold transition-colors ${isOpen ? 'text-accent-light' : 'text-t2'}`}>
                    {item.q}
                  </span>
                  <div className={`w-7 h-7 rounded-full shrink-0 flex items-center justify-center text-lg transition-colors ${isOpen ? 'bg-accent/10 text-accent-light' : 'bg-card-2 text-t3'}`}>
                    {isOpen ? '✕' : '+'}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pl-[76px] text-[0.86rem] text-t2 leading-[1.8]">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
