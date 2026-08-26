import type { ImageAsset } from "@/content/images";

/* ==========================================================================
   LOGO
   --------------------------------------------------------------------------
   Renders an organization logo at a FIXED HEIGHT with automatic width, so
   every logo keeps its own proportions.

   Why this is separate from <ImageFrame />:
   ImageFrame is built for photographs — it crops to fill a fixed aspect ratio
   (object-cover). Logos must never be cropped, and they come in very
   different shapes: the Stanford Space Initiative mark is square (1:1) while
   the Bascom Palmer lockup is over three times wider than tall (3.3:1).
   Forcing both into one aspect ratio makes one of them illegible.

   Why a plain <img> instead of next/image:
   Logos are tiny transparent PNGs (13-19 KB) displayed about 28px tall.
   next/image needs explicit width and height, and any declared aspect that
   doesn't match the real file makes the element the wrong shape until the
   image loads — with wildly different logo shapes there is no single correct
   pair to declare. It also generated a 3840px variant of a small logo. A
   plain <img> uses the file's own aspect ratio automatically, loads
   immediately, and skips optimization that would save nothing here.

   If the logo has no file yet this renders NOTHING rather than an empty
   placeholder box — a blank bordered square next to a job title reads like a
   bug, whereas absence just looks clean. The available slots are documented
   in src/content/images.ts.

   Use transparent PNGs, trimmed close to the artwork.
   ========================================================================== */

type LogoProps = {
  image: ImageAsset | null;
  /** Tailwind height class, e.g. "h-8". Width follows the logo's proportions. */
  className?: string;
};

export function Logo({ image, className = "h-8" }: LogoProps) {
  if (!image || image.src.trim().length === 0) return null;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={image.src}
      alt={image.alt}
      loading="lazy"
      decoding="async"
      className={`w-auto object-contain object-left ${className}`}
    />
  );
}
