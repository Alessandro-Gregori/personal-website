import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Instrument_Serif, Inter } from "next/font/google";
import { SITE } from "@/content/site";
import { IMAGES } from "@/content/images";
import "./globals.css";

/* ==========================================================================
   FONTS  —  CHANGE TYPEFACES HERE
   --------------------------------------------------------------------------
   Three roles:
     display  large serif headlines
     sans     body copy and UI
     mono     small uppercase labels, dates, metadata

   TO SWAP A TYPEFACE: import a different font from "next/font/google" and
   assign it to the same CSS variable. Nothing else needs to change —
   globals.css maps these variables to the Tailwind font utilities.

   Good display alternatives: Fraunces, Newsreader, Playfair_Display, Lora
   Good sans alternatives:    Geist, Manrope, Figtree, Work_Sans
   Good mono alternatives:    JetBrains_Mono, Space_Mono, Geist_Mono
   ========================================================================== */

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-instrument-serif",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-plex-mono",
});

/* ==========================================================================
   PAGE METADATA
   Edit the text in src/content/site.ts -> SITE.meta
   ========================================================================== */
export const metadata: Metadata = {
  metadataBase: new URL(SITE.meta.url),
  title: SITE.meta.title,
  description: SITE.meta.description,
  keywords: SITE.meta.keywords,
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  openGraph: {
    type: "website",
    title: SITE.meta.title,
    description: SITE.meta.description,
    url: SITE.meta.url,
    siteName: SITE.name,
    /* The share image only gets attached once you've added the file.
       Drop it in /public/images/og-image.jpg and set the src in
       src/content/images.ts -> IMAGES.ogImage */
    images: IMAGES.ogImage.src
      ? [{ url: IMAGES.ogImage.src, width: 1200, height: 630, alt: IMAGES.ogImage.alt }]
      : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.meta.title,
    description: SITE.meta.description,
    images: IMAGES.ogImage.src ? [IMAGES.ogImage.src] : undefined,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#fbfaf7",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${inter.variable} ${plexMono.variable}`}
    >
      <body>
        {/* Keyboard users can jump straight past the nav. */}
        <a
          href="#about"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:text-sm focus:text-paper"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
