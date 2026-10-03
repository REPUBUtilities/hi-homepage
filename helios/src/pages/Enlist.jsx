import { Heading, Nebula, Panel, Steps } from '../components/Ui'
import { BASELINE_CHECKS, DISCORD_URL, ENLIST_STEPS, HELIOS_BAR, OFFER_DATA } from '../lib/constants'

export default function Enlist() {
  return (
    <main>
      <section className="hero hero--short">
        <Nebula />
        <div className="wrap">
          <div className="hero-main" style={{ position: 'relative', maxWidth: 820 }}>
            <div className="hero-tags">
              <span className="hel-tag">Recruitment</span>
              <span className="hel-readout">Pilots · <b>Corporations</b></span>
            </div>
            <h1 className="tac" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}>Enlist in Helios</h1>
            <p className="lead">Helios Initiative recruits pilots and corporations who want to fly doctrine fleets in low-sec. New pilots are welcome, and the alliance trains them into the fleet. The standard is higher than The Republic's because the exposure is higher: Helios members can be targeted by war declarations in high-security space.</p>
            <div className="hero-cta">
              <a className="hel-btn hel-btn--glow hel-chamfer-sm" href={DISCORD_URL}>Enlist on Discord</a>
              <a className="hel-link" href="#process">See the process</a>
            </div>
          </div>
        </div>
      </section>
      <div className="hel-hazard" aria-hidden="true" />

      <section className="sec" id="routes">
        <div className="wrap">
          <Heading eyebrow="Routes" lead="Both routes end in the same fleet. The difference is where the PvP record comes from.">Two ways in</Heading>
          <div className="grid grid--2">
            <Panel>
              <span className="hel-tag">Direct entry</span>
              <h3 className="h3">Apply to Helios</h3>
              <p className="small">For pilots with a killboard-verifiable record of PvP. Apply to a Helios corporation directly: Republic Vanguard for English-speaking pilots, Jay's Army Special Forces for French-speaking pilots.</p>
              <p className="hel-readout" style={{ marginTop: 'auto' }}>Requires · <b>Verifiable PvP history</b></p>
            </Panel>
            <Panel>
              <span className="hel-tag hel-tag--ghost">Graduated entry</span>
              <h3 className="h3">Step up from The Republic</h3>
              <p className="small">For pilots who want to learn first. Join a Republic corporation, complete its trial period, and step up: Jay's Army to Jay's Army Special Forces, Investtan Inc. to Republic Vanguard.</p>
              <p className="hel-readout" style={{ marginTop: 'auto' }}>Requires · <b>Completed trial in a Republic corporation</b></p>
            </Panel>
          </div>
        </div>
      </section>

      <section className="sec sec--raised" id="standard">
        <div className="wrap">
          <Heading eyebrow="Standard" lead="Every applicant to The Republic passes a baseline review. Helios adds three requirements on top, because its members carry wardec exposure.">What we check</Heading>
          <div className="grid grid--2">
            <Panel>
              <p className="hel-readout">Baseline · <b>All applicants</b></p>
              <h3 className="h3">The Republic standard</h3>
              <ul className="list">{BASELINE_CHECKS.map((t) => <li key={t}>{t}</li>)}</ul>
            </Panel>
            <Panel>
              <p className="hel-readout">Additional · <b>Helios only</b></p>
              <h3 className="h3">The Helios bar</h3>
              <ul className="list">{HELIOS_BAR.map((t) => <li key={t}>{t}</li>)}</ul>
            </Panel>
          </div>
        </div>
      </section>

      <section className="sec" id="process">
        <div className="wrap">
          <div className="cols">
            <div className="col-main">
              <Heading eyebrow="Process" lead="Five steps. Every flag raised during review is escalated for deeper review before the application proceeds.">From contact to the fleet</Heading>
              <div className="stack" style={{ marginTop: 28 }}>
                <p className="body">The first step is a conversation on Discord. Recruiters will route you to the Helios corporation that fits your language and timezone.</p>
                <div className="hero-cta" style={{ marginTop: 4 }}>
                  <a className="hel-btn hel-chamfer-sm" href={DISCORD_URL}>Enlist on Discord</a>
                </div>
              </div>
            </div>
            <div className="col-side"><Steps items={ENLIST_STEPS} /></div>
          </div>
        </div>
      </section>

      <section className="sec sec--raised" id="offer">
        <div className="wrap">
          <Heading eyebrow="Standing">What members receive</Heading>
          <div className="grid grid--4" style={{ marginTop: 24 }}>
            {OFFER_DATA.map(([t, p]) => (
              <Panel key={t}><h3 className="h3">{t}</h3><p className="small">{p}</p></Panel>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" id="corporations">
        <div className="wrap">
          <Panel style={{ padding: 'clamp(28px, 5vw, 56px)' }}>
            <div className="cols">
              <div className="col-main">
                <Heading eyebrow="Corporations" lead="Established corporations with their own identity, leadership, and culture are welcome to join as a body. A corporation keeps its autonomy over its internal matters.">Bring your corporation</Heading>
              </div>
              <div className="col-side">
                <div className="stack">
                  <p className="body">Corporation applications follow a separate process from individual pilots: a review of the corporation's history and leadership, a diplomatic check for existing wars or standings conflicts, a director-level interview, and a trial period before full alliance roles are granted.</p>
                  <a className="hel-btn hel-chamfer-sm" href={DISCORD_URL}>Contact us on Discord</a>
                </div>
              </div>
            </div>
          </Panel>
        </div>
      </section>
    </main>
  )
}
