# Alessandro Gregori — Personal Website

A personal portfolio site built with Next.js, TypeScript and Tailwind CSS.

Everything you'll want to change lives in **`src/content/`**. You should almost never
need to open a component file to update the site.

---

## Contents

1. [Running the site](#1-running-the-site)
2. [Project structure](#2-project-structure)
3. [Where to change what — quick reference](#3-where-to-change-what--quick-reference)
4. [Replacing images](#4-replacing-images)
5. [Adding a project](#5-adding-a-project)
6. [Editing work experience](#6-editing-work-experience)
7. [Editing the sports section](#7-editing-the-sports-section)
8. [Editing skills, education, honors and leadership](#8-editing-skills-education-honors-and-leadership)
9. [Changing colors and fonts](#9-changing-colors-and-fonts)
10. [Adding your résumé PDF](#10-adding-your-résumé-pdf)
11. [Deploying](#11-deploying)
12. [Troubleshooting](#12-troubleshooting)

---

## 1. Running the site

You need [Node.js](https://nodejs.org) 18 or newer. Check with `node -v`.

Install dependencies once:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open **http://localhost:3000**. The page reloads automatically every time you save a file.

Other commands:

```bash
npm run build
```

```bash
npm start
```

`build` creates the optimized production version and will fail loudly if anything is
broken — worth running before you deploy. `start` serves that production build locally.

---

## 2. Project structure

```
Personal Website/
├── public/                      Static files served as-is
│   ├── images/                  ← ALL YOUR IMAGES GO HERE
│   │   ├── logos/               Organization + school logos
│   │   ├── projects/            Project covers and screenshots
│   │   └── sports/              Sailing and wrestling photos
│   └── resume.pdf               ← DROP YOUR RÉSUMÉ PDF HERE
│
├── src/
│   ├── content/                 ★ EVERYTHING YOU EDIT IS IN HERE ★
│   │   ├── site.ts              Name, tagline, intro, about, contact, links, nav
│   │   ├── images.ts            Every image path on the site, in one place
│   │   ├── experience.ts        Work experience timeline
│   │   ├── projects.ts          Projects (the section you'll update most)
│   │   ├── sports.ts            Sailing, wrestling, coaching, stats
│   │   └── credentials.ts       Skills, education, honors, leadership
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx       Fixed nav + mobile menu
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx         Landing section
│   │   │   ├── About.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Projects.tsx     Lays out the project grid
│   │   │   ├── ProjectCard.tsx  ★ The reusable project component
│   │   │   ├── Sports.tsx
│   │   │   ├── Credentials.tsx  Skills / education / honors / leadership
│   │   │   └── Contact.tsx
│   │   └── ui/
│   │       ├── ImageFrame.tsx   Handles every image + placeholder state
│   │       ├── Reveal.tsx       Scroll animations
│   │       ├── SectionHeading.tsx
│   │       └── Icons.tsx        Inline SVG icons
│   │
│   └── app/
│       ├── layout.tsx           Fonts + page metadata (SEO, social preview)
│       ├── page.tsx             The order sections appear in
│       ├── globals.css          ★ ALL COLORS, FONTS AND SPACING TOKENS ★
│       └── icon.svg             Browser tab icon (favicon)
│
├── package.json
├── next.config.mjs
├── postcss.config.mjs
└── tsconfig.json
```

The two files worth remembering: **`src/content/`** for content, and
**`src/app/globals.css`** for the visual system.

---

## 3. Where to change what — quick reference

| I want to change… | Open this file |
| --- | --- |
| My name, tagline, headline, intro | `src/content/site.ts` → `SITE.hero` |
| The About paragraphs and fact list | `src/content/site.ts` → `SITE.about` |
| Email, phone, location | `src/content/site.ts` → `SITE.contact` |
| LinkedIn / GitHub / Instagram links | `src/content/site.ts` → `SITE.socials` |
| Navigation links and their order | `src/content/site.ts` → `SITE.nav` |
| Browser tab title, SEO description | `src/content/site.ts` → `SITE.meta` |
| Any image on the site | `src/content/images.ts` |
| Work experience | `src/content/experience.ts` |
| Projects | `src/content/projects.ts` |
| Sailing / wrestling / coaching | `src/content/sports.ts` |
| Skills, education, honors, leadership | `src/content/credentials.ts` |
| Colors | `src/app/globals.css` → the `@theme` block |
| Fonts | `src/app/layout.tsx` (imports) |
| Section order | `src/app/page.tsx` |
| Favicon | `src/app/icon.svg` |

---

## 4. Replacing images

Every image on the site is registered in **one file**: `src/content/images.ts`.
Each entry looks like this:

```ts
portrait: {
  src: "",                                    // ← put your path here
  alt: "Portrait of Alessandro Gregori",      // ← describe the image
  hint: "Primary portrait",
  size: "1200 × 1500 px · 4:5",
},
```

**Three steps to add an image:**

1. Save the file into the right folder under `public/images/`.
2. Find its entry in `src/content/images.ts`.
3. Set `src` to the path **starting from `/images/`** — not `/public/images/`.

```ts
src: "/images/portrait.jpg",
```

While `src` is an empty string, the site renders a labelled placeholder box showing what
belongs there and the recommended size. Nothing breaks, so you can fill these in one at a
time. Search the codebase for `REPLACE IMAGE HERE` or `ADD YOUR PROJECT IMAGE HERE` to see
every spot in context.

### Full image list

| Registry key | Save to | Size / ratio | What it should be |
| --- | --- | --- | --- |
| `portrait` | `public/images/portrait.jpg` | 1200 × 1500 · 4:5 | Head-and-shoulders portrait, clean background. The most important image on the site. |
| `aboutPrimary` | `public/images/about-lab.jpg` | 1050 × 1400 · 3:4 | You working — at the bench, holding a board. Candid beats posed. |
| `aboutDetail` | `public/images/about-detail.jpg` | 800 × 800 · 1:1 | A tight detail shot: solder joints, a lens mount, CAD on screen. |
| `logoBascomPalmer` | `public/images/logos/bascom-palmer.png` | 400 × 400 | Transparent PNG or SVG, centred with a little padding. |
| `logoSSI` | `public/images/logos/stanford-space-initiative.png` | 400 × 400 | Same. |
| `logoStanford` | `public/images/logos/stanford.png` | 400 × 400 | Same. |
| `projIolCover` | `public/images/projects/iol-bench-cover.jpg` | 1600 × 1000 · 16:10 | The optical test bench, or a CAD render of it. |
| `projIolDetail1` | `public/images/projects/iol-bench-01.jpg` | 1600 × 1000 | CAD screenshot of the model-eye fixture. |
| `projIolDetail2` | `public/images/projects/iol-bench-02.jpg` | 1600 × 1000 | Captured halo / point-spread imagery. |
| `projAvionicsCover` | `public/images/projects/avionics-cover.jpg` | 1600 × 1000 | Close-up of a PCB. Dark surface, side lighting. |
| `projAvionicsDetail1` | `public/images/projects/avionics-01.jpg` | 1600 × 1000 | Schematic or board layout screenshot. |
| `projOctCover` | `public/images/projects/oct-cover.jpg` | 1600 × 1000 | OCT scan visualisation or analysis plot (de-identified). |
| `projYoungCodersCover` | `public/images/projects/young-coders-cover.jpg` | 1600 × 1000 | Teaching photo or a curriculum slide. |
| `projPortfolioCover` | `public/images/projects/portfolio-cover.jpg` | 1600 × 1000 | Screenshot of this website. |
| `sailingHero` | `public/images/sports/sailing-hero.jpg` | 1800 × 1200 · 3:2 | Your best sailing action shot. Anchors the whole section. |
| `sailingSecondary` | `public/images/sports/sailing-01.jpg` | 1000 × 1250 · 4:5 | Fleet racing or a start line. |
| `sailingDetail` | `public/images/sports/sailing-02.jpg` | 1000 × 1000 · 1:1 | Rigging, boat park, on the water at sunrise. |
| `wrestling` | `public/images/sports/wrestling-01.jpg` | 1000 × 1250 · 4:5 | Match or team photo. |
| `ogImage` | `public/images/og-image.jpg` | **exactly** 1200 × 630 | Shown when the site is shared on LinkedIn / iMessage / Slack. Keep any text large. |

**Two tips.** Export JPEGs at around 80% quality and keep each file under ~500 KB — Next.js
optimizes and resizes them for you, but a 6 MB original still slows the first build.
Use `.jpg` for photos and `.png`/`.svg` for logos that need transparency.

---

## 5. Adding a project

Projects are the visual centre of the site, and adding one is a content change only.

**Step 1 — register the images** in `src/content/images.ts`:

```ts
projMyNewThing: {
  src: "/images/projects/my-new-thing.jpg",
  alt: "Description of the image",
  hint: "Project cover — my new thing",
  size: "1600 × 1000 px · 16:10",
} satisfies ImageAsset,
```

**Step 2 — add the project** in `src/content/projects.ts`. Copy an existing block and edit:

```ts
{
  slug: "my-new-thing",              // unique, URL-safe
  title: "My New Thing",
  category: "Embedded Hardware",     // 2–4 words
  blurb: "One sentence on what it is and why it matters.",
  role: "Designer & builder",
  timeframe: "2027",
  context: "Stanford",               // "" for personal projects
  tech: ["C++", "STM32", "Fusion 360"],
  highlights: [
    "A concrete outcome",
    "Another concrete outcome",
  ],
  cover: IMAGES.projMyNewThing,
  gallery: [IMAGES.projMyNewThingDetail],   // optional
  links: [{ label: "GitHub", href: "https://github.com/..." }],
  caseStudy: [                              // optional
    { heading: "The problem", body: "…" },
    { heading: "What I built", body: "…" },
  ],
  featured: false,
},
```

**Two layouts, controlled by one field:**

- `featured: true` — large alternating layout with a big cover image. Best for your two or
  three strongest projects. More than three and nothing stands out.
- `featured: false` — compact card in the grid below.

**Notes:**

- Position in the array controls both display order and the `01`, `02`, `03` numbering.
- Omit `caseStudy` and the "Case study" button simply won't render.
- Any link with an empty `href` is hidden automatically, so leaving
  `{ label: "Publication", href: "" }` in place never creates a dead link — it just
  disappears until you fill it in.

---

## 6. Editing work experience

Open `src/content/experience.ts`. Each role is one block:

```ts
{
  org: "Organization Name",
  role: "Your Title",
  period: "Jun 2027 — Present",
  location: "City, ST",
  current: true,                    // adds the pulsing "current role" dot
  summary: "One or two sentences. This is the line people actually read.",
  bullets: [
    "A specific contribution.",
    "Another one.",
  ],
  tags: ["Tool", "Method", "Domain"],
  logo: IMAGES.logoSomething,       // or null for no logo
},
```

Keep the array in reverse-chronological order — the timeline renders exactly in the order
you write. Two to four bullets per role reads best; past four, people skim past all of them.

---

## 7. Editing the sports section

Open `src/content/sports.ts`. Four parts:

**`intro`** — the heading and opening paragraph.

**`stats`** — the big number strip. `value` renders very large, so keep it to a few
characters (`"3×"` reads better than `"3 championships"`). Three or four items works best.

```ts
{ value: "3×", label: "ILCA 4 Youth Worlds", note: "Three consecutive years" },
```

**`disciplines`** — one block per sport:

```ts
{
  sport: "Competitive Sailing",
  org: "ILCA 4 · US Sailing",
  period: "2014 — Present",
  description: "Two or three sentences in your own voice.",
  results: ["A result", "Another result"],
  image: IMAGES.sailingHero,
  feature: true,      // use on ONE discipline — it gets the large layout
},
```

**`coaching`** — the coaching and training list. Set it to `[]` to hide the block.

**`gallery`** — the photo strip at the bottom. Add or remove image entries freely.

To add a new result, just add a string to that discipline's `results` array. To add
statistics you don't have yet (regatta placings, race counts), add them to `stats`.

---

## 8. Editing skills, education, honors and leadership

All four live in `src/content/credentials.ts`:

- **`SKILL_GROUPS`** — the four columns. Add a group by copying a block; the grid adjusts.
- **`EDUCATION`** — schools, newest first.
- **`HONORS`** — awards and test scores, one string per line. You'll probably want to drop
  the SAT/ACT lines as you get further from admissions — just delete those strings.
- **`LEADERSHIP`** — volunteer and leadership roles.

Setting any of those arrays to `[]` hides its block and heading entirely.

---

## 9. Changing colors and fonts

### Colors

All of them are in one place: the `@theme` block at the top of `src/app/globals.css`.
Change a value and it updates everywhere.

```css
@theme {
  --color-paper: #fbfaf7;        /* page background          */
  --color-paper-alt: #f3f0ea;    /* alternating sections     */
  --color-ink: #101317;          /* headings                 */
  --color-ink-soft: #4a5158;     /* body copy                */
  --color-ink-mute: #868d95;     /* captions, labels         */
  --color-marine: #0f4a6b;       /* primary accent           */
  --color-marine-deep: #06212f;  /* dark Sports band         */
  --color-signal: #c6552f;       /* secondary accent         */
}
```

The two to experiment with first are `--color-marine` (primary accent — links, active nav,
stat numbers) and `--color-signal` (the small orange accents and section numbers). If you
change `--color-paper`, also update `themeColor` in `src/app/layout.tsx` so the mobile
browser chrome matches.

### Fonts

Three roles, wired up in `src/app/layout.tsx`:

| Role | Currently | Used for |
| --- | --- | --- |
| `display` | Instrument Serif | Large headlines |
| `sans` | Inter | Body copy and UI |
| `mono` | IBM Plex Mono | Small uppercase labels, dates, metadata |

To swap one, change the import and keep the same `variable` name:

```ts
import { Fraunces } from "next/font/google";

const display = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument-serif",   // keep the variable name
});
```

Any font on [Google Fonts](https://fonts.google.com) works. Good alternatives:
**display** — Fraunces, Newsreader, Playfair Display, Lora; **sans** — Geist, Manrope,
Figtree; **mono** — JetBrains Mono, Space Mono, Geist Mono.

### Type scale

Headline sizes are the `.display-xl` / `.display-lg` / `.display-md` classes in
`globals.css`. They use `clamp(min, preferred, max)` so they scale smoothly between phone
and desktop — change the numbers rather than adding breakpoints.

---

## 10. Adding your résumé PDF

Export your résumé as a PDF, name it **`resume.pdf`**, and drop it in **`public/`**.
The "Résumé" buttons in the header, hero, contact section and footer will start working
immediately — no code change needed.

To hide those buttons instead, set `resumeUrl: ""` in `src/content/site.ts`.

---

## 11. Deploying

### Vercel (easiest)

1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. **Add New → Project**, pick the repo, click **Deploy**. Vercel detects Next.js
   automatically — no settings to configure.
4. You get a live `*.vercel.app` URL. Add a custom domain under
   **Settings → Domains**.

Every push to `main` redeploys automatically. Pushing to any other branch gives you a
preview URL, which is handy for trying a redesign before it goes live.

After you have your real domain, update `SITE.meta.url` in `src/content/site.ts` so the
social share preview points at the right place.

### Netlify

Same flow — connect the repo, build command `npm run build`, and install the official
Next.js plugin when prompted.

### First-time git setup

```bash
git init
```

```bash
git add . && git commit -m "Initial site"
```

Then create an empty repo on GitHub and follow the two commands it shows you for pushing
an existing repository.

---

## 12. Troubleshooting

**Don't run `npm run build` while `npm run dev` is running.** They both write to the same
`.next` folder, so building mid-session pulls the running dev server's JavaScript and CSS
out from under it. The symptoms are confusing: unstyled text, animations frozen halfway,
elements that never fade in, 404s in the browser console. Stop the dev server first
(`Ctrl+C`), then build.

If it already happened, stop the dev server, delete the `.next` folder, and start again:

```bash
npm run dev
```

**The dev server won't start / weird module errors.** Delete `node_modules` and `.next`,
then reinstall:

```bash
npm install
```

**An image isn't showing.** Check three things: the file is inside `public/images/`, the
`src` in `images.ts` starts with `/images/` (not `/public/images/`), and the filename case
matches exactly — `Portrait.JPG` and `portrait.jpg` are different files once deployed.

**A section disappeared.** Its content array is probably empty. Sections hide themselves
when they have nothing to show.

**Text overflows or a headline wraps badly.** Shorten the line, or lower the middle value
in that heading's `clamp()` in `globals.css`.

**`npm run build` fails with a type error.** The message names the file and line. Most
often it's a missing comma between blocks, or a field name that doesn't match the type
definition at the top of the content file.
