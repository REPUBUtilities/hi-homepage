import { motion } from 'framer-motion'
import { fadeUp, revealLine, staggerContainer } from '../../lib/variants'
import Section from '../layout/Section'
import Button from '../ui/Button'
import BandDivider from '../ui/BandDivider'
import { EXTERNAL_LINKS } from '../../lib/constants'

const REQUIREMENTS = [
  'Minimum 30 million skill points — PvP oriented',
  'Full ESI authorisation required',
  'Voice comms mandatory on all fleet operations',
  'Discord active — no extended absences without notice',
  'Wardec eligible — you will be a valid target',
  'Willingness to train into and fly alliance doctrine hulls',
]

export default function JoinSection() {
  return (
    <>
      <BandDivider />
      <Section id="join">
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
            Enlistment — Join
          </motion.p>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-white mb-6"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', letterSpacing: '0.08em' }}
          >
            Request Deployment
          </motion.h2>

          {/* Section rule */}
          <motion.div
            variants={revealLine}
            className="mb-14"
            style={{ width: 56, height: 1, background: 'var(--color-blood)' }}
          />

          {/* Two-column layout */}
          <div className="grid md:grid-cols-2 gap-16">

            {/* Left — requirements */}
            <motion.div variants={fadeUp}>
              <h3
                className="text-white mb-6"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-lg)',
                  letterSpacing: '0.08em',
                  fontWeight: 400,
                }}
              >
                What We Require
              </h3>

              <ul className="m-0 p-0 list-none">
                {REQUIREMENTS.map((req, i) => (
                  <li key={i}>
                    <div
                      className="flex items-start gap-3 py-3"
                      style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'rgba(237,232,227,0.75)', lineHeight: 1.7 }}
                    >
                      <span style={{ color: 'var(--color-blood)', marginTop: '0.15em', shrink: 0 }}>▸</span>
                      {req}
                    </div>
                    {i < REQUIREMENTS.length - 1 && (
                      <div style={{ height: 1, background: 'var(--color-border-sub)' }} />
                    )}
                  </li>
                ))}
              </ul>

              {/* Warning block */}
              <div
                className="mt-8 p-5"
                style={{
                  background: 'rgba(58, 22, 105, 0.12)',
                  border: '1px solid rgba(58,22,105,0.3)',
                  borderLeft: '3px solid var(--color-shadow)',
                }}
              >
                <p
                  className="mb-2"
                  style={{
                    fontFamily: 'var(--font-data)',
                    fontSize: 'var(--text-xs)',
                    color: 'var(--color-shadow)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                  }}
                >
                  Wardec Notice
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-sm)',
                    color: 'rgba(237,232,227,0.6)',
                    lineHeight: 1.75,
                  }}
                >
                  Helios Initiative holds wardec eligibility. Joining places your assets and
                  your clones at risk in high-security space. This is intentional and expected.
                </p>
              </div>
            </motion.div>

            {/* Right — CTA sidebar */}
            <motion.div variants={fadeUp} className="flex flex-col gap-6">
              <h3
                className="text-white"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-lg)',
                  letterSpacing: '0.08em',
                  fontWeight: 400,
                }}
              >
                How to Apply
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-sm)',
                  color: 'rgba(237,232,227,0.75)',
                  lineHeight: 1.85,
                }}
              >
                If you meet the requirements and understand the risk, open a recruitment
                ticket in our Discord. A director will review your application and reach out
                directly.
              </p>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-sm)',
                  color: 'rgba(237,232,227,0.75)',
                  lineHeight: 1.85,
                }}
              >
                Applications are reviewed within 72 hours. Expect a brief interview covering
                your combat history, availability, and fit for Helios doctrine.
              </p>

              <div className="flex flex-col gap-4 mt-2">
                <Button
                  href={EXTERNAL_LINKS.discord ?? '#join'}
                  {...(EXTERNAL_LINKS.discord ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  Apply via Discord
                </Button>

                <a
                  href="https://republic-alliance.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-xs)',
                    letterSpacing: '0.12em',
                    color: 'rgba(10,136,205,0.45)',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'rgba(10,136,205,0.9)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(10,136,205,0.45)')}
                >
                  ← Join The Republic instead
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Section>
    </>
  )
}
