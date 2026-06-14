import { motion } from 'framer-motion'
import { fadeUp, revealLine, staggerContainer } from '../../lib/variants'
import Section from '../layout/Section'
import BandDivider from '../ui/BandDivider'

const STATS = [
  { value: '60+',    label: 'Pilots' },
  { value: '4',      label: 'Corporations' },
  { value: '300',    label: 'Target Strength' },
  { value: 'LS/WH', label: 'Primary Theatre' },
]

function StatCard({ value, label }) {
  return (
    <div
      className="bracketed relative border border-(--color-border) p-5 backdrop-blur-sm transition-all duration-300 hover:border-[rgba(196,30,30,0.55)]"
      style={{ background: 'var(--color-surface)' }}
    >
      {/* Left accent gradient */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px]"
        style={{ background: 'linear-gradient(to bottom, var(--color-blood), var(--color-shadow))' }}
      />
      <div className="pl-3">
        <div
          style={{
            fontFamily: 'var(--font-data)',
            fontSize: 'var(--text-2xl)',
            color: '#ffffff',
            lineHeight: 1.1,
            fontWeight: 700,
          }}
        >
          {value}
        </div>
        <div
          className="mt-1"
          style={{
            fontFamily: 'var(--font-data)',
            fontSize: 'var(--text-xs)',
            color: 'var(--color-blood)',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
          }}
        >
          {label}
        </div>
      </div>
    </div>
  )
}

export default function AboutSection() {
  return (
    <>
      <BandDivider />
      <Section id="about">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Eyebrow */}
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-xs)',
              letterSpacing: '0.42em',
              color: 'rgba(196, 30, 30, 0.8)',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
            }}
          >
            Legio — About
          </motion.p>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-white mb-6"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', letterSpacing: '0.08em' }}
          >
            About Helios
          </motion.h2>

          {/* Section rule */}
          <motion.div
            variants={revealLine}
            className="mb-12"
            style={{ width: 56, height: 1, background: 'var(--color-blood)' }}
          />

          {/* Two-column layout */}
          <div
            className="grid gap-12"
            style={{ gridTemplateColumns: '1.1fr 0.9fr' }}
          >
            {/* Left — prose */}
            <motion.div variants={staggerContainer} className="flex flex-col gap-5">
              <motion.p
                variants={fadeUp}
                style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'rgba(237,232,227,0.8)', lineHeight: 1.85 }}
              >
                Helios Initiative is the vanguard force of The Republic. We operate where the
                alliance's interests extend beyond holding space — into the chaos of low-security
                regions and wormhole space, striking at targets that matter.
              </motion.p>
              <motion.p
                variants={fadeUp}
                style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'rgba(237,232,227,0.8)', lineHeight: 1.85 }}
              >
                Our pilots are trained for high-stakes engagements. Black Ops insertions, rapid
                defensive response, strategic reserve activation — these are the operations that
                define us. We do not dilute our focus.
              </motion.p>
              <motion.p
                variants={fadeUp}
                style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'rgba(237,232,227,0.8)', lineHeight: 1.85 }}
              >
                Membership is selective. If you have the skill points, the composure, and the will
                to operate under fleet discipline, apply. If you are looking for a welcoming home
                for casual play, The Republic's member corporations are where you belong.
              </motion.p>
            </motion.div>

            {/* Right — stat cards 2×2 */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4 content-start">
              {STATS.map(({ value, label }) => (
                <StatCard key={label} value={value} label={label} />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </Section>
    </>
  )
}
