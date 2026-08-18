/* ==========================================================================
   IMAGE REGISTRY  —  EVERY IMAGE ON THE SITE IS LISTED HERE
   --------------------------------------------------------------------------
   HOW THIS WORKS
   1. Drop your image file into  /public/images/
   2. Find the matching entry below.
   3. Set  src  to  "/images/your-file-name.jpg"
   4. Update  alt  to describe the photo (used by screen readers + SEO).

   Any entry whose  src  is an empty string ("") renders as a labelled
   placeholder box on the live site, showing the recommended dimensions.
   Nothing breaks while an image is missing — so you can fill these in
   one at a time, whenever you have the photo.

   Paths always start with "/images/" (NOT "/public/images/").
   ========================================================================== */

export type ImageAsset = {
  /** Path from /public, e.g. "/images/portrait.jpg". Empty string = placeholder. */
  src: string;
  /** Describe the image for screen readers. Always write this. */
  alt: string;
  /** Short label shown inside the placeholder box while src is empty. */
  hint: string;
  /** Recommended pixel size, shown inside the placeholder box. */
  size: string;
};

export const IMAGES = {
  /* ======================================================================
     HERO — the first thing anyone sees
     ====================================================================== */

  // ===== REPLACE IMAGE HERE =====
  // File:   /public/images/portrait.jpg
  // Ratio:  4:5 portrait (e.g. 1200 x 1500 px)
  // Use:    Your best head-and-shoulders portrait. Clean, uncluttered
  //         background. Natural light. Looking at or just past the camera.
  //         This is the single most important image on the site.
  portrait: {
    src: "",
    alt: "Portrait of Alessandro Gregori",
    hint: "Primary portrait",
    size: "1200 × 1500 px · 4:5",
  } satisfies ImageAsset,

  /* ======================================================================
     ABOUT
     ====================================================================== */

  // ===== REPLACE IMAGE HERE =====
  // File:   /public/images/about-lab.jpg
  // Ratio:  3:4 portrait (e.g. 1050 x 1400 px)
  // Use:    You in a working environment — at the optical bench, holding a
  //         PCB, at a workstation. Candid beats posed here.
  aboutPrimary: {
    src: "",
    alt: "Alessandro Gregori working at an optical test bench",
    hint: "You at work / in the lab",
    size: "1050 × 1400 px · 3:4",
  } satisfies ImageAsset,

  // ===== REPLACE IMAGE HERE =====
  // File:   /public/images/about-detail.jpg
  // Ratio:  1:1 square (e.g. 800 x 800 px)
  // Use:    A tight detail shot — solder joints, a lens mount, CAD on screen.
  //         Adds texture next to the larger photo.
  aboutDetail: {
    src: "",
    alt: "Close-up detail of hardware Alessandro has built",
    hint: "Detail / texture shot",
    size: "800 × 800 px · 1:1",
  } satisfies ImageAsset,

  /* ======================================================================
     EXPERIENCE — organization logos
     Transparent PNG or SVG works best. Square canvas, logo centred with a
     little breathing room. These render small, so keep them simple.
     ====================================================================== */

  // ===== REPLACE IMAGE HERE =====
  // File: /public/images/logos/bascom-palmer.png · 400 x 400 px · transparent
  logoBascomPalmer: {
    src: "",
    alt: "Bascom Palmer Eye Institute logo",
    hint: "Logo",
    size: "400 × 400 px",
  } satisfies ImageAsset,

  // ===== REPLACE IMAGE HERE =====
  // File: /public/images/logos/stanford-space-initiative.png · 400 x 400 px
  logoSSI: {
    src: "",
    alt: "Stanford Space Initiative logo",
    hint: "Logo",
    size: "400 × 400 px",
  } satisfies ImageAsset,

  // ===== REPLACE IMAGE HERE =====
  // File: /public/images/logos/stanford.png · 400 x 400 px · transparent
  logoStanford: {
    src: "",
    alt: "Stanford University logo",
    hint: "Logo",
    size: "400 × 400 px",
  } satisfies ImageAsset,

  /* ======================================================================
     PROJECTS
     Cover images are the big win here — a real photo or screenshot makes a
     project card look ten times more credible than a placeholder.
     ====================================================================== */

  // ===== ADD YOUR PROJECT IMAGE HERE =====
  // File:   /public/images/projects/iol-bench-cover.jpg
  // Ratio:  16:10 landscape (e.g. 1600 x 1000 px)
  // Use:    Photo of the optical test bench, or a render of the CAD assembly.
  projIolCover: {
    src: "",
    alt: "Optical test bench built to evaluate intraocular lens performance",
    hint: "Project cover — optical bench",
    size: "1600 × 1000 px · 16:10",
  } satisfies ImageAsset,

  // ===== ADD YOUR PROJECT IMAGE HERE =====
  // File: /public/images/projects/iol-bench-01.jpg · 1600 x 1000 px
  // Use:  CAD screenshot of the model-eye fixture.
  projIolDetail1: {
    src: "",
    alt: "CAD model of the model-eye test fixture",
    hint: "Detail — CAD assembly",
    size: "1600 × 1000 px · 16:10",
  } satisfies ImageAsset,

  // ===== ADD YOUR PROJECT IMAGE HERE =====
  // File: /public/images/projects/iol-bench-02.jpg · 1600 x 1000 px
  // Use:  Captured image data — halo / point-spread photographs.
  projIolDetail2: {
    src: "",
    alt: "Captured halo and aberration imagery from the test bench",
    hint: "Detail — captured optical data",
    size: "1600 × 1000 px · 16:10",
  } satisfies ImageAsset,

  // ===== ADD YOUR PROJECT IMAGE HERE =====
  // File:   /public/images/projects/avionics-cover.jpg
  // Ratio:  16:10 landscape (e.g. 1600 x 1000 px)
  // Use:    Close-up of a PCB you designed or soldered. Shoot on a dark
  //         surface with side lighting — boards photograph beautifully.
  projAvionicsCover: {
    src: "",
    alt: "Avionics printed circuit board for a student-built satellite",
    hint: "Project cover — avionics PCB",
    size: "1600 × 1000 px · 16:10",
  } satisfies ImageAsset,

  // ===== ADD YOUR PROJECT IMAGE HERE =====
  // File: /public/images/projects/avionics-01.jpg · 1600 x 1000 px
  // Use:  Schematic or board layout screenshot from your EDA tool.
  projAvionicsDetail1: {
    src: "",
    alt: "PCB layout for the satellite avionics board",
    hint: "Detail — board layout",
    size: "1600 × 1000 px · 16:10",
  } satisfies ImageAsset,

  // ===== ADD YOUR PROJECT IMAGE HERE =====
  // File:   /public/images/projects/oct-cover.jpg
  // Ratio:  16:10 landscape (e.g. 1600 x 1000 px)
  // Use:    An OCT scan visualisation or analysis plot. Make sure anything
  //         you publish is de-identified and cleared for public use.
  projOctCover: {
    src: "",
    alt: "Optical coherence tomography retinal scan analysis",
    hint: "Project cover — OCT analysis",
    size: "1600 × 1000 px · 16:10",
  } satisfies ImageAsset,

  // ===== ADD YOUR PROJECT IMAGE HERE =====
  // File:   /public/images/projects/young-coders-cover.jpg
  // Ratio:  16:10 landscape (e.g. 1600 x 1000 px)
  // Use:    Teaching photo, or a slide from the curriculum you wrote.
  projYoungCodersCover: {
    src: "",
    alt: "Young Coder's Initiative programming workshop",
    hint: "Project cover — teaching",
    size: "1600 × 1000 px · 16:10",
  } satisfies ImageAsset,

  // ===== ADD YOUR PROJECT IMAGE HERE =====
  // File:   /public/images/projects/portfolio-cover.jpg
  // Ratio:  16:10 landscape (e.g. 1600 x 1000 px)
  // Use:    A screenshot of this website once you're happy with it.
  //         Tip: full-page screenshot, then crop to 16:10.
  projPortfolioCover: {
    src: "",
    alt: "Screenshot of this portfolio website",
    hint: "Project cover — this website",
    size: "1600 × 1000 px · 16:10",
  } satisfies ImageAsset,

  /* ======================================================================
     SPORTS
     These sit on a dark background, so images with bright skies, water and
     sails look especially good. Action shots over posed shots.
     ====================================================================== */

  // ===== REPLACE IMAGE HERE =====
  // File:   /public/images/sports/sailing-hero.jpg
  // Ratio:  3:2 landscape (e.g. 1800 x 1200 px)
  // Use:    Your strongest sailing action photo — hiking out, planing,
  //         spray flying. This anchors the whole Sports section.
  sailingHero: {
    src: "",
    alt: "Alessandro Gregori racing an ILCA dinghy",
    hint: "Feature sailing action shot",
    size: "1800 × 1200 px · 3:2",
  } satisfies ImageAsset,

  // ===== REPLACE IMAGE HERE =====
  // File: /public/images/sports/sailing-01.jpg · 1000 x 1250 px · 4:5
  // Use:  Regatta / fleet racing, or a start-line shot.
  sailingSecondary: {
    src: "",
    alt: "Fleet racing at an ILCA regatta",
    hint: "Regatta / fleet",
    size: "1000 × 1250 px · 4:5",
  } satisfies ImageAsset,

  // ===== REPLACE IMAGE HERE =====
  // File: /public/images/sports/sailing-02.jpg · 1000 x 1000 px · 1:1
  // Use:  Detail or candid — rigging, boat park, on the water at sunrise.
  sailingDetail: {
    src: "",
    alt: "Rigging before a race",
    hint: "Detail / candid",
    size: "1000 × 1000 px · 1:1",
  } satisfies ImageAsset,

  // ===== REPLACE IMAGE HERE =====
  // File: /public/images/sports/wrestling-01.jpg · 1000 x 1250 px · 4:5
  // Use:  Wrestling match or team photo.
  wrestling: {
    src: "",
    alt: "Varsity wrestling match at Coral Gables Senior High",
    hint: "Wrestling",
    size: "1000 × 1250 px · 4:5",
  } satisfies ImageAsset,

  /* ======================================================================
     SOCIAL PREVIEW (Open Graph)
     Shown when someone shares your site on LinkedIn, iMessage, Slack, etc.
     ====================================================================== */

  // ===== REPLACE IMAGE HERE =====
  // File:  /public/images/og-image.jpg
  // Ratio: exactly 1200 x 630 px — this size is required by most platforms.
  // Use:   Your name + one line, or a strong photo. Keep text large; it
  //        renders small in a chat preview.
  ogImage: {
    src: "",
    alt: "Alessandro Gregori — Electrical Engineering at Stanford",
    hint: "Social share preview",
    size: "1200 × 630 px",
  } satisfies ImageAsset,
};
