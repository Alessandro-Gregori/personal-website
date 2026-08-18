"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "@/content/projects";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { ArrowUpRight, PlusIcon } from "@/components/ui/Icons";

/* ==========================================================================
   PROJECT CARD  —  THE REUSABLE PROJECT COMPONENT
   --------------------------------------------------------------------------
   One component renders every project, in two layouts:

     variant="featured"  Large alternating layout — big cover image on one
                         side, detail on the other. Used for your strongest
                         two or three projects.
     variant="compact"   Grid card. Used for everything else.

   Which layout a project gets is decided by  featured: true / false  in
   src/content/projects.ts. You should never need to edit this file to add
   a project — only to change how projects look.

   Both layouts support an inline expandable case study, which only renders
   if the project has a  caseStudy  array.
   ========================================================================== */

type ProjectCardProps = {
  project: Project;
  /** Display number, e.g. "01". */
  index: string;
  variant: "featured" | "compact";
  /** Flips the featured layout so images alternate down the page. */
  flipped?: boolean;
};

export function ProjectCard({ project, index, variant, flipped = false }: ProjectCardProps) {
  const [open, setOpen] = useState(false);
  const hasCaseStudy = Boolean(project.caseStudy?.length);
  const visibleLinks = (project.links ?? []).filter((link) => link.href.trim().length > 0);

  /* ======================================================================
     FEATURED LAYOUT
     ====================================================================== */
  if (variant === "featured") {
    return (
      <article
        id={project.slug}
        className="group scroll-mt-28 border-t border-hairline pt-10 md:pt-14"
      >
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-14">
          {/* ---- Cover image ---- */}
          <div className={`lg:col-span-7 ${flipped ? "lg:order-2" : "lg:order-1"}`}>
            {/* ===== ADD YOUR PROJECT IMAGE HERE =====
                Edit the project's  cover  entry in src/content/images.ts
                Recommended: 1600 x 1000 px (16:10) */}
            <ImageFrame
              image={project.cover}
              ratio="16 / 10"
              zoomOnHover
              className="rounded-xl border border-hairline"
              sizes="(max-width: 1024px) 92vw, 55vw"
            />
          </div>

          {/* ---- Detail column ---- */}
          <div className={`lg:col-span-5 ${flipped ? "lg:order-1" : "lg:order-2"}`}>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[0.68rem] text-signal">{index}</span>
              <span className="eyebrow text-ink-mute">{project.category}</span>
            </div>

            <h3 className="display display-md mt-4 text-ink">{project.title}</h3>

            <p className="mt-4 text-[1rem] leading-[1.7] text-ink-soft">{project.blurb}</p>

            {/* Role / timeframe / org */}
            <dl className="mt-6 space-y-2.5 border-t border-hairline pt-5">
              <MetaRow label="Role" value={project.role} />
              <MetaRow label="When" value={project.timeframe} />
              {project.context && <MetaRow label="Where" value={project.context} />}
            </dl>

            {/* Highlights */}
            {project.highlights.length > 0 && (
              <ul className="mt-6 space-y-2">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-3">
                    <span
                      className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-marine"
                      aria-hidden="true"
                    />
                    <span className="text-[0.9rem] leading-[1.6] text-ink-soft">{highlight}</span>
                  </li>
                ))}
              </ul>
            )}

            <TechList tech={project.tech} className="mt-6" />

            <Actions
              hasCaseStudy={hasCaseStudy}
              open={open}
              onToggle={() => setOpen((v) => !v)}
              links={visibleLinks}
              slug={project.slug}
            />
          </div>
        </div>

        <CaseStudy project={project} open={open} />
      </article>
    );
  }

  /* ======================================================================
     COMPACT LAYOUT
     ====================================================================== */
  return (
    <article
      id={project.slug}
      className="card card-hover group flex h-full scroll-mt-28 flex-col overflow-hidden"
    >
      {/* ===== ADD YOUR PROJECT IMAGE HERE =====
          Edit the project's  cover  entry in src/content/images.ts
          Recommended: 1600 x 1000 px (16:10) */}
      <ImageFrame
        image={project.cover}
        ratio="16 / 10"
        zoomOnHover
        className="border-b border-hairline"
        sizes="(max-width: 768px) 92vw, (max-width: 1200px) 45vw, 32vw"
      />

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[0.66rem] text-signal">{index}</span>
          <span className="eyebrow text-ink-mute">{project.category}</span>
        </div>

        <h3 className="display mt-3 text-[1.6rem] leading-tight text-ink">{project.title}</h3>

        <p className="mt-3 text-[0.92rem] leading-[1.65] text-ink-soft">{project.blurb}</p>

        <p className="mt-4 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-ink-mute">
          {project.role}
          {project.context && ` · ${project.context}`}
          {` · ${project.timeframe}`}
        </p>

        <TechList tech={project.tech} className="mt-5" />

        <div className="mt-auto pt-6">
          <Actions
            hasCaseStudy={hasCaseStudy}
            open={open}
            onToggle={() => setOpen((v) => !v)}
            links={visibleLinks}
            slug={project.slug}
            compact
          />
        </div>

        <CaseStudy project={project} open={open} compact />
      </div>
    </article>
  );
}

