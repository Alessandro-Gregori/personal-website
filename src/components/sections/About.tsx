import { SITE } from "@/content/site";
import { IMAGES } from "@/content/images";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/* ==========================================================================
   ABOUT
   --------------------------------------------------------------------------
   Two columns: a single image on the left, prose on the right. The image
   sticks as you scroll past the text.

   TO EDIT THE COPY: src/content/site.ts -> SITE.about
     heading      the big serif line
     paragraphs   each string in the array becomes a paragraph

   TO REPLACE THE IMAGE: src/content/images.ts -> IMAGES.aboutPrimary
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
          {/* ================= LEFT: image ================= */}
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
