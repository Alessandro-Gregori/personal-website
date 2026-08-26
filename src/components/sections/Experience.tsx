import { EXPERIENCE } from "@/content/experience";
import { Logo } from "@/components/ui/Logo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/* ==========================================================================
   EXPERIENCE
   --------------------------------------------------------------------------
   A vertical timeline. Each role gets: dates and logo on the left, the
   substance on the right, connected by a hairline rail with a node marker.
   Current roles get a pulsing marker.

   TO EDIT ROLES: src/content/experience.ts — nothing here needs changing.
   ========================================================================== */

export function Experience() {
  return (
    <section
      id="experience"
      className="section-pad relative border-t border-hairline bg-paper-alt"
    >
      <div className="shell">
        <SectionHeading index="02" eyebrow="Experience" title="Where I've done the work." />

        {/*
          The timeline geometry lives in two matched values:
            - the date column is 11rem wide  (lg:grid-cols-[11rem_...])
            - the column gap is 3rem         (lg:gap-x-12)
          which puts the rail at 11rem + half the gap = 12.5rem.
          If you change one, change the other.
        */}
        <ol className="relative">
          {/* The rail. Hidden on mobile, where entries stack instead. */}
          <span
            className="absolute left-[12.5rem] top-2 hidden h-[calc(100%-1rem)] w-px bg-hairline lg:block"
            aria-hidden="true"
          />

          {EXPERIENCE.map((item, i) => (
            <Reveal as="li" key={`${item.org}-${item.period}`} delay={i * 0.05}>
              <article className="group relative grid grid-cols-1 gap-6 border-b border-hairline py-10 first:pt-0 last:border-b-0 lg:grid-cols-[11rem_minmax(0,1fr)] lg:gap-x-12 lg:gap-y-0">
                {/* ---------------- LEFT: dates + logo ---------------- */}
                <div>
                  <div className="flex items-center gap-2.5">
                    {item.current && (
                      <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-70" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
                      </span>
                    )}
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-ink">
                      {item.period}
                    </p>
                  </div>
                  <p className="mt-1.5 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-ink-mute">
                    {item.location}
                  </p>

                  {/* ===== REPLACE IMAGE HERE =====
                      Organization logo — edit the matching entry in
                      src/content/images.ts (e.g. IMAGES.logoBascomPalmer).
                      Transparent PNG, trimmed close to the artwork. Any
                      shape works; the height is fixed and width follows. */}
                  {item.logo && <Logo image={item.logo} className="mt-5 h-7" />}
                </div>

                {/* ---------------- Node marker on the rail ---------------- */}
                <span
                  className="absolute left-[12.5rem] top-[0.4rem] hidden h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-paper-alt bg-hairline-strong transition-colors duration-500 group-hover:bg-marine lg:block"
                  aria-hidden="true"
                />

                {/* ---------------- RIGHT: content ---------------- */}
                <div>
                  <h3 className="display display-md text-ink">{item.role}</h3>
                  <p className="mt-2 font-sans text-[0.95rem] font-medium text-marine">
                    {item.org}
                  </p>

                  <p className="mt-4 max-w-2xl text-[1rem] leading-[1.7] text-ink-soft">
                    {item.summary}
                  </p>

                  <ul className="mt-5 max-w-2xl space-y-2.5">
                    {item.bullets.map((bullet, bi) => (
                      <li key={bi} className="flex gap-3">
                        <span
                          className="mt-[0.62rem] h-px w-3.5 shrink-0 bg-hairline-strong"
                          aria-hidden="true"
                        />
                        <span className="text-[0.93rem] leading-[1.65] text-ink-soft">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <li key={tag} className="tag">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
