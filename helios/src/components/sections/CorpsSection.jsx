import { motion } from 'framer-motion'
import { fadeUp, revealLine, staggerContainer } from '../../lib/variants'
import Section from '../layout/Section'
import Badge from '../ui/Badge'
import { CORPS_DATA } from '../../lib/constants'

function CorpCard({ corp }) {
  return (
    <motion.div
      variants={fadeUp}
      className="corp-card border border-(--color-border) p-6 overflow-visible"
    >
      {/* Corner brackets — real DOM elements to avoid ::before conflict with .corp-card */}
      <span
        className="absolute top-[-5px] left-[-5px] w-[14px] h-[14px]"
        style={{
          borderTop: '1px solid rgba(196,30,30,0.5)',
          borderLeft: '1px solid rgba(196,30,30,0.5)',
        }}
        aria-hidden="true"
      />
      <span
        className="absolute bottom-[-5px] right-[-5px] w-[14px] h-[14px]"
        style={{
          borderBottom: '1px solid rgba(196,30,30,0.5)',
          borderRight: '1px solid rgba(196,30,30,0.5)',
        }}
        aria-hidden="true"
      />

      {/* Corp name */}
      <h3
        className="text-white mb-3"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--text-lg)',
          letterSpacing: '0.08em',
          fontWeight: 400,
          lineHeight: 1.3,
        }}
      >
        {corp.name}
      </h3>

      {/* Type badge */}
      <div className="mb-4">
        <Badge>{corp.tag}</Badge>
      </div>

      {/* Description */}
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-sm)',
          color: 'rgba(237, 232, 227, 0.65)',
          lineHeight: 1.85,
        }}
      >
        {corp.description}
      </p>
    </motion.div>
  )
}

export default function CorpsSection() {
  return (
    <Section id="corps">
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
          Ordo — Order of Battle
        </motion.p>

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          className="text-white mb-6"
          style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', letterSpacing: '0.08em' }}
        >
          Member Corporations
        </motion.h2>

        {/* Section rule */}
        <motion.div
          variants={revealLine}
          className="mb-14"
          style={{ width: 56, height: 1, background: 'var(--color-blood)' }}
        />

        {/* Cards grid */}
        <motion.div
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-6"
        >
          {CORPS_DATA.map((corp) => (
            <CorpCard key={corp.id} corp={corp} />
          ))}
        </motion.div>
      </motion.div>
    </Section>
  )
}
