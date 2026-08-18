"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { SITE } from "@/content/site";
import { CloseIcon, DownloadIcon, MenuIcon } from "@/components/ui/Icons";

/* ==========================================================================
   HEADER
   --------------------------------------------------------------------------
   Fixed navigation. Three behaviours worth knowing about:

   1. It starts transparent over the hero and fades into a frosted bar once
      you scroll — so the hero image is never boxed in by a solid strip.
   2. The link matching the section you're looking at is highlighted, tracked
      with an IntersectionObserver.
   3. On mobile it becomes a full-screen overlay menu.

   To change which links appear, edit  SITE.nav  in src/content/site.ts.
   ========================================================================== */

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  /* Thin progress bar across the very top of the page. */
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 220, damping: 40, restDelta: 0.001 });

  /* Switch to the solid/frosted treatment after a short scroll. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Highlight the nav link for whichever section is currently in view. */
  useEffect(() => {
    const sections = SITE.nav
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.2, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  /* Stop the page scrolling behind the mobile overlay. */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* Close the overlay on Escape. */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled
            ? "border-b border-hairline bg-paper/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <motion.div
          className="absolute inset-x-0 top-0 h-[2px] origin-left bg-signal"
          style={{ scaleX: progress }}
          aria-hidden="true"
        />

        <div className="shell flex h-[4.5rem] items-center justify-between gap-6">
          {/* ---- Monogram / wordmark ---- */}
          <a
            href="#top"
            className="group flex items-baseline gap-2.5"
            aria-label={`${SITE.name} — back to top`}
          >
            <span className="display text-[1.6rem] leading-none tracking-tight text-ink">
              {SITE.monogram}
            </span>
            <span className="hidden font-mono text-[0.62rem] uppercase tracking-[0.2em] text-ink-mute transition-colors duration-300 group-hover:text-marine sm:block">
              {SITE.name}
            </span>
          </a>

          {/* ---- Desktop nav ---- */}
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {SITE.nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative font-sans text-[0.83rem] font-medium tracking-wide transition-colors duration-300 ${
                  active === item.id ? "text-marine" : "text-ink-soft hover:text-ink"
                }`}
              >
                {item.label}
                {active === item.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute -bottom-1.5 left-0 h-px w-full bg-marine"
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* ---- Right side actions ---- */}
          <div className="flex items-center gap-3">
            {SITE.resumeUrl && (
              <a
                href={SITE.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-ink-soft transition-colors duration-300 hover:text-marine md:inline-flex"
              >
                <DownloadIcon className="h-3.5 w-3.5" />
                Résumé
              </a>
            )}
            <a href="#contact" className="btn btn-primary hidden !px-5 !py-2.5 !text-[0.8rem] sm:inline-flex">
              Get in touch
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline-strong text-ink transition-colors duration-300 hover:bg-ink hover:text-paper lg:hidden"
              aria-label="Open menu"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      {/* ---- Mobile overlay menu ---- */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-paper lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid-texture mask-fade absolute inset-0 opacity-60" aria-hidden="true" />

            <div className="shell relative flex h-[4.5rem] items-center justify-between">
              <span className="display text-[1.6rem] leading-none text-ink">{SITE.monogram}</span>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline-strong text-ink"
                aria-label="Close menu"
              >
                <CloseIcon />
              </button>
            </div>

            <nav className="shell relative mt-8 flex flex-col" aria-label="Mobile">
              {SITE.nav.map((item, i) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-baseline gap-4 border-b border-hairline py-5"
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 + i * 0.055, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="font-mono text-[0.62rem] text-signal">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="display text-[2.1rem] leading-none text-ink">{item.label}</span>
                </motion.a>
              ))}
            </nav>

            <div className="shell relative mt-10 flex flex-col gap-3">
              <a href={`mailto:${SITE.contact.email}`} className="btn btn-primary justify-center">
                {SITE.contact.email}
              </a>
              {SITE.resumeUrl && (
                <a
                  href={SITE.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost justify-center"
                >
                  <DownloadIcon className="h-4 w-4" />
                  Download résumé
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
