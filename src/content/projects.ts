/* ==========================================================================
   PROJECTS  —  EDIT AND ADD YOUR PROJECTS HERE
   --------------------------------------------------------------------------
   THIS IS THE FILE YOU'LL EDIT MOST OFTEN.

   TO ADD A PROJECT
   1. Add an image entry in src/content/images.ts for the cover (and any
      gallery shots).
   2. Copy one of the blocks below, paste it into the PROJECTS array, and
      edit the fields.
   3. Put it wherever you want it to appear — the grid renders in array order,
      and the display number follows that order too.

   Every project renders as the same card, so ordering is the only ranking.
   Put the work you most want seen at the top of the array.

   OPTIONAL FIELDS
     caseStudy  Longer write-up. Omit it and the "Read case study" control
                simply doesn't render.
     gallery    Extra images shown inside the expanded case study.
     links      Any link with an empty href is hidden automatically, so you
                can leave placeholders in place without creating dead links.
   ========================================================================== */

import { IMAGES, type ImageAsset } from "./images";

export type ProjectLink = {
  label: string;
  href: string;
};

export type CaseStudySection = {
  heading: string;
  body: string;
};

export type Project = {
  /** Unique, URL-safe id. Used for anchors and React keys. */
  slug: string;
  title: string;
  /** Two to four words, e.g. "Optical Instrumentation". */
  category: string;
  /** Displayed under the title. One sentence, plain language. */
  blurb: string;
  role: string;
  timeframe: string;
  /** Where the work happened. Set to "" for personal projects. */
  context: string;
  /** Tools and technologies. Rendered as mono pills. */
  tech: string[];
  /** Short punchy outcomes. Currently not rendered on the compact card. */
  highlights: string[];
  cover: ImageAsset;
  /**
   * Optional override for the cover's aspect ratio, e.g. "2.36 / 1".
   * Defaults to "16 / 10". Set this when a cover image is a very different
   * shape and cropping it to 16:10 would cut something important — a wide
   * published figure, for instance.
   */
  coverRatio?: string;
  gallery?: ImageAsset[];
  links?: ProjectLink[];
  caseStudy?: CaseStudySection[];
};

