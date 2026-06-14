export const ALLIANCE_NAME = 'Helios Initiative'
export const ALLIANCE_SUBTITLE = 'Vanguard of the Republic'
export const ALLIANCE_TAGLINE = "We don't hold space — we take it."

export const NAV_LINKS = [
  { label: 'About',      href: '#about' },
  { label: 'Operations', href: '#operations' },
  { label: 'Corps',      href: '#corps' },
  { label: 'Join',       href: '#join' },
  {
    label: '← The Republic',
    href: 'https://republic-alliance.com',
    external: true,
    isRepublic: true,
  },
]

export const CORPS_DATA = [
  {
    id: 'rsr',
    name: 'Republic Strategic Reserve',
    tag: 'Reserve Force',
    description:
      'Alpha-trained capsuleers held silent in reserve, ready to be called into action when strategic conditions demand a surge. Not deployed casually — deployed decisively.',
  },
  {
    id: 'jasf',
    name: "Jay's Army Special Forces",
    tag: 'Active PvP',
    description:
      'The precision instrument of Helios. Small-gang specialists and Black Ops pilots who operate ahead of the main force, hunting high-value targets with minimal footprint.',
  },
  {
    id: 'rv',
    name: 'Republic Vanguard',
    tag: 'Active PvP',
    description:
      'The primary combat arm. Republic Vanguard forms the core of Helios fleet doctrine — disciplined, doctrine-fit, and ready to engage on short notice across all threat tiers.',
  },
  {
    id: 'trc',
    name: 'The Republic Consortium',
    tag: 'Infrastructure',
    description:
      'Industrial asset holding and logistics backbone. Consortium keeps the strike force supplied — doctrine hulls, ammunition, and staging infrastructure, quietly and reliably.',
  },
]

export const OPS_DATA = [
  {
    number: '01',
    title: 'Black Ops',
    description:
      'Covert force projection into hostile space. We coordinate cross-regional strikes using cloaked force multipliers — inserting pilots into position with minimal signature and maximum effect.',
  },
  {
    number: '02',
    title: 'Defensive Ops',
    description:
      'When Republic blues call for support, Helios answers. Rapid-response doctrine built for low-sec and wormhole engagements where positioning and timing decide the fight.',
  },
  {
    number: '03',
    title: 'Strategic Reserve',
    description:
      'Helios capsuleers maintain an always-ready fleet posture. Reserve compositions are pre-fitted and staged — hours from deployment, not days. We do not scramble.',
  },
]

export const EXTERNAL_LINKS = {
  discord:    null,
  zkillboard: null,
}
