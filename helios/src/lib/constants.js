export const DISCORD_URL = 'https://republic-alliance.com/discord'
export const REPUBLIC_URL = 'https://republic-alliance.com/'
export const WIKI_URL = 'https://wiki.republic-alliance.com'
export const ZKILL_URL = 'https://zkillboard.com/alliance/99013420/'

export const NAV_LINKS = [
  { label: 'Mandate', to: '/#mandate' },
  { label: 'Doctrine', to: '/#doctrine' },
  { label: 'Roster', to: '/#roster' },
  { label: 'The Republic', href: REPUBLIC_URL },
  { label: 'Enlist', to: '/enlist' },
]

export const RECORD = [
  ['Alliance ID', '99013420'],
  ['Parent', 'The Republic'],
  ['Theatre', 'Low-sec'],
  ['Timezones', ['EUTZ', ' · ', 'USTZ']],
  ['Languages', 'English · French'],
  ['Status', ['Wardec eligible']],
]

export const DOCTRINE_DATA = [
  { readout: 'Fleet target', bold: '50', suffix: 'characters', title: 'Doctrine fleets', text: 'Regularly pinged fleets on a defined doctrine. The alliance sets its doctrine and keeps the fits current. Fleet comms run on Mumble, with English and French channels linked to Command.' },
  { readout: 'Programme', bold: 'SRP', title: 'Ship Replacement', text: 'Losses in sanctioned fleets, flown on an approved doctrine fit, are reimbursed through the Ship Replacement Program. Claims are filed through Alliance Auth and reviewed against policy.' },
  { readout: 'Pipeline', bold: 'Trainee to Senior', title: 'Fleet command', text: 'Trainee, Fleet Commander, Senior Fleet Commander. No prior command experience is required to start. A mentor backs up every trainee fleet, and every fleet ends with an after-action report.' },
  { readout: 'Theatre', bold: 'Low-sec', title: 'Roams and defence', text: 'Black ops roams, defensive operations, and offensive operations. First aggression is permitted in low-sec, null-sec, and wormhole space; the highsec default remains non-aggression.' },
  { readout: 'Reserve', bold: 'Alpha accounts', title: 'Strategic Reserve', text: 'Alpha accounts trained into a single doctrine and held in reserve. The Reserve is activated when a war declaration calls for additional numbers.' },
  { ghost: 'In formation', title: 'Capital Wing', text: 'A standing capital fleet is an alliance goal for year end. The alliance builds the hulls and commands the wing. Qualified pilots are expected to fly alliance-owned hulls first.' },
]

export const CORPS_DATA = [
  { id: 'jasf', count: '17', name: "Jay's Army Special Forces", text: 'The PvP arm of Jay\'s Army. The graduated pathway for French-speaking members stepping up into combat operations.', bold: 'French', rest: 'EUTZ · Low-sec' },
  { id: 'rv', count: '16', name: 'Republic Vanguard', text: 'The PvP arm of Investtan Inc. and the primary English-speaking combat corporation.', bold: 'English', rest: 'EUTZ / USTZ · Low-sec' },
  { id: 'rsr', count: '26', name: 'Republic Strategic Reserve', text: 'An Alpha-account reserve held on a single doctrine and activated for wartime surge.', bold: 'Reserve', rest: 'Low-sec' },
  { id: 'trc', count: '1', name: 'The Republic Consortium', text: 'A holding corporation for industry assets in low-sec.', bold: 'Holdings', rest: 'Low-sec' },
]

export const HOME_STEPS = [
  ['Make contact', 'Reach a recruiter on Discord and tell us where you fly.'],
  ['Review', 'A short vetting pass, then a conversation with a Helios director.'],
  ['Trial', 'A trial period at reduced access, then full alliance roles.'],
]

export const ENLIST_STEPS = [
  ['Contact', 'Reach a recruiter on Discord. State your timezone, your language, and your PvP experience.'],
  ['Review', 'The baseline checks above, run by the recruiter and escalated for deeper review where something is flagged.'],
  ['Interview', 'A conversation with a Helios corporation director.'],
  ['Trial', 'A defined period at reduced access while you fly with the fleet.'],
  ['Full roles', 'Corporation and alliance roles are applied and the reduced-access period ends.'],
]

export const BASELINE_CHECKS = [
  'Killboard history review',
  'Corporation history review',
  "Character audit across the applicant's disclosed characters",
  'A short Discord or voice conversation before full roles are granted',
  'A defined trial period at reduced access',
]

export const HELIOS_BAR = [
  'A verifiable PvP record, or a completed trial in a Republic corporation first',
  'An interview with a Helios corporation director, not only a general recruiter',
  'Acknowledgment of the higher activity and availability expected of wardec-eligible members',
]

export const OFFER_DATA = [
  ['A doctrine', 'A defined fleet composition, fits kept current, and skill plans to match.'],
  ['Replacement', 'Sanctioned-fleet losses on doctrine fits are reimbursed through SRP.'],
  ['A path to command', 'A mentored route from Trainee to Fleet Commander, open to any member.'],
  ['Two languages', 'English and French communities with their own channels on shared voice comms.'],
]
