/* ==========================================================================
   WORK EXPERIENCE  —  EDIT YOUR ROLES HERE
   --------------------------------------------------------------------------
   TO ADD A ROLE: copy any block between the { } braces, paste it into the
   array, and edit the fields. Keep the list in reverse-chronological order
   (newest first) — the timeline renders in exactly the order you write.

   Fields:
     org       Organization name
     role      Your job title
     period    Date range as you want it displayed
     location  City / campus
     current   true adds a live "Current" dot next to the dates
     summary   One or two sentences. This is the line people actually read.
     bullets   Specific contributions. Two to four is the sweet spot.
     tags      Tools, methods and domains. Rendered as small mono pills.
     logo      Pulled from src/content/images.ts (or set to null for none)
   ========================================================================== */

import { IMAGES, type ImageAsset } from "./images";

export type ExperienceItem = {
  org: string;
  role: string;
  period: string;
  location: string;
  current?: boolean;
  summary: string;
  bullets: string[];
  tags: string[];
  logo: ImageAsset | null;
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    org: "Bascom Palmer Eye Institute",
    role: "Research Intern",
    period: "Jun 2026 — Present",
    location: "Miami, FL",
    current: true,
    summary:
      "Designing and building an optical test device that measures how extended-depth-of-focus and multifocal intraocular lenses perform when they sit off-centre in the eye.",
    bullets: [
      "Built the instrument as one half of a two-person team, taking it from CAD concept through to a working bench assembled around a model eye.",
      "Characterised halo and aberration behaviour across a range of lens decentrations — the failure mode patients actually notice after surgery.",
      "Translated the optical design requirements of the study into physical fixtures, mounts and a repeatable measurement procedure.",
    ],
    tags: ["Optical Design", "Fusion 360", "Instrumentation", "Model Eye", "IOL Testing"],
    logo: IMAGES.logoBascomPalmer,
  },
  {
    org: "Stanford Space Initiative",
    role: "Avionics Team Member",
    period: "Sep 2025 — Present",
    location: "Stanford, CA",
    current: true,
    summary:
      "Designing and hand-soldering printed circuit boards for a student-built satellite as part of the Avionics subteam.",
    bullets: [
      "Contribute to schematic capture and board layout for flight avionics hardware.",
      "Assemble and solder boards to spec, then support bring-up and functional testing.",
    ],
    tags: ["PCB Design", "Soldering", "Embedded Hardware", "Avionics"],
    logo: IMAGES.logoSSI,
  },
  {
    org: "Bascom Palmer Eye Institute",
    role: "Research Assistant",
    period: "Apr 2024 — Sep 2024",
    location: "Miami, FL",
    current: false,
    summary:
      "Analysed OCT retinal scans for a clinical study on retinal perfusion that went on to become a peer-reviewed publication.",
    bullets: [
      "Processed and interpreted optical coherence tomography imagery across the study cohort.",
      "Contributed analysis to work that reached peer-reviewed publication.",
    ],
    tags: ["OCT Imaging", "Image Analysis", "Clinical Research"],
    logo: IMAGES.logoBascomPalmer,
  },
];
