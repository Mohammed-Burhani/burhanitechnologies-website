"use client";

import { motion, useReducedMotion } from "framer-motion";

// Heavy, damped easing so content settles into place instead of snapping.
const EASE = [0.32, 0.72, 0, 1];

/**
 * Fade-up reveal used to sequence the page top to bottom, so the eye reads
 * hero, form, process and office details in the order they matter.
 * Honors prefers-reduced-motion by rendering static.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  as = "div",
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as] ?? motion.div;

  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </Tag>
  );
}
