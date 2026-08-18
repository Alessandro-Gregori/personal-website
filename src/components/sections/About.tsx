import { SITE } from "@/content/site";
import { IMAGES } from "@/content/images";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/* ==========================================================================
   ABOUT
   --------------------------------------------------------------------------
   Two-column: images on the left, prose and a small fact list on the right.

   TO EDIT THE COPY: src/content/site.ts -> SITE.about
     heading      the big serif line
     paragraphs   each string in the array becomes a paragraph
     facts        the label/value list at the bottom

   TO REPLACE THE IMAGES: src/content/images.ts
     IMAGES.aboutPrimary  (3:4 — you at work)
     IMAGES.aboutDetail   (1:1 — a detail shot)
   ========================================================================== */

export function About() {
  return (
    <section id="about" className="section-pad relative border-t border-hairline">
      <div className="shell">
        <SectionHeading
          index="01"
          eyebrow={SITE.about.eyebrow}
          title={SITE.about.heading}
          maxWidth="max-w-2xl"
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* ================= LEFT: images ================= */}
          <div className="lg:col-span-5">
            <div className="sticky top-28">
              <Reveal>
                {/* ===== REPLACE IMAGE HERE =====
                    IMAGES.aboutPrimary in src/content/images.ts
                    File: /public/images/about-lab.jpg · 1050 x 1400 px (3:4) */}
                <ImageFrame
                  image={IMAGES.aboutPrimary}
                  ratio="3 / 4"
                  className="rounded-xl border border-hairline"
                  sizes="(max-width: 1024px) 90vw, 35vw"
                />
              </Reveal>

              <div className="mt-4 flex items-stretch gap-4">
                <Reveal delay={0.1} className="w-[45%]">
                  {/* ===== REPLACE IMAGE HERE =====
                      IMAGES.aboutDetail in src/content/images.ts
                      File: /public/images/about-detail.jpg · 800 x 800 px (1:1) */}
                  <ImageFrame
                    image={IMAGES.aboutDetail}
                    ratio="1 / 1"
                    className="h-full rounded-xl border border-hairline"
                    sizes="(max-width: 1024px) 45vw, 16vw"
                  />
                </Reveal>

                {/* Pull-quote block beside the detail image */}
                <Reveal delay={0.18} className="flex-1">
                  <div className="flex h-full flex-col justify-between rounded-xl border border-hairline bg-paper-alt p-5">
                    <span className="display text-4xl leading-none text-marine">“</span>
                    <p className="font-sans text-[0.82rem] leading-relaxed text-ink-soft">
                      An instrument is only as trustworthy as its least repeatable joint.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>

          {/* ================= RIGHT: prose ================= */}
          <div className="lg:col-span-7">
            <div className="max-w-2xl">
              {SITE.about.paragraphs.map((paragraph, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <p
                    className={`text-[1.02rem] leading-[1.78] text-ink-soft ${
                      i === 0 ? "" : "mt-6"
                    }`}
                  >
                    {/* First paragraph gets a slightly larger, darker treatment
                        so the eye has somewhere to land. */}
                    {i === 0 ? (
                      <span className="text-[1.12rem] leading-[1.7] text-ink">{paragraph}</span>
                    ) : (
                      paragraph
                    )}
                  </p>
                </Reveal>
              ))}

              {/* ---- Fact list ---- */}
              <Reveal delay={0.1}>
                <dl className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-hairline bg-hairline sm:grid-cols-2">
                  {SITE.about.facts.map((fact) => (
                    <div key={fact.label} className="bg-paper p-5">
                      <dt className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-ink-mute">
                        {fact.label}
                      </dt>
                      <dd className="mt-2 font-sans text-[0.94rem] font-medium text-ink">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
