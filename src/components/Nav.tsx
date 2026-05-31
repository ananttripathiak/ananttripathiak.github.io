'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#work' },
  { label: 'About Me', href: '#story' },
  { label: 'Experience', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const secs = document.querySelectorAll('section[id]')
      let cur = 'home'
      secs.forEach((s) => {
        if (window.scrollY >= (s as HTMLElement).offsetTop - 160) cur = s.id
      })
      setActive(cur)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 h-[68px] transition-all duration-300 ${
        scrolled
          ? 'bg-bg/93 backdrop-blur-xl border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-12 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-[34px] h-[34px] bg-accent rounded-[8px] flex items-center justify-center text-white text-xs font-black">
            AT
          </div>
          <span className="text-[0.92rem] font-bold text-t1">
            Anant <span className="text-t2 font-normal">Tripathi</span>
          </span>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-[0.82rem] font-medium transition-colors duration-200 ${
                  active === l.href.replace('#', '')
                    ? 'text-t1'
                    : 'text-t2 hover:text-t1'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/Anant_Tripathi_Resume.pdf"
            download="Anant_Tripathi_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-[0.82rem] font-semibold text-t2 hover:text-accent-light transition-colors duration-200"
          >
            <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
            </svg>
            Resume
          </a>
          <a
            href="#cta"
            className="inline-flex items-center px-5 py-2 border border-accent rounded-[8px] text-[0.82rem] font-semibold text-accent hover:bg-accent hover:text-white transition-all duration-200"
          >
            Hire Me
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-t2 rounded transition-all ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-5 h-0.5 bg-t2 rounded transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-t2 rounded transition-all ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg/98 backdrop-blur-xl border-b border-white/[0.06] overflow-hidden"
          >
            <div className="px-8 py-6 flex flex-col gap-5">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-t2 hover:text-t1 transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="/Anant_Tripathi_Resume.pdf"
                download="Anant_Tripathi_Resume.pdf"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-accent/40 rounded-[8px] text-sm font-semibold text-accent-light hover:bg-accent/10 transition-all duration-200"
              >
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
                </svg>
                Download Resume
              </a>
              <a
                href="#cta"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center justify-center px-5 py-2.5 bg-accent rounded-[8px] text-sm font-bold text-white"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
