import { activity } from "../../../constants/expertise"
import { profileLinks } from "../../../constants/site"
import { container } from "../../../helpers/cx"
import { Reveal, Stagger, StaggerItem } from "../../../shared/components/ui/Reveal"
import { SectionHeading } from "../../../shared/components/ui/SectionHeading"

export function Activity() {
  const profiles = profileLinks()

  return (
    <section id="activity" aria-labelledby="activity-title" className="border-y border-line bg-surface py-20 sm:py-28">
      <div className={container}>
        <Reveal>
          <SectionHeading id="activity" index="08 — Timeline" title="Recent work" />
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
          <Stagger as="ol" className="divide-y divide-line border-y border-line">
            {activity.map((item) => (
              <StaggerItem as="li" key={item.title} className="grid gap-2 py-7 sm:grid-cols-[14rem_1fr] sm:gap-8">
                <p className="text-sm text-accent">{item.period}</p>
                <div>
                  <h3 className="font-serif text-2xl font-medium tracking-[-0.03em] text-ink">{item.title}</h3>
                  <p className="mt-2 max-w-3xl text-sm leading-6 text-muted">{item.detail}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>
      </div>
    </section>
  )
}
