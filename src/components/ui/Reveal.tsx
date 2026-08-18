"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/* ==========================================================================
   REVEAL
   --------------------------------------------------------------------------
   Wraps anything in a subtle fade-and-rise as it scrolls into view.
   Fires once, so nothing re-animates when you scroll back up.

   Usage:
     <Reveal>            ...  </Reveal>
     <Reveal delay={0.1}> ...  </Reveal>

   Motion is deliberately restrained — 0.7s, small travel, soft easing.
   Users with "reduce motion" enabled get the content with no animation
   (handled globally in globals.css).
   ========================================================================== */

const EASE = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: ReactNode;
  /** Seconds to wait before animating. Use to stagger siblings. */
  delay?: number;
  /** Pixels of upward travel. */
  y?: number;
  className?: string;
  /** Render as a different element, e.g. "li" inside a list. */
  as?: "div" | "li" | "section" | "article" | "header" | "footer";
};

export function Reveal({ children, delay = 0, y = 26, className = "", as = "div" }: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}

/* --------------------------------------------------------------------------
   STAGGER — parent/child pair for lists where each item should follow the
   previous one. Wrap the list in <Stagger> and each item in <StaggerItem>.
   -------------------------------------------------------------------------- */

const parentVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

export function Stagger({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={parentVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-70px" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={childVariants}>
      {children}
    </motion.div>
  );
}

/* --------------------------------------------------------------------------
   LINE REVEAL — used for the hero headline. Each line rises out from behind
   a mask, which reads noticeably more crafted than a plain fade.
   -------------------------------------------------------------------------- */

export function LineReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <span className="block overflow-hidden pb-[0.12em]">
      <motion.span
        className={`block ${className}`}
        initial={{ y: "108%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.95, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}
