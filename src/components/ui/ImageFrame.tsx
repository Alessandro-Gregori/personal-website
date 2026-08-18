import Image from "next/image";
import type { ImageAsset } from "@/content/images";
import { ImagePlaceholderIcon } from "./Icons";

/* ==========================================================================
   IMAGE FRAME
   --------------------------------------------------------------------------
   One component handles every image on the site.

   If the image's  src  is filled in (in src/content/images.ts) it renders an
   optimised next/image. If  src  is still an empty string, it renders a
   labelled placeholder showing what belongs there and the recommended size.

   You never need to touch this file to change an image — edit
   src/content/images.ts instead.
   ========================================================================== */

type ImageFrameProps = {
  image: ImageAsset;
  /** CSS aspect-ratio, e.g. "4 / 5" or "16 / 10". */
  ratio?: string;
  /** Extra classes on the outer frame (rounding, borders, shadows). */
  className?: string;
  /** Responsive sizes hint for next/image. */
  sizes?: string;
  /** Set on the hero portrait only — loads it eagerly. */
  priority?: boolean;
  /** Use the light-on-dark placeholder treatment. */
  onDark?: boolean;
  /** Adds a slow zoom when a parent with class "group" is hovered. */
  zoomOnHover?: boolean;
  /** object-position, e.g. "center top" to favour faces near the top. */
  focus?: string;
  /**
   * For small frames (logos, thumbnails) — shows just the icon instead of the
   * icon plus label text, which wouldn't fit.
   */
  compactPlaceholder?: boolean;
};

export function ImageFrame({
  image,
  ratio = "4 / 5",
  className = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  onDark = false,
  zoomOnHover = false,
  focus = "center",
  compactPlaceholder = false,
}: ImageFrameProps) {
  const hasImage = image.src.trim().length > 0;

  return (
    <div
      className={`relative overflow-hidden ${
        onDark ? "bg-white/[0.04]" : "bg-paper-sunk"
      } ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {hasImage ? (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          style={{ objectPosition: focus }}
          className={`object-cover ${
            zoomOnHover
              ? "transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.045]"
              : ""
          }`}
        />
      ) : (
        <Placeholder image={image} onDark={onDark} compact={compactPlaceholder} />
      )}
    </div>
  );
}

/* --------------------------------------------------------------------------
   The placeholder state. Intentionally designed rather than an empty grey
   box, so an unfinished site still looks deliberate.
   -------------------------------------------------------------------------- */
function Placeholder({
  image,
  onDark,
  compact,
}: {
  image: ImageAsset;
  onDark: boolean;
  compact: boolean;
}) {
  /* Small frames (logos) only have room for the icon. */
  if (compact) {
    return (
      <div
        className={`absolute inset-0 flex items-center justify-center ${
          onDark ? "grid-texture-light" : "grid-texture"
        }`}
        title={`${image.hint} — ${image.size}`}
      >
        <ImagePlaceholderIcon
          className={`h-5 w-5 ${onDark ? "text-white/35" : "text-ink-mute/55"}`}
        />
      </div>
    );
  }

  return (
    <div
      className={`absolute inset-0 flex flex-col items-center justify-center gap-2.5 p-5 text-center ${
        onDark ? "grid-texture-light" : "grid-texture"
      }`}
    >
      {/* Corner ticks — a small nod to a camera viewfinder. */}
      <Ticks onDark={onDark} />

      <ImagePlaceholderIcon
        className={`h-6 w-6 ${onDark ? "text-white/35" : "text-ink-mute/60"}`}
      />
      <p
        className={`font-sans text-[0.78rem] font-medium leading-snug ${
          onDark ? "text-white/70" : "text-ink-soft"
        }`}
      >
        {image.hint}
      </p>
      <p
        className={`font-mono text-[0.62rem] tracking-[0.1em] ${
          onDark ? "text-white/40" : "text-ink-mute"
        }`}
      >
        {image.size}
      </p>
    </div>
  );
}

function Ticks({ onDark }: { onDark: boolean }) {
  const color = onDark ? "border-white/25" : "border-hairline-strong";
  return (
    <>
      <span className={`pointer-events-none absolute left-3 top-3 h-3 w-3 border-l border-t ${color}`} />
      <span className={`pointer-events-none absolute right-3 top-3 h-3 w-3 border-r border-t ${color}`} />
      <span className={`pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b border-l ${color}`} />
      <span className={`pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b border-r ${color}`} />
    </>
  );
}
