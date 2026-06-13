# CLAUDE.md — Helios Initiative Website

## Project Overview

This is a static single-page application (SPA) for **Helios Initiative**, the PvP sub-alliance of The Republic in the MMO game **Eve Online**.
The site serves as a public-facing presence: identity, combat operations, order of battle, and enlistment information.

**Stack:** React + Vite · Tailwind CSS · Framer Motion · React Router (BrowserRouter)  
**Deploy target:** Nginx Docker image (self-hosted)  
**Repo:** https://github.com/REPUBUtilities/helios-homepage  
**Sister site:** https://republic-alliance.com (The Republic — shares stack and design DNA, different aesthetic register)

---

## Relationship to The Republic Site

Helios Initiative and The Republic are two separate deployments of the same stack. They share:

- **Identical technology stack** — React + Vite, Tailwind, Framer Motion, React Router
- **Font families** — Cinzel, Space Mono, IBM Plex Mono (same Google Fonts imports)
- **Layout skeleton** — 1200px max-width, section-based structure, `py-24 md:py-32` section padding
- **Component naming conventions** — PascalCase components, camelCase hooks, Framer Motion variant patterns
- **Latin eyebrow label convention** — small-caps Cinzel above section headings (`Legio`, `Imperium`, `Ordo`, etc.)
- **Deployment pattern** — identical Nginx Docker setup, BrowserRouter, same Vite config

They differ in:

- **Palette** — The Republic uses ion blue + void purple. Helios Initiative uses blood crimson + shadow indigo (derived from the alliance logo)
- **Background** — The Republic has a cool nebula drift. Helios has a warm ember-breathing glow
- **Mood** — The Republic is senatorial and institutional. Helios is a vanguard force — terse, martial, combat-ready
- **Scan line texture** — Helios uses a faint crimson scan line in the hero; The Republic does not
- **Colour of the `← The Republic` nav link** — always rendered in The Republic's ion blue (`#0a88cd`) as an intentional visual reference across the two sites

Do not merge these into one codebase. They are sibling repositories that should evolve independently.

---

## Design Philosophy

### The Core Tension

Where The Republic speaks with the voice of a governing institution — ordered, permanent, deliberate — Helios Initiative speaks as its military instrument. The Republic is the Senate. Helios is the Legion.

The aesthetic inherits the same EVE Online industrial-dark baseline (angular HUDs, scanner readouts, monospace data) but shifts the register from _authority and legacy_ to _readiness and force projection_.

**The tone is: vanguard minimalism.** Restrained, but with heat underneath. The design should feel like a classified combat brief, not a civic charter.

### What This Means in Practice

- Layouts follow the same structured, deliberate grid as The Republic — but the accent colour is crimson, not blue, and the emotional temperature is higher
- The hero is the centrepiece: the falcon logo with a slow ember-glow halo. This is the one moment of atmospheric drama — everything else is disciplined
- Background animation is warm, not cool — ember radial glow beneath the logo, not nebula drift
- Scan lines at very low opacity (`rgba(196,30,30,0.015)`) give the hero a faint combat-HUD texture
- The shadow-indigo (`#3A1669`) from the logo's underside appears sparingly — left-border accents on stat cards, gradient line reveals on operation cards, warning blocks — never as a background fill
- Section dividers use a three-stop gradient (`transparent → crimson → shadow-indigo → transparent`) at low opacity — the colour shift echoes the logo's two-tone palette

### What to Avoid

- Neon red overload — glow effects are used in exactly two places: the hero logo halo, and primary CTA hover. Nowhere else
- Particle systems, WebGL, or any animated background more complex than a breathing radial gradient
- Generic "military gaming" aesthetics — no camouflage textures, no explosion graphics, no aggressive all-caps everywhere
- Making it feel angrier than The Republic rather than sharper — the mood is precision and readiness, not aggression for its own sake
- Breaking the structural kinship with The Republic — a visitor should recognise they are in the same family of sites

---

## Colour Palette

