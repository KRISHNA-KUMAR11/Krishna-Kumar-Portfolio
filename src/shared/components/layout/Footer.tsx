import { sections, site, profileLinks } from "../../../constants/site"
import { container } from "../../../helpers/cx"
import { SectionLink } from "../navbar/SectionLink"

export function Footer() {
  const profiles = profileLinks()

  return (
    <footer className="border-t border-line py-12">
      <div className={cxFooter()}>
        <div>
          <p className="font-serif text-2xl text-ink">{site.name}</p>
          <p className="mt-1 text-sm text-muted">
            {site.role} at {site.company}
          </p>
        </div>
        <ul className="flex flex-wrap gap-x-4 gap-y-2">
          <li>
            <a className="text-sm text-ink underline decoration-line underline-offset-4" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </li>
          <li>
            <a className="text-sm text-ink underline decoration-line underline-offset-4" href={site.phoneHref}>
              {site.phone}
            </a>
          </li>
          {profiles.map((profile) => (
            <li key={profile.href}>
              <a
                className="text-sm text-ink underline decoration-line underline-offset-4"
                href={profile.href}
                rel="noreferrer"
                target="_blank"
              >
                {profile.label}
              </a>
            </li>
          ))}
        </ul>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            {sections.map((section) => (
              <li key={section.id}>
                <SectionLink id={section.id} label={section.label} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}

function cxFooter(): string {
  return `${container} grid gap-8`
}
