/* ==========================================================================
   SITE IDENTITY & COPY  —  EDIT YOUR NAME, TAGLINE, INTRO AND LINKS HERE
   --------------------------------------------------------------------------
   This file holds the text that appears in the header, hero, about section,
   contact section and footer, plus your contact details and social links.
   ========================================================================== */

export const SITE = {
  /* ---- Identity ---------------------------------------------------------- */
  name: "Alessandro Gregori",
  /** Shown in the fixed header. A monogram keeps the nav compact. */
  monogram: "AG",
  /** One-line role descriptor, used in the header and page metadata. */
  role: "Electrical Engineering · Stanford University",
  location: "Stanford, California",

  /* ---- Browser tab + search results ------------------------------------- */
  meta: {
    title: "Alessandro Gregori — Electrical Engineering at Stanford",
    description:
      "Electrical engineering student at Stanford building optical and biomedical instrumentation, satellite avionics hardware — and racing ILCA dinghies internationally.",
    /** Set this once you know your live domain, e.g. "https://alessandrogregori.com" */
    url: "https://alessandrogregori.com",
    keywords: [
      "Alessandro Gregori",
      "Stanford",
      "Electrical Engineering",
      "Optical Instrumentation",
      "Biomedical Devices",
      "PCB Design",
      "Avionics",
      "Sailing",
    ],
  },

  /* ---- Hero -------------------------------------------------------------- */
  hero: {
    /**
     * Small mono label on the top meta row. Kept short so the stats below sit
     * on the SAME line rather than wrapping underneath it. If you lengthen
     * this, expect the stats to wrap to a second row on narrower screens.
     */
    eyebrow: "Stanford University",
    /**
     * Headline. Splits across lines exactly where you break the array.
     * Any word wrapped in {} renders in the serif italic accent style.
     */
    headline: ["Using engineering", "to unify {optics}", "and medicine"],
    intro:
      "I am a sophomore studying electrical engineering at Stanford, with an interest in the places where light, electronics and the human body meet.",
    /**
     * Stats shown inline on the top meta row, to the right of the eyebrow.
     * Keep values short — they render in the serif beside a small label.
     * Two or three items fit comfortably before the row wraps.
     */
    marquee: [
      { value: "4.105", label: "GPA" },
      { value: "2029", label: "Expected B.S.E. Electrical Engineering" },
    ],
  },

  /* ---- About ------------------------------------------------------------- */
  about: {
    eyebrow: "About",
    heading: "An academic first, and a racer the rest of the time.",
    /** Each string becomes its own paragraph. */
    paragraphs: [
      "I grew up in Miami and started sailing at eight years old, which turned out to be the best engineering education I could have asked for. Racing a single-handed dinghy is a continuous exercise in reading a system you don't fully control, including wind, current, fleet, and your own body, then adjusting faster than the boat next to you.",
      "That instinct followed me into the lab. At the Bascom Palmer Eye Institute I work on optical instrumentation for intraocular lenses: designing fixtures in CAD, building a bench around a model eye, and characterising how extended-depth-of-focus and multifocal lenses behave when they aren't perfectly centred. Before that, I analysed OCT retinal scans for a clinical perfusion study that became a peer-reviewed publication.",
      "At Stanford I'm on the Avionics subteam of the Stanford Space Initiative, designing and soldering PCBs for a student-built satellite. Different domain, same appeal: hardware that has to work the first time, in an environment that won't forgive a sloppy assumption.",
      "The teaching thread matters to me too. I co-founded a nonprofit that taught Python and C++ fundamentals to underprivileged kids, and I've coached everything from sailing to strength training. Explaining something clearly is the fastest way to find out whether you actually understand it.",
    ],
  },

  /* ---- Contact ----------------------------------------------------------- */
  contact: {
    eyebrow: "Contact",
    heading: "Let's build something.",
    blurb:
      "I'm always glad to hear about research, internships, and hardware projects — or to talk sailing. The fastest way to reach me is email.",
    email: "agregori@stanford.edu",
    /** Set to "" to hide your phone number from the site entirely. */
    phone: "",
  },

  /* ---- Résumé download ---------------------------------------------------
     Export your résumé as a PDF, name it resume.pdf, and drop it into
     /public. Then this button works with no code changes.
     Set to "" to hide the résumé buttons.
     ---------------------------------------------------------------------- */
  resumeUrl: "/resume.pdf",

  /* ---- Social links -----------------------------------------------------
     Fill in the  href  for each profile you want to show.
     ANY LINK WITH AN EMPTY href IS AUTOMATICALLY HIDDEN — so nothing here
     will ever render as a dead link. Add or remove entries freely.
     ---------------------------------------------------------------------- */
  socials: [
    { label: "LinkedIn", href: "", handle: "" },
    { label: "GitHub", href: "", handle: "" },
    { label: "Instagram", href: "", handle: "" },
  ],

  /* ---- Navigation -------------------------------------------------------
     The  id  must match the  id  on the matching <section> in page.tsx.
     Reorder or remove items and the header updates automatically.
     ---------------------------------------------------------------------- */
  nav: [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "sailing", label: "Sailing" },
    { id: "credentials", label: "Skills" },
    { id: "contact", label: "Contact" },
  ],
};
