'use client'

import { motion } from 'framer-motion'

export default function CTABanner() {
  return (
    <section
      id="cta"
      className="py-20 text-center relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0d1a3a, #0c0d15)' }}
    >
      <div className="pointer-events-none absolute inset-0 border-y border-accent/15" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[radial-gradient(ellipse,rgba(37,99,235,0.12),transparent_70%)]" />

      <div className="max-w-[1200px] mx-auto px-12 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[clamp(1.8rem,3vw,2.8rem)] font-black text-t1 tracking-[-0.02em] mb-3"
        >
          Ready to Transform Your{' '}
          <span className="text-accent-light">Data?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[0.97rem] text-t2 max-w-[440px] mx-auto leading-relaxed mb-8"
        >
          Let&apos;s build intelligent systems that drive real outcomes for your business.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-3.5 flex-wrap"
        >
          <a
            href="mailto:ananttripathiakt@gmail.com"
            className="px-7 py-3.5 bg-accent text-white text-[0.88rem] font-bold rounded-[10px] hover:bg-accent-light hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(37,99,235,0.4)] transition-all duration-200"
          >
            Start a Conversation
          </a>
          <a
            href="https://www.linkedin.com/in/ananttripathiakt/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 border border-white/15 text-t1 text-[0.88rem] font-semibold rounded-[10px] hover:border-accent hover:text-accent transition-all duration-200"
          >
            Connect on LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  )
}
