'use client'

import { motion } from 'framer-motion'

const reasons = [
  {
    icon: <svg className="w-[18px] h-[18px] stroke-accent-light fill-none stroke-2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>,
    title: 'Optimisation SME',
    desc: 'Foremost expert for MarketingIQ\'s full Optimisation module — recognised by management and clients across 15+ global pharma companies.',
  },
  {
    icon: <svg className="w-[18px] h-[18px] stroke-accent-light fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
    title: '95%+ On-Time',
    desc: 'Consistent on-time delivery with 98–100% error-free code across all product releases, milestones, and UAT cycles.',
  },
  {
    icon: <svg className="w-[18px] h-[18px] stroke-accent-light fill-none stroke-2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>,
    title: '15+ Global Clients',
    desc: 'Delivered solutions for Novartis, Bayer, Merck, AstraZeneca, ViiV, Boehringer Ingelheim and more across Europe and the US.',
  },
  {
    icon: <svg className="w-[18px] h-[18px] stroke-accent-light fill-none stroke-2" viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>,
    title: 'Lifelong Learner',
    desc: '336 learning hours in FY25 (5.2× target) — Stanford ML Specialisation, UT Austin PGP AI/ML, 7 certifications earned.',
  },
]

export default function WhyChooseMe() {
  return (
    <section id="why" className="py-24 bg-bg-2">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-[clamp(1.7rem,3vw,2.4rem)] font-black text-t1 tracking-[-0.02em]">
            Why Choose Me
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
              className="group bg-card border border-white/[0.06] rounded-full aspect-square flex flex-col items-center justify-center text-center p-7 cursor-default relative overflow-hidden hover:border-accent/30 hover:shadow-[0_0_40px_rgba(37,99,235,0.15)] transition-shadow"
            >
              <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,#2563eb,transparent_30%,transparent_70%,#2563eb)] opacity-0 group-hover:opacity-30 transition-opacity" />
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mb-3 relative z-10">
                {r.icon}
              </div>
              <h3 className="text-[0.9rem] font-bold text-t1 mb-1.5 relative z-10">{r.title}</h3>
              <p className="text-[0.72rem] text-t2 leading-[1.55] relative z-10">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
