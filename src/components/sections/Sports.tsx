import { SPORTS } from "@/content/sports";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SailGlyph } from "@/components/ui/Icons";

/* ==========================================================================
   SPORTS / ATHLETICS
   --------------------------------------------------------------------------
   Deliberately the only dark section on the site, so it reads as its own
   chapter rather than another content block. Everything inside uses the
   on-dark variants of the shared components (card-dark, tag-dark,
   onDark props), so the design system still holds.

   TO EDIT: src/content/sports.ts
     intro        heading and opening line
     stats        the big number strip
     disciplines  one entry per sport (feature: true gets the large layout)
     coaching     the coaching / training list
     gallery      the photo strip at the bottom

   TO REPLACE IMAGES: src/content/images.ts (sailingHero, sailingSecondary,
   sailingDetail, wrestling)
   ========================================================================== */

export function Sports() {
  const feature = SPORTS.disciplines.find((d) => d.feature);
  const others = SPORTS.disciplines.filter((d) => !d.feature);

  return (
    <section
      id="sailing"
      className="section-pad relative overflow-hidden bg-marine-deep"
      style={{
        backgroundImage:
          "linear-gradient(165deg, var(--color-marine-deep) 0%, var(--color-marine-mid) 55%, var(--color-marine-deep) 100%)",
      }}
    >
      <div className="grid-texture-light absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className="absolute -left-32 top-1/4 h-[32rem] w-[32rem] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-signal), transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="shell relative">
        <SectionHeading
          index="04"
          eyebrow={SPORTS.intro.eyebrow}
          title={SPORTS.intro.heading}
          lede={SPORTS.intro.lede}
          onDark
        />

        {/* ================= STAT STRIP ================= */}
        <Stagger className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-hairline-light bg-white/10 lg:grid-cols-4">
          {SPORTS.stats.map((stat) => (
            <StaggerItem key={stat.label} className="bg-marine-deep/60 p-6 backdrop-blur-sm">
              <p className="display text-[2.6rem] leading-none text-signal-soft">{stat.value}</p>
              <p className="mt-3 font-sans text-[0.82rem] font-medium leading-snug text-white">
                {stat.label}
              </p>
              {stat.note && (
                <p className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-white/45">
                  {stat.note}
                </p>
              )}
            </StaggerItem>
          ))}
        </Stagger>

        {/* ================= FEATURE DISCIPLINE ================= */}
        {feature && (
          <div className="mt-16 grid grid-cols-1 items-center gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-7">
              <div className="group relative">
                {/* ===== REPLACE IMAGE HERE =====
                    IMAGES.sailingHero in src/content/images.ts
                    File: /public/images/sports/sailing-hero.jpg
                    1800 x 1200 px (3:2) — your best action shot */}
                <ImageFrame
                  image={feature.image}
                  ratio="3 / 2"
                  onDark
                  zoomOnHover
                  className="rounded-xl border border-hairline-light"
                  sizes="(max-width: 1024px) 92vw, 55vw"
                />
                {/* Corner label over the photo */}
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-lg border border-white/15 bg-marine-deep/70 px-3 py-1.5 backdrop-blur-md">
                  <SailGlyph className="h-3.5 w-3.5 text-signal-soft" />
                  <span className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-white/85">
                    {feature.org}
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-5">
              <p className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-white/50">
                {feature.period}
              </p>
              <h3 className="display display-md mt-3 text-white">{feature.sport}</h3>
              <p className="mt-5 text-[1rem] leading-[1.72] text-white/70">
                {feature.description}
              </p>

              <ul className="mt-7 space-y-3 border-t border-hairline-light pt-6">
                {feature.results.map((result) => (
                  <li key={result} className="flex gap-3.5">
                    <span
                      className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rotate-45 bg-signal-soft"
                      aria-hidden="true"
                    />
                    <span className="text-[0.93rem] leading-[1.6] text-white/85">{result}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        )}

        {/* ================= OTHER DISCIPLINES ================= */}
        {others.length > 0 && (
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-12">
            {others.map((discipline, i) => (
              <Reveal key={discipline.sport} delay={i * 0.08} className="h-full">
                <article className="card-dark group flex h-full flex-col overflow-hidden md:flex-row">
                  {/* ===== REPLACE IMAGE HERE =====
                      This discipline's image — edit the matching entry in
                      src/content/images.ts (e.g. IMAGES.wrestling)
                      1000 x 1250 px (4:5) */}
                  <div className="md:w-2/5 md:shrink-0">
                    <ImageFrame
                      image={discipline.image}
                      ratio="4 / 5"
                      onDark
                      zoomOnHover
                      className="h-full"
                      sizes="(max-width: 768px) 92vw, 22vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-white/45">
                      {discipline.period}
                    </p>
                    <h3 className="display mt-2 text-[1.5rem] leading-tight text-white">
                      {discipline.sport}
                    </h3>
                    <p className="mt-1 font-sans text-[0.8rem] text-signal-soft">
                      {discipline.org}
                    </p>
                    <p className="mt-4 text-[0.9rem] leading-[1.65] text-white/65">
                      {discipline.description}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {discipline.results.map((result) => (
                        <li key={result} className="tag-dark">
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        )}

        {/* ================= COACHING ================= */}
        {SPORTS.coaching.length > 0 && (
          <div className="mt-16 lg:mt-20">
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="eyebrow text-white/45">Coaching & training</span>
                <span className="h-px flex-1 bg-white/15" aria-hidden="true" />
              </div>
            </Reveal>

            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
              {SPORTS.coaching.map((role, i) => (
                <Reveal key={role.role} delay={i * 0.08}>
                  <div className="border-t border-hairline-light pt-5">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="font-sans text-[1rem] font-medium text-white">{role.role}</h4>
                      <span className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-white/40">
                        {role.period}
                      </span>
                    </div>
                    <p className="mt-1 font-sans text-[0.82rem] text-signal-soft">{role.org}</p>
                    <p className="mt-3 text-[0.9rem] leading-[1.65] text-white/60">
                      {role.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {/* ================= PHOTO STRIP ================= */}
        {SPORTS.gallery.length > 0 && (
          <div className="mt-16 grid grid-cols-2 items-start gap-4 lg:mt-20 lg:gap-6">
            {SPORTS.gallery.map((image, i) => (
              /* Odd-indexed images are nudged down for a deliberate stagger. */
              <Reveal key={i} delay={i * 0.08} className={i % 2 === 1 ? "lg:mt-14" : ""}>
                {/* ===== REPLACE IMAGE HERE =====
                    Sports gallery — edit SPORTS.gallery in
                    src/content/sports.ts and the entries in
                    src/content/images.ts */}
                <ImageFrame
                  image={image}
                  ratio={i === 0 ? "4 / 5" : "1 / 1"}
                  onDark
                  zoomOnHover
                  className="rounded-xl border border-hairline-light"
                  sizes="(max-width: 768px) 46vw, 40vw"
                />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