/* ==========================================================================
   SUB-COMPONENTS
   ========================================================================== */

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-4">
      <dt className="w-16 shrink-0 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-ink-mute">
        {label}
      </dt>
      <dd className="font-sans text-[0.88rem] text-ink">{value}</dd>
    </div>
  );
}

function TechList({ tech, className = "" }: { tech: string[]; className?: string }) {
  if (tech.length === 0) return null;
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {tech.map((item) => (
        <li key={item} className="tag">
          {item}
        </li>
      ))}
    </ul>
  );
}

function Actions({
  hasCaseStudy,
  open,
  onToggle,
  links,
  slug,
  compact = false,
}: {
  hasCaseStudy: boolean;
  open: boolean;
  onToggle: () => void;
  links: { label: string; href: string }[];
  slug: string;
  compact?: boolean;
}) {
  if (!hasCaseStudy && links.length === 0) return null;

  return (
    <div
      className={`flex flex-wrap items-center gap-x-6 gap-y-3 ${
        compact ? "border-t border-hairline pt-5" : "mt-8"
      }`}
    >
      {hasCaseStudy && (
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={`case-${slug}`}
          className="group/btn inline-flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-ink transition-colors duration-300 hover:text-marine"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full border border-hairline-strong transition-colors duration-300 group-hover/btn:border-marine">
            <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.35 }}>
              <PlusIcon className="h-3 w-3" />
            </motion.span>
          </span>
          {open ? "Close" : "Case study"}
        </button>
      )}

      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="link-underline inline-flex items-center gap-1.5 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-ink-soft transition-colors duration-300 hover:text-marine"
        >
          {link.label}
          <ArrowUpRight className="h-3 w-3" />
        </a>
      ))}
    </div>
  );
}

/* --------------------------------------------------------------------------
   Expandable case study. Renders the long-form sections plus any gallery
   images attached to the project.
   -------------------------------------------------------------------------- */
function CaseStudy({
  project,
  open,
  compact = false,
}: {
  project: Project;
  open: boolean;
  compact?: boolean;
}) {
  if (!project.caseStudy?.length) return null;

  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          id={`case-${project.slug}`}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <div
            className={`border-t border-hairline ${
              compact ? "mt-5 pt-5" : "mt-12 pt-10"
            }`}
          >
            <div
              className={
                compact
                  ? "space-y-5"
                  : "grid grid-cols-1 gap-x-14 gap-y-8 md:grid-cols-2"
              }
            >
              {project.caseStudy.map((section) => (
                <div key={section.heading}>
                  <h4 className="font-mono text-[0.64rem] uppercase tracking-[0.16em] text-signal">
                    {section.heading}
                  </h4>
                  <p className="mt-3 text-[0.93rem] leading-[1.72] text-ink-soft">
                    {section.body}
                  </p>
                </div>
              ))}
            </div>

            {/* ===== ADD YOUR PROJECT IMAGE HERE =====
                Gallery shots — edit the project's  gallery  array in
                src/content/projects.ts and the image entries in
                src/content/images.ts. Recommended 1600 x 1000 px (16:10). */}
            {project.gallery && project.gallery.length > 0 && (
              <div
                className={`mt-8 grid gap-4 ${
                  project.gallery.length > 1 ? "sm:grid-cols-2" : "sm:grid-cols-1"
                }`}
              >
                {project.gallery.map((image, i) => (
                  <ImageFrame
                    key={i}
                    image={image}
                    ratio="16 / 10"
                    className="rounded-lg border border-hairline"
                    sizes="(max-width: 768px) 92vw, 45vw"
                  />
                ))}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
