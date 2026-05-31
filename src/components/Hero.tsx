'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: 'easeOut', delay },
})

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    const W = canvas.width
    const H = canvas.height
    const cx = W / 2, cy = H / 2, R = W / 2

    const PHOTO_R = 125 // clear radius around center photo

    type Pt = { x: number; y: number; vx: number; vy: number; r: number }
    const pts: Pt[] = Array.from({ length: 80 }, () => {
      let x: number, y: number
      do {
        x = Math.random() * W
        y = Math.random() * H
      } while (Math.hypot(x - cx, y - cy) < PHOTO_R)
      return { x, y, vx: (Math.random() - 0.5) * 0.55, vy: (Math.random() - 0.5) * 0.55, r: Math.random() * 2 + 0.5 }
    })

    let raf: number
    const draw = () => {
      ctx.save()
      ctx.beginPath()
      ctx.arc(cx, cy, R, 0, Math.PI * 2)
      ctx.clip()

      const bg = ctx.createRadialGradient(cx, cy, 0, cx, cy, R)
      bg.addColorStop(0, '#0d1a3a')
      bg.addColorStop(0.6, '#0a0f20')
      bg.addColorStop(1, '#07080f')
      ctx.fillStyle = bg
      ctx.fillRect(0, 0, W, H)

      const cg = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 0.6)
      cg.addColorStop(0, 'rgba(37,99,235,0.20)')
      cg.addColorStop(1, 'transparent')
      ctx.fillStyle = cg
      ctx.fillRect(0, 0, W, H)

      pts.forEach((p) => {
        p.x += p.vx; p.y += p.vy
        const d = Math.hypot(p.x - cx, p.y - cy)
        if (d > R - 8) { p.vx *= -1; p.vy *= -1 }
        if (d < PHOTO_R) { p.vx *= -1; p.vy *= -1 }
      })

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y)
          if (d < 100) {
            ctx.beginPath()
            ctx.moveTo(pts[i].x, pts[i].y)
            ctx.lineTo(pts[j].x, pts[j].y)
            ctx.strokeStyle = `rgba(37,99,235,${0.28 * (1 - d / 100)})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }

      pts.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(59,130,246,0.85)'
        ctx.fill()
      })

      ctx.restore()
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.12)_0%,transparent_65%)]" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.08)_0%,transparent_65%)]" />

      <div className="max-w-[1200px] mx-auto px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left */}
        <div>
          <motion.div {...fade(0.1)} className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-[0.75rem] text-accent-light font-semibold tracking-wider mb-6">
            <span className="w-[7px] h-[7px] bg-green-400 rounded-full shadow-[0_0_6px_rgba(34,197,94,0.6)]" />
            Senior Data Scientist &amp; AI Engineer · Axtria
          </motion.div>

          <motion.h1 {...fade(0.2)} className="text-[clamp(2.6rem,4.5vw,4.2rem)] font-black leading-[1.1] tracking-[-0.03em] text-t1 mb-5">
            Transforming Data<br />
            into{' '}
            <em className="not-italic bg-accent text-white px-4 py-0.5 rounded-[8px]">
              Intelligence
            </em>
          </motion.h1>

          <motion.p {...fade(0.3)} className="text-[0.97rem] text-t2 leading-[1.85] max-w-[480px] mb-9">
            Leverage the power of{' '}
            <strong className="text-t1 font-semibold">machine learning and AI</strong> to
            unlock insights, optimise business decisions, and drive measurable growth.
            5+ years building production ML &amp; GenAI systems for global pharma.
          </motion.p>

          <motion.div {...fade(0.4)} className="flex gap-3.5 mb-11 flex-wrap">
            <a
              href="#cta"
              className="px-7 py-3.5 bg-accent text-white text-[0.88rem] font-bold rounded-[10px] hover:bg-accent-light hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(37,99,235,0.4)] transition-all duration-200"
            >
              Hire Me
            </a>
            <a
              href="#work"
              className="px-7 py-3.5 border border-white/15 text-t1 text-[0.88rem] font-semibold rounded-[10px] hover:border-accent hover:text-accent transition-all duration-200"
            >
              View Portfolio
            </a>
            <a
              href="/Anant_Tripathi_Resume.pdf"
              download="Anant_Tripathi_Resume.pdf"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-accent/40 text-accent-light text-[0.88rem] font-semibold rounded-[10px] hover:border-accent hover:bg-accent/10 hover:-translate-y-0.5 transition-all duration-200"
            >
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
              </svg>
              Download CV
            </a>
          </motion.div>

          <motion.div {...fade(0.5)} className="flex items-center gap-3.5">
            <div className="flex">
              {['NV', 'BY', 'MK', 'AZ', '+'].map((av, i) => (
                <div
                  key={i}
                  style={{ marginLeft: i === 0 ? 0 : -8, zIndex: 5 - i }}
                  className="w-8 h-8 rounded-full border-2 border-bg bg-gradient-to-br from-blue-800 to-purple-700 flex items-center justify-center text-[0.6rem] text-white font-bold relative"
                >
                  {av}
                </div>
              ))}
            </div>
            <div>
              <p className="text-[0.78rem] font-bold text-t1">15+ companies worked with me</p>
              <p className="text-[0.72rem] text-t2">Novartis, Bayer, Merck, AstraZeneca &amp; more</p>
            </div>
          </motion.div>
        </div>

        {/* Right — canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
          className="flex items-center justify-center relative"
        >
          <div className="relative w-[380px] h-[380px] lg:w-[460px] lg:h-[460px]">
            {/* Rotating rings */}
            <div className="absolute inset-0 rounded-full animate-spin-slow opacity-40 bg-[conic-gradient(from_0deg,transparent,#2563eb,transparent,rgba(37,99,235,0.2),transparent)]" />
            <div className="absolute -inset-4 rounded-full animate-spin-reverse opacity-30 bg-[conic-gradient(from_180deg,transparent,rgba(124,58,237,0.4),transparent)]" />
            <canvas
              ref={canvasRef}
              width={460}
              height={460}
              className="rounded-full w-full h-full"
            />

            {/* Photo — centered in the neural network circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              {/* Outer pulsing glow aura */}
              <motion.div
                animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.6, 0.35] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -inset-6 rounded-full bg-accent/25 blur-2xl pointer-events-none"
              />
              {/* Spinning dashed ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-3 rounded-full border border-dashed border-accent/40 pointer-events-none"
              />
              {/* Spinning solid ring (counter) */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-1 rounded-full border border-accent/25 pointer-events-none"
              />

              {/* Photo circle */}
              <motion.div
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-[190px] h-[190px] lg:w-[210px] lg:h-[210px] rounded-full overflow-hidden border-2 border-accent/50 shadow-[0_0_40px_rgba(37,99,235,0.5)]"
              >
                <Image
                  src="/ANANT_THEME.png"
                  alt="Anant Tripathi"
                  fill
                  className="object-cover object-top"
                  style={{ filter: 'grayscale(25%) contrast(1.1) brightness(0.88)' }}
                />
                {/* Blue-tint overlay to blend with dark theme */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d15]/60 via-transparent to-[rgba(37,99,235,0.08)] pointer-events-none" />
                {/* Inner edge vignette */}
                <div className="absolute inset-0 rounded-full shadow-[inset_0_0_28px_rgba(7,8,15,0.7)] pointer-events-none" />
              </motion.div>
            </div>

            {/* Stat: on-time */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute bottom-[-12px] right-4 flex items-center gap-3 bg-card-2 border border-accent/20 rounded-[14px] px-4 py-3 backdrop-blur-lg"
            >
              <div className="w-9 h-9 bg-accent/10 rounded-[10px] flex items-center justify-center shrink-0">
                <svg className="w-[18px] h-[18px] stroke-accent-light fill-none stroke-[1.5]" viewBox="0 0 24 24">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <div>
                <p className="text-[1.2rem] font-black text-t1 leading-none">95%+</p>
                <p className="text-[0.68rem] text-t2 mt-0.5">On-time delivery</p>
              </div>
            </motion.div>

            {/* Stat: learning hours */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="absolute top-4 left-[-12px] bg-card-2 border border-accent/20 rounded-[14px] px-4 py-3 backdrop-blur-lg"
            >
              <p className="text-[1.4rem] font-black text-accent leading-none">336</p>
              <p className="text-[0.65rem] text-t2 mt-0.5 max-w-[80px] leading-tight">Learning hrs FY25</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
