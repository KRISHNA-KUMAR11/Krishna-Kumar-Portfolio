import { roles } from "../../../constants/experience"
import { container } from "../../../helpers/cx"
import { Reveal } from "../../../shared/components/ui/Reveal"
import { SectionHeading } from "../../../shared/components/ui/SectionHeading"

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="border-y border-line py-16 sm:py-20">
      <div className={container}>
        <Reveal>
          <SectionHeading id="experience" title="Professional experience" />
          <ol className="grid gap-8">
            {roles.map((role) => (
              <li key={role.title} className="grid gap-3 border-l border-line pl-5">
                <div>
                  <h3 className="text-xl font-medium text-ink">{role.title}</h3>
                  <p className="mt-1 text-sm text-muted">
                    {role.company} · {role.period}
                  </p>
                </div>
                <ul className="list-disc space-y-2 pl-5 marker:text-accent">
                  {role.points.map((point) => (
                    <li key={point} className="text-sm leading-6 text-muted">
                      {point}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
