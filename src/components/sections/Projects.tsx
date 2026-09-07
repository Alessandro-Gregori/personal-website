import { PROJECTS } from "@/content/projects";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "./ProjectCard";

/* ==========================================================================
   PROJECTS
   --------------------------------------------------------------------------
   Every project renders as the same compact card in one three-up grid, so no
   project is visually ranked above another. Adding a project is purely a
   content change: add an entry to src/content/projects.ts.

   Numbering and order both follow the PROJECTS array — to move a project up
   the page, move it up the array.
   ========================================================================== */

export function Projects() {
  /** Display number, matching the project's position in the array. */
  const numberFor = (i: number) => String(i + 1).padStart(2, "0");

  return (
    <section id="projects" className="section-pad relative border-t border-hairline">
      <div className="shell">
        <SectionHeading
          index="03"
          eyebrow="Selected work"
          title="Things I've designed, built, and taken apart again."
          lede="Hardware, imaging analysis, teaching and this website. Open a case study for the longer version of any of them."
        />

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 3) * 0.07} className="h-full">
              <ProjectCard project={project} index={numberFor(i)} variant="compact" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
