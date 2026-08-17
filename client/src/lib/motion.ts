import type { Variants } from "framer-motion";

export const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const;

export const viewportOnce = { once: true, margin: "-80px" } as const;

export function fadeUp(delay = 0, distance = 24): Variants {
  return {
    hidden: { opacity: 0, y: distance, filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, delay, ease: EASE_PREMIUM },
    },
  };
}

export function fadeIn(delay = 0): Variants {
  return {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.6, delay, ease: EASE_PREMIUM } },
  };
}

export function scaleIn(delay = 0): Variants {
  return {
    hidden: { opacity: 0, scale: 0.94, filter: "blur(6px)" },
    show: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.7, delay, ease: EASE_PREMIUM },
    },
  };
}

export const staggerContainer = (stagger = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});
