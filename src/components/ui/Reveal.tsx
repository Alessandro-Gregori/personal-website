"use client";

import { createElement, useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

/* ==========================================================================
   SCROLL REVEALS
   --------------------------------------------------------------------------
   Content fades and rises as it scrolls into view, fires once, and never
   re-animates when you scroll back up.

   HOW IT WORKS — and why it's built this way:
   An IntersectionObserver adds an "is-visible" class when the element enters
   the viewport; the actual animation is a CSS keyframe (see globals.css).
   The animation is NOT driven by JavaScript frame-by-frame, because a
   JS-driven version can stall mid-flight and leave content permanently
   stuck at opacity 0. With CSS, once the class lands the browser always
   finishes the animation.

   As a second safety net, layout.tsx contains a <noscript> rule that forces
   everything visible if JavaScript never runs at all.

   Timings and distances live in globals.css. Usage is unchanged:
     <Reveal>              ... </Reveal>
     <Reveal delay={0.1}>  ... </Reveal>
     <Reveal as="li">      ... </Reveal>
   ========================================================================== */

/** Watches an element and reports the first time it scrolls into view. */
function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;

    /* Very old browsers, or SSR edge cases: just show the content. */
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    /* If it's already on screen at mount, reveal it without waiting. */
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setInView(true);
          observer.disconnect();
        }
      },
      /* Starts slightly before the element is fully on screen. */
      { rootMargin: "0px 0px -70px 0px", threshold: 0 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [inView]);

  return { ref, inView };
}

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
  const { ref, inView } = useInView<HTMLElement>();

  return createElement(
    as,
    {
      ref,
      className: `reveal${inView ? " is-visible" : ""} ${className}`.trim(),
      style: {
        "--reveal-delay": `${delay}s`,
        "--reveal-y": `${y}px`,
      } as CSSProperties,
    },
    children,
  );
}

/* --------------------------------------------------------------------------
   STAGGER — for lists where each item should follow the previous one.
   Wrap the list in <Stagger> and each item in <StaggerItem>. Delays come
   from :nth-child rules in globals.css, so there's nothing to pass in.
   Supports up to 8 items before delays stop increasing.
   -------------------------------------------------------------------------- */

export function Stagger({ children, className = "" }: { children: ReactNode; className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className={`stagger${inView ? " is-visible" : ""} ${className}`.trim()}>
      {children}
    </div>
  );
}

export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`stagger-item ${className}`.trim()}>{children}</div>;
}

/* --------------------------------------------------------------------------
   LINE REVEAL — each headline line rises out from behind a mask. Used in the
   hero, which animates on load rather than on scroll, so this needs no
   observer and no JavaScript: it's a CSS animation with a delay.
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
      <span className={`a-line block ${className}`.trim()} style={{ animationDelay: `${delay}s` }}>
        {children}
      </span>
    </span>
  );
}
