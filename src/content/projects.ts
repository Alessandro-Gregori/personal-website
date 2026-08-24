/* ==========================================================================
   PROJECTS  —  EDIT AND ADD YOUR PROJECTS HERE
   --------------------------------------------------------------------------
   THIS IS THE FILE YOU'LL EDIT MOST OFTEN.

   TO ADD A PROJECT
   1. Add an image entry in src/content/images.ts for the cover (and any
      gallery shots).
   2. Copy one of the blocks below, paste it into the PROJECTS array, and
      edit the fields.
   3. Put it wherever you want it to appear — the grid renders in array order.

   FEATURED vs STANDARD
     featured: true   -> large, full-width card with cover image + case study
     featured: false  -> compact card in the grid below the featured ones
   Two or three featured projects looks best. More than that and nothing
   stands out.

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
  /** Short punchy outcomes, shown as a small list on featured cards. */
  highlights: string[];
  cover: ImageAsset;
  gallery?: ImageAsset[];
  links?: ProjectLink[];
  caseStudy?: CaseStudySection[];
  featured: boolean;
};

export const PROJECTS: Project[] = [
  /* ---------------------------------------------------------------------- */
  {
    slug: "iol-optical-test-bench",
    title: "Intraocular Lens Test Bench",
    category: "Optical Instrumentation",
    blurb:
      "A purpose-built optical bench that measures how premium intraocular lenses degrade when they sit slightly off-centre in the eye — the misalignment surgeons can't fully avoid.",
    role: "Co-designer & builder (2-person team)",
    timeframe: "2026 — Present",
    context: "Bascom Palmer Eye Institute",
    tech: [
      "Fusion 360",
      "Optical Bench Design",
      "Model Eye",
      "Aberrometry",
      "Image Capture",
    ],
    highlights: [
      "Characterises EDOF and multifocal IOL performance across a range of decentrations",
      "Quantifies halo and aberration behaviour, not just on-axis sharpness",
      "CAD-designed fixturing built for repeatable, comparable measurements",
    ],
    cover: IMAGES.projIolCover,
    gallery: [IMAGES.projIolDetail1, IMAGES.projIolDetail2],
    links: [
      // Add a link once there's something public to point at.
      { label: "Publication", href: "" },
    ],
    caseStudy: [
      {
        heading: "The problem",
        body: "Extended-depth-of-focus and multifocal intraocular lenses are designed to give cataract patients usable vision at more than one distance. Manufacturer data almost always describes a perfectly centred lens. Real surgery doesn't work that way — the lens ends up marginally decentred inside the capsular bag, and that offset is a plausible source of the halos and glare some patients report afterwards. What was missing was a way to measure the effect directly and repeatably.",
      },
      {
        heading: "What we built",
        body: "Working as a two-person team, we designed an optical test bench around a model eye and translated the study's optical requirements into physical hardware. I designed the fixturing in Fusion 360 so lens position could be adjusted in controlled, known increments while everything else in the optical path stayed fixed — the whole point being that a change in the captured image has exactly one explanation.",
      },
      {
        heading: "What it measures",
        body: "The bench captures how the point spread and halo structure of a lens change as decentration increases, alongside broader aberration characterisation. Because the setup is repeatable, different lens designs can be compared against one another under identical conditions rather than against separate manufacturer datasheets.",
      },
      {
        heading: "What I took from it",
        body: "Most of the difficulty in this project wasn't optical theory — it was mechanical discipline. An instrument is only as trustworthy as its least repeatable joint, and I spent far more time than I expected making sure the thing that moved was the only thing moving.",
      },
    ],
    featured: true,
  },

  /* ---------------------------------------------------------------------- */
  {
    slug: "satellite-avionics",
    title: "Student Satellite Avionics",
    category: "Embedded Hardware",
    blurb:
      "Designing and hand-soldering the printed circuit boards that will run a student-built satellite, on the Avionics subteam of the Stanford Space Initiative.",
    role: "Avionics Team Member",
    timeframe: "2025 — Present",
    context: "Stanford Space Initiative",
    tech: ["PCB Design", "Schematic Capture", "Hand Soldering", "Bring-up & Test"],
    highlights: [
      "Contribute to schematic and layout work for flight avionics",
      "Assemble boards by hand and support functional bring-up",
      "Hardware built to work the first time, in an unforgiving environment",
    ],
    cover: IMAGES.projAvionicsCover,
    gallery: [IMAGES.projAvionicsDetail1],
    links: [{ label: "Stanford Space Initiative", href: "" }],
    caseStudy: [
      {
        heading: "The team",
        body: "The Stanford Space Initiative builds real flight hardware with student teams. I joined the Avionics subteam, which is responsible for the electronics that keep the spacecraft alive and talking — power, control and the boards everything else depends on.",
      },
      {
        heading: "My contribution",
        body: "I work on schematic capture and board layout, then assemble and solder boards to spec and help with bring-up and functional testing. Soldering your own designs is an unusually direct feedback loop: a layout decision that looked reasonable on screen becomes very obviously wrong the moment you try to rework a pad next to it.",
      },
      {
        heading: "Why it matters to me",
        body: "Avionics has the same quality as optical instrumentation — there's no forgiving margin. You either respected the constraints or you didn't, and the hardware tells you which. That's the kind of engineering I want to keep doing.",
      },
    ],
    featured: true,
  },

  /* ---------------------------------------------------------------------- */
  {
    slug: "oct-retinal-perfusion",
    title: "OCT Retinal Perfusion Analysis",
    category: "Biomedical Imaging",
    blurb:
      "Analysis of optical coherence tomography retinal scans supporting a clinical study on retinal perfusion, which reached peer-reviewed publication.",
    role: "Research Assistant",
    timeframe: "2024",
    context: "Bascom Palmer Eye Institute",
    tech: ["OCT Imaging", "Image Analysis", "Clinical Data"],
    highlights: [
      "Processed retinal scans across the study cohort",
      "Contributed to a peer-reviewed publication",
    ],
    cover: IMAGES.projOctCover,
    links: [{ label: "Publication", href: "" }],
    caseStudy: [
      {
        heading: "Context",
        body: "Optical coherence tomography gives clinicians a cross-sectional view of the retina without touching the eye. This study used it to examine retinal perfusion — how well blood is actually reaching retinal tissue.",
      },
      {
        heading: "My role",
        body: "I analysed OCT scans in support of the study, working through the imaging data that underpinned its conclusions. The work contributed to a paper that was subsequently peer-reviewed and published.",
      },
    ],
    featured: false,
  },

  /* ---------------------------------------------------------------------- */
  {
    slug: "young-coders-initiative",
    title: "Young Coder's Initiative",
    category: "Nonprofit · Education",
    blurb:
      "A nonprofit I co-founded to teach Python and C++ fundamentals to underprivileged children who wouldn't otherwise get access to programming instruction.",
    role: "Co-Founder & Secretary",
    timeframe: "2023 — 2025",
    context: "Miami, FL",
    tech: ["Python", "C++", "Curriculum Design", "Teaching"],
    highlights: [
      "Co-founded and helped run the organisation end to end",
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
        body: "As co-founder and secretary I helped build the organisation and taught the fundamentals directly. Teaching a language to someone who has never programmed forces you to strip an idea down to what's actually load-bearing — easily the fastest way I've found to test my own understanding.",
      },
    ],
    featured: false,
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
    tech: ["Python", "Tkinter", "Object-Oriented Design"],
    highlights: [
      "Custom deck class draws cards with weighted probabilities and decrements the remaining count, so the odds shift as a real shoe would",
      "Scoring tracks every possible hand total at once, which is how aces get to be worth 1 or 11 without special-casing them later",
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
        body: "Rather than build a list of fifty-two cards and shuffle it, the deck keeps a weight per card type and draws using those weights, decrementing the weight each time a card comes out. The effect is the same as dealing from a shoe without replacement, and it means the drawing logic is a single call rather than an index into a shuffled array.",
      },
      {
        heading: "Aces, without the special cases",
        body: "Instead of storing one score and patching it when an ace shows up, a hand carries an array of every total it could have. Drawing an ace duplicates that array, once counting the ace as 1 and once as 11. Everything downstream then becomes a filter: drop the totals over 21, and if none survive the hand is bust; otherwise the highest remaining total is the hand. Bust detection and best-score selection fall out of the same representation.",
      },
      {
        heading: "Two front ends at once",
        body: "The game is played in the terminal, but a Tkinter window mirrors it, drawing both hands, the scores, the balance and the current bet. The usual approach would be to hand control to Tk's mainloop, which would block the console prompts. Instead the view exposes a refresh that pumps Tk's event queue once, so the window redraws between inputs and both interfaces stay in sync.",
      },
      {
        heading: "What I'd add next",
        body: "The betting loop tracks a bankroll and runs until it's empty, and the dealer draws until it beats the player or busts. Splitting, doubling down, insurance and a proper dealer stand-on-17 rule aren't in there yet — and the dealer rule is the interesting one, because playing to the player's total rather than a fixed threshold is a meaningfully different game.",
      },
    ],
    featured: false,
  },

  /* ---------------------------------------------------------------------- */
  {
    slug: "personal-website",
    title: "This Website",
    category: "Web Design & Development",
    blurb:
      "Designed and built from scratch as a place to show engineering work properly — with a content system that makes adding a new project a five-minute job.",
    role: "Designer & Developer",
    timeframe: "2026",
    context: "",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    highlights: [
      "Custom design system: typography, colour and layout defined once, reused everywhere",
      "All content lives in typed data files, separate from the components",
      "Fully responsive, accessible, and fast",
    ],
    cover: IMAGES.projPortfolioCover,
    links: [
      { label: "Source", href: "" },
    ],
    caseStudy: [
      {
        heading: "The brief I gave myself",
        body: "I wanted something that didn't read like a template — a site with an actual visual point of view, where the work is the thing you notice. Editorial serif headlines against a technical mono for labels, a warm paper background instead of the default flat white, and a deliberately different treatment for the sailing section so it reads as its own chapter.",
      },
      {
        heading: "How it's built",
        body: "Next.js and TypeScript, styled with Tailwind, with scroll-triggered motion handled by Framer Motion. Every piece of content — experience, projects, sailing, skills, image paths — lives in a typed data file under one folder. The components never contain copy, which means updating the site is editing data, not hunting through markup.",
      },
    ],
    featured: false,
  },
];

/* Convenience selectors used by the Projects section. */
export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);
export const STANDARD_PROJECTS = PROJECTS.filter((p) => !p.featured);
