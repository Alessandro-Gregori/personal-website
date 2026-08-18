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
   Text is on the left, portrait on the right, with a light grid texture
   behind everything.

   TO EDIT THE COPY: src/content/site.ts -> SITE.hero
     eyebrow   small label above the headline
     headline  array of lines; wrap a word in {braces} to italicise it
     intro     the paragraph
     marquee   the three stats along the bottom

   TO REPLACE THE PORTRAIT: src/content/images.ts -> IMAGES.portrait
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

      <div className="shell relative grid min-h-[calc(100svh-4.5rem)] grid-cols-1 items-center gap-12 py-14 lg:grid-cols-12 lg:gap-10 lg:py-0">
        {/* ================= LEFT: copy ================= */}
        <motion.div style={{ y: textY }} className="lg:col-span-7 lg:pr-8">
          {/* Eyebrow */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
            </span>
            <span className="eyebrow text-ink-mute">{SITE.hero.eyebrow}</span>
          </motion.div>

          {/* Name */}
          <h1 className="mt-7">
            <span className="sr-only">{SITE.name} — </span>
            <span className="display display-xl block text-ink">
              {SITE.hero.headline.map((line, i) => (
                <LineReveal key={i} delay={0.28 + i * 0.11}>
                  {renderAccentedLine(line)}
                </LineReveal>
              ))}
            </span>
          </h1>

          {/* Signature line — name rendered in mono for contrast with the serif */}
          <motion.div
            className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <span className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-ink">
              {SITE.name}
            </span>
            <span className="h-px w-8 bg-hairline-strong" aria-hidden="true" />
            <span className="flex items-center gap-1.5 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-ink-mute">
              <PinIcon className="h-3.5 w-3.5" />
              {SITE.location}
            </span>
          </motion.div>

          {/* Intro paragraph */}
          <motion.p
            className="lede mt-7 max-w-xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {SITE.hero.intro}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-9 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.92 }}
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
          </motion.div>

          {/* Stat strip */}
          <motion.dl
            className="mt-12 flex flex-wrap gap-x-10 gap-y-6 border-t border-hairline pt-7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 1.05 }}
          >
            {SITE.hero.marquee.map((stat) => (
              <div key={stat.label}>
                <dt className="display text-[2rem] leading-none text-marine">{stat.value}</dt>
                <dd className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.15em] text-ink-mute">
                  {stat.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* ================= RIGHT: portrait ================= */}
        <div className="lg:col-span-5">
          <motion.div
            style={{ y: portraitY }}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
          >
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
              sizes="(max-width: 1024px) 90vw, 40vw"
            />

            {/* Caption tag over the corner of the photo */}
            <div className="absolute -left-3 bottom-6 hidden rounded-lg border border-hairline bg-paper/90 px-3.5 py-2 backdrop-blur-sm sm:block">
              <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-ink-mute">
                Optics · Hardware · Medicine
              </p>
            </div>
          </motion.div>
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
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}

/* --------------------------------------------------------------------------
   Renders a headline line, italicising any word wrapped in {braces}.
   "edge of {optics}," -> edge of *optics*,
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
