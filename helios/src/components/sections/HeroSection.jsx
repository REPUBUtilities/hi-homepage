import { motion } from 'framer-motion'
import { fadeUp, fadeIn, emberBreathe, scrollHint } from '../../lib/variants'
import Button from '../ui/Button'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

      {/* Layer 1 — Ember radial glow (animated) */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        variants={emberBreathe}
        animate="animate"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 45%, rgba(217,48,16,0.38) 0%, rgba(196,30,30,0.12) 50%, transparent 72%)',
        }}
      />

      {/* Layer 2 — Scan lines */}
      <div className="hero-scanlines absolute inset-0 pointer-events-none" aria-hidden="true" />

      {/* Layer 3 — Grid */}
      <div className="hero-grid-bg absolute inset-0 pointer-events-none" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 text-center flex flex-col items-center">

        {/* Eyebrow */}
        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-xs)',
            letterSpacing: '0.42em',
            color: 'rgba(196, 30, 30, 0.7)',
            textTransform: 'uppercase',
            marginBottom: '2.5rem',
          }}
        >
          The Republic · Strike Force · New Eden
        </motion.p>

        {/* Alliance name */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
          style={{
            fontFamily: 'Cinzel Decorative, serif',
            fontSize: 'var(--text-hero)',
            fontWeight: 400,
            letterSpacing: '0.12em',
            lineHeight: 1.1,
            color: '#ffffff',
          }}
        >
          Helios Initiative
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-base)',
            letterSpacing: '0.35em',
            color: 'var(--color-blood)',
            textTransform: 'uppercase',
            marginTop: '0.75rem',
          }}
        >
          Vanguard of the Republic
        </motion.p>

        {/* Rule line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.45, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: 100,
            height: 1,
            background: 'var(--color-blood)',
            margin: '2rem auto',
            transformOrigin: 'center',
          }}
        />

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="italic"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-sm)',
            color: 'rgba(237, 232, 227, 0.5)',
            maxWidth: 520,
            letterSpacing: '0.05em',
            lineHeight: 1.8,
          }}
        >
          A focused strike force operating in low-security space and hostile wormholes,
          projecting force on behalf of The Republic.
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="mt-10"
        >
          <Button href="#join">Request Deployment</Button>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
        variants={scrollHint}
        animate="animate"
        aria-hidden="true"
      >
        <div
          className="w-px h-11"
          style={{ background: 'linear-gradient(to bottom, var(--color-blood), transparent)' }}
        />
        <div
          className="mt-1 w-[5px] h-[5px] rotate-45"
          style={{ background: 'var(--color-blood)' }}
        />
      </motion.div>
    </section>
  )
}
