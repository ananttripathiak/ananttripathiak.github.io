'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

type Status = 'idle' | 'sending' | 'success' | 'error'

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.75L2.25 6.75" />
      </svg>
    ),
    label: 'Email',
    value: 'ananttripathiak@gmail.com',
    href: 'mailto:ananttripathiak@gmail.com',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: 'LinkedIn',
    value: '/in/ananttripathiakt',
    href: 'https://www.linkedin.com/in/ananttripathiakt/',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    label: 'GitHub',
    value: 'github.com/ananttripathiak',
    href: 'https://github.com/ananttripathiak',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: 'Location',
    value: 'Bengaluru, India',
    href: null,
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ access_key: '60f24c9e-ce54-4763-a151-d52e485a6f6d', ...form }),
      })
      const data = await res.json()
      setStatus(data.success ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full bg-bg-2 border border-white/[0.08] rounded-[10px] px-4 py-3 text-[0.88rem] text-t1 placeholder-t3 focus:outline-none focus:border-accent/50 focus:bg-accent/[0.04] transition-all duration-200'

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.07)_0%,transparent_65%)]" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.06)_0%,transparent_65%)]" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-[0.75rem] font-bold tracking-[0.18em] text-accent-light uppercase mb-3">Get In Touch</p>
          <h2 className="text-[clamp(1.8rem,3vw,2.8rem)] font-black text-t1 tracking-[-0.02em]">
            Let&apos;s Work{' '}
            <span className="bg-accent text-white px-3 py-0.5 rounded-[8px]">Together</span>
          </h2>
          <p className="text-t2 text-[0.95rem] mt-4 max-w-[520px] leading-relaxed">
            I&apos;m always open to discussing new projects, opportunities, or collaborations.
            Whether you have a question or just want to say hello, feel free to reach out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-8 items-start">
          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card border border-white/[0.06] rounded-[16px] p-8 flex flex-col gap-7"
          >
            {contactInfo.map(({ icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent/10 border border-accent/20 rounded-[10px] flex items-center justify-center shrink-0 text-accent-light">
                  {icon}
                </div>
                <div>
                  <p className="text-[0.7rem] font-semibold text-t3 uppercase tracking-widest mb-1">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-[0.86rem] text-t1 hover:text-accent-light transition-colors break-all"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-[0.86rem] text-t1">{value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="mt-2 pt-6 border-t border-white/[0.06]">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_6px_rgba(34,197,94,0.7)]" />
                <p className="text-[0.78rem] text-t2">Usually responds within 24 hours</p>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-card border border-white/[0.06] rounded-[16px] p-8"
          >
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center gap-5 text-center py-14">
                <div className="w-16 h-16 bg-green-400/10 border border-green-400/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-black text-t1 mb-2">Message Sent!</h3>
                  <p className="text-t2 text-[0.88rem]">Thanks for reaching out. I&apos;ll get back to you within 24 hours.</p>
                </div>
                <button
                  onClick={() => { setForm({ name: '', email: '', subject: '', message: '' }); setStatus('idle') }}
                  className="text-[0.82rem] text-accent-light hover:text-accent transition-colors underline underline-offset-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[0.72rem] font-semibold text-t2 uppercase tracking-widest mb-2">Name</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="John Doe" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-[0.72rem] font-semibold text-t2 uppercase tracking-widest mb-2">Email</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="john@company.com" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className="block text-[0.72rem] font-semibold text-t2 uppercase tracking-widest mb-2">Subject</label>
                  <input type="text" name="subject" value={form.subject} onChange={handleChange} required placeholder="Project inquiry / Collaboration / Just saying hi" className={inputClass} />
                </div>

                <div>
                  <label className="block text-[0.72rem] font-semibold text-t2 uppercase tracking-widest mb-2">Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Tell me about your project, idea, or opportunity..." className={`${inputClass} resize-none`} />
                </div>

                {status === 'error' && (
                  <p className="text-[0.82rem] text-red-400 bg-red-400/10 border border-red-400/20 rounded-[8px] px-4 py-2.5">
                    Something went wrong. Please try again or email me directly at ananttripathiak@gmail.com
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent text-white text-[0.88rem] font-bold rounded-[10px] hover:bg-accent-light hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(37,99,235,0.4)] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
                >
                  {status === 'sending' ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                      </svg>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