```css
:root {
	/* Helios Initiative palette — derived directly from the alliance logo */
	--color-blood: #c41e1e; /* Blood crimson — primary interactive colour, borders, glows */
	--color-ember: #d93010; /* Hotter ember red — used only for gradient accents */
	--color-shadow: #3a1669; /* Shadow indigo — logo underside; mirrors Republic --color-accent */
	--color-void: #070505; /* Near-black, warm-shifted from Republic's #090909 */
	--color-ash: #ede8e3; /* Off-white, slightly warmer than Republic's #f7f7f7 */

	/* Derived utility tokens */
	--color-blood-dim: rgba(196, 30, 30, 0.1);
	--color-shadow-dim: rgba(58, 22, 105, 0.18);
	--color-border: rgba(196, 30, 30, 0.28);
	--color-border-sub: rgba(237, 232, 227, 0.06);
	--color-surface: rgba(
		80,
		6,
		6,
		0.22
	); /* Card backgrounds — blood-tinted glass */
}
```

**Usage guidelines:**

- `--color-void` is the default page background — do not use pure `#000000`
- `--color-blood` is the primary interactive colour — all borders, hover states, CTAs, eyebrow labels, and glow effects
- `--color-shadow` is the secondary accent — used in left-border gradients on stat cards, the bottom-line reveal on operation cards, and warning blocks; never as a background fill at full opacity; never on text
- `--color-ember` only in gradient terminations (e.g., the hero radial glow), never as a solid fill or border
- `--color-surface` for all card and section backgrounds — never a solid opaque fill
- `--color-ash` for all body copy; headings use `#FFFFFF` at full weight
- The Republic's `--color-primary` (`#0a88cd`, ion blue) appears in exactly one place: the `← The Republic` nav link and footer link. Do not use it for anything else on this site

---

## Typography

```
Display / Hero:       Cinzel Decorative (Google Fonts) — used only for the hero alliance name (h1)
                      Weight: 400 only

Display / Sections:   Cinzel (Google Fonts) — section headings, nav brand, corp names, eyebrow labels
                      Weight: 400 or 600 only — never bold/700

UI / Body:            Space Mono (Google Fonts) — body copy, nav links, descriptions, metadata
                      Weight: 400 regular only; 700 for emphasis within body text

Data / Tags:          IBM Plex Mono (Google Fonts) — stat values, corp badges, ops numbers, warning labels
                      Weight: 400 and 700
```

**Google Fonts import:**

```html
<link
	href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Cinzel+Decorative:wght@400&family=Space+Mono:ital,wght@0,400;0,700;1,400&family=IBM+Plex+Mono:wght@400;700&display=swap"
	rel="stylesheet" />
```

**Scale (rem, base 16px) — identical to The Republic:**

```
--text-xs:   0.65rem   /* eyebrow labels, tags, metadata, nav links */
--text-sm:   0.80rem   /* body copy, card descriptions, captions */
--text-base: 0.95rem   /* primary body */
--text-lg:   1.15rem   /* corp names, ops titles, join subheadings */
--text-xl:   1.50rem   /* (available if needed) */
--text-2xl:  2.25rem   /* section headings (Cinzel) */
--text-3xl:  3.50rem   /* (available if needed) */
--text-hero: clamp(3.2rem, 6.5vw, 6rem)  /* hero h1 (Cinzel Decorative) */
```

**Letter-spacing:**

- Cinzel Decorative hero title: `letter-spacing: 0.12em`
- Cinzel section headings: `letter-spacing: 0.08em–0.10em`
- Eyebrow labels: `letter-spacing: 0.42em–0.45em` — always uppercase
- Nav brand: `letter-spacing: 0.32em`
- Space Mono body: `letter-spacing: 0.05em`
- IBM Plex Mono stat values: default (tight)

---

## Motion & Animation

Use **Framer Motion** for all entrance animations and interactive transitions. The principles are identical to The Republic — slow, composed, institutional — but with two Helios-specific additions.

### Principles (shared with The Republic)

- Default easing: `[0.16, 1, 0.3, 1]` (expo out) — fast start, slow settle
- Duration: 0.6s–1.0s for reveals, never faster than 0.4s
- Stagger children: 0.08s–0.12s between items
- No spring physics on page elements — use `tween` for composed movement
- Scroll-triggered reveals: Framer Motion `whileInView` with `once: true`

### Standard Variants (reuse across components — same as The Republic)

