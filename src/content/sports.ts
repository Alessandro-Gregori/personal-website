/* ==========================================================================
   SPORTS & ATHLETICS  —  EDIT YOUR SPORTS CONTENT HERE
   --------------------------------------------------------------------------
   This section renders on a dark marine background so it reads as its own
   chapter of the site.

   THREE PARTS YOU CAN EDIT:
     SPORTS.intro       Heading and opening paragraph
     SPORTS.stats       The big number strip. Three or four items works best.
     SPORTS.disciplines One card per sport. Copy a block to add another.

   TO ADD A RESULT: add a string to the  results  array of a discipline.
   TO ADD A STAT: add an object to  stats. Keep  value  short — it renders
   very large, so "3×" reads better than "3 championships".
   ========================================================================== */

import { IMAGES, type ImageAsset } from "./images";

export type SportStat = {
  /** Renders large. Keep it to a few characters. */
  value: string;
  label: string;
  /** Optional smaller line of context beneath the label. */
  note?: string;
};

export type Discipline = {
  sport: string;
  /** Team, club or governing body. */
  org: string;
  period: string;
  /** Two or three sentences in your own voice. */
  description: string;
  /** Concrete results and honours. */
  results: string[];
  image: ImageAsset;
  /** true gives this discipline the large feature layout. Use it once. */
  feature?: boolean;
};

export const SPORTS = {
  intro: {
    eyebrow: "Athletics",
    heading: "Twelve years of reading wind.",
    lede: "I've been racing sailboats since I was eight. Competitive sailing has shaped how I think about engineering more than any class I've taken — it's a constant negotiation with a system you can measure but never quite control.",
  },

  /* ---- The big number strip --------------------------------------------- */
  stats: [
    { value: "3×", label: "ILCA 4 Youth Worlds", note: "Three consecutive years" },
    { value: "ODP", label: "US Sailing Olympic Development Program", note: "Invited athlete" },
    { value: "12", label: "Years racing", note: "Since 2014" },
    { value: "2", label: "Varsity wrestling letters", note: "Coral Gables Senior High" },
  ] satisfies SportStat[],

  /* ---- One card per sport ----------------------------------------------- */
  disciplines: [
    {
      sport: "Competitive Sailing",
      org: "ILCA 4 · US Sailing",
      period: "2014 — Present",
      description:
        "Single-handed dinghy racing, which means every decision on the water is yours alone. I've competed at three consecutive ILCA 4 Youth World Championships and was invited into the US Sailing Olympic Development Program. Racing internationally taught me to make fast decisions on incomplete information and then live with them.",
      results: [
        "Three consecutive ILCA 4 Youth World Championships",
        "Invited to the US Sailing Olympic Development Program",
        "Racing continuously since 2014",
      ],
      image: IMAGES.sailingHero,
      feature: true,
    },
    {
      sport: "Varsity Wrestling",
      org: "Coral Gables Senior High School",
      period: "2021 — 2023",
      description:
        "Two seasons on varsity, competing through to district championships. Wrestling is the most honest sport I've done — the scoreboard has no interest in your excuses.",
      results: ["Two-year varsity letterman", "Competed at district championships"],
      image: IMAGES.wrestling,
    },
  ] satisfies Discipline[],

  /* ---- Coaching and training ---------------------------------------------
     Sports-adjacent work. Set this array to [] to hide the block.
     ---------------------------------------------------------------------- */
  coaching: [
    {
      role: "Sailing Coach",
      org: "Coconut Grove Sailing Club",
      period: "2022 — 2023",
      description:
        "Taught sailing fundamentals to kids aged 6 to 13 and managed boat upkeep for the program.",
    },
    {
      role: "Physical Trainer",
      org: "Independent",
      period: "2022 — 2025",
      description:
        "Designed and led strength and conditioning programs for a dozen student-athletes, with nutrition education built in.",
    },
  ],

  /* ---- Photo strip beneath the disciplines ------------------------------- */
  gallery: [IMAGES.sailingSecondary, IMAGES.sailingDetail],
};
