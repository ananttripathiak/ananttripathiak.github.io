'use client'

import { motion } from 'framer-motion'

const quotes = [
  {
    text: 'Anant has been among the best developers in the MarketingIQ team, with great attention to detail, planning and a complete understanding of all the code parts impacted by any change. His sincerity and passion about his work sets him apart.',
    by: 'Saurabh Kaushik',
    role: 'Manager · Axtria, FY2025',
  },
  {
    text: 'Anant played a stellar role and is one of the most well-informed members on the Optimisation module. Fixed an enormous number of bugs by himself — an outstanding feat. Absolute star of the team in terms of learning.',
    by: 'Saurabh Kaushik',
    role: 'Manager · Axtria, Mid-year 2024',
  },
  {
    text: 'Anant is technically strong and demonstrates dedication and passion. He drove InsightsMAx project support tasks exceptionally well with great maturity and patience.',
    by: 'Kawal Deep Singh',
    role: 'Manager · Axtria, FY2022',
  },
]

const stats = [
  { num: '5+', label: 'Years of production ML & AI experience' },
  { num: '10+', label: 'Major product features owned end-to-end' },
  { num: '7', label: 'Professional certifications earned' },
  { num: '38%', label: 'HCP adoption uplift from EAP workflow' },
]

export default function Story() {
  return (
    <section id="story" className="py-24 bg-bg">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[72px] items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <p className="text-[0.72rem] font-bold text-accent-light uppercase tracking-[0.15em] mb-3">About Me</p>
            <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-black text-t1 leading-[1.2] tracking-[-0.02em] mb-5">
              Why I Started{' '}
              <span className="text-accent-light">Building AI</span> Systems
            </h2>
            <p className="text-[0.92rem] text-t2 leading-[1.9] mb-4">
              I saw businesses drowning in data but struggling to make sense of it. Decisions were
              slow, teams were overwhelmed, and insights were buried. That&apos;s when I knew there
              had to be a{' '}
              <strong className="text-t1 font-semibold">smarter, faster, more intuitive solution</strong>.
            </p>
            <p className="text-[0.92rem] text-t2 leading-[1.9] mb-8">
              So I set out to build systems that enable companies to transform raw data into
              real-time intelligence using the{' '}
              <strong className="text-t1 font-semibold">most advanced ML and AI techniques</strong> —
              from Marketing Mix Optimisation to production GenAI pipelines.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  className="bg-card border border-white/[0.06] rounded-xl p-5"
                >
                  <p className="text-[2rem] font-black text-accent leading-none mb-1">{s.num}</p>
                  <p className="text-[0.75rem] text-t2 leading-snug">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — quotes */}
          <div className="flex flex-col gap-4">
            {quotes.map((q, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className="bg-card border border-white/[0.06] rounded-2xl p-6 hover:border-accent/20 transition-colors"
              >
                <p className="text-[2.4rem] text-accent leading-[0.8] mb-2.5 font-serif">&ldquo;</p>
                <p className="text-[0.83rem] text-t2 leading-[1.75] italic">{q.text}</p>
                <p className="mt-3.5 text-[0.75rem] font-bold text-accent-light">{q.by}</p>
                <p className="text-[0.7rem] text-t3">{q.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