```js
export const fadeUp = {
	hidden: { opacity: 0, y: 24 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
	},
};

export const fadeIn = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { duration: 0.9, ease: "easeOut" } },
};

export const revealLine = {
	hidden: { scaleX: 0, originX: 0 },
	visible: {
		scaleX: 1,
		transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
	},
};
```

### Helios-Specific Animations

**Hero logo — floating rise:**

```js
// Applied to the <img> wrapping the falcon logo
const logoFloat = {
	animate: {
		y: [0, -10, 0],
		rotate: [-1, 0.5, -1],
		transition: { duration: 7, ease: "easeInOut", repeat: Infinity },
	},
};
```

**Hero logo halo — pulse:**

```js
// Applied to the radial glow div behind the logo
const haloPulse = {
	animate: {
		opacity: [0.5, 1.0, 0.5],
		scale: [0.88, 1.12, 0.88],
		transition: { duration: 5, ease: "easeInOut", repeat: Infinity },
	},
};
```

**Hero background ember — breathe:**

```js
// Applied to the radial gradient bg div
const emberBreathe = {
	animate: {
		opacity: [0.55, 1.0, 0.55],
		scale: [1.0, 1.08, 1.0],
		transition: { duration: 9, ease: "easeInOut", repeat: Infinity },
	},
};
```

**Scroll hint — bounce:**

```js
const scrollHint = {
	animate: {
		opacity: [0.2, 0.5, 0.2],
		y: [0, 5, 0],
		transition: { duration: 2.2, ease: "easeInOut", repeat: Infinity },
	},
};
```

### CSS-only Transitions (for interactive states)

Operation card bottom-line reveal on hover:

```css
.ops-card::after {
	content: "";
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	height: 2px;
	background: linear-gradient(90deg, var(--color-blood), var(--color-shadow));
	transform: scaleX(0);
	transform-origin: left;
	transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.ops-card:hover::after {
	transform: scaleX(1);
}
```

Corp card top-line reveal on hover:

```css
.corp-card::before {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	height: 2px;
	background: linear-gradient(
		90deg,
		var(--color-blood),
		var(--color-shadow),
		transparent
	);
	opacity: 0;
	transition: opacity 0.3s ease;
}
.corp-card:hover::before {
	opacity: 1;
}
```

CTA button fill sweep on hover:

```css
.btn-primary {
	position: relative;
	overflow: hidden;
}
.btn-primary::before {
	content: "";
	position: absolute;
	inset: 0;
	background: var(--color-blood);
	transform: translateX(-101%);
	transition: transform 0.38s cubic-bezier(0.16, 1, 0.3, 1);
}
.btn-primary:hover {
	color: #fff;
}
.btn-primary:hover::before {
	transform: translateX(0);
}
```

---

## Component Patterns

### Layout

- Max content width: `1200px`, centred
- Section padding: `py-24 md:py-32` (same as The Republic)
- Full-bleed sections: hero, `#ops-band` (dark tinted background), and the band dividers
- `max-width: none` sections should use an inner `<div className="max-w-[1200px] mx-auto">` wrapper

### Band Dividers

Between every major section, render a 1px horizontal band divider:

```jsx
// BandDivider.jsx
<div
	className="w-full h-px opacity-35"
	style={{
		background:
			"linear-gradient(90deg, transparent 0%, var(--color-blood) 30%, var(--color-shadow) 70%, transparent 100%)",
	}}
/>
```

### Cards

**Stat cards (About section):**

```
Background:   var(--color-surface) with backdrop-blur-sm
Border:       1px solid var(--color-border)
Corner:       border-radius: 0 — square, institutional
Left accent:  3px solid gradient (--color-blood → --color-shadow), full height
Hover:        border-color shifts to rgba(196,30,30,0.55)
```

**Corporation cards:**

```
Background:   var(--color-surface)
Border:       1px solid var(--color-border)
Corner:       border-radius: 0
Hover:        translateY(-3px), border-color rgba(196,30,30,0.55), top-line reveal (see Animation section)
Corner bracket decoration: CSS pseudo-elements (see Decorative Elements)
```

**Operation cards:**

