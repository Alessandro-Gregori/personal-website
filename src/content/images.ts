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
  /**
   * Optional small line printed beneath the image. Use it for figure credits
   * or any context the picture needs. Omit it and no caption renders.
   */
  caption?: string;
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
    src: "/images/profile.jpg",
    alt: "Portrait of Alessandro Gregori",
    hint: "Primary portrait",
    size: "1200 × 1500 px · 4:5",
  } satisfies ImageAsset,

  /* ======================================================================
     ABOUT
     ====================================================================== */

  // File:  /public/images/sports/rigging.jpeg
  // Ratio: framed 3:4 portrait. The frame uses object-cover, so whatever the
  //        source aspect is, it crops to fit — adjust  focus  on the
  //        ImageFrame in components/sections/About.tsx if the crop is off.
  aboutPrimary: {
    src: "/images/sports/rigging.jpeg",
    alt: "Rigging a dinghy before racing",
    hint: "About — rigging",
    size: "1050 × 1400 px · 3:4",
  } satisfies ImageAsset,

  /* ======================================================================
     EXPERIENCE — organization logos
     Transparent PNG or SVG works best. Square canvas, logo centred with a
     little breathing room. These render small, so keep them simple.
     ====================================================================== */

  // File: /public/images/logos/bascom-palmer.png
  // Wide lockup (600 x 183, transparent). Rendered at a fixed height with
  // automatic width, so its shape is preserved — see components/ui/Logo.tsx.
  logoBascomPalmer: {
    src: "/images/logos/bascom-palmer.png",
    alt: "Bascom Palmer Eye Institute logo",
    hint: "Logo",
    size: "transparent PNG, any aspect",
  } satisfies ImageAsset,

  // File:   /public/images/logos/stanford-space-initiative.png
  // Source: ssi.stanford.edu — square PNG with transparency.
  logoSSI: {
    src: "/images/logos/stanford-space-initiative.png",
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

  // File: /public/images/projects/iol-bench-cover.jpg · 16:10 landscape
  // Use:  Photo of the IOL holder / optical bench hardware.
  projIolCover: {
    src: "/images/projects/iol-bench-cover.jpg",
    alt: "Intraocular lens holder built for the optical test bench",
    hint: "Project cover — optical bench",
    size: "1600 × 1000 px · 16:10",
  } satisfies ImageAsset,

  // File: /public/images/projects/iol-bench-01.jpg · 16:10 landscape
  // Use:  Fusion 360 CAD view of the fixture.
  projIolDetail1: {
    src: "/images/projects/iol-bench-01.jpg",
    alt: "Fusion 360 CAD model of the intraocular lens test fixture",
    hint: "Detail — CAD assembly",
    size: "1600 × 1000 px · 16:10",
  } satisfies ImageAsset,

  // ===== ADD YOUR PROJECT IMAGE HERE =====
  // Currently unused, so the case study shows only real photographs. To show
  // it, add IMAGES.projIolDetail2 back to the iol-optical-test-bench
  // gallery in src/content/projects.ts.
  // File: /public/images/projects/iol-bench-02.jpg · 1600 x 1000 px
  // Use:  Captured image data — halo / point-spread photographs.
  projIolDetail2: {
    src: "",
    alt: "Captured halo and aberration imagery from the test bench",
    hint: "Detail — captured optical data",
    size: "1600 × 1000 px · 16:10",
  } satisfies ImageAsset,

  // File: /public/images/projects/avionics-cover.jpg · 1200 x 750 (16:10)
  // Converted from HEIC and cropped around the board.
  projAvionicsCover: {
    src: "/images/projects/avionics-cover.jpg",
    alt: "Avionics printed circuit board for a student built satellite on a workbench",
    hint: "Project cover — avionics PCB",
    size: "1600 × 1000 px · 16:10",
  } satisfies ImageAsset,

  // ===== ADD YOUR PROJECT IMAGE HERE =====
  // Currently unused — the avionics project shows its cover only. To show it,
  // add a  gallery: [IMAGES.projAvionicsDetail1]  line back to the
  // satellite-avionics project in src/content/projects.ts.
  // File: /public/images/projects/avionics-01.jpg · 1600 x 1000 px
  // Use:  Schematic or board layout screenshot from your EDA tool.
  projAvionicsDetail1: {
    src: "",
    alt: "PCB layout for the satellite avionics board",
    hint: "Detail — board layout",
    size: "1600 × 1000 px · 16:10",
  } satisfies ImageAsset,

  // File:  /public/images/projects/OCT.jpg · 550 x 434 (about 5:4)
  // Ratio: the project sets coverRatio to match, so none of the four panels
  //        gets cropped — see the oct-retinal-perfusion entry in projects.ts.
  // Note:  This is a published journal figure (panel labels A to D) from a
  //        DIFFERENT study to the one described in the project — it shows the
  //        kind of imaging analysed, not data from that work. The caption says
  //        so and carries the citation; keep both if you swap the wording.
  projOctCover: {
    src: "/images/projects/OCT.jpg",
    alt: "Four panel OCT angiography figure: fundus images with the retinal vessels traced in panels A and C, and en face angiography slabs of the capillary networks in panels B and D, each with the foveal avascular zone outlined in red",
    hint: "Project cover — OCT analysis",
    size: "550 × 434 px · about 5:4",
    caption:
      "Illustrative retinal imaging, not data from this study. Panels A and C trace the retinal vessels; B and D show the capillary networks, with the foveal avascular zone outlined. Source: Assessment of Blood Flow Velocity in Retinal Vasculitis Using the Retinal Function Imager—A Pilot Study.",
  } satisfies ImageAsset,

  // File: /public/images/projects/young-coders-cover.jpg · 16:10 landscape
  // Use:  Teaching photo, or a slide from the curriculum you wrote.
  projYoungCodersCover: {
    src: "/images/projects/young-coders-cover.jpg",
    alt: "Young Coder's Initiative programming workshop",
    hint: "Project cover — teaching",
    size: "1600 × 1000 px · 16:10",
  } satisfies ImageAsset,

  // File:  /public/images/projects/blackjack-cover.png
  // Ratio: 16:10 landscape. PNG is the right format for a UI screenshot —
  //        it keeps text and lines crisp, where JPEG would smear them.
  projBlackjackCover: {
    src: "/images/projects/blackjack-cover.png",
    alt: "Tkinter blackjack table showing the dealer and player hands mid round",
    hint: "Project cover — blackjack",
    size: "1600 × 1000 px · 16:10",
  } satisfies ImageAsset,

  // File: /public/images/projects/portfolio-cover.jpg · 16:10 landscape
  // Use:  A screenshot of this website. Retake it whenever the design
  //       changes noticeably, so the card doesn't show an old version.
  projPortfolioCover: {
    src: "/images/projects/portfolio-cover.jpg",
    alt: "The hero section of this portfolio website",
    hint: "Project cover — this website",
    size: "1600 × 1000 px · 16:10",
  } satisfies ImageAsset,

  /* ======================================================================
     SPORTS
     These sit on a dark background, so images with bright skies, water and
     sails look especially good. Action shots over posed shots.
     ====================================================================== */

  // File: /public/images/sports/personal_sailing.jpg · 1170 x 634 (1.85 wide)
  // The Sports feature frame is set to 16:9 to match this closely.
  sailingHero: {
    src: "/images/sports/personal_sailing.jpg",
    alt: "Alessandro Gregori racing an ILCA dinghy",
    hint: "Feature sailing action shot",
    size: "wide landscape · 16:9",
  } satisfies ImageAsset,

  // File: /public/images/sports/group_sailing.jpg · 1600 x 1262 (1.27)
  // Shown as the single photo beneath the disciplines, framed 4:3.
  sailingSecondary: {
    src: "/images/sports/group_sailing.jpg",
    alt: "Fleet racing at an ILCA regatta",
    hint: "Regatta / fleet",
    size: "landscape · 4:3",
  } satisfies ImageAsset,

  // ===== REPLACE IMAGE HERE =====
  // Currently unused. To show it, add IMAGES.sailingDetail back to
  // SPORTS.gallery in src/content/sports.ts.
  // Use: detail or candid — rigging, boat park, on the water at sunrise.
  sailingDetail: {
    src: "",
    alt: "Rigging before a race",
    hint: "Detail / candid",
    size: "1000 × 1000 px · 1:1",
  } satisfies ImageAsset,

  // File: /public/images/sports/wrestling.jpg · 1169 x 1166 (square)
  // The discipline card frame is set to 1:1 to match.
  wrestling: {
    src: "/images/sports/wrestling.jpg",
    alt: "Varsity wrestling match at Coral Gables Senior High",
    hint: "Wrestling",
    size: "square · 1:1",
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
