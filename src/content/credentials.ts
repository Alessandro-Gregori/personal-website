/* ==========================================================================
   SKILLS, EDUCATION, HONORS & LEADERSHIP  —  EDIT HERE
   --------------------------------------------------------------------------
   SKILL_GROUPS   Grouped skill lists. Add a group by copying a block.
   EDUCATION      Schools. Newest first.
   HONORS         Awards, scholarships and scores.
   LEADERSHIP     Volunteer and leadership roles outside your main experience.

   To hide any of these blocks entirely, set the array to [] — the section
   heading disappears along with it.
   ========================================================================== */

import { IMAGES, type ImageAsset } from "./images";

/* ==========================================================================
   SKILLS
   ========================================================================== */
export type SkillGroup = {
  title: string;
  /** Optional one-line description of the group. */
  caption?: string;
  items: string[];
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Design & Fabrication",
    caption: "Taking hardware from idea to something you can hold",
    items: ["CAD — Fusion 360", "PCB design", "Soldering & assembly", "Optical bench setup"],
  },
  {
    title: "Programming",
    caption: "Working proficiency, used for analysis and control",
    items: ["C++ — intermediate", "Python — intermediate", "MATLAB — intermediate"],
  },
  {
    title: "Domain Areas",
    caption: "Where I've done real work",
    items: [
      "Optical instrumentation",
      "Biomedical device testing",
      "Embedded & avionics hardware",
      "OCT image analysis",
    ],
  },
  {
    title: "Languages",
    items: ["English — native", "Italian — fluent", "Spanish — beginner", "Russian — beginner"],
  },
];

/* ==========================================================================
   EDUCATION
   ========================================================================== */
export type EducationItem = {
  school: string;
  degree: string;
  period: string;
  location: string;
  /** Small facts rendered as a list, e.g. GPA. */
  details: string[];
  logo: ImageAsset | null;
};

export const EDUCATION: EducationItem[] = [
  {
    school: "Stanford University",
    degree: "B.S.E., Electrical Engineering",
    period: "Expected 2029",
    location: "Stanford, CA",
    details: ["GPA 4.105"],
    logo: IMAGES.logoStanford,
  },
];

/* ==========================================================================
   HONORS & TEST SCORES
   Delete any line you'd rather not display — for example, you may want to
   drop test scores as you move further from admissions.
   ========================================================================== */
export const HONORS: string[] = [
  "National Merit Scholarship Finalist",
  "AP Scholar with Distinction — 2023 & 2024",
  "SAT 1590 — 790 Reading, 800 Math",
  "ACT 36 Composite — 36 English, 36 Math, 35 Reading, 36 Science",
];

/* ==========================================================================
   LEADERSHIP & COMMUNITY
   ========================================================================== */
export type LeadershipItem = {
  role: string;
  org: string;
  period: string;
  description: string;
};

export const LEADERSHIP: LeadershipItem[] = [
  {
    role: "Co-Founder & Secretary",
    org: "Young Coder's Initiative",
    period: "2023 — 2025",
    description:
      "Co-founded a nonprofit teaching Python and C++ fundamentals to underprivileged children.",
  },
  {
    role: "Music Instructor",
    org: "Melody in the Community",
    period: "2024 — 2025",
    description:
      "Organised instrument access and music instruction for young people at a local homeless shelter.",
  },
  {
    role: "Vice President & Attorney",
    org: "Mock Trial",
    period: "2023 — 2025",
    description:
      "Led practices and prepared case briefs. The team placed 3rd in district competition.",
  },
  {
    role: "Treasurer",
    org: "Mu Alpha Theta / National Honor Society",
    period: "2023 — 2025",
    description:
      "Co-founded a peer tutoring program in SAT math and calculus, and managed club finances.",
  },
];
