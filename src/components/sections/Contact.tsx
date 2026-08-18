import { SITE } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight, DownloadIcon, MailIcon, PhoneIcon } from "@/components/ui/Icons";

/* ==========================================================================
   CONTACT
   --------------------------------------------------------------------------
   The closing statement. Large serif heading, one clear primary action
   (email), with everything else secondary.

   TO EDIT: src/content/site.ts -> SITE.contact  (heading, blurb, email, phone)
   TO EDIT SOCIAL LINKS: src/content/site.ts -> SITE.socials
     Any link with an empty href is hidden, so there are never dead links.
   ========================================================================== */

export function Contact() {
  const socials = SITE.socials.filter((s) => s.href.trim().length > 0);

  return (
    <section id="contact" className="section-pad relative overflow-hidden border-t border-hairline">
      <div className="grid-texture mask-fade absolute inset-0 opacity-70" aria-hidden="true" />
      <div
        className="absolute -bottom-40 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full opacity-[0.06] blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-marine), transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="shell relative">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* ================= LEFT: the ask ================= */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="eyebrow text-signal">06</span>
                <span className="eyebrow text-ink-mute">{SITE.contact.eyebrow}</span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="display display-xl mt-6 text-ink">{SITE.contact.heading}</h2>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="lede mt-7 max-w-xl">{SITE.contact.blurb}</p>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a href={`mailto:${SITE.contact.email}`} className="btn btn-primary group">
                  <MailIcon />
                  {SITE.contact.email}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                {SITE.resumeUrl && (
                  <a
                    href={SITE.resumeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-ghost"
                  >
                    <DownloadIcon />
                    Résumé
                  </a>
                )}
              </div>
            </Reveal>
          </div>

          {/* ================= RIGHT: details ================= */}
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <dl className="divide-y divide-hairline overflow-hidden rounded-xl border border-hairline bg-white">
                <ContactRow
                  icon={<MailIcon className="h-4 w-4 text-marine" />}
                  label="Email"
                  value={SITE.contact.email}
                  href={`mailto:${SITE.contact.email}`}
                />
                {SITE.contact.phone && (
                  <ContactRow
                    icon={<PhoneIcon className="h-4 w-4 text-marine" />}
                    label="Phone"
                    value={SITE.contact.phone}
                    href={`tel:${SITE.contact.phone.replace(/[^\d+]/g, "")}`}
                  />
                )}
                <ContactRow label="Location" value={SITE.location} />

                {/* Social links. Add URLs in SITE.socials to make these appear. */}
                {socials.map((social) => (
                  <ContactRow
                    key={social.label}
                    label={social.label}
                    value={social.handle || social.label}
                    href={social.href}
                    external
                  />
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="mt-6 font-mono text-[0.62rem] uppercase leading-relaxed tracking-[0.12em] text-ink-mute">
                Open to research, internships and hardware collaborations
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
  external = false,
}: {
  icon?: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <>
      <dt className="flex items-center gap-2.5 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-ink-mute">
        {icon}
        {label}
      </dt>
      <dd className="mt-2 flex items-center gap-1.5 font-sans text-[0.95rem] text-ink">
        {value}
        {href && (
          <ArrowUpRight className="h-3.5 w-3.5 text-ink-mute transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </dd>
    </>
  );

  if (!href) {
    return <div className="p-5">{content}</div>;
  }

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="group block p-5 transition-colors duration-300 hover:bg-paper-alt"
    >
      {content}
    </a>
  );
}
