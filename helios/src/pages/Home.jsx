import { Link } from 'react-router-dom'
import { Heading, Nebula, Panel, Steps } from '../components/Ui'
import { CORPS_DATA, DISCORD_URL, DOCTRINE_DATA, HOME_STEPS, RECORD, REPUBLIC_URL, WIKI_URL } from '../lib/constants'

const corpTitle = { fontFamily: 'var(--f-display)', fontWeight: 600, letterSpacing: '0.06em', fontSize: 20, lineHeight: 1.2 }

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <Nebula />
        <img className="wm" src="/falcon-logo.png" alt="" aria-hidden="true" />
        <div className="wrap">
          <div className="hero-in">
            <div className="hero-main">
              <div className="hero-tags">
                <span className="hel-tag">Wardec eligible</span>
                <span className="hel-readout">Low-sec · <b>EUTZ</b> / <b>USTZ</b> · <b>EN</b> / <b>FR</b></span>
              </div>
              <h1 className="name">Helios Initiative</h1>
              <p className="tac hero-h">Undock. Hold the line. <span>Fly red.</span></p>
              <p className="lead">
                Helios Initiative is the combat arm of <a href={REPUBLIC_URL}>The Republic</a>: wardec-eligible, based in low-sec, and organised around doctrine fleets that fly together.
              </p>
              <div className="hero-cta">
                <a className="hel-btn hel-btn--glow hel-chamfer-sm" href={DISCORD_URL}>Enlist on Discord</a>
                <Link className="hel-link" to="/enlist">Read the requirements</Link>
              </div>
            </div>
            <div className="target hel-reticle" aria-label="Roster today and target">
              <p className="hel-readout">Characters today</p>
              <p className="num">60</p>
              <p className="hel-readout">Year-end target <b>300</b></p>
              <p className="note" style={{ marginTop: 10 }}>Across four corporations. Roster figures as of 21 August 2026.</p>
            </div>
          </div>
        </div>
      </section>
      <div className="hel-hazard" aria-hidden="true" />

      <section className="sec" id="mandate">
        <div className="wrap">
          <div className="cols">
            <div className="col-main">
              <Heading eyebrow="Mandate">The combat arm of The Republic</Heading>
              <div className="stack">
                <p className="lead">Helios Initiative is the dedicated PvP sub-alliance of The Republic. It exists to give the combined alliance firepower: black ops roams, defensive and offensive operations, and a fleet able to answer a war declaration.</p>
                <p className="body">The Republic and Helios Initiative operate as a single entity under one Executor and one Pax Ludos. Helios carries higher membership requirements because its members can be targeted by war declarations in high-security space. The Republic remains the harbour for members with other playstyles or commitments.</p>
              </div>
            </div>
            <div className="col-side">
              <Panel>
                <p className="hel-readout">Alliance record</p>
                <dl className="kv">
                  {RECORD.map(([k, v]) => (
                    <div key={k} style={{ display: 'contents' }}>
                      <dt>{k}</dt>
                      <dd>{Array.isArray(v) ? v.map((s, i) => (i % 2 === 0 ? <b key={i}>{s}</b> : s)) : v}</dd>
                    </div>
                  ))}
                </dl>
              </Panel>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec--raised" id="doctrine">
        <div className="wrap">
          <Heading eyebrow="Doctrine" lead="Regular fleets, a defined doctrine, and a replacement programme behind every sanctioned loss. New pilots are trained into the fleet rather than left to find it.">How we fly</Heading>
          <div className="grid">
            {DOCTRINE_DATA.map((d) => (
              <Panel key={d.title}>
                {d.ghost ? (
                  <span className="hel-tag hel-tag--ghost">{d.ghost}</span>
                ) : (
                  <p className="hel-readout">{d.readout} · <b>{d.bold}</b>{d.suffix && ` ${d.suffix}`}</p>
                )}
                <h3 className="h3">{d.title}</h3>
                <p className="small">{d.text}</p>
              </Panel>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" id="roster">
        <div className="wrap">
          <Heading eyebrow="Roster" lead="Approximately 60 characters across four corporations. Each community keeps its own language and timezone; the fleet is shared.">Four corporations, one fleet</Heading>
          <div className="grid grid--4">
            {CORPS_DATA.map((c) => (
              <Panel key={c.id}>
                <p className="num-sm">{c.count}</p>
                <h3 className="h3" style={corpTitle}>{c.name}</h3>
                <p className="small">{c.text}</p>
                <p className="hel-readout" style={{ marginTop: 'auto' }}><b>{c.bold}</b> · {c.rest}</p>
              </Panel>
            ))}
          </div>
          <p className="note" style={{ marginTop: 24 }}>Membership figures are directional and drift as the alliance grows.</p>
        </div>
      </section>

      <section className="sec sec--raised" id="republic">
        <div className="wrap">
          <Heading eyebrow="Alliance" lead="Helios Initiative flies. The Republic builds, supplies, and teaches. Joining Helios means joining both.">One alliance, two faces</Heading>
          <div className="grid grid--2">
            <Panel>
              <span className="hel-tag">Helios Initiative</span>
              <h3 className="h3">Fly with a purpose</h3>
              <p className="small">Doctrine fleets, a replacement programme, and a mentored path to fleet command. Helios is where the alliance applies its firepower in low-sec.</p>
            </Panel>
            <Panel>
              <span className="hel-tag hel-tag--ghost">The Republic</span>
              <h3 className="h3">Backed by an institution</h3>
              <p className="small">An industry and mining base in high-sec, buyback programs, freight support, and the alliance's own IT infrastructure. A quieter home for the days a pilot is not undocking, and a community of roughly 535 characters behind the fleet.</p>
            </Panel>
          </div>
          <div className="stack" style={{ marginTop: 40, maxWidth: '62ch' }}>
            <p className="body">The two alliances share one Executor, one Pax Ludos, and one set of standings. A pilot can move between them as their time and ambitions change, and Republic corporations feed directly into Helios through graduated pathways.</p>
            <div className="hero-cta" style={{ marginTop: 0 }}>
              <a className="hel-btn hel-chamfer-sm" href={REPUBLIC_URL}>Visit The Republic</a>
              <a className="hel-link" href={WIKI_URL}>Visit the wiki</a>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" id="enlist">
        <div className="wrap">
          <Panel style={{ padding: 'clamp(28px, 5vw, 56px)' }}>
            <div className="cols">
              <div className="col-main">
                <Heading eyebrow="Recruitment" lead="Pilots with PvP history apply directly. Pilots who want to learn first join a Republic corporation and step up when ready. Corporations are welcome to apply as a body.">Enlist</Heading>
                <div className="hero-cta">
                  <a className="hel-btn hel-chamfer-sm" href={DISCORD_URL}>Enlist on Discord</a>
                  <Link className="hel-link" to="/enlist">Read the requirements</Link>
                </div>
              </div>
              <div className="col-side"><Steps items={HOME_STEPS} /></div>
            </div>
          </Panel>
        </div>
      </section>
    </main>
  )
}
