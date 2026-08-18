import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Sports } from "@/components/sections/Sports";
import { Credentials } from "@/components/sections/Credentials";
import { Contact } from "@/components/sections/Contact";

/* ==========================================================================
   HOMEPAGE
   --------------------------------------------------------------------------
   The whole site is one scrolling page. This file only decides the ORDER of
   the sections — all copy lives in src/content/.

   TO REORDER SECTIONS: move the components below, then match the order in
   SITE.nav (src/content/site.ts) so the navigation agrees.

   TO REMOVE A SECTION: delete its line here and its entry in SITE.nav.

   Section numbers (01, 02, …) are written into each section component's
   SectionHeading, so update those if you reorder.
   ========================================================================== */

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Sports />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