```
Background:   var(--color-surface) — lighter on hover: rgba(100,6,6,0.12)
Border:       1px solid var(--color-border) — cards share borders; use border-right on all but last
Hover:        background shift + bottom-line reveal (see Animation section)
Ops number:   IBM Plex Mono, ~3.5rem, color: rgba(196,30,30,0.12) — decorative, not readable
```

### Buttons

```
Primary CTA:    bg transparent, border 1px --color-blood, text --color-blood
                Hover: fill sweep (--color-blood), color #fff, box-shadow 0 0 28px rgba(196,30,30,0.4)
                Font: Space Mono, --text-xs, letter-spacing 0.22em, uppercase

Secondary link: no border, text in ion blue rgba(10,136,205,0.45) — used exclusively for ← The Republic links
                Hover: ion blue at 90% opacity
```

### Decorative Elements

**Corner brackets** on corp cards and stat callouts — CSS pseudo-elements only, no images:

```css
.bracketed {
	position: relative;
}
.bracketed::before,
.bracketed::after {
	content: "";
	position: absolute;
	width: 14px;
	height: 14px;
}
.bracketed::before {
	top: -5px;
	left: -5px;
	border-top: 1px solid rgba(196, 30, 30, 0.5);
	border-left: 1px solid rgba(196, 30, 30, 0.5);
}
.bracketed::after {
	bottom: -5px;
	right: -5px;
	border-bottom: 1px solid rgba(196, 30, 30, 0.5);
	border-right: 1px solid rgba(196, 30, 30, 0.5);
}
```

**Eyebrow labels:** Cinzel, `--text-xs`, `letter-spacing: 0.42em`, uppercase, `--color-blood` at 80% opacity, placed directly above every `<h2>` section heading.

**Section rule:** 56px wide, 1px tall, `background: var(--color-blood)`, placed between the eyebrow/heading pair and the section content. Animates in using `revealLine` variant.

**Warning block** (Join section — wardec notice):

```
Background:   rgba(58,22,105,0.12) — shadow-indigo tint
Border:       1px solid rgba(58,22,105,0.3), left: 3px solid var(--color-shadow)
Label:        IBM Plex Mono, --text-xs, --color-shadow, uppercase, letter-spacing 0.1em
```

**Nav brand diamond:** a small 6×6px div, `background: var(--color-blood)`, `transform: rotate(45deg)`, placed immediately before the brand name text.

**Scroll hint (hero):** a vertical 1px line (`background: linear-gradient(to bottom, --color-blood, transparent)`, 44px tall) above a 5×5px rotated diamond in `--color-blood`. Animates with `scrollHint` variant. Positioned `absolute bottom-8 left-1/2`.

**Hero scan lines:**

```css
.hero-scanlines {
	position: absolute;
	inset: 0;
	pointer-events: none;
	background: repeating-linear-gradient(
		0deg,
		transparent,
		transparent 3px,
		rgba(196, 30, 30, 0.015) 3px,
		rgba(196, 30, 30, 0.015) 4px
	);
}
```

**Hero grid:**

```css
.hero-grid-bg {
	position: absolute;
	inset: 0;
	pointer-events: none;
	background-image:
		linear-gradient(rgba(196, 30, 30, 0.025) 1px, transparent 1px),
		linear-gradient(90deg, rgba(196, 30, 30, 0.025) 1px, transparent 1px);
	background-size: 64px 64px;
}
```

---

## File & Folder Structure

The project root holds infrastructure files. The SPA lives entirely under `/helios`.

```
/                          ← project root (where CLAUDE.md lives)
  Dockerfile
  nginx.conf
  .dockerignore
  /helios                  ← SPA root
    package.json
    vite.config.js
    tailwind.config.js
    index.html
    /public                — static assets (favicon, og image, alliance logo PNG)
    /src
      /assets
        falcon-logo.png    — Helios Initiative alliance logo (the crimson falcon)
      /components
        /ui                — Button, Card, Divider, Badge, BandDivider, CornerBracket
        /layout            — Navbar, Footer, Section, PageWrapper
        /sections          — Hero, About, Operations, Corps, Join
      /hooks               — useScrollReveal, useActiveSection
      /lib
        variants.js        — Framer Motion shared variants (fadeUp, fadeIn, revealLine, logoFloat, haloPulse, emberBreathe)
        constants.js       — corps data, nav links, colour tokens as JS, ops data
      /styles
        globals.css        — CSS custom properties, Tailwind base overrides
      App.jsx
      main.jsx
```

