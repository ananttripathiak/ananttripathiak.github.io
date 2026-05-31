const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/ananttripathi',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ananttripathiakt/',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Kaggle',
    href: 'https://www.kaggle.com/anantkumartripathi',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v4.973c0 .308-.153.461-.460.461H5.747c-.307 0-.460-.153-.460-.461V.461C5.287.154 5.440 0 5.747 0h2.080c.307 0 .460.154.460.461v12.931l6.220-6.440c.163-.219.347-.328.551-.328h3.359c.153 0 .25.049.292.148.042.099.01.229-.094.390L12.200 13.123l6.625 10.136c.104.219.129.430.002.600z" />
      </svg>
    ),
  },
]

const navLinks = ['Home', 'Services', 'Portfolio', 'About Me', 'Experience']
const navHrefs = ['#home', '#services', '#work', '#story', '#faq']

export default function Footer() {
  return (
    <footer className="bg-bg-2 border-t border-white/[0.06]">
      {/* Top */}
      <div className="max-w-[1200px] mx-auto px-12 pt-9 pb-7 flex flex-wrap items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-accent rounded-[7px] flex items-center justify-center text-white text-[0.7rem] font-black">AT</div>
          <span className="text-[0.9rem] font-bold text-t1">Anant <span className="text-t2 font-normal">Tripathi</span></span>
        </div>

        {/* Nav */}
        <nav className="hidden md:flex gap-7">
          {navLinks.map((l, i) => (
            <a key={l} href={navHrefs[i]} className="text-[0.8rem] text-t2 hover:text-t1 transition-colors">
              {l}
            </a>
          ))}
        </nav>

        {/* Socials */}
        <div className="flex gap-2.5">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-[38px] h-[38px] rounded-[10px] bg-accent/10 border border-accent/20 flex items-center justify-center text-accent-light hover:bg-accent hover:border-accent hover:text-white transition-all duration-200"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Mid */}
      <div className="max-w-[1200px] mx-auto px-12 py-5 border-t border-white/[0.06] flex flex-wrap gap-8">
        {[
          { icon: <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />, extra: <polyline points="22,6 12,13 2,6" />, text: 'ananttripathiakt@gmail.com' },
          { icon: <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.12 1.18 2 2 0 012.11 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.56 6.56l1.27-.45a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />, text: '+91 9521609916' },
          { icon: <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />, extra: <circle cx="12" cy="10" r="3" />, text: 'India' },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2 text-[0.78rem] text-t3">
            <svg className="w-3.5 h-3.5 stroke-accent-light fill-none stroke-[1.5] shrink-0" viewBox="0 0 24 24">
              {item.icon}
              {item.extra}
            </svg>
            {item.text}
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div className="max-w-[1200px] mx-auto px-12 py-4 border-t border-white/[0.06] flex flex-wrap justify-between items-center gap-3">
        <p className="text-[0.73rem] text-t3">© 2026 Anant Tripathi. All rights reserved.</p>
        <div className="flex gap-5">
          <a href="#" className="text-[0.73rem] text-t3 hover:text-t2 transition-colors">Privacy Policy</a>
          <a href="#" className="text-[0.73rem] text-t3 hover:text-t2 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}
