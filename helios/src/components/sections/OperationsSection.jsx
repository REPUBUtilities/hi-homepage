import { motion } from 'framer-motion'
import { fadeUp, revealLine, staggerContainer } from '../../lib/variants'
import BandDivider from '../ui/BandDivider'
import { OPS_DATA } from '../../lib/constants'

function OpsCard({ op, isLast }) {
  return (
    <motion.div
      variants={fadeUp}
      className={`ops-card relative overflow-hidden p-8 md:p-12 ${!isLast ? 'border-r border-(--color-border)' : ''}`}
    >
      {/* Decorative ops number */}
      <div
        aria-hidden="true"
        style={{
          fontFamily: 'var(--font-data)',
          fontSize: '3.5rem',
          fontWeight: 700,
          color: 'rgba(196, 30, 30, 0.12)',
          lineHeight: 1,
          marginBottom: '1.5rem',
          userSelect: 'none',
        }}
      >
        {op.number}
      </div>

      {/* Title */}
      <h3
        className="text-white mb-4"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--text-lg)',
          letterSpacing: '0.08em',
          fontWeight: 400,
        }}
      >
        {op.title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-sm)',
          color: 'rgba(237, 232, 227, 0.65)',
          lineHeight: 1.85,
        }}
      >
        {op.description}
      </p>
    </motion.div>
  )
}

export default function OperationsSection() {
  return (
    <>
      <BandDivider />
      <section
        id="operations"
        className="py-24 md:py-32"
        style={{
          background: 'rgba(5, 2, 2, 0.7)',
          borderTop: '1px solid var(--color-border-sub)',
          borderBottom: '1px solid var(--color-border-sub)',
        }}
      >
        <div className="mx-auto max-w-[1200px] px-6">
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
              Imperium — Operations
            </motion.p>

            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              className="text-white mb-6"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', letterSpacing: '0.08em' }}
            >
              What We Do
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
              className="grid md:grid-cols-3 border border-(--color-border)"
            >
              {OPS_DATA.map((op, i) => (
                <OpsCard key={op.number} op={op} isLast={i === OPS_DATA.length - 1} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
      <BandDivider />
    </>
  )
}