---

## Sections (Page Structure)

### 1. Hero

- Fixed `min-h-screen`, flex column, centred
- Three background layers (z-indexed): ember glow div, scan line div, grid div
- Eyebrow label: `"The Republic · Strike Force · New Eden"`
- Alliance logo `<img>` (`/public/falcon-logo.png`) at 200×200px with floating animation and halo glow behind it
- `<h1>` in Cinzel Decorative: `"Helios Initiative"`
- Subtitle in Cinzel: `"Vanguard of the Republic"` — smaller, `--color-blood`, high letter-spacing
- Rule line (100px, `--color-blood`, centred)
- Tagline in Space Mono italic, muted, max-width 520px
- Single CTA: `"Request Deployment"` linking to `#join`
- Scroll hint at absolute bottom

### 2. About

- Two-column grid: `1.1fr 0.9fr`
- Left: 3 paragraphs in Space Mono, `--text-sm`
- Right: 2×2 stat card grid — Pilots (60+), Corporations (4), Target Strength (300), Primary Theatre (LS / WH)
- Eyebrow: `"Legio — About"`

### 3. Operations (full-bleed dark band)

- Background: `rgba(5, 2, 2, 0.7)` with top and bottom border in `--color-border-sub`
- Three-column card grid sharing borders
- Each card: large decorative ops number (IBM Plex Mono, nearly transparent), title (Cinzel), description (Space Mono)
- Cards: Black Ops, Defensive Ops, Strategic Reserve
- Eyebrow: `"Imperium — Operations"`

### 4. Corps

- Two-column grid, 1.5rem gap
- Four corp cards with corner bracket decoration
- Each card: corp name (Cinzel) + type badge (IBM Plex Mono, `--color-blood` bordered pill) + description
- Corps: Republic Strategic Reserve, Jay's Army Special Forces, Republic Vanguard, The Republic Consortium
- Eyebrow: `"Ordo — Order of Battle"`

### 5. Join

- Two-column grid: requirements list (left) + call-to-action sidebar (right)
- Requirements: bulleted with `▸` glyph in `--color-blood`, items separated by `--color-border-sub` rules
- Warning block below requirements: wardec eligibility notice (shadow-indigo styling)
- Right sidebar: prose paragraphs + primary CTA (`"Apply via Discord"`) + ghost link (`"← Join The Republic instead"`)
- Eyebrow: `"Enlistment — Join"`

### 6. Footer

- Three columns: brand name (`"Helios Initiative · New Eden"`), nav links (zKillboard, Discord, The Republic), copyright
- Brand in Cinzel, `--color-blood` at 55% opacity
- The Republic link in ion blue (`#0a88cd`)

---

## Naming Conventions

Identical to The Republic:

- Components: **PascalCase** (`HeroSection.jsx`, `CorpCard.jsx`, `OpsCard.jsx`)
- Hooks: **camelCase** with `use` prefix (`useScrollReveal.js`, `useActiveSection.js`)
- CSS classes: **Tailwind utilities only** — no custom class names except in `globals.css`
- Constants: **SCREAMING_SNAKE_CASE** for data constants (`CORPS_DATA`, `OPS_DATA`), **camelCase** for config objects
- Files: match component name exactly
- Animation variants: **camelCase** (`fadeUp`, `logoFloat`, `haloPulse`, `emberBreathe`)

---

## constants.js — Data Shape

