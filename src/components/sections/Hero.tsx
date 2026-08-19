"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SITE } from "@/content/site";
import { IMAGES } from "@/content/images";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { LineReveal } from "@/components/ui/Reveal";
import { ArrowDown, ArrowUpRight, DownloadIcon, PinIcon } from "@/components/ui/Icons";

/* ==========================================================================
   HERO
   --------------------------------------------------------------------------
   Text on the left, portrait on the right, light grid texture behind.

   TO EDIT THE COPY: src/content/site.ts -> SITE.hero
     eyebrow   small label on the top meta row
     headline  array of lines; wrap a word in {braces} to italicise it
     intro     the paragraph
     marquee   the stats shown on the top meta row, beside the eyebrow.
               Add or remove entries freely — the row wraps on narrow screens.

   TO REPLACE THE PORTRAIT: src/content/images.ts -> IMAGES.portrait

   ON ANIMATION: every entrance here is a CSS animation (the a-* classes,
   defined in globals.css), not a JavaScript one. That guarantees the hero
   can never be left invisible if scripting stalls or fails. Only the two
   parallax wrappers use JavaScript, and if those stall the layout simply
   sits still — nothing disappears.
   ========================================================================== */

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  /* Gentle parallax: the portrait drifts slightly slower than the page. */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative overflow-hidden pt-[4.5rem]">
      {/* ---- Background texture ---- */}
      <div className="grid-texture mask-fade absolute inset-0 opacity-70" aria-hidden="true" />
      <div
        className="absolute -right-40 -top-40 h-[38rem] w-[38rem] rounded-full opacity-[0.07] blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-marine), transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="shell relative min-h-[calc(100svh-4.5rem)] pb-16 pt-10 md:pt-16">
        {/* ================= META ROW (spans both columns) =================
            Kept in its own row above the two columns so that however many
            lines it wraps onto, it can never push the portrait out of
            alignment with the headline. */}
        <motion.div
          style={{ y: textY }}
          className="a-fade flex flex-wrap items-center gap-x-5 gap-y-3"
        >
          <div className="flex items-center gap-3">
            <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
            </span>
            <span className="eyebrow text-ink-mute">{SITE.hero.eyebrow}</span>
          </div>

          {/* Stats sit inline with the eyebrow. Edit SITE.hero.marquee. */}
          {SITE.hero.marquee.map((stat) => (
            <div key={stat.label} className="flex items-center gap-2.5">
              <span className="h-3 w-px bg-hairline-strong" aria-hidden="true" />
              <span className="display text-[1.2rem] leading-none text-marine">{stat.value}</span>
              <span className="eyebrow text-ink-mute">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* ================= TWO COLUMNS ================= */}
        <div className="mt-7 grid grid-cols-1 gap-12 md:grid-cols-12 md:items-start md:gap-10">
          {/* ================= LEFT: copy ================= */}
          <motion.div style={{ y: textY }} className="md:col-span-7 md:pr-8">
            {/* ---- Headline ---- */}
            <h1>
              <span className="sr-only">{SITE.name} — </span>
              <span className="display display-xl block text-ink">
                {SITE.hero.headline.map((line, i) => (
                  <LineReveal key={i} delay={0.28 + i * 0.11}>
                    {renderAccentedLine(line)}
                  </LineReveal>
                ))}
              </span>
            </h1>

            {/* ---- Signature line ---- */}
            <div
              className="a-rise mt-8 flex flex-wrap items-center gap-x-4 gap-y-2"
              style={{ animationDelay: "0.7s" }}
            >
              <span className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-ink">
                {SITE.name}
              </span>
              <span className="h-px w-8 bg-hairline-strong" aria-hidden="true" />
              <span className="flex items-center gap-1.5 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-ink-mute">
                <PinIcon className="h-3.5 w-3.5" />
                {SITE.location}
              </span>
            </div>

            {/* ---- Intro paragraph ---- */}
            <p className="lede a-rise mt-7 max-w-xl" style={{ animationDelay: "0.8s" }}>
              {SITE.hero.intro}
            </p>

            {/* ---- CTAs ---- */}
            <div
              className="a-rise mt-9 flex flex-wrap items-center gap-3"
              style={{ animationDelay: "0.92s" }}
            >
              <a href="#projects" className="btn btn-primary group">
                View the work
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              {SITE.resumeUrl && (
                <a href={SITE.resumeUrl} target="_blank" rel="noreferrer" className="btn btn-ghost">
                  <DownloadIcon />
                  Résumé
                </a>
              )}
              <a
                href={`mailto:${SITE.contact.email}`}
                className="link-underline ml-1 font-sans text-[0.88rem] text-ink-soft transition-colors duration-300 hover:text-marine"
              >
                {SITE.contact.email}
              </a>
            </div>
          </motion.div>

          {/* ================= RIGHT: portrait =================
              Vertical position is set by --hero-portrait-lines in globals.css
              (0 = level with the first headline line). */}
          <div className="hero-portrait-offset md:col-span-5">
            {/* Outer wrapper handles parallax; inner handles the fade-in, so
                the two transforms never fight over the same element. */}
            <motion.div
              style={{ y: portraitY }}
              className="relative mx-auto w-full max-w-sm md:max-w-none"
            >
              <div className="a-portrait relative" style={{ animationDelay: "0.35s" }}>
                {/* Offset frame outline — gives the photo architecture */}
                <div
                  className="absolute -bottom-4 -right-4 h-full w-full rounded-[1.25rem] border border-marine/25"
                  aria-hidden="true"
                />

                {/* ===== REPLACE IMAGE HERE =====
                    Edit IMAGES.portrait in src/content/images.ts
                    File: /public/images/portrait.jpg · 1200 x 1500 px (4:5) */}
                <ImageFrame
                  image={IMAGES.portrait}
                  ratio="4 / 5"
                  priority
                  focus="center 30%"
                  className="rounded-[1.25rem] border border-hairline shadow-[0_40px_80px_-50px_rgba(16,19,23,0.45)]"
                  sizes="(max-width: 768px) 90vw, 40vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ---- Scroll cue ---- */}
      <motion.a
        href="#about"
        style={{ opacity: fade }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink-mute transition-colors duration-300 hover:text-marine lg:flex"
        aria-label="Scroll to About"
      >
        <span className="font-mono text-[0.58rem] uppercase tracking-[0.2em]">Scroll</span>
        <span className="a-nudge">
          <ArrowDown className="h-4 w-4" />
        </span>
      </motion.a>
    </section>
  );
}

/* --------------------------------------------------------------------------
   Renders a headline line, italicising any word wrapped in {braces}.
   "to unify {optics}" -> to unify *optics*
   -------------------------------------------------------------------------- */
function renderAccentedLine(line: string) {
  const parts = line.split(/(\{[^}]+\})/g).filter(Boolean);
  return parts.map((part, i) =>
    part.startsWith("{") && part.endsWith("}") ? (
      <em key={i} className="italic text-marine">
        {part.slice(1, -1)}
      </em>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}
