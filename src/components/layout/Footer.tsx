import { SITE } from "@/content/site";
import { ArrowUpRight } from "@/components/ui/Icons";

/* ==========================================================================
   FOOTER
   --------------------------------------------------------------------------
   Deliberately quiet: name, a back-to-top control, the nav repeated, and a
   copyright line. The year updates itself.

   TO EDIT: src/content/site.ts (name, role, nav, socials)
   ========================================================================== */

export function Footer() {
  const year = new Date().getFullYear();
  const socials = SITE.socials.filter((s) => s.href.trim().length > 0);

  return (
    <footer className="border-t border-hairline bg-marine-deep">
      <div className="shell py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          {/* ---- Identity ---- */}
          <div>
            <p className="display text-[2.4rem] leading-none text-white">{SITE.name}</p>
            <p className="mt-3 font-mono text-[0.64rem] uppercase tracking-[0.16em] text-white/45">
              {SITE.role}
            </p>
            <a
              href={`mailto:${SITE.contact.email}`}
              className="link-underline mt-5 inline-block font-sans text-[0.9rem] text-signal-soft"
            >
              {SITE.contact.email}
            </a>
          </div>

          {/* ---- Link columns ---- */}
          <div className="flex gap-14 sm:gap-20">
            <nav aria-label="Footer">
              <p className="eyebrow text-white/35">Sections</p>
              <ul className="mt-4 space-y-2.5">
                {SITE.nav.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="font-sans text-[0.88rem] text-white/70 transition-colors duration-300 hover:text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="eyebrow text-white/35">Elsewhere</p>
              <ul className="mt-4 space-y-2.5">
                {socials.length > 0 ? (
                  socials.map((social) => (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 font-sans text-[0.88rem] text-white/70 transition-colors duration-300 hover:text-white"
                      >
                        {social.label}
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    </li>
                  ))
                ) : (
                  /* Shown until you add URLs to SITE.socials in
                     src/content/site.ts. Delete nothing — just fill them in. */
                  <li className="font-sans text-[0.82rem] text-white/35">
                    Add your profile links in
                    <br />
                    <code className="font-mono text-[0.75rem]">content/site.ts</code>
                  </li>
                )}
                {SITE.resumeUrl && (
                  <li>
                    <a
                      href={SITE.resumeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 font-sans text-[0.88rem] text-white/70 transition-colors duration-300 hover:text-white"
                    >
                      Résumé
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* ---- Baseline ---- */}
        <div className="mt-14 flex flex-col-reverse items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-white/35">
            © {year} {SITE.name}
          </p>
          <a
            href="#top"
            className="group inline-flex items-center gap-2 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-white/50 transition-colors duration-300 hover:text-white"
          >
            Back to top
            <span className="transition-transform duration-300 group-hover:-translate-y-0.5">
              <ArrowUpRight className="h-3 w-3 -rotate-45" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
