import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

/* ==========================================================================
   SECTION HEADING
   --------------------------------------------------------------------------
   Every section on the site opens with this, which is what makes the page
   feel like one document rather than a stack of unrelated blocks.

   Structure:  01 / EYEBROW ————————
               Big serif title
               Optional supporting line
   ========================================================================== */

type SectionHeadingProps = {
  /** Zero-padded section number, e.g. "02". */
  index: string;
  eyebrow: string;
  title: ReactNode;
  lede?: string;
  onDark?: boolean;
  /** Constrains the title width. Long titles read better narrower. */
  maxWidth?: string;
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  lede,
  onDark = false,
  maxWidth = "max-w-3xl",
}: SectionHeadingProps) {
  return (
    <div className="mb-12 md:mb-16">
      <Reveal>
        <div className="flex items-center gap-4">
          <span className={`eyebrow ${onDark ? "text-signal-soft" : "text-signal"}`}>
            {index}
          </span>
          <span className={`eyebrow ${onDark ? "text-white/60" : "text-ink-mute"}`}>
            {eyebrow}
          </span>
          <span
            className={`h-px flex-1 ${onDark ? "bg-white/15" : "bg-hairline"}`}
            aria-hidden="true"
          />
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <h2
          className={`display display-lg mt-6 ${maxWidth} ${
            onDark ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </h2>
      </Reveal>

      {lede && (
        <Reveal delay={0.15}>
          <p className={`lede mt-6 max-w-2xl ${onDark ? "text-white/72" : ""}`}>{lede}</p>
        </Reveal>
      )}
    </div>
  );
}
