/* Shared Framer Motion variants — identical to The Republic where noted */

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.9, ease: 'easeOut' } },
}

export const revealLine = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

/* Helios-specific — hero logo floating rise */
export const logoFloat = {
  animate: {
    y: [0, -10, 0],
    rotate: [-1, 0.5, -1],
    transition: { duration: 7, ease: 'easeInOut', repeat: Infinity },
  },
}

/* Helios-specific — logo halo pulse */
export const haloPulse = {
  animate: {
    opacity: [0.5, 1.0, 0.5],
    scale: [0.88, 1.12, 0.88],
    transition: { duration: 5, ease: 'easeInOut', repeat: Infinity },
  },
}

/* Helios-specific — hero background ember breathe */
export const emberBreathe = {
  animate: {
    opacity: [0.55, 1.0, 0.55],
    scale: [1.0, 1.08, 1.0],
    transition: { duration: 9, ease: 'easeInOut', repeat: Infinity },
  },
}

/* Helios-specific — scroll hint bounce */
export const scrollHint = {
  animate: {
    opacity: [0.2, 0.5, 0.2],
    y: [0, 5, 0],
    transition: { duration: 2.2, ease: 'easeInOut', repeat: Infinity },
  },
}
