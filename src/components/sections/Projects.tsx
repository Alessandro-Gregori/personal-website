import { FEATURED_PROJECTS, PROJECTS, STANDARD_PROJECTS } from "@/content/projects";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "./ProjectCard";

/* ==========================================================================
   PROJECTS
   --------------------------------------------------------------------------
   The visual centre of the site. Two tiers:

     1. Featured projects  — large alternating layout, one per row.
     2. Everything else    — three-up grid of compact cards.

   Both use the same <ProjectCard /> component, so adding a project is purely
   a content change: add an entry to src/content/projects.ts and set
   featured: true or false.

   Numbering is automatic — projects are numbered in the order they appear in
   the PROJECTS array.
   ========================================================================== */

export function Projects() {
  /** Stable display number based on position in the full project list. */
  const numberFor = (slug: string) =>
    String(PROJECTS.findIndex((p) => p.slug === slug) + 1).padStart(2, "0");

  return (
    <section id="projects" className="section-pad relative border-t border-hairline">
      <div className="shell">
        <SectionHeading
          index="03"
          eyebrow="Selected work"
          title="Things I've designed, built, and taken apart again."
          lede="Hardware, imaging analysis, teaching and this website. Open a case study for the longer version of any of them."
        />

        {/* ================= FEATURED ================= */}
        <div className="space-y-16 md:space-y-24">
          {FEATURED_PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={numberFor(project.slug)}
              variant="featured"
              flipped={i % 2 === 1}
            />
          ))}
        </div>

        {/* ================= GRID ================= */}
        {STANDARD_PROJECTS.length > 0 && (
          <>
            <Reveal>
              <div className="mt-20 flex items-center gap-4 md:mt-28">
                <span className="eyebrow text-ink-mute">Also</span>
                <span className="h-px flex-1 bg-hairline" aria-hidden="true" />
              </div>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {STANDARD_PROJECTS.map((project, i) => (
                <Reveal key={project.slug} delay={i * 0.07} className="h-full">
                  <ProjectCard
                    project={project}
                    index={numberFor(project.slug)}
                    variant="compact"
                  />
                </Reveal>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