```js
// /helios/src/lib/constants.js

export const CORPS_DATA = [
	{
		id: "rsr",
		name: "Republic Strategic Reserve",
		tag: "Reserve Force",
		description: "Alpha-trained capsuleers held silent in reserve...",
	},
	{
		id: "jasf",
		name: "Jay's Army Special Forces",
		tag: "Active PvP",
		description: "The combat arm of...",
	},
	{
		id: "rv",
		name: "Republic Vanguard",
		tag: "Active PvP",
		description: "The primary combat corporation...",
	},
	{
		id: "trc",
		name: "The Republic Consortium",
		tag: "Infrastructure",
		description: "Industry asset holding corporation...",
	},
];

export const OPS_DATA = [
	{ number: "01", title: "Black Ops", description: "..." },
	{ number: "02", title: "Defensive Ops", description: "..." },
	{ number: "03", title: "Strategic Reserve", description: "..." },
];

export const NAV_LINKS = [
	{ label: "About", href: "#about" },
	{ label: "Operations", href: "#operations" },
	{ label: "Corps", href: "#corps" },
	{ label: "Join", href: "#join" },
	{
		label: "← The Republic",
		href: "https://republic-alliance.com",
		external: true,
		isRepublic: true,
	},
];

// isRepublic: true flags the link to receive ion-blue styling
```

---

## Dev Commands

All commands run from `/helios`:

```bash
cd helios
npm run dev       # local dev server — http://localhost:5174 (or 5173 if Republic site is not running)
npm run build     # production static build → /helios/dist
npm run preview   # preview /helios/dist locally before deploying
```

---

## Tone of Voice (Copy)

- Martial, composed, and terse — this is a combat force, not a governing body
- No exclamation marks
- Sentences are short and declarative where possible: "We don't hold space — we take it."
- Latin eyebrow labels encouraged: `Legio`, `Imperium`, `Ordo`, `Enlistment`
- In-universe voice — speak as if Helios Initiative exists and operates in New Eden
- No recruitment hyperbole ("we're the best!", "elite!", "join the fun!") — state facts and requirements plainly
- Where The Republic uses formal institutional language, Helios uses direct operational language

---

## EVE Online Aesthetic References

Same as The Republic — absorb the language, don't replicate it literally:

- EVE's in-game UI: dark surfaces, thin borders, angular brackets, data readouts
- Caldari ship design: geometric angularity, institutional authority
- Black ops ships specifically: covert, angular, dark — inform the mood without becoming literal

---

## Helios Aesthetic References (Subtle)

- Roman Legion: discipline, formation, force projection — expressed through grid structure and terse copy, not iconography
- The falcon logo is the only figurative element. Do not add ship renders, weapon graphics, or other literal imagery
- The crimson + indigo palette is evocative of fire and shadow — let the colour do the work
- Key: the site should feel _sharp_, not _loud_ — precision and readiness, not aggression

---

## Deployment Notes

Identical infrastructure to The Republic. Separate Docker image, separate container.

### Build & Container

```dockerfile
# Dockerfile (at project root)
FROM node:20-alpine AS build
WORKDIR /app
COPY helios/package*.json ./
RUN npm ci
COPY helios/ .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
```

### Nginx Config (`nginx.conf`)

Required for SPA routing — all paths must fall back to `index.html`:

```nginx
server {
    listen 80;
    server_name _;
    root /usr/share/nginx/html;
    index index.html;

    location ~* \.(?:js|css|woff2?|svg|png|ico|webp)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        try_files $uri =404;
    }

    location / {
        try_files $uri $uri/ /index.html;
    }

    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-Content-Type-Options "nosniff";
    add_header Referrer-Policy "strict-origin-when-cross-origin";
}
```

### Routing

Use **`BrowserRouter`** (not `HashRouter`) — the Nginx config above handles SPA fallback routing correctly.

### Vite Config

```js
// vite.config.js
export default {
	base: "/", // adjust only if serving from a subdirectory
};
```

### Docker Commands

```bash
# Build image
docker build -t helios-initiative-web .

# Run locally for testing
docker run -p 8081:80 helios-initiative-web

# Tag and push to your registry
docker tag helios-initiative-web your-registry/helios-initiative-web:latest
docker push your-registry/helios-initiative-web:latest
```

Note: use port `8081` locally to avoid conflict with The Republic's container on `8080`.

### Asset Paths

- Alliance logo (`falcon-logo.png`) must live in `/helios/public/` — reference as `/falcon-logo.png` in code
- Do not import the logo via `/src/assets` if it needs to be referenced in an `<img src>` without bundling
- Do not hardcode hostnames or ports anywhere in the frontend code

---

_Pro Patria Et Stellis._
