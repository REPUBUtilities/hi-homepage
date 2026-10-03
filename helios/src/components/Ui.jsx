export function Heading({ eyebrow, children, lead }) {
  return (
    <>
      <p className="eyebrow">[{eyebrow}]</p>
      <h2 className="tac h2">{children}</h2>
      <div className="bar" />
      {lead && <p className="lead">{lead}</p>}
    </>
  )
}

export function Panel({ children, style }) {
  return (
    <div className="hel-panel hel-chamfer">
      <div className="hel-panel-in hel-chamfer" style={style}>{children}</div>
    </div>
  )
}

export function Steps({ items }) {
  return (
    <ol className="steps">
      {items.map(([h, p]) => (
        <li key={h}><div><h4>{h}</h4><p>{p}</p></div></li>
      ))}
    </ol>
  )
}

export function Nebula() {
  return (
    <>
      <div className="neb"><b /><b /><b /><b /></div>
      <div className="grid-faint" />
      <div className="hel-scan" />
    </>
  )
}
