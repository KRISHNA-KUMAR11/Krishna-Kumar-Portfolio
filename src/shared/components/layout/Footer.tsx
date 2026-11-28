import { sections, site, profileLinks } from "../../../constants/site"
import { container } from "../../../helpers/cx"
import { SectionLink } from "../navbar/SectionLink"

export function Footer() {
  const profiles = profileLinks()

  return (
    <footer className="border-t border-line bg-surface">
      <div className={`${container} grid gap-12 py-16 lg:grid-cols-12`}>
        <div className="lg:col-span-5">
          <p className="font-serif text-[clamp(2.4rem,5vw,4.5rem)] font-medium leading-[0.9] tracking-[-0.04em] text-ink">
            {site.name}
          </p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-muted">
            {site.role} at {site.company}. APIs, access control, and the products behind them.
          </p>
        </div>
        <div className="lg:col-span-3">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted">Contact</p>
          <ul className="mt-4 grid gap-2">
            <li>
              <a className="text-sm text-ink" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
            <li>
              <a className="text-sm text-ink" href={site.phoneHref}>
                {site.phone}
              </a>
            </li>
            {profiles.map((profile) => (
              <li key={profile.href}>
                <a className="text-sm text-ink" href={profile.href} rel="noreferrer" target="_blank">
                  {profile.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <nav aria-label="Footer" className="lg:col-span-4">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted">On this site</p>
          <ul className="mt-4 grid grid-cols-2 gap-2">
            {sections.map((section) => (
              <li key={section.id}>
                <SectionLink id={section.id} label={section.label} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-line">
        <div className={`${container} flex flex-wrap items-center justify-between gap-3 py-5 text-xs text-muted`}>
          <p>© {new Date().getFullYear()} {site.name}</p>
          <p>{site.company}</p>
        </div>
      </div>
    </footer>
  )
}
