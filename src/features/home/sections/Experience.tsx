import { roles } from "../../../constants/experience"
import { container } from "../../../helpers/cx"
import { Reveal, Stagger, StaggerItem } from "../../../shared/components/ui/Reveal"
import { SectionHeading } from "../../../shared/components/ui/SectionHeading"

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="border-y border-line bg-surface py-20 sm:py-28">
      <div className={container}>
        <Reveal>
          <SectionHeading id="experience" index="04 — Career" title="Professional experience" />
          <Stagger as="ol" className="border-t border-line">
            {roles.map((role) => (
              <StaggerItem as="li" key={role.title} className="grid gap-4 border-b border-line py-8 lg:grid-cols-[16rem_1fr]">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent">{role.period}</p>
                  <p className="mt-2 text-sm text-muted">{role.company}</p>
                </div>
                <div>
                  <h3 className="font-serif text-3xl font-medium tracking-[-0.03em] text-ink sm:text-4xl">{role.title}</h3>
                  <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-accent">
                    {role.points.map((point) => (
                      <li key={point} className="text-sm leading-6 text-muted">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>
      </div>
    </section>
  )
}
