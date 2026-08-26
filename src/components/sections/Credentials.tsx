import { EDUCATION, HONORS, LEADERSHIP, SKILL_GROUPS } from "@/content/credentials";
import { Logo } from "@/components/ui/Logo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/* ==========================================================================
   SKILLS · EDUCATION · HONORS · LEADERSHIP
   --------------------------------------------------------------------------
   Four related blocks in one section, so the résumé detail lives together
   instead of spread across the page.

   TO EDIT: src/content/credentials.ts
     SKILL_GROUPS   the skill columns
     EDUCATION      schools
     HONORS         awards and test scores
     LEADERSHIP     volunteer and leadership roles

   Setting any of those arrays to [] hides its block automatically.
   ========================================================================== */

/* Label/value row used for the secondary degree and minor. Matches the
   mono-label pattern used elsewhere on the site. */
function DegreeRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-3">
      <dt className="w-[4.75rem] shrink-0 pt-[0.2rem] font-mono text-[0.6rem] uppercase tracking-[0.14em] text-ink-mute">
        {label}
      </dt>
      <dd className="font-sans text-[0.9rem] text-ink-soft">{value}</dd>
    </div>
  );
}

export function Credentials() {
  return (
    <section
      id="credentials"
      className="section-pad relative border-t border-hairline bg-paper-alt"
    >
      <div className="shell">
        <SectionHeading
          index="05"
          eyebrow="Skills & Education"
          title="The toolkit, and where it came from."
        />

        {/* ================= SKILLS ================= */}
        {SKILL_GROUPS.length > 0 && (
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
            {SKILL_GROUPS.map((group, i) => (
              <Reveal key={group.title} delay={i * 0.06} className="h-full">
                <div className="flex h-full flex-col bg-paper p-6">
                  <h3 className="font-sans text-[0.95rem] font-semibold text-ink">{group.title}</h3>
                  {group.caption && (
                    <p className="mt-1.5 font-sans text-[0.78rem] leading-snug text-ink-mute">
                      {group.caption}
                    </p>
                  )}
                  <ul className="mt-5 space-y-2.5">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-2.5">
                        <span
                          className="mt-[0.5rem] h-1 w-1 shrink-0 rounded-full bg-marine"
                          aria-hidden="true"
                        />
                        <span className="text-[0.88rem] leading-[1.5] text-ink-soft">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        {/* ================= EDUCATION + HONORS ================= */}
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* ---- Education ---- */}
          {EDUCATION.length > 0 && (
            <div className="lg:col-span-7">
              <Reveal>
                <div className="flex items-center gap-4">
                  <span className="eyebrow text-ink-mute">Education</span>
                  <span className="h-px flex-1 bg-hairline" aria-hidden="true" />
                </div>
              </Reveal>

              <div className="mt-8 space-y-8">
                {EDUCATION.map((item, i) => (
                  <Reveal key={item.school} delay={i * 0.06}>
                    <div>
                      {/* ===== REPLACE IMAGE HERE =====
                          School logo — IMAGES.logoStanford in
                          src/content/images.ts. Transparent PNG, trimmed. */}
                      {item.logo && <Logo image={item.logo} className="mb-4 h-8" />}
                      <div>
                        <h3 className="display text-[1.75rem] leading-tight text-ink">
                          {item.school}
                        </h3>
                        <p className="mt-1.5 font-sans text-[0.95rem] font-medium text-marine">
                          {item.degree}
                        </p>

                        {/* Secondary degree and minor. Each row only renders
                            if that field is filled in (credentials.ts). */}
                        {(item.secondaryDegree || item.minor) && (
                          <dl className="mt-3 space-y-1.5">
                            {item.secondaryDegree && (
                              <DegreeRow label="Secondary" value={item.secondaryDegree} />
                            )}
                            {item.minor && <DegreeRow label="Minor" value={item.minor} />}
                          </dl>
                        )}

                        <p className="mt-3 font-mono text-[0.64rem] uppercase tracking-[0.12em] text-ink-mute">
                          {item.period} · {item.location}
                        </p>
                        {item.details.length > 0 && (
                          <ul className="mt-4 flex flex-wrap gap-2">
                            {item.details.map((detail) => (
                              <li key={detail} className="tag">
                                {detail}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          )}

          {/* ---- Honors ---- */}
          {HONORS.length > 0 && (
            <div className="lg:col-span-5">
              <Reveal>
                <div className="flex items-center gap-4">
                  <span className="eyebrow text-ink-mute">Honors</span>
                  <span className="h-px flex-1 bg-hairline" aria-hidden="true" />
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <ul className="mt-8 space-y-4">
                  {HONORS.map((honor) => (
                    <li key={honor} className="flex gap-3.5 border-b border-hairline pb-4">
                      <span
                        className="mt-[0.5rem] h-1.5 w-1.5 shrink-0 rotate-45 bg-signal"
                        aria-hidden="true"
                      />
                      <span className="text-[0.92rem] leading-[1.55] text-ink-soft">{honor}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          )}
        </div>

        {/* ================= LEADERSHIP ================= */}
        {LEADERSHIP.length > 0 && (
          <div className="mt-20">
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="eyebrow text-ink-mute">Leadership & community</span>
                <span className="h-px flex-1 bg-hairline" aria-hidden="true" />
              </div>
            </Reveal>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
              {LEADERSHIP.map((item, i) => (
                <Reveal key={`${item.org}-${item.role}`} delay={i * 0.06} className="h-full">
                  <div className="card card-hover flex h-full flex-col p-6">
                    <p className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-ink-mute">
                      {item.period}
                    </p>
                    <h3 className="mt-3 font-sans text-[1rem] font-semibold leading-snug text-ink">
                      {item.role}
                    </h3>
                    <p className="mt-1 font-sans text-[0.85rem] text-marine">{item.org}</p>
                    <p className="mt-4 text-[0.88rem] leading-[1.6] text-ink-soft">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
