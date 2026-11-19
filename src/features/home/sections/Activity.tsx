import { activity } from "../../../constants/expertise"
import { profileLinks } from "../../../constants/site"
import { container } from "../../../helpers/cx"
import { Reveal } from "../../../shared/components/ui/Reveal"
import { SectionHeading } from "../../../shared/components/ui/SectionHeading"

export function Activity() {
  const profiles = profileLinks()

  return (
    <section id="activity" aria-labelledby="activity-title" className="border-y border-line py-16 sm:py-20">
      <div className={container}>
        <Reveal>
          <SectionHeading id="activity" title="Recent work" />
          {profiles.length > 0 ? (
            <ul className="mb-6 flex flex-wrap gap-4">
              {profiles.map((profile) => (
                <li key={profile.href}>
                  <a className="text-sm text-ink underline decoration-line underline-offset-4" href={profile.href} rel="noreferrer" target="_blank">
                    {profile.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
          <ol className="divide-y divide-line border-y border-line">
            {activity.map((item) => (
              <li key={item.title} className="py-5">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="text-base font-medium text-ink">{item.title}</h3>
                  <p className="text-sm text-muted">{item.period}</p>
                </div>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted">{item.detail}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