export const PROJECTS: Project[] = [
  /* ---------------------------------------------------------------------- */
  {
    slug: "iol-optical-test-bench",
    title: "Intraocular Lens Test Bench",
    category: "Optical Instrumentation",
    blurb:
      "An optical bench built to measure how premium intraocular lenses degrade when they sit slightly off centre in the eye — the misalignment surgeons can't fully avoid.",
    role: "Designer & builder (team of two)",
    timeframe: "Jun — Sep 2026",
    context: "Bascom Palmer Eye Institute",
    tech: ["Fusion 360", "Optical Bench Design"],
    highlights: [
      "Characterises EDOF and multifocal IOL performance across a range of decentrations",
      "Quantifies halo and aberration behaviour, not just sharpness on axis",
      "Fixturing designed in CAD for repeatable, comparable measurements",
    ],
    cover: IMAGES.projIolCover,
    gallery: [IMAGES.projIolDetail1],
    links: [
      // Add a link once there's something public to point at.
      { label: "Publication", href: "" },
    ],
    caseStudy: [
      {
        heading: "The problem",
        body: "Extended depth of focus and multifocal intraocular lenses are designed to give cataract patients usable vision at more than one distance. Manufacturer data almost always describes a perfectly centred lens. Real surgery doesn't work that way — the lens ends up marginally decentred inside the capsular bag, and that offset is a plausible source of the halos and glare some patients report afterwards. What was missing was a way to measure the effect directly and repeatably.",
      },
      {
        heading: "What we built",
        body: "Working as a team of two, we designed an optical test bench around a model eye and translated the study's optical requirements into physical hardware. I designed the fixturing in Fusion 360 so lens position could be adjusted in controlled, known increments while everything else in the optical path stayed fixed — the whole point being that a change in the captured image has exactly one explanation.",
      },
      {
        heading: "What it measures",
        body: "The bench captures how the point spread and halo structure of a lens change as decentration increases, alongside broader aberration characterisation. Because the setup is repeatable, different lens designs can be compared against one another under identical conditions rather than against separate manufacturer datasheets.",
      },
      {
        heading: "What I took from it",
        body: "This is where I learned CAD properly, using Fusion 360 to turn a requirement into a 3D design I could actually hold. The bigger lesson came after that: a printed part is never quite the model. Tolerances drift, layers leave surfaces that aren't square, holes come out undersized, and a fixture that looked exact on screen ends up with play in it. Working out where those imperfections came from and designing around them — adding clearance, choosing orientations, iterating on the print — taught me more than the modelling itself.",
      },
    ],
  },

  /* ---------------------------------------------------------------------- */
  {
    slug: "satellite-avionics",
    title: "Student Satellite Avionics",
    category: "Embedded Hardware",
    blurb:
      "Designing and hand soldering the printed circuit boards that will run a student built satellite, on the Avionics subteam of the Stanford Space Initiative.",
    role: "Avionics Team Member",
    timeframe: "2025 — Present",
    context: "Stanford Space Initiative",
    tech: ["PCB Design", "Hand Soldering"],
    highlights: [
      "Contribute to schematic and layout work for flight avionics",
      "Assemble boards by hand and support functional testing",
      "Hardware built to work the first time, in an unforgiving environment",
    ],
    cover: IMAGES.projAvionicsCover,
    links: [{ label: "Stanford Space Initiative", href: "" }],
    caseStudy: [
      {
        heading: "The team",
        body: "The Stanford Space Initiative builds real flight hardware with student teams. I joined the Avionics subteam, which is responsible for the electronics that keep the spacecraft alive and talking — power, control and the boards everything else depends on.",
      },
      {
        heading: "My contribution",
        body: "I designed the PCBs, then assembled them by hand, soldering the pieces onto the boards myself.",
      },
    ],
  },

  /* ---------------------------------------------------------------------- */
  {
    slug: "oct-retinal-perfusion",
    title: "OCT Retinal Perfusion Analysis",
    category: "Biomedical Imaging",
    blurb:
      "Analysis of optical coherence tomography retinal scans for a clinical study on how intensive exercise changes blood flow through the retina, which reached peer reviewed publication.",
    role: "Research Assistant",
    timeframe: "2024",
    context: "Bascom Palmer Eye Institute",
    tech: ["OCT Imaging", "Image Analysis", "Clinical Data"],
    highlights: [
      "Processed retinal scans across the study cohort",
      "Contributed to a peer reviewed publication",
    ],
    cover: IMAGES.projOctCover,
    /* The figure is about 5:4, so the frame matches it rather than cropping
       the top and bottom panels away at the default 16:10. */
    coverRatio: "550 / 434",
    links: [{ label: "Publication", href: "" }],
    caseStudy: [
      {
        heading: "The question",
        body: "Optical coherence tomography gives clinicians a cross sectional view of the retina without ever touching the eye, and it is sensitive enough to resolve the capillary networks feeding retinal tissue. The study used that to ask whether exercise measurably improves eye health: if sustained training raises perfusion elsewhere in the body, does the same hold in the retinal microvasculature?",
      },
      {
        heading: "The study",
        body: "Participants were scanned before and after 24 weeks of intensive exercise, and the rate of blood flow through the capillaries of the retina was measured at both points. Holding the imaging protocol constant across the two timepoints is what makes the comparison mean anything — the change in perfusion has to be attributable to the training rather than to how the scan was taken.",
      },
      {
        heading: "My role",
        body: "I analysed the OCT scans that underpinned those measurements, working through the imaging data across the study cohort. The work contributed to a paper that was subsequently peer reviewed and published.",
      },
    ],
  },

  /* ---------------------------------------------------------------------- */
  {
    slug: "young-coders-initiative",
    title: "Young Coder's Initiative",
    category: "Nonprofit · Education",
    blurb:
      "A nonprofit I cofounded to teach Python and C++ fundamentals to underprivileged children who wouldn't otherwise get access to programming instruction.",
    role: "Cofounder & Secretary",
    timeframe: "2023 — 2025",
    context: "Miami, FL",
    tech: ["Python", "C++", "Teaching"],
    highlights: [
      "Cofounded and helped run the organisation end to end",
      "Taught programming fundamentals to students with no prior access",
    ],
    cover: IMAGES.projYoungCodersCover,
    links: [{ label: "Website", href: "" }],
    caseStudy: [
      {
        heading: "Why we started it",
        body: "Programming instruction is unevenly distributed in a way that has very little to do with who would be good at it. We started Young Coder's Initiative to put Python and C++ fundamentals in front of kids whose schools weren't offering them.",
      },
      {
        heading: "What I did",
        body: "As a cofounder and secretary I helped build the organisation and taught the fundamentals directly. Teaching a language to someone who has never programmed forces you to strip an idea down to what actually carries the weight — easily the fastest way I've found to test my own understanding.",
      },
    ],
  },

  /* ---------------------------------------------------------------------- */
  {
    slug: "blackjack-python",
    title: "Blackjack",
    category: "Software · Python",
    blurb:
      "A playable blackjack game written from scratch in Python, with a Tkinter table that renders the hands live alongside the terminal it's played from.",
    role: "Designer & developer",
    timeframe: "July 2026",
    context: "",
    tech: ["Python"],
    highlights: [
      "Custom deck class draws cards with weighted probabilities and decrements the remaining count, so the odds shift as a real shoe would",
      "Scoring tracks every possible hand total at once, which is how aces get to be worth 1 or 11 without any special cases later",
      "Tkinter view pumps the event queue manually instead of blocking on mainloop, so the window stays live while the terminal waits on input",
    ],
    cover: IMAGES.projBlackjackCover,
    links: [
      { label: "GitHub", href: "https://github.com/Alessandro-Gregori/Blackjack-Project" },
    ],
    caseStudy: [
      {
        heading: "The idea",
        body: "Blackjack is a deceptively good first systems problem. The rules are simple enough to hold in your head, but the moment you try to write them down you hit a genuine modelling question: a hand containing an ace doesn't have one score, it has several, and which one matters depends on what happens next.",
      },
      {
        heading: "How the cards work",
        body: "Rather than build a list of fifty two cards and shuffle it, the deck keeps a weight per card type and draws using those weights, decrementing the weight each time a card comes out. The effect is the same as dealing from a shoe without replacement, and it means the drawing logic is a single call rather than an index into a shuffled array.",
      },
      {
        heading: "Aces, without the special cases",
        body: "Instead of storing one score and patching it when an ace shows up, a hand carries an array of every total it could have. Drawing an ace duplicates that array, once counting the ace as 1 and once as 11. Everything downstream then becomes a filter: drop the totals over 21, and if none survive the hand is bust; otherwise the highest remaining total is the hand. Bust detection and choosing the best score fall out of the same representation.",
      },
      {
        heading: "Two front ends at once",
        body: "The game is played in the terminal, but a Tkinter window mirrors it, drawing both hands, the scores, the balance and the current bet. The usual approach would be to hand control to Tk's mainloop, which would block the console prompts. Instead the view exposes a refresh that pumps Tk's event queue once, so the window redraws between inputs and both interfaces stay in sync.",
      },
    ],
  },

  /* ---------------------------------------------------------------------- */
  {
    slug: "personal-website",
    title: "This Website",
    category: "Web Design & Development",
    blurb:
      "Designed and built from scratch as somewhere my work and experience could be read as one story rather than a list of entries.",
    role: "Designer & Developer",
    timeframe: "2026",
    context: "",
    tech: ["Next.js"],
    highlights: [
      "Custom design system: typography, colour and layout defined once, reused everywhere",
      "All content lives in typed data files, separate from the components",
      "Fully responsive, accessible, and fast",
    ],
    cover: IMAGES.projPortfolioCover,
    links: [
      { label: "Source", href: "https://github.com/Alessandro-Gregori/personal-website" },
    ],
    caseStudy: [
      {
        heading: "The brief I gave myself",
        body: "I didn't want this to be only a portfolio. A list of projects and job titles tells you what someone has done without telling you anything about them, and the things I care about — optics, hardware, teaching, racing a boat — only make sense next to each other. So the site is built to tell a whole story instead: where I grew up and how sailing taught me to read a system, how that turned into instrumentation and avionics work, and what I've tried to pass on by teaching. The projects are the evidence, not the point.",
      },
      {
        heading: "How it's built",
        body: "Next.js and TypeScript, styled with Tailwind, with motion on scroll handled by Framer Motion. Every piece of content — experience, projects, sailing, skills, image paths — lives in a typed data file under one folder. The components never contain copy, which means updating the site is editing data, not hunting through markup.",
      },
    ],
  },
];
